import LogoutButton from "../components/AuthUserComp/LogoutBtn";
import { Outlet } from "react-router-dom";
import Navbar from "../components/AuthUserComp/HomePageComp/Navbar";

function HomeLayout() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default HomeLayout;
