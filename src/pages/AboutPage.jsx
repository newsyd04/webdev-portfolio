"use client";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <><div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Web Development - About.
              </h1>
              <p className="mt-4 font-semibold text-md text-neutral-300 max-w-lg mx-auto">
                We deliver on time, every time, <br/>with safety and reliability you can trust.
              </p>
          </div>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50">
            <Link to="/" className="flex items-center justify-center w-12 h-12 bg-gray-200 text-black rounded-full shadow-lg hover:bg-gray-300 transition">
              <i className="fa-solid fa-arrow-down text-xl"></i>
            </Link>
          </div>
      </div>
    </>
  );
}
