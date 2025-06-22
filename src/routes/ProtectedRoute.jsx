// components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { getUserProfiles } from "../firebase/firestoreUtils";
import SpinnerOverlay from "../utils/SpinnerOverlay";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState();

  const fetchProfiles = async (uid) => {
    const profiles = await getUserProfiles(uid);
    return profiles;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setChecking(true);
      if (!user) {
        navigate("/", { replace: true });
        setChecking(false);
        return;
      }

      if (!user.emailVerified) {
        setTimeout(() => {
          navigate("/verify-email", { replace: true });
          setChecking(false);
        }, 600);
        return;
      }

      try {
        const profiles = await fetchProfiles(user.uid);
        if (profiles.length > 0) {
          navigate("/profiles", { replace: true });
        } else {
          navigate("/create-profile", { replace: true });
        }
      } catch (error) {
        console.error("Error checking profiles:", error);
        navigate("/create-profile", { replace: true });
      } finally {
        setChecking(false); // ✅ always stop checking!
      }
    });

    return () => unsubscribe();
  }, []);

  if (checking) {
    return <SpinnerOverlay />;
  }

  // if (!user) {
  //   return <Navigate to="/" />;
  // }

  return children;
};

export default ProtectedRoute;
