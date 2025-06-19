import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../auth/auth";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";
import { checkIfEmailExists } from "../../auth/auth";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefilledEmail);
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false); // reset if valid
    }
    if (password.length < 6) {
      setPassError(true);
      hasError = true;
    } else {
      setPassError(false); // reset if valid
    }

    if (hasError) return;

    try {
      await signUp(email, password);
      console.log("User signed up successfully");
      navigate("/welcome");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        navigate("/login", { state: { fromSignup: true } });
      } else {
        alert(error.message);
        console.error("Signup failed:", error.message);
      }
    }
  };

  return (
    <div className="">
      <div>
        <nav className="flex justify-between  content-baseline md:px-25 sm:px-20 px-5 max-h-30 bg-transparent pt-[6px] relative z-10 ">
          <Link to="/" className="md:w-40 w-25 h-20 pt-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
              alt="Netflix Logo"
              className="w-full h-auto object-contain mt-3"
            />
          </Link>

          <div className="flex items-center gap-4.5">
            <Link
              to="/login"
              className="py-1.5 px-3.5 text-gray-700 text-md sm:text-xl font-semibold transition-colors duration-300 cursor-pointer"
            >
              Sign In
            </Link>
          </div>
        </nav>
      </div>
      <hr className="text-gray-200" />
      <div className="h-[80vh] w-full flex justify-center items-center ">
        <div className=" h-[35rem] w-[35rem] flex flex-col pr-20 pl-10  gap-2">
          <h2>Step 1</h2>
          <h1 className="text-3xl font-semibold font-sans">
            Create a password and start your journey
          </h1>
          <h2>
            Just few more steps and you're done! <br /> We hate paperwork, too.
          </h2>

          <div className="mt-5  ">
            <form
              onSubmit={handleSubmit}
              action=""
              className={`flex flex-col  ${emailError ? "gap-7" : " gap-4"} relative`}
            >
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className={`peer/email  input-autofill-light text-black bg-transparent  pt-5 pb-3 pl-5 w-full border ${emailError ? "border-red-500" : "border-[#5f5f5e]"} border-[#5f5f5e] rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600`}
              />
              <label
                htmlFor="email"
                className="text-gray-600 absolute  left-6  top-7  -translate-y-1/2  transition-all   peer-placeholder-shown/email:top-7  peer-placeholder-shown/email:text-gray-500 peer-placeholder-shown/email:text-base peer-not-placeholder-shown/email:top-3 peer-not-placeholder-shown/email:left-5 peer-not-placeholder-shown/email:text-xs   peer-focus/email:top-3   peer-focus/email:left-5 peer-focus/email:text-xs  peer-focus/email:text-gray-600 "
              >
                Email address
              </label>

              {emailError && (
                <p className="text-[#e50815] absolute top-15  text-sm flex items-center gap-1">
                  <span>
                    <RxCrossCircled />
                  </span>{" "}
                  Please enter valid email address
                </p>
              )}
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=""
                className={`peer  text-black bg-transparent pt-5 pb-3 pl-5  w-full border  ${passError ? "border-red-500" : "border-[#5f5f5e]"} rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600`}
              />
              <label
                htmlFor="password"
                className={`text-gray-600 absolute  left-6  top-26  -translate-y-1/2  transition-all  ${emailError ? "peer-placeholder-shown:top-28" : "peer-placeholder-shown:top-25"} peer-placeholder-shown:text-base  peer-placeholder-shown:text-gray-500 ${emailError ? "peer-not-placeholder-shown:top-25" : "peer-not-placeholder-shown:top-22"}   peer-not-placeholder-shown:left-5 peer-not-placeholder-shown:text-xs ${emailError ? "peer-focus:top-25" : "peer-focus:top-22"} peer-focus:left-5 peer-focus:text-xs  peer-focus:text-gray-600 `}
              >
                Password
              </label>

              {passError && (
                <p
                  className={`text-[#e50815] absolute ${emailError ? "top-37" : "top-33"}   text-sm flex items-center gap-1`}
                >
                  <span>
                    <RxCrossCircled />
                  </span>{" "}
                  Please enter a minimum of 6 digit
                </p>
              )}

              <button
                type="submit"
                className={` py-3.5 ${passError ? "mt-5" : "mt-0"}  text-xl cursor-pointer hover:bg-red-700 transition-colors duration-300 text-white bg-[#e50815] rounded-md  flex  justify-center items-center `}
              >
                {" "}
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
