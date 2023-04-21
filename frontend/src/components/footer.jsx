import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto md:flex md:flex-wrap md:justify-between md:items-center ">
        <div className="w-full md:w-2/4 mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
          <form>
            <div className="flex flex-wrap items-center">
              <input type="email" className="rounded-l-lg py-2 px-4 w-full md:w-auto mb-2 md:mb-0" placeholder="Enter your email" />
              <button type="submit" className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-r-lg font-medium md:ml-2">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul>
            <li><a href="#" className="hover:text-green-700">Home</a></li>
            <li><a href="#" className="hover:text-green-700">Our Story</a></li>
            <li><a href="#" className="hover:text-green-700">Contact</a></li>
            <li><a href="#" className="hover:text-green-700">Explore</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Follow us</h3>
          <ul className="flex">
            <li className='pr-5'><a href="#" className="text-white hover:text-green-700"><FaFacebookF size={24} /></a></li>
            <li className='pr-5' ><a href="#" className="text-white hover:text-green-700"><FaTwitter size={24} /></a></li>
            <li className='pr-5'><a href="#" className="text-white hover:text-green-700"><FaInstagram size={24} /></a></li>
          </ul>
        </div>
        {/* <div className="w-full md:w-1/4 text-center md:text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} MealShare</p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
