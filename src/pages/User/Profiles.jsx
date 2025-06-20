import ProfileCard from "../../components/AuthUserComp/ProfileComp/ProfileCard";

import AddProfileModal from "../../components/AuthUserComp/ProfileComp/AddProfileModal";

import { useEffect, useState } from "react";
import { getUserProfiles } from "../../firebase/firestoreUtils";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="text-center h-full w-full bg-[#141414] text-white  flex  flex-col items-center justify-center relative">
      <div className=" h-[24rem] max-w-full ">
        <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-medium ">
          Who's Watching?
        </h1>
        <ProfileCard setIsModalOpen={setIsModalOpen} profiles={profiles} />
        {isModalOpen && (
          <AddProfileModal
            setIsModalOpen={setIsModalOpen}
            fetchProfiles={fetchProfiles}
          />
        )}
      </div>
    </div>
  );
};

export default Profiles;
