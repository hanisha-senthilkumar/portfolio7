import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const navItem = [
    { name: "Hero", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  /* Scroll bg */
  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll to section */
  const goTo = (id) => {
    const navH = 70;
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      window.scrollY + el.getBoundingClientRect().top - navH;
    window.scrollTo({ top: y, behavior: "smooth" });

    setActiveId(id);
    setOpen(false);
  };

  return (
    <>
      {/* ───────── TOP NAVBAR ───────── */}
      <nav
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          scrolling
            ? "bg-black/70 backdrop-blur-md py-3 shadow-lg"
            : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-extrabold gradient-text">
            Personal Portfolio
          </span>

          {/* Desktop */}
          <div className="hidden md:flex gap-8 text-white/80">
            {navItem.map((n) => (
              <a
                key={n.name}
                href={n.href}
                className="hover:text-white transition"
              >
                {n.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ───────── FLOATING HAMBURGER (MOBILE) ───────── */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-primary text-white
        shadow-[0_0_25px_rgba(99,102,241,0.8)]
        flex items-center justify-center"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ───────── SLIDE MENU ───────── */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "bg-black/95 backdrop-blur-xl",
          "transition-transform duration-500 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full flex flex-col justify-center px-10 gap-6">
          {navItem.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeId === id;

            return (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={cn(
                  "relative text-left py-5 px-6 rounded-xl",
                  "text-2xl font-semibold transition-all",
                  "bg-white/5 backdrop-blur-md",
                  active
                    ? "text-primary scale-105"
                    : "text-white/80 hover:text-white"
                )}
              >
                {/* Active neon bar */}
                {active && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full" />
                )}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
