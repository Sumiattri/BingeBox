import LandingNavbar from "../../components/LandingPageCom/LandingNavbar";
import HeroSection from "../../components/LandingPageCom/HeroSection";
import TrendingSection from "../../components/LandingPageCom/TrendingSection";
import JoinReasons from "../../components/LandingPageCom/JoinReasons";
import FrequentQues from "../../components/LandingPageCom/FrequentQues";

function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <TrendingSection />
      <JoinReasons />
      <FrequentQues />
      <div className="bg-black h-70 relative">
        {" "}
        <div className="absolute bottom-25 left-40 text-md text-gray-600">
          Netflix India
        </div>
      </div>
    </>
  );
}

export default LandingPage;
