import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home"); // Mặc định active là "home"

  const NavbarLinks = [
    { id: "home", name: "Home", link: "#home" },
    { id: "about", name: "About", link: "#about" },
    { id: "skills", name: "Skills", link: "#skills" },
    { id: "projects", name: "Projects", link: "#projects" },
    { id: "songs", name: "Featured Songs", link: "#songs" },
    { id: "contact", name: "Contact", link: "#contact" },
  ];

  // scroll top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // nav link active theo section active
  useEffect(() => {
    const sections = NavbarLinks.map((link) =>
      document.querySelector(link.link)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        let foundActive = false;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            foundActive = true;
          }
        });

        // nếu không section nào active → set null
        if (!foundActive) {
          setActiveId(null);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ease-in-out
      ${
        isScrolled
          ? "bg-gradient-to-r from-[#6d2897]/0 via-[#8e6cf5]/0 to-[#bb61c5]/0 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* LOGO */}
        {/* Desktop Logo */}
        <a
          href="#home"
          className="hover:text-purple-300 transition-colors duration-300 drop-shadow-[0_0_10px_#8e6cf5]
          hidden md:block text-4xl font-bold italic text-purple-400"
        >
          Nguyen Huu Thang
        </a>

        {/* Mobile Logo */}
        <a
          href="#home"
          className="block md:hidden text-4xl font-bold italic 
             bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
             bg-clip-text text-transparent"
        >
          TK2
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8 text-white cursor-pointer" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.slice(0, -1).map(
            //lấy tất cả trừ contact button
            (link) => (
              <a
                key={link.id}
                href={link.link}
                className={`relative text-lg font-semibold transition-colors duration-300 pb-1
                ${
                  activeId === link.id
                    ? "text-purple-400 after:w-full after:bg-purple-400"
                    : "text-white hover:text-purple-300 hover:after:w-full hover:after:bg-purple-300"
                }
                after:content-[''] after:block after:h-[2px] after:w-0 after:transition-all after:duration-300 after:mt-1
              `}
              >
                {link.name}
              </a>
            )
          )}

          {/* Contact Button */}
          <a
            href="#contact"
            className="relative inline-flex font-semibold border-2 py-2 px-6 rounded-full text-lg overflow-hidden group"
          >
            {/* Background gradient chạy từ trái qua phải */}
            <span
              className={`absolute inset-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]
              transform -translate-x-full transition-transform duration-500 ease-out
              group-hover:translate-x-0
              ${activeId === "contact" ? "translate-x-0" : ""}`}
            ></span>

            {/* Text luôn nằm trên */}
            <span className="relative z-10 text-white">Contact</span>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gradient-to-b from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FiX className="w-8 h-8 cursor-pointer " />
        </button>

        {/* Mobile Navigation Links */}
        {NavbarLinks.slice(0, -1).map(
          //lấy tất cả trừ contact button
          (link) => (
            <a
              key={link.id}
              href={link.link}
              className={`relative text-lg font-semibold transition-colors duration-300 pb-1
              ${
                activeId === link.id
                  ? "text-purple-400 after:w-full after:bg-purple-400"
                  : "text-white hover:text-purple-300 hover:after:w-full hover:after:bg-purple-300"
              }
              after:content-[''] after:block after:h-[2px] after:w-0 after:transition-all after:duration-300 after:mt-1
            `}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          )
        )}

        {/* Mobile Contact Button */}
        <a
          href="#contact"
          className={`relative inline-flex font-semibold border-2 py-2 px-6 rounded-full text-lg overflow-hidden
            ${
              activeId === "contact"
                ? "text-white"
                : "text-white hover:text-purple-200"
            }
          `}
          onClick={() => setIsOpen(false)}
        >
          <span
            className={`absolute inset-0 bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]
              transform ${
                activeId === "contact" ? "translate-x-0" : "-translate-x-full"
              }
              transition-transform duration-500 ease-out
            `}
          ></span>
          <span className="relative z-10">Contact</span>
        </a>
      </div>
    </header>
  );
}
