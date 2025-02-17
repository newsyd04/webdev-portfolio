import React from "react";
import ddImage from "../assets/dd-screengrab.png";
import kerryber from "../assets/kerryber.png";
import school from "../assets/school-site.png";
import trucking from "../assets/sp-trucking.png";
import abe from "../assets/abe-picture.png";
import sof from "../assets/sof-pic.png";
import { Boxes } from "../components/ui/background-boxes";

const SamplesPage = () => {
  const projectList = [
    {
      title: "School Website",
      description:
        "Website for a primary school, showcasing events, announcements, and resources.",
      image: school,
      link: "https://newsyd04.github.io/scoil-bhreac-chluain-website/",
    },
    {
      title: "Direct Drywall Website",
      description:
        "Website designed for Direct Drywall to showcase services and contact info.",
      image: ddImage,
      link: "https://newsyd04.github.io/direct-drywall-site/",
    },
    {
      title: "SP Trucking Website",
      description:
        "A website designed to showcase SP Trucking's services and fleet information.",
      image: trucking,
      link: "https://newsyd04.github.io/sp-trucking-site/",
    },
    {
      title: "Kerry BER Website",
      description:
        "A website for Kerry BER, a certified domestic BER assessor business.",
      image: kerryber,
      link: "https://kerryber.ie",
    },
    {
      title: "Local Artist Portfolio Website",
      description:
        "A website for a local artist, showcasing pieces and providing contact and lesson details.",
      image: abe,
      link: "https://newsyd04.github.io/abes-art-site/",
    },
    {
      title: "Local Photographer Portfolio Website",
      description:
        "A website for a local photographer, showcasing their favourite pieces and providing contact and sales details.",
      image: sof,
      link: "https://newsyd04.github.io/secrets-of-flowers-site",
    },
  ];

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-start bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Boxes />
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center py-20 justify-start pt-32 md:pt-48 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Commercial Web Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-sm mb-4"
              >
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full h-40 object-cover"
                />
              </a>
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-neutral-300 mb-4 text-sm">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:text-blue-600 font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamplesPage;
