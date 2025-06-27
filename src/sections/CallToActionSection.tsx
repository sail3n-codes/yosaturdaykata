import React from "react";

export default function CallToActionSection() {
  return (
    <section className="py-20 bg-neutral text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 scale-up-animation hover:text-primary">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Don&apos;t let your dreams be dreams. Start planning your perfect
          getaway today and create memories that will last a lifetime.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn btn-secondary btn-lg text-lg px-8">
            Plan My Trip
          </button>
          <button className="btn btn-outline btn-lg text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
            Get Inspired
          </button>
        </div>
      </div>
    </section>
  );
}
