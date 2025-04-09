import React, { useState } from 'react';
import Logo from "../assets/Images/Bbp_logo.jpg";
import { Menu, X , Instagram } from 'lucide-react';  

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" sticky top-0 z-50 shadow-md bg-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between h-20">

        {/* Logo */}
        <div className="group relative w-fit">
       <img 
        src={Logo} 
        alt="Logo" 
        className="w-16 h-16 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-lg" 
  />
</div>


        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-x-10 font-serif text-lg cursor-pointer items-center">
  <div className="relative hover:text-[#94BD0A] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#94BD0A] hover:after:w-full after:transition-all after:duration-300">
    Home
  </div>
  <div className="relative hover:text-[#94BD0A] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#94BD0A] hover:after:w-full after:transition-all after:duration-300">
    About
  </div>
  <div className="relative hover:text-[#94BD0A] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#94BD0A] hover:after:w-full after:transition-all after:duration-300">
    Services
  </div>
  <div className="relative hover:text-[#94BD0A] transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#94BD0A] hover:after:w-full after:transition-all after:duration-300">
    Gallery
  </div>
  <div className="text-[#E1306C] text-3xl hover:scale-110 transition-transform duration-300">
    <Instagram />
  </div>
</div>



        {/* Desktop Buttons */}
        <div className='hidden sm:flex items-center gap-x-6'>
      <button className="relative group bg-[#91288C] text-white px-6 py-2 rounded-lg font-serif text-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out 
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-600 before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-30 hover:scale-105 shadow-md hover:shadow-xl">
  <span className="relative z-10">Book Now!</span>
</button>

<span className="relative font-serif text-base cursor-pointer transition-colors duration-300 hover:text-[#94BD0A]
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#94BD0A] 
  hover:after:w-full after:transition-all after:duration-300">
  Login
</span>

        </div>

        {/* Hamburger Icon */}
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}

      {isOpen && (
  <div className="sm:hidden mt-4 space-y-4 font-serif text-lg px-6 py-4 bg-white shadow-lg rounded-xl">
    {/* Nav Links */}
    <div className="hover:text-[#94BD0A] transition-colors duration-300 cursor-pointer">Home</div>
    <div className="hover:text-[#94BD0A] transition-colors duration-300 cursor-pointer">About</div>
    <div className="hover:text-[#94BD0A] transition-colors duration-300 cursor-pointer">Services</div>
    <div className="hover:text-[#94BD0A] transition-colors duration-300 cursor-pointer">Gallery</div>

    {/* Instagram Icon */}
    <div className="text-[#E1306C] text-3xl hover:drop-shadow-[0_0_8px_#E1306C] transition duration-300 ease-in-out">
  <Instagram />
</div>

    {/* Book Now Button - full width */}
    <button className="w-full relative group bg-[#91288C] text-white px-6 py-3 rounded-lg font-serif text-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out 
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-600 before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-30 hover:scale-105 shadow-md hover:shadow-xl">
      <span className="relative z-10">Book Now!</span>
    </button>

    {/* Login */}
    <span className="block text-center font-serif text-base cursor-pointer hover:text-[#94BD0A] transition duration-300">
      Login
    </span>
  </div>
)}
    </nav>
  );
}

export default Navbar;
