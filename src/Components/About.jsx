const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE — TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-center lg:text-left">
            About <span className="text-purple-400">Me</span>
          </h2>
<h3 className="text-xl font-semibold">Web developer & technology</h3>

          <p className="text-gray-300 leading-relaxed">
            I’m a{" "}
            <span className="text-pink-400 font-semibold">
              2nd year Computer Science Engineering student
            </span>{" "}
            and a{" "}
            <span className="text-blue-400 font-semibold">
              Frontend Developer
            </span>{" "}
            who enjoys creating modern, smooth and user-friendly web interfaces.
          </p>
<p className="text-gray-300 leading-relaxed">
            I love exploring UI animations, React components and building
            beautiful layouts with Tailwind CSS.
          </p>

          <div>
            <a
              href=""
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* RIGHT SIDE — 3 ANIMATED BOXES */}
        <div className="grid sm:grid-cols-2 gap-6 lg:grid-cols-1">

          {/* CARD 1 */}
          <div className="skill-card bg-gradient-to-br from-blue-500 to-purple-500">
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-200">Building modern and responsive UIs.</p>
          </div>

          {/* CARD 2 */}
          <div className="skill-card bg-gradient-to-br from-green-500 to-emerald-600">
            <h3 className="text-xl font-bold mb-2">Solve Bug</h3>
            <p className="text-gray-200">
              Fixing errors and improving UI flow.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="skill-card bg-gradient-to-br from-pink-400 to-purple-600">
            <h3 className="text-xl font-bold mb-2">UI Design</h3>
            <p className="text-gray-200">
              Designing clean and aesthetic user interfaces.
            </p>
          </div>

        </div>
        


      </div>
    </section>
  );
};
export default About;