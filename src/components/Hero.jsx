import React from "react";
import FrontPic from "../assets/id-picture.png";
import { Github, Facebook, Linkedin, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-linear-to-b from-teal-950 to-emerald-700 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - TEXT */}
        <div className="text-white space-y-6 mt-20">
          <p className="p-0 m-0 font-sans">Hi, I’m </p>
          <h1 className="text-6xl md:text-9xl font-bold leading-tight mb-3">
            <span className="text-emerald-300 pacifico-regular ">
              Drian Cale
            </span>
          </h1>

          <div className="text-2xl md:text-4xl mt-3">
            <h1>Aspiring Web Developer</h1>
          </div>

          <p className="text-lg md:text-xl text-teal-100">
            A Bachelor of Science in Computer Science graduate passionate about
            building modern, responsive, and user-friendly web applications.
          </p>
          <div className="flex gap-2 mt-4 flex-wrap items-center">
            <a
              href="#projects"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-teal-700 px-6 py-3 rounded-md transition hover:opacity-60"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-20 space-y-4">
            <h2>Social Links:</h2>
            <div className="flex space-x-6">
              <a href="">
                <Linkedin className="hover:text-blue-300 transition duration-150" />
              </a>
              <a
                href="https://github.com/calem123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white hover:text-gray-900 transition duration-150" />
              </a>
              <a href="https://www.facebook.com/driancale">
                <Facebook className="hover:text-blue-500 transition duration-150" />
              </a>
              <a href="https://www.instagram.com/driancale/">
                <Instagram className="hover:text-rose-400 transition duration-150" />
              </a>
              <a href="https://www.tiktok.com/@driancale">
                <FaTiktok className="text-xl mt-0.5 hover:text-black transition duration-150" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE / VISUAL */}
        <motion.div
          className="relative w-64 h-64 md:w-100 md:h-100 lg:w-120 lg:h-120 mt-2 md:ml-30 md:flex items-center justify-center hidden"
          animate={{
            y: [0, -15, 0], // move up 20px then back down
          }}
          transition={{
            duration: 4, // full cycle duration
            repeat: Infinity, // repeat forever
            repeatType: "loop", // loop smoothly
            ease: "easeInOut", // smooth easing
          }}
        >
          {/* GREEN BLUR GLOW */}
          <div className="absolute inset-0 bg-emerald-300 blur-3xl opacity-50 rounded-full"></div>

          {/* CONTENT (IMAGE / CARD) */}
          <div className="relative w-full h-full rounded-full border border-emerald-600 shadow-2xl overflow-hidden items-center justify-center flex">
            <img src={FrontPic} className="" alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
