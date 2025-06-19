import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";

import {
  Home,
  Movies,
  TvShows,
  Games,
  MyList,
  LandingPage,
  Login,
  Signup,
  ProtectedRoute,
  HomeLayout,
} from ".";
import WelcomePage from "./pages/Visitor/WelcomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/welcome" element={<WelcomePage />} />

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
        <Route path="my-list" element={<MyList />} />
        <Route path="games" element={<Games />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      {" "}
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        newestOnTop={true}
        hideProgressBar={true}
        autoClose={600}
        limit={1}
      />
    </>
  );
}

export default App;
