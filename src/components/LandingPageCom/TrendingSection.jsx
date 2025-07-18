import { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function TrendingSection() {
  const rowRef = useRef();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // 🧠 Helper function to check position
  const checkScrollPosition = () => {
    const scrollElement = rowRef.current;
    setAtStart(scrollElement.scrollLeft === 0);
    setAtEnd(
      scrollElement.scrollLeft + scrollElement.clientWidth >=
        scrollElement.scrollWidth - 1
    );
  };

  // 👈 Left scroll
  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  // 👉 Right scroll
  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // 🔄 Track scroll manually
  useEffect(() => {
    const scrollElement = rowRef.current;
    checkScrollPosition(); // Initial check

    scrollElement.addEventListener("scroll", checkScrollPosition);
    return () =>
      scrollElement.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div className="flex flex-col bg-black  w-full lg:px-35 md:px-20 px-5">
      <div className="bg-black px-6">
        <h2 className="text-white lg:text-2xl sm:text-xl text-lg font-semibold  sm:-ml-4 -ml-2">
          Trending Now
        </h2>
      </div>

      <div className="  relative group:">
        {!atStart && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/60 text-white pt- rounded-full"
          >
            <IoIosArrowBack size={24} />
          </button>
        )}
        <div
          ref={rowRef}
          className="overflow-x-auto whitespace-nowrap py-7 px-6 scrollbar-hide scroll-smooth hide-scrollbar "
        >
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45 mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out "
            style={{
              backgroundImage: `url("https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYUCgDPIk4LvnEw_j-dC5ca65oxm4yP2Z7RFKlRcN6WYzCwNA4MhTNqTRrSAK9zND3cSjrYEpbQculmTCXPD09ZbvdCosdbuOjc.webp?r=062")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYGL4_ns5MGTE5-Yd3ZQVB5apyY9yxQ39lxjT_27ehdoGzrxRwNc4osgXEeifcv9yO_MgMySL-p6hMxtQZnIEkZmyglIJ7wm7ik.webp?r=c23)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZ2Btia34ViHOdbGThR2xD0XYVD9vkdTkUULeET8PcHeq12ebMOJyLaTD1yS26NaRfUqDMknk2XnomOCg78WEKeN3VEDdOKzFRayBGveEZ-MeOaVD-v0z5P25idICKgt-nXX.webp?r=a1c)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYVcRfFB91jy3f8-_Alb6H4RUzqXFRA7ejjOfCOXF20XLRVeCyT3ZFEimKbZAimt2ayVUWXSnp6ApNxpoK0mA3XzJD__irrDkdMD6lDrOFPSvQqP8s0xn2dNBaU9JxIu4lUd.webp?r=63b)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWtQdcUd4n6VKz6HTm_IbI2cOq0VDU7fDQpomIXBLuCYqtJ4j8hj2pz7j6spnX2osjRgTMJQ9xkMieYZWqC6xC8G4tGlTLJBm3I.webp?r=cc2)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQqOh2yhpKE8385dV9hjlxxXtG63RjSjrlNOkx2yLuGMYe8JFTnA9ScVsioAhTa9Ds34ERhB2R4aBFUng1j54IFwl5JvjgVmGEU.webp?r=d66)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZFBdXweIqorvQIPkQbuKg9rFcZJJ8yCUzSX1ySYOsmrcMeUgLlY3YWvFcXee7lFjHwMT_Ofd03ttH-rTzAHPZskA6K-f4imBAY.webp?r=81d)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: ` url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUbEuw4gn448vhUbeTgwsmEsA4ZhBFHAbPyFyAk414jH72BDs0ALdA2TEDez1mRZHuyUjlpB_EL0LxkrymlRyHs2joUg2Izzl4Q.webp?r=ad2)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45  mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="inline-block  h-45 lg:h-65 w-35 lg:w-45 mr-6 lg:mr-12 rounded-xl hover:scale-108 transform transition-transform duration-300 ease-in-out"
            style={{
              backgroundImage: `url(https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf4wStrKekb1hEKRFD141eOa8rGZTWJK1QxVF2zxvJDivIDqQMNDUmh_d33HVtAxToXkZlAeLEzdhxPXCskBuNsi4X_wSv2Brzk.webp?r=7de)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/* 👉 Right arrow */}
        {!atEnd && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/60 text-white rounded-full"
          >
            <IoIosArrowForward size={24} />
          </button>
        )}
      </div>
    </div>
  );
}

export default TrendingSection;

{
  /* <div class="flex overflow-x-auto">
  <div class="flex-shrink-0 w-40 h-40 bg-red-500 mr-4"></div>
  <div class="flex-shrink-0 w-40 h-40 bg-blue-500 mr-4"></div>
</div>;
*/
}
