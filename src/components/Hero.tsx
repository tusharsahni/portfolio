"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SmokeVideoBackground from "./SmokeVideoBackground";
import GlowButton from "./ui/GlowButton";
import Typewriter from 'typewriter-effect';
export default function Hero() {



  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 pt-20 pb-10 md:px-12 relative overflow-hidden">
      {/* Smoke Video Background */}
      {/* <div className="opacity-40">
        <SmokeVideoBackground />
      </div> */}

      <div className="max-w-5xl mx-auto text-center relative z-10">

         <motion.div
          className="inline-flex items-center mb-5 text-sm text-white/80 px-4 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm font-mono"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={0}
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "AI Tinkerer",
                "Problem Solver",
                "Open to exciting challenges"
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30
            }}
          />
        </motion.div>

        {/* Profile Image with dark circular background */}
        <motion.div
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={1}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          {/* Dark circular background */}
          <div className="absolute inset-0 rounded-full bg-black/80 transform scale-105"></div>

          {/* Glow effect that appears on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white/5"
            initial={{ opacity: 0 }}
            whileHover={{
              opacity: 1,
              boxShadow: '0 0 25px rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Main profile image */}
          <Image
            src="/profile.jpg"
            alt="Tushar Sahni"
            width={160}
            height={160}
            className="rounded-full object-cover relative transition-all duration-300"
            style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}
          />
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={2}
          className="mb-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
           Tushar <span className="font-bold italic">Sahni</span>
          </h1>
          <p className="text-base md:text-lg text-gray-400">
            Full Stack Developer & AI Enthusiast
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center space-x-5 mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={3}
        >
            {/* LinkedIN */}
         {/* LinkedIn */}
<Link href="https://www.linkedin.com/in/tushar-sahni-55057a1ab/" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0077B5]">
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.5 4.45 5.75V24h-4v-7.75c0-1.85-.03-4.25-2.6-4.25-2.6 0-3 2.05-3 4.1V24h-4V8z"/>
  </svg>
</Link>
          
          {/* Github */}
          <Link href="https://github.com/tusharsahni" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 
    0-.287-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 
    17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 
    1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 
    3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 
    0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
    0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 
    2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 
    1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 
    3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 
    2.22 0 1.604-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
    21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
</Link>
{/* X (Twitter) */}
          <Link href="https://x.com/TusharSahni29" className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </Link>
        
        </motion.div>
      </div>

      {/* Scroll indicator with click functionality */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={() => {
          // Scroll to the next section smoothly
          const nextSection = document.querySelector('section:nth-of-type(2)');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </motion.div>

      {/* Circular gradient at the bottom */}
      <motion.div
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-r from-gray-400/15 via-gray-300/20 to-gray-400/15 blur-3xl opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.25, 0.35, 0.25]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>

      {/* Silver circular gradient with 25% appearing from top */}
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[100%] opacity-90"
          style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(200, 200, 200, 0.2) 0%, rgba(100, 100, 100, 0.1) 40%, transparent 70%)',
            transform: 'translateY(25%)'
          }}
        ></div>
      </div>

      {/* Background wave effect */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-gray-500/10 to-transparent"></div>
      </div>
    </section>
  );
}
