import LogoutButton from "../components/AuthUserComp/LogoutBtn";
import { Outlet } from "react-router-dom";
import Navbar from "../components/AuthUserComp/HomePageComp/Navbar";
import Footer from "../components/AuthUserComp/HomePageComp/Footer";

function HomeLayout() {
  return (
    <div className="min-h-screen w-screen bg-[#141414]">
      <div className="absolute top-0 w-full h-[70px] bg-gradient-to-b from-black/50 via-black/40  to-[#141414] "></div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
