import React from "react";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-linear-to-b from-emerald-600 to-emerald-500  min-h-screen scroll-mt-20"
    >
      <h1 className="text-center text-white py-2 text-6xl md:text-7xl font-medium">
        Projects
      </h1> 
      <p className="text-center text-white max-w-2xl mx-auto mt-2 text-lg md:text-xl">
  A showcase of projects I’ve built using modern web technologies to solve real-world problems.
</p>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-9 px-4 gap-4">
        <div className="bg-emerald-800 text-white text-lg rounded-lg shadow-lg h-full p-4 space-y-3">
          <h1>Events Management System (Collab Project during internship)</h1>
          <img src={project1} alt="Events Management System" className="w-full h-90 rounded-lg mt-2"/>
          <a href="" className="inline-flex items-center justify-center gap-2 py-3 rounded-full w-41 bg-emerald-600 text-white font-semibold shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-400/50 hover:shadow-2xl hover:bg-emerald-700 active:scale-95">View Project</a>
        </div>

        <div className="bg-emerald-800 text-white text-lg rounded-lg shadow-lg h-full p-4 space-y-3">
          <h1>Biliran Turmeric Yield Geo-Mapping and Monitoring System (Thesis Project)</h1>
          <img src={project2} alt="Events Management System" className="w-full h-90 rounded-lg mt-2"/>
           <a href="" className="inline-flex items-center justify-center gap-2 py-3 rounded-full w-41 bg-emerald-600 text-white font-semibold shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-400/50 hover:shadow-2xl hover:bg-emerald-700 active:scale-95">View Project</a>
        </div>

        <div className="bg-emerald-800 text-white text-lg rounded-lg shadow-lg h-full p-4 space-y-3">
          <h1>WordPress Portfolio (hInternship project)</h1>
          <img src={project3} alt="Events Management System" className="w-full h-90 rounded-lg mt-8"/>
          <a href="" className="inline-flex items-center justify-center gap-2 py-3 rounded-full w-41 bg-emerald-600 text-white font-semibold shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald-400/50 hover:shadow-2xl hover:bg-emerald-700 active:scale-95">View Project</a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
