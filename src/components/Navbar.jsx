import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skill",
        "service",
        "project",
        "team",
        "testimonial",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skill", label: "Skills" },
  ];

  const navLinksRight = [
    { href: "#service", label: "Services" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white flex py-4 lg:py-0 px-4 lg:px-12 ${isScrolled ? "shadow translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
    >
      <div className="flex w-full items-center justify-between lg:hidden">
        <a href="#home" className="text-primary font-bold text-3xl">
          Nayan
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 border border-gray-200 rounded px-3 py-1"
        >
          <span className="navbar-toggler-icon block w-6 h-1 bg-gray-500 mb-1"></span>
          <span className="navbar-toggler-icon block w-6 h-1 bg-gray-500 mb-1"></span>
          <span className="navbar-toggler-icon block w-6 h-1 bg-gray-500"></span>
        </button>
      </div>

      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:flex w-full justify-between items-center mt-4 lg:mt-0`}
      >
        <div className="flex flex-col lg:flex-row ml-auto space-y-2 lg:space-y-0 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-semibold text-lg py-2 transition-colors ${activeSection === link.href.substring(1) ? "text-primary" : "text-dark hover:text-primary"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="hidden lg:flex bg-secondary py-6 px-8 mx-8 items-center justify-center"
        >
          <h1 className="text-primary font-bold text-3xl m-0">Nayan</h1>
        </a>

        <div className="flex flex-col lg:flex-row mr-auto space-y-2 lg:space-y-0 lg:space-x-8 mt-2 lg:mt-0">
          {navLinksRight.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-semibold text-lg py-2 transition-colors ${activeSection === link.href.substring(1) ? "text-primary" : "text-dark hover:text-primary"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
