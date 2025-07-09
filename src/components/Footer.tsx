// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const footerLinks = [
//     { href: "/", label: "Home" },
//     { href: "/projects", label: "Projects" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const socialLinks = [
//     {
//       href: "https://x.com/TusharSahni29",
//       label: "X",
//       icon: (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
//             </svg>
//       )
//     },
//     {
//       href: "https://github.com/tusharsahni",
//       label: "GitHub",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 
//     0-.287-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 
//     17.07 3.633 16.7 3.633 16.7c-1.087-.744.083-.729.083-.729 
//     1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 
//     3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 
//     0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
//     0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 
//     2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 
//     1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 
//     3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 
//     2.22 0 1.604-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
//     21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
//   </svg>
//       )
//     },
//     {
//       href: "https://www.linkedin.com/in/tushar-sahni-55057a1ab/",
//       label: "LinkedIn",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-[#0077B5]">
//     <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.5 4.45 5.75V24h-4v-7.75c0-1.85-.03-4.25-2.6-4.25-2.6 0-3 2.05-3 4.1V24h-4V8z"/>
//   </svg>
//       )
//     },
//   ];

//   return (
//     <footer className="py-10 px-6 md:px-12 border-t border-white/10">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <Link href="/" className="text-xl font-bold">
//               Tushar Sahni
//             </Link>
//           </div>

//           <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
//             {footerLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="text-sm text-muted hover:text-white transition-colors"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex space-x-4">
//             {socialLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors"
//                 aria-label={link.label}
//               >
//                 {link.icon}
//               </a>
//             ))}
//           </div>
//         </div>

//         <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-xs text-muted mb-4 md:mb-0">
//           {currentYear} Tushar Sahni &copy; . All rights reserved.
//           </p>
//           <div className="flex items-center">
//             <span className="text-xs text-muted">
//               Made with <span className="text-white">♥</span> in India.
//             </span>
          

//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showFeedback, setShowFeedback] = useState(false);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/tushar-sahni-55057a1ab/",
      label: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-1.95 3.5-1.95 3.75 0 4.45 2.5 4.45 5.75V24h-4v-7.75c0-1.85-.03-4.25-2.6-4.25-2.6 0-3 2.05-3 4.1V24h-4V8z"/>
        </svg>
      )
    }
    ,
    {
      href: "https://github.com/tusharsahni",
      label: "GitHub",
      icon: (
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
      )
    },
    {
      href: "https://x.com/TusharSahni29",
      label: "X",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      )
    }
    
  ];

  return (
    <footer className="py-10 px-6 md:px-12 border-t border-white/10 bg-transparent z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Tushar Sahni
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <button
              onClick={() => setShowFeedback(true)}
              className="text-sm text-muted hover:text-white transition-colors"
            >
              <span role="img" aria-label="feedback">💬</span>
  Leave your Feedback!
            </button>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/10 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted mb-4 md:mb-0">
            {currentYear} Tushar Sahni &copy; . All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-xs text-muted">
              Made with <span className="text-white">♥</span> in India.
            </span>
          </div>
        </div>

        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={() => setShowFeedback(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 w-full max-w-md text-white"
            >
              <h2 className="text-lg font-semibold mb-4">We value your feedback!</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/70"
                />
                <textarea
                  placeholder="Share your thoughts..."
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/70"
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white/20 border border-white/30 rounded hover:bg-white/30 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </footer>
  );
}
