import LogoutButton from "../components/AuthUserComp/LogoutBtn";
import { Outlet } from "react-router-dom";
import Navbar from "../components/AuthUserComp/HomePageComp/Navbar";

function HomeLayout() {
  return (
    <div className="h-screen w-screen ">
      <div className="relative z-100">
        {" "}
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
