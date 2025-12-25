import { useState, useEffect } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import todo from "../assets/todo.jpg";
import port from "../assets/port image.jpg";

const projects = [
  {
    id: 1,
    title: "Glassmorphism To-Do List",
    description:
      "A stylish Glass UI To-Do List built using HTML, CSS & JavaScript with stunning glassmorphism effects.",
    images: [todo],
    url: "https://github.com/hanisha-senthilkumar/Glassmorphism-To-do-list.git",
  },
  {
    id: 2,
    title: "Portfolio Webpage",
    description:
      "Modern responsive portfolio website showcasing skills, projects & animations with attractive UI.",
    images: [port],
    url: "https://github.com/hanisha-senthilkumar/my-portfolio-webpage",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // scroll reveal animation
  useEffect(() => {
    const cards = document.querySelectorAll(".reveal");
    const reveal = () => {
      cards.forEach((c) => {
        const top = c.getBoundingClientRect().top;
        if (top < window.innerHeight - 70) c.classList.add("active");
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-3">
           <span className="gradient-text"> My Projects</span>
        </h2>
        <p className="text-secondary mb-12 max-w-2xl mx-auto text-white">
          Showcasing creativity, animations & passion for development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="project-card reveal rounded-2xl overflow-hidden cursor-pointer shadow-xl max-w-[380px] bg-black/40 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition-all"
            >
              {/* Slideshow visible in card */}
              <Swiper
                spaceBetween={0}
                autoplay={{ delay: 2000 }}
                effect="fade"
                modules={[Autoplay, EffectFade]}
                className="h-56 w-full"
              >
                {project.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img src={img} className="h-56 w-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-purple-300/90 text-sm leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-[999] backdrop-blur-xl flex items-center justify-center p-4 modal-overlay">
          <div className="modal-box relative rounded-xl animate-glowUp max-w-2xl w-full bg-black/70 border border-primary/40 shadow-[0_0_25px_rgba(139,93,246,0.7)] p-6">
            <button
              className="modal-close absolute right-4 top-4 hover:text-red-400 transition"
              onClick={() => setActiveProject(null)}
            >
              <X size={26} />
            </button>

            {/* Modal Slider */}
            <Swiper
              spaceBetween={30}
              effect="fade"
              autoplay={{ delay: 2500 }}
              navigation
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              className="modal-swiper"
            >
              {activeProject.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    className="w-full h-80 object-cover rounded-xl slide-shadow"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <h3 className="text-2xl font-bold mt-5 text-center text-primary">
              {activeProject.title}
            </h3>
            <p className="text-center text-pink-300 mt-2 font-medium max-w-xl mx-auto leading-relaxed">
              {activeProject.description}
            </p>

            {/* Centered GitHub Button */}
            <div className="flex justify-center mt-6">
              <a
                href={activeProject.url}
                target="_blank"
                className="neo-btn flex items-center gap-2"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
