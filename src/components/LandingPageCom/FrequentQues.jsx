import React from "react";

function FrequentQues() {
  return (
    <div className="w-full h-auto flex flex-col lg:px-35 md:px-20 px-5 bg-black pt-5 ">
      <div className="bg-black px-6">
        <h2 className="text-white lg:text-2xl sm:text-xl text-lg font-semibold  sm:-ml-4 -ml-2">
          Frequently asked questions
        </h2>
      </div>
      <div className="flex flex-col gap-2 pt-4 px-4">
        <div className="flex flex-col px-4 bg-[#2d2d2d] hover:bg-[#3b3b3f] ">
          <details className="group border-b border-gray-700 py-4 cursor-pointer ">
            <summary className="text-white h-10 lg:text-2xl text-xl lg:font-semibold  flex justify-between items-center">
              <span>What is Netflix?</span>
              <span className="lg:text-5xl text-4xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <hr className="text-gray-400 mt-3 " />
            <div className="mt-3 lg:text-2xl text-md lg:font-semibold text-gray-300 lg:leading-relaxed pr-4">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices. You can watch as much as
              you want, whenever you want, without a single ad – all for one low
              monthly price. There's always something new to discover, and new
              TV shows and movies are added every week!
            </div>
          </details>
        </div>
        <div className="flex flex-col px-4 bg-[#2d2d2d] hover:bg-[#3b3b3f]">
          <details className="group border-b border-gray-700 py-4 cursor-pointer">
            <summary className="text-white h-10 lg:text-2xl text-xl lg:font-semibold  flex justify-between items-center">
              <span>How mmuch does Netflix cost?</span>
              <span className="lg:text-5xl text-4xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <hr className="text-gray-400 mt-3 " />
            <div className="mt-3 lg:text-2xl text-md lg:font-semibold text-gray-300 lg:leading-relaxed pr-4">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹149 to ₹649 a month. No extra costs, no contracts.
            </div>
          </details>
        </div>
        <div className="flex flex-col px-4 bg-[#2d2d2d] hover:bg-[#3b3b3f]">
          <details className="group border-b border-gray-700 py-4 cursor-pointer">
            <summary className="text-white h-10 lg:text-2xl text-xl lg:font-semibold  flex justify-between items-center">
              <span>Where can I watch?</span>
              <span className="lg:text-5xl text-4xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <hr className="text-gray-400 mt-3 " />
            <div className="mt-3 lg:text-2xl text-md lg:font-semibold text-gray-300 lg:leading-relaxed pr-4">
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles. You can also download your
              favourite shows with the iOS or Android app. Use downloads to
              watch while you're on the go and without an internet connection.
              Take Netflix with you anywhere.
            </div>
          </details>
        </div>
        <div className="flex flex-col px-4 bg-[#2d2d2d] hover:bg-[#3b3b3f]">
          <details className="group border-b border-gray-700 py-4 cursor-pointer">
            <summary className="text-white h-10 lg:text-2xl text-xl lg:font-semibold  flex justify-between items-center">
              <span>How do I cancel?</span>
              <span className="lg:text-5xl text-4xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <hr className="text-gray-400 mt-3 " />
            <div className="mt-3 lg:text-2xl text-md lg:font-semibold text-gray-300 lg:leading-relaxed pr-4">
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </div>
          </details>
        </div>
        <div className="flex flex-col px-4 bg-[#2d2d2d] hover:bg-[#3b3b3f]]">
          <details className="group border-b border-gray-700 py-4 cursor-pointer">
            <summary className="text-white h-10 lg:text-2xl text-xl lg:font-semibold  flex justify-between items-center">
              <span>What can I watch on Netflix?</span>
              <span className="lg:text-5xl text-4xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <hr className="text-gray-400 mt-3 " />
            <div className="mt-3 lg:text-2xl text-md lg:font-semibold text-gray-300 lg:leading-relaxed pr-4">
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </div>
          </details>
        </div>
        <div className="flex flex-col px-4 bg-[#2d2d2d] hover:bg-[#3b3b3f]">
          <details className="group border-b border-gray-700 py-4 cursor-pointer">
            <summary className="text-white h-10 lg:text-2xl text-xl lg:font-semibold  flex justify-between items-center">
              <span>Is Netflix good for kids?</span>
              <span className="lg:text-5xl text-4xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <hr className="text-gray-400 mt-3 " />
            <div className="mt-3 lg:text-2xl text-md lg:font-semibold text-gray-300 lg:leading-relaxed pr-4">
              he Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space. Kids profiles come with PIN-protected
              parental controls that let you restrict the maturity rating of
              content kids can watch and block specific titles you don’t want
              kids to see.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default FrequentQues;
