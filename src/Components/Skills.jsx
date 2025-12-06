import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaPython,
  FaJava
} from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const skillData = [
  { icon: <FaHtml5 size={50} />, label: "HTML", level: 95 },
  { icon: <FaCss3Alt size={50} />, label: "CSS", level: 92 },
  { icon: <FaJs size={50} />, label: "JavaScript", level: 87 },
  { icon: <FaCode size={50} />, label: "VS Code", level: 90 },
  { icon: <FaGitAlt size={50} />, label: "Git / GitHub", level: 85 },
  { icon: <FaPython size={50} />, label: "Python", level: 75 },
  { icon: <FaJava size={50} />, label: "Java", level: 70 },
  { icon: <FaReact size={50} />, label: "React", level: 50 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-24 text-white">
      <h2 className="text-4xl font-extrabold text-center text-glow">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 w-[88%] mx-auto mt-16">
        {skillData.map((skill, i) => (
          <SkillCard key={i} index={i} {...skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, label, level, index }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12, duration: 0.7 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="skill-card relative card-hover cursor-pointer select-none"
      style={{ transformStyle: "preserve-3d" }}
    >

      {/* 3D tilt layer */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-500
        ${hover ? "opacity-100 bg-cyan-400/20 blur-2xl" : "opacity-0"}`}
      />

      {/* Icon */}
      <motion.div
        animate={hover ? { scale: 1.2, rotate: 3 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
        className="skill-icon"
      >
        {icon}
      </motion.div>

      {/* Text */}
      <p className="text-[18px] font-bold mt-3 tracking-wide drop-shadow-md">
        {label}
      </p>

      {/* XP Progress Bar */}
      <div className="w-full mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: hover ? `${level}%` : "0%" }}
          transition={{ duration: 0.7 }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#00eaff,#8b5cf6)" }}
        />
      </div>

      {/* Level text */}
      {hover && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-blue-300"
        >
          {level}% expertise
        </motion.p>
      )}
    </motion.div>
  );
}
