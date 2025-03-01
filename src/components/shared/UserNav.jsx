import React, { useState } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';

const UserNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[8vh] bg-[#8A2A2B] flex items-center justify-between text-white px-6 sticky top-0 shadow-md">
      <span className="text-2xl font-semibold">Meeting Room</span>
      
      <div className="hidden md:flex items-center space-x-6 text-lg ml-auto">
        <a href="#" className="hover:text-[#FED141] font-semibold">Home</a>
        <a href="#" className="hover:text-[#FED141] font-semibold">My Booking</a>
        <FiUser className="text-2xl cursor-pointer hover:text-[#FED141]" />
      </div>

      {/* Responsive */}
      <button className="md:hidden text-2xl text-[#8A2A2B]" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <FiX /> : <FiMenu />} </button>

      {menuOpen && (
        <div className="absolute top-[8vh] left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden shadow-md">
          <a href="#" className="text-lg text-[#8A2A2B] hover:text-gray-600">Home</a>
          <a href="#" className="text-lg text-[#8A2A2B] hover:text-gray-600">My Booking</a>
          <FiUser className="text-3xl text-[#8A2A2B] cursor-pointer hover:text-gray-600" />
        </div>
      )}
    </nav>
  )
}

export default UserNav;