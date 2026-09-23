import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "intercity",
    title: "Intercity Car Rental",
    desc: "Travel between cities with comfort and confidence.",
    img: "/Assets/intercity_car_rental.svg",
  },
  {
    id: "rideshare",
    title: "Ride share",
    desc: "Go anywhere in the city, quickly and easily.",
    img: "/Assets/rideshare.svg",
  },
  {
    id: "airport",
    title: "Airport Rental",
    desc: "Whether you're flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    img: "/Assets/airport_rental.svg",
  },
  {
    id: "hourly",
    title: "Hourly Rental",
    desc: "Rent a car by the hour, tailored to your needs.",
    img: "/Assets/hourly_rental.svg",
  },
];

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("Rides");
  const [activeCard, setActiveCard] = useState("intercity");
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-fade-up",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
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
      className="w-full bg-white pt-8 pb-20 lg:pt-12 lg:pb-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <h2 className="gsap-fade-up text-[#1F1F1F] text-[32px] md:text-[42px] lg:text-[48px] font-bold mb-8">
          Our Services
        </h2>

        {/* Tabs */}
        <div className="gsap-fade-up flex gap-3 md:gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide">
          {["Rides", "Garibook Business", "Garibook Club", "VMS"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 md:px-8 py-3 rounded-lg font-semibold text-[16px] md:text-[18px] whitespace-nowrap transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-[#1252FF] text-white shadow-md"
                  : "bg-[#F2F2F2] text-[#1F1F1F] hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sub Header */}
        <h3 className="gsap-fade-up text-[#1F1F1F] text-[32px] md:text-[42px] lg:text-[48px] font-bold mb-12 leading-[1.2]">
          Every Ride
          <br />
          One Platform
        </h3>

        {/* Cards Grid */}
        <div
          className="gsap-fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          onMouseLeave={() => setHoveredCard(null)}
        >
          {services.map((svc) => {
            const isActive = (hoveredCard || activeCard) === svc.id;
            return (
              <div
                key={svc.id}
                onClick={() => setActiveCard(svc.id)}
                onMouseEnter={() => setHoveredCard(svc.id)}
                className={`relative h-[340px] rounded-2xl p-8 cursor-pointer transition-all duration-500 overflow-hidden ${
                  isActive ? "bg-[#1252FF] shadow-xl" : "bg-[#F8F9FA]"
                }`}
              >
                {/* Active Cutout */}
                <div
                  className={`absolute left-0 top-12 w-[100px] h-[70px] bg-white rounded-r-[24px] z-0 transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                ></div>

                {/* Card Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon Area */}
                  <div className="h-[120px] relative flex items-center">
                    <div
                      className={`w-[90px] md:w-[110px] flex items-center justify-center transition-all duration-300 ${
                        isActive ? "-ml-2" : ""
                      }`}
                    >
                      <img
                        src={svc.img}
                        alt={svc.title}
                        className="w-full h-auto object-contain drop-shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-auto mb-4">
                    <h4
                      className={`text-[20px] font-bold mb-3 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-[#1F1F1F]"
                      }`}
                    >
                      {svc.title}
                    </h4>
                    <p
                      className={`text-[16px] font-medium leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-blue-50" : "text-[#8A8A8A]"
                      }`}
                    >
                      {svc.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
