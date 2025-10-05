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
import csharp from "/csharp.png";
import php from "/php.png";
import bootstrap from "/bootstrap.png";

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
    { id: 11, image: php, title: "PHP" },
    { id: 12, image: csharp, title: "C#" },
    { id: 13, image: bootstrap, title: "Bootstrap " },
  ],
};

const SkillBox = ({ image, title }) => (
  <article className="relative group bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center overflow-hidden cursor-pointer transition-all duration-500">
    {/* Lớp nền gradient ẩn */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Nội dung */}
    <div className="relative z-10">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 object-contain" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      </header>
    </div>
  </article>
);

export default function Skills() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section
      id="skills"
      className={`relative overflow-hidden flex flex-col items-center justify-center text-white px-4 py-18
      ${
        activeTab === "music1" ? "min-h-0 py-12" : "min-h-screen"
      } sm:min-h-screen`}
    >
      {/* Background effect*/}
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
            className={`relative px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer overflow-hidden group ${
              activeTab === "web"
                ? "text-white  border-purple-600"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-200"
            }`}
          >
            {/* Hiệu ứng gradient chạy khi active */}
            {activeTab === "web" && (
              <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] animate-gradient-move"></span>
            )}
            <span className="relative z-10">Web Development</span>
          </button>

          <button
            onClick={() => setActiveTab("music1")}
            className={`relative px-4 py-2 rounded-lg font-semibold transition-all cursor-pointer overflow-hidden group ${
              activeTab === "music1"
                ? "text-white  border-purple-600"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 transition-all duration-200"
            }`}
          >
            {activeTab === "music1" && (
              <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] animate-gradient-move"></span>
            )}
            <span className="relative z-10">Music Production</span>
          </button>
        </div>

        {/* Skills Grid */}
        <section
          key={activeTab} // ép re-render grid mỗi khi đổi tab
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
