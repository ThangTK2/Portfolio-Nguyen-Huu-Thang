import { useState } from "react";
import icon_react from "/icon_react.png";
import tailwindcss from "/tailwindcss.png";
import laravel from "/laravel.png";
import imghero from "/imghero.png";
import wp from "/wp.webp";
import jquery from "/jquery.webp";
import node from "/node.webp";
import mongo from "/mongo.webp";
import mysql from "/mysql.webp";
import git from "/git.svg";
import fl from "/fl.png";

// Data chia nhóm
const skillsData = {
  music1: [
    {
      id: 10,
      image: fl,
      title: "FL Studio",
    },
  ],
  web: [
    { id: 1, image: wp, title: "WordPress" },
    { id: 2, image: icon_react, title: "React JS" },
    { id: 3, image: tailwindcss, title: "Tailwind CSS" },
    { id: 4, image: laravel, title: "Laravel" },
    { id: 5, image: jquery, title: "jQuery" },
    { id: 6, image: node, title: "Node JS" },
    { id: 7, image: mysql, title: "MySQL" },
    { id: 8, image: mongo, title: "MongoDB" },
    { id: 9, image: git, title: "Git" },
  ],
};

const SkillBox = ({ image, title }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
  </article>
);

export default function Skills() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-18"
    >
      {/* Background */}
      <div className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2"></div>

      {/* Image Left */}
      <img
        src={imghero}
        alt="left picture"
        className="absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />

      {/* Content */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="relative z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Expertise <br /> and{" "}
            <span className="text-purple-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base max-w-xl mx-auto">
            I pursue both web development and music production, blending
            technology with creativity. These are the key skills that highlight
            my strengths across both fields.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "web"
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("music1")}
            className={`px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "music"
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            Music Production
          </button>
        </div>

        {/* Skills Grid */}
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4"
        >
          {skillsData[activeTab].map((skill) => (
            <SkillBox key={skill.id} image={skill.image} title={skill.title} />
          ))}
        </section>
      </div>

      {/* Image Right */}
      <img
        src={imghero}
        alt="right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
