import React, { useState } from "react";
import Resume from "../assets/Drian Resume.pdf";
import Cvisnet1 from "../assets/cvisnet1.jpg";
import Cvisnet2 from "../assets/cvisnet2.jpg";
import Cvisnet3 from "../assets/cvisnet3.jpg";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVite } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaWordpress } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiLaragon } from "react-icons/si";




const experiences = [
  {
    role: "IT Department Intern",
    company: "Central Visayas Information Sharing Network (CVISNET)",
    duration: "January 2025 - March 2025",
    description:
      "developed Laravel-based web projects with full CRUD operations, ensuring efficient database management and dynamic functionality. I also created and maintained WordPress websites, focusing on responsive design, user experience, and client requirements. Additionally, I collaborated closely with co-interns on team projects, enhancing project coordination, problem-solving, and real-world development skills. This experience allowed me to strengthen both my front-end and back-end development abilities while gaining practical knowledge in web development workflows, version control, and collaborative project management.",
    images: [Cvisnet1, Cvisnet2, Cvisnet3],
  },
  {
    role: "PESO Office Staff",
    company: "Biliran Province State University",
    duration: "August 2025 - December 2025",
    description:
      "Handled student data management by inputting information from the NSRP to the PEIS system. Created graphic design materials for work-related purposes, including organizational charts, mission and vision statements, flowcharts, schedules, event posters, and various administrative reports. Collaborated with colleagues to ensure accurate data entry and efficient office workflow while enhancing visual documentation for the university.",
    images: ["/images/peso1.jpg", "/images/peso2.jpg", "/images/peso3.jpg"],
  },
];

const About = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section
      id="about"
      className="scroll-mt-20 bg-linear-to-b from-emerald-700 to-emerald-600 min-h-screen"
    >
      <div className="grid grid-cols-1 p-4 md:p-10 space-x-8 space-y-8 lg:grid-cols-2 md:grid-cols-1 gap-4">
        {/* About Me Section */}
        <div className="flex flex-col bg-emerald-900 h-full w-full md:w-full rounded-xl shadow-2xl py-5  text-white px-5 md:px-10">
          <h1 className="text-white text-3xl font-medium mb-6 md:text-6xl">
            About me
          </h1>

          <p className="leading-relaxed text-base indent-8 text-justify mb-3 md:text-2xs text-emerald-100">
            I am a Bachelor of Science in Computer Science graduate from Biliran
            Province State University with a strong interest in web development
            and software engineering. I enjoy turning ideas into functional,
            user-friendly applications and continuously improving my skills
            through hands-on projects and real-world problem solving.
          </p>

          <p className="leading-relaxed text-base indent-8 text-justify mb-3 md:text-2xs">
            Throughout my academic journey and internship, I engaged in multiple
            projects that enhanced my technical skills, including my thesis,
            Biliran Turmeric Yield Geo-Mapping and Monitoring System. During my
            internship, I contributed to developing web projects using WordPress
            and Laravel, which complemented my thesis work by providing hands-on
            experience in full-stack development, system analysis, and data
            management, while applying programming and system design concepts to
            solve real-world agricultural challenges.
          </p>

          <p className="leading-relaxed text-base indent-8 text-justify mb-3 md:text-2xs">
            I am passionate about learning new technologies and building clean,
            efficient, and scalable applications. As an aspiring junior web
            developer, I am eager to contribute to a team where I can grow
            professionally, sharpen my skills, and create meaningful digital
            solutions that have a positive impact.
          </p>

          <div className="flex justify-center mt-6">
            <a
              href={Resume}
              download
              className="inline-flex items-center justify-center gap-2 py-3 rounded-full w-41 bg-emerald-600 text-white font-semibold shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-400/50 hover:shadow-2xl hover:bg-emerald-700 active:scale-95"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-emerald-900 p-6 rounded-xl shadow-lg max-w-full mx-auto">
          <h1 className="text-white text-4xl text-center font-medium mb-6">
            Experience
          </h1>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                onClick={() => setSelectedExp(exp)}
                className="bg-emerald-700 p-4 rounded-lg hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                <h2 className="text-white text-xl font-semibold">{exp.role}</h2>
                <p className="text-emerald-100 italic">
                  {exp.company} | {exp.duration}
                </p>
                <p className="text-emerald-200 mt-2 text-justify indent-8">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-emerald-900 p-6 rounded-2xl max-w-6xl w-full h-120 relative">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-3 right-3 text-white text-xl font-bold"
            >
              &times;
            </button>
            <h2 className="text-white text-2xl font-semibold mb-4">
              {selectedExp.role} at {selectedExp.company}
            </h2>
            <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto snap-x snap-mandatory">
              {selectedExp.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Experience ${i + 1}`}
                  className="rounded-lg object-cover w-full h-80 md:h-95"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <h1 className="text-white text-6xl md:text-7xl font-medium flex items-center justify-center mt-15">
        Tech Stack
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 h-full text-gray-900 mt-6">
        <div className="rounded-xl backdrop-blur-9xl bg-gray-900/50 p-5 shadow-2xl">
          <h1 className="flex justify-center text-white text-5xl font-medium">
            Frontend
          </h1>
          <div className="grid grid-cols-3  text-xl mt-5 text-center">
            <div className=" mx-auto gap-8 space-y-8">
              <a href="https://www.w3schools.com/html/html_intro.asp">
                <FaHtml5 className="text-8xl text-center justify-center mb-4 text-orange-500" />
              </a>
              <a href="https://www.w3schools.com/html/html_intro.asp">
                <TbBrandVite className="text-8xl text-center justify-center mb-4 text-purple-500" />
              </a>
              <a href="https://www.w3schools.com/html/html_intro.asp">
                <FaBootstrap className="text-8xl text-center justify-center mb4 text-blue-800" />
              </a>
            </div>

            <div className="mx-auto gap-8 space-y-8">
              <a href="https://www.w3schools.com/css/css_intro.asp">
                <FaCss3Alt className="text-8xl text-center justify-center mb-4 text-blue-600" />
              </a>
              <a href="https://www.w3schools.com/css/css_intro.asp">
                <FaReact className="text-8xl text-center justify-center mb-4 text-blue-500" />
              </a>
            </div>

            <div className="mx-auto gap-8 space-y-8">
              <a href="https://www.w3schools.com/html/html_intro.asp">
                <IoLogoJavascript className="text-8xl text-center justify-center mb-4 text-yellow-400" />
              </a>
              <a href="https://www.w3schools.com/html/html_intro.asp">
                <RiTailwindCssFill className="text-8xl text-center justify-center mb-4 text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-900/50 rounded-xl shadow-xl backdrop-blur-9xl p-5">
          <h1 className="text-center text-white text-4xl mb-4 font-medium">
            Backend
          </h1>
          <div className="grid grid-cols-3">

            <div className="mx-auto gap-8 space-y-8">
              <a href="">
                  <FaPhp className="text-8xl text-center mb-4 text-blue-400"/>
                </a>
            </div>

            <div className="mx-auto gap-8 space-y-8">
              <a href="">
                  <FaLaravel  className="text-7xl text-center mb-4 text-orange-600"/>
                </a>
            </div>

            <div className="mx-auto gap-8 space-y-8">
              <a href="">
                  <SiMysql   className="text-7xl text-center mb-4 text-blue-200"/>
                </a>
            </div>

          </div>   
        </div>

        <div className="bg-gray-900/50 rounded-xl shadow-xl backdrop-blur-9xl p-5">
          <h1 className="text-center text-white text-4xl mb-4 font-medium">
            Tools & Others
          </h1>
          <div className="grid grid-cols-3">

            <div className="mx-auto gap-8 space-y-8">
              <a href="">
                  <FaGithub className="text-8xl text-center mb-4 text-gray-900"/>
                </a>
                <a href="">
                  <VscVscode className="text-8xl text-center mb-4 text-blue-600"/>
                </a>
                <a href="">
                  <SiXampp className="text-7xl text-center mb-4 text-orange-500"/>
                </a>
            </div>

            <div className="mx-auto gap-8 space-y-8">
              <a href="">
                  <FaNpm   className="text-7xl text-center mb-11 text-red-600"/>
                </a>
                <a href="">
                  <FaWordpress className="text-7xl text-center mt-4 mb-4 text-blue-400"/>
                </a>
                <a href="">
                  <SiLaragon className="text-7xl text-center mt-8 mb-4 text-blue-400"/>
                </a>
            </div>

            <div className="mx-auto gap-8 space-y-8">
              <a href="">
                  <FaFigma className="text-7xl text-center mb-4 text-gray-950"/>
                </a>
              <a href="">
                  <SiCanva className="text-7xl text-center mb-4 text-indigo-600 mt-10"/>
                </a>
            </div>

          </div>   
        </div>

        
      </div>
    </section>
  );
};

export default About;
