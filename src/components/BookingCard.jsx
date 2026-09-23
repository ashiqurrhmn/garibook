import React, { useState } from 'react';
import { FaCar, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const BookingCard = () => {
  const [activeTab, setActiveTab] = useState('Car Rental');
  const [tripType, setTripType] = useState('One Way');
  const [airportTripType, setAirportTripType] = useState('From Airport');

  return (
    <div className="w-full relative z-10 hero-card">
      {/* Tabs */}
      <div className="relative z-10 inline-flex gap-2 md:gap-3 bg-white w-fit p-4 md:p-[28px] rounded-t-[20px] shadow-[0_-12px_24px_-12px_rgba(0,0,0,0.15)]">
        <button 
          onClick={() => setActiveTab('Car Rental')}
          className={`px-4 py-2 md:px-8 md:py-4 font-semibold text-[16px] md:text-[20px] transition-all rounded-xl border ${
            activeTab === 'Car Rental' ? 'bg-[#111] text-white border-[#111]' : 'bg-transparent text-gray-700 border-transparent hover:border-gray-300'
          }`}
        >
          Car Rental
        </button>
        <button 
          onClick={() => setActiveTab('Airport Rental')}
          className={`px-4 py-2 md:px-8 md:py-4 font-semibold text-[16px] md:text-[20px] transition-all rounded-xl border ${
            activeTab === 'Airport Rental' ? 'bg-[#111] text-white border-[#111]' : 'bg-transparent text-gray-700 border-transparent hover:border-gray-300'
          }`}
        >
          Airport Rental
        </button>
      </div>

      {/* Main Card Content */}
      <div className="relative z-0 bg-white rounded-b-xl rounded-tr-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 md:p-8">
        
        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-y-8 lg:gap-y-0 mb-8">
          
          {/* Choose a Car */}
          <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 pr-0 md:pr-6 flex flex-col justify-center">
            <label className="flex items-center text-[16px] md:text-[20px] font-semibold text-gray-900 mb-2">
              <FaCar className="text-gray-700 mr-2" /> Choose a Car <span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex items-center justify-between text-gray-400 text-[14px] md:text-[16px] mt-1 cursor-pointer hover:text-gray-600 transition-colors">
              <span>Select Car Type</span>
              <IoIosArrowDown />
            </div>
            <p className="text-[#F15A59] text-[12px] md:text-sm mt-2 font-medium hidden">Please select a car type.</p>
          </div>

          {/* Pickup Location / Airport */}
          <div className="border-b md:border-b-0 lg:border-r border-gray-200 py-4 md:py-0 px-0 md:pl-6 lg:px-6 flex flex-col justify-center">
            {activeTab === 'Airport Rental' && airportTripType === 'From Airport' ? (
              <>
                <label className="flex items-center text-[16px] md:text-[20px] font-semibold text-gray-900 mb-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 ring-4 ring-yellow-100 mr-2 inline-block"></span> Pickup Airport <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex items-center justify-between text-gray-400 text-[14px] md:text-[16px] mt-1 cursor-pointer hover:text-gray-600 transition-colors">
                  <span>Select Airport</span>
                  <IoIosArrowDown />
                </div>
                <p className="text-[#F15A59] text-[12px] md:text-sm mt-2 font-medium hidden">Please select an airport.</p>
              </>
            ) : (
              <>
                <label className="flex items-center text-[16px] md:text-[20px] font-semibold text-gray-900 mb-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 ring-4 ring-yellow-100 mr-2 inline-block"></span> Pickup Location <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter Pickup Location" 
                  className="w-full text-[14px] md:text-[16px] outline-none text-gray-700 placeholder-gray-400 mt-1 bg-transparent"
                />
                <p className="text-[#F15A59] text-[12px] md:text-sm mt-2 font-medium hidden">Please enter pickup location.</p>
              </>
            )}
          </div>

          {/* Drop-off Location / Airport */}
          <div className="border-b md:border-b-0 md:border-r border-gray-200 py-4 md:py-0 px-0 md:pr-6 lg:px-6 flex flex-col justify-center">
            {activeTab === 'Airport Rental' && airportTripType === 'From Home' ? (
              <>
                <label className="flex items-center text-[16px] md:text-[20px] font-semibold text-gray-900 mb-2">
                  <FaMapMarkerAlt className="text-[#1252FF] mr-2" /> Drop-off Airport <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex items-center justify-between text-gray-400 text-[14px] md:text-[16px] mt-1 cursor-pointer hover:text-gray-600 transition-colors">
                  <span>Select Airport</span>
                  <IoIosArrowDown />
                </div>
                <p className="text-[#F15A59] text-[12px] md:text-sm mt-2 font-medium hidden">Please select an airport.</p>
              </>
            ) : (
              <>
                <label className="flex items-center text-[16px] md:text-[20px] font-semibold text-gray-900 mb-2">
                  <FaMapMarkerAlt className="text-[#1252FF] mr-2" /> Drop-off Location <span className="text-red-500 ml-1">*</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Enter Drop-off Location" 
                  className="w-full text-[14px] md:text-[16px] outline-none text-gray-700 placeholder-gray-400 mt-1 bg-transparent"
                />
                <p className="text-[#F15A59] text-[12px] md:text-sm mt-2 font-medium hidden">Please enter drop-off location.</p>
              </>
            )}
          </div>

          {/* Pickup Date & Time */}
          <div className="pt-4 md:pt-0 pl-0 md:pl-6 flex flex-col justify-center">
            <label className="flex items-center text-[16px] md:text-[20px] font-semibold text-gray-900 mb-2">
              <FaRegCalendarAlt className="text-gray-700 mr-2" /> Pickup Date & Time <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              placeholder="MM/DD/YYYY 00:00 PM" 
              className="w-full text-[14px] md:text-[16px] outline-none text-gray-700 placeholder-gray-400 mt-1 bg-transparent"
            />
            <p className="text-[#F15A59] text-[12px] md:text-sm mt-2 font-medium hidden">Please select date & time.</p>
          </div>
          
        </div>

        {/* Bottom Row: Trip Types & Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          
          {/* Trip Types Radio */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-6 md:mb-0">
            {activeTab === 'Car Rental' ? (
              ['One Way', 'Round Way', 'Hourly'].map((type) => (
                <label 
                  key={type}
                  onClick={() => setTripType(type)}
                  className={`flex items-center cursor-pointer transition-all rounded-[10px] px-5 py-2.5 ${
                    tripType === type ? 'bg-[#F4F5FD]' : 'bg-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-[22px] h-[22px] rounded-full mr-3 flex-shrink-0 transition-all ${
                    tripType === type ? 'border-[5px] border-[#0E52FF] bg-white' : 'bg-[#EAEAEA]'
                  }`}>
                  </div>
                  <span className="text-[18px] font-semibold text-[#121212]">{type}</span>
                </label>
              ))
            ) : (
              ['From Airport', 'From Home'].map((type) => (
                <label 
                  key={type}
                  onClick={() => setAirportTripType(type)}
                  className={`flex items-center cursor-pointer transition-all rounded-[10px] px-5 py-2.5 ${
                    airportTripType === type ? 'bg-[#F4F5FD]' : 'bg-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-[22px] h-[22px] rounded-full mr-3 flex-shrink-0 transition-all ${
                    airportTripType === type ? 'border-[5px] border-[#0E52FF] bg-white' : 'bg-[#EAEAEA]'
                  }`}>
                  </div>
                  <span className="text-[18px] font-semibold text-[#121212]">{type}</span>
                </label>
              ))
            )}
          </div>

          {/* Continue Button */}
          <button className="bg-[#1252FF] hover:bg-blue-700 text-white font-medium text-[18px] md:text-[20px] py-[16px] md:py-[20px] lg:py-[25px] px-6 rounded-[16px] flex items-center justify-center md:justify-between w-full md:w-[240px] lg:w-[276px] transition-colors">
            <span>Continue</span>
            <FiArrowRight size={26} className="ml-2 md:ml-0 md:w-[26px] md:h-[26px] w-[22px] h-[22px]" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookingCard;
