import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

 const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const navItem = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolling(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                scrolling ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <a className="text-xl font-bold flex items-center" href="#home">
                    <span className="text-primary">Personal</span>{" "}
                    <span className="text-secondary ml-1">Portfolio</span>
                </a>

                {/* Large screen menu */}
                <div className="hidden md:flex space-x-6">
                    {navItem.map((item, key) => (
                        <a
                            key={key}
                            href={item.href}
                            className="
                                text-secondary relative group 
                                transition-all duration-300
                            "
                        >
                            {item.name}

                            {/* hover underline */}
                            <span
                                className="
                                absolute left-0 -bottom-1 w-0 h-[2px] bg-primary 
                                transition-all duration-300 group-hover:w-full
                                "
                            ></span>
                        </a>
                    ))}
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
                                onClick={() => setIsOpenMenu(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;