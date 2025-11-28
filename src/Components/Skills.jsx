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



export default function Skills() {
  return (
    <section id="skills" className="w-full py-24 bg-black/90">
      
      <h2 className="text-4xl font-bold text-center text-white animate-[fadeUp_1s_ease]">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 w-[80%] mx-auto mt-16">

        <Skill icon={<FaHtml5 size={55}/>} label="HTML"/>
        <Skill icon={<FaCss3Alt size={55}/>} label="CSS"/>
        <Skill icon={<FaJs size={55}/>} label="JavaScript"/>
        <Skill icon={<FaCode size={55} />} label="VS Code" />

        <Skill icon={<FaGitAlt size={55}/>} label="Git / GitHub"/>
        <Skill icon={<FaPython size={55}/>} label="Python"/>
        <Skill icon={<FaJava size={55}/>} label="Java"/>
        <Skill icon={<FaReact size={55}/>} label="React"/>

      </div>
    </section>
  )
}


function Skill({ icon, label }) {
  return (
    <div className="
      flex flex-col items-center justify-center gap-3
      p-6 rounded-xl
      bg-[#0f0f0f]/80 
      border border-gray-700
      hover:border-blue-500
      duration-300
      hover:scale-110
      hover:shadow-[0_0_20px_#3ea8ff]
    
      shadow-[0_0_10px_#3ea8ff40]
      animate-[fadeUp_1s_ease,float_4s_ease-in-out_infinite,pulseGlow_4s_ease-in-out_infinite]
    
      bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111]
      bg-[length:200%_100%]
      hover:animate-[shimmer_3s_linear_infinite]
    ">
      <span className="text-white">{icon}</span>
      <p className="text-white text-lg tracking-wide">{label}</p>
    </div>
  );
}