import ProfileCard from "../../components/AuthUserComp/ProfileComp/ProfileCard";

import AddProfileModal from "../../components/AuthUserComp/ProfileComp/AddProfileModal";
import EditProfileModal from "../../components/AuthUserComp/ProfileComp/EditProfileModal";

import { useEffect, useState } from "react";
import { getUserProfiles } from "../../firebase/firestoreUtils";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import SpinnerOverlay from "../../utils/SpinnerOverlay";
import { useDispatch } from "react-redux";
import { setAllProfiles } from "../../features/profileSlice";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isManageMode, setIsManageMode] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const dispatch = useDispatch();

  function fetchProfiles() {
    setLoading(true);
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userProfiles = await getUserProfiles(user.uid);
          setProfiles(userProfiles);
          localStorage.setItem("allprofiles", JSON.stringify(userProfiles));
          dispatch(setAllProfiles(userProfiles));
        } catch (err) {
          console.error("Error fetching user profiles:", err);
          setError("Failed to load profiles. Please try again.");
          setProfiles([]);
        } finally {
          setLoading(false);
        }
      }
    });
  }

  // In useEffect
  useEffect(() => {
    const unsubscribe = fetchProfiles();

    return () => {
      unsubscribe();
    };
  }, [auth]);

  if (loading) return <SpinnerOverlay />;

  return (
    <div className="text-center h-full w-full bg-[#141414] text-white   flex  flex-col items-center justify-center relative">
      <div className="absolute top-0 w-full h-17 bg-gradient-to-b from-[#080808] to-transparent z-10 " />

      <div className=" h-[24rem] max-w-full  ">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-medium ">
          Who's Watching?
        </h1>
        <ProfileCard
          setIsModalOpen={setIsModalOpen}
          profiles={profiles}
          fetchProfiles={fetchProfiles}
          isManageMode={isManageMode}
          setEditModalOpen={setEditModalOpen}
          setSelectedProfile={setSelectedProfile}
        />

        {isModalOpen && (
          <AddProfileModal
            setIsModalOpen={setIsModalOpen}
            fetchProfiles={fetchProfiles}
          />
        )}
        {editModalOpen && (
          <EditProfileModal
            setEditModalOpen={setEditModalOpen}
            fetchProfiles={fetchProfiles}
            selectedProfile={selectedProfile}
          />
        )}
        <button
          onClick={() => setIsManageMode(!isManageMode)}
          className={`text-[#808080] cursor-pointer ${isManageMode ? "hover:text-white" : "hover:text-white "} border ${isManageMode ? "hover:bg-red-700 hover:text-white" : "hover:border-white"}  border-[#808080] ${isManageMode ? "bg-white text-black" : "bg-none"}  transition-colors duration-200 ${isManageMode ? "px-5 py-1" : "px-3 py-1 "} sm:mt-15 mt-8 tracking-widest`}
        >
          {!isManageMode ? "Manage Profiles" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default Profiles;
