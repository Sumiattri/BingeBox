import { useSelector } from "react-redux";
import { useState } from "react";

import MoviesBanner from "../../../components/AuthUserComp/HomePageComp/MoviesBanner";
import { baseImgUrl } from "../../../utils/constants";
import Modal from "./Modal";

function Movies() {
  const movies = useSelector((state) => state.movie.popularMovies);
  const thriller = useSelector((state) => state.movie.thriller);
  const romance = useSelector((state) => state.movie.romance);
  const comedy = useSelector((state) => state.movie.comedy);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleOpenModal = (movie) => {
    setIsModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <div className="lg:-mt-18 -mt-25 bg-[#141414] ">
      {isModalOpen && (
        <Modal selectedMovie={selectedMovie} setIsModalOpen={setIsModalOpen} />
      )}
      <div className="relative ">
        <div className=" lg:min-h-[88vh] md:min-h-[90vh] sm:min-h-[80vh] min-h[56dvh]">
          <MoviesBanner />
        </div>
        <div className="absolute sm:block   hidden bottom-0 h-32 w-full bg-gradient-to-b from-transparent via-black/5 to-[#141414]  pointer-events-none z-11 "></div>
      </div>

      <div className="relative flex flex-row flex-wrap  sm:px-11 px-8 sm:gap-5 gap-2  sm:-mt-25 mt-15 z-120">
        {thriller.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOpenModal(movie)}
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-[110px] sm:w-[160px] md:w-[130px] sm:h-[190px] h-[170px] object-cover rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
          />
        ))}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOpenModal(movie)}
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-[110px] sm:w-[160px] md:w-[130px] sm:h-[190px] h-[170px] object-cover rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
          />
        ))}
        {romance.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOpenModal(movie)}
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-[110px] sm:w-[160px] md:w-[130px] sm:h-[190px] h-[170px] object-cover rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
          />
        ))}
        {comedy.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleOpenModal(movie)}
            src={`${baseImgUrl}${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="w-[110px] sm:w-[160px] md:w-[130px] sm:h-[190px] h-[170px] object-cover rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
