"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";

const services = [
  {
    title: "Web Development",
    description:
      "I build modern, responsive websites using the latest technologies.",
    icon: "🖥️",
  },
  {
    title: "Mobile Apps",
    description:
      "Sleek and intuitive mobile applications to help you engage your audience.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating visually appealing interfaces and seamless user experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive strategies to boost your online presence and drive growth.",
    icon: "🚀",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Robust e-commerce platforms designed to maximize your sales.",
    icon: "🛒",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your search engine ranking and increasing organic traffic.",
    icon: "🔍",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Boxes />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center py-40 justify-start pt-32 md:pt-48 px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-neutral-300 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
