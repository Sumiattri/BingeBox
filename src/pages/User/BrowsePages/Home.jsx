import HeroBanner from "../../../components/AuthUserComp/HomePageComp/HeroBanner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrending } from "../../../features/moviesSlice";
import { fetchTvDrama } from "../../../features/moviesSlice";
import { fetchPopular } from "../../../features/moviesSlice";
import { fetchDiscover } from "../../../features/moviesSlice";
import MovieRow from "../../../components/AuthUserComp/HomePageComp/MovieRow";

function Home() {
  const dispatch = useDispatch();
  const TvDrama = useSelector((state) => state.movie.tvDrama);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const discoverMovies = useSelector((state) => state.movie.discover);

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchTvDrama());
    dispatch(fetchPopular());
    dispatch(fetchDiscover());
  }, [dispatch]);

  return (
    <div>
      <div className="lg:-mt-18 -mt-25 bg-[#141414] ">
        <div className="relative">
          <HeroBanner />
          <div className="absolute sm:block  hidden bottom-0 h-32 w-full bg-gradient-to-b from-transparent via-black/5 to-[#141414]  pointer-events-none z-11 "></div>
          <div className=" "></div>
        </div>
        <div className="md:-mt-33 mt-10 flex flex-col gap-9">
          <MovieRow title="Popular Around You" movies={popularMovies} />
          <MovieRow title="TV-Shows" movies={TvDrama} />
          <MovieRow title="Discover Movies" movies={discoverMovies} />
        </div>
      </div>
    </div>
  );
}

export default Home;
