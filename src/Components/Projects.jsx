import { ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import todo from "../assets/todo.jpg";
import port from "../assets/port image.jpg";

const projects = [
  {
    id: 1,
    title: "Glassmorphism To-Do List",
    description: "A stylish To-Do List built using HTML, CSS & JavaScript with glassmorphism UI.",
    image: todo,
    url: "https://github.com/hanisha-senthilkumar/Glassmorphism-To-do-list",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Portfolio Webpage",
    description: "Personal portfolio webpage built using HTML, CSS & JavaScript.",
    image: port,
    url: "https://github.com/hanisha-senthilkumar/my-portfolio-webpage",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const Projects = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const handleScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Some featured projects — built with performance and attention to detail
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card reveal bg-card rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-500 max-w-[360px]"
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                card.style.transform = `rotateX(${(-y / 22)}deg) rotateY(${x / 22}deg) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-secondary/80 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/15 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <a
                    target="_blank"
                    href={project.url}
                    className="btn-slide flex items-center gap-1 text-primary hover:text-white border border-primary/40 hover:bg-primary/90 transition-all rounded-md px-3 py-2 text-sm"
                  >
                    <Github size={16} /> GitHub
                  </a>

                  <a
                    target="_blank"
                    href={project.url}
                    className="btn-slide flex items-center gap-1 text-primary hover:text-white border border-primary/40 hover:bg-primary/90 transition-all rounded-md px-3 py-2 text-sm"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
