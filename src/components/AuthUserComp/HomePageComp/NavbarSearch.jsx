import { FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../../utils/useDebounce";
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoArrowBackSharp } from "react-icons/io5";

function NavbarSearch({ setFullScreenSearch, fullScreenSearch }) {
  const inputRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [slideLeft, setSlideLeft] = useState(false);
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      navigate(`/home/search?query=${encodeURIComponent(debouncedQuery)}`);
    } else if (location.pathname.startsWith("/home/search")) {
      navigate("/home");
    }
  }, [debouncedQuery]);

  useEffect(() => {
    const handler = (e) => {
      // ❌ Don’t run if we’re on search page
      if (location.pathname.startsWith("/home/search")) return;

      // ✅ Otherwise, close the search input on outside click
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setSlideLeft(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [location]);

  return (
    <div
      className={`   relative h-7  ${fullScreenSearch ? "h-25 w-screen bg-black" : "sm:w-70 w-45"}  `}
      ref={inputRef}
    >
      <FiSearch
        className={`text-white sm:text-[28px]  cursor-pointer shrink-0 absolute 
           ${
             fullScreenSearch
               ? " top-15 left-3 text-2xl"
               : !slideLeft
                 ? "right-0 top-1 text-2xl"
                 : "transform sm:-translate-x-62 -translate-x-39 right-0 top-1 text-xl"
           }
         transition-transform duration-200 ease-in-out z-10`}
        onClick={() => {
          if (window.innerWidth <= 640) {
            setFullScreenSearch(true);
          } else {
            setSlideLeft(!slideLeft);
          }
        }}
      />
      {slideLeft && (
        <RxCross2
          className="absolute right-1 top-1/2 -translate-y-1/2 mt-1 text-white z-10 text-xl"
          onClick={() => setQuery("")}
        />
      )}

      {fullScreenSearch && (
        <RxCross2
          className="absolute right-4  top-15  text-white z-10 text-3xl"
          onClick={() => setQuery("")}
        />
      )}
      {fullScreenSearch && (
        <IoArrowBackSharp
          className="absolute top-3  left-3 text-white text-3xl"
          onClick={() => {
            navigate("/home", { replace: true });
            setFullScreenSearch(false);
            setQuery("");
          }}
        />
      )}
      <input
        className={` sm:py-[6px]  text-white    pb-2 absolute 
    ${
      fullScreenSearch
        ? "w-full bg-[#252529] opacity-100 pointer-events-auto top-13 h-12 pl-12"
        : slideLeft
          ? "w-full bg-black opacity-100 pointer-events-auto  right-0 border border-white pl-8 "
          : "w-0 opacity-0 pointer-events-none bg-transparent  right-0 border border-white pl-8"
    }
    transition-all duration-200 outline-0 ease-in-out placeholder:text-sm`}
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default NavbarSearch;
