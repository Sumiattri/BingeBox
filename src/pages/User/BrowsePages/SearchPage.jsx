import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { baseImgUrl } from "../../../utils/constants";
import Modal from "./Modal";
import { useDebounce } from "../../../utils/useDebounce";
import { useNavigate, useLocation } from "react-router-dom";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (query.trim() === "" && location.pathname.startsWith("/home/search")) {
      navigate("/home");
    }
  }, [query, location, navigate]);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query?.trim()) return;
      const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      setResults(data);
    };

    fetchResults();
    console.log("called api");
  }, [query]);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  return (
    <div className="lg:px-15 px-7 text-white bg-[#141414] min-h-screen sm:mt-18 mt-13 ">
      {isModalOpen && (
        <Modal selectedMovie={selectedMovie} setIsModalOpen={setIsModalOpen} />
      )}
      <div className="md:pb-17 pb-10 text-[#808080]">
        Search results for <span className="text-white">"{query}"</span>
      </div>
      {results.length > 0 ? (
        <div className="flex flex-row flex-wrap sm:gap-x-4 gap-x-2 md:gap-y-15 gap-y-2">
          {results.map((movie) =>
            movie.poster_path ? (
              <img
                key={movie.id}
                src={`${baseImgUrl}${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-[110px] sm:w-[160px] md:w-[130px] sm:h-[190px] h-[170px] object-cover rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
                onClick={() => handleOpenModal(movie)}
              />
            ) : null
          )}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
export default SearchPage;
