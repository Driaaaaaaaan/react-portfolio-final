import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Mark Adrian Cale
            </h3>
            <p className="text-sm text-emerald-200 mt-1">
              Web Developer • React • Laravel • TailwindCSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:calemarkadrian@gmail.com"
              className="hover:text-white transition"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 my-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>
            © {new Date().getFullYear()} Drian Cale. All rights reserved.
          </p>

          {/* Back to top */}
          <a
            href="#hero"
            className="flex items-center gap-1 hover:text-white transition"
          >
            Back to top <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
