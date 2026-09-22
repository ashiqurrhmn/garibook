import React, { useEffect, useRef } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CitySkyline = () => (
  <svg width="1200" height="200" viewBox="0 0 1200 200" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 h-full w-auto">
    {/* Ground line */}
    <line x1="0" y1="199" x2="1200" y2="199" />

    {/* === Building Group 1 === */}
    {/* Short building with peaked roof */}
    <rect x="5" y="130" width="35" height="70" />
    <path d="M5 130 L22 110 L40 130" />
    <rect x="12" y="145" width="8" height="10" />
    <rect x="25" y="145" width="8" height="10" />
    <rect x="12" y="165" width="8" height="10" />
    <rect x="25" y="165" width="8" height="10" />

    {/* Tall narrow tower with antenna */}
    <rect x="50" y="40" width="30" height="160" />
    <line x1="65" y1="20" x2="65" y2="40" strokeWidth="2" />
    <line x1="58" y1="30" x2="72" y2="30" />
    <rect x="55" y="55" width="9" height="12" />
    <rect x="66" y="55" width="9" height="12" />
    <rect x="55" y="80" width="9" height="12" />
    <rect x="66" y="80" width="9" height="12" />
    <rect x="55" y="105" width="9" height="12" />
    <rect x="66" y="105" width="9" height="12" />
    <rect x="55" y="130" width="9" height="12" />
    <rect x="66" y="130" width="9" height="12" />
    <rect x="55" y="155" width="9" height="12" />
    <rect x="66" y="155" width="9" height="12" />

    {/* Tree */}
    <line x1="95" y1="170" x2="95" y2="199" strokeWidth="2" />
    <circle cx="95" cy="162" r="12" />

    {/* Mid building with grid windows */}
    <rect x="115" y="80" width="50" height="120" />
    <rect x="122" y="90" width="10" height="14" />
    <rect x="138" y="90" width="10" height="14" />
    <rect x="148" y="90" width="10" height="14" />
    <rect x="122" y="115" width="10" height="14" />
    <rect x="138" y="115" width="10" height="14" />
    <rect x="148" y="115" width="10" height="14" />
    <rect x="122" y="140" width="10" height="14" />
    <rect x="138" y="140" width="10" height="14" />
    <rect x="148" y="140" width="10" height="14" />
    <rect x="122" y="165" width="10" height="14" />
    <rect x="138" y="165" width="10" height="14" />
    <rect x="148" y="165" width="10" height="14" />

    {/* Skyscraper with spire */}
    <rect x="175" y="25" width="45" height="175" />
    <path d="M197 5 L197 25" strokeWidth="2.5" />
    <path d="M185 15 L197 5 L210 15" />
    <line x1="175" y1="50" x2="220" y2="50" />
    <line x1="175" y1="75" x2="220" y2="75" />
    <line x1="175" y1="100" x2="220" y2="100" />
    <line x1="175" y1="125" x2="220" y2="125" />
    <line x1="175" y1="150" x2="220" y2="150" />
    <line x1="175" y1="175" x2="220" y2="175" />
    <line x1="190" y1="25" x2="190" y2="199" />
    <line x1="205" y1="25" x2="205" y2="199" />

    {/* Short squat building */}
    <rect x="230" y="140" width="40" height="60" />
    <rect x="237" y="150" width="12" height="16" />
    <rect x="253" y="150" width="12" height="16" />
    <rect x="237" y="175" width="12" height="16" />
    <rect x="253" y="175" width="12" height="16" />

    {/* Street lamp */}
    <line x1="280" y1="165" x2="280" y2="199" strokeWidth="2" />
    <circle cx="280" cy="160" r="5" />

    {/* === Building Group 2 === */}
    {/* Wide office building */}
    <rect x="295" y="70" width="55" height="130" />
    <rect x="302" y="82" width="8" height="10" />
    <rect x="314" y="82" width="8" height="10" />
    <rect x="326" y="82" width="8" height="10" />
    <rect x="338" y="82" width="8" height="10" />
    <rect x="302" y="105" width="8" height="10" />
    <rect x="314" y="105" width="8" height="10" />
    <rect x="326" y="105" width="8" height="10" />
    <rect x="338" y="105" width="8" height="10" />
    <rect x="302" y="128" width="8" height="10" />
    <rect x="314" y="128" width="8" height="10" />
    <rect x="326" y="128" width="8" height="10" />
    <rect x="338" y="128" width="8" height="10" />
    <rect x="302" y="151" width="8" height="10" />
    <rect x="314" y="151" width="8" height="10" />
    <rect x="326" y="151" width="8" height="10" />
    <rect x="338" y="151" width="8" height="10" />
    <rect x="315" y="175" width="20" height="25" />

    {/* Tall residential tower */}
    <rect x="360" y="35" width="35" height="165" />
    <path d="M360 35 L377 15 L395 35" />
    <rect x="366" y="48" width="8" height="10" />
    <rect x="380" y="48" width="8" height="10" />
    <rect x="366" y="70" width="8" height="10" />
    <rect x="380" y="70" width="8" height="10" />
    <rect x="366" y="92" width="8" height="10" />
    <rect x="380" y="92" width="8" height="10" />
    <rect x="366" y="114" width="8" height="10" />
    <rect x="380" y="114" width="8" height="10" />
    <rect x="366" y="136" width="8" height="10" />
    <rect x="380" y="136" width="8" height="10" />
    <rect x="366" y="158" width="8" height="10" />
    <rect x="380" y="158" width="8" height="10" />
    <rect x="366" y="180" width="8" height="10" />
    <rect x="380" y="180" width="8" height="10" />

    {/* Tree */}
    <line x1="408" y1="172" x2="408" y2="199" strokeWidth="2" />
    <circle cx="408" cy="164" r="10" />

    {/* === Building Group 3 === */}
    {/* Dome building */}
    <rect x="425" y="120" width="45" height="80" />
    <path d="M425 120 Q447 85 470 120" />
    <rect x="432" y="135" width="10" height="12" />
    <rect x="452" y="135" width="10" height="12" />
    <rect x="432" y="160" width="10" height="12" />
    <rect x="452" y="160" width="10" height="12" />
    <rect x="441" y="180" width="14" height="20" />

    {/* Twin towers */}
    <rect x="480" y="50" width="25" height="150" />
    <rect x="510" y="65" width="25" height="135" />
    <line x1="492" y1="30" x2="492" y2="50" strokeWidth="2" />
    <rect x="485" y="60" width="7" height="9" />
    <rect x="493" y="60" width="7" height="9" />
    <rect x="485" y="80" width="7" height="9" />
    <rect x="493" y="80" width="7" height="9" />
    <rect x="485" y="100" width="7" height="9" />
    <rect x="493" y="100" width="7" height="9" />
    <rect x="485" y="120" width="7" height="9" />
    <rect x="493" y="120" width="7" height="9" />
    <rect x="485" y="140" width="7" height="9" />
    <rect x="493" y="140" width="7" height="9" />
    <rect x="485" y="160" width="7" height="9" />
    <rect x="493" y="160" width="7" height="9" />
    <rect x="515" y="78" width="7" height="9" />
    <rect x="523" y="78" width="7" height="9" />
    <rect x="515" y="98" width="7" height="9" />
    <rect x="523" y="98" width="7" height="9" />
    <rect x="515" y="118" width="7" height="9" />
    <rect x="523" y="118" width="7" height="9" />
    <rect x="515" y="138" width="7" height="9" />
    <rect x="523" y="138" width="7" height="9" />
    <rect x="515" y="158" width="7" height="9" />
    <rect x="523" y="158" width="7" height="9" />

    {/* Street lamp */}
    <line x1="548" y1="168" x2="548" y2="199" strokeWidth="2" />
    <circle cx="548" cy="163" r="5" />

    {/* === Building Group 4 === */}
    {/* Short building with flat roof */}
    <rect x="560" y="145" width="35" height="55" />
    <rect x="567" y="155" width="9" height="11" />
    <rect x="580" y="155" width="9" height="11" />
    <rect x="567" y="175" width="9" height="11" />
    <rect x="580" y="175" width="9" height="11" />

    {/* Clock tower building */}
    <rect x="605" y="55" width="40" height="145" />
    <path d="M605 55 L625 30 L645 55" />
    <circle cx="625" cy="72" r="12" />
    <line x1="625" y1="72" x2="625" y2="63" strokeWidth="1.5" />
    <line x1="625" y1="72" x2="632" y2="72" strokeWidth="1.5" />
    <rect x="612" y="95" width="9" height="12" />
    <rect x="628" y="95" width="9" height="12" />
    <rect x="612" y="120" width="9" height="12" />
    <rect x="628" y="120" width="9" height="12" />
    <rect x="612" y="145" width="9" height="12" />
    <rect x="628" y="145" width="9" height="12" />
    <rect x="618" y="170" width="14" height="30" />

    {/* Wide low building */}
    <rect x="655" y="130" width="55" height="70" />
    <rect x="662" y="142" width="10" height="12" />
    <rect x="678" y="142" width="10" height="12" />
    <rect x="694" y="142" width="10" height="12" />
    <rect x="662" y="165" width="10" height="12" />
    <rect x="678" y="165" width="10" height="12" />
    <rect x="694" y="165" width="10" height="12" />

    {/* Tree */}
    <line x1="725" y1="174" x2="725" y2="199" strokeWidth="2" />
    <circle cx="725" cy="166" r="10" />

    {/* === Building Group 5 === */}
    {/* Modern glass tower */}
    <rect x="745" y="30" width="50" height="170" />
    <line x1="745" y1="55" x2="795" y2="55" />
    <line x1="745" y1="80" x2="795" y2="80" />
    <line x1="745" y1="105" x2="795" y2="105" />
    <line x1="745" y1="130" x2="795" y2="130" />
    <line x1="745" y1="155" x2="795" y2="155" />
    <line x1="745" y1="180" x2="795" y2="180" />
    <line x1="758" y1="30" x2="758" y2="199" />
    <line x1="770" y1="30" x2="770" y2="199" />
    <line x1="782" y1="30" x2="782" y2="199" />
    <line x1="770" y1="12" x2="770" y2="30" strokeWidth="2.5" />
    <line x1="760" y1="20" x2="780" y2="20" />

    {/* Medium building */}
    <rect x="805" y="95" width="40" height="105" />
    <rect x="812" y="108" width="10" height="12" />
    <rect x="828" y="108" width="10" height="12" />
    <rect x="812" y="132" width="10" height="12" />
    <rect x="828" y="132" width="10" height="12" />
    <rect x="812" y="156" width="10" height="12" />
    <rect x="828" y="156" width="10" height="12" />
    <rect x="818" y="178" width="16" height="22" />

    {/* Street lamp */}
    <line x1="858" y1="168" x2="858" y2="199" strokeWidth="2" />
    <circle cx="858" cy="163" r="5" />

    {/* === Building Group 6 === */}
    {/* Small house */}
    <rect x="875" y="155" width="30" height="45" />
    <path d="M875 155 L890 138 L905 155" />
    <rect x="883" y="170" width="12" height="16" />

    {/* Tall stepped building */}
    <rect x="920" y="60" width="35" height="140" />
    <rect x="925" y="45" width="25" height="15" />
    <line x1="937" y1="30" x2="937" y2="45" strokeWidth="2" />
    <rect x="926" y="72" width="8" height="10" />
    <rect x="940" y="72" width="8" height="10" />
    <rect x="926" y="95" width="8" height="10" />
    <rect x="940" y="95" width="8" height="10" />
    <rect x="926" y="118" width="8" height="10" />
    <rect x="940" y="118" width="8" height="10" />
    <rect x="926" y="141" width="8" height="10" />
    <rect x="940" y="141" width="8" height="10" />
    <rect x="926" y="164" width="8" height="10" />
    <rect x="940" y="164" width="8" height="10" />

    {/* Wide building with arches */}
    <rect x="965" y="110" width="50" height="90" />
    <path d="M972 199 Q980 185 988 199" />
    <path d="M995 199 Q1003 185 1011 199" />
    <rect x="972" y="122" width="10" height="12" />
    <rect x="988" y="122" width="10" height="12" />
    <rect x="1003" y="122" width="10" height="12" />
    <rect x="972" y="148" width="10" height="12" />
    <rect x="988" y="148" width="10" height="12" />
    <rect x="1003" y="148" width="10" height="12" />

    {/* Tree */}
    <line x1="1030" y1="175" x2="1030" y2="199" strokeWidth="2" />
    <circle cx="1030" cy="167" r="10" />

    {/* End building tall */}
    <rect x="1050" y="50" width="40" height="150" />
    <path d="M1050 50 L1070 25 L1090 50" />
    <rect x="1057" y="65" width="9" height="11" />
    <rect x="1074" y="65" width="9" height="11" />
    <rect x="1057" y="88" width="9" height="11" />
    <rect x="1074" y="88" width="9" height="11" />
    <rect x="1057" y="111" width="9" height="11" />
    <rect x="1074" y="111" width="9" height="11" />
    <rect x="1057" y="134" width="9" height="11" />
    <rect x="1074" y="134" width="9" height="11" />
    <rect x="1057" y="157" width="9" height="11" />
    <rect x="1074" y="157" width="9" height="11" />

    {/* End short building */}
    <rect x="1100" y="140" width="40" height="60" />
    <rect x="1107" y="152" width="10" height="12" />
    <rect x="1123" y="152" width="10" height="12" />
    <rect x="1107" y="175" width="10" height="12" />
    <rect x="1123" y="175" width="10" height="12" />

    {/* Final small building */}
    <rect x="1150" y="120" width="40" height="80" />
    <rect x="1157" y="132" width="10" height="12" />
    <rect x="1173" y="132" width="10" height="12" />
    <rect x="1157" y="156" width="10" height="12" />
    <rect x="1173" y="156" width="10" height="12" />
    <rect x="1157" y="180" width="10" height="12" />
    <rect x="1173" y="180" width="10" height="12" />
  </svg>
);

const BlueSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef([]);
  const carRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // Stats Stagger Animation
      gsap.fromTo(statsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );

      // Car Drive-in Animation
      gsap.fromTo(carRef.current,
        { x: -400, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.8,
          ease: 'back.out(1)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#1252FF] relative overflow-hidden -mt-[1px]" style={{ minHeight: '650px' }}>
      
      {/* Title */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 md:pt-24 lg:pt-32">
        <h2 ref={titleRef} className="text-white text-[28px] md:text-[42px] lg:text-[62px] font-bold leading-[1.25] max-w-[1200px]">
          From Everyday Rides to Meaningful Journeys
        </h2>
      </div>

      {/* Stats */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 mt-12 md:mt-24 lg:mt-32">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center lg:justify-end gap-8 md:gap-12 lg:gap-16 items-start md:items-end">
          <div ref={el => statsRef.current[0] = el}>
            <p className="text-[#FDD300] text-[28px] md:text-[32px] lg:text-[42px] font-bold">300,000+</p>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium mt-1">Trip Requests</p>
          </div>
          <div ref={el => statsRef.current[1] = el}>
            <p className="text-[#FDD300] text-[28px] md:text-[32px] lg:text-[42px] font-bold">850,000+</p>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium mt-1">Total Customers</p>
          </div>
          <div ref={el => statsRef.current[2] = el}>
            <p className="text-[#FDD300] text-[28px] md:text-[32px] lg:text-[42px] font-bold">35,000+</p>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium mt-1">Active Drivers</p>
          </div>
          <div ref={el => statsRef.current[3] = el}>
            <p className="text-[#FDD300] text-[28px] md:text-[32px] lg:text-[42px] font-bold">64</p>
            <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-medium mt-1">District Covered</p>
          </div>
        </div>
      </div>

      {/* City Skyline Scrolling Animation */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-[50px] md:h-[70px] lg:h-[90px] z-10 pointer-events-none text-white opacity-50">
        <div className="flex w-max h-full animate-scroll-left">
          {/* Half 1 */}
          <CitySkyline />
          <CitySkyline />
          <CitySkyline />
          <CitySkyline />
          <CitySkyline />
          {/* Half 2 (Clone) */}
          <CitySkyline />
          <CitySkyline />
          <CitySkyline />
          <CitySkyline />
          <CitySkyline />
        </div>
      </div>

      {/* Car Image */}
      <img 
        ref={carRef}
        src="/Assets/car_moving.gif" 
        alt="Garibook Car" 
        className="absolute bottom-0 left-4 md:left-10 lg:left-20 w-[100px] md:w-[120px] lg:w-[180px] z-20 object-contain drop-shadow-2xl"
      />

    </section>
  );
};

export default BlueSection;
