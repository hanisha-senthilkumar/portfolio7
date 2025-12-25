import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Astronaut from "@/assets/cute.png";
import { smoothScrollToId } from "../lib/utils";

const words = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Creative Coder",
  "Computer Science Student",
];

export default function Title() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[index];
      if (!deleting && subIndex < currentWord.length) setSubIndex(subIndex + 1);
      else if (deleting && subIndex > 0) setSubIndex(subIndex - 1);
      else if (!deleting && subIndex === currentWord.length) setDeleting(true);
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      }
    }, deleting ? 60 : 120);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center bg-transparent text-white px-6 pt-24 lg:pt-0 relative overflow-hidden"
    >

      {/* LEFT HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex-1 text-center lg:text-left space-y-4 lg:ml-14 z-20"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold animated-gradient-text"
        >
          Hey, I'm Hanisha
        </motion.h1>

        {/* Typing Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-xl md:text-2xl font-medium text-white/90 h-10 flex items-center justify-center lg:justify-start"
        >
          <span className="type-text">{words[index].substring(0, subIndex)}</span>
          <span className="border-r-2 border-white ml-2 animate-pulse" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white/80 text-lg max-w-lg mx-auto lg:mx-0"
        >
          Crafting modern, clean, and creative web experiences with passion and precision.
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center lg:justify-start">
          <button onClick={() => smoothScrollToId('projects')} className="btn1 btn-hover">View Projects</button>
          <button onClick={() => smoothScrollToId('contact')} className="btn2 btn-hover">Contact Me</button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-3xl justify-center lg:justify-start">
          <a href="https://github.com" target="_blank" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:haniisenthil@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* RIGHT - ASTRONAUT IMAGE */}
      <motion.div
        className="flex-1 flex justify-center mt-12 lg:mt-0 relative z-20"
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="relative w-[300px] md:w-[420px]">
          <motion.img
            src={Astronaut}
            alt="astronaut"
            className="astronaut-img floating-astronaut"
            animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="glow-circle absolute inset-0" />
        </div>
      </motion.div>
    </section>
  );
}
