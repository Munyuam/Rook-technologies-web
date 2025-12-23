"use client";
import React from "react";
import { Pencil, Code, Megaphone } from "lucide-react";

const TechStack = () => {
  const pillars = [
    {
      title: "Software Troubleshooting  ",
      description:
        "We fix broken apps, repair login or connection issues, and make sure your software runs smoothly again..",
      icon: 'bx bx-bolt-circle',
    },
    {
      title: "Web Development",
      description:
        "We create modern websites, whether you’re promoting your business or personal brand.",
      icon: 'bx bx-globe-alt',
    },
    {
      title: "App Development",
      description:
        "We build custom mobile and web apps for businesses and individual.",
      icon: 'bx bx-mobile-alt',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8
                         hover:shadow-xl transition duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-6">
                <i className={`${Icon} text-4xl text-orange-600`}/>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {item.description}
              </p>

              <a
                href="/services"
                className="text-orange-600 font-semibold hover:text-orange-700 transition"
              >
                Read More <i class='bxr  bx-arrow-right text-xl'></i> 
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
