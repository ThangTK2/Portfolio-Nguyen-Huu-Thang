import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const NavbarLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Featured Songs", link: "#songs" },
  ];

  // Lắng nghe sự kiện scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          href="/"
          className="hover:text-purple-300 transition-colors duration-300 drop-shadow-[0_0_10px_#8e6cf5]
          hidden md:block text-4xl font-bold italic text-purple-400 "
          //hidden md:block chỉ hiện từ md (>=768px) trở lên.
        >
          Nguyen Huu Thang
        </a>

        {/* Mobile Logo */}
        <a
          href="/"
          className="block md:hidden text-4xl font-bold italic 
             bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] 
             bg-clip-text text-transparent" //block md:hidden → chỉ hiện trên mobile, ẩn khi >= md.
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
          {NavbarLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-lg font-semibold text-white hover:text-purple-300 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="inline-flex font-semibold text-white border-2 py-2 px-6 focus:outline-none hover:bg-purple-800 rounded-full text-lg transition-colors duration-300">
            <a href="#contact">Contact</a>
          </button>
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
        {NavbarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="text-lg font-semibold text-white hover:text-purple-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* Mobile Contact Button */}
        <button
          className="inline-flex text-white font-semibold border-2 py-2 px-6 focus:outline-none 
     hover:bg-purple-800 rounded-full text-lg transition-colors duration-300"
        >
          <a href="#contact">Contact</a>
        </button>
      </div>
    </header>
  );
}
