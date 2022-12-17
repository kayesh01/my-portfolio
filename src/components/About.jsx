import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Kayesh Mohammad Injamamul Haque I have earned a bachelor’s degree in computer science and my studies centered on mathematics, web design, database management, coding and  programming software used to create websites. I have recently completed the MERN stack development course from Programming-Hero and I have completed several projects by adding different features which you can see in my resume.
        </p>

        <br />

        <p className="text-xl">
          With 4+ years of experience in two companies as an APPLICATION SPECIALIST of  ERP and Point Of Sale software. As an application specialist I Worked with the team in the identification of business requirements, functional design, process design (including scenario design, flow mapping), prototyping, testing, training, and defining to clients. Some Of my best projects are given below.
        </p>
      </div>
    </div>
  );
};

export default About;
