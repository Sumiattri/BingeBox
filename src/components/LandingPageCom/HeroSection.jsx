import { IoIosArrowForward } from "react-icons/io";

function HeroSection() {
  return (
    <div
      // className="bg-cover bg-center h-[90vh] w-full overflow-hidden box-border border-4 relative"
      // className="bg-cover bg-center h-[90vh] w-full overflow-hidden box-border border-4 absolute inset-0"
      className="bg-cover relative bg-no-repeat bg-center h-[73vh] lg:h-[94vh] xmd:h-[85vh] w-full overflow-hidden box-border  -mt-22 grid justify-center items-center "
      style={{
        backgroundImage: `url(
          "https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/26c35d01-db23-4f28-b2eb-42490d7f4002/ID-id-20221219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        )`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 z-1 "></div>
      <div className="z-2  lg:max-w-[47rem]   sm:max-w-[40rem] w-full sm:p-16 py-18 px-6 box-border text-center mx-auto ">
        <p className="text-white text-3xl font-extrabold lg:text-6xl md:text-4xl lg:leading-18">
          Unlimited {""}
          <span className="text-white ">movies, TV shows, and more.</span>
        </p>
        <p className="text-white text-xl font-medium mt-2">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white text-md font-[300] mt-4  mx-auto flex justify-center max-w-[30rem]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          action=""
          className="  mt-5  flex sm:flex-row flex-col justify-between   relative max-h-15"
        >
          <input
            className="peer  text-white bg-black/50  py-4 pl-5 sm:w-[62%] w-full border border-[#5f5f5e] rounded-md placeholder-transparent focus:outline-nonefocus:ring-2 focus:ring-red-600"
            type="email"
            id="email"
            pattern="[A-Za-z0-9._-]+@[A-Za-z]+\.[a-z]{2,}$"
            required
          />

          <label
            htmlFor="email"
            className="text-gray-400 absolute  left-6  top-1/2  -translate-y-1/2  transition-all  peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base  peer-placeholder-shown:text-white peer-focus:top-3   peer-focus:left-5 peer-focus:text-xs  peer-focus:text-gray-300 "
          >
            Email address
          </label>

          <p className="hidden">Please enter a valid email address</p>

          <button
            type="submit"
            className="lg:px-3.5 sm:py-0 py-5 px-2 sm:mx-0 mx-auto max-h-13 sm:mt-0 mt-3 text-white bg-[#e50815] rounded-md lg:font-semibold sm:font-normal text-xs lg:text-sm sm:w-[35%] sm:max-w-60 max-w-55 flex  justify-center items-center lg:gap-2 "
          >
            <span className="text-2xl font-bold">Get started</span>{" "}
            <IoIosArrowForward className="text-3xl" />
            <i></i>
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-black z-10 " />
    </div>
  );
}

export default HeroSection;
