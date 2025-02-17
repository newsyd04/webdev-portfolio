"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function ContactCard() {
  return (
    <div className="pr-10 flex items-center">
      <BackgroundGradient className="flex flex-row gap-2 items-center rounded-[22px] p-2 bg-zinc-900">
        {/* Show email icon on all screen sizes */}
        <span className="text-xl">📧</span>

        {/* Show text only on larger screens */}
        <p className="text-base sm:text-xl text-white dark:text-neutral-200 hidden sm:block">
          Contact
        </p>
      </BackgroundGradient>
    </div>
  );
}
