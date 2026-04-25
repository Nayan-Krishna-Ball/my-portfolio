import {
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaRocket,
  FaServer,
  FaTools,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="py-24" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}

          <div className="lg:w-1/2">
            <div className="flex items-center mb-12">
              <div className="shrink-0 text-center mr-6">
                <h1 className="text-8xl md:text-[10rem] leading-none text-primary font-bold mb-0">
                  1+
                </h1>
                <h5 className="mb-0 text-xl font-bold tracking-[10px] uppercase ml-3">
                  Years
                </h5>
              </div>
              <h3 className="text-2xl font-bold leading-relaxed mb-0 text-dark">
                crafting ideas into interactive web experiences
              </h3>
            </div>

            <p className="mb-5 text-[#555] leading-relaxed text-sm">
              Hi, I`m{" "}
              <span className="font-semibold text-dark">Nayan Krishna</span> — a
              frontend developer who enjoys turning ideas into clean and
              interactive web applications. My journey started with curiosity
              and quickly grew into a strong interest in building real-world
              projects.
            </p>

            <p className="mb-5 text-[#555] leading-relaxed text-sm">
              I work mainly with React.js and Next.js, focusing on responsive
              design, performance, and user experience. I like keeping things
              simple while making sure everything feels smooth and intuitive.
            </p>

            <p className="mb-5 text-[#555] leading-relaxed text-sm">
              I’ve built projects like e-commerce platforms and real-time chat
              apps to understand how real applications work. I'm continuously
              learning and improving my skills with every project I build.
            </p>

            <p className="mb-3 flex items-center text-[#555] text-sm">
              <FaCheckCircle className="text-primary mr-3 text-lg" /> Real-world
              project experience
            </p>
            <p className="mb-3 flex items-center text-[#555] text-sm">
              <FaCheckCircle className="text-primary mr-3 text-lg" /> Focus on
              clean UI & UX
            </p>
            <p className="mb-3 flex items-center text-[#555] text-sm">
              <FaCheckCircle className="text-primary mr-3 text-lg" /> Always
              learning & improving
            </p>

            <a className="btn btn-primary py-3 px-8 mt-5" href="#projects">
              Explore My Work
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white">
                <FaCode className="text-primary text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Frontend</h4>
                <p className="text-[#555] text-sm">
                  React.js, Next.js, Tailwind CSS
                </p>
              </div>

              <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white">
                <FaServer className="text-primary text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Backend</h4>
                <p className="text-[#555] text-sm">Node.js, Express.js</p>
              </div>

              <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white">
                <FaDatabase className="text-primary text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Database</h4>
                <p className="text-[#555] text-sm">MongoDB</p>
              </div>

              <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white">
                <FaTools className="text-primary text-3xl mb-4" />
                <h4 className="font-bold text-lg mb-2">Tools</h4>
                <p className="text-[#555] text-sm">Git, GitHub, VS Code</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <FaLayerGroup className="text-primary text-2xl mt-1" />
                <div>
                  <h5 className="font-semibold text-dark">What I Build</h5>
                  <p className="text-sm text-[#555]">
                    Full-stack web apps, e-commerce platforms, and real-time
                    applications with clean UI and smooth user experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <FaRocket className="text-primary text-2xl mt-1" />
                <div>
                  <h5 className="font-semibold text-dark">My Approach</h5>
                  <p className="text-sm text-[#555]">
                    I focus on performance, scalability, and writing clean,
                    maintainable code while keeping the user experience at the
                    center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
