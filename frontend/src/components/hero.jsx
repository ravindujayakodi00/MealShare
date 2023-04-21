import React from 'react';
import { Hero01} from "../assets";

function HeroSection() {
  return (
    <div className="flex flex-wrap justify-between items-center px-6 md:px-12 pt-16 pb-9 text-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-green-700 text-6xl md:text-8xl">Join</span> the fight against hunger
        </h1>
        <p className="text-lg md:text-xl mb-8">Make a difference in the fight against food waste and hunger. Register, donate and connect with local organizations through our streamlined food donation webapp. Join us today.</p>
        <div className="flex justify-center pt-5">
          <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium mr-4">Donation</button>
          <button className="border border-white text-white py-2 px-4 rounded-lg font-medium hover:bg-white hover:text-blue-500">Request</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={Hero01} alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default HeroSection;

