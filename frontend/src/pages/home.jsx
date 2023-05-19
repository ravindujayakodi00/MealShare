import React from 'react';
import Navbar from "../components/navBar";
import Hero from "../components/hero";
import Stats from "../components/stats";
import Service from "../components/service";
import Footer from "../components/footer";


function HomePage() {
  return (
    <div className="bg-gradient-to-r from-green-500 via-green-300 to-yellow-300 w-full overflow-hidden p-5">
    <Navbar />
    <Hero />
    <Stats />
    <Service />
    <Footer />
  </div>
    
  );
}

export default HomePage;





