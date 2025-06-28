import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-[360px] bg-[#141414] ">
      <div className="w-[75%] mx-auto h-auto   md:mt-[100px] mt-[60px] flex flex-col gap-4">
        <div>
          <div className="ml-3 flex gap-7 text-2xl text-white ">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        <div className="grid sm:grid-cols-4 grid-cols-3 gap-5 text-[#808080] text-xs ">
          <p className="hover:underline cursor-pointer">Audio Description</p>
          <p className="hover:underline cursor-pointer">Help Center</p>
          <p className="hover:underline cursor-pointer">Gift Cards</p>
          <p className="hover:underline cursor-pointer">Media Center</p>
          <p className="hover:underline cursor-pointer">Investor Relation</p>
          <p className="hover:underline cursor-pointer">Jobs</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Ad Choices</p>
          <p className="hover:underline cursor-pointer">Legal Notice</p>
          <p className="hover:underline cursor-pointer">Cookie Preferences</p>
          <p className="hover:underline cursor-pointer">
            Corporate Information
          </p>
          <p className="hover:underline cursor-pointer"> Contact Us</p>
        </div>
        <div className="mt-5   ">
          <button className="text-[#808080] border border-[#808080] text-xs py-2 px-2">
            Service code
          </button>
        </div>
        <div className="text-[#808080] text-xs">
          Netfkix India Clone -Created By Sumit⚡️
        </div>
      </div>
    </div>
  );
}

export default Footer;
