"use client";

import { useEffect, useState } from "react";

const Overlay = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x + "px"} ${
          mousePosition.y + "px"
        } , rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    ></div>
  );
};

export default Overlay;
