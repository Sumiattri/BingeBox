import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../auth/auth";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { IoInformationCircleOutline } from "react-icons/io5";
import Footer from "../../components/LandingPageCom/Footer";
// footer resloved

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledEmail = location.state?.email || "";
  const fromLanding = location.state?.fromLanding || false;
  const fromSignUp = location.state?.fromSignup || false;

  const [email, setEmail] = useState(prefilledEmail);
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  const [loginError, setLoginError] = useState("");
  const [isPassWrong, setIsPassWrong] = useState(false);

  const [submittedEmail, setSubmittedEmail] = useState();

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
      await signIn(email, password);
      console.log("Login successful");
      setTimeout(() => {
        navigate("/profiles", { replace: true });
      }, 200);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        // alert("Invalid Credentials");
        setLoginError("Invalid credentials");
        setIsPassWrong(false);
      } else if (error.code === "auth/wrong-password") {
        console.error("Login failed:", error.message);
        setLoginError();
        setSubmittedEmail(email);
        setIsPassWrong(true);
        setTimeout(3000);
      }
    }
  };

  return (
    <>
      <div
        className="bg-cover relative bg-no-repeat bg-center sm:h-full h-[90vh] w-full overflow-hidden box-border   grid justify-center items-center pt-14 "
        style={{
          backgroundImage: `url(
             "https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/26c35d01-db23-4f28-b2eb-42490d7f4002/ID-id-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
           )`,
        }}
      >
        <button
          onClick={() => setTimeout(() => navigate("/"), 600)}
          className="md:w-40 w-25 h-20 pt-3 cursor-pointer absolute z-2 top-3 md:left-25 sm:left-15 left-5"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt="Netflix Logo"
            className="w-full h-auto object-contain mt-3 "
          />
        </button>
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-100 z-1  "></div>
        <div className="z-2  h-[43rem] max-w-[30rem] bg-black/65 flex flex-col sm:pt-15 pt-8 sm:px-13 px-7 sm:mt-0 mt-8 gap-2 rounded-md  ">
          {(fromLanding || fromSignUp) && !isPassWrong && !loginError && (
            <div className="">
              <div className="bg-[#1c4072] text-white px-5 py-3 mb-2 rounded-sm flex items-center gap-2">
                <span>
                  {" "}
                  <IoInformationCircleOutline className="text-3xl font-extrabold" />
                </span>
                <p>
                  It looks like you already have an account. Sign in below to
                  start watching
                </p>
              </div>
            </div>
          )}
          <span className="text-white sm:text-4xl text-3xl font-semibold ">
            Sign In
          </span>
          <div className={`${loginError ? "block" : "hidden"}  `}>
            {" "}
            <p className="text-black bg-[#d89d32] px-3 py-3 rounded-sm">
              Sorry, we can't find an account with this email address. Please
              try again or create a new account.
            </p>{" "}
          </div>
          <div className={`${isPassWrong ? "block" : "hidden"}  `}>
            {" "}
            <p className="text-black bg-[#d89d32] px-3 py-3 rounded-sm">
              <span className="font-semibold"> Incorrect password</span> for
              <span className="font-semibold"> {submittedEmail} </span> You can
              try again or reset your password .
            </p>{" "}
          </div>
          <div className="mt-5   ">
            <form
              onSubmit={handleSubmit}
              action=""
              className={`flex flex-col ${emailError ? "gap-7" : "gap-4"}   relative`}
            >
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className={`peer/email  input-autofill-dark text-white bg-transparent  py-4 pl-5 w-full border ${emailError ? "border-red-600" : "border-[#5f5f5e]"} rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600`}
              />
              <label
                htmlFor="email"
                className="text-gray-400 absolute  left-6  top-7  -translate-y-1/2  transition-all   peer-placeholder-shown/email:top-7  peer-placeholder-shown/email:text-base peer-not-placeholder-shown/email:top-3 peer-not-placeholder-shown/email:left-5 peer-not-placeholder-shown/email:text-xs  peer-placeholder-shown/email:text-white peer-focus/email:top-3   peer-focus/email:left-5 peer-focus/email:text-xs  peer-focus/email:text-gray-300 "
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
                className={`peer  text-white bg-transparent py-4 pl-5  w-full border  ${passError ? "border-red-600" : " border-[#5f5f5e] "} rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600`}
              />
              <label
                htmlFor="password"
                className={`text-gray-400 absolute  left-6  top-26  -translate-y-1/2  transition-all  ${emailError ? "peer-placeholder-shown:top-28" : "peer-placeholder-shown:top-25"} peer-placeholder-shown:text-base  peer-placeholder-shown:text-white ${emailError ? "peer-not-placeholder-shown:top-25" : "peer-not-placeholder-shown:top-22"}   peer-not-placeholder-shown:left-5 peer-not-placeholder-shown:text-xs ${emailError ? "peer-focus:top-25" : "peer-focus:top-22"} peer-focus:left-5 peer-focus:text-xs   `}
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
                className={` py-2.5 ${passError ? "mt-4" : "mt-0"} cursor-pointer active:bg-gray-600 hover:bg-red-700 transition-colors duration-300 text-white bg-[#e50815] rounded-md  flex  justify-center items-center lg:gap-2 `}
              >
                {" "}
                Sign In
              </button>
            </form>
          </div>
          <div className="mt-9  text-center">
            <Link className="text-white underline">Forgot Password? </Link>
          </div>
          <div className=" mt-10">
            <p className="text-gray-300">
              New to Netflix?
              <span>
                <button
                  onClick={() => {
                    setTimeout(() => {
                      navigate("/");
                    }, 700);
                  }}
                  className=" text-white cursor-pointer font-semibold hover:underline"
                >
                  {" "}
                  Sign Up now.{" "}
                </button>
              </span>
            </p>
            <p className="mt-10 text-xs text-gray-400 sm:pr-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
