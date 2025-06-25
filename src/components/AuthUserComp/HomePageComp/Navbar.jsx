// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import NavbarSearch from "./NavbarSearch";
import { useState } from "react";
import ProfileBtn from "./ProfileBtn";

const Navbar = () => {
  const [showBrowse, setShowBrowse] = useState(false);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "TV Shows", path: "/home/tv-shows" },
    { name: "Movies", path: "/home/movies" },
    { name: "New & Popular", path: "/home/new-popular" },
    { name: "My List", path: "/home/my-list" },
    { name: "Browse by Languages", path: "/home/browse-by-languages" },
  ];

  return (
    <>
      <nav className="bg-transparent  py-5 flex items-center  sticky top-0 z-50  relaltive  ">
        <div className="bg-transparent  flex items-center gap-8  lg:px-13 px-10">
          <Link to="/" className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
              alt="Netflix Logo"
              className="w-25  object-contain"
            />
          </Link>
          <div className="hidden lg:flex gap-6 ml-2 ">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-white text-[14px]  tracking-wider hover:text-gray-300 hover:scale-96 transition-all duration-200 ${
                    isActive ? "font-semibold" : "font-light"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="lg:hidden flex text-white">Browse</div>
        </div>

        <div className="absolute lg:right-44 md:right-35 sm:right-30 right-30">
          <NavbarSearch />
        </div>
        <div className="absolute right-10">
          <ProfileBtn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
