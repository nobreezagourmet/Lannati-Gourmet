
import React, { useEffect, useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled 
          ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3 md:py-4' 
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Mobile Menu Icon */}
        <button className={`p-2 hover:opacity-70 transition-opacity ${isScrolled ? 'text-bordeaux' : 'text-gold'}`}>
           <Menu size={28} strokeWidth={2} />
        </button>

        {/* LOGO SVG NO HEADER */}
        <div className="text-center group cursor-pointer flex flex-col items-center">
          <svg width="140" height="45" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-colors duration-500 ${isScrolled ? 'text-bordeaux' : 'text-gold'}`}>
              <circle cx="30" cy="40" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
              <path d="M22 28V52H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="70" y="42" fill="currentColor" className="font-brand font-medium tracking-[0.15em] uppercase text-[22px]">Lannati</text>
              <text x="70" y="58" fill="currentColor" fillOpacity="0.6" className="font-brand text-[12px] tracking-[0.4em] uppercase">Gourmet</text>
          </svg>
        </div>

        {/* Cart Icon */}
        <button className={`p-2 hover:opacity-70 transition-opacity relative ${isScrolled ? 'text-bordeaux' : 'text-gold'}`}>
           <ShoppingBag size={26} strokeWidth={2} />
           <span className="absolute top-1.5 right-1 w-2.5 h-2.5 bg-gold rounded-full ring-2 ring-transparent"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
