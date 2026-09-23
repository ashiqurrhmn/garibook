import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const SmartDriver = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-smart-up",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Header Section */}
        <div className="gsap-smart-up mb-8 md:mb-10">
          <h2 className="text-[#222222] text-[32px] md:text-[40px] lg:text-[44px] font-bold tracking-tight">
            Be a Smart Driver
          </h2>
        </div>

        {/* Banner Section */}
        <div className="gsap-smart-up relative w-full bg-[#EFC30C] rounded-[24px] overflow-hidden flex flex-col md:flex-row justify-between min-h-[550px] sm:min-h-[600px] md:min-h-[500px] lg:min-h-[450px] xl:min-h-[500px]">
          {/* Left Content */}
          <div className="w-full md:w-[60%] lg:w-[50%] p-8 pt-10 md:p-12 lg:p-16 xl:pl-20 z-10 flex flex-col items-start text-left">
            <h3 className="text-[#1252FF] text-[36px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-8 md:mb-6 lg:mb-12">
              0% Commission
              <br />
              100% Freedom
            </h3>

            <button className="bg-[#1252FF] hover:bg-blue-700 text-white font-semibold text-[16px] md:text-[18px] py-[16px] md:py-[20px] lg:py-[25px] px-[24px] md:px-[30px] rounded-[16px] flex items-center justify-between w-full max-w-[270px] md:max-w-[290px] transition-colors shadow-sm">
              <span className="text-left leading-tight">
                Download Smart
                <br />
                Driver App
              </span>
              <FiArrowRight size={24} className="flex-shrink-0" />
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[45%] lg:w-[40%] flex justify-center md:justify-end md:absolute right-0 bottom-0 lg:right-10 xl:right-20 mt-auto md:mt-0 pt-8 md:pt-0">
            <img
              src="/Assets/no_commission_app_screen.png"
              alt="Smart Driver"
              className="w-[85%] sm:w-[65%] md:w-full object-contain object-bottom max-h-[400px] md:max-h-[450px] lg:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartDriver;
