import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between  content-baseline md:px-25 sm:px-20 px-5 max-h-30 bg-transparent pt-[6px] relative z-10 ">
        <button
          onClick={() => setTimeout(() => navigate("/"), 600)}
          className="md:w-40 w-25 h-20 pt-3 cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt="Netflix Logo"
            className="w-full h-auto object-contain mt-3"
          />
        </button>

        <div className="flex items-center gap-4.5">
          <button
            onClick={() => {
              setTimeout(() => navigate("/login"), 600);
            }}
            className="py-1.5 px-3.5 hover:scale-105 active:scale-85  text-gray-700 text-md sm:text-xl font-semibold transition duration-300 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
