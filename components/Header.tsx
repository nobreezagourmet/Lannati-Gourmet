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

        {/* LOGO PNG NO HEADER */}
        <div className="text-center group cursor-pointer flex flex-col items-center">
          <img 
            src="https://i.postimg.cc/hjwW10gL/logo-novo-agora.png" 
            alt="Lannati Gourmet Logo" 
            className={`h-12 md:h-16 w-auto transition-all duration-500 ${isScrolled ? 'brightness-50' : 'brightness-100'}`}
          />
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