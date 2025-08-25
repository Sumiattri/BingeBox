import GtngStrtdForm from "./GtngStrtdForm";
function Landingfooter() {
  return (
    <footer className="bg-black text-gray-400   flex flex-col  justify-center  text-sm  pt-8 ">
      <p className="text-white md:text-[18px] sm:text-[16px] text-[14px] font-sans sm:text-center sm:px-0 px-[38px]">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="lg:max-w-[47rem]   sm:max-w-[40rem] w-full sm:pb-1 pb-18 px-10 box-border text-center mx-auto  ">
        {" "}
        <GtngStrtdForm />
      </div>
      <div className="  space-y-6   lg:px-39 md:px-25 px-10 sm:mt-15 mt-10 pb-15">
        <p className="text-gray-300">
          Questions? Call{" "}
          <span className="underline cursor-pointer">000-800-040-1843</span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 underline ">
          <a href="#">FAQ</a>
          <a href="#">Help Center</a>
          <a href="#">Account</a>
          <a href="#">Media Centre</a>
          <a href="#">Investor Relations</a>
          <a href="#">Jobs</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Corporate Information</a>
          <a href="#">Contact Us</a>
        </div>

        <div>
          <select
            className="bg-transparent border border-gray-600 px-3 py-1 rounded text-white"
            defaultValue="en"
          >
            <option value="en" className="text-black">
              English
            </option>
            <option value="hi" className="text-black">
              हिन्दी
            </option>
          </select>
        </div>

        <p className="text-xs mt-4">BingeBox India • Created by Sumit ⚡</p>
      </div>
    </footer>
  );
}

export default Landingfooter;
