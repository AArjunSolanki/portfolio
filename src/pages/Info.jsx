import React from "react";
import arjun from "../assets/arjun.jpg";
import arjun2 from "../assets/arjun2.jpg";
import arjun3 from "../assets/arjun3.jpg";
import arjun4 from "../assets/arjun4.jpg";

const Info = () => {
  return (
    <div className="min-h-screen top-0 flex flex-col items-center text-white relative">
      <div className="container mb-20 flex items-center flex-col gap-10 w-full">
        <div className="flex justify-start items-center gap-3 mt-20 w-full">
          <div className="icon-section-dot"></div>
          <h4 className="text-[#f2f2f266]">ABOUT ME</h4>
        </div>
        <h1 className="text-hero-about text-[40px] md:text-[60px] lg:text-[80px] font-bold leading-tight mb-4 text-white text-center px-4">
          I'm a full-stack developer passionate about building seamless,
          user-focused products that empower and inspire.
        </h1>
      </div>

      <div className="container flex flex-col lg:flex-row justify-between w-full gap-16">
        {/* Card 1 */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg relative cursor-pointer group">
          <div className="border-window">
            <div className="window-main img-height">
              <div className="window-content text-center">
                <img src={arjun2} alt="" />
              </div>
              <div className="project-card-colour"></div>
            </div>
          </div>
          <div className="text-left w-full p-6 lg:p-10 bg-none">
            <h3 className="text-[#f2f2f2e6] text-xl mb-4">
              Arjun Solanki — Full-stack Developer
            </h3>
            <p className="text-[#f2f2f299]">
              Based in Surat, Gujarat. With years of experience in creating
              sleek and innovative user experiences and backend performance.
              <br />
              <br /> I specialize in Laravel, React.js, Vue.js and Node.js. My
              journey started in 2014, evolving into a versatile developer,
              passionate about modular and scalable solutions.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg relative cursor-pointer group">
          <div className="text-left w-full p-6 lg:p-10 bg-none">
            <h3 className="text-[#f2f2f2e6] text-xl mb-4">
              But I wanted more.
            </h3>
            <p className="text-[#f2f2f299]">
              While I valued my academic experiences, I felt a deep yearning to
              explore the world. I aspired to broaden my horizons, gaining
              inspiration from diverse cultures and landscapes, and to create
              designs that resonate globally.
            </p>
          </div>
          <div className="border-window">
            <div className="window-main img-height">
              <div className="window-content text-center">
                <img src={arjun3} alt="" />
              </div>
              <div className="project-card-colour"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col lg:flex-row justify-between w-full gap-16 mt-10">
        {/* Card 3 */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg relative cursor-pointer group">
          <div className="border-window">
            <div className="window-main img-height">
              <div className="window-content text-center">
                <img src={arjun4} alt="" />
              </div>
              <div className="project-card-colour"></div>
            </div>
          </div>
          <div className="text-left w-full p-6 lg:p-10 bg-none">
            <h3 className="text-[#f2f2f2e6] text-xl mb-4">
              Turning my dreams into reality
            </h3>
            <p className="text-[#f2f2f299]">
              I harnessed the skills and design principles I cultivated as a
              full-stack developer to accelerate my journey into creating
              impactful digital solutions.
              <br />
              <br /> I thrive on solving complex problems through innovative
              coding, and I place a high value on clean, efficient architecture
              and user-centric design.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full lg:w-1/2 rounded-lg shadow-lg relative cursor-pointer group">
          <div className="text-left w-full p-6 lg:p-10 bg-none">
            <h3 className="text-[#f2f2f2e6] text-xl mb-4">In my free time.</h3>
            <p className="text-[#f2f2f299]">
              I dedicate myself to coding and learning new technologies to
              enhance my skills. I love hitting the gym to maintain my fitness
              and push my limits. Traveling in my safari car allows me to
              explore new places and enjoy the great outdoors.
              <br />
              <br /> Whether it’s a weekend getaway or a road trip, I cherish
              every adventure. I also enjoy engaging with the tech community
              online, sharing insights, and collaborating on projects.
            </p>
          </div>
          <div className="border-window">
            <div className="window-main img-height">
              <div className="window-content text-center">
                <img src={arjun} alt="" />
              </div>
              <div className="project-card-colour"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-6 mt-20 border-t border-gray-600 w-full">
        <div className="flex justify-start items-center gap-3 mt-20 w-full">
          <div className="icon-section-dot"></div>
          <h4 className="text-[#f2f2f266]">EXPERIENCE</h4>
        </div>
        <div className="flex my-10 justify-between">
          <h1 className="text-5xl">Dignizant Technologies LLP</h1>
          <div className="w-3/6	">
            <h3 className="text-2xl">Full stack web developer</h3>
            <div className="text-xl leading-[125%] font-[400] text-[#f2f2f266] my-3">09/'19 - Present</div>
            <div className="text-xl leading-[125%] font-[400] text-[#f2f2f266]">
              I have worked on Frankporter, other client and in house projects along with team leading.
            </div>
          </div>
        </div>
        <div className="flex my-20 justify-between">
          <h1 className="text-5xl">Techno Brigade Infotech</h1>
          <div className="w-3/6	">
            <h3 className="text-2xl">Web developer</h3>
            <div className="text-xl leading-[125%] font-[400] text-[#f2f2f266] my-3">06/'18 - 07/'19</div>
            <div className="text-xl leading-[125%] font-[400] text-[#f2f2f266]">
              Here I have worked with car washing web app and other local client project for textile market
            </div>
          </div>
        </div>
        <div className="flex my-20 justify-between">
          <h1 className="text-5xl">Veer Infotech</h1>
          <div className="w-3/6	">
            <h3 className="text-2xl">PHP developer</h3>
            <div className="text-xl leading-[125%] font-[400] text-[#f2f2f266] my-3">12/'14 - 04/'18</div>
            <div className="text-xl leading-[125%] font-[400] text-[#f2f2f266]">
              Here I have worked one product which is websaye, product is covering the directories, E-commerce and so many other thing including chat and mails.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
