import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveProfile } from "../../../features/profileSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function ProfileBtn({ setIsLoading }) {
  const [isOpen, setIsOpen] = useState();

  const dispatch = useDispatch();
  const dropdownRef = useRef();
  const navigate = useNavigate();
  const closeTimeoutRef = useRef(null);
  const [arrowFlip, setArrowFlip] = useState(false);

  const activeProfile1 = localStorage.getItem("activeProfile");
  const activeProfile = JSON.parse(activeProfile1);
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
    setIsLoading(true);
    dispatch(setActiveProfile(profile));
    localStorage.setItem("activeProfile", JSON.stringify(profile));
    setIsOpen(false);
    setTimeout(() => {
      navigate("/home", { replace: true });
      setIsLoading(false);
    }, 1200);
  };

  const handleLogout = () => {
    setIsLoading(true);

    setIsOpen(false);
    setTimeout(() => {
      localStorage.removeItem("activeProfile");
      signOut(auth)
        .then(() => {
          console.log("Logged out");

          navigate("/", { replace: true });
          window.location.replace("/");
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Logout error", error);
        });
      dispatch(setActiveProfile(null));
      localStorage.removeItem("activeProfile");
    }, 1200);
  };
  // if (loading) {
  //   return <SpinnerOverlay />;
  // }
  return (
    <div>
      <div
        className="relative  "
        ref={dropdownRef}
        onMouseEnter={() => {
          setIsOpen(true);
          setArrowFlip(true);
        }}
        onMouseLeave={() => {
          closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false);
            setArrowFlip(false);
          }, 200);
        }}
      >
        <div className="flex items-center gap-1 ">
          <img
            src={activeProfile.avatar}
            alt="image"
            className="sm:w-9 sm:h-9 w-8 h-8 rounded  cursor-pointer shadow-sm shadow-black "
            onClick={() => setIsOpen(!isOpen)}
          />
          <IoMdArrowDropdown
            className={`text-white text-xl ${arrowFlip ? "rotate-180" : ""} transition-all duration-200 `}
          />
        </div>
        <div
          onMouseEnter={() => {
            clearTimeout(closeTimeoutRef.current);
            setIsOpen(true); // optional, to be safe
            setArrowFlip(true);
          }}
          className={`absolute right-0 mt-4 w-50 sm:bg-black/80 bg-black/90 text-white border border-[#282726] rounded-md shadow-lg transition-all duration-200 origin-top ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          } z-50`}
        >
          <IoMdArrowDropup className="text-3xl absolute top-0 right-7 -mt-5" />

          <div className="p-1">
            {allProfiles
              .filter((p) => p.id !== activeProfile?.id)
              .map((profile) => (
                <div
                  key={profile.id}
                  onClick={() => handleProfileChange(profile)}
                  className="flex items-center gap-3 px-1 py-2 hover:bg-zinc-700 rounded cursor-pointer transition "
                >
                  <img
                    src={profile.avatar}
                    alt={profile.firstName}
                    className="sm:w-8 sm:h-8 w-6 h-6 rounded"
                  />
                  <span className="text-[12px] font-light">
                    {profile.firstName}
                  </span>
                </div>
              ))}
          </div>
          {/* <hr className="border-gray-700" /> */}
          <div className="p-1">
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/account");
              }}
              className="w-full text-left rounded px-1 py-2 hover:bg-zinc-700 transition flex items-center gap-3"
            >
              <IoPersonOutline className="text-3xl text-gray-400" />

              <span className="text-[12px]">Account</span>
            </button>
          </div>
          <hr className="text-gray-700" />
          <div className="flex justify-center px-2 py-2">
            <button
              onClick={handleLogout}
              className="flex justify-center px-2 rounded w-full   text-center py-4 text-[12px]  hover:bg-zinc-700 transition"
            >
              Sign out of BingeBox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBtn;
