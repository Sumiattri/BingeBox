import { FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
function NavbarSearch() {
  const [slideLeft, setSlideLeft] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setSlideLeft(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={`  relative h-7 w-62`} ref={inputRef}>
      <FiSearch
        className={`text-white text-2xl  cursor-pointer shrink-0 absolute right-0 top-1 ${!slideLeft ? "" : "transform -translate-x-55 "} transition-transform duration-200 ease-in-out z-10`}
        onClick={() => setSlideLeft(!slideLeft)}
      />
      <input
        className={`border py-1 text-white pl-8 border-white absolute right-0 pb-2 ${!slideLeft ? "opacity-0 w-0 pointer-events-none bg-transparent" : "opacity-100 w-full bg-black"} transition-all duration-200 ease-in-out placeholder:text-sm `}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default NavbarSearch;
