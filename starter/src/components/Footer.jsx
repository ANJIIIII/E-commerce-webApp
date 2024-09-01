import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaCcAmex } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#273232] text-white py-2 w-full">
      <div className="container mx-auto p-12 py-23">
        <div className="grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 py-10 gap-3">
          {/* logo */}
         <div className='mr-4 mt-0 space-y-2'>
           <img className='hover:scale-105' src='logo.png'/>
           <p className='hover:tracking-[1px] transition-all duration-700 ease-out hover:text-[#52b788]'>Your Cozy Corner for Every Need</p>
         </div>
          {/* Links Section */}
          <div className="w-full mb-6 md:mb-0">
            <h1 className="font-bold text-2xl mb-6">Company</h1>
            <div className="space-y-2">
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>About
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Careers
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Blog
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Press
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Gift Cards
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Magazine
              </h3>
            </div>
          </div>

          {/* Contact Section */}
          <div className="w-full">
            <h1 className="font-bold mb-6 text-2xl">Support</h1>
            <div className="space-y-2">
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>About
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Careers
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Blog
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Press
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Gift Cards
              </h3>
              <h3 className="hover:tracking-[10px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-angle-right me-2"></i>Magazine
              </h3>
            </div>
          </div>

          {/* get in touch */}
          <div className="w-full mb-6 md:mb-0 gap-2">
            <h1 className="font-bold mb-6 text-xl md:text-2xl">Get in touch</h1>
            <div className="space-y-2">
              <h1 className="hover:tracking-[5px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-home me-2"></i> 123 street, New York, USA
              </h1>
              <h1 className="hover:tracking-[5px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-home me-2"></i> anjalimishra0330@example.com
              </h1>
              <h1 className="hover:tracking-[5px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-home me-2"></i> +012 345 6790
              </h1>
              <h1 className="hover:tracking-[5px] transition-all duration-700 ease-out hover:text-[#52b788]">
                <i className="fas fa-home me-2"></i> 993 493 4483
              </h1>
            </div>

            <div className="mt-[8px] flex">
              
              <a href="#" className="btn rounded-full p-1 me-2 bg-[#6b7f60] hover:bg-white">
                <FaFacebookF className="h-[20px] w-[20px]  hover:text-[#52b788]" />
              </a>
              <a href="#" className="btn rounded-full p-1 me-2 bg-[#6b7f60] hover:bg-white">
                <FaInstagram className="h-[20px] w-[20px]  hover:text-[#52b788]" />
              </a>
              <a href="#" className="btn rounded-full p-1 me-2 bg-[#6b7f60] hover:bg-white">
                <FaLinkedinIn className="h-[20px] w-[20px]  hover:text-[#52b788]" />
              </a>
              <a href="#" className="btn rounded-full p-1 me-2 bg-[#6b7f60] hover:bg-white">
                <FaTwitter className="fw-normal h-[20px] w-[20px] hover:text-[#52b788]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className='w-full' />
        <div className=" flex items-center justify-center text-center text-sm text-white py-4">
          <div>
            © Nest Mart, <span className="text-gray-400">All right reserved.</span>
          </div>
          <div className="ml-5">
            <span className="text-gray-400">Designed by </span>Anjali Mishra.
          </div>
        </div>
    </footer>
  );
};

export default Footer;