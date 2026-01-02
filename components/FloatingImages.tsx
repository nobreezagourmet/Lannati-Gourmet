import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FloatingImages: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      
      // Animação para a imagem da direita
      gsap.fromTo(img1Ref.current, 
        { 
          scale: 0.8,
          rotation: 5
        },
        {
          scale: 1.3,
          rotation: -5,
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );

      // Animação para a imagem da esquerda
      gsap.fromTo(img2Ref.current, 
        { 
          scale: 0.9,
          rotation: -10
        },
        {
          scale: 1.2,
          rotation: 5,
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );

    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute top-[80vh] left-0 w-full h-[200vh] pointer-events-none z-20 overflow-hidden hidden md:block">
      {/* Imagem Direita: Cores reais, sem filtro */}
      <img 
        ref={img1Ref}
        src="https://i.postimg.cc/cHGfgptk/GOTAS-02.png" 
        alt="Trigo"
        className="absolute right-0 top-[15%] w-64 h-80 object-cover opacity-100 rounded-l-3xl shadow-2xl translate-x-1/3"
      />

      {/* Imagem Esquerda: Cores reais, sem filtro */}
      <img 
        ref={img2Ref}
        src="https://i.postimg.cc/wx0sgy22/GOTAS-01.png" 
        alt="Detalhe"
        className="absolute left-0 top-[50%] w-56 h-72 object-cover opacity-100 rounded-r-3xl shadow-2xl -translate-x-1/3"
      />
    </div>
  );
};

export default FloatingImages;