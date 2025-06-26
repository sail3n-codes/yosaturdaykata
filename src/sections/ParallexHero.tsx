"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import config from "@/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const { imagekitUrl } = config;
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[60vh] overflow-hidden ">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Swiper
          modules={[Autoplay]}
          className="home-swiper"
          autoplay={{ delay: 5000 }}
          loop={true}
          speed={1000}
        >
          {["mountain", "sailung"].map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={`${imagekitUrl}/${img}.jpg`}
                  alt={`image of ${img}`}
                  fill
                  className="object-cover"
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 bg-base-100/30">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your Next
            <span className="block text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Explore breathtaking destinations, create unforgettable memories,
            and let wanderlust guide your journey to extraordinary places around
            the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg text-lg px-8">
              Start Exploring
            </button>
            <button className="btn btn-outline btn-lg text-lg px-8 text-white border-white hover:bg-white hover:text-neutral">
              Watch Stories
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
