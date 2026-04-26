import { TypeAnimation } from "react-type-animation";

export default function Header() {
  return (
    <div
      className="container-fluid bg-light my-24 mt-0 bg-header-pattern relative pt-24"
      id="home"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 py-24 pb-0 lg:pt-0">
            <h3 className="text-primary text-2xl font-bold mb-3">Hi I'm</h3>
            <h1 className="text-5xl lg:text-[80px] font-bold text-dark mb-4 leading-tight">
              Nayan Krishna Bal
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-dark inline-block">
              <TypeAnimation
                sequence={[
                  "Front End Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "Apps Designer",
                  2000,
                  "Back End Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <div className="flex items-center pt-12">
              <a
                href=""
                className="btn btn-primary py-4 px-8 mr-12 text-lg rounded-full"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <img
              className="max-w-full h-auto"
              src="/img/profileNonbg.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
