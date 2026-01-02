import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftGotaRef = useRef<HTMLImageElement>(null);
  const rightGotaRef = useRef<HTMLImageElement>(null);
  const centralImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(".features-title", 
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: ".features-title",
              start: "top 90%",
              end: "top 70%",
              scrub: 1
            }
          }
        );

        gsap.utils.toArray<HTMLElement>(".feature-item").forEach((item) => {
          gsap.fromTo(item, 
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              scrollTrigger: {
                trigger: item,
                start: "top 95%",
                end: "top 75%",
                scrub: 1.2
              }
            }
          );
        });
      });

      gsap.fromTo(leftGotaRef.current, 
        { x: 0, scale: 0.95 },
        {
          x: -100,
          scale: 1.15,
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8
          }
        }
      );

      gsap.fromTo(rightGotaRef.current, 
        { x: 0, scale: 0.95 },
        {
          x: 120,
          scale: 1.15,
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4
          }
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.2
        }
      });

      tl.fromTo(centralImgRef.current, 
        { scale: 0.95, y: 50 },
        { scale: 1.1, y: 0, duration: 1, ease: "power2.inOut" }
      )
      .to(centralImgRef.current, 
        { scale: 1.0, y: -50, duration: 1, ease: "power2.inOut" }
      );

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;

        gsap.to(leftGotaRef.current, {
          rotation: xPos * 0.35,
          duration: 4.5,
          ease: "sine.out",
          overwrite: "auto"
        });

        gsap.to(rightGotaRef.current, {
          rotation: -xPos * 0.55,
          duration: 5,
          ease: "sine.out",
          overwrite: "auto"
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);

    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="features" className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-bordeaux z-10 scroll-mt-20 overflow-visible">
      
      <img 
        ref={rightGotaRef}
        src="https://i.postimg.cc/cHGfgptk/GOTAS-02.png"
        className="absolute hidden md:block -right-36 top-[5%] w-[440px] h-auto opacity-100 z-[60] pointer-events-none"
        alt="Decoração superior"
      />

      <img 
        ref={leftGotaRef}
        src="https://i.postimg.cc/wx0sgy22/GOTAS-01.png"
        className="absolute hidden md:block left-[-2%] bottom-[-32%] w-80 h-auto opacity-100 z-[60] pointer-events-none"
        alt="Decoração inferior"
      />

      <div className="container mx-auto px-6 relative z-30">
        <div className="text-center mb-4 md:mb-20 features-title">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight flex justify-center items-baseline flex-wrap gap-x-4">
            <span className="font-title font-bold text-gold/90">Nossos</span>
            <span className="font-serif font-light italic text-gold">diferenciais</span>
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 max-w-7xl mx-auto">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-12 md:gap-16 text-center lg:text-right order-2 lg:order-1 relative z-30">
            <div className="group feature-item">
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase transition-colors group-hover:text-cream">Receita original</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-right [hyphens:auto]">Preservamos o sabor autêntico das receitas tradicionais passadas por gerações em nossa família.</p>
            </div>
            <div className="group feature-item">
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase transition-colors group-hover:text-cream">Produção artesanal</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-right [hyphens:auto]">Cada detalhe é moldado à mão com paciência e perfeccionismo para garantir a perfeição absoluta.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-[480px] md:h-[480px] flex items-center justify-center">
              <img 
                ref={centralImgRef}
                src="https://i.postimg.cc/kG1mRyZ5/Foto-centrla.png"
                className="w-full h-full object-contain z-20 will-change-transform"
                alt="Destaque Lannati"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-12 md:gap-16 text-center lg:text-left order-3 relative z-30">
            <div className="group feature-item">
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase transition-colors group-hover:text-cream">Ingredientes</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-left [hyphens:auto]">Selecionamos apenas as melhores matérias-primas globais para elevar o padrão de cada criação.</p>
            </div>
            <div className="group feature-item">
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase transition-colors group-hover:text-cream">Atendimento exclusivo</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-left [hyphens:auto]">Sua experiência é tratada com o cuidado e a exclusividade que você merece em cada detalhe.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50 translate-y-[99%]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[101.5%] h-[60px] md:h-[100px] text-bordeaux fill-current"
          style={{ left: '-0.75%' }}
        >
          <path d="M0,0V60.53C0,60.53,156.45,115.45,340,75.53C523.55,35.61,640,0,820,30.53C1000,61.06,1200,105,1200,105V0H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;