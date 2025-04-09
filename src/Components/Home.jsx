import React from 'react'
import Logo from "../assets/Images/Bbp_Logo.jpg";
import Hr1 from "../assets/Images/Hr1.jpg";
import Hr2 from "../assets/Images/Hr2.jpg";
import Hr3 from "../assets/Images/Hr3.jpg";
import Hr4 from "../assets/Images/Hr4.jpg";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10">
    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-3xl font-bold font-serif">
        Grace <span className='text-[#FFD700]'>every room </span> with flawless <span hair and a className='text-[#FFD700]'>lasting glow.</span>
      </h1>
      <p className="text-lg font-serif">
        Your hair, your vibe, our passion. <br />
        Let’s create a look that’s all you <br />
        beautiful, bold, and unforgettable.
      </p>
      <button className="relative group bg-[#91288C] text-white px-6 py-2 rounded-lg font-serif text-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out 
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-500 before:to-purple-600 before:opacity-0 before:transition-opacity before:duration-300
             hover:before:opacity-30 hover:scale-105 shadow-md hover:shadow-xl">
  <span className="relative z-10">Book Now!</span>
</button>

    </div>
  
    {/* Right Side: Image Grid */}
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mt-8 md:mt-0 bg-gradient-to-r from-[#D58DB7] to-[#FFEC8B] p-4 rounded-lg shadow-lg cursor-pointer">
  {/* Inline CSS for keyframes */}
  <style jsx>{`
    @keyframes rotateOnce {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}</style>

  {/* Images with animation */}
  <img
    src={Hr1}
    alt="Logo"
    className="w-full h-48 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    style={{ animation: "rotateOnce 5s ease-out 5s forwards" }} // 5s delay, 5s rotate time
  />
  <img
    src={Hr2}
    alt="Logo"
    className="w-full h-48 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    style={{ animation: "rotateOnce 5s ease-out 5s forwards" }} // 5s delay, 5s rotate time
  />
  <img
    src={Hr3}
    alt="Logo"
    className="w-full h-48 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    style={{ animation: "rotateOnce 5s ease-out 5s forwards" }} // 5s delay, 5s rotate time
  />
  <img
    src={Hr4}
    alt="Logo"
    className="w-full h-48 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
    style={{ animation: "rotateOnce 5s ease-out 5s forwards" }} // 5s delay, 5s rotate time
  />
</div>





  </div>
  
  )
}

export default Home