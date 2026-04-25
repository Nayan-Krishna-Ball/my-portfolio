import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <div className="pb-24 pt-12" id="contact">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
            <div className="lg:w-1/2">
              <h1 className="text-[40px] font-bold text-dark mb-0">Let's Work Together</h1>
            </div>
            <div className="lg:w-1/2 lg:text-right">
              <a className="btn btn-primary py-4 px-10" href="">Say Hello</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-5/12">
              <p className="mb-2 text-[#555]">My office:</p>
              <h3 className="font-bold text-2xl text-dark">123 Street, New York, USA</h3>
              <hr className="w-full my-6 border-gray-300" />
              
              <p className="mb-2 text-[#555]">Call me:</p>
              <h3 className="font-bold text-2xl text-dark">+012 345 6789</h3>
              <hr className="w-full my-6 border-gray-300" />
              
              <p className="mb-2 text-[#555]">Mail me:</p>
              <h3 className="font-bold text-2xl text-dark">info@example.com</h3>
              <hr className="w-full my-6 border-gray-300" />
              
              <p className="mb-2 text-[#555]">Follow me:</p>
              <div className="flex pt-2 space-x-2">
                <a className="btn btn-square btn-primary rounded" href=""><FaTwitter /></a>
                <a className="btn btn-square btn-primary rounded" href=""><FaFacebookF /></a>
                <a className="btn btn-square btn-primary rounded" href=""><FaYoutube /></a>
                <a className="btn btn-square btn-primary rounded" href=""><FaLinkedinIn /></a>
              </div>
            </div>
            
            <div className="md:w-7/12">
              <p className="mb-8 text-[#555] leading-relaxed">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form" className="text-primary hover:underline">Download Now</a>.
              </p>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input type="text" className="w-full h-[58px] bg-white border border-gray-300 rounded px-4 pt-4 pb-1 outline-none focus:border-primary peer" id="name" placeholder=" " />
                    <label htmlFor="name" className="absolute top-4 left-4 text-gray-500 transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text">Your Name</label>
                  </div>
                  <div className="relative">
                    <input type="email" className="w-full h-[58px] bg-white border border-gray-300 rounded px-4 pt-4 pb-1 outline-none focus:border-primary peer" id="email" placeholder=" " />
                    <label htmlFor="email" className="absolute top-4 left-4 text-gray-500 transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text">Your Email</label>
                  </div>
                  <div className="relative sm:col-span-2">
                    <input type="text" className="w-full h-[58px] bg-white border border-gray-300 rounded px-4 pt-4 pb-1 outline-none focus:border-primary peer" id="subject" placeholder=" " />
                    <label htmlFor="subject" className="absolute top-4 left-4 text-gray-500 transition-all duration-200 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text">Subject</label>
                  </div>
                  <div className="relative sm:col-span-2">
                    <textarea className="w-full h-[150px] bg-white border border-gray-300 rounded px-4 pt-6 pb-2 outline-none focus:border-primary peer resize-none" placeholder=" " id="message"></textarea>
                    <label htmlFor="message" className="absolute top-4 left-4 text-gray-500 transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-placeholder-shown:top-4 peer-placeholder-shown:text-base cursor-text">Message</label>
                  </div>
                  <div className="sm:col-span-2">
                    <button className="btn btn-primary py-4 px-10 w-full sm:w-auto mt-2" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-12 wow fadeInUp" data-wow-delay="0.1s">
        <div className="bg-dark">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            className="w-full h-[450px] border-0"
            allowFullScreen="" 
            aria-hidden="false"
            tabIndex="0">
          </iframe>
        </div>
      </div>
    </>
  );
}
