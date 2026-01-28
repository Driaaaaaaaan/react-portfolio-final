import React, { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Events Management System",
      subtitle: "Collab Project during Internship",
      image: project1,
      description:
        "A web-based events management system developed collaboratively during my internship. It handles event creation, participant management, and scheduling.",
      link: "#",
    },
    {
  title: "Biliran Turmeric Yield Geo-Mapping and Monitoring",
  subtitle: "Undergraduate Thesis Project",
  image: project2,
  description:
    "My thesis project designed to support agricultural decision-making in Biliran through a geo-mapping and monitoring system for turmeric production. The system visualizes farm locations using geographic coordinates and calculates projected yield based on distributed turmeric buds, planting schedules, and expected harvest timelines. It allows administrators to monitor farmer requests, bud distribution, projected versus actual yield, and generate analytical reports.",
  link: "https://github.com/yourusername/biliran-turmeric-yield-monitoring-system",
},
    {
      title: "WordPress Portfolio",
      subtitle: "Internship Project",
      image: project3,
      description:
        "A responsive personal portfolio website developed using WordPress to professionally showcase projects, technical skills, and work experience. The site features a clean and modern layout, optimized for both desktop and mobile devices, with customizable sections for projects, about, and contact information. It was designed with usability and performance in mind, allowing easy content updates through the WordPress CMS while maintaining a polished and consistent visual design.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-linear-to-b from-emerald-600 to-emerald-500 min-h-screen scroll-mt-20 py-2"
    >
      <h1 className="text-center text-white py-2 text-6xl md:text-7xl font-medium">
        Projects
      </h1>
      <p className="text-center text-white max-w-2xl mx-auto mt-2 text-lg md:text-xl">
        A showcase of projects I’ve built using modern web technologies to solve real-world problems.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-9 px-4 gap-6 max-w-9xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-emerald-800 text-white text-lg rounded-lg shadow-lg p-4 space-y-4"
          >
            <h2 className="font-semibold">{project.title}</h2>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 rounded-lg"
            />
            <button
              onClick={() => setSelectedProject(project)}
              className="inline-flex items-center justify-center py-3 px-4 rounded-full bg-emerald-600 font-semibold shadow-lg transition-all hover:-translate-y-1 hover:bg-emerald-700"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white text-emerald-800 rounded-xl shadow-xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-emerald-600 hover:text-emerald-800 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-1">
              {selectedProject.title}
            </h2>
            <p className="italic text-sm mb-4">
              {selectedProject.subtitle}
            </p>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg mb-4"
            />

            <p className="mb-6">{selectedProject.description}</p>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
