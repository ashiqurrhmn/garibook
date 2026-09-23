import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const TopNews = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
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

      // News Cards Animation
      gsap.fromTo(
        gsap.utils.toArray(".gsap-news-card"),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const newsItems = [
    {
      id: 1,
      image: "/Assets/Top-news/prothomAlo.webp",
      date: "December 05, 2024",
      title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
      description:
        "বাংলাদেশে ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্যে একটি অনন্য উদ্যোগ নিয়ে এসেছে 'গাড়িবুক'। কোনো কমিশন ছাড়াই ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া গাড়িবুক দেশের প্রথম এবং একমাত্র অ্যাপ।",
      logo: "/Assets/Top-news/prothomAlo-logo.png",
      link: "#",
    },
    {
      id: 2,
      image: "/Assets/Top-news/dhakaTribune.jpeg",
      date: "December 04, 2024",
      title: 'Digital App to offer "Chander Gari"',
      description:
        "For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.",
      logo: "/Assets/Top-news/dhakaTribune-logo.png",
      link: "#",
    },
    {
      id: 3,
      image: "/Assets/Top-news/dhakaTribune.jpeg",
      date: "December 04, 2024",
      title: "বাংলাদেশে প্রথমবার 'চান্দের গাড়ি' গাড়িবুক অ্যাপে",
      description:
        "বাংলাদেশে পর্যটকদের জন্য জনপ্রিয় যানবাহন 'চান্দের গাড়ি' এবার যুক্ত হলো অনলাইন অ্যাপ ভিত্তিক প্ল্যাটফর্মে। গাড়িবুক দেশের প্রথম অ্যাপ হিসেবে পর্যটকদের জন্য এই বিশেষ যানটি বুকিং সুবিধা নিয়ে এলো।",
      logo: "/Assets/Top-news/kalerkantha-logo.png",
      link: "#",
    },
    {
      id: 4,
      image: "/Assets/Top-news/kalerkantha2.png",
      date: "January 29, 2025",
      title:
        "গাড়িবুক ও সুধীর চুক্তি - স্মার্ট চালক ও পরিবারের জন্য উন্নত স্বাস্থ্যসেবা",
      description:
        "দেশের শীর্ষস্থানীয় অ্যাপভিত্তিক প্ল্যাটফর্ম গাড়িবুক স্মার্ট চালক ও তাদের পরিবারের উন্নত স্বাস্থ্যসেবা নিশ্চিত করতে ডিজিটাল স্বাস্থ্যসেবা প্ল্যাটফর্ম 'সুধী'-এর সঙ্গে একটি গুরুত্বপূর্ণ চুক্তি স্বাক্ষর করেছে। এই উদ্যোগের মাধ্যমে চালকরা ও তাদের পরিবার সহজেই স্বাস্থ্যসে...",
      logo: "/Assets/Top-news/kalerkantha-logo.png",
      link: "#",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-6 md:py-12 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-12">
          <h2 className="text-[#222222] text-[32px] md:text-[40px] lg:text-[48px] font-bold tracking-tight leading-[1.1] mb-6 lg:mb-0">
            We Featured by Top news
            <br className="hidden lg:block" /> Platforms
          </h2>

          <div className="flex gap-4">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-colors duration-300 active:scale-90 shadow-sm"
              aria-label="Previous News"
            >
              <FiArrowLeft size={24} strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-200 flex items-center justify-center text-black bg-white hover:bg-black hover:text-white hover:border-black transition-colors duration-300 active:scale-90 shadow-sm"
              aria-label="Next News"
            >
              <FiArrowRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* News Cards Slider */}
        <div
          ref={scrollContainerRef}
          className="w-full flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="gsap-news-card flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21px)] snap-start flex flex-col"
            >
              {/* Image */}
              <div className="w-full aspect-[16/10] md:aspect-[3/2] rounded-[16px] overflow-hidden mb-5 bg-gray-100">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Date */}
              <p className="text-[#666666] text-[13px] md:text-[14px] mb-3">
                {news.date}
              </p>

              {/* Title */}
              <h3 className="text-[#222222] text-[20px] md:text-[22px] lg:text-[24px] font-bold leading-[1.3] mb-3 line-clamp-2 h-[60px] md:h-[65px] lg:h-[70px]">
                {news.title}
              </h3>

              {/* Description */}
              <p className="text-[#666666] text-[14px] md:text-[15px] leading-relaxed mb-6 line-clamp-3 h-[65px] md:h-[70px]">
                {news.description}
              </p>

              {/* Footer */}
              <div className="mt-auto flex items-center justify-between pt-2">
                <div className="h-6 md:h-12 max-w-[150px] flex items-center">
                  <img
                    src={news.logo}
                    alt="Publisher Logo"
                    className="h-full object-contain object-left"
                  />
                </div>
                <a
                  href={news.link}
                  className="text-[#1252FF] font-semibold text-[14px] md:text-[15px] flex items-center gap-1 hover:underline whitespace-nowrap"
                >
                  Read Article
                  <FiArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopNews;
