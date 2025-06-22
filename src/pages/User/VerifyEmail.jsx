import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { reload } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthNavbar from "../../components/AuthUserComp/AuthNavbar";
import SpinnerOverlay from "../../utils/SpinnerOverlay";

function VerifyEmail() {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const user = auth.currentUser;

    const interval = setInterval(async () => {
      if (user) {
        await reload(user);
        if (user.emailVerified) {
          setIsVerified(true);
          setError("");
          clearInterval(interval); // ✅ Stop polling once verified
        }
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleResend = async () => {
    const user = auth.currentUser;
    if (user && !user.emailVerified) {
      await sendEmailVerification(user);
      alert("Verification email sent again!");
    }
  };
  const handleContinue = async () => {
    const user = auth.currentUser;
    if (!user) return;

    await reload(user); // Fetch latest info
    setIsLoading(true);
    if (user.emailVerified) {
      setTimeout(() => {
        navigate("/create-profile", { replace: true });
        setIsLoading(false);
      }, 1000);
    } else {
      setError("Please verify your email before continuing.");
    }
  };
  return (
    <>
      {isLoading && <SpinnerOverlay />}
      <AuthNavbar />
      <hr className="text-gray-200" />
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className=" h-[35rem] w-[35rem] flex flex-col pr-20 pl-10   gap-2">
          <h2>Step 2 of 3</h2>
          <h1 className="text-3xl font-semibold font-sans">
            We have sent a verification link to your email.
          </h1>
          <h2 className="text-sm">
            Just click the verification link in your email. Once you’re
            verified, come back to continue your journey.
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleContinue}
            className={` py-3.5 mt-5 ${isVerified ? "bg-[#e50815]" : "bg-gray-600"} ${!isVerified ? "cursor-not-allowed" : "cursor-pointer"} active:bg-gray-600 ${isVerified ? "hover:bg-red-700" : "bg-gray-600"} text-xl   transition-colors duration-300 text-white b rounded-md  flex  justify-center items-center `}
          >
            Continue
          </button>
          <p className="text-sm mt-1">
            Didn't get the verification link?{" "}
            <span
              onClick={handleResend}
              className="underline hover:font-semibold transition-all duration-200 cursor-pointer"
            >
              Click here to resend!
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;
{
  /* <button onClick={resendVerificationEmail}>Resend Email</button> */
}
