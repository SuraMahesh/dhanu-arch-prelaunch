import { useState, useEffect } from "react";
import Img1 from "../assets/img/img1.jpg";
import Img2 from "../assets/img/img2.jpg";
import Img3 from "../assets/img/img3.jpg";
import Img4 from "../assets/img/img4.jpg";
import Img5 from "../assets/img/img5.jpg";
import Img6 from "../assets/img/img6.jpg";
import Img7 from "../assets/img/img7.jpg";
import Img8 from "../assets/img/img8.jpg";

interface MousePosition {
  x: number;
  y: number;
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Log hoveredImage for debugging
  console.log("hovered image:", hoveredImage);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased h-screen overflow-hidden">
      {/* Header */}
      {/* <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">Dhanu Arch</div>
          <div className="hidden md:flex space-x-6">
            <span className="text-gray-600">Beachside Villas & Resorts</span>
          </div>
        </nav>
      </header> */}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-[110%] h-[110%] -top-[5%] -left-[5%] absolute transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${(mousePosition.x - 50) * -0.02}px, ${
                (mousePosition.y - 50) * -0.02
              }px)`,
            }}
          >
            {/* Collage Background */}
            <div className="w-full h-full relative grid grid-cols-2 grid-rows-2 gap-1 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-3">
              {/* Large villa - takes 2x2 - slow parallax */}
              <div
                className="col-span-2 row-span-2 overflow-hidden pointer-events-auto"
                onMouseEnter={() => setHoveredImage("villa1")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img1}
                  alt=" beachfront villa with infinity pool"
                  className={`w-[110%] h-[110%] object-cover transition-all duration-500 ease-out animate-subtle ${
                    hoveredImage === "villa1"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-50"
                  }`}
                  style={{
                    transform: `translate(${
                      (mousePosition.x - 50) * -0.03
                    }px, ${(mousePosition.y - 50) * -0.03}px)`,
                    animationDelay: "0s",
                  }}
                />
              </div>

              {/* Top right villa - fast horizontal parallax */}
              <div
                className="col-span-1 row-span-1 overflow-hidden pointer-events-auto"
                onMouseEnter={() => setHoveredImage("villa2")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img2}
                  alt="Contemporary coastal architecture"
                  className={`w-[120%] h-[110%] object-cover transition-all duration-300 ease-out animate-subtle ${
                    hoveredImage === "villa2"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-40"
                  }`}
                  style={{
                    transform: `translate(${
                      (mousePosition.x - 50) * -0.08
                    }px, ${(mousePosition.y - 50) * -0.02}px)`,
                    animationDelay: "0.2s",
                  }}
                />
              </div>

              {/* Small beach house - vertical dominant parallax */}
              <div
                className="col-span-1 row-span-1 overflow-hidden pointer-events-auto"
                onMouseEnter={() => setHoveredImage("villa3")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img3}
                  alt=" beach house design"
                  className={`w-[110%] h-[120%] object-cover transition-all duration-400 ease-out animate-subtle ${
                    hoveredImage === "villa3"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-45"
                  }`}
                  style={{
                    transform: `translate(${
                      (mousePosition.x - 50) * -0.02
                    }px, ${(mousePosition.y - 50) * -0.07}px)`,
                    animationDelay: "0.4s",
                  }}
                />
              </div>

              {/* Resort architecture - reverse parallax */}
              <div
                className="col-span-1 row-span-1 overflow-hidden pointer-events-auto hidden lg:block"
                onMouseEnter={() => setHoveredImage("villa4")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img4}
                  alt="Luxury resort architecture"
                  className={`w-[115%] h-[115%] object-cover transition-all duration-600 ease-out animate-subtle ${
                    hoveredImage === "villa4"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-35"
                  }`}
                  style={{
                    transform: `translate(${(mousePosition.x - 50) * 0.04}px, ${
                      (mousePosition.y - 50) * 0.04
                    }px)`,
                    animationDelay: "0.6s",
                  }}
                />
              </div>

              {/* Oceanfront villa - diagonal parallax */}
              <div
                className="col-span-1 row-span-1 overflow-hidden pointer-events-auto hidden lg:block"
                onMouseEnter={() => setHoveredImage("villa5")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img5}
                  alt="Oceanfront villa with  design"
                  className={`w-[118%] h-[118%] object-cover transition-all duration-350 ease-out animate-subtle ${
                    hoveredImage === "villa5"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-55"
                  }`}
                  style={{
                    transform: `translate(${
                      (mousePosition.x - 50) * -0.06
                    }px, ${(mousePosition.y - 50) * -0.06}px)`,
                    animationDelay: "0.8s",
                  }}
                />
              </div>

              {/* Tropical villa - spans 2 columns - wave-like motion */}
              <div
                className="col-span-2 row-span-1 overflow-hidden pointer-events-auto hidden lg:block"
                onMouseEnter={() => setHoveredImage("villa6")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img6}
                  alt="Tropical beachside villa"
                  className={`w-[112%] h-[125%] object-cover transition-all duration-700 ease-out animate-subtle ${
                    hoveredImage === "villa6"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-40"
                  }`}
                  style={{
                    transform: `translate(${
                      (mousePosition.x - 50) * -0.05
                    }px, ${(mousePosition.y - 50) * -0.08}px)`,
                    animationDelay: "1.0s",
                  }}
                />
              </div>

              {/* Minimalist beach house - subtle reverse horizontal */}
              <div
                className="col-span-1 row-span-1 overflow-hidden pointer-events-auto hidden lg:block"
                onMouseEnter={() => setHoveredImage("villa7")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img7}
                  alt="Minimalist beach house architecture"
                  className={`w-[115%] h-[110%] object-cover transition-all duration-450 ease-out animate-subtle ${
                    hoveredImage === "villa7"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-45"
                  }`}
                  style={{
                    transform: `translate(${(mousePosition.x - 50) * 0.03}px, ${
                      (mousePosition.y - 50) * -0.02
                    }px)`,
                    animationDelay: "1.2s",
                  }}
                />
              </div>

              {/* Coastal resort - fast vertical parallax */}
              <div
                className="col-span-1 row-span-1 overflow-hidden pointer-events-auto hidden lg:block"
                onMouseEnter={() => setHoveredImage("villa8")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={Img8}
                  alt="Coastal resort design"
                  className={`w-[110%] h-[125%] object-cover transition-all duration-250 ease-out animate-subtle ${
                    hoveredImage === "villa8"
                      ? "opacity-100 shadow-2xl"
                      : "opacity-50"
                  }`}
                  style={{
                    transform: `translate(${
                      (mousePosition.x - 50) * -0.01
                    }px, ${(mousePosition.y - 50) * -0.09}px)`,
                    animationDelay: "1.4s",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-white/20 z-10 pointer-events-none"></div>
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight uppercase">
            <span className="font-bold">Dhanu</span>
            <span className="text-gray-600"> Arch</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 mb-4 font-light">
            Architectural Studio
          </p>

          <div className="w-24 h-px bg-gray-500 mx-auto mb-8"></div>

          <p className="text-lg md:text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're crafting extraordinary architecture experiences.
            <span className="block  font-medium text-gray-900">
              Coming Soon.
            </span>
            <span className="block text-sm text-gray-900 underline">
              www.dhanuarch.com
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
