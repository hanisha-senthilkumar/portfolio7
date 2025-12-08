import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

 const Navbar = () => {
     const [scrolling, setScrolling] = useState(false);
     const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const navRef = useRef(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false });

    const navItem = [
        { name: "Hero", href: "#hero" },
        { name: "About", href: "#about" },
        
        { name: "Skills", href: "#skills" },
         { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const performTransitionScroll = (id) => {
        const target = document.getElementById(id);
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;

        // show overlay
        setIsTransitioning(true);

        // wait for overlay to appear, then scroll
        setTimeout(() => {
            if (target) {
                const rect = target.getBoundingClientRect();
                const top = window.scrollY + rect.top - navHeight - 12;
                window.scrollTo({ top, behavior: 'smooth' });
            }

            // hide overlay after scroll settles
            setTimeout(() => setIsTransitioning(false), 520);
        }, 160);
    };

    // Observe sections to set active nav item
    useEffect(() => {
        const ids = navItem.map(i => i.href.replace('#',''));
        const elements = ids.map(id => document.getElementById(id)).filter(Boolean);
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '-20% 0px -60% 0px', threshold: 0.15 }
        );

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Move indicator when activeId changes or on resize
    useEffect(() => {
        const updateIndicator = () => {
            if (!navRef.current) return;
            if (!activeId) {
                setIndicator({ left: 0, width: 0, visible: false });
                return;
            }
            const selector = `a[href="#${activeId}"]`;
            const el = navRef.current.querySelector(selector);
            if (!el) {
                setIndicator({ left: 0, width: 0, visible: false });
                return;
            }
            // use offsetLeft/offsetWidth which is more robust for inline-flex children
            const left = el.offsetLeft;
            const width = el.offsetWidth;
            setIndicator({ left, width, visible: true });
        };

        updateIndicator();
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeId]);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                scrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <a className="text-xl font-bold flex items-center" href="#hero">
                    <span className="text-primary">Personal</span>{" "}
                    <span className="text-secondary ml-1">Portfolio</span>
                </a>

                {/* Large screen menu */}
                <div ref={navRef} className="hidden md:flex space-x-6 relative">
                    {navItem.map((item, key) => {
                        const id = item.href.replace('#','');
                        const isActive = activeId === id;
                        return (
                        <a
                            key={key}
                            href={item.href}
                            onClick={(e)=>{
                                e.preventDefault();
                                setIsOpenMenu(false);
                                // mark as active immediately so underline shows on click
                                setActiveId(id);
                                performTransitionScroll(id);
                            }}
                            onMouseEnter={(e)=>{
                                // move indicator to hovered item
                                const el = e.currentTarget;
                                const left = el.offsetLeft;
                                const width = el.offsetWidth;
                                setIndicator({ left, width, visible: true });
                            }}
                            onMouseLeave={()=>{
                                // revert to active
                                if (!activeId) { setIndicator({ left: 0, width: 0, visible: false }); return; }
                                const sel = `a[href="#${activeId}"]`;
                                const elActive = navRef.current.querySelector(sel);
                                if (!elActive) { setIndicator({ left: 0, width: 0, visible: false }); return; }
                                const left = elActive.offsetLeft;
                                const width = elActive.offsetWidth;
                                setIndicator({ left, width, visible: true });
                            }}
                            className={cn(
                                "text-white/90 relative group transition-all duration-300 hover:text-white",
                                // keep text color consistent; underline handled by indicator
                                isActive ? "" : ""
                            )}
                        >
                            {item.name}
                            
                        </a>
                    )})}

                    {/* Animated moving indicator */}
                    <span
                        aria-hidden
                        style={{
                            transform: `translateX(${indicator.left}px)`,
                            width: indicator.width,
                            opacity: indicator.visible ? 1 : 0,
                        }}
                        className="nav-indicator absolute -bottom-1 h-[2px] transition-all duration-300"
                    />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsOpenMenu((prev) => !prev)}
                    className="md:hidden p-2 z-50 text-foreground"
                >
                    {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isOpenMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-2xl">
                        {navItem.map((item, key) => (
                            <a
                                key={key}
                                href={item.href}
                                className="hover:text-primary transition-colors duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const id = item.href.replace('#','');
                                                                        setIsOpenMenu(false);
                                                                        setActiveId(item.href.replace('#',''));
                                                                        performTransitionScroll(id);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* full-screen overlay used during anchor transition */}
            <div className={"nav-overlay " + (isTransitioning ? 'show' : '')} aria-hidden />
        </nav>
    );
};
export default Navbar;