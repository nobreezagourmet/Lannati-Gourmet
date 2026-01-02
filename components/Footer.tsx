import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-bordeaux pt-40 pb-20 z-20">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30 -translate-y-[99%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[130px] text-bordeaux fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-title-standard text-4xl text-gold mb-6">Lannati Gourmet</h4>
            <p className="font-body-standard text-cream/40 text-sm tracking-widest font-bold">Amor em cada detalhe</p>
          </div>

          <div className="space-y-6">
             <h5 className="font-title-standard text-xl text-gold mb-8">Encomendas</h5>
             <div className="flex items-center justify-center md:justify-start gap-4 text-cream/70 font-body-standard">
               <Phone size={20} className="text-gold" />
               <span className="text-lg">(11) 99999-9999</span>
             </div>
             <div className="flex items-center justify-center md:justify-start gap-4 text-cream/70 font-body-standard">
               <Mail size={20} className="text-gold" />
               <span className="text-lg">contato@lannati.com.br</span>
             </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <h5 className="font-title-standard text-xl text-gold mb-8">Siga-nos</h5>
             <div className="flex gap-6">
                <a href="#" className="p-4 bg-gold/10 text-gold rounded-full hover:bg-gold hover:text-bordeaux transition-all"><Instagram size={28} /></a>
                <a href="#" className="p-4 bg-gold/10 text-gold rounded-full hover:bg-gold hover:text-bordeaux transition-all"><Facebook size={28} /></a>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center">
          <p className="font-body-standard text-cream/20 text-xs lowercase">
            &copy; {new Date().getFullYear()} lannati gourmet. todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;