// HeroBanner.jsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const HeroBanner = () => {
  const trendingMovies = useSelector((state) => state.movie.trending);
  const [heroMovie, setHeroMovie] = useState(null);
  const [movieLogo, setMovieLogo] = useState(null);
  console.log("hrfjrsfjsfjfjdsjfbdjsfbjs");

  useEffect(() => {
    // Don't set again if already set
    if (!heroMovie && trendingMovies?.length > 0) {
      const randomIndex = Math.floor(Math.random() * trendingMovies.length);
      const selectedMovie = trendingMovies[randomIndex];
      setHeroMovie(selectedMovie);
      console.log("Hero Movie selected:", selectedMovie);
    }
  }, [trendingMovies, heroMovie]);

  useEffect(() => {
    if (!heroMovie || movieLogo) return;

    axios
      .get(`/api/${heroMovie.id}`)
      .then((res) => {
        setMovieLogo(res.data.logo || null);
        console.log(res.data);
        console.log("HIii");
      })
      .catch((err) => console.error("Logo fetch failed:", err));
  }, [heroMovie]);

  if (!heroMovie) return null;

  return (
    <div className="w-[100vw] flex justify-center  ">
      <div
        className={`relative md:w-full w-[100%]  bg-cover bg-center text-white  
    h-[48vh] sm:h-[80vh] md:h-[90vh] lg:h-[88vh] md:mt-0 mt-34  md:mx-0 mx-11 md:rounded-none rounded-2xl  flex items-center justify-center px-4`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute   inset-0 bg-gradient-to-r sm:from-black/80 from-black/80 sm:via-black/60 via-black/40 to-transparent md:rounded-none rounded-2xl "></div>
        <div className="absolute sm:hidden block inset-0  bg-gradient-to-b from-transparent   via-black/10 to-black/50 md:rounded-none rounded-2xl  "></div>

        {/* Content Container (vertical card on small screens) */}
        <div
          className={` z-10 
      max-w-[250px] w-full  rounded-lg 
  
      absolute md:left-6 left-3 md:top-60 sm:bottom-15 bottom-5 sm:max-w-xl  bg-transparent  sm:px-8 px-2`}
        >
          {/* <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            {heroMovie.title || heroMovie.name}
          </h1> */}
          {movieLogo ? (
            <img
              src={`https://image.tmdb.org/t/p/original${movieLogo}`}
              alt={`${heroMovie.title || heroMovie.name} logo`}
              className="sm:w-[50%] md:w-[50%] max-h-[20%] lg:w-[60%] object-contain mb-4 "
            />
          ) : (
            <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4">
              {heroMovie.title || heroMovie.name}
            </h1>
          )}
          <p className="text-xs sm:text-base sm:block hidden text-gray-200 sm:font-light font-extralight line-clamp-4">
            {heroMovie.overview}
          </p>

          <div className="mt-4 flex gap-4 ">
            <button className="bg-white text-black sm:text-[17px] text-xs font-semibold px-4 sm:py-2 py-0 rounded hover:bg-opacity-80 transition-all">
              ▶ Play
            </button>
            <button className="bg-gray-700 bg-opacity-70 text-white font-semibold px-4 py-1 rounded hover:bg-opacity-50 transition-all">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
