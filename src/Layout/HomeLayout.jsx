// import LogoutButton from "../components/AuthUserComp/LogoutBtn";
import { Outlet } from "react-router-dom";
import Navbar from "../components/AuthUserComp/HomePageComp/Navbar";
import Footer from "../components/AuthUserComp/HomePageComp/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CategoryModal from "../components/AuthUserComp/HomePageComp/CategoryModal";
import { useState } from "react";
import NavbarSearch from "../components/AuthUserComp/HomePageComp/NavbarSearch";
import { useLocation } from "react-router-dom";
import SpinnerOverlay from "../utils/SpinnerOverlay";

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
  const location = useLocation();
  const isSearchPage = location.pathname.startsWith("/home/search");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [fullScreenSearch, setFullScreenSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex justify-center items-center">
          <SpinnerOverlay />
        </div>
      )}
      {fullScreenSearch && !isSearchPage && (
        <div className="bg-black fixed inset-0 h-[200vh] z-502"></div>
      )}
      <div className="absolute  top-0 w-full h-[70px] bg-gradient-to-b from-black/50 via-black/40  to-[#141414]  "></div>
      <div className="absolute  top-0 w-full h-[70px] bg-gradient-to-b from-black/60 via-black/40  to-transparent z-500  "></div>

      <div
        className={`  fixed  z-503  ${fullScreenSearch ? " w-screen top-0  " : "  lg:right-40 md:right-30 sm:right-30 right-28 top-4 "}  `}
      >
        <NavbarSearch
          fullScreenSearch={fullScreenSearch}
          setFullScreenSearch={setFullScreenSearch}
        />
      </div>
      {!fullScreenSearch && (
        <Navbar
          categoryOpen={categoryOpen}
          setCategoryOpen={setCategoryOpen}
          setFullScreenSearch={setFullScreenSearch}
          fullScreenSearch={fullScreenSearch}
          setIsLoading={setIsLoading}
        />
      )}
      <div>
        {" "}
        {categoryOpen && (
          <CategoryModal
            categoryOpen={categoryOpen}
            setCategoryOpen={setCategoryOpen}
          />
        )}
      </div>
      <div className="min-h-[100vh] ">
        <Outlet context={{ fullScreenSearch, setFullScreenSearch }} />
      </div>
      <Footer />
    </div>
  );
}

export default HomeLayout;
