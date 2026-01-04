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
    <section ref={containerRef} className="relative h-[85vh] md:h-screen min-h-[600px] w-full overflow-hidden flex items-center bg-bordeaux">
      {/* Background Layer - Imagem mais visível */}
      <div 
        ref={bgImageRef}
        className="absolute top-0 left-0 w-full h-[115%] bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/LXgkNzKD/Sem-Titulo-2.png")',
          filter: 'brightness(0.85)' 
        }}
      />

      {/* Gradientes que permitem ver o fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-bordeaux/10 via-bordeaux/30 to-bordeaux z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-bordeaux/40 via-transparent to-transparent z-10 hidden md:block"></div>
      
      <div className="relative z-20 container mx-auto px-6 md:px-12 pt-4 md:pt-10">
        <div ref={textRef} className="opacity-0 max-w-4xl w-full flex flex-col items-center md:items-start text-center md:text-left -mt-8 md:mt-0">
          
          <div className="w-full flex justify-center md:hidden mb-8 transform transition-all duration-300">
            <img 
              src="https://i.postimg.cc/hjwW10gL/logo-novo-agora.png" 
              alt="Lannati Gourmet Logo" 
              className="w-20 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          <h1 className="flex flex-col mb-2 md:mb-4 leading-none w-full items-center md:items-start">
            <span className="font-title font-bold text-cream text-[2.8rem] sm:text-5xl md:text-7xl lg:text-8xl tracking-tight">
              O doce sabor
            </span>
            <span className="text-gold italic font-serif font-light text-[1.8rem] sm:text-4xl md:text-6xl lg:text-7xl -mt-1 md:-mt-3 lowercase">
              da sua felicidade
            </span>
          </h1>

          <p className="font-body-standard text-lg md:text-lg lg:text-xl text-cream/80 max-w-xl mb-4 md:mb-8 leading-relaxed font-light">
            Transformamos o clássico brigadeiro em uma experiênca gourmet inesquecível, unindo técnica artesanal aos melhores ingredientes do mundo.
          </p>
          
          <button 
            onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-luxury px-8 py-4 md:px-12 md:py-5 bg-gold text-bordeaux hover:scale-105 transition-all duration-500 shadow-sm border-none mx-auto md:mx-0"
          >
            CONHECER CARDÁPIO COMPLETO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;