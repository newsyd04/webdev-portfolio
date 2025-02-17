"use client";
import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "../components/ui/background-boxes";

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Boxes />
        <div className=" max-w-7xl mx-auto relative z-10 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl mx-10 md:mx-0 p-8 md:p-12 max-w-lg w-full text-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
              Contact Me
            </h1>
            <p className="text-md md:text-lg font-semibold text-neutral-300 mb-8">
              I’d love to hear from you. Feel free to reach out for inquiries,
              collaborations, or just a friendly hello.
            </p>
            <div className="space-y-4 text-neutral-200">
              <div>
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:contact@daranewsome.com"
                  className="underline hover:text-white transition"
                >
                  daranewsome01@gmail.com
                </a>
              </div>
              <div>
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+3530834546712"
                  className="hover:text-white transition"
                >
                  (+353) 083 454 6712
                </a>
              </div>
              <div>
                <span className="font-bold">Location:</span> Dublin, Ireland
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
