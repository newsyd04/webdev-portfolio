"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For Next.js, consider using: import Link from 'next/link';

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  href,
  onMouseLeave,
  onMouseEnter,
}) => {
  // Use parent's onMouseEnter if provided; otherwise, default to setting active immediately.
  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter();
    } else {
      setActive(item);
    }
  };

  // Use parent's onMouseLeave if provided; otherwise, default to clearing active immediately.
  const handleMouseLeave = (e) => {
    if (onMouseLeave) {
      onMouseLeave();
    } else {
      setActive(null);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {href ? (
        <Link
          to={href}
          className="cursor-pointer hover:opacity-[0.9] text-white"
        >
          {item}
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer hover:opacity-[0.9] text-white"
        >
          {item}
        </motion.p>
      )}
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div
            className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
          >
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children, onMouseLeave }) => {
  return (
    <nav
      onMouseLeave={onMouseLeave ? onMouseLeave : () => setActive(null)}
      className="relative rounded-full border border-transparent bg-black dark:border-white/[0.2] shadow-input flex justify-center space-x-4 px-8 py-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-7">
      <img
        src={src}
        width="200"
        height="70"
        alt={title}
        className="flex-shrink-0 rounded-md object-cover shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-sm max-w-[10rem] text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
