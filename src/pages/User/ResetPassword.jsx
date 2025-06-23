import { useState } from "react";
import Navbar from "../../components/LandingPageCom/Navbar";
import { useSearchParams } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import SpinnerOverlay2 from "../../utils/SpinnerOverlay2";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const oobCode = searchParams.get("oobCode");

  const [validPass, setVaildPass] = useState("");
  const [isLoading, setIsLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setVaildPass("Please enter a minimum of 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPassError(true);
      setVaildPass("");
      return;
    }
    setIsLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      alert("Password successfully reset! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("Reset failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <SpinnerOverlay2 />}
      <div className="relative">
        <Navbar />
        <hr className="text-gray-200" />

        <div className=" w-full h-[80vh] flex items-center justify-center">
          <div className=" h-[35rem] w-[35rem] flex flex-col pr-20 pl-10  gap-2">
            <h2 className="text-3xl font-semibold">Reset Password.</h2>
            <h2>Create a new password in two easy steps</h2>
            <div className="mt-5">
              <form
                action=""
                className="flex flex-col relative gap-4"
                onSubmit={handleSubmit}
              >
                {" "}
                <input
                  type="text"
                  id="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder=""
                  className={`peer/email  input-autofill-light text-black bg-transparent  pt-5 pb-3 pl-5 w-full border  border-[#5f5f5e] rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600`}
                />
                <label
                  htmlFor="newPassword"
                  className="text-gray-600 absolute  left-6  top-10  -translate-y-1/2  transition-all   peer-placeholder-shown/email:top-7  peer-placeholder-shown/email:text-gray-500 peer-placeholder-shown/email:text-base peer-not-placeholder-shown/email:top-3 peer-not-placeholder-shown/email:left-5 peer-not-placeholder-shown/email:text-xs   peer-focus/email:top-3   peer-focus/email:left-5 peer-focus/email:text-xs  peer-focus/email:text-gray-600 "
                >
                  NewPassword
                </label>
                <input
                  type="text"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder=""
                  className={`peer input-autofill-light text-black bg-transparent  pt-5 pb-3 pl-5 w-full border  border-[#5f5f5e] rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600`}
                />
                <label
                  htmlFor="confirmPassword"
                  className="text-gray-600 absolute  left-6  top-25 -translate-y-1/2  transition-all   peer-placeholder-shown:top-25  peer-placeholder-shown/email:text-gray-500 peer-placeholder-shown:text-base peer-not-placeholder-shown:top-22 peer-not-placeholder-shown:left-5 peer-not-placeholder-shown:text-xs   peer-focus:top-22   peer-focus:left-5 peer-focus:text-xs  peer-focus:text-gray-600 "
                >
                  {" "}
                  Confirm new password
                </label>
                {passError && (
                  <p className="text-red-500 text-sm">
                    Enter the same password in both the fields.
                  </p>
                )}
                {validPass && (
                  <p className="text-red-600 text-sm mt-1">{validPass}</p>
                )}
                <button
                  type="submit"
                  className={` py-3.5 ${passError ? "mt-5" : "mt-0"} active:bg-gray-600  text-xl cursor-pointer hover:bg-red-700 transition-colors duration-300 text-white bg-[#e50815] rounded-md  flex  justify-center items-center `}
                >
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
