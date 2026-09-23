import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const DownloadApp = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-download-up',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 md:py-12 overflow-visible">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        
        <div className="gsap-download-up relative w-full bg-[#1252FF] rounded-[24px] flex flex-col md:flex-row items-center md:items-stretch justify-between px-6 sm:px-8 md:px-12 lg:px-24 pt-10 sm:pt-12 md:pt-12 pb-0 min-h-[400px] lg:min-h-[450px] overflow-hidden lg:overflow-visible">
          
          {/* Left Content */}
          <div className="w-full md:w-[55%] lg:w-1/2 flex flex-col justify-center z-10 text-left pb-12 md:pb-16 lg:pb-20">
            <h2 className="text-white text-[32px] sm:text-[36px] md:text-[38px] lg:text-[48px] font-bold leading-[1.1] mb-4 mt-0 md:mt-0 lg:mt-0">
              Download<br />
              Garibook Mobile App
            </h2>
            <p className="text-white/90 font-semibold text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6 sm:mb-8 md:mb-8 max-w-[450px]">
              Download our Customer, Smart Driver and Enterprise App
            </p>
            
            <button className="bg-[#FDD300] hover:bg-[#e5be00] text-black font-semibold text-[18px] sm:text-[18px] md:text-[18px] lg:text-[20px] py-[16px] md:py-[18px] lg:py-[25px] px-[24px] md:px-[26px] lg:px-[30px] rounded-[16px] flex items-center justify-between w-full max-w-[270px] sm:max-w-[270px] md:max-w-[260px] lg:max-w-[290px] transition-colors shadow-sm self-start">
              <span>Download App</span>
              <FiArrowRight size={26} className="md:w-[24px] md:h-[24px] lg:w-[26px] lg:h-[26px] w-[22px] h-[22px]" />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[45%] lg:w-1/2 relative flex justify-center mt-12 md:mt-0 h-[300px] sm:h-[350px] md:h-auto z-10">
            <img 
              src="/Assets/phone.png" 
              alt="Garibook App on Phone" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-6 md:left-auto md:right-0 lg:right-auto md:top-auto md:-bottom-0 lg:-bottom-[0%] w-[360px] sm:w-[280px] md:w-[360px] lg:w-[450px] xl:w-[500px] object-contain drop-shadow-2xl"
              style={{ zIndex: 10 }}
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default DownloadApp;
