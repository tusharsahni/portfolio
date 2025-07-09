"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import SmokeVideoBackground from "./SmokeVideoBackground";
// FAQ data
const faqItems = [
  {
    id: 1,
    question: "What kind of developer are you?",
    answer: "I'm a full-stack developer with a strong interest in AI and machine learning. I love building scalable web apps and experimenting with the latest in GenAI, LLMs, and data engineering."
  },
  {
    id: 2,
    question: "How do you usually approach projects?",
    answer: "I follow a structured approach — first understanding the problem deeply, then designing the solution architecture, and finally building iteratively with continuous feedback. I value clean code, reusability, and user-centric design."
  },
  {
    id: 3,
    question: "Are you open to opportunities?",
    answer: "Yes! I'm currently open to internships, freelance gigs, collaborations, and hackathons that align with my interests in full-stack development and AI."
  }
];


export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gradientControls = useAnimation();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animate gradient
  useEffect(() => {
    gradientControls.start({
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.35, 0.3],
      transition: { duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
    });
  }, [gradientControls]);

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-12 bg-transparent overflow-hidden" id="faq">
       
      {/* Circular gradient */}

      <motion.div
        className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-gray-400/15 via-amber-200/10 to-gray-300/15 blur-3xl opacity-30 pointer-events-none"
        animate={gradientControls}
      ></motion.div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-2">Your Questions <span className="italic">Answered</span></h2>
          <p className="text-muted text-sm md:text-base">
            Find the answers to the most common questions here, but if you feel your question is not listed, feel free to contact me.
          </p>
        </div>

        <div className="space-y-2 mb-8 ">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="border-b border-white/10 pb-2"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${item.id}`}
              >
                <span className="text-base md:text-lg font-medium group-hover:text-white transition-colors">{item.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex items-center justify-center w-6 h-6"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="py-2 pb-4 text-muted text-sm md:text-base">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
