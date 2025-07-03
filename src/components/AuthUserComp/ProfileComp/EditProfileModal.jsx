import { useState } from "react";
import {
  updateProfileInFirestore,
  deleteUserProfile,
} from "../../../firebase/firestoreUtils";

import { RiDeleteBinLine } from "react-icons/ri";
import SpinnerOverlay2 from "../../../utils/SpinnerOverlay2";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const avatars = [
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABT9wBL4i4yFGrzSmwSuCMGZ3xf0v-MGTX2aBnMcKMXV-FF1FDo5jFK78YT6FubASMkAanbDSHqHHJLJfTyEVhlfrTnyYYULImQ.png?r=e6e",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUcrlRM8xyfkeGhiHqMFbXm9Fu-GwxdUMvjjlox3gnVq0BOeram_lFujgH17JFQ3H4_egJmrav0rdoUcSag5RXS9qSBfz9FgSw.png?r=bd7",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABROQy5lSPvS3yQujqdCzyVOaji3KgWHRsgV3aVeOtpcuCK-v0CYpovhSW4PzlOHgERpWW-o9hWsH8NKPf3Td5jmyx3WShvXCVg.png?r=1d4",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTN9tk_3sR6JTS09CPqTLlGenrUG8nMbyMNcMMx1n0ZJd9xmo0VyDd4HQ9A9roIohRLSaJnUaoXtgnbG0aP0TT7xCbzVf0d8Uw.png?r=54c",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQYlg7rw1jw8D4qZVkZSRxxRxXOwsY6wiZLThDOU9YkDTz8PyAUd1_98emUrSzgoPSTjDiMgattAyGUJoEnjCeNkH-3rlvE4Tg.png?r=eea",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbBdWEzsqtpcYRfW0oClQ8jdJx6uHK5oNiHQPNZrUhrT5-2gizvuV0zRpgYoXI-hS7JqdZ1Q_mCWUUWlaNx4pHv1c__GSpT8Gg.png?r=cad",
];

function EditProfileModal({
  setEditModalOpen,
  fetchProfiles,
  selectedProfile,
}) {
  const [firstName, setFirstName] = useState(selectedProfile.firstName);
  const [lastName, setLastName] = useState(selectedProfile.lastName);
  const [selectedAvatar, setSelectedAvatar] = useState(selectedProfile.avatar);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState();

  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  const handleUpdate = async () => {
    if (!firstName.trim()) return setErrorMsg("First name is required");
    if (fullName.length > 20) {
      return setErrorMsg("Name is too long (max 20 characters)");
    }

    const updatedData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      avatar: selectedAvatar,
    };
    setIsLoading(true);
    try {
      await updateProfileInFirestore(selectedProfile.id, updatedData);
      fetchProfiles();
      // setChange(true);
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteUserProfile(selectedProfile.id);
      localStorage.removeItem("profile");
      fetchProfiles();
      // setChange(true);
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error deleting profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <SpinnerOverlay2 />}
      <div
        onClick={() => setEditModalOpen(false)}
        className=" bg-black absolute inset-0 z-20"
      ></div>
      <motion.div
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className=" sm:h-[37rem] h-auto lg:max-w-[50rem]  md:w-[40rem] w-[90%] bg-[#161616] border  border-[#404040] rounded-md absolute sm:top-30 top-15 left-1/2 -translate-x-1/2 z-50 flex flex-col px-8 sm:py-0 py-5 gap-6   justify-center"
      >
        <RxCross1
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setEditModalOpen(false)}
        />
        <div className=" ">
          {" "}
          <h1 className="text-white text-3xl font-semibold">Add a profile</h1>
          <p className="text-white ">
            Add a profile for another person watching
          </p>
        </div>
        <div className="  flex items-center justify-between gap-5 md:flex-row   flex-col ">
          <div className="sm:w-[47%] w-full ">
            <form action="" className="flex flex-col  w-full gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-[#404040] text-white w-full p-2 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-[#404040] w-full p-2 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errorMsg && (
                <p className="text-red-500 text-sm mb-2">{errorMsg}</p>
              )}
            </form>
          </div>
          <div className=" md:max-w-[50%] w-full ">
            <p className="mb-2">Choose Avatar:</p>
            <div className="flex gap-4 justify-center  flex-wrap ">
              {avatars.map((avatar) => (
                <img
                  key={avatar}
                  src={avatar}
                  alt={avatar}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`w-16 h-16 cursor-pointer border-2 rounded hover:scale-105 active:scale-90 transition-transform duration-200 ${
                    selectedAvatar === avatar
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="text-[#404040]" />
        <div className=" w-full">
          <button
            onClick={handleUpdate}
            className={` ${
              !firstName || !selectedAvatar
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 hover:cursor-pointer active:bg-red-700 transition-all duration-300"
            } text-white  transition-colors py-3 w-full rounded`}
          >
            Continue
          </button>{" "}
          <br />
          <button
            onClick={() => setTimeout(() => setEditModalOpen(false), 300)}
            className="text-white text-3xl mt-2 w-full hover:bg-gray-700 active:bg-gray-700 transition-all duration-300 py-2 rounded-sm"
          >
            Cancel
          </button>
        </div>
        <div
          className=" w-full  py-2 rounded-sm  hover:bg-gray-700 -mt-5 active:bg-gray-700 transition-all duration-300"
          onClick={handleDelete}
        >
          {" "}
          <RiDeleteBinLine className="mx-auto text-4xl text-gray-300" />
        </div>
      </motion.div>
    </>
  );
}

export default EditProfileModal;
