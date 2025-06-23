import { useNavigate } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";

function ProfileCard({
  setIsModalOpen,
  profiles,
  isManageMode,
  setEditModalOpen,
  setSelectedProfile,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center max-w-[50rem] md:flex-nowrap flex-wrap  sm:gap-10 gap-5 mt-10 ">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          onClick={() => {
            if (!isManageMode) {
              localStorage.setItem("profile", JSON.stringify(profile));
              navigate("/home");
            }
          }}
          className="text-center cursor-pointer z-1   relative "
        >
          <div className="relative  ">
            <div className="relative  lg:w-30 md:w-25 w-20 mx-auto">
              <img
                src={`/${profile.avatar}`}
                alt={profile.firstName}
                className="lg:w-30 md:w-25 sm:w-20 w-20  lg:h-30 md:h-25 sm:h-20 h-20  rounded-full mx-auto border-2 hover:border-white hover:scale-105 transition-transform"
              />
              {isManageMode && (
                <div className="bg-black/50 inset-0 z-5 absolute  rounded-full"></div>
              )}
              {isManageMode && (
                <div className="absolute rounded lg:top-10 md:top-8 sm:top-6 top-6 lg:left-11 md:left-9 left-6   sm:text-white z-10  md:text-3xl text-3xl">
                  <GrEdit
                    onClick={() => {
                      setTimeout(() => setEditModalOpen(true), 300);
                      setSelectedProfile(profile);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <p className="mt-2 text-[#808080]">
            {profile.firstName} {profile.lastName}
          </p>
        </div>
      ))}
      {profiles.length < 5 && (
        <div
          onClick={() => {
            setTimeout(() => setIsModalOpen(true), 400);
          }}
          className="  flex flex-col items-center gap-5 pt-3 justify-center   active:scale-90 hover:scale-115 transition-all duration-300"
        >
          <IoPersonAddSharp className="md:text-7xl sm:text-6xl text-5xl  text-[#808080]" />
          <p className="text-[#808080]">Add Profile</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
