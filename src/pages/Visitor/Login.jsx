import { Link } from "react-router-dom";

function Login() {
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
        <Link
          to="/"
          className="md:w-40 w-25 h-20 pt-3 absolute z-2 top-3 md:left-25 sm:left-15 left-5"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png"
            alt="Netflix Logo"
            className="w-full h-auto object-contain mt-3 "
          />
        </Link>
        <div className="absolute inset-0 bg-black sm:opacity-60 opacity-100 z-1 "></div>
        <div className="z-2  h-[43rem] max-w-[30rem] bg-black/65 flex flex-col sm:pt-15 pt-8 sm:px-13 px-7 sm:mt-0 mt-8 gap-2 rounded-md  ">
          <span className="text-white sm:text-4xl text-3xl font-semibold ">
            Sign In
          </span>
          <div className="mt-5  ">
            <form action="" className="flex flex-col gap-4 relative">
              <input
                type="email"
                id="email"
                placeholder=""
                required
                className="peer/email  text-white bg-transparent  py-4 pl-5 w-full border border-[#5f5f5e] rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600"
              />
              <label
                htmlFor="email"
                className="text-gray-400 absolute  left-6  top-7  -translate-y-1/2  transition-all   peer-placeholder-shown/email:top-7  peer-placeholder-shown/email:text-base peer-not-placeholder-shown/email:top-3 peer-not-placeholder-shown/email:left-5 peer-not-placeholder-shown/email:text-xs  peer-placeholder-shown/email:text-white peer-focus/email:top-3   peer-focus/email:left-5 peer-focus/email:text-xs  peer-focus/email:text-gray-300 "
              >
                Email address
              </label>
              <input
                type="password"
                id="password"
                placeholder=""
                required
                className="peer  text-white bg-transparent py-4 pl-5  w-full border border-[#5f5f5e] rounded-md  placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600"
              />
              <label
                htmlFor="password"
                className="text-gray-400 absolute  left-6  top-26  -translate-y-1/2  transition-all  peer-placeholder-shown:top-26 peer-placeholder-shown:text-base  peer-placeholder-shown:text-white peer-focus:top-21 peer-not-placeholder-shown:top-21 peer-not-placeholder-shown:left-5 peer-not-placeholder-shown:text-xs  peer-focus:left-5 peer-focus:text-xs  peer-focus:text-gray-300 "
              >
                Password
              </label>

              <Link
                to="/welcome"
                className=" py-2.5 text-white bg-[#e50815] rounded-md  flex  justify-center items-center lg:gap-2 "
              >
                Sign In
              </Link>
            </form>
          </div>
          <div className="mt-9  text-center">
            <Link className="text-white underline">Forgot Password? </Link>
          </div>
          <div className=" mt-10">
            <p className="text-gray-300">
              New to Netflix?
              <span>
                <Link
                  to="/signup"
                  className=" text-white font-semibold hover:underline"
                >
                  {" "}
                  Sign Up now.{" "}
                </Link>
              </span>
            </p>
            <p className="mt-10 text-xs text-gray-400 sm:pr-5">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#161616] h-70 relative">
        {" "}
        <div className="absolute bottom-25 left-40 text-md text-gray-600">
          Netflix India
        </div>
      </div>
    </>
  );
}

export default Login;
