import { useNavigate } from "react-router-dom";
import { IoPersonAddSharp } from "react-icons/io5";

function ProfileCard({ setIsModalOpen, profiles }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center max-w-[50rem] md:flex-nowrap flex-wrap  sm:gap-10 gap-5 mt-10  ">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          onClick={() => {
            localStorage.setItem("profile", JSON.stringify(profile));
            navigate("/home");
          }}
          className="text-center cursor-pointer "
        >
          <img
            src={`/${profile.avatar}`}
            alt={profile.firstName}
            className="lg:w-30 md:w-25 sm:w-20 w-20  lg:h-30 md:h-25 sm:h-20 h-20  rounded-full mx-auto border-2 hover:border-white hover:scale-105 transition-transform"
          />
          <p className="mt-2 text-[#808080]">{profile.firstName}</p>
        </div>
      ))}
      {profiles.length < 5 && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="  flex flex-col items-center gap-5 pt-3 justify-center"
        >
          <IoPersonAddSharp className="text-5xl text-[#808080]" />
          <p className="text-[#808080]">Add Profile</p>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
