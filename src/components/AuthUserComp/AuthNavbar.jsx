import { Link } from "react-router-dom";
import LogoutButton from "./LogoutBtn";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between  content-baseline md:px-25 sm:px-20 px-5 max-h-30 bg-transparent pt-[4px] relative z-10 ">
        <Link to="/" className="md:w-30 w-25 h-20 pt-3">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt="Netflix Logo"
            className="w-full h-auto object-contain mt-3"
          /> */}
          <h1 className="flex justify-center text-[35px] font-[font2] text-[#E50815] tracking-tighter">
            <span className="inline-block origin-bottom rotate-[-8deg] ">
              B
            </span>
            <span className="inline-block origin-bottom rotate-[-6deg] -mt-[2px]">
              i
            </span>
            <span className="inline-block origin-bottom rotate-[-4deg] -mt-[3px] ">
              n
            </span>
            <span className="inline-block origin-bottom rotate-[-2deg] -mt-[4px]">
              g
            </span>
            <span className="inline-block origin-bottom rotate-[0deg] -mt-[5px] ">
              e
            </span>
            <span className="inline-block origin-bottom rotate-[4deg] -mt-[3px]">
              B
            </span>
            <span className="inline-block origin-bottom rotate-[6deg] -mt-[2px]">
              o
            </span>
            <span className="inline-block origin-bottom rotate-[8deg] mt-[1px] ">
              x
            </span>
          </h1>
        </Link>

        <LogoutButton />
      </nav>
    </div>
  );
}

export default Navbar;
