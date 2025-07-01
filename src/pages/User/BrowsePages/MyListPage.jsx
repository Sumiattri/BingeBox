import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import { useSelector } from "react-redux";
import { getMyList } from "../../../firebase/myList";
import SpinnerOverlay from "../../../utils/SpinnerOverlay";
import Modal from "./Modal";
import { baseImgUrl } from "../../../utils/constants";

export default function MyListPage() {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeProfile = useSelector((state) => state.profile.activeProfile);
  const user = auth.currentUser;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleOpenModal = (movie) => {
    setIsModalOpen(true);
    setSelectedMovie(movie);
  };

  useEffect(() => {
    const fetchMyList = async () => {
      if (user && activeProfile) {
        const list = await getMyList(user.uid, activeProfile.id);
        setMyList(list);
        setLoading(false);
      }
    };

    fetchMyList();
  }, [user, activeProfile, isModalOpen]);

  if (loading) return <SpinnerOverlay />;

  return (
    <div className="lg:mt-10 sm:mt-15 mt-15 bg-[#141414] flex flex-col gap-5 lg:pl-13 sm:pl-10 pl-6 ">
      <div className="text-white text-2xl font-bold ">My List </div>
      <div>
        {" "}
        {isModalOpen && (
          <Modal
            selectedMovie={selectedMovie}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <div className="relative flex flex-row flex-wrap   sm:gap-5 gap-4  ">
          {myList.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleOpenModal(movie)}
              src={`${baseImgUrl}${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-[110px] sm:w-[160px] md:w-[130px] sm:h-[190px] h-[150px] object-cover rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
