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
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    const reveal = () => {
      cards.forEach((c) => {
        const top = c.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          c.classList.add("showSkill");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
  }, []);

  return (
    <section id="skills" className="w-full py-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center animate-[fade-in_0.9s_ease]">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 w-[80%] mx-auto mt-16">
        <Skill icon={<FaHtml5 size={52} />} label="HTML" delay="1" />
        <Skill icon={<FaCss3Alt size={52} />} label="CSS" delay="2" />
        <Skill icon={<FaJs size={52} />} label="JavaScript" delay="3" />
        <Skill icon={<FaCode size={52} />} label="VS Code" delay="4" />
        <Skill icon={<FaGitAlt size={52} />} label="Git / GitHub" delay="5" />
        <Skill icon={<FaPython size={52} />} label="Python" delay="6" />
        <Skill icon={<FaJava size={52} />} label="Java" delay="7" />
        <Skill icon={<FaReact size={52} />} label="React" delay="8" />
      </div>
    </section>
  );
}

function Skill({ icon, label, delay }) {
  return (
    <div
      className={`skill-card skillHidden delay-order-${delay} flex flex-col items-center justify-center gap-4 p-8 rounded-xl select-none`}
    >
      <span className="skill-icon text-white">{icon}</span>
      <p className="text-[18px] font-medium tracking-wide">{label}</p>
    </div>
  );
}
