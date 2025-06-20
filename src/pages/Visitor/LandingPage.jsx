import LandingNavbar from "../../components/LandingPageCom/LandingNavbar";
import HeroSection from "../../components/LandingPageCom/HeroSection";
import TrendingSection from "../../components/LandingPageCom/TrendingSection";
import JoinReasons from "../../components/LandingPageCom/JoinReasons";
import FrequentQues from "../../components/LandingPageCom/FrequentQues";
import Landingfooter from "../../components/LandingPageCom/Landingfooter";
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/profiles");
      }
    });

    return () => unsubscribe();
  }, []);

  // if (!authChecked) return null; // ⏳ or show a spinner here
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <TrendingSection />
      <JoinReasons />
      <FrequentQues />
      <Landingfooter />
    </>
  );
}

export default LandingPage;
