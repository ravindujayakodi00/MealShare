import React from 'react';
import { Service0} from "../assets";


function Service() {
  return (
    <div className="flex flex-wrap justify-between items-center px-6 md:px-12 pt-16 pb-9 text-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-green-700 text-6xl md:text-8xl">Why</span>  we,
        </h1>
        <p className="text-lg md:text-xl mb-8">"Why We" is the ideal donation platform for those who want to make a real impact on causes that matter. Our user-friendly interface, transparency, and partnerships with reputable nonprofit organizations make donating quick, easy, and secure. Choose "Why We" to ensure your donations are making a meaningful difference.</p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={Service0} alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Service;

