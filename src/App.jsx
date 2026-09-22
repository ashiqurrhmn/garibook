import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { MdChatBubble } from 'react-icons/md'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-garibook-blue selection:text-white relative">
      <Navbar />
      <Hero />
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#0E52FF] text-white w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(14,82,255,0.4)] hover:bg-blue-700 hover:scale-105 transition-all z-50 flex items-center justify-center">
        <MdChatBubble size={26} />
      </button>
    </div>
  )
}

export default App
