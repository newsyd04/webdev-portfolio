"use client";
import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { BackgroundGradient } from "./ui/background-gradient";

export function NavBar() {
  return (
    <div className="w-full flex items-center justify-center">
      <BackgroundGradient>
      <Navbar />
      </BackgroundGradient>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef();

  // Detect screen width
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize(); // Run on mount
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Shared handler: cancel any pending clear and set the active item.
  const handleSetActive = (item) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActive(item);
  };

  // Shared handler: clear active after a slight delay.
  const handleClearActive = () => {
    timeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 100);
  };

  return (
    <div className={cn("flex", className)}>
      <Menu setActive={isMobile ? () => {} : setActive} onMouseLeave={handleClearActive}>
        <MenuItem setActive={handleSetActive} item="Services" href="/services" />
        <MenuItem setActive={handleSetActive} href="/samples" {...(!isMobile && { active })} item="Samples" onMouseLeave={handleClearActive}>
          {!isMobile && (
            <><div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="School Website"
                href="https://newsyd04.github.io/scoil-bhreac-chluain-website/"
                src="https://www.daranewso.me/static/media/school-site.bf1e0b2d9c7b775c8ada.png"
                description="Website for a primary school, showcasing events, announcements, and resources." />
              <ProductItem
                title="Direct Drywall Website"
                href="https://newsyd04.github.io/direct-drywall-site/"
                src="https://www.daranewso.me/static/media/dd-screengrab.162e8965a045eb32ac2e.png"
                description="Website designed for Direct Drywall to showcase services and contact info." />
              <ProductItem
                title="SP Trucking Website"
                href="https://newsyd04.github.io/sp-trucking-site/"
                src="https://www.daranewso.me/static/media/sp-trucking.184041eb01cb7f6bfc13.png"
                description="A website designed to showcase SP Trucking's services and fleet information." />
              <ProductItem
                title="Kerry BER Website"
                href="https://kerryber.ie/"
                src="https://www.daranewso.me/static/media/kerryber.36c48abeb1cfa0c42399.png"
                description="A website for Kerry BER, a certified domestic BER assessor business." />
            </div>
            <div className="flex justify-center mt-4">
              <a 
                href="/samples" 
                className="text-white font-semibold underline"
              >
                See more samples here.
              </a>
            </div>
            </>
          )}
        </MenuItem>
        <MenuItem setActive={handleSetActive} item="Pricing" href="/pricing" />
      </Menu>
    </div>
  );
}
