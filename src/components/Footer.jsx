export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <h1 className="text-2xl md:text-xl font-bold italic mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
          Nguyen Huu Thang
        </h1>
        <p className="text-2xl md:text-xl font-bold italic mb-4 md:mb-0 hover:scale-105 transition-transform duration-300">
          © {new Date().getFullYear()} TK2.
        </p>
      </div>
    </footer>
  );
}
