"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    {href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
useEffect(() => {
  const heroSection = document.querySelector("#hero");
  if (!heroSection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setShowNav(entry.isIntersecting); // show if in hero
    },
    { threshold: 0.3 }
  );


  observer.observe(heroSection);
  return () => observer.disconnect();
}, []);

  return (
    <>
      {/* Hover zone */}
      <div
        className="fixed top-0 left-0 w-full h-10 z-40"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      <motion.nav
  initial={{ y: -60, opacity: 0 }}
  animate={isHovered || showNav ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className={`fixed top-0 left-0 w-full z-50 bg-transparent`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center relative">
          {/* Dot icon */}
          <div className="text-white text-sm font-light italic tracking-wide mr-4">•</div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none z-50 relative group"
            aria-label="Toggle Menu"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Menu
            </span>
          </button>

         

          {/* Dropdown Menu */}
          {/* <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-[2.75rem] mt-3 w-52 rounded-xl py-5 px-4 z-40 shadow-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-lg"

              >
                <div className="flex flex-col items-start gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white/90 text-sm w-full px-3 py-2 rounded-md hover:bg-white/10 hover:text-white transition-all duration-300"

                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence> */}

          <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      ref={menuRef}
      initial={{
        opacity: 0,
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
      animate={{
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 10px)",
      }}
      exit={{
        opacity: 0,
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute top-full left-[2.75rem] mt-3 w-52 rounded-xl py-5 px-4 z-40 shadow-2xl border border-white/10 ring-1 ring-white/5 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl"
    >
      <div className="flex flex-col items-start gap-3">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: index * 0.08, duration: 0.3 }}
            className="w-full"
          >
            <Link
              href={link.href}
              className="block w-full text-white/90 text-sm px-3 py-2 rounded-md hover:bg-white/10 hover:text-white transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>


          {/* Logo on far right */}
          <Link href="#hero" className="ml-auto">
            <img
              src="/logo2.png"
              alt="Logo"
              className="w-10 h-10 object-contain ml-auto"
            />
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
