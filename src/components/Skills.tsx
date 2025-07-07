// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   SiCplusplus, SiPython, SiR, SiJavascript, SiHtml5, SiCss3,
//   SiTailwindcss, SiBootstrap, SiStreamlit, SiNodedotjs, SiFastapi,
//   SiPostman, SiGit, SiNumpy, SiPandas, SiScikitlearn, SiAwsamplify,
//    SiGooglecloud, SiPostgresql, SiMongodb
// } from "react-icons/si";

// export default function Skills() {
//   const [openCategory, setOpenCategory] = useState(
//     Array(7).fill(true) // All categories open by default
//   );

//   interface Skill {
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
//         { name: "Azure OpenAI", icon: <SiGooglecloud color="#0078D4" size={22} /> },
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

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto"
//         >
//           <div className="space-y-8">
//             <motion.div variants={itemVariants} className="border-b border-white/10 pb-6">
//               <div className="grid grid-cols-3">
//                 <div className="col-span-1 text-white/80">AI Intern</div>
//                 <div className="col-span-1 text-white/80">HTC Global Services</div>
//                 <div className="col-span-1 text-right text-white/60">Feb 2025 – Jun 2025</div>
//               </div>
//               <div className="mt-4 text-white/70 text-xl space-y-2 pl-2">
//                 <h3>Built reusable fine-tuning pipelines using techniques like LoRA/QLoRA for training large language models on AWS Bedrock and Sagemaker.</h3>
//                 <h3>Created <strong>rapidWhl</strong>, a web application to convert FastAPI projects into production-ready Python packages, supporting zipped uploads and Git-based private repositories via access tokens.</h3>
//                 <h3>Developed a semantic bug detection system to identify contextual duplicates in Excel files with over 25,000 records, improving data validation workflows.</h3>
//                 <h3 className="italic text-white/50 pt-1">Location: Remote / Bengaluru</h3>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
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
        { name: "Operating Systems", icon: "🖥️" },
        { name: "Computer Networks", icon: "🌐" },
        { name: "OOPS", icon: "🔄" },
        { name: "DBMS", icon: "💾" },
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
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full text-left text-white font-semibold py-2 px-3 bg-black/30 hover:bg-black/50 rounded-md transition"
                >
                  {category.title}
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
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}


  className="max-w-6xl mx-auto relative"
>
  <h2 className="text-3xl font-bold font- text-white text-center mb-16">Work Experience </h2>

  <div className="relative border-l border-white/10 pl-8 space-y-16">

    {/* Timeline Marker */}
    <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500 rounded-full shadow-md animate-pulse" />

    {/* HTC Global Services Experience Card */}
    <motion.div
      variants={itemVariants}
      className="relative group"
    >
      <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-white border-2 border-purple-500 group-hover:scale-125 transition" />

      <div className="bg-[#0d0d0d] border border-purple-800/30 hover:border-purple-500 transition p-6 rounded-xl shadow-lg hover:shadow-purple-500/10 relative">
        {/* Header Row */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/joinus-logo.jpg"
              alt="HTC Logo"
              className="h-25 w-50 rounded-md bg-white/10 p-2 border border-white/10"
            />
            <div>
              <h3 className="text-3xl  text-white">AI Intern @ HTC Global Services</h3>
              <p className="text-sm text-white/50 italic">Remote / Bengaluru</p>
            </div>
          </div>
          <p className="text-white/50 text-sm">Feb 2025 – Jun 2025</p>
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <p className="text-white/80">
            🧠 Built LLM fine-tuning pipelines with LoRA/QLoRA using AWS Bedrock & SageMaker
          </p>
          <p className="text-white/80">
            ⚙️ Developed <strong>rapidWhl</strong> — convert FastAPI repos into production-grade installable packages
          </p>
          <p className="text-white/80">
            🔍 Built semantic bug detection for 25K+ record Excel files improving data integrity
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {["Python", "FastAPI", "AWS SageMaker", "LoRA", "Git"].map((tech, i) => (
            <span
              key={i}
              className="text-sm px-3 py-1 bg-black border border-white/10 text-white/70 rounded-full hover:bg-purple-600/10 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Badge */}
        <a
          href="https://your-rapidwhl-link.com" // replace with real link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm shadow-md hover:scale-105 transition"
        >
          🚀 Launch rapidWhl Tool
        </a>
      </div>
    </motion.div>

  </div>
</motion.div>

      </div>
    </section>
  );
}
