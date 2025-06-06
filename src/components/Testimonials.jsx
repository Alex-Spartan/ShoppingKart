import React from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  return (
    <section className="flex  flex-col  justify-center  items-center bg-gray-900 py-16 px-6 text-white h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-purple-500/30 transition"
          >
            <div className="flex items-center mb-6">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full mr-4 border-2 border-purple-500"
              />
              <h4 className="text-lg font-semibold">{t.name}</h4>
            </div>
            <p className="text-base text-gray-300 leading-relaxed">
              &quot;{t.review}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
