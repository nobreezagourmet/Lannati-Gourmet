import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const consent = localStorage.getItem('lannati_cookies_preference');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      gsap.fromTo(containerRef.current,
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "expo.out",
          delay: 1.5
        }
      );
    }
  }, [isVisible]);

  useEffect(() => {
    if (detailsRef.current) {
      if (showDetails) {
        gsap.fromTo(detailsRef.current, 
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.8, ease: "expo.out" }
        );
      } else {
        gsap.to(detailsRef.current, { height: 0, opacity: 0, duration: 0.5, ease: "expo.in" });
      }
    }
  }, [showDetails]);

  const handleAction = (preference: 'accepted' | 'declined') => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        onComplete: () => {
          localStorage.setItem('lannati_cookies_preference', preference);
          setIsVisible(false);
        }
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-0 left-0 w-full z-[100] px-4 pb-4 md:pb-6 pointer-events-none opacity-0"
      role="alert"
    >
      <div className="container mx-auto max-w-6xl pointer-events-auto">
        <div className="bg-gold border border-bordeaux/10 rounded-[2rem] shadow-[0_20px_60px_rgba(107,66,38,0.3)] overflow-hidden relative">
          
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

          <div className="relative z-10 p-6 md:px-10 md:py-7">
            
            {/* Layout Fluido */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              {/* LADO SUPERIOR/ESQUERDO: Texto e Ícone PNG */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-5 flex-1 text-center md:text-left">
                <div className="relative flex-shrink-0 mt-1 select-none hidden md:block">
                  <img 
                    src="https://i.postimg.cc/9FXgQn9Z/novo-brigdeiro-cookies.png" 
                    alt="Cookie Icon" 
                    className="w-10 h-10 object-contain brightness-50 opacity-60"
                  />
                </div>

                <div className="text-center md:text-left">
                  <p className="font-sans text-bordeaux/80 text-xs md:text-sm leading-relaxed font-medium">
                    <span className="font-title font-bold uppercase tracking-wider text-bordeaux block mb-1">Sua Privacidade</span>
                    Utilizamos cookies para criar uma jornada personalizada e deliciosa em nosso site.
                  </p>
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="mt-2 text-bordeaux font-bold underline underline-offset-4 hover:opacity-60 transition-all inline-flex items-center gap-1 text-xs"
                  >
                    {showDetails ? 'Ver menos' : 'Mais informações'}
                    {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>
              </div>

              {/* BOTÕES: Centralizados em baixo no mobile conforme solicitado */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 lg:ml-6 w-full lg:w-auto">
                <button 
                  onClick={() => handleAction('declined')}
                  className="w-full sm:w-auto px-10 py-3 border border-bordeaux/30 text-bordeaux hover:bg-bordeaux/5 font-title text-[10px] uppercase tracking-[0.15em] font-bold rounded-full transition-all whitespace-nowrap"
                >
                  Recusar
                </button>

                <button 
                  onClick={() => handleAction('accepted')}
                  className="w-full sm:w-auto flex items-center justify-center px-12 py-3.5 bg-bordeaux text-gold rounded-full font-title font-bold text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-bordeaux/20 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  Aceitar Tudo
                </button>
              </div>
            </div>

            {/* DETALHES: Fluem abaixo de tudo quando expandido */}
            <div ref={detailsRef} className="overflow-hidden h-0 opacity-0 bg-bordeaux/[0.03] rounded-2xl border-bordeaux/5 mt-6">
              <div className="px-4 py-6 md:px-6">
                <div className="max-w-4xl mx-auto text-center md:text-left">
                  <h5 className="font-title font-bold text-bordeaux text-sm md:text-base uppercase tracking-widest mb-3">
                    Compromisso com sua Doce Privacidade
                  </h5>
                  <div className="max-h-[30vh] md:max-h-none overflow-y-auto pr-2">
                    <p className="font-sans text-bordeaux/70 text-[11px] md:text-sm leading-relaxed">
                      Na Lannati Gourmet, acreditamos que a confiança é o ingrediente principal de qualquer relação. 
                      Os cookies que utilizamos servem para garantir que sua experiência em nosso ateliê digital seja tão 
                      perfeita quanto nossas receitas. Você tem o controle total sobre o que deseja compartilhar conosco.
                    </p>
                    <p className="text-[10px] font-sans text-bordeaux/40 italic mt-4">
                      Sua escolha é respeitada e pode ser alterada a qualquer momento em nosso Ateliê Digital.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;