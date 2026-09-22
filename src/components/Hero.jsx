import React, { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import gsap from 'gsap';
import BookingCard from './BookingCard';

const titles = [
  "Your Journey Starts Here ...",
  "Assurance of Effortless Travel",
  "Luxury Trips with Comfort"
];

const Hero = () => {
  const heroRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightContentRef = useRef(null);
  const cardRef = useRef(null);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 30 : 70; // Slightly faster typing for smoothness
    const currentTitle = titles[titleIndex];

    if (!isDeleting && displayText === currentTitle) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500); // Pause at end of sentence
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentTitle.substring(0, displayText.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text entrance animation
      gsap.fromTo(leftTextRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      gsap.fromTo(rightContentRef.current, 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.4 }
      );

      // 2. Card slide up animation
      gsap.fromTo(cardRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'back.out(1.2)', delay: 0.6 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full flex flex-col">
      {/* Top White Section */}
      <div className="w-full bg-white pt-8 md:pt-20 pb-65  px-4 sm:px-6 lg:px-8 z-0">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Hero Text */}
          <div ref={leftTextRef} className="w-full lg:w-1/2 mb-6 md:mb-0 lg:mb-0">
            <h1 className="text-[36px] md:text-[46px] lg:text-[64px] font-bold text-gray-900 leading-[1.1] tracking-tight min-h-[90px] md:min-h-[80px] lg:min-h-[150px]">
              {displayText}
              <span className="text-garibook-blue font-light animate-pulse ml-1">|</span>
            </h1>
          </div>

          {/* Right Hero Content */}
          <div ref={rightContentRef} className="w-full lg:w-1/2">
            <p className="text-[#9D9D9D] font-medium text-[16px] md:text-[24px] lg:text-[28px] mb-4 md:mb-6 lg:mb-4 leading-snug">
              Choose your city, pick your car and enjoy the journey with Garibook's best drivers.
            </p>
            <a href="#" className="bg-[#FDD300] hover:bg-[#e5be00] text-black font-semibold text-[18px] md:text-[20px] py-[16px] md:py-[20px] lg:py-[25px] px-[24px] md:px-[30px] rounded-[16px] flex items-center justify-between w-[270px] md:w-[290px] mt-6 lg:mt-6 transition-colors shadow-sm">
              <span>Download App</span>
              <FiArrowRight size={26} className="md:w-[26px] md:h-[26px] w-[22px] h-[22px]" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Blue Section with Overlapping Card */}
      <div className="w-full bg-garibook-blue relative z-10 pt-10 pb-20">
        <div ref={cardRef} className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-55">
          <BookingCard />
        </div>
        
        {/* Decorative elements or bottom spacer if needed */}
        <div className="h-32 md:h-64"></div>
      </div>
    </section>
  );
};

export default Hero;
