import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LandingNavbar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();
  return (
    <>
      {/* <nav className="flex justify-between  items-center px-35  max-h-30 bg-transparent pt-[6px] absolute z-2 w-screen"> */}
      {/* <nav className="flex justify-between  items-center px-35  max-h-30 bg-transparent pt-[6px] relative z-2"> */}
      <nav className="flex justify-between  content-baseline md:px-35 sm:px-20 px-5 max-h-30 bg-transparent pt-[6px] relative z-10 ]">
        <Link to="/" className="md:w-40 w-25 h-20 pt-3 cursor-auto">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt="Netflix Logo"
            className="w-full h-auto  object-contain mt-3"
          />
        </Link>

        <div className="flex items-center gap-4.5">
          <div className=" relative w-fit">
            <select className="appearance-none border border-[#5f5f5e] bg-transparent  w-26 px-4 py-0.5 pr-5 text-white rounded-sm">
              <option value="" className="">
                English
              </option>
              <option value="">Hindi</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-sm pointer-events-none">
              <IoMdArrowDropdown />
            </div>
          </div>

          <button
            disabled={isLoading}
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                navigate("/login");
                setIsLoading(false);
              }, 600);
            }}
            className={`py-1.5 px-3.5 text-white bg-[#e50815] ${isLoading ? "cursor-wait" : "cursor-pointer"} rounded-md font-semibold text-sm active:bg-gray-600  hover:bg-red-700 transition-colors duration-300 cursor-pointer`}
          >
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
}

export default LandingNavbar;
