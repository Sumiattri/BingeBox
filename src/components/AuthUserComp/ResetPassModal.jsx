// components/AuthUserComp/ForgotPasswordModal.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import SpinnerOverlay2 from "../../utils/SpinnerOverlay2";

const ResetPassModal = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState();

  const handleReset = async () => {
    if (!email) return setError("Please enter your email.");
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset link sent! Check your inbox.");
      setError("");
    } catch (err) {
      setError("Failed to send reset link. Try again.");
      setMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <SpinnerOverlay2 />}
      <div className="absolute inset-0 flex items-center justify-center  ">
        <div
          className="bg-black/50 absolute inset-0 z-10"
          onClick={() => setShowModal(false)}
        ></div>
        <div className="bg-[#141414] w-[90%] max-w-md p-6 rounded-lg shadow-lg text-white z-10 ">
          <h2 className="text-xl font-semibold mb-2">Reset your password</h2>
          <p className="mb-4 text-sm text-gray-400">
            Enter your email address and we'll send you a password reset link.
          </p>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}
          <div className="mt-4 flex justify-end gap-3">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 text-sm bg-gray-600 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 text-sm bg-red-600 rounded hover:bg-red-700"
            >
              Send Link
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassModal;
