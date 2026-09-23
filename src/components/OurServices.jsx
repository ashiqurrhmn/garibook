import React, { useState, useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
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

const tabContent = {
  "Garibook Business": {
    header: "Modern Car Rentals\nfor Business",
    text: "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.",
    img: "/Assets/busines.jpeg",
  },
  "Garibook Club": {
    header: "Turn Your Car into\nEarnings with Garibook\nClub",
    text: "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.",
    img: "/Assets/garibook_club.jpg",
  },
  "VMS": {
    header: "Vehicle Management\nSystem - VMS",
    text: "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.",
    img: "/Assets/Frame_1000001473.png",
  },
};

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("Rides");
  const [activeCard, setActiveCard] = useState("intercity");
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const subHeaderRef = useRef(null);
  const cardsRef = useRef(null);
  const otherTextRef = useRef(null);
  const otherImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation (slide up)
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

      // Tabs Animation (slide up)
      gsap.fromTo(
        tabsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 30%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (activeTab === "Rides") {
        // Sub Header Animation
        if (subHeaderRef.current) {
          gsap.fromTo(
            subHeaderRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 20%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }

        // Cards Animation
        if (cardsRef.current) {
          gsap.fromTo(
            gsap.utils.toArray(".gsap-service-card"),
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
        }
      } else {
        // Other Content Text Animation
        if (otherTextRef.current) {
          gsap.fromTo(
            otherTextRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 20%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }

        // Other Content Image Animation
        if (otherImageRef.current) {
          gsap.fromTo(
            otherImageRef.current,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 10%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-8 pb-20 lg:pt-12 lg:pb-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <h2 ref={headerRef} className="text-[#1F1F1F] text-[32px] md:text-[42px] lg:text-[48px] font-bold mb-8">
          Our Services
        </h2>

        {/* Tabs */}
        <div ref={tabsRef} className="flex gap-3 md:gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
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

        {/* Tab Content Area */}
        <div className="min-h-[400px]">
          {activeTab === "Rides" ? (
            <>
              {/* Sub Header */}
              <h3 ref={subHeaderRef} className="text-[#1F1F1F] text-[32px] md:text-[42px] lg:text-[48px] font-bold mb-12 leading-[1.2]">
                Every Ride
                <br />
                One Platform
              </h3>

              {/* Cards Grid */}
              <div
                ref={cardsRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                onMouseLeave={() => setHoveredCard(null)}
              >
                {services.map((svc) => {
                  const isActive = (hoveredCard || activeCard) === svc.id;
                  return (
                    <div
                      key={svc.id}
                      onClick={() => setActiveCard(svc.id)}
                      onMouseEnter={() => setHoveredCard(svc.id)}
                      className={`gsap-service-card relative h-[340px] rounded-2xl p-8 cursor-pointer transition-colors transition-shadow duration-500 overflow-hidden ${
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
            </>
          ) : (
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 animate-in fade-in duration-500">
              {/* Left Content */}
              <div ref={otherTextRef} className="w-full md:w-[45%] lg:w-[50%] flex flex-col items-start text-left">
                <h3 className="text-[#1F1F1F] text-[32px] md:text-[38px] lg:text-[44px] font-bold mb-6 leading-[1.2] whitespace-pre-line tracking-tight">
                  {tabContent[activeTab].header}
                </h3>
                <p className="text-[#666666] text-[16px] md:text-[22px] font-medium leading-relaxed mb-8 max-w-[500px]">
                  {tabContent[activeTab].text}
                </p>
                <button className="bg-[#1252FF] hover:bg-blue-700 text-white font-medium text-[18px] md:text-[20px] py-[16px] md:py-[20px] lg:py-[25px] px-6 rounded-[16px] flex items-center justify-center md:justify-between w-[220px] md:w-[240px] lg:w-[276px] transition-colors shadow-md">
                  <span>Learn More</span>
                  <FiArrowRight size={26} className="ml-2 md:ml-0 md:w-[26px] md:h-[26px] w-[22px] h-[22px]" />
                </button>
              </div>
              
              {/* Right Image */}
              <div ref={otherImageRef} className="w-full md:w-[55%] lg:w-[50%]">
                <img
                  src={tabContent[activeTab].img}
                  alt={activeTab}
                  className="w-full h-auto rounded-[16px] md:rounded-[20px] object-cover drop-shadow-sm"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
