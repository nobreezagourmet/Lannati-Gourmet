import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgImageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const tl = gsap.timeline({ delay: 0.4 });
      
      tl.fromTo(logoRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      ).fromTo(textRef.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.9" 
      );

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center bg-bordeaux">
      <div 
        ref={bgImageRef}
        className="absolute top-0 left-0 w-full h-[115%] bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/fRD2zKtQ/Sem-Titulo-1.png")',
          filter: 'brightness(0.5)' 
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bordeaux/40 via-bordeaux/80 to-bordeaux z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-bordeaux/90 via-bordeaux/20 to-transparent z-10"></div>
      
      <div className="relative z-20 container mx-auto px-6 md:px-12 pt-10 md:pt-0">
        <div className="max-w-6xl">
          <div ref={logoRef} className="mb-6 md:mb-14 opacity-0">
            <svg width="220" height="70" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold scale-90 md:scale-100 origin-left">
              <circle cx="30" cy="40" r="28" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
              <path d="M22 28V52H38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <text x="70" y="42" fill="currentColor" className="font-brand font-medium tracking-[0.15em] uppercase text-[24px]">Lannati</text>
              <text x="70" y="58" fill="currentColor" fillOpacity="0.6" className="font-brand text-[12px] tracking-[0.4em] uppercase">Gourmet</text>
            </svg>
          </div>

          <div ref={textRef} className="opacity-0">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 md:mb-10 leading-tight flex flex-wrap items-baseline gap-x-4">
              <span className="font-title font-bold text-cream">O doce sabor</span>
              <span className="text-gold italic font-serif font-light">da sua felicidade</span>
            </h1>

            <p className="font-body-standard text-xl md:text-2xl text-cream/70 mb-8 md:mb-14 max-w-2xl leading-relaxed font-light">
              Confeitaria artesanal feita com ingredientes selecionados para criar momentos inesquecíveis.
            </p>
            
            <button 
              onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-luxury px-12 py-5 md:py-6 bg-gold text-bordeaux hover:scale-105 transition-all duration-500 shadow-xl shadow-bordeaux/20"
            >
              CONHECER O CARDÁPIO COMPLETO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;