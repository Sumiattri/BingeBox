// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import NavbarSearch from "./NavbarSearch";
import { useState, useEffect } from "react";
import ProfileBtn from "./ProfileBtn";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Navbar = ({ categoryOpen, setCategoryOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // becomes true after scrolling 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`  sm:py-5 py-5 flex items-center  sticky top-0 z-500  relaltive  ${
          scrolled ? "sm:bg-black/80 bg-black" : "bg-transparent"
        } `}
      >
        <div className="bg-transparent  flex items-center gap-8  lg:px-13 sm:px-10 px-5 ">
          <button className="" onClick={() => navigate("/home")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
              alt="Netflix Logo"
              className="w-25  object-contain"
            />
          </button>
          <div className="hidden  lg:flex gap-6 ml-2 ">
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
          <div className="lg:hidden  hidden absolute  md:top-17 top-15 sm:left-11 left-6 md:flex gap-6 text-white">
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
          <div
            className={`md:hidden  ${
              scrolled ? "hidden" : "flex "
            }  absolute  top-17  gap-5 text-white text-sm font-extralight   `}
          >
            <div className="border px-[13px] py-[4px] rounded-xl border-gray-400 active:bg-gray-600 transition-colors duration-300">
              <button
                onClick={() => {
                  setTimeout(() => {
                    navigate("/home/tv-shows");
                  }, 400);
                }}
              >
                TV-Shows
              </button>
            </div>
            <div className="border px-2 py-[2px] rounded-xl border-gray-400 active:bg-gray-600 transition-colors duration-300">
              <button
                onClick={() => {
                  setTimeout(() => {
                    navigate("/home/movies");
                  }, 400);
                }}
              >
                Movies
              </button>
            </div>
            <div
              className="border flex items-center  px-2 py-[2px] rounded-xl border-gray-400 active:bg-gray-500 transition-colors duration-300"
              onClick={() =>
                setTimeout(() => {
                  setCategoryOpen(!categoryOpen);
                }, 200)
              }
            >
              <button className="cursor-pointer">Categories</button>
              <RiArrowDropDownLine className="text-xl" />
            </div>
          </div>
        </div>

        <div className="absolute sm:right-10 right-5">
          <ProfileBtn />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
