import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { checkActionCode, applyActionCode } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import SpinnerOverlay from "../../utils/SpinnerOverlay";

function EmailVerified() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("checking"); // checking, valid, invalid
  const navigate = useNavigate();
  const oobCode = searchParams.get("oobCode");
  const [showSpinner, setShowSpinner] = useState();

  useEffect(() => {
    setShowSpinner(true);
    setTimeout(() => setShowSpinner(false), 400);
    const verifyLink = async () => {
      try {
        // 1. Check if the oobCode is valid
        await checkActionCode(auth, oobCode);

        // 2. Apply the code (marks user as verified)
        await applyActionCode(auth, oobCode);

        // 3. Reload the user so currentUser gets updated with emailVerified: true
        await auth.currentUser?.reload();

        setStatus("valid");
      } catch (error) {
        console.error("Verification failed:", error.message);
        setStatus("invalid");
      }
    };

    if (oobCode) verifyLink();
    else setStatus("invalid");
  }, [oobCode]);

  return (
    <>
      {showSpinner && <SpinnerOverlay />}
      <div className="h-screen w-screen flex flex-col items-center justify-center text-white">
        {status === "checking" && (
          <p className="text-xl font-semibold">Verifying your email...</p>
        )}

        {status === "valid" && (
          <>
            <h1 className="text-3xl font-semibold mb-2">🎉 Email Verified!</h1>
            <p className="mb-6">You can now continue to the app.</p>
            <button
              onClick={() => navigate("/create-profile", { replace: true })}
              className="px-6 py-2 bg-red-600 rounded hover:bg-red-700 transition"
            >
              Continue
            </button>
          </>
        )}

        {status === "invalid" && (
          <>
            <h1 className="text-2xl font-semibold mb-2 text-red-400">
              ❌ Invalid or expired link
            </h1>
            <p className="text-gray-400">
              Please request a new verification link or try signing in again.
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default EmailVerified;
