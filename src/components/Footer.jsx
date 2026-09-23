import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Top Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-6">garibook</h3>
            <ul className="flex flex-col gap-4 text-[#D1D5DB] text-[14px] md:text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garibook Map</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-6">Services</h3>
            <ul className="flex flex-col gap-4 text-[#D1D5DB] text-[14px] md:text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">Intercity Rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Airport Pick and Drop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hourly Rental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vehicle Management System (VMS)</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-6">Become Our Partner</h3>
            <ul className="flex flex-col gap-4 text-[#D1D5DB] text-[14px] md:text-[15px]">
              <li><a href="#" className="hover:text-white transition-colors">Become a Smart Driver</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Become a member of Garibook Club</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garibook Business for Corporate Travel</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold text-[16px] md:text-[18px] mb-6">Contacts</h3>
            <ul className="flex flex-col gap-4 text-[#D1D5DB] text-[14px] md:text-[15px]">
              <li><a href="mailto:support@garibook.com" className="hover:text-white transition-colors">support@garibook.com</a></li>
              <li className="leading-relaxed">Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road-144, Gulshan, Dhaka-1212</li>
              <li><a href="tel:+8809678112233" className="hover:text-white transition-colors">+88 09 678 11 22 33</a></li>
            </ul>
          </div>
          
        </div>

        {/* Middle Section: Download & Partners */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-8 mb-16 lg:mb-20">
          
          {/* Download App */}
          <div>
            <h2 className="text-white text-[24px] md:text-[32px] font-bold leading-tight mb-6">
              Download Our<br />
              Garibook Mobile App
            </h2>
            <button className="bg-[#1252FF] hover:bg-blue-700 text-white font-semibold text-[16px] py-[14px] px-[32px] rounded-[12px] flex items-center gap-3 transition-colors">
              Download App
              <FiArrowRight size={20} />
            </button>
          </div>

          {/* Partners */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
            {/* A Product By */}
            <div>
              <h3 className="text-white font-bold text-[18px] md:text-[22px] mb-6">A Product By</h3>
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src="/Assets/footer/nrb_no_background.svg" alt="NRB Solution Ltd" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-[15px] md:text-[16px] mb-1">NRB Solution Ltd.</p>
                  <a href="#" className="text-[#FFD700] hover:text-[#e6c200] text-[14px] md:text-[15px] font-medium flex items-center gap-1 transition-colors">
                    Visit Website <FiArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Powered By */}
            <div>
              <h3 className="text-white font-bold text-[18px] md:text-[22px] mb-6">Powered By</h3>
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] bg-white rounded-md flex items-center justify-center p-2">
                  <img src="/Assets/footer/link3-two.png" alt="Link 3 Technologies" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-white text-[15px] md:text-[16px] mb-1">Link 3 Technologies</p>
                  <a href="#" className="text-[#FFD700] hover:text-[#e6c200] text-[14px] md:text-[15px] font-medium flex items-center gap-1 transition-colors">
                    Visit Website <FiArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 pb-8 pt-6 border-t border-gray-800/50">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <img src="/Assets/footer/Garibook_Logo.svg" alt="Garibook" className="h-8 md:h-10 object-contain" />
            <div className="flex items-center gap-6 text-[#D1D5DB] text-[14px] md:text-[15px]">
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>

          <div className="text-center text-[#D1D5DB] text-[13px] md:text-[14px] leading-relaxed">
            Trade license number:<br />
            TRAD/DNCC/013806/2024
          </div>

          <div className="text-[#D1D5DB] text-[14px] md:text-[15px]">
            © 2026 Garibook.com
          </div>
          
        </div>
      </div>

      {/* SSL Payment Strip */}
      <div className="w-full bg-white flex justify-center border-t border-gray-200 mt-8">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
          <img src="/Assets/footer/ssl.png" alt="Payment Methods" className="w-full h-auto object-contain" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
