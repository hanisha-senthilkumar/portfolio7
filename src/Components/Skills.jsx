import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,
  FaPython, FaJava
} from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const skillData = [
  { icon: <FaHtml5 size={60} />, label: "HTML", level: 95 },
  { icon: <FaCss3Alt size={60} />, label: "CSS", level: 92 },
  { icon: <FaJs size={60} />, label: "JavaScript", level: 87 },
  { icon: <FaCode size={60} />, label: "VS Code", level: 90 },
  { icon: <FaGitAlt size={60} />, label: "Git / GitHub", level: 85 },
  { icon: <FaPython size={60} />, label: "Python", level: 75 },
  { icon: <FaJava size={60} />, label: "Java", level: 70 },
  { icon: <FaReact size={60} />, label: "React", level: 50 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full text-white text-center relative">
      {/* Animated BG behind slider */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-[#1b005e] via-[#220056] to-[#002a62] blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-glow relative"
      >
        My <span className="text-blue-400">Skills</span>
      </motion.h2>

      <Swiper
        modules={[Autoplay, Pagination, EffectCoverflow]}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop
        slidesPerView={window.innerWidth < 640 ? 2 : 4}
        autoplay={{ delay: 1400 }}
        coverflowEffect={{
          rotate: 18,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        className="mt-16 max-w-6xl relative"
      >
        {skillData.map((skill, i) => (
          <SwiperSlide key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="skill-card"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {skill.icon}
              </motion.div>

              <h3 className="mt-3 text-xl font-bold drop-shadow-md">{skill.label}</h3>
              <p className="skill-percent mt-1 tracking-wider">{skill.level}%</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
