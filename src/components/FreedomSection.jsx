import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCar, FaMoneyBillWave } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

const FreedomSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-freedom-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
      className="w-full bg-[#050505] pt-10 pb-24 lg:pt-12 lg:pb-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Header */}
        <h2 className="gsap-freedom-up text-white text-[32px] md:text-[42px] lg:text-[46px] font-bold mb-10 tracking-tight">
          Freedom in Every Journey
        </h2>

        {/* Hero Image */}
        <div className="gsap-freedom-up w-full mb-16 rounded-[24px] overflow-hidden drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <img
            src="/Assets/garibook_freedom.webp"
            alt="Freedom in Every Journey"
            className="w-full h-[120px] md:h-[200px] lg:h-[420px] object-cover"
          />
        </div>

        {/* Features Grid */}
        <div className="w-full grid grid-cols-1 lg:px-50 md:grid-cols-3 gap-10 md:gap-12">
          {/* Feature 1 */}
          <div className="gsap-freedom-up flex flex-col items-start text-left">
            <div className="w-[52px] h-[52px] rounded-full bg-[#1252FF] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(18,82,255,0.4)]">
              <FaCar className="text-white text-xl" />
            </div>
            <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2 tracking-wide">
              Choose the Car
            </h3>
            <p className="text-[#9D9D9D] text-[14px] md:text-[15px] leading-relaxed">
              Pick what suits your comfort.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="gsap-freedom-up flex flex-col items-start text-left">
            <div className="w-[52px] h-[52px] rounded-full bg-[#FDD300] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(253,211,0,0.4)]">
              <GiSteeringWheel className="text-black text-[28px]" />
            </div>
            <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2 tracking-wide">
              Choose the Driver
            </h3>
            <p className="text-[#9D9D9D] text-[14px] md:text-[15px] leading-relaxed">
              Based on ratings and reviews.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="gsap-freedom-up flex flex-col items-start text-left">
            <div className="w-[52px] h-[52px] rounded-full bg-[#1DA12B] flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(29,161,43,0.4)]">
              <FaMoneyBillWave className="text-white text-xl" />
            </div>
            <h3 className="text-white text-[18px] md:text-[20px] font-bold mb-2 tracking-wide">
              Choose the Fare
            </h3>
            <p className="text-[#9D9D9D] text-[14px] md:text-[15px] leading-relaxed">
              Select the bid that fits your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreedomSection;
