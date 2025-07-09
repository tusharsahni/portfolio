// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function About() {
//   return (
//     <section className="py-10 md:py-16 px-6 md:px-12 relative border-t border-white/10 overflow-hidden" id="about">
//       {/* Background effects */}
//       <div className="absolute inset-0 bg-black/90" />
//       <div className="absolute inset-0">
//         <div
//           className="absolute left-0 right-0 bottom-0 h-[70%] opacity-30"
//           style={{
//             background: 'radial-gradient(ellipse at center bottom, rgba(200, 200, 200, 0.2) 0%, rgba(30, 30, 30, 0.1) 50%, transparent 100%)',
//           }}
//         />
//       </div>
//       <div className="absolute inset-0">
//         <div
//           className="absolute inset-0 bg-grid-small opacity-[0.2] mask-radial-faded"
//           style={{
//             transform: 'scale(1.02)',
//             backgroundSize: '15px 15px',
//             backgroundImage: `
//               linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
//             `
//           }}
//         />
//       </div>

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
//           {/* Left - About Text */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="lg:pr-8"
//           >
//             <h2 className="text-3xl md:text-4xl font-medium mb-4">
//               More about <span className="italic">myself</span>
//             </h2>
//             <p className="text-muted mb-4">
//               Hi, I'm Tushar Sahni, a passionate Full-Stack Web Developer with a strong foundation in AI, Machine Learning, and Generative AI. With hands-on experience in React, Node.js, Express, SQL, and MongoDB, I build scalable, user-friendly applications that enhance digital experiences.
//             </p>
//             <p className="text-muted mb-6">
//               My journey in software development has been driven by a love for problem-solving and a commitment to continuous learning. I thrive on challenges and enjoy collaborating with teams to create innovative solutions that make a difference.
//             </p>
//           </motion.div>

//           <motion.div
//   initial={{ opacity: 0, x: 30 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.8, delay: 0.2 }}
//   className="relative h-full flex items-center justify-center lg:justify-end"
// >
//   <motion.div
//     className="relative w-full h-full"
//     whileHover={{
//       scale: 1.02,
//       transition: { duration: 0.4, ease: "easeOut" }
//     }}
//   >
//     {/* Animated Glow Behind Card */}
//     <div className="absolute inset-0 pointer-events-none z-0">
//       <div className="w-full h-full bg-gradient-to-br from-purple-700/20 via-pink-500/10 to-indigo-500/20 animate-pulse rounded-xl blur-xl opacity-20"></div>
//     </div>

//     {/* Resume Card */}
//     <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg text-center h-full flex flex-col justify-center">
//       <h3 className="text-xl font-semibold text-white mb-2">My Resume</h3>
//       <p className="text-sm text-white/60 mb-6">
//         Get a quick overview of my experience, projects, and skills.
//       </p>

//       <div className="flex gap-4 justify-center">
//         <Link
//           href="/resume.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm shadow-md hover:scale-105 transition"
//         >
//           👁️ View Resume
//         </Link>
//         <a
//           href="/resume.pdf"
//           download
//           className="px-5 py-2 rounded-full bg-white/10 text-white text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition"
//         >
//           <img src="/download.png" alt="Download Icon" className="inline-block w-4 h-4 mr-2" />
//           Download
//         </a>
//       </div>
//     </div>
//   </motion.div>
// </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-10 md:py-16 px-6 md:px-12 relative border-t border-white/10 overflow-hidden" id="about">
      
      {/* Background effects */}

      {/* <div className="absolute inset-0 bg-black/90" />
      <div className="absolute inset-0">
        <div
          className="absolute left-0 right-0 bottom-0 h-[70%] opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(200, 200, 200, 0.2) 0%, rgba(30, 30, 30, 0.1) 50%, transparent 100%)',
          }}
        />
      </div>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-grid-small opacity-[0.2] mask-radial-faded"
          style={{
            transform: 'scale(1.02)',
            backgroundSize: '15px 15px',
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
            `
          }}
        />
      </div> */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              More about <span className="italic">myself</span>
            </h2>
            <p className="text-muted mb-4">
              Hi, I'm Tushar Sahni, a passionate Full-Stack Web Developer with a strong foundation in AI, Machine Learning, and Generative AI. With hands-on experience in React, Node.js, Express, SQL, and MongoDB, I build scalable, user-friendly applications that enhance digital experiences.
            </p>
            <p className="text-muted mb-6">
              My journey in software development has been driven by a love for problem-solving and a commitment to continuous learning. I thrive on challenges and enjoy collaborating with teams to create innovative solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              {/* Animated Glow Behind Card */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="w-full h-full bg-gradient-to-br from-white/10 via-white/5 to-white/10 animate-pulse rounded-xl blur-xl opacity-20"></div>
              </div>

              {/* Resume Card */}
              <div className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 shadow-lg text-center h-full flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-white mb-2">My Resume</h3>
                <p className="text-sm text-white/60 mb-6">
                  Get a quick overview of my experience, projects, and skills.
                </p>

                <div className="flex gap-4 justify-center">
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 hover:scale-105 transition transform hover:-translate-y-0.5"
                  >
                    👁️ View Resume
                  </Link>
                  <a
                    href="/resume.pdf"
                    download
                    className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 hover:scale-105 transition transform hover:-translate-y-0.5"
                  >
                    <img src="/download.png" alt="Download Icon" className="inline-block w-4 h-4 mr-2 animate-pulse" />
                    Download
                  </a>
                  
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
