import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax de fundo
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

      // Animação de entrada
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo(textRef.current, 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power4.out" }
      );

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[85vh] md:h-screen min-h-[650px] w-full overflow-hidden flex items-center bg-bordeaux">
      {/* Background Layer - Brilho realçado para mostrar o brigadeiro */}
      <div 
        ref={bgImageRef}
        className="absolute top-0 left-0 w-full h-[115%] bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/fRD2zKtQ/Sem-Titulo-1.png")',
          filter: 'brightness(0.65)' 
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bordeaux/30 via-bordeaux/70 to-bordeaux z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-bordeaux/50 via-transparent to-transparent z-10 hidden md:block"></div>
      
      <div className="relative z-20 container mx-auto px-6 md:px-12 pt-20 md:pt-32">
        <div ref={textRef} className="opacity-0 max-w-5xl w-full flex flex-col items-center md:items-start text-center md:text-left">
          
          {/* Logo: Oculta no Desktop, Subida de 8mm e mais espaço abaixo no Mobile */}
          <div className="w-full flex justify-center md:hidden mb-24 -mt-20 transform transition-all duration-300">
            <img 
              src="https://i.postimg.cc/hjwW10gL/logo-novo-agora.png" 
              alt="Lannati Gourmet Logo" 
              className="w-32 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          <h1 className="flex flex-col mb-8 md:mb-10 leading-[1.05] w-full items-center md:items-start">
            <span className="font-title font-bold text-cream text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase">
              O <span className="lowercase">doce sabor</span>
            </span>
            <span className="text-gold italic font-serif font-light text-3xl sm:text-5xl md:text-7xl lg:text-8xl mt-1 md:mt-3 lowercase">
              da sua felicidade
            </span>
          </h1>

          <p className="font-body-standard text-base md:text-xl lg:text-2xl text-cream/70 max-w-2xl mb-10 md:mb-16 leading-relaxed font-light">
            Confeitaria artesanal feita com ingredientes selecionados para criar momentos inesquecíveis em cada detalhe.
          </p>
          
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury px-10 py-5 md:px-14 md:py-6 bg-gold text-bordeaux hover:scale-105 transition-all duration-500 shadow-sm border-none mx-auto md:mx-0"
          >
            CONHECER O CARDÁPIO COMPLETO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;