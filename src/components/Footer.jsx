import { FaFacebook } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] text-white py-6 transition-all duration-500 hover:brightness-110">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6 text-center md:text-left">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold italic hover:scale-105 transition-transform duration-300">
          TK2
        </h1>

        {/* Liên hệ + Social */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Phone */}
          <p className="flex items-center gap-1 text-md hover:text-gray-300 transition-colors duration-300">
            <FiPhone className="text-xl" />
            0929 029 035
          </p>

          {/* Email */}
          <a
            href="mailto:nht1072@gmail.com"
            className="flex items-center gap-1 text-md hover:text-gray-300 transition-colors duration-300"
          >
            <FiMail className="text-xl" /> nht1072@gmail.com
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/Thang.TK2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-md hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook className="text-lg" /> Nguyễn Hữu Thắng
          </a>
        </div>

        {/* Bản quyền */}
        <p className="text-lg font-bold italic">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
