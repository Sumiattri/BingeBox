import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function CategoryModal({ categoryOpen, setCategoryOpen }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className=" fixed inset-0  h-[100vh] w-[100vw]   bg-black/90 z-1000 flex justify-center items-center ">
      <RxCross1
        className="absolute bottom-30  left-1/2 -translate-x-1/2 text-black bg-white rounded-full text-6xl p-4 active:scale-90 transition-all duration-300"
        onClick={() => setCategoryOpen(false)}
      />

      <motion.div
        initial={{ opacity: 0.4, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-gray-200 flex flex-col gap-8  items-center  h-[30rem] w-[20rem] text-xl pt-18"
      >
        <NavLink
          onClick={() => setCategoryOpen(false)}
          to="/home"
          className="active"
        >
          Home
        </NavLink>
        <NavLink onClick={() => setCategoryOpen(false)} to="/home/new-popular">
          New and Popular
        </NavLink>
        <NavLink onClick={() => setCategoryOpen(false)} to="/home/my-list">
          Mylist
        </NavLink>
        <NavLink onClick={() => setCategoryOpen(false)} to="/home/rolling">
          Browse by Languages
        </NavLink>
      </motion.div>
    </div>
  );
}

export default CategoryModal;
