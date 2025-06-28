"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import config from "@/config";

const destinations = [
  {
    id: 1,
    name: "Sailung, Dolakha",
    description:
      "Land of 100 hills,located in Dolakha is a best to visit this monsoon.",
    image: "sailung.jpg",
    price: "Rs.6,000",
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 2,
    name: "North ABC Trek",
    description: "Vibrant Lakes and Mountain Views in a 4-5 days trek.",
    image: "north-abc.jpeg",
    price: "Rs.15,999",
    rating: 4.8,
    reviews: 1923,
  },
  {
    id: 3,
    name: "Ama Yangri, Sindhupalchok",
    description:
      "Mystical ancient temple on the top of a hill where nature meets spiritual energy.",
    image: "ama-yangri.jpg",
    price: "Rs.4,500",
    rating: 4.9,
    reviews: 3156,
  },
  {
    id: 4,
    name: "Gosainkunda Trek",
    description: "Historical temple and lake at the height of 4000m",
    image: "gosainkunda.webp",
    price: "Rs.8,000",
    rating: 4.7,
    reviews: 4231,
  },
];

export default function FeaturedDestinations() {
  const [scrollY, setScrollY] = useState(0);

  const { imagekitUrl } = config;
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scale-up-animation">
            Featured <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Discover Nepal&apos;s most trending destinations, carefully curated
            to inspire your next adventure and create memories that will last a
            lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <figure className="relative overflow-hidden">
                <Image
                  src={`${imagekitUrl}/${destination.image}`}
                  alt={destination.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="badge badge-primary font-semibold">
                    {destination.price}
                  </div>
                </div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg font-bold">
                  {destination.name}
                </h3>
                <p className="text-sm mb-4">{destination.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <div className="rating rating-sm">
                      {[...Array(5)].map((_, i) => (
                        <input
                          key={i}
                          type="radio"
                          className={`mask mask-star-2 ${
                            i < Math.floor(destination.rating)
                              ? "bg-orange-400"
                              : "bg-white"
                          }`}
                          disabled
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">
                      {destination.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({destination.reviews} reviews)
                  </span>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-lg">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
