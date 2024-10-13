import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("work");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, []);

  const setActiveTabLink = (tab) => {
    setActiveTab(tab)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(tab);
  }

  return (
    <header className="sticky top-0 w-full backdrop-blur-lg z-50">
      <div className=" mx-auto px-10 py-8 flex justify-between items-center">
        {/* Left side: Work & Info */}
        <div className="flex space-x-8">
          <div className="text-2xl font-bold flex items-center">
            <div className="flex flex-col">
              Arjun Solanki
              <span className="text-lg text-gray-400">
                Full stack web developer
              </span>
            </div>
          </div>
        </div>
        <div className="nav-pill relative flex justify-center items-center w-max mx-auto bg-gradient-to-b from-gray-900 to-black rounded-full p-1.5 shadow-xl">
          {/* Highlight Background */}
          <div
            className={`absolute w-[50%] h-full rounded-full transition-all duration-300 ease-in-out 
          ${activeTab === "/" ? "left-0" : "left-[50%]"}`}
          >
            {/* Small Light Highlight */}
            <div className="nav-indicator-glow absolute top-[-6px] left-[50%] transform -translate-x-1/2 w-4 h-1 rounded-full bg-white/40 shadow-md" />
          </div>

          {/* Work Tab */}
          <button
            onClick={() => setActiveTabLink("/")}
            className={`nav-toggle relative z-10 px-8 py-2 rounded-full transition-colors duration-300 ease-in-out 
          ${activeTab === "/" ? "text-white" : "text-gray-400"}`}
          >
            Work
          </button>

          {/* Info Tab */}
          <button
            onClick={() => setActiveTabLink("/info")}
            className={`nav-toggle relative z-10 px-8 py-2 rounded-full transition-colors duration-300 ease-in-out 
          ${activeTab === "/info" ? "text-white" : "text-gray-400"}`}
          >
            Info
          </button>
        </div>
        {/* Right side: LinkedIn & Resume */}
        <div className="flex space-x-6 text-gray-400">
          <a
            href="https://www.linkedin.com/in/aarjunsolanki023/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1LGm3PDq6GzUoOOxyt3-_kpJQqOcPRCBm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
