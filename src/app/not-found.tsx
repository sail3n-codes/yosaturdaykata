"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Rocket, Star, Moon } from "lucide-react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; size: number; delay: number }>
  >([]);

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative pt-5">
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
              transform: `translate(${(mousePosition.x - 50) * 0.1}px, ${
                (mousePosition.y - 50) * 0.1
              }px)`,
            }}
          >
            <Star
              className="text-yellow-300 fill-current opacity-70"
              size={star.size}
              style={{
                filter: `brightness(${0.8 + Math.random() * 0.4})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating Moon */}
      <div
        className="absolute top-20 right-20 opacity-20"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${
            (mousePosition.y - 50) * 0.05
          }px)`,
        }}
      >
        <Moon className="w-32 h-32 text-gray-300 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating Astronaut */}
          <div className="mb-8 relative">
            <div
              className="inline-block animate-bounce"
              style={{
                animationDuration: "3s",
                transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${
                  (mousePosition.y - 50) * 0.02
                }px)`,
              }}
            >
              <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
                <Rocket className="w-16 h-16 text-white transform rotate-45" />
              </div>
              {/* Floating particles around astronaut */}
              <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="absolute -top-4 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* 404 Text with Glitch Effect */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text mb-4 animate-pulse">
              404
            </h1>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Looks like someone just ended up in Mars.
              </h2>
              <h6 className="text-xl text-gray-300 mb-8">
                No civilization is around — time to head back home!
              </h6>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link
              href="/"
              className="btn btn-primary btn-lg gap-2 hover:scale-105 transform transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              Return to Earth
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 opacity-30">
        <div
          className="animate-spin"
          style={{
            animationDuration: "20s",
            transform: `translate(${(mousePosition.x - 50) * 0.03}px, ${
              (mousePosition.y - 50) * 0.03
            }px)`,
          }}
        >
          <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 opacity-20">
        <div
          className="animate-pulse"
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.04}px, ${
              (mousePosition.y - 50) * 0.04
            }px)`,
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
