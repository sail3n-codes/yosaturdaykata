"use client";

const stats = [
  { number: 400, label: "Hikes Organized", suffix: "+" },
  { number: 20, label: "Treks Completed", suffix: "+" },
  { number: 5000, label: "Total Participants", suffix: "+" },
  { number: 99, label: "Satisfaction Rate", suffix: "%" },
];

export default function TravelStats() {
  return (
    <section className="py-20 bg-base-100 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 scale-up-animation">
            Exploring <span className="text-primary">Trails </span>, One at a
            time
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore the breathtaking landscapes of Nepal with our passionate
            community of hikers and trekkers. From leisurely day hikes to
            challenging multi-day expeditions, we offer unforgettable
            experiences for all levels. Join us and discover the magic of the
            nature!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-bold text-white group-hover:text-secondary transition-colors scale-up-animation">
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </span>
              </div>
              <p className="text-lg text-blue-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
