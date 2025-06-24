// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "TV Shows", path: "/home/tv-shows" },
    { name: "Movies", path: "/home/movies" },
    { name: "New & Popular", path: "/home/new-popular" },
    { name: "My List", path: "/home/my-list" },
    { name: "Account", path: "/home/account" },
  ];

  return (
    <nav className="bg-transparent  py-5 flex items-center gap-9 sticky top-0 z-50 border px-13">
      <Link to="/" className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
          alt="Netflix Logo"
          className="w-25  object-contain"
        />
      </Link>
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `text-white text-sm font-normal hover:text-red-500 transition ${
              isActive ? "text-red-600 font-bold" : ""
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
