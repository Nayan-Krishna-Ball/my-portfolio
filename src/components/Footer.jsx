import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="bg-dark text-white py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div className="md:w-1/2">
              &copy; <a className="border-b border-secondary text-secondary hover:text-white transition-colors pb-1" href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="md:w-1/2 md:text-right">
              Designed By <a className="border-b border-secondary text-secondary hover:text-white transition-colors pb-1" href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By: <a className="border-b border-secondary text-secondary hover:text-white transition-colors pb-1" href="https://themewagon.com" target="_blank" rel="noopener noreferrer">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollToTop}
        className={`fixed right-[45px] bottom-[45px] z-[99] btn-lg-square bg-primary text-white hover:bg-[#4f369e] rounded transition-all duration-500 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <FaArrowUp />
      </button>
    </>
  );
}
