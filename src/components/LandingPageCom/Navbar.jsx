import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between  content-baseline md:px-25 sm:px-20 px-5 max-h-30 bg-transparent pt-[6px] relative z-10 ">
        <Link to="/" className="md:w-40 w-25 h-20 pt-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt="Netflix Logo"
            className="w-full h-auto object-contain mt-3"
          />
        </Link>

        <div className="flex items-center gap-4.5">
          <Link
            to="/login"
            className="py-1.5 px-3.5 text-gray-700 text-md sm:text-xl font-semibold transition-colors duration-300 cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
