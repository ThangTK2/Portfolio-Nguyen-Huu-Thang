import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isMobile && (
        <AnimatedCursor
          key={isMobile ? "mobile" : "desktop"} // 🔑 force remount when changing viewport
          innerSize={10}
          outerSize={40}
          color="204, 153, 255"
          outerAlpha={0.4}
          innerScale={1.2}
          outerScale={1.5}
          trailingSpeed={5}
        />
      )}
      {/* Nội dung khác của bạn */}
    </>
  );
}
