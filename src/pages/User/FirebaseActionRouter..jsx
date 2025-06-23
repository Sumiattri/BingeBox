// src/pages/FirebaseActionRouter.jsx
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SpinnerOverlay from "../../utils/SpinnerOverlay";

const FirebaseActionRouter = () => {
  const [params] = useSearchParams(); // Read query string
  const navigate = useNavigate();

  useEffect(() => {
    const mode = params.get("mode");

    if (mode === "resetPassword") {
      navigate("/reset-password?" + params.toString());
    } else if (mode === "verifyEmail") {
      navigate("/email-verified?" + params.toString());
    } else {
      navigate("/"); // fallback in case of unexpected mode
    }
  }, []);

  return <SpinnerOverlay />;
};

export default FirebaseActionRouter;
