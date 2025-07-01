import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeroBanner from "../../../components/AuthUserComp/HomePageComp/HeroBanner";
import MovieRow from "../../../components/AuthUserComp/HomePageComp/MovieRow";
import Modal from "./Modal";

function Home() {
  const dispatch = useDispatch();
  const TvDrama = useSelector((state) => state.movie.tvDrama);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const discoverMovies = useSelector((state) => state.movie.discover);
  const actionMovies = useSelector((state) => state.movie.action);
  const kDrama = useSelector((state) => state.movie.kDrama);
  const comedy = useSelector((state) => state.movie.comedy);
  const thriller = useSelector((state) => state.movie.thriller);
  const scifi = useSelector((state) => state.movie.scifi);
  const family = useSelector((state) => state.movie.family);
  const documentary = useSelector((state) => state.movie.documentary);
  const animation = useSelector((state) => state.movie.animation);
  const romance = useSelector((state) => state.movie.romance);
  // const webseries = useSelector((state) => state.movie.webseries);
  // const horror = useSelector((state) => state.movie.horror);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleOpenModal = (movie) => {
    setIsModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <div className="">
      {isModalOpen && (
        <Modal selectedMovie={selectedMovie} setIsModalOpen={setIsModalOpen} />
      )}
      <div className="lg:-mt-18 -mt-25 bg-[#141414]  ">
        <div className="relative">
          <div className=" lg:min-h-[88vh] md:min-h-[90vh] sm:min-h-[80vh] min-h[56dvh]">
            <HeroBanner />
          </div>
          <div className="absolute sm:block   hidden bottom-0 h-32 w-full bg-gradient-to-b from-transparent via-black/5 to-[#141414]  pointer-events-none z-11 "></div>
        </div>
        <div className="md:-mt-33 mt-10 flex flex-col gap-11">
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Popular Around You"
            movies={popularMovies}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="TV-Shows"
            movies={TvDrama}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Discover Movies"
            movies={discoverMovies}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Popular Korean Dramas "
            movies={kDrama}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Action "
            movies={actionMovies}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Movies That Will Make You Laugh "
            movies={comedy}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Thrillers "
            movies={thriller}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Family Watch "
            movies={family}
          />
          {/* <MovieRow title="Horror Movies " movies={horror} /> */}
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Popular Documentories"
            movies={documentary}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Science Fiction Based Movies "
            movies={scifi}
          />
          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Hearfelt Romance"
            movies={romance}
          />
          {/* <MovieRow
            handleOpenModal={handleOpenModal}
            title="Indian Series"
            movies={webseries}
          /> */}

          <MovieRow
            handleOpenModal={handleOpenModal}
            title="Award Winning Animated Movies"
            movies={animation}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
