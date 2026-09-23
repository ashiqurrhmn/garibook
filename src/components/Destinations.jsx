import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Destinations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gsap-dest-up',
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

  const destinations = [
    {
      id: 1,
      image: '/Assets/Destination/1.webp',
      date: 'September 15, 2026',
      title: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা',
      description: 'রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা'
    },
    {
      id: 2,
      image: '/Assets/Destination/2.webp',
      date: 'September 20, 2026',
      title: 'সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
      description: 'সিলেটের দর্শনীয় স্থান'
    },
    {
      id: 3,
      image: '/Assets/Destination/3.webp',
      date: 'September 20, 2026',
      title: 'নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা',
      description: 'নওগাঁর দর্শনীয় স্থান সমূহ'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        
        {/* Header Section */}
        <div className="gsap-dest-up flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-12 gap-2">
          <div className="max-w-[900px]">
            <h2 className="text-[#222222] text-[32px] md:text-[40px] lg:text-[44px] font-bold tracking-tight leading-[1.1] mb-3">
              Beyond Destinations
            </h2>
            <p className="text-[#666666] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
              Discover travel hacks, guides, and inspirations for your next intercity trip with Garibook.
            </p>
          </div>
          
          <a 
            href="#" 
            className="text-[#1252FF] font-bold text-[15px] md:text-[16px] flex items-center gap-1 hover:underline whitespace-nowrap pb-1 shrink-0"
          >
            Show All Blogs
            <FiArrowRight size={18} strokeWidth={3} />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="gsap-dest-up flex flex-col group cursor-pointer">
              {/* Image */}
              <div className="w-full aspect-[16/10] md:aspect-[3/2] rounded-[16px] overflow-hidden mb-5 bg-gray-100">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Date */}
              <p className="text-[#888888] text-[13px] md:text-[14px] mb-2 font-medium">
                {dest.date}
              </p>
              
              {/* Title */}
              <h3 className="text-[#222222] text-[18px] md:text-[20px] font-bold leading-[1.4] mb-2 group-hover:text-[#1252FF] transition-colors">
                {dest.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#888888] text-[14px] md:text-[15px] leading-relaxed line-clamp-2">
                {dest.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Destinations;
