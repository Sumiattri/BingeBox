import React from "react";

function Footer() {
  return (
    <footer>
      <div className="  space-y-6 bg-[#161616]  lg:px-39 md:px-25 px-10  pb-15 pt-7">
        <p className="text-gray-300">
          Questions? Call{" "}
          <span className="underline cursor-pointer">000-800-040-1843</span>
        </p>

        <div className="grid text-[#bababa] grid-cols-2 sm:grid-cols-4 gap-4 underline ">
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

        <p className="text-xs mt-4 text-[#bababa]">
          BingeBox India • Created by Sumit ⚡
        </p>
      </div>
    </footer>
  );
}

export default Footer;
