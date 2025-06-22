import GtngStrtdForm from "./GtngStrtdForm";

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
      <div
        className="z-2  md:-mt-5 -mt-10 lg:max-w-[47rem]   sm:max-w-[40rem] w-full sm:p-16 py-18 px-6 box-border  text-center mx-auto "
        // style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
      >
        <p className="text-white text-3xl font-extrabold lg:text-6xl md:text-4xl lg:leading-18">
          Unlimited {""}
          <span className="text-white ">movies, TV shows and more.</span>
        </p>
        <p className="text-white text-xl font-medium mt-2">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-white text-md font-[300] mt-4  mx-auto flex justify-center max-w-[34rem]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <GtngStrtdForm />
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-b from-transparent to-black z-10 " />
    </div>
  );
}

export default HeroSection;
