import { useState } from "react";
import { FaEye, FaLink } from "react-icons/fa";

export default function Projects() {
  const [filter, setFilter] = useState("*");

  const projects = [
    {
      id: 1,
      category: "first",
      img: "/img/gbd.JPG",
      link: "https://e-commerce-gadgets-bd.vercel.app/",
      git: "https://github.com/Nayan-Krishna-Ball/E-commerce-Gadgets-bd.git",
    },
    {
      id: 2,
      category: "first",
      img: "/img/project-2.jpg",
      link: "https://e-commerce-gadgets-bd.vercel.app/",
      git: "https://github.com/Nayan-Krishna-Ball/E-commerce-Gadgets-bd.git",
    },
    {
      id: 3,
      category: "second",
      img: "/img/teachHub.JPG",
      link: "https://tech-hub-e-commerce-psi.vercel.app/",
      git: "https://github.com/Nayan-Krishna-Ball/TechHub-E-commerce-.git",
    },
    {
      id: 4,
      category: "second",
      img: "/img/vault.JPG",
      link: "https://vault-manager-react-zeta.vercel.app/",
      git: "https://github.com/Nayan-Krishna-Ball/vault-manager-react-final-.git",
    },
  ];

  const filteredProjects =
    filter === "*" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="py-24 pt-20" id="project">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
          <div className="lg:w-1/2">
            <h1 className="text-[40px] font-bold text-dark mb-0">
              My Projects
            </h1>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <ul className="inline-flex m-0 p-0 list-none space-x-6">
              <li
                className={`cursor-pointer font-medium border-b-2 transition-colors duration-300 pb-1 ${filter === "*" ? "text-primary border-primary" : "text-dark border-transparent hover:text-primary hover:border-primary"}`}
                onClick={() => setFilter("*")}
              >
                All Projects
              </li>
              <li
                className={`cursor-pointer font-medium border-b-2 transition-colors duration-300 pb-1 ${filter === "first" ? "text-primary border-primary" : "text-dark border-transparent hover:text-primary hover:border-primary"}`}
                onClick={() => setFilter("first")}
              >
                Full Stack
              </li>
              <li
                className={`cursor-pointer font-medium border-b-2 transition-colors duration-300 pb-1 ${filter === "second" ? "text-primary border-primary" : "text-dark border-transparent hover:text-primary hover:border-primary"}`}
                onClick={() => setFilter("second")}
              >
                Font End
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded overflow-hidden"
            >
              <img
                className="w-full h-full"
                src={project.img}
                alt={`Project ${project.id}`}
              />

              <div className="absolute inset-0 bg-primary/90 flex items-end justify-start p-8 pb-[100px] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:pb-8">
                <a
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white mx-2 
                   hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-110"
                  href={project.link || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEye className="text-lg" />
                </a>

                <a
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white mx-2 
                  hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-110"
                  href={project.git || ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="text-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
