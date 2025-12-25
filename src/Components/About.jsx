import { motion } from "framer-motion";
import resumeFile from "@/assets/haniires.pdf";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const glowCard = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 text-white flex items-center relative"
    >
      <motion.div
        className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        {/* LEFT SIDE */}
        <motion.div variants={slideLeft} className="space-y-6">
          <h2 className="text-5xl font-extrabold text-center lg:text-left">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Me
            </span>
          </h2>

          <h3 className="text-xl font-semibold tracking-wide">
            Creative Web Developer & UI Lover ✨
          </h3>

          <p className="leading-relaxed text-white/90 text-lg">
            I’m a{" "}
            <span className="font-semibold text-pink-400">
              2nd year CSE student
            </span>{" "}
            and a{" "}
            <span className="font-semibold text-blue-400">
              Frontend Developer
            </span>{" "}
            passionate about building interfaces that feel smooth, animated and
            unforgettable.
          </p>

          <p className="leading-relaxed text-white/80 text-lg">
            I enjoy experimenting with modern UI motion, glowing gradients,
            interactive elements, and creating web pages that make people say:
            <span className="text-purple-300 font-semibold"> “Wow!” </span>
          </p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <a
              href={resumeFile}
              download="Hanisha_Senthilkumar_CV.pdf"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600
              text-white font-semibold shadow-xl tracking-wide hover:shadow-pink-500/40 transition"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE – COLORED CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">

          {/* BLUE CARD */}
          <motion.div
            variants={glowCard}
            whileHover={{ scale: 1.05 }}
            className="
              p-6 rounded-2xl cursor-pointer
              bg-gradient-to-br from-blue-500/30 to-blue-700/30
              border border-blue-400/30
              shadow-[0_0_25px_rgba(59,130,246,0.35)]
            "
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              Web Development
            </h3>
            <p className="text-white/90 text-sm">
              Creating smooth, responsive & modern designs.
            </p>
          </motion.div>

          {/* GREEN CARD */}
          <motion.div
            variants={glowCard}
            whileHover={{ scale: 1.05 }}
            className="
              p-6 rounded-2xl cursor-pointer
              bg-gradient-to-br from-emerald-500/30 to-green-700/30
              border border-emerald-400/30
              shadow-[0_0_25px_rgba(16,185,129,0.35)]
            "
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              Bug Solving
            </h3>
            <p className="text-white/90 text-sm">
              Fixing UI issues & improving user flow.
            </p>
          </motion.div>

          {/* ROSE CARD */}
          <motion.div
            variants={glowCard}
            whileHover={{ scale: 1.05 }}
            className="
              p-6 rounded-2xl cursor-pointer
              bg-gradient-to-br from-rose-500/30 to-pink-700/30
              border border-rose-400/30
              shadow-[0_0_25px_rgba(244,63,94,0.35)]
            "
          >
            <h3 className="text-xl font-bold mb-2 text-white">
              UI Design
            </h3>
            <p className="text-white/90 text-sm">
              Creating aesthetic & animated interfaces.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
