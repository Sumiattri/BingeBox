import { useNavigate } from "react-router-dom";
import Navbar from "../../../components//AuthUserComp/AuthNavbar";
import Footer from "../../../components/AuthUserComp/HomePageComp/Footer";
import { IoArrowBackSharp } from "react-icons/io5";
import { db } from "../../../firebase/firestoreUtils";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import SpinnerOverlay3 from "../../../utils/SpinnerOverlay3";
import { GoHomeFill } from "react-icons/go";
import { LuScanFace } from "react-icons/lu";
import { FaFaceGrinBeam } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { useSelector } from "react-redux";

function Account() {
  const navigate = useNavigate();
  const [createdOn, setCreatedOn] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [overView, setOverView] = useState(true);
  const [profiles, setProfiles] = useState(false);
  const allProfiles = useSelector((state) => state.profile.allProfiles);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const data = userSnap.data();
          const createdAt = data.createdAt;
          const email = data.email;

          if (createdAt && createdAt.toDate) {
            const formattedDate = createdAt
              .toDate()
              .toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

            setCreatedOn(formattedDate);
            setEmail(email);
            setLoading(false);
          }
        }
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <SpinnerOverlay3 />;
  }

  return (
    <>
      <div className="bg-[#FAFAFA] w-screen relative  ">
        <Navbar />
        <hr className="text-gray-200" />

        <div className="h-screen  w-full flex  sm:flex-row flex-col items-start   sm:pt-7 pt-2 lg:pl-20 md:pl-19 sm:pl-13 lg:gap-25  md:gap-10 sm:gap-15 gap-7">
          <div className="lg:w-[20%] md:w-[25%] flex flex-col  sm:gap-6 gap-3  ">
            <div
              className=" text-black text-[14px] flex items-center gap-3 cursor-pointer px-5 py-3 hover:bg-gray-200 rounded  transition-colors duration-300 "
              onClick={() => {
                setTimeout(() => {
                  console.log("Now navigating");
                  navigate("/home");
                }, 500);
              }}
            >
              <IoArrowBackSharp className="text-xl " />
              <h1 className="md:text-sm sm:text-[12px] ">Back to Netflix</h1>
            </div>
            <div className="flex sm:flex-col flex-row gap-1 ">
              <p
                className=" flex items-center gap-3 px-5 py-2 cursor-pointer hover:bg-gray-200 rounded   transition-colors duration-300"
                onClick={() => {
                  setProfiles(false);
                  setOverView(true);
                }}
              >
                {overView ? (
                  <GoHomeFill className="text-2xl" />
                ) : (
                  <GoHome className="text-2xl" />
                )}

                <span
                  className={`font-medium text-lg  ${overView ? "text-black" : "text-[#4B4B4B]"} `}
                >
                  OverView
                </span>
              </p>
              <p
                className=" flex items-center gap-3 px-5 py-2 cursor-pointer hover:bg-gray-200 rounded   transition-colors duration-300 "
                onClick={() => {
                  setProfiles(true);
                  setOverView(false);
                }}
              >
                {!profiles ? (
                  <LuScanFace className="text-2xl" />
                ) : (
                  <FaFaceGrinBeam className="text-2xl" />
                )}

                <span
                  className={`font-medium text-lg ${profiles ? "text-black" : "text-[#4B4B4B]"}`}
                >
                  Profiles
                </span>
              </p>
            </div>
          </div>
          {overView && (
            <div className="  lg:w-[40rem] md:w-[30rem] sm:w-[22rem] w-[23rem]  flex flex-col  sm:gap-8 gap-4 sm:ml-0 mx-auto">
              <h2 className="text-black md:text-4xl sm:text-3xl text-2xl font-bold">
                Account
              </h2>
              <div className="md:h-45 sm:h-40 h-37 w-full border border-[#CCCCCC] rounded-lg flex flex-col pt-5 gap-7">
                <h2 className=" lg:w-[36%] md:w-[50%] sm:w-[50%] w-[90%] rounded-r-full bg-gradient-to-r from-[#383F9D] to-[#855AEE] text-white py-[10px] pl-3 md:text-[15px] sm:text-[12px] text-[10px] font-semibold">
                  {loading ? "Loading Info ..." : `Member since ${createdOn}`}
                </h2>
                <p className="md:text-lg text-[15px] font-medium pl-3">
                  Email : {email}
                </p>
              </div>
            </div>
          )}
          {profiles && (
            <div className="  lg:w-[40rem] md:w-[30rem] sm:w-[22rem] w-[23rem]  flex flex-col  sm:gap-8 gap-4 sm:ml-0 mx-auto">
              <h2 className="text-black md:text-4xl sm:text-3xl text-2xl font-bold">
                Profiles
              </h2>
              <div className=" w-full border border-[#CCCCCC] rounded-lg flex flex-col  gap-2">
                {allProfiles.map((profile) => (
                  <div
                    key={profile.id}
                    className="flex items-center gap-3 px-2 py-2 hover:bg-gray-200 rounded cursor-pointer transition "
                  >
                    <img
                      src={`/${profile.avatar}` || "/default-avatar.png"}
                      alt={profile.firstName}
                      className="w-12 h-12 rounded-full"
                    />
                    <span>{profile.firstName}</span>
                  </div>
                ))}
              </div>
              <div
                className="w-full bg-black group flex justify-center sm:-mt-5 rounded cursor-pointer"
                onClick={() => navigate("/profiles")}
              >
                <h2 className="text-white mx-auto py-3 text-[18px] group-hover:scale-105 transition-all duration-300">
                  Edit Profile
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-[#141414] pt-1">
        <Footer />
      </div>
    </>
  );
}

export default Account;
