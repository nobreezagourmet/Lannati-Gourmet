import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-bordeaux pt-32 pb-12 z-20">
      
      {/* ONDA DO RODAPÉ: GEOMETRIA CORRIGIDA 100% WIDTH */}
      <div 
        className="absolute top-[1px] left-0 w-full overflow-hidden leading-none z-50 -translate-y-[99%] pointer-events-none"
      >
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[101%] h-[100px] md:h-[180px] text-bordeaux fill-current"
          style={{ left: '-0.5%' }}
        >
          <path 
            d="M0,0V60.53C0,60.53,156.45,130.45,340,90.53C523.55,50.61,640,0,820,30.53C1000,61.06,1200,120.53,1200,120.53V0H0Z" 
            transform="scale(1, -1) translate(0, -120)"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 mb-20 items-start">
          
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="group cursor-default">
               <img 
                 src="https://i.postimg.cc/hjwW10gL/logo-novo-agora.png" 
                 alt="Lannati Gourmet Logo" 
                 className="w-32 h-auto"
               />
            </div>
            <p className="font-body-standard text-cream/40 text-[10px] tracking-[0.3em] uppercase font-bold">Amor em cada detalhe</p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/lannatigourmet/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gold/5 text-gold/60 rounded-full hover:bg-gold hover:text-bordeaux hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 bg-gold/5 text-gold/60 rounded-full hover:bg-gold hover:text-bordeaux hover:scale-110 transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12">
            <h5 className="font-title-standard text-gold text-lg uppercase tracking-widest mb-8 border-b border-gold/10 pb-2 w-full max-w-[120px] lg:max-w-none">Conheça</h5>
            <ul className="space-y-4 font-body-standard text-cream/50 text-sm md:text-base cursor-default select-none pointer-events-none">
              <li>Nossos Diferenciais</li>
              <li>Catálogo Gourmet</li>
              <li>Nossa História</li>
              <li>Comentários</li>
            </ul>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12">
            <h5 className="font-title-standard text-gold text-lg uppercase tracking-widest mb-8 border-b border-gold/10 pb-2 w-full max-w-[150px] lg:max-w-none">Atendimento</h5>
            <div className="space-y-5 text-cream/60 font-body-standard text-sm md:text-base">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone size={16} className="text-gold/50 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail size={16} className="text-gold/50 flex-shrink-0" />
                <span className="lowercase">contato@lannati.com.br</span>
              </div>
              <div className="flex items-start justify-center lg:justify-start gap-3 max-w-[220px]">
                <MapPin size={16} className="text-gold/50 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Rua das Delícias, 123 - Jardins, São Paulo/SP</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-12">
            <h5 className="font-title-standard text-gold text-lg uppercase tracking-widest mb-8 border-b border-gold/10 pb-2 w-full max-w-[120px] lg:max-w-none">Segurança</h5>
            <div className="flex flex-col gap-4">
              <div className="w-40 h-16 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-all duration-300 cursor-default px-4 shadow-lg shadow-black/5">
                 <div className="flex items-center gap-3 text-gold/40 group-hover:text-gold/60">
                   <ShieldCheck size={28} />
                   <div className="flex flex-col items-start leading-tight">
                     <span className="text-[9px] uppercase font-bold tracking-tighter">Site 100%</span>
                     <span className="text-xs font-title font-bold text-gold/60 uppercase">Seguro</span>
                   </div>
                 </div>
              </div>
              <div className="w-40 h-16 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group hover:bg-white/10 transition-all duration-300 cursor-default px-4 shadow-lg shadow-black/5">
                 <div className="flex items-center gap-3 text-gold/40 group-hover:text-gold/60">
                   <CheckCircle2 size={28} />
                   <div className="flex flex-col items-start leading-tight">
                     <span className="text-[9px] uppercase font-bold tracking-tighter text-left">Qualidade</span>
                     <span className="text-xs font-title font-bold text-gold/60 uppercase text-left">Certificada</span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body-standard text-cream/20 text-[10px] md:text-xs tracking-[0.2em] lowercase text-center md:text-left">
            &copy; {new Date().getFullYear()} lannati gourmet ateliê de doces. todos os direitos reservados.
          </p>
          <div className="font-body-standard text-cream/30 text-[10px] md:text-xs tracking-[0.05em] text-center md:text-right">
            <span className="lowercase">criado por </span>
            <a 
              href="https://www.instagram.com/rseisagencia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-all duration-300 group inline-flex items-center"
            >
              <strong className="font-bold text-cream/90 group-hover:text-gold">R6 Agência</strong> 
              <span className="mx-1 text-cream/20">|</span> 
              <span className="group-hover:text-cream/50">Marketing Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;