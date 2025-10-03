import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 90) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // cho mượt
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-99 cursor-pointer fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] text-white shadow-lg transition-all duration-300 
         ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FiArrowUp className="w-6 h-6" />
    </button>
  );
}
