import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import HistorySection from './components/HistorySection';
import TestimonialsSection from './components/TestimonialsSection';
import FeaturesSection from './components/FeaturesSection';
import ContactCTA from './components/ContactCTA'; 
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [showChat, setShowChat] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    if (!mainRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.to(mainRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      });
    }, mainRef.current);

    const checkCookies = () => {
      const consent = localStorage.getItem('lannati_cookies_preference');
      if (consent === 'accepted') {
        setShowChat(true);
      }
    };

    checkCookies();
    const interval = setInterval(checkCookies, 500);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (showChat && !tooltipDismissed) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showChat, tooltipDismissed]);

  const closeTooltip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTooltip(false);
    setTooltipDismissed(true);
  };

  return (
    <div ref={mainRef} className="opacity-0 bg-cream min-h-screen text-charcoal font-sans selection:bg-bordeaux selection:text-gold">
      
      <main className="relative">
        <Hero />
        <FeaturesSection />
        <ProductSection />
        <HistorySection />
        <TestimonialsSection />
        <ContactCTA />
      </main>

      <Footer />
      <CookieConsent />

      {/* ÍCONE DE ATENDIMENTO COM REFINAMENTOS SOLICITADOS */}
      {showChat && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Balão de Fala (Tooltip) */}
          <div 
            className={`relative bg-cream border-2 border-bordeaux/25 px-6 py-4 rounded-[1.5rem] shadow-2xl transition-all duration-700 transform ${
              showTooltip && !tooltipDismissed ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-90 pointer-events-none'
            }`}
          >
            {/* X movido para o outro lado (esquerda) */}
            <button 
              onClick={closeTooltip}
              className="absolute -top-2 -left-2 bg-bordeaux text-gold rounded-full p-1 hover:scale-110 transition-transform shadow-lg border border-gold/20 z-10"
              aria-label="Fechar mensagem"
            >
              <X size={12} strokeWidth={3} />
            </button>

            {/* Escrita em peso normal conforme solicitado */}
            <p className="font-title text-bordeaux text-xs md:text-sm font-normal whitespace-nowrap pl-2 pr-2">
              Olá, como podemos te ajudar?
            </p>
            {/* Triângulo do balão */}
            <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-cream border-r-2 border-t-2 border-bordeaux/25 rotate-45"></div>
          </div>

          <a 
            href="https://wa.me/message/4UTFA7QUPX6PE1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative bg-gold text-bordeaux p-4 rounded-[1.5rem] shadow-[0_15px_40px_rgba(107,66,38,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-bordeaux/30 group"
            aria-label="Fale conosco no WhatsApp"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36055 14.891 4 16.1247L3 21L7.87531 20C9.10899 20.6395 10.5124 21 12 21Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8" cy="12" r="1.2" fill="currentColor"/>
              <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
              <circle cx="16" cy="12" r="1.2" fill="currentColor"/>
            </svg>
            
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-gold animate-pulse"></span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-gold opacity-30 scale-150 animate-ping"></span>
          </a>
        </div>
      )}
    </div>
  );
};

export default App;