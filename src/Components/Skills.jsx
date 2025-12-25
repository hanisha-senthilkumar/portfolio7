import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
  { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
  { icon: <FaJs color="#F7DF1E" />, label: "JavaScript" },
  { icon: <FaReact color="#61DAFB" />, label: "React" },
  { icon: <FaGitAlt color="#F05032" />, label: "Git" },
  { icon: <FaPython color="#3776AB" />, label: "Python" },
  { icon: <FaJava color="#ED8B00" />, label: "Java" },
  { icon: <FaCode color="#007ACC" />, label: "VS Code" },
];

// duplicate for infinite loop
const marqueeSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className="py-24 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12"
        >
          My <span className="text-blue-400">Skills</span>
        </motion.h2>
      </div>

      {/* AUTO SLIDER */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeSkills.map((skill, i) => (
            <div
              key={i}
              className="min-w-[170px] h-[190px] perspective"
            >
              {/* FLIP CARD */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                
                {/* FRONT SIDE */}
                <div
                  className="
                    absolute inset-0
                    bg-black/40
                    border border-white/10
                    rounded-xl
                    flex flex-col items-center justify-center
                    backface-hidden
                  "
                >
                  <div className="text-[42px] mb-4">
                    {skill.icon}
                  </div>
                  <p className="text-sm font-semibold tracking-wide">
                    {skill.label}
                  </p>
                </div>

                {/* BACK SIDE */}
                <div
                  className="
                    absolute inset-0
                    bg-black/60
                    border border-blue-400/40
                    rounded-xl
                    flex items-center justify-center
                    rotate-y-180
                    backface-hidden
                  "
                >
                  <p className="text-lg font-extrabold tracking-widest text-blue-400">
                    {skill.label}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
