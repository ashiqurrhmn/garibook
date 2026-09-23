import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Passengers = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-passengers-up',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const passengerReviews = [
    {
      id: 1,
      image: '/Assets/Passengers/hqdefault.jpg',
      name: 'Atif Haider',
      title: 'Banker',
    },
    {
      id: 2,
      image: '/Assets/Passengers/hqdefault (1).jpg',
      name: 'Mohammad Habibur Rahman',
      title: 'Banker',
    },
    {
      id: 3,
      image: '/Assets/Passengers/hqdefault (2).jpg',
      name: 'Sadia Afrin',
      title: 'Service Holder',
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    let intervalId;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        scrollRight();
      }, 3000); // Auto swipe every 3 seconds
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (!intervalId) startAutoScroll();
      } else {
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }
    };

    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#F1F6FF] py-16 md:py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        
        {/* Header Section */}
        <div className="gsap-passengers-up flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-12">
          <div className="max-w-[800px]">
            <h2 className="text-[#222222] text-[32px] md:text-[40px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-4">
              Our Passengers Speak For Us
            </h2>
            <p className="text-[#666666] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6 lg:mb-0 lg:pr-10">
              Our journey was seamless and enjoyable from start to finish. The booking process was straightforward, and the staff were incredibly attentive, ensuring we felt comfortable throughout the trip.
            </p>
          </div>
          
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 md:w-18 md:h-18 rounded-full border border-gray-200 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 active:scale-90 shadow-sm"
              aria-label="Previous Review"
            >
              <FiArrowLeft size={24} strokeWidth={2.5} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 md:w-18 md:h-18 rounded-full border border-gray-200 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-all duration-300 active:scale-90 shadow-sm"
              aria-label="Next Review"
            >
              <FiArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Reviews Cards Slider */}
        <div 
          ref={scrollContainerRef}
          className="w-full flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {passengerReviews.map((review) => (
            <div 
              key={review.id} 
              className="gsap-passengers-up flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)] snap-start flex flex-col cursor-pointer group"
            >
              {/* Image with Play Button */}
              <div className="w-full aspect-[16/9] rounded-[16px] overflow-hidden mb-5 bg-gray-200 relative">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 pl-[4px]">
                    <FaPlay className="text-white text-[16px] md:text-[20px]" />
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <h3 className="text-[#222222] text-[18px] md:text-[20px] font-bold mb-1">
                {review.name}
              </h3>
              <p className="text-[#888888] font-medium text-[14px] md:text-[15px]">
                {review.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Passengers;
