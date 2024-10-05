import React from "react";
import Plus from "../assets/plus.svg";
import arrow from "../assets/arrow.svg";
import right from "../assets/right.svg";
import fp from "../assets/frankporter.png"
import ilerno from "../assets/ilerno.png"
import cult from "../assets/cult.png"
import usp from "../assets/usp.png"

const Work = () => {
  return (
    <div className="container min-h-screen flex justify-center items-center flex-col gap-28 w-full">
      {/* Window Frame */}
      <div className="container bg-gray-900 rounded-lg shadow-lg mt-40 relative">
        <div className="border-window">
          <div className="window-main">
            {/* Title Bar */}
            <div className="window-bar flex items-center justify-between p-2 bg-gray-800 rounded-t-lg">
              <div className="flex items-center">
                {/* Window Buttons */}
                <div className="red-dot bg-red-500 w-3 h-3 rounded-full mr-2" />
                <div className="yellow-dot bg-yellow-500 w-3 h-3 rounded-full mr-2" />
                <div className="green-dot bg-green-500 w-3 h-3 rounded-full" />
              </div>
              <div className="text-white font-semibold">
                <img
                  src={Plus}
                  className="h-7 text-gray-500"
                  alt="React logo"
                />
              </div>
            </div>

            {/* Content */}
            <div className="window-content padding p-8 text-center">
              <div className="hero-text-content">
                <h1 className="text-hero text-5xl font-bold leading-tight mb-4 text-white">
                  I design and develop systems,
                  <span className="font-serif text-gray-300">
                    &nbsp;delivering innovative web solutions.
                  </span>
                </h1>
              </div>
              <div className="hero-about-grid">
                <p className="mb-2 text-[32px] text-gray-300">
                  Full stack web developer
                </p>
                <p className="text-gray-400 text-[28px]">
                  Dignizant Technologies LLP. Based in Surat.
                </p>
              </div>
            </div>

            {/* Down Arrow */}
            <div className="bg-[#101010b3] flex justify-center">
              <span className="animate-bounce text-2xl text-white z-10">
                <img src={arrow} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg relative cursor-pointer group relative">
        <div className="border-window">
          <div className="window-main">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#101010b3] rounded-t-lg p-10">
              <h4 className="text-3xl font-bold leading-tight text-white">
                Frankporter
              </h4>
              <img src={right} alt="" />
            </div>

            {/* Content */}
            <div className="window-content px-28 pt-10 pb-10 text-center">
              <img src={fp} alt="" className="z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10" />
            </div>
            <div className="project-card-colour fp"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg relative cursor-pointer group relative">
        <div className="border-window">
          <div className="window-main">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#101010b3] rounded-t-lg p-10">
              <h4 className="text-3xl font-bold leading-tight text-white">
                USP
              </h4>
              <img src={right} alt="" />
            </div>

            {/* Content */}
            <div className="window-content px-28 pt-10 pb-10 text-center">
              <img src={usp} alt="" className="z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10" />
            </div>
            <div className="project-card-colour usp"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg relative cursor-pointer group relative">
        <div className="border-window">
          <div className="window-main">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#101010b3] rounded-t-lg p-10">
              <h4 className="text-3xl font-bold leading-tight text-white">
                iLerno
              </h4>
              <img src={right} alt="" />
            </div>

            {/* Content */}
            <div className="window-content px-28 pt-10 pb-10 text-center">
              <img src={ilerno} alt="" className="z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10" />
            </div>
            <div className="project-card-colour ilerno"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg relative cursor-pointer group relative">
        <div className="border-window">
          <div className="window-main">
            {/* Title Bar */}
            <div className="flex items-center justify-between bg-[#101010b3] rounded-t-lg p-10">
              <h4 className="text-3xl font-bold leading-tight text-white">
                Cult Booking
              </h4>
              <img src={right} alt="" />
            </div>

            {/* Content */}
            <div className="window-content px-28 pt-10 pb-10 text-center">
              <img src={cult} alt="" className="z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-10" />
            </div>
            <div className="project-card-colour cult"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
