import React from "react";
import phoneresale from "../assets/portfolio/phoneresale.png";
import mykitchen from "../assets/portfolio/mykitchen.png";

import education from "../assets/portfolio/education.png";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: phoneresale,
      title: "Sellmymobile.com",
      link: "https://phone-resale-aa0a5.web.app/",
      client: "https://github.com/kayesh01/sellmymobile.com-client-side"
    },
    {
      id: 2,
      src: education,
      title: "learn to earn",
      link: "https://education-learning-5a12d.web.app/",
      client: "https://github.com/kayesh01/education-platform-client"
    },
    {
      id: 3,
      src: mykitchen,
      title: "my Kitchen",
      link: "https://my-kitchen-56d8f.web.app/",
      client: "https://github.com/kayesh01/my-kitchen-client"
    }
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link, client }) => (
            <div key={id} className="shadow-md md:h-60 shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md md:h-36 md:w-80 duration-200 hover:scale-105"
              />
              <p className="ml-2 mt-2">{title}</p>
              <div className="mt-8 flex items-center justify-center">
                {/* <Link to={link}>Demo</Link> */}
                <a href={link} target="_blank"
                  rel="noreferrer" className="mr-24">Demo</a>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo 
                </button> */}
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
                <a href={client} target="_blank"
                  rel="noreferrer">Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
