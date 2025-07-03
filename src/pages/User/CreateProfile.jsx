import { useState } from "react";
import { addProfileToFirestore } from "../../firebase/firestoreUtils";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../../components/AuthUserComp/AuthNavbar";
import SpinnerOverlay from "../../utils/SpinnerOverlay";

const avatars = [
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABT9wBL4i4yFGrzSmwSuCMGZ3xf0v-MGTX2aBnMcKMXV-FF1FDo5jFK78YT6FubASMkAanbDSHqHHJLJfTyEVhlfrTnyYYULImQ.png?r=e6e",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUcrlRM8xyfkeGhiHqMFbXm9Fu-GwxdUMvjjlox3gnVq0BOeram_lFujgH17JFQ3H4_egJmrav0rdoUcSag5RXS9qSBfz9FgSw.png?r=bd7",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABROQy5lSPvS3yQujqdCzyVOaji3KgWHRsgV3aVeOtpcuCK-v0CYpovhSW4PzlOHgERpWW-o9hWsH8NKPf3Td5jmyx3WShvXCVg.png?r=1d4",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTN9tk_3sR6JTS09CPqTLlGenrUG8nMbyMNcMMx1n0ZJd9xmo0VyDd4HQ9A9roIohRLSaJnUaoXtgnbG0aP0TT7xCbzVf0d8Uw.png?r=54c",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABQYlg7rw1jw8D4qZVkZSRxxRxXOwsY6wiZLThDOU9YkDTz8PyAUd1_98emUrSzgoPSTjDiMgattAyGUJoEnjCeNkH-3rlvE4Tg.png?r=eea",
  "https://occ-0-300-299.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbBdWEzsqtpcYRfW0oClQ8jdJx6uHK5oNiHQPNZrUhrT5-2gizvuV0zRpgYoXI-hS7JqdZ1Q_mCWUUWlaNx4pHv1c__GSpT8Gg.png?r=cad",
];

const CreateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();
  const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const profile = { id, ...profileData };
      localStorage.setItem("profile", JSON.stringify(profile));

      navigate("/profiles", { replace: true });

      setIsLoading(false);
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <>
      <div>
        {isLoading && <SpinnerOverlay />}
        <AuthNavbar />
        <div className=""></div>
        <hr className="text-gray-200" />
        <div className="h-[80vh] w-full flex justify-center items-center  ">
          <div className=" h-[35rem] w-[35rem] flex flex-col px-10  gap-2">
            <p>Step 3 of 3</p>
            <h1 className="text-3xl font-bold mb-6">Add Your Profile :</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-black w-full p-2 rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-black w-full p-2 rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
              <div>
                <p className="mb-2">Choose Avatar:</p>
                <div className="flex gap-4 sm:flex-nowrap flex-wrap max-w-99 ">
                  {avatars.map((avatar) => (
                    <img
                      key={avatar}
                      // src={`/${avatar}`}
                      src={avatar}
                      alt={avatar}
                      onClick={() => setSelectedAvatar(avatar)}
                      className={`w-16 h-16 cursor-pointer border-2 rounded hover:scale-110 active:scale-90 transition-transform duration-200 ${
                        selectedAvatar === avatar
                          ? "border-red-600"
                          : "border-transparent"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className={`mt-4 w-full  ${
                  !firstName || !selectedAvatar
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 hover:cursor-pointer"
                } text-white  transition-colors p-2 rounded`}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
