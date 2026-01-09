
import logo from "../assets/logo.png";
import { useState } from "react";
import { X, Menu} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50 bg-emerald-950 bg-clip-padding backdrop-filter backdrop-blur-xl opacity-90
">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18 items-center">
          {/* Logo */}
          <a href="/hero">
            <img src={logo} alt="Logo" className="h-12 w-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <a href="#hero" className="transition duration-600 hover:text-emerald-400 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
              Home
            </a>
            <a href="#about" className="transition duration-600 hover:text-emerald-400 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
              About
            </a>
            <a href="#projects" className="transition duration-600 hover:text-emerald-400 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
              Projects
            </a>
            <a href="#contact" className="transition duration-600 hover:text-emerald-400 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 items-center py-5 border-t border-emerald-400">
            <a      
              href="#hero"
              className="hover:bg-emerald-900 backdrop-blur-2xl transition duration-150 px-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:bg-emerald-900 backdrop-blur-2xl transition duration-150 px-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:bg-emerald-900 backdrop-blur-2xl transition duration-150 px-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:bg-emerald-900 backdrop-blur-2xl transition duration-150 px-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
