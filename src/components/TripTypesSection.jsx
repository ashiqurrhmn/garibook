import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TripTypesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-trip-up",
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

  const tripTypes = [
    {
      title: "Airport Rentals",
      image: "/Assets/Airport Rental_Webp.webp",
    },
    {
      title: "Family Trips",
      image: "/Assets/family_trips.webp",
    },
    {
      title: "Long Tours",
      image: "/Assets/Group Tour_Webp.webp",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Header */}
        <h2 className="gsap-trip-up text-[#222222] text-[32px] md:text-[40px] lg:text-[44px] mb-12 tracking-tight leading-[1.2]">
          <span className="font-extrabold">More Than Miles —</span>
          <br />
          <span className="font-extrabold">We Bring People Together</span>
        </h2>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tripTypes.map((trip, index) => (
            <div
              key={index}
              className="gsap-trip-up relative w-full aspect-square rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-transparent"></div>

              <h3 className="absolute top-6 left-6 lg:top-8 lg:left-8 text-white text-[24px] md:text-[28px] font-bold z-10 tracking-wide">
                {trip.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TripTypesSection;
