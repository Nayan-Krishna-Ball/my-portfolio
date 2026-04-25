// import { FaCheckCircle } from "react-icons/fa";

// export default function About() {
//   return (
//     <div className="py-24" id="about">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left Column */}
//           <div className="lg:w-1/2">
//             <div className="flex items-center mb-12">
//               <div className="flex-shrink-0 text-center mr-6">
//                 <h1 className="text-8xl md:text-[10rem] leading-none text-primary font-bold mb-0">
//                   15
//                 </h1>
//                 <h5 className="mb-0 text-xl font-bold tracking-[10px] uppercase ml-3">
//                   Years
//                 </h5>
//               </div>
//               <h3 className="text-2xl font-bold leading-relaxed mb-0 text-dark">
//                 of working experience as a web designer & developer
//               </h3>
//             </div>
//             <p className="mb-6 text-[#555] leading-relaxed">
//               Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
//               stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
//               nonumy clita sit at, sed sit sanctus dolor eos.
//             </p>
//             <p className="mb-4 flex items-center text-[#555]">
//               <FaCheckCircle className="text-primary mr-4 text-xl" /> Affordable
//               Prices
//             </p>
//             <p className="mb-4 flex items-center text-[#555]">
//               <FaCheckCircle className="text-primary mr-4 text-xl" /> High
//               Quality Product
//             </p>
//             <p className="mb-4 flex items-center text-[#555]">
//               <FaCheckCircle className="text-primary mr-4 text-xl" /> On Time
//               Project Delivery
//             </p>
//             <a className="btn btn-primary py-4 px-10 mt-6" href="">
//               Read More
//             </a>
//           </div>

//           {/* Right Column */}
//           <div className="lg:w-1/2">
//             <div className="flex gap-6 mb-8">
//               <div className="w-1/2">
//                 <img
//                   className="w-full rounded"
//                   src="/img/about-1.jpg"
//                   alt="About 1"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <img
//                   className="w-full rounded"
//                   src="/img/about-2.jpg"
//                   alt="About 2"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center mb-4">
//               <h5 className="border-r border-gray-300 pr-4 mr-4 mb-0 font-bold text-xl text-dark">
//                 Happy Clients
//               </h5>
//               <h2 className="text-primary font-bold text-4xl mb-0">1234</h2>
//             </div>
//             <p className="mb-8 text-[#555] leading-relaxed">
//               Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
//               stet est diam amet diam ipsum clita labore dolor duo clita.
//             </p>
//             <div className="flex items-center mb-4">
//               <h5 className="border-r border-gray-300 pr-4 mr-4 mb-0 font-bold text-xl text-dark">
//                 Projects Completed
//               </h5>
//               <h2 className="text-primary font-bold text-4xl mb-0">1234</h2>
//             </div>
//             <p className="mb-0 text-[#555] leading-relaxed">
//               Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
//               stet est diam amet diam ipsum clita labore dolor duo clita.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <div className="py-24" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <div className="flex items-center mb-12">
              <div className="flex-shrink-0 text-center mr-6">
                <h1 className="text-8xl md:text-[10rem] leading-none text-primary font-bold mb-0">
                  2+
                </h1>
                <h5 className="mb-0 text-xl font-bold tracking-[10px] uppercase ml-3">
                  Years
                </h5>
              </div>
              <h3 className="text-2xl font-bold leading-relaxed mb-0 text-dark">
                crafting ideas into interactive web experiences
              </h3>
            </div>

            <p className="mb-6 text-[#555] leading-relaxed">
              Hi, I’m{" "}
              <span className="font-semibold text-dark">Nayan Krishna</span> — a
              frontend developer who genuinely enjoys turning ideas into clean,
              interactive, and meaningful digital products. What started as
              curiosity about how websites work has grown into a passion for
              building experiences that people actually enjoy using.
            </p>

            <p className="mb-6 text-[#555] leading-relaxed">
              I mainly work with React.js and Next.js, and I like keeping things
              simple, fast, and user-focused. Whether it's designing a smooth
              UI, optimizing performance, or connecting APIs, I care about the
              small details that make a product feel polished.
            </p>

            <p className="mb-6 text-[#555] leading-relaxed">
              I’ve built projects like e-commerce platforms and real-time chat
              apps — not just to make them work, but to understand how
              real-world applications are structured and scaled. I'm always
              learning, experimenting, and pushing myself to improve with every
              project.
            </p>

            <p className="mb-4 flex items-center text-[#555]">
              <FaCheckCircle className="text-primary mr-4 text-xl" /> I build
              responsive, real-world applications
            </p>
            <p className="mb-4 flex items-center text-[#555]">
              <FaCheckCircle className="text-primary mr-4 text-xl" /> I focus on
              clean UI & user experience
            </p>
            <p className="mb-4 flex items-center text-[#555]">
              <FaCheckCircle className="text-primary mr-4 text-xl" /> I’m
              constantly learning & improving
            </p>

            <a className="btn btn-primary py-4 px-10 mt-6" href="#projects">
              Explore My Work
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="flex gap-6 mb-8">
              <div className="w-1/2">
                <img
                  className="w-full rounded"
                  src="/img/about-1.jpg"
                  alt="Workspace"
                />
              </div>
              <div className="w-1/2">
                <img
                  className="w-full rounded"
                  src="/img/about-2.jpg"
                  alt="Coding"
                />
              </div>
            </div>

            <div className="flex items-center mb-4">
              <h5 className="border-r border-gray-300 pr-4 mr-4 mb-0 font-bold text-xl text-dark">
                Projects Built
              </h5>
              <h2 className="text-primary font-bold text-4xl mb-0">3+</h2>
            </div>
            <p className="mb-8 text-[#555] leading-relaxed">
              From a full-stack e-commerce platform to a real-time chat
              application, I’ve worked on projects that challenged me to think
              about performance, scalability, and user experience.
            </p>

            <div className="flex items-center mb-4">
              <h5 className="border-r border-gray-300 pr-4 mr-4 mb-0 font-bold text-xl text-dark">
                Tech I Enjoy
              </h5>
              <h2 className="text-primary font-bold text-4xl mb-0">
                Full Stack
              </h2>
            </div>
            <p className="mb-0 text-[#555] leading-relaxed">
              I enjoy working across the stack with technologies like JavaScript
              (ES6+), React.js, Next.js, Node.js, Express.js, and MongoDB —
              building fast, scalable, and user-focused applications from
              frontend to backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
