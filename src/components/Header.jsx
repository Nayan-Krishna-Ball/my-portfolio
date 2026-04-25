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

              <button
                type="button"
                className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center group"
                onClick={() =>
                  document.getElementById("video_modal").showModal()
                }
              >
                <div className="absolute w-full h-full bg-primary rounded-full animate-ping opacity-50"></div>
                <div className="absolute w-full h-full bg-white rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></div>
                <span className="relative z-10 w-0 h-0 border-l-16 border-l-primary border-t-11border-t-transparent border-b-11 border-b-transparent ml-1 group-hover:border-l-primary"></span>
              </button>
              <h5 className="ml-6 mb-0 hidden sm:block text-xl font-bold text-dark">
                Play Video
              </h5>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <img
              className="max-w-full h-auto"
              src="/img/profile.png"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      {/* Video Modal using DaisyUI-like native dialog or simple HTML5 dialog */}
      <dialog
        id="video_modal"
        className="modal bg-black/80 backdrop-blur-sm w-full h-full m-0 max-w-none justify-center items-center fixed inset-0 z-[100] p-4 hidden open:flex"
      >
        <div className="relative w-full max-w-4xl bg-white">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-2xl font-bold">Youtube Video</h3>
            <button
              className="text-3xl leading-none"
              onClick={() => document.getElementById("video_modal").close()}
            >
              &times;
            </button>
          </div>
          <div className="p-0">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
