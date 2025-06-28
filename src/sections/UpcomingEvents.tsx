"use client";

import Image from "next/image";
import config from "@/config";

const events = [
  {
    id: 1,
    name: "Phulchowki Hill: Valley's Highest Point",
    description:
      "Ascend Phulchowki, the highest hill in Kathmandu Valley, starting from Godawari. This hike takes you through dense forests, offering incredible birdwatching opportunities and panoramic views of the entire valley and distant Himalayas.",
    image: "static/phulchowki.jpeg?updatedAt=1750497310028",
    price: "Rs. 2,500",
    date: "July 12, 2025",
    type: "Hike",
    difficulty: "Moderate",
    duration: "1 Day",
  },
  {
    id: 2,
    name: "Champadevi & Chandragiri Ridge Hike",
    description:
      "Explore the scenic ridge connecting Champadevi and Chandragiri hills, offering sweeping views of the Kathmandu Valley, surrounding mountains, and a blend of nature and spiritual sites. Option to use the Chandragiri cable car for ascent/descent.",
    image: "static/champadevi.webp?updatedAt=1750497310410",
    price: "Rs. 3,500",
    date: "July 20, 2025",
    type: "Hike",
    difficulty: "Moderate",
    duration: "1 Day",
  },
  {
    id: 3,
    name: "Sundarijal to Chisapani Two-Day Trek",
    description:
      "A classic short trek starting from Sundarijal, entering Shivapuri Nagarjun National Park. Experience serene forests, Tamang villages, and stunning mountain views from Chisapani, where you'll spend the night.",
    image: "static/sundarijal.jpg?updatedAt=1750497310350",
    price: "Rs. 8,500",
    date: "August 2-3, 2025",
    type: "Trek",
    difficulty: "Moderate",
    duration: "2 Days",
  },
  {
    id: 4,
    name: "Ranikot - Namobuddha - Dhulikhel Trek",
    description:
      "An enriching two-day journey through traditional Newari villages, ancient forts, and serene farmlands. Visit the sacred Namobuddha monastery and witness a beautiful sunrise from Dhulikhel, blending culture with nature.",
    image: "static/namobuddha.png?updatedAt=1750497310460",
    price: "Rs. 9,500",
    date: "August 16-17, 2025",
    type: "Trek",
    difficulty: "Easy to Moderate",
    duration: "2 Days",
  },
];

export default function UpcomingEvents() {
  const { imagekitUrl } = config;
  return (
    <section className="py-20 bg-base-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scale-up-animation">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Get ready — we&apos;re bringing you all these amazing events!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <figure className="relative overflow-hidden">
                <Image
                  src={`${imagekitUrl}/${event.image}`}
                  alt={event.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="badge badge-primary font-semibold">
                    {event.price}
                  </div>
                </div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-lg font-bold">{event.name}</h3>
                <p className="text-sm mb-4">{event.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">
                      {event.difficulty}
                    </span>
                  </div>
                  <span className="text-xs ">{event.date}</span>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-primary btn-sm w-full">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-outline btn-lg">View All Events</button>
        </div>
      </div>
    </section>
  );
}
