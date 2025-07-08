


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   SiCplusplus, SiPython, SiR, SiJavascript, SiHtml5, SiCss3,
//   SiTailwindcss, SiBootstrap, SiStreamlit, SiNodedotjs, SiFastapi,
//   SiPostman, SiGit, SiNumpy, SiPandas, SiScikitlearn, SiAwsamplify,
//   SiGooglecloud, SiPostgresql, SiMongodb
// } from "react-icons/si";

// export default function Skills() {
//   const [openCategory, setOpenCategory] = useState(Array(7).fill(true));

//     interface Skill {
//     name: string;
//     icon: React.ReactNode;
//   }

//   interface Category {
//     title: string;
//     skills: Skill[];
//   }

//   const toggleCategory = (index: number) => {
//     const newState = [...openCategory];
//     newState[index] = !newState[index];
//     setOpenCategory(newState);
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   const techStack = [
//     { name: "Python", icon: "🐍" },
//     { name: "FastAPI", icon: "⚡" },
//     { name: "AWS SageMaker", icon: "☁️" },
//     { name: "LoRA", icon: "🧠" },
//     { name: "Git", icon: "🔧" },
//   ];
//   const [hoveredTech, setHoveredTech] = useState<string | null>(null);

//   const categories = [
//     {
//       title: "Languages",
//       skills: [
//         { name: "C++", icon: <SiCplusplus color="#00599C" size={22} /> },
//         { name: "Python", icon: <SiPython color="#3776AB" size={22} /> },
//         { name: "R", icon: <SiR color="#276DC3" size={22} /> },
//         { name: "SQL", icon: <SiPostgresql color="#336791" size={22} /> },
//         { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={22} /> },
//       ]
//     },
//     {
//       title: "Frontend",
//       skills: [
//         { name: "HTML", icon: <SiHtml5 color="#E34F26" size={22} /> },
//         { name: "CSS", icon: <SiCss3 color="#1572B6" size={22} /> },
//         { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" size={22} /> },
//         { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" size={22} /> },
//         { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" size={22} /> },
//       ]
//     },
//     {
//       title: "Backend & Tools",
//       skills: [
//         { name: "Node.js", icon: <SiNodedotjs color="#339933" size={22} /> },
//         { name: "Express.js", icon: <SiNodedotjs color="#000000" size={22} /> },
//         { name: "FastAPI", icon: <SiFastapi color="#009688" size={22} /> },
//         { name: "Postman", icon: <SiPostman color="#FF6C37" size={22} /> },
//         { name: "Git", icon: <SiGit color="#F05032" size={22} /> },
//       ]
//     },
//     {
//       title: "ML & Libraries",
//       skills: [
//         { name: "NumPy", icon: <SiNumpy color="#013243" size={22} /> },
//         { name: "Pandas", icon: <SiPandas color="#150458" size={22} /> },
//         { name: "Scikit-Learn", icon: <SiScikitlearn color="#F7931E" size={22} /> },
//         { name: "LoRA", icon: "🧠" },
//         { name: "QLoRA", icon: "🧠" },
//         { name: "Prompt Engineering", icon: "💬" },
//       ]
//     },
//     {
//       title: "LLMs & GenAI",
//       skills: [
//         { name: "Azure OpenAI", icon: <SiAwsamplify color="#0078D4" size={22} /> },
//         { name: "AWS Bedrock", icon: <SiAwsamplify color="#FF9900" size={22} /> },
//         { name: "Gemini APIs", icon: <SiGooglecloud color="#4285F4" size={22} /> },
//       ]
//     },
//     {
//       title: "Fundamentals",
//       skills: [
//         { name: "DSA", icon: "📚" },
//         { name: "Operating Systems", icon: "🖥️" },
//         { name: "Computer Networks", icon: "🌐" },
//         { name: "OOPS", icon: "🔄" },
//         { name: "DBMS", icon: "💾" },
//       ]
//     },
//     {
//       title: "Clouds & Databases",
//       skills: [
//         { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={22} /> },
//         { name: "MongoDB", icon: <SiMongodb color="#47A248" size={22} /> },
//         { name: "AWS Sagemaker", icon: <SiAwsamplify color="#FF9900" size={22} /> },
//         { name: "AWS S3", icon: <SiAwsamplify color="#FF9900" size={22} /> },
//       ]
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 relative border-t border-b border-white/10 bg-black" id="skills">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
//         <div className="flex justify-center mb-12">
//           <motion.div
//             className="text-center relative"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex items-center justify-center gap-3">
//               <div className="w-12 h-[1px] bg-white/20"></div>
//               <h2 className="text-sm uppercase tracking-widest text-white/60">Skills & Experience</h2>
//               <div className="w-12 h-[1px] bg-white/20"></div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div
//           className="mb-20 bg-[#111111] rounded-lg p-6 border border-white/5 max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <div className="flex flex-col gap-4">
//             {categories.map((category, index) => (
//               <div key={index} className="mb-2">
//                 <button
//                   onClick={() => toggleCategory(index)}
//                   className="w-full text-left text-white font-semibold py-2 px-3 bg-black/30 hover:bg-black/50 rounded-md transition"
//                 >
//                   {category.title}
//                 </button>
//                 {openCategory[index] && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="mt-3 flex flex-wrap gap-3 justify-center"
//                   >
//                     {category.skills.map((skill, i) => (
//                       <motion.span
//                         key={i}
//                         className="px-5 py-3 bg-black rounded-full text-md text-white flex items-center gap-3 shadow hover:scale-105 transition-transform duration-300"
//                         whileHover={{ scale: 1.1 }}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: i * 0.05 }}
//                       >
//                         {skill.icon} {skill.name}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </motion.div>

//       {/* Creative Timeline Style Experience Section */}

//       </div>
//     </section>
    
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiCplusplus, SiPython, SiR, SiJavascript, SiHtml5, SiCss3,
  SiTailwindcss, SiBootstrap, SiStreamlit, SiNodedotjs, SiFastapi,
  SiPostman, SiGit, SiNumpy, SiPandas, SiScikitlearn, SiAwsamplify,
  SiGooglecloud, SiPostgresql, SiMongodb
} from "react-icons/si";

export default function Skills() {
  const [openCategory, setOpenCategory] = useState(Array(7).fill(true));

  interface Skill {
    name: string;
    icon: React.ReactNode;
  }

  interface Category {
    title: string;
    skills: Skill[];
  }

  const toggleCategory = (index: number) => {
    const newState = [...openCategory];
    newState[index] = !newState[index];
    setOpenCategory(newState);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const techStack = [
    { name: "Python", icon: "🐍" },
    { name: "FastAPI", icon: "⚡" },
    { name: "AWS SageMaker", icon: "☁️" },
    { name: "LoRA", icon: "🧠" },
    { name: "Git", icon: "🔧" },
  ];
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus color="#00599C" size={22} /> },
        { name: "Python", icon: <SiPython color="#3776AB" size={22} /> },
        { name: "R", icon: <SiR color="#276DC3" size={22} /> },
        { name: "SQL", icon: <SiPostgresql color="#336791" size={22} /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={22} /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 color="#E34F26" size={22} /> },
        { name: "CSS", icon: <SiCss3 color="#1572B6" size={22} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" size={22} /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" size={22} /> },
        { name: "Streamlit", icon: <SiStreamlit color="#FF4B4B" size={22} /> },
      ]
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" size={22} /> },
        { name: "Express.js", icon: <SiNodedotjs color="#000000" size={22} /> },
        { name: "FastAPI", icon: <SiFastapi color="#009688" size={22} /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" size={22} /> },
        { name: "Git", icon: <SiGit color="#F05032" size={22} /> },
      ]
    },
    {
      title: "ML & Libraries",
      skills: [
        { name: "NumPy", icon: <SiNumpy color="#013243" size={22} /> },
        { name: "Pandas", icon: <SiPandas color="#150458" size={22} /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn color="#F7931E" size={22} /> },
        { name: "LoRA", icon: "🧠" },
        { name: "QLoRA", icon: "🧠" },
        { name: "Prompt Engineering", icon: "💬" },
      ]
    },
    {
      title: "LLMs & GenAI",
      skills: [
        { name: "Azure OpenAI", icon: <SiAwsamplify color="#0078D4" size={22} /> },
        { name: "AWS Bedrock", icon: <SiAwsamplify color="#FF9900" size={22} /> },
        { name: "Gemini APIs", icon: <SiGooglecloud color="#4285F4" size={22} /> },
      ]
    },
    {
      title: "Fundamentals",
      skills: [
        { name: "DSA", icon: "📚" },
        { name: "Operating Systems", icon: "💻" },
        { name: "Computer Networks", icon: "🌐" },
        { name: "OOPS", icon: "🔄" },
        { name: "DBMS", icon: "📀" },
      ]
    },
    {
      title: "Clouds & Databases",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={22} /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" size={22} /> },
        { name: "AWS Sagemaker", icon: <SiAwsamplify color="#FF9900" size={22} /> },
        { name: "AWS S3", icon: <SiAwsamplify color="#FF9900" size={22} /> },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative border-t border-b border-white/10 bg-black" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-center mb-12">
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <h2 className="text-sm uppercase tracking-widest text-white/60">Skills & Experience</h2>
              <div className="w-12 h-[1px] bg-white/20"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-20 bg-[#111111] rounded-lg p-6 border border-white/5 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <div key={index} className="mb-2">
                {/* <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-left text-white font-semibold py-2 px-3 bg-black/30 hover:bg-black/50 rounded-md transition"
                >
                  {category.title}
                </button> */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full flex justify-between items-center text-left text-white font-semibold py-2 px-3 bg-black/30 hover:bg-black/50 rounded-md transition"
                >
                  {category.title}
                  <span className="text-white text-xs">{openCategory[index] ? "▲" : "▼"}</span>
                </button>
                {openCategory[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 flex flex-wrap gap-3 justify-center"
                  >
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-5 py-3 bg-black rounded-full text-md text-white flex items-center gap-3 shadow hover:scale-105 transition-transform duration-300"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {skill.icon} {skill.name}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Creative Timeline Style Experience Section */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <h2 className="text-sm uppercase tracking-widest text-white/60">Industry Experience</h2>
              <div className="w-12 h-[1px] bg-white/20"></div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#121212] border border-white/10 rounded-xl p-10 shadow-lg relative overflow-hidden"
        >
        
          {/* Header Row */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/joinus-logo.jpg"
                alt="HTC Logo"
                className="h-30 w-50 object-contain bg-white/5 p-3 rounded-xl border border-white/10"
              />
              <div>
                <h2 className="text-3xl font-bold text-white">AI Intern @ HTC Global Services</h2>
                <p className="text-white/60 italic">Feb 2025 – Jun 2025 · Remote / Bengaluru</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 space-y-3">
            <p className="text-white/80">
              🧠 Built LLM fine-tuning pipelines using LoRA/QLoRA with AWS Bedrock & SageMaker.
            </p>
            <p className="text-white/80">
              ⚙️ Developed <strong>rapidWhl</strong> to convert FastAPI repos into installable Python packages.
            </p>
            <p className="text-white/80">
              🔍 Created semantic bug detection for Excel files with 25K+ records for improved validation.
            </p>
          </div>

          {/* Reflection */}
          <div className="mt-8 bg-black/30 p-4 rounded-lg border border-white/10">
            <p className="text-white/70 italic">
              <span className="text-purple-400 font-semibold">Reflection:</span> This experience taught me how to
              build scalable AI tools in real-world pipelines, optimize workflows on cloud, and appreciate the
              importance of reproducible engineering in ML.
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`group relative px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm border border-white/10 hover:border-purple-400 transition-all duration-300`}
              >
                <span className="transition duration-300 group-hover:opacity-0">{tech.name}</span>
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredTech === tech.name ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {tech.icon}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
