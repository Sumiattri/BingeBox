import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { IoMdArrowBack } from "react-icons/io";

const Modal = ({ selectedMovie, setIsModalOpen }) => {
  const [moviedata, setMovieData] = useState({
    cast: "",
    genre: "",
    overView: "",
    releaseDate: null,
    runtime: null,
  });
  const [loading, setLoading] = useState(false);
  const [movieLogo, setMovieLogo] = useState();

  if (!selectedMovie) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (!selectedMovie) return;
    setLoading(true);
    axios
      .get(`/api/movie-details/${selectedMovie.id}`)
      .then((res) => {
        const data = res.data;
        console.log(data);

        setMovieData({
          cast: data.cast?.map((actor) => actor.name).join(", ") || "",
          genre: data.genres?.map((genre) => genre.name).join(", ") || "",
          overView: data.overview || "",
          releaseDate: data.release_date || null,
          runtime: data.runtime || null,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load movie details:", err);
        setLoading(false);
      });
  }, [selectedMovie]);

  useEffect(() => {
    if (!selectedMovie || movieLogo) return;
    axios
      .get(`/api/movie-logos/${selectedMovie.id}`)
      .then((res) => {
        setMovieLogo(res.data.logo || null);
      })
      .catch((err) => {
        console.error("Logo fetch failed:", err);
      });
  }, [selectedMovie]);

  return (
    <div className="fixed inset-0 z-2000 ">
      <div
        onClick={() => setIsModalOpen(false)}
        className=" bg-black/70 absolute inset-0 z-20"
      ></div>
      <motion.div
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0.5, scale: 0.5 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{}}
        className=" sm:top-1/2 sm:-translate-y-1/2  sm:left-1/2 sm:-translate-x-1/2  sm:rounded absolute sm:bg-[#141414] bg-black sm:h-[94vh] h-[100vh] sm:w-[63vw] w-[100vw] z-21 overflow-y-auto  "
      >
        <div className="sm:hidden block h-15 bg-black relative">
          <IoMdArrowBack
            className="text-white absolute top-4 text-[30px] left-5"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <div className="relative ">
          <RxCross2
            className="absolute sm:inline-block hidden top-1 right-1 text-white bg-[#141414] rounded-full text-2xl font-extralight cursor-pointer z-22"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative ">
            <img
              src={`https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`}
              alt="Backdrop"
              className="rounded w-full sm:h-[470px] h-[300px] object-cover "
            />
            <img
              src={`https://image.tmdb.org/t/p/original${movieLogo}`}
              alt={`${selectedMovie.title || selectedMovie.name} logo`}
              onLoad={(e) => (e.target.style.opacity = 1)}
              className=" absolute bottom-4 left-1/2 -translate-x-1/2  w-[60%] sm:w-[60%] sm:max-w-[300px] sm:max-h-[200px] object-contain mb-4 transition-opacity duration-500 opacity-0 z-200"
            />
            <div className="absolute -bottom-1 left-0 w-full h-[180px] bg-blend-darken bg-gradient-to-b from-transparent via-[#141414]/60 to-[#141414] pointer-events-none z-10"></div>
          </div>
          {!loading && (
            <motion.div
              initial={{ opacity: 0.4, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.5, scale: 0.5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="sm:h-[calc(94vh-470px)] h-[calc(68vh-300px)] w-full sm:bg-[#141414] bg-black overflow-y-auto grid sm:grid-cols-2 grid-cols-1 sm:px-10 px-4 pt-3 sm:gap-15 gap-8 "
            >
              <div className=" flex flex-col gap-5 ">
                <div className="text-[#808080] text-md flex gap-5">
                  <h2> {moviedata.releaseDate}</h2>
                  <h2>{moviedata.runtime} mins</h2>
                </div>
                <div className="text-[#ffffff] text-[14px] font-light tracking-wide">
                  {moviedata.overView}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="text-[13px] font-light">
                  <span className="text-[#808080]">Cast: </span>
                  <span className="text-white">{moviedata.cast}</span>
                </div>
                <div className="text-[13px] font-light pb-5">
                  <span className="text-[#808080]">Genre: </span>
                  <span className="text-white">{moviedata.genre}</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
