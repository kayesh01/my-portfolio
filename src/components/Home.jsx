import React from "react";
import myimage from "../assets/myimage.jpg";
import { MdOutlineKeyboardArrowRight, MdDownload } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 6 months of experience building and desgining Web Sites.
            I love to work on web application using technologies like
            React, Tailwind, Bootstarp, Next JS and MongoDB.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"><a target="_blank"
              rel="noreferrer"
              download={"Kayesh-resume.pdf"}
              href="https://drive.google.com/file/d/1T9jKtqm83tgtXdh2Myfy_FcGeb04F23s/view?usp=sharing">Download Resume</a><span className="group-hover:rotate-90 duration-300">
                <MdDownload size={20} className="ml-2" />
              </span></button>
          </div>
        </div>

        <div>
          <img
            src={myimage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
