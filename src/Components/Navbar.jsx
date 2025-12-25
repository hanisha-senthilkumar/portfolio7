import { useEffect, useState } from "react";
import { cn, smoothScrollToId } from "../lib/utils";
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

  /* Scroll background */
  useEffect(() => {
    const onScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll to section */
  const goTo = (id) => {
    smoothScrollToId(id, 70);
    setActiveId(id);
    setOpen(false);
  };

  return (
    <>
      {/* ───────── TOP NAVBAR ───────── */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolling
            ? "bg-black/70 backdrop-blur-md py-3 shadow-lg"
            : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => goTo('hero')} className="text-xl font-extrabold gradient-text focus:outline-none">
            Personal Portfolio
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-white/80">
            {navItem.map((n) => (
              <button
                key={n.name}
                type="button"
                onClick={() => goTo(n.href.replace('#',''))}
                className={cn(
                  "group hover:text-white transition bg-transparent border-0 p-0",
                  activeId === n.href.replace('#','') ? 'text-white scale-105' : 'text-white/80'
                )}
              >
                <span className="relative inline-block">
                  {n.name}
                  <span className={cn(
                    "absolute left-0 -bottom-1 h-[2px] nav-underline transition-all duration-200",
                    activeId === n.href.replace('#','') ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </span>
              </button>
            ))}
          </div>

          {/* Hamburger (TOP RIGHT) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white z-50"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* ───────── MOBILE SLIDE MENU ───────── */}
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
