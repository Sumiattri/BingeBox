import { useState } from "react";
import { addProfileToFirestore } from "../../../firebase/firestoreUtils";
import { useNavigate } from "react-router-dom";
import SpinnerOverlay2 from "../../../utils/SpinnerOverlay2";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const avatars = [
  "image.png",
  "image1.png",
  "image2.png",
  "image3.png",
  "image7.png",
  "image8.png",
];

function AddProfileModal({ setIsModalOpen, fetchProfiles }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();
  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName.trim()) {
      return null;
    }
    if (fullName.length > 20) {
      return setErrorMsg("Name is too long (max 20 characters)");
    }

    const profileData = {
      firstName,
      lastName,
      avatar: selectedAvatar,
    };
    setIsLoading(true);
    try {
      const id = await addProfileToFirestore(profileData);
      await fetchProfiles(); // ✅ This updates the profiles in pare
      const profile = { id, ...profileData };
      localStorage.setItem("profile", JSON.stringify(profile));
      navigate("/profiles");
    } catch (error) {
      console.error("Error creating profile:", error);
    } finally {
      setIsLoading(false);
    }

    setIsModalOpen(false);
  };

  return (
    <>
      {isLoading && <SpinnerOverlay2 />}
      <div
        onClick={() => setIsModalOpen(false)}
        className=" bg-black absolute inset-0 z-20"
      ></div>
      <motion.div
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="  sm:h-[37rem] h-auto lg:max-w-[50rem] md:w-[40rem] w-[90%] bg-[#161616] border border-[#636262] rounded-md absolute sm:top-30 top-25 left-1/2 -translate-x-1/2 z-50 flex flex-col px-8 sm:py-0 py-5 gap-10 justify-center"
      >
        <RxCross1
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setIsModalOpen(false)}
        />
        <div className="">
          {" "}
          <h1 className="text-white text-3xl font-semibold">Add a profile</h1>
          <p className="text-white ">
            Add a profile for another person watching
          </p>
        </div>
        <div className="  flex items-center justify-between gap-5 md:flex-row flex-col ">
          <div className="sm:w-[47%] w-full ">
            <form action="" className="flex flex-col  w-full gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="border border-[#636262] text-white w-full p-2 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-[#636262]  w-full p-2 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errorMsg && (
                <p className="text-red-500 text-sm mb-2">{errorMsg}</p>
              )}
            </form>
          </div>
          <div className=" md:max-w-[50%] w-full  ">
            <p className="mb-3 ">Choose Avatar</p>
            <div className="flex gap-4 justify-center  flex-wrap ">
              {avatars.map((avatar) => (
                <img
                  key={avatar}
                  src={`/${avatar}`}
                  alt={avatar}
                  onClick={() => setSelectedAvatar(avatar)}
                  className={`w-16 h-16 cursor-pointer border-2 rounded-full hover:scale-105 active:scale-90 transition-transform duration-200 ${
                    selectedAvatar === avatar
                      ? "border-red-600"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="text-[#636262]" />
        <div className=" w-full">
          <button
            onClick={handleSubmit}
            className={` ${
              !firstName || !selectedAvatar
                ? "bg-[#FFFFFF] cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 hover:cursor-pointer active:bg-red-700 transition-all duration-300"
            } text-black font-semibold  transition-colors py-3   w-full rounded`}
          >
            Continue
          </button>{" "}
          <br />
          <button
            onClick={() => {
              setTimeout(() => setIsModalOpen(false), 300);
            }}
            className="text-white text-xl mt-4 w-full hover:bg-gray-700 active:bg-gray-700 transition-all duration-300 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default AddProfileModal;
