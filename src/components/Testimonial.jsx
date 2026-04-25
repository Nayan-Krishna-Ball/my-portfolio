import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonial() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const testimonials = [
    {
      name: 'Client Name',
      profession: 'Profession',
      img: '/img/testimonial-1.jpg',
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      img: '/img/testimonial-2.jpg',
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    },
    {
      name: 'Client Name',
      profession: 'Profession',
      img: '/img/testimonial-3.jpg',
      text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'
    }
  ];

  return (
    <div className="bg-light py-24 my-24 w-full overflow-hidden" id="testimonial">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <h1 className="text-[40px] font-bold text-center text-dark mb-12">Testimonial</h1>
        
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          
          <div className="hidden lg:block lg:w-1/4 relative h-[300px]">
             <img className="absolute p-1 border border-secondary rounded-full w-[70px] h-[70px] top-[10%] left-1/2 -translate-x-1/2" src="/img/testimonial-1.jpg" alt="" />
             <img className="absolute p-1 border border-secondary rounded-full w-[60px] h-[60px] top-1/2 left-[10%] -translate-y-1/2" src="/img/testimonial-2.jpg" alt="" />
             <img className="absolute p-1 border border-secondary rounded-full w-[50px] h-[50px] bottom-[10%] right-[10%]" src="/img/testimonial-3.jpg" alt="" />
          </div>

          <div className="lg:w-1/2 w-full max-w-2xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((t, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 text-center px-4">
                    <div className="relative mb-12 inline-block">
                      <img className="w-[120px] h-[120px] rounded-full border border-secondary p-2 mx-auto" src={t.img} alt={t.name} />
                      <div className="absolute w-10 h-10 left-1/2 -bottom-4 -translate-x-1/2 flex items-center justify-center bg-white border border-secondary rounded-full">
                        <FaQuoteLeft className="text-primary text-xl" />
                      </div>
                    </div>
                    <p className="text-xl italic text-[#555] mb-6">"{t.text}"</p>
                    <hr className="w-1/4 mx-auto border-gray-300 mb-4" />
                    <h5 className="text-xl font-bold text-dark">{t.name}</h5>
                    <span className="text-[#555]">{t.profession}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/4 relative h-[300px]">
             <img className="absolute p-1 border border-secondary rounded-full w-[50px] h-[50px] bottom-[10%] left-[10%]" src="/img/testimonial-1.jpg" alt="" />
             <img className="absolute p-1 border border-secondary rounded-full w-[60px] h-[60px] top-1/2 left-[10%] -translate-y-1/2" src="/img/testimonial-2.jpg" alt="" />
             <img className="absolute p-1 border border-secondary rounded-full w-[70px] h-[70px] top-[10%] left-1/2 -translate-x-1/2" src="/img/testimonial-3.jpg" alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}
