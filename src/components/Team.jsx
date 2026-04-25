import { FaArrowRight } from 'react-icons/fa';

export default function Team() {
  const teamMembers = [
    { name: 'Full Name', role: 'Designer', img: '/img/team-1.jpg' },
    { name: 'Full Name', role: 'Designer', img: '/img/team-2.jpg' },
    { name: 'Full Name', role: 'Designer', img: '/img/team-3.jpg' },
  ];

  return (
    <div className="py-24 pb-20" id="team">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
          <div className="lg:w-1/2">
            <h1 className="text-[40px] font-bold text-dark mb-0">Team Members</h1>
          </div>
          <div className="lg:w-1/2 lg:text-right">
            <a className="btn btn-primary py-4 px-10" href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="relative group rounded overflow-hidden">
              <img className="w-full h-auto rounded transition-opacity duration-500 group-hover:opacity-70" src={member.img} alt={member.name} />
              <div className="absolute left-0 right-[60px] bottom-[30px] flex items-center justify-between bg-white rounded-r p-6 opacity-0 transition-all duration-500 group-hover:right-[30px] group-hover:opacity-100">
                <div className="transition-all duration-500 group-hover:ml-[30px]">
                  <h5 className="text-xl font-bold text-dark">{member.name}</h5>
                  <span className="text-[#555]">{member.role}</span>
                </div>
                <FaArrowRight className="text-3xl text-primary flex-shrink-0 ml-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
