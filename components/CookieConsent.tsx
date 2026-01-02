
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

  // Animação de expansão dos detalhes
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
          
          {/* Textura de fundo sutil */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

          <div className="relative z-10 p-6 md:px-10 md:py-7">
            
            {/* Container Principal: Desktop (Lado a Lado) | Mobile (Cima e Baixo) */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* LADO ESQUERDO: Logo e Texto */}
              <div className="flex items-start gap-4 md:gap-5 flex-1">
                {/* Ícone SVG Lannati */}
                <div className="relative flex-shrink-0 mt-1 select-none">
                  <div className="absolute inset-0 bg-bordeaux/10 rounded-full scale-125 blur-md"></div>
                  <svg width="36" height="36" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bordeaux relative z-10">
                    <path d="M21 39C30.9411 39 39 30.9411 39 21C39 11.0589 30.9411 3 21 3C11.0589 3 3 11.0589 3 21C3 30.9411 11.0589 39 21 39Z" fill="#6b4226" fillOpacity="0.08"/>
                    <circle cx="21" cy="21" r="16" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3"/>
                    <circle cx="14" cy="22" r="2.5" fill="currentColor" className="animate-pulse"/>
                    <circle cx="27" cy="21" r="2" fill="currentColor"/>
                    <circle cx="20" cy="29" r="3" fill="currentColor" opacity="0.6"/>
                  </svg>
                </div>

                <div className="text-left">
                  <p className="font-sans text-bordeaux/80 text-xs md:text-sm leading-relaxed font-medium">
                    <span className="font-title font-bold uppercase tracking-wider text-bordeaux mr-1 block sm:inline">Sua Privacidade:</span>
                    Utilizamos cookies para criar uma jornada personalizada e deliciosa em nosso site.
                    <button 
                      onClick={() => setShowDetails(!showDetails)}
                      className="ml-0 sm:ml-2 text-bordeaux font-bold underline underline-offset-4 hover:opacity-60 transition-all inline-flex items-center gap-1 mt-1 sm:mt-0"
                    >
                      {showDetails ? 'Ver menos' : 'Mais informações'}
                      {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </p>
                </div>
              </div>

              {/* LADO DIREITO: Botões de Ação */}
              <div className="flex flex-row items-center gap-3 md:gap-4 lg:ml-6">
                <button 
                  onClick={() => handleAction('declined')}
                  className="px-6 py-2.5 border border-bordeaux/30 text-bordeaux hover:bg-bordeaux/5 font-title text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold rounded-full transition-all whitespace-nowrap"
                >
                  Recusar
                </button>

                <button 
                  onClick={() => handleAction('accepted')}
                  className="flex items-center justify-center px-8 md:px-10 py-2.5 md:py-3 bg-bordeaux text-gold rounded-full font-title font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-lg shadow-bordeaux/20 hover:scale-105 active:scale-95 transition-all duration-300 min-w-[120px] whitespace-nowrap"
                >
                  Aceitar Tudo
                </button>
              </div>
            </div>

            {/* PARTE INFERIOR: Detalhes Expandidos (Aparece abaixo de tudo) */}
            <div ref={detailsRef} className="overflow-hidden h-0 opacity-0 bg-bordeaux/[0.03] rounded-2xl border-bordeaux/5 mt-4 lg:mt-6">
              <div className="px-4 py-6 md:px-6">
                <div className="max-w-4xl">
                  <h5 className="font-title font-bold text-bordeaux text-sm md:text-base uppercase tracking-widest mb-3">
                    Compromisso com sua Doce Privacidade
                  </h5>
                  <div className="max-h-[30vh] md:max-h-none overflow-y-auto pr-2">
                    <p className="font-sans text-bordeaux/70 text-[11px] md:text-sm leading-relaxed">
                      Na Lannati Gourmet, acreditamos que a confiança é o ingrediente principal de qualquer relação. 
                      Os cookies que utilizamos servem para garantir que sua experiência em nosso ateliê digital seja tão 
                      perfeita quanto nossas receitas. Eles nos ajudam a lembrar de suas preferências, garantir a segurança 
                      das suas transações e oferecer conteúdos que realmente combinem com o seu paladar. 
                      Você tem o controle total sobre o que deseja compartilhar conosco.
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
