"use client";
import React from "react";
import { LampContainer } from "../components/ui/lamp";
import { motion } from "framer-motion";
import { Boxes } from "../components/ui/background-boxes";
import { BackgroundGradient } from "../components/ui/background-gradient";


export default function HomePage() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Boxes />
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Dara Newsome <br/> Freelance Web Developer.
          </h1>
          <p className="mt-4 font-semibold text-md text-neutral-300 max-w-lg mx-auto">
            Crafting high-performance websites with precision, reliability, <br /> and a commitment to excellence.
          </p>
        </div>
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-50">
            <a
                href="/contact"
                className="inline-block bg-blue-600 text-white text-center px-8 py-4 mt-8 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition"
              >
                GET A QUOTE TODAY
              </a>
          </div>
      </div>
    </>
  );
}
