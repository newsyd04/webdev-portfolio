"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

export function ContactCard() {
  return (
    <div className="pr-2 sm:pr-10 flex items-center">
      <BackgroundGradient className="flex flex-row gap-2 items-center rounded-[22px] p-2 bg-zinc-900">
        <span className="text-xl">📧</span>
        <p className="text-base sm:text-xl text-white dark:text-neutral-200 hidden sm:block">
          Contact
        </p>
      </BackgroundGradient>
    </div>
  );
}

