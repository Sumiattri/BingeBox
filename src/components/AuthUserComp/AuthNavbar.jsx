import { Link } from "react-router-dom";
import LogoutButton from "./LogoutBtn";

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

        <LogoutButton />
      </nav>
    </div>
  );
}

export default Navbar;
