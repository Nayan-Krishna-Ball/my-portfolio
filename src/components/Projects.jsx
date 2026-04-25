import { useState } from 'react';
import { FaEye, FaLink } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState('*');

  const projects = [
    { id: 1, category: 'first', img: '/img/project-1.jpg' },
    { id: 2, category: 'second', img: '/img/project-2.jpg' },
    { id: 3, category: 'first', img: '/img/project-3.jpg' },
    { id: 4, category: 'second', img: '/img/project-4.jpg' },
    { id: 5, category: 'first', img: '/img/project-5.jpg' },
    { id: 6, category: 'second', img: '/img/project-6.jpg' },
  ];

  const filteredProjects = filter === '*' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-24 pt-20" id="project">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
          <div className="lg:w-1/2">
            <h1 className="text-[40px] font-bold text-dark mb-0">My Projects</h1>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <ul className="inline-flex m-0 p-0 list-none space-x-6">
              <li 
                className={`cursor-pointer font-medium border-b-2 transition-colors duration-300 pb-1 ${filter === '*' ? 'text-primary border-primary' : 'text-dark border-transparent hover:text-primary hover:border-primary'}`}
                onClick={() => setFilter('*')}
              >
                All Projects
              </li>
              <li 
                className={`cursor-pointer font-medium border-b-2 transition-colors duration-300 pb-1 ${filter === 'first' ? 'text-primary border-primary' : 'text-dark border-transparent hover:text-primary hover:border-primary'}`}
                onClick={() => setFilter('first')}
              >
                UI/UX Design
              </li>
              <li 
                className={`cursor-pointer font-medium border-b-2 transition-colors duration-300 pb-1 ${filter === 'second' ? 'text-primary border-primary' : 'text-dark border-transparent hover:text-primary hover:border-primary'}`}
                onClick={() => setFilter('second')}
              >
                Graphic Design
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative group rounded overflow-hidden">
              <img className="w-full h-auto" src={project.img} alt={`Project ${project.id}`} />
              <div className="absolute inset-0 bg-primary/90 flex items-end justify-start p-8 pb-[100px] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:pb-8">
                <a className="btn-lg-square border-2 border-[#555] bg-transparent text-[#555] mx-1 hover:bg-[#555] hover:text-white transition-colors" href={project.img} target="_blank" rel="noopener noreferrer">
                  <FaEye />
                </a>
                <a className="btn-lg-square border-2 border-[#555] bg-transparent text-[#555] mx-1 hover:bg-[#555] hover:text-white transition-colors" href="#project">
                  <FaLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
