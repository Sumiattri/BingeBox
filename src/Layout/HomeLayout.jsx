import LogoutButton from "../components/AuthUserComp/LogoutBtn";
import { Outlet } from "react-router-dom";
import Navbar from "../components/AuthUserComp/HomePageComp/Navbar";

function HomeLayout() {
  return (
    <div className="h-screen w-screen bg-gray-700">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
