import { FaCode, FaCodeBranch, FaCropAlt, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  const servicesData = [
    {
      icon: <FaCropAlt className="text-4xl text-dark" />,
      title: "Frontend Development",
      price: "React & Next.js",
      desc: "I build responsive and interactive user interfaces using React.js and Next.js, focusing on performance, clean design, and smooth user experience.",
    },
    {
      icon: <FaCodeBranch className="text-4xl text-dark" />,
      title: "Backend Development",
      price: "Node & Express",
      desc: "I develop secure and scalable backend systems using Node.js and Express.js, including RESTful APIs and authentication systems.",
    },
    {
      icon: <FaCode className="text-4xl text-dark" />,
      title: "Full Stack Projects",
      price: "MERN Stack",
      desc: "I create complete web applications like e-commerce platforms and real-time chat apps using MongoDB, Express, React, and Node.js.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-dark" />,
      title: "UI & Performance",
      price: "Tailwind CSS",
      desc: "I focus on clean UI design, mobile responsiveness, and optimizing web applications for speed, accessibility, and better user experience.",
    },
  ];

  return (
    <div className="w-full bg-light py-24 my-12" id="service">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-12 items-start lg:items-end gap-6">
          <div className="lg:w-1/2">
            <h1 className="text-[40px] font-bold text-dark mb-0">
              My Services
            </h1>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <a className="btn btn-primary py-4 px-10 rounded-2xl" href="#home">
              Hire Me
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row bg-white rounded p-6 lg:p-12 h-full transition-transform hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="bg-icon-pattern w-25 h-25 shrink-0 mb-6 sm:mb-0 flex items-center justify-center rounded-full sm:mr-8">
                {service.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark mb-4">
                  {service.title}
                </h4>
                <h6 className="font-bold mb-4 text-dark text-lg">
                  Focus on <span className="text-primary">{service.price}</span>
                </h6>
                <span className="text-[#555] leading-relaxed block">
                  {service.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
