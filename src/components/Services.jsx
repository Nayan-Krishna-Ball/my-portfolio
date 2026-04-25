import { FaCropAlt, FaCodeBranch, FaCode, FaLaptopCode } from 'react-icons/fa';

export default function Services() {
  const servicesData = [
    {
      icon: <FaCropAlt className="text-4xl text-dark" />,
      title: 'Creative Design',
      price: '$199',
      desc: 'Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.'
    },
    {
      icon: <FaCodeBranch className="text-4xl text-dark" />,
      title: 'Graphic Design',
      price: '$199',
      desc: 'Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.'
    },
    {
      icon: <FaCode className="text-4xl text-dark" />,
      title: 'Web Design',
      price: '$199',
      desc: 'Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.'
    },
    {
      icon: <FaLaptopCode className="text-4xl text-dark" />,
      title: 'UI/UX Design',
      price: '$199',
      desc: 'Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.'
    }
  ];

  return (
    <div className="w-full bg-light py-24 my-12" id="service">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between mb-12 items-start lg:items-end gap-6">
          <div className="lg:w-1/2">
            <h1 className="text-[40px] font-bold text-dark mb-0">My Services</h1>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <a className="btn btn-primary py-4 px-10" href="">Hire Me</a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row bg-white rounded p-6 lg:p-12 h-full transition-transform hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl">
              <div className="bg-icon-pattern w-[100px] h-[100px] flex-shrink-0 mb-6 sm:mb-0 flex items-center justify-center rounded-full sm:mr-8">
                {service.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-dark mb-4">{service.title}</h4>
                <h6 className="font-bold mb-4 text-dark text-lg">
                  Start from <span className="text-primary">{service.price}</span>
                </h6>
                <span className="text-[#555] leading-relaxed block">{service.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
