import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useState } from "react";
import SpinnerOverlay from "../../utils/SpinnerOverlay";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        setTimeout(() => {
          navigate("/", { replace: true });
          setLoading(false);
        }, 1200);
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };
  if (loading) {
    return <SpinnerOverlay />;
  }

  return (
    <button
      onClick={handleLogout}
      className="hover:cursor-pointer text-xl font-semibold"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
