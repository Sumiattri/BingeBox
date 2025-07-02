import { FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../../utils/useDebounce";
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function NavbarSearch() {
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
    <div className={`  relative h-7 sm:w-63 w-45`} ref={inputRef}>
      <FiSearch
        className={`text-white sm:text-[28px] text-xl cursor-pointer shrink-0 absolute right-0 top-1 ${!slideLeft ? "" : "transform sm:-translate-x-55 -translate-x-39 "} transition-transform duration-200 ease-in-out z-10`}
        onClick={() => setSlideLeft(!slideLeft)}
      />
      {slideLeft && (
        <RxCross2
          className="absolute right-1 top-1/2 -translate-y-1/2 mt-1 text-white z-10 text-xl"
          onClick={() => setQuery("")}
        />
      )}
      <input
        className={`border sm:py-1 py-[2px] text-white pl-8 border-white absolute right-0 pb-2 ${!slideLeft ? "opacity-0 w-0 pointer-events-none bg-transparent" : "opacity-100 w-full bg-black"} transition-all duration-200 outline-0 ease-in-out placeholder:text-sm `}
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default NavbarSearch;
