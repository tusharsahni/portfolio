// "use client";

// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [isScrolledUp, setIsScrolledUp] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const menuRef = useRef(null);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     if (typeof window !== "undefined") {
//       document.documentElement.classList.toggle("dark", !isDarkMode);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolledUp(window.scrollY < lastScrollY || window.scrollY < 10);
//       setLastScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !(menuRef.current as HTMLDivElement).contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") setIsMenuOpen(false);
//     };
//     document.addEventListener("keydown", handleEscape);
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, []);

//   const navLinks = [
//     { href: "#hero", label: "Home" },
//     { href: "#about", label: "About" },
//     { href: "#projects", label: "Projects" },
//     { href: "#contact", label: "Contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
//         isScrolledUp ? "translate-y-0" : "-translate-y-full"
//       } bg-transparent`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center relative">
//         {/* Dot icon */}
//         <div className="text-white text-sm font-light italic tracking-wide mr-4">•</div>

//         {/* Hamburger button */}
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="text-white focus:outline-none z-50 relative group"
//           aria-label="Toggle Menu"
//         >
//           <motion.svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             initial={false}
//             animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {isMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </motion.svg>
//           <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/60 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
//             Menu
//           </span>
//         </button>

//         {/* Theme toggle button */}
//         <button
//           onClick={toggleTheme}
//           className="ml-4 text-white focus:outline-none z-50"
//           aria-label="Toggle Theme"
//         >
//           {isDarkMode ? "🌞" : "🌙"}
//         </button>

//         {/* Menu dropdown aligned left below icon */}
//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               ref={menuRef}
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               className="absolute top-full left-[2.75rem] mt-2 w-48 rounded-lg py-4 px-4 z-40 shadow-xl"
//               style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)" }}
//             >
//               <div className="flex flex-col items-start gap-3">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="text-white text-sm hover:text-gray-300 hover:bg-white/10 rounded px-2 py-1 transition"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <Link href="#hero" className="ml-auto">
//          <img
//     src="/logo2.png"
//     alt="Logo"
//     className="w-10 h-10 object-contain ml-auto background-transparent"
//   />
//   </Link>
//       </div>
//     </motion.nav>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const menuRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !isDarkMode);
    }
  };

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    {href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
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

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-4 text-white focus:outline-none z-50"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? "🌞" : "🌙"}
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                ref={menuRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-[2.75rem] mt-2 w-48 rounded-lg py-4 px-4 z-40 shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex flex-col items-start gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-white text-sm hover:text-gray-300 hover:bg-white/10 rounded px-2 py-1 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
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
