import LandingNavbar from "../../components/LandingPageCom/LandingNavbar";
import HeroSection from "../../components/LandingPageCom/HeroSection";
import TrendingSection from "../../components/LandingPageCom/TrendingSection";
import JoinReasons from "../../components/LandingPageCom/JoinReasons";
import FrequentQues from "../../components/LandingPageCom/FrequentQues";
import Landingfooter from "../../components/LandingPageCom/Landingfooter";

function LandingPage() {
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
