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
  Games,
  MyList,
  LandingPage,
  Login,
  Signup,
  ProtectedRoute,
  HomeLayout,
} from ".";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

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
  return <RouterProvider router={router} />;
}

export default App;
