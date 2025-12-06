import { motion } from "framer-motion";
import resumeFile from "../assets/haniires.pdf";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const glowCard = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 bg-transparent text-white flex items-center relative z-50"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE — TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
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

          {/* BUTTON */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <a
              href={resumeFile}
              download="Hanisha_Senthilkumar_CV.pdf"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600
              text-white font-semibold shadow-xl tracking-wide hover:shadow-pink-500/40 transition"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE — ANIMATED CARDS */}
        <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-1">

          {/* CARD 1 */}
          <motion.div
            variants={glowCard}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 0 20px rgba(255, 0, 255, 0.5)",
            }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-600/40 
            backdrop-blur-xl border border-white/20 shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2 text-white">Web Development</h3>
            <p className="text-gray-200 text-sm">Creating smooth, responsive & modern designs.</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={glowCard}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.05,
              rotate: -1,
              boxShadow: "0 0 20px rgba(0, 255, 150, 0.5)",
            }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-500/40 to-emerald-600/40 
            backdrop-blur-xl border border-white/20 shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">Bug Solving</h3>
            <p className="text-gray-200 text-sm">Fixing UI issues & improving user flow.</p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={glowCard}
            initial="hidden"
            whileInView="visible"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 0 20px rgba(255, 0, 150, 0.5)",
            }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-gradient-to-br from-pink-400/40 to-purple-600/40 
            backdrop-blur-xl border border-white/20 shadow-lg cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">UI Design</h3>
            <p className="text-gray-200 text-sm">Creating aesthetic & animated interfaces.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
