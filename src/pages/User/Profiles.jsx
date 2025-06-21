import ProfileCard from "../../components/AuthUserComp/ProfileComp/ProfileCard";

import AddProfileModal from "../../components/AuthUserComp/ProfileComp/AddProfileModal";
import EditProfileModal from "../../components/AuthUserComp/ProfileComp/EditProfileModal";

import { useEffect, useState } from "react";
import { getUserProfiles } from "../../firebase/firestoreUtils";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isManageMode, setIsManageMode] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  // export const getUserProfiles = async () => {
  //   const user = auth.currentUser;
  //   if (!user) throw new Error("User not logged in");

  //   const profilesRef = collection(doc(db, "users", user.uid), "profiles");
  //   const snapshot = await getDocs(profilesRef);
  //   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // };

  const fetchProfiles = async () => {
    try {
      const data = await getUserProfiles();
      setProfiles(data);
    } catch (error) {
      console.error("Failed to load profiles", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="text-center h-full w-full bg-[#141414] text-white   flex  flex-col items-center justify-center relative">
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
          className={`text-[#808080] ${isManageMode ? "hover:text-white" : "hover:text-white "} border ${isManageMode ? "hover:bg-red-700 hover:text-white" : "hover:border-white"}  border-[#808080] ${isManageMode ? "bg-white text-black" : "bg-none"}  transition-all duration-300 ${isManageMode ? "px-5 py-1" : "px-3 py-1 "} sm:mt-15 mt-8 tracking-widest`}
        >
          {!isManageMode ? "Manage Profiles" : "Done"}
        </button>
      </div>
    </div>
  );
};

export default Profiles;
