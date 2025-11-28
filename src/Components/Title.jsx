import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Astronaut from "../assets/cute.png"; 

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
    <section className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center bg-black text-white px-6 pt-24 lg:pt-0">
      
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left space-y-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
          Hey, I'm Hanisha
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-white/90 h-10">
          {words[index].substring(0, subIndex)}
          <span className="border-r-2 border-white ml-1 animate-pulse"></span>
        </h2>

        <p className="text-white/80 text-lg max-w-lg">
          Crafting modern, clean, and creative web experiences with passion and precision.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4 justify-center lg:justify-start">
          <a href="#projects" className="btn1">View Projects</a>
          <a href="#contact" className="btn2">Contact Me</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-3xl justify-center lg:justify-start">
          <a href="https://github.com" target="_blank" className="hover:scale-110 transition"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:scale-110 transition"><FaLinkedin /></a>
          <a href="mailto:youremail@example.com" className="hover:scale-110 transition"><FaEnvelope /></a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="flex-1 flex justify-center mt-12 lg:mt-0 relative"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="relative w-[300px] md:w-[420px] aspect-square">
          <motion.img
            src={Astronaut}
            alt="astronaut"
            className="astronaut-img"
            animate={{ rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          {/* Glow Halo */}
          <div className="glow-circle"></div>
        </div>
      </motion.div>
    </section>
  );
}
