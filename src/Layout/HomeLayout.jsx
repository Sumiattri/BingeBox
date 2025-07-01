// import LogoutButton from "../components/AuthUserComp/LogoutBtn";
import { Outlet } from "react-router-dom";
import Navbar from "../components/AuthUserComp/HomePageComp/Navbar";
import Footer from "../components/AuthUserComp/HomePageComp/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CategoryModal from "../components/AuthUserComp/HomePageComp/CategoryModal";
import { useState } from "react";

import {
  fetchAction,
  fetchKDrama,
  fetchThriller,
  fetchTrending,
  fetchComedy,
  fetchSciFi,
  fetchTvDrama,
  fetchPopular,
  fetchDiscover,
  fetchFamily,
  fetchDocumentary,
  fetchAnimation,
  fetchRomance,
  fetchHorror,
} from "../features/moviesSlice";

function HomeLayout() {
  const dispatch = useDispatch();
  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchTvDrama());
    dispatch(fetchPopular());
    dispatch(fetchDiscover());
    dispatch(fetchAction());
    dispatch(fetchKDrama());
    dispatch(fetchThriller());
    dispatch(fetchComedy());
    dispatch(fetchSciFi());
    dispatch(fetchFamily());
    dispatch(fetchDocumentary());
    dispatch(fetchAnimation());
    dispatch(fetchRomance());

    dispatch(fetchHorror());
  }, [dispatch]);

  return (
    <div className="min-h-screen relative w-screen bg-[#141414] ">
      <div className="absolute  top-0 w-full h-[70px] bg-gradient-to-b from-black/50 via-black/40  to-[#141414]  "></div>
      <Navbar categoryOpen={categoryOpen} setCategoryOpen={setCategoryOpen} />
      <div clasName="">
        {" "}
        {categoryOpen && (
          <CategoryModal
            categoryOpen={categoryOpen}
            setCategoryOpen={setCategoryOpen}
          />
        )}
      </div>
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
