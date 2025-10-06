import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import imghero from "/imghero.png";
import gb from "/github.png";
import fb from "/facee.webp";
import yt from "/yt.png";
import scl from "/scl.png";
import ig from "/ig.png";
import linked from "/linkk.webp";
import CvReactJS from "../assets/CVNguyenHuuThangReactJS.pdf";
import CvWP from "../assets/CVNguyenHuuThangWP.pdf";

export default function Hero() {
  const texts = ["Nguyen Huu Thang", "TK2"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // 👈 trạng thái hiển thị

  const heroRef = useRef(null);

  // 👀 Theo dõi Hero section có đang hiển thị không
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% hiển thị là đủ
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // ✨ Typing effect — chỉ hoạt động khi Hero đang hiển thị
  useEffect(() => {
    if (!isVisible) return; // 👈 không chạy nếu Hero không còn trong viewport

    if (forward && subIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[index][subIndex]);
        setSubIndex(subIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else if (!forward && subIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setSubIndex(subIndex - 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else if (forward && subIndex === texts[index].length) {
      const timeout = setTimeout(() => setForward(false), 2000);
      return () => clearTimeout(timeout);
    } else if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % texts.length);
    }
  }, [subIndex, forward, index, isVisible]);

  return (
    <div
      ref={heroRef} // 👈 theo dõi section Hero
      className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center"
    >
      {/* Background Gradient Shape */}
      <div
        className="md:h-[550px] h-[500px] w-[450px] bg-gradient-to-r 
                   from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]
                   absolute transform rotate-45 z-0 right-2 top-28 rounded-3xl"
      ></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center 
        w-full px-4 md:px-52 pb-4 md:pb-28 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 md:mr-28 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hi, I'm <span className="text-purple-400 ">{displayedText}</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Web Developer & Music Producer
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-6">
            {[
              { href: "https://github.com/ThangTK2", img: gb, alt: "github" },
              {
                href: "https://www.linkedin.com/in/nguyen-huu-thang-ba1b062a1/",
                img: linked,
                alt: "linkedin",
              },
              {
                href: "https://www.facebook.com/Thang.TK2",
                img: fb,
                alt: "facebook",
              },
              {
                href: "https://www.instagram.com/thawng.tk2",
                img: ig,
                alt: "instagram",
              },
              {
                href: "https://www.youtube.com/@akatk2",
                img: yt,
                alt: "youtube",
              },
              {
                href: "https://soundcloud.com/akatk2",
                img: scl,
                alt: "soundcloud",
              },
            ].map(({ href, img, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-500 hover:scale-125 hover:brightness-125 animate-float"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <img
                  src={img}
                  alt={alt}
                  className="w-11 h-11 object-contain "
                />
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <a
            href={CvReactJS}
            download
            className="cursor-pointer relative inline-block mt-6 text-white border-2 py-2 px-6 rounded-full sm:text-lg 
             overflow-hidden group"
          >
            <span
              className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
               transition-all duration-500 ease-out group-hover:w-full"
            ></span>
            <span className="relative z-10">Download CV ReactJS</span>
          </a>

          <a
            href={CvWP}
            download
            className="cursor-pointer relative inline-block mt-6 text-white border-2 py-2 px-6 rounded-full sm:text-lg 
             overflow-hidden group"
          >
            <span
              className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
               transition-all duration-500 ease-out group-hover:w-full"
            ></span>
            <span className="relative z-10">Download CV PHP WordPress</span>
          </a>
        </section>

        {/* Hero Image */}
        <section
          className="flex-1 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img
            src={imghero}
            alt="hero"
            className="w-[300px] md:w-[400px] z-10"
          />
        </section>
      </main>
    </div>
  );
}
