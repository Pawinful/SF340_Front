import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const user = {
    name: 'Catherine Yingmun',
    id: 6510742262,
    department: 'Soft-en',
    email: 'catherine@gmail.com',
}

const UserNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="w-full h-[8vh] bg-[#8A2A2B] flex items-center justify-between text-white px-6 sticky top-0 shadow-md">
            <Link to="/" className="text-2xl font-semibold">
                Meeting Room
            </Link>

            <div className="hidden md:flex items-center space-x-8 text-lg ml-auto">
                <Link to="/" className="hover:bg-white hover:text-[#8A2A2B] px-3 py-1 rounded-sm font-semibold">
                    Home
                </Link>
                <Link to="/mybooking" className="hover:bg-white hover:text-[#8A2A2B] px-3 py-1 rounded-sm font-semibold">
                    My Booking
                </Link>

                <div className="relative">
                    <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none cursor-pointer">
                        <img className="size-8 rounded-full" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png" alt="User Avatar" />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 text-gray-700">
                            <div className="flex flex-col gap-1.5 px-4 py-2 border-b">
                                <p className="font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-500">{user.id}</p>
                                <p className="text-sm text-gray-500">{user.department}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <IoMdMail className="text-lg" />
                                    <span>{user.email}</span>
                                </div>
                            </div>
                            <Link to ="/login">
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold">Sign Out</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Responsive */}
            <button className="md:hidden text-2xl text-white" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            {menuOpen && (
                <div className="absolute top-[8vh] left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden shadow-md">
                    <a href="#" className="text-lg text-[#8A2A2B] hover:text-gray-600">Home</a>
                    <a href="#" className="text-lg text-[#8A2A2B] hover:text-gray-600">My Booking</a>
                </div>
            )}
        </div>
    )
}

export default UserNav;