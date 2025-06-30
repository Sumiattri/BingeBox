import { useEffect, useState } from "react";
import { auth } from "../../../firebase/firebase";
import { useSelector } from "react-redux";
import { getMyList } from "../../../firebase/myList";

export default function MyListPage() {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeProfile = useSelector((state) => state.profile.activeProfile);
  const user = auth.currentUser;

  useEffect(() => {
    const fetchMyList = async () => {
      if (user && activeProfile) {
        const list = await getMyList(user.uid, activeProfile.id);
        setMyList(list);
        setLoading(false);
      }
    };

    fetchMyList();
  }, [user, activeProfile]);

  if (loading) return <div>Loading your list...</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mt-5 ml-2 mb-4 text-white">My List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {myList.map((item) => (
          <div key={item.id} className="bg-zinc-800 p-2 rounded-xl">
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="rounded-md"
            />
            <p className="mt-2 text-sm text-white">{item.title || item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
