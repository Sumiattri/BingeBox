import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RollingSoon = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-50 text-white text-center px-4">
      <motion.div
        initial={{ opacity: 0.4, scale: 0.0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl tracking-wide md:text-7xl p-2 font-extrabold sm:mb-6 mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-[length:300%] bg-clip-text text-transparent ">
          Rolling in Version 2
        </h1>

        <p className="text-sm md:text-xl mb-8 text-gray-300 animate-fadeIn delay-300">
          Sit tight, it's getting spicy behind the scenes!
        </p>

        <Link
          to="/home"
          className="bg-[#E6030C] hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-all duration-300 animate-fadeIn delay-500"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default RollingSoon;
