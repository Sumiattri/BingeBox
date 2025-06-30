import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveProfile } from "../../../features/profileSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

function ProfileBtn() {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const dropdownRef = useRef();
  const navigate = useNavigate();

  // const activeProfile = useSelector((state) => state.profile.activeProfile);
  const activeProfile1 = localStorage.getItem("activeProfile");
  const activeProfile = JSON.parse(activeProfile1);
  console.log(activeProfile.avatar);

  const allProfiles = useSelector((state) => state.profile.allProfiles);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileChange = (profile) => {
    dispatch(setActiveProfile(profile));
    localStorage.setItem("activeProfile", JSON.stringify(profile));
    setIsOpen(false);
    navigate("/home", { replace: true });
  };

  const handleLogout = () => {
    dispatch(setActiveProfile(null));
    localStorage.removeItem("activeProfile");
    setIsOpen(false);
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        navigate("/", { replace: true }); // send user back to landing or login
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return (
    <div>
      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={() => setIsOpen(true)}
        // onMouseLeave={() => setIsOpen(false)}
      >
        <img
          src={`/${activeProfile.avatar}`}
          alt="image"
          className="sm:w-11 sm:h-11 w-10 h-10 rounded-full cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        />

        <div
          className={`absolute right-0 mt-4 w-50 bg-zinc-900 text-white rounded-md shadow-lg transition-all duration-200 origin-top ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } z-50`}
        >
          <div className="p-3">
            <p className="text-sm text-gray-400 mb-1 px-2">Switch Profile</p>

            {allProfiles
              .filter((p) => p.id !== activeProfile?.id)
              .map((profile) => (
                <div
                  key={profile.id}
                  onClick={() => handleProfileChange(profile)}
                  className="flex items-center gap-3 px-2 py-2 hover:bg-zinc-700 rounded cursor-pointer transition"
                >
                  <img
                    src={`/${profile.avatar}` || "/default-avatar.png"}
                    alt={profile.firstName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{profile.firstName}</span>
                </div>
              ))}
          </div>

          <hr className="border-gray-700" />

          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/account");
            }}
            className="w-full text-left px-4 py-2 hover:bg-zinc-800 transition"
          >
            Account Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-red-400 hover:bg-zinc-800 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileBtn;
