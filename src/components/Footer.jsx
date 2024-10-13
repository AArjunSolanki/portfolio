import React from "react";

const Footer = () => {
  return (
    <footer className=" text-gray-400 py-10 px-5 w-full border-t-2 border-t-gray-600 mt-10">
      <div className="container mx-auto grid grid-cols-3 items-start">
        {/* Left Section - Logo */}
        <div className="flex justify-start text-white text-2xl signature">AS</div>

        {/* Center Section - Links */}
        <div className="flex flex-col justify-center text-center space-y-3"></div>

        {/* Right Section - Contact */}
        <div className="flex gap-20 justify-end text-right">
          <div>
            <div className="font-medium text-gray-400 mb-4">MAIN</div>
            <div>
              <a
                href="/"
                className="block hover:text-gray-200 mb-3 text-white"
              >
                Work
              </a>
              <a href="info" className="block hover:text-gray-200 text-white">
                Info
              </a>
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-400 mb-4">CONTACT</div>
            <div>
              <a
                href="https://www.linkedin.com/in/aarjunsolanki023/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-200 mb-3 text-white"
              >
                LinkedIn →
              </a>
              <a
                href="https://drive.google.com/file/d/1LGm3PDq6GzUoOOxyt3-_kpJQqOcPRCBm/view?usp=sharing"
                target="_blank"
                className="block hover:text-gray-200 text-white"
              >
                Resume →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-5 text-left text-sm text-gray-500">
          <div className="text-lg text-white">© 2024 Arjun Solanki. All Rights Reserved.</div>
          <div className="text-base text-gray-400">Made with love and Orange juice (No sugar, No ice).</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
