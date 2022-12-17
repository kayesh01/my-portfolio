import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Portfolio = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProject(data))
  }, [])

  return (
    <div
      id="projects"
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
          {project.map(({ id, src, title, link, client }) => (
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
                  rel="noreferrer" className="mr-5">Demo</a>
                <a href={client} target="_blank"
                  rel="noreferrer" className="mr-5">Code</a>
                <Link to={`/project/${id}`}>Details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
