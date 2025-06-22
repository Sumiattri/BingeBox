import { useState } from "react";
import { addProfileToFirestore } from "../../firebase/firestoreUtils";
import { useNavigate } from "react-router-dom";
import AuthNavbar from "../../components/AuthUserComp/AuthNavbar";

const avatars = [
  "image.png",
  "image1.png",
  "image2.png",
  "image3.png",
  "image7.png",
  "image8.png",
];

const CreateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]);
  const [errorMsg, setErrorMsg] = useState("");

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

    //     export const addProfileToFirestore = async (profileData) => {
    //   const user = auth.currentUser;

    //   if (!user) throw new Error("User not logged in");

    //   const profilesRef = collection(doc(db, "users", user.uid), "profiles");

    //   const docRef = await addDoc(profilesRef, profileData);
    //   return docRef.id; // Return profile ID for reference
    // };

    try {
      const id = await addProfileToFirestore(profileData);
      const profile = { id, ...profileData };
      localStorage.setItem("profile", JSON.stringify(profile));
      navigate("/profiles", { replace: true });
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  return (
    <>
      <div>
        <AuthNavbar />
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
