import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('experience');

  const skillsData = [
    { name: 'HTML', percent: 95, color: 'bg-primary' },
    { name: 'CSS', percent: 85, color: 'bg-[#FFC448]' }, // warning
    { name: 'PHP', percent: 90, color: 'bg-[#dc3545]' }, // danger
    { name: 'Javascript', percent: 90, color: 'bg-[#dc3545]' },
    { name: 'Angular JS', percent: 95, color: 'bg-[#12141D]' }, // dark
    { name: 'Wordpress', percent: 85, color: 'bg-[#0dcaf0]' }  // info
  ];

  const experienceData = [
    { role: 'UI Designer', company: 'Apex Software Inc', years: '2000 - 2045' },
    { role: 'Product Designer', company: 'Apex Software Inc', years: '2000 - 2045' },
    { role: 'Web Designer', company: 'Apex Software Inc', years: '2000 - 2045' },
    { role: 'Apps Designer', company: 'Apex Software Inc', years: '2000 - 2045' },
  ];

  const educationData = [
    { role: 'UI Design Course', company: 'Cambridge University', years: '2000 - 2045' },
    { role: 'IOS Development', company: 'Cambridge University', years: '2000 - 2045' },
    { role: 'Web Design', company: 'Cambridge University', years: '2000 - 2045' },
    { role: 'Apps Design', company: 'Cambridge University', years: '2000 - 2045' },
  ];

  return (
    <div className="py-24 pb-20" id="skill">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Skills */}
          <div className="lg:w-1/2">
            <h1 className="text-[40px] font-bold text-dark mb-12">Skills & Experience</h1>
            <p className="mb-6 text-[#555] leading-relaxed">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.
            </p>
            <h3 className="text-2xl font-bold mb-6 text-dark">My Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
              {skillsData.map((skill, idx) => (
                <div key={idx} className="mb-2">
                  <div className="flex justify-between mb-2">
                    <h6 className="font-bold text-dark">{skill.name}</h6>
                    <h6 className="font-bold text-dark">{skill.percent}%</h6>
                  </div>
                  <div className="h-[5px] rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${skill.color}`}
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tabs */}
          <div className="lg:w-1/2">
            <ul className="flex rounded border-2 border-primary mb-12 overflow-hidden">
              <li className="w-1/2">
                <button
                  className={`w-full py-4 text-xl font-medium transition-colors ${activeTab === 'experience' ? 'bg-primary text-white' : 'bg-white text-dark hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('experience')}
                >
                  Experience
                </button>
              </li>
              <li className="w-1/2">
                <button
                  className={`w-full py-4 text-xl font-medium transition-colors ${activeTab === 'education' ? 'bg-primary text-white' : 'bg-white text-dark hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('education')}
                >
                  Education
                </button>
              </li>
            </ul>

            <div className="tab-content">
              {activeTab === 'experience' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 animate-fade-in">
                  {experienceData.map((item, idx) => (
                    <div key={idx}>
                      <h5 className="text-xl font-bold text-dark mb-2">{item.role}</h5>
                      <hr className="w-[30px] border-primary border-t-2 my-2" />
                      <p className="text-primary mb-2 font-medium">{item.years}</p>
                      <h6 className="font-bold text-dark text-lg mb-0">{item.company}</h6>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'education' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 animate-fade-in">
                  {educationData.map((item, idx) => (
                    <div key={idx}>
                      <h5 className="text-xl font-bold text-dark mb-2">{item.role}</h5>
                      <hr className="w-[30px] border-primary border-t-2 my-2" />
                      <p className="text-primary mb-2 font-medium">{item.years}</p>
                      <h6 className="font-bold text-dark text-lg mb-0">{item.company}</h6>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
