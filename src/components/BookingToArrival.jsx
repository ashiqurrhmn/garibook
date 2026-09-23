import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const BookingToArrival = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Grid Items Animation
      gsap.fromTo(
        gsap.utils.toArray(".gsap-booking-card"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#050505] py-16 md:py-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-white text-[32px] md:text-[40px] lg:text-[44px] font-bold tracking-tight leading-[1.2] mb-6 md:mb-0">
            From Booking to Arrival It's
            <br className="hidden md:block" /> All in Your Hands
          </h2>
          <button className="bg-[#1252FF] hover:bg-blue-700 text-white font-semibold text-[18px] md:text-[20px] py-[16px] md:py-[20px] lg:py-[25px] px-[24px] md:px-[30px] rounded-[16px] flex items-center justify-between w-[270px] md:w-[290px] transition-colors shadow-sm">
            <span>Download App</span>
            <FiArrowRight
              size={26}
              className="md:w-[26px] md:h-[26px] w-[22px] h-[22px]"
            />
          </button>
        </div>

        {/* Grid Layout */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Top Row - Explore (Col Span 2 on both mobile and md) */}
          <div className="gsap-booking-card col-span-2 rounded-[24px] overflow-hidden bg-[#1E293B]">
            <img
              src="/Assets/explore.jpeg"
              alt="Explore Various Ride Services"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Row - Freedom (Col Span 1) */}
          <div className="gsap-booking-card col-span-1 rounded-[24px] overflow-hidden bg-[#F8FAFC]">
            <img
              src="/Assets/freedom.jpg"
              alt="Freedom"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - Safe Travel */}
          <div className="gsap-booking-card col-span-1 rounded-[24px] overflow-hidden bg-[#F8FAFC]">
            <img
              src="/Assets/safe_travel.svg"
              alt="Safe travel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - Preferred Car */}
          <div className="gsap-booking-card col-span-1 rounded-[24px] overflow-hidden bg-[#F8FAFC]">
            <img
              src="/Assets/prefarred_car.jpg"
              alt="Choose Your Preferred Car"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Row - Smooth Experience */}
          <div className="gsap-booking-card col-span-1 rounded-[24px] overflow-hidden bg-[#FDE047]">
            <img
              src="/Assets/smooth.jpg"
              alt="Smooth Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingToArrival;
