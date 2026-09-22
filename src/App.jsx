import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BlueSection from './components/BlueSection'
import { MdChatBubble } from 'react-icons/md'

const DraggableChat = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <button 
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px) scale(${isDragging || isHovered ? 1.05 : 1})`, 
        touchAction: 'none' 
      }}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#0E52FF] text-white w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(14,82,255,0.4)] transition-colors duration-200 z-50 flex items-center justify-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab hover:bg-blue-700'}`}
      aria-label="Chat Support"
    >
      <MdChatBubble size={26} />
    </button>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-garibook-blue selection:text-white relative">
      <Navbar />
      <Hero />
      <BlueSection />
      <DraggableChat />
    </div>
  )
}

export default App
