import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        navigate("/"); // send user back to landing or login
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
