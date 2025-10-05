import React from "react";
import img_about1 from "/img_about1.png";
import img_about2 from "/img_about2.png";
import img_about from "/img_about.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-full w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-r from-[#602897] via-[#60595] to-[#60615] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"></div>
          <img
            src={img_about1}
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
          <img
            src={img_about2}
            alt="about picture 2"
            className="relative z-10 w-36 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-lg"
          />
          <img
            src={img_about}
            alt="about picture 3"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold mb-4 sm:mb-6">
            About Me
          </h1>
          <p className="text-sm sm:text-base md:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            I'm a passionate Web Developer and Music Producer, creating engaging
            web experiences by day and crafting melodies by night. I love
            blending creativity and technology to deliver unique projects.
          </p>
          <footer>
            <button
              className="cursor-pointer relative inline-flex text-white border-2 py-2 px-4 sm:px-6 rounded-full text-sm sm:text-lg 
  overflow-hidden group"
            >
              {/* Background gradient bằng before */}
              <span
                className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]
    transition-all duration-300 ease-out group-hover:w-full"
              ></span>

              {/* Nội dung nút */}
              <a className="relative z-10" href="#contact">
                Contact
              </a>
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
