import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { reload } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

function VerifyEmail() {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const user = auth.currentUser;

      if (user) {
        await reload(user); // refresh the user data
        if (user.emailVerified) {
          clearInterval(interval);
          navigate("/create-profile");
        }
      }
    }, 3000); // check every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const resendVerificationEmail = async () => {
    console.log("hii");

    const user = auth.currentUser;
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      alert("Verification email sent!");
    }
  };
  return (
    <div className="border border-amber-200">
      <p>
        Please verify your email. We've sent a verification link to your inbox.
      </p>
      <button onClick={resendVerificationEmail}>Resend Email</button>
    </div>
  );
}

export default VerifyEmail;
