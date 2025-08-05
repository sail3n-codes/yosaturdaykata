import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import config from "@/config";

export default function HomeEvents() {
  const { imagekitUrl } = config;
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${imagekitUrl}/north-abc.jpeg`}
          alt="Asian Powerlifting Championship"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-8 leading-tight">
          North ABC Trekking
        </h1>

        {/* Event Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Fri, 15 Aug - Sun, 17 Aug</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-primary" />
            <span>6:30 AM Onwards</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Sundhara, Kathmandu</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <div className="bg-base-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-secondary">
                {"01"}
              </div>
              <div className="text-xs md:text-sm text-secondary font-medium mt-1">
                DAYS
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-base-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-secondary">
                {"12"}
              </div>
              <div className="text-xs md:text-sm text-secondary font-medium mt-1">
                HOURS
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-base-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-secondary">
                {"02"}
              </div>
              <div className="text-xs md:text-sm text-secondary font-medium mt-1">
                MINS
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-base-100 rounded-lg p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-secondary">
                {"23"}
              </div>
              <div className="text-xs md:text-sm text-secondary font-medium mt-1">
                SEC
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="btn btn-outline btn-lg border-white px-8">
            VIEW DETAILS
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
          <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
          <div className="w-3 h-3 bg-primary/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
