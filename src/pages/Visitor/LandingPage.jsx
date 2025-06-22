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
import { getUserProfiles } from "../../firebase/firestoreUtils";
import { Navigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true); // ⏳ Add loading state
  const fetchProfiles = async (uid) => {
    const profiles = await getUserProfiles(uid);
    return profiles;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const res = await fetchProfiles(user.uid); // 🔍 fetch from Firestore
          if (res.length > 0) {
            navigate("/profiles", { replace: true });
          } else {
            navigate("/create-profile", { replace: true });
          }
        } catch (error) {
          console.error("Error checking profiles:", error);
          navigate("/create-profile"); // fallback if Firestore fails
        }
      } else {
        setCheckingAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (checkingAuth) return null; // or a full screen loader/spinner

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
