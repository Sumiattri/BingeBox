import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Home,
  Movies,
  TvShows,
  MyListPage,
  NewPopular,
  Account,
  LandingPage,
  Login,
  Signup,
  ProtectedRoute,
  HomeLayout,
  CreateProfile,
  Profiles,
  VerifyEmail,
  ResetPassword,
  EmailVerified,
} from ".";

import FirebaseActionRouter from "./pages/User/FirebaseActionRouter.";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllProfiles } from "./features/profileSlice";
import { setActiveProfile } from "./features/profileSlice";
import { getUserProfiles } from "./firebase/firestoreUtils";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import SearchPage from "./pages/User/BrowsePages/SearchPage";
import RollingSoon from "./pages/User/BrowsePages/RollingSoon";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />o
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/create-profile"
        element={
          <ProtectedRoute>
            <CreateProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/auth-action" element={<FirebaseActionRouter />} />
      <Route
        path="/profiles"
        element={
          <ProtectedRoute>
            <Profiles />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="tv-shows" element={<TvShows />} />
        <Route path="movies" element={<Movies />} />
        <Route path="new-popular" element={<NewPopular />} />
        <Route path="my-list" element={<MyListPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="rolling" element={<RollingSoon />} />
      </Route>
      <Route path="account" element={<Account />} />
    </>
  )
);

function App() {
  // useEffect(() => {
  //   const container = document.getElementById("click-effects-container");

  //   const handleClick = (e) => {
  //     const ripple = document.createElement("div");

  //     ripple.style.position = "absolute";
  //     ripple.style.left = `${e.clientX - 10}px`;
  //     ripple.style.top = `${e.clientY - 10}px`;
  //     ripple.style.width = `20px`;
  //     ripple.style.height = `20px`;
  //     ripple.style.border = `2px solid #e50914`;
  //     ripple.style.borderRadius = "50%";
  //     ripple.style.pointerEvents = "none";
  //     ripple.style.animation = "rotate-fade 0.8s ease-out forwards";
  //     ripple.style.zIndex = "9999";

  //     container.appendChild(ripple);

  //     setTimeout(() => {
  //       ripple.remove();
  //     }, 800);
  //   };

  //   window.addEventListener("click", handleClick);
  //   return () => window.removeEventListener("click", handleClick);
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedProfile = localStorage.getItem("activeProfile");
        if (storedProfile) {
          dispatch(setActiveProfile(JSON.parse(storedProfile)));
        }
        const profiles = localStorage.getItem("allprofiles");
        if (profiles) {
          dispatch(setAllProfiles(JSON.parse(profiles)));
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div
        id="click-effects-container"
        className="pointer-events-none fixed inset-0 z-50"
      ></div>{" "}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
