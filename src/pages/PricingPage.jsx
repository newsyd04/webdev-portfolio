"use client";
import React from "react";
import Price1 from "../assets/1.png";
import Price2 from "../assets/2.png";
import { Boxes } from "../components/ui/background-boxes";

export default function PricingPage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-auto py-32 md:py-48">
      <div className="w-full p-4 flex flex-col items-center justify-center">
        <div className=" backdrop-blur-lg gap-8 rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl flex flex-col items-center">
          <img
            src={Price1}
            alt="Pricing Option 1"
            className="w-full h-auto object-contain rounded-2xl"
          />
          <img
            src={Price2}
            alt="Pricing Option 2"
            className="w-full h-auto object-contain  rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
