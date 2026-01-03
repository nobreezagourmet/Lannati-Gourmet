import React, { useEffect, useRef } from 'react';
import { Star, UserRound } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const testimonials = [
  { id: 1, text: "Os brigadeiros gourmet são incríveis! Sempre encomendo para eventos e fazem o maior sucesso.", author: "Ana Souza", rating: 5 },
  { id: 2, text: "Além dos doces deliciosos, o atendimento é impecável! Recomendo de olhos fechados!", author: "Carlos Machado", rating: 4 },
  { id: 3, text: "Todos os doces são simplesmente incríveis! A qualidade e o sabor são incomparáveis. Super recomendo.", author: "Mariana Lima", rating: 5 },
  { id: 4, text: "A apresentação das caixas de presente é divina. Foi o destaque do aniversário da minha mãe.", author: "Fernanda Costa", rating: 5 },
  { id: 5, text: "O de pistache é de outro mundo! Nunca comi nada igual. Virei cliente fiel.", author: "Roberto Alves", rating: 5 },
  { id: 6, text: "Simplesmente divinos! O sabor Tradicional Belga me transportou para a infância, mas com um toque sofisticado.", author: "Patrícia Gomes", rating: 5 },
  { id: 7, text: "Uma experiência gastronômica completa. Desde a embalagem até o último pedaço, tudo perfeito.", author: "Ricardo Mendonça", rating: 5 },
  { id: 8, text: "A Lannati Gourmet transformou nossa festa em um evento inesquecível. O bolo de nozes é dos deuses.", author: "Juliana Paes", rating: 5 }
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const loopInstance = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const initMarquee = () => {
      const items = gsap.utils.toArray(".testimonial-card") as HTMLElement[];
      if (!items.length || !containerRef.current || !trackRef.current) return;

      const ctx = gsap.context(() => {
        loopInstance.current = horizontalLoop(items, {
          repeat: -1,
          speed: 0.2, 
          paddingRight: 16,
          paused: false 
        });

        const dragProxy = document.createElement("div");
        if (trackRef.current) {
          Draggable.create(dragProxy, {
            type: "x",
            trigger: trackRef.current,
            onPress() {
              if (loopInstance.current) {
                // @ts-ignore - Propriedade customizada para controle de offset
                this.startOffset = loopInstance.current.totalTime();
                loopInstance.current.pause();
              }
            },
            onDrag() {
              if (loopInstance.current) {
                // @ts-ignore
                loopInstance.current.totalTime(this.startOffset + (this.startX - this.x) * 0.004);
              }
            },
            onRelease() {
              if (loopInstance.current) {
                loopInstance.current.play();
                gsap.to(loopInstance.current, { 
                  timeScale: 1, 
                  duration: 4, 
                  ease: "expo.out" 
                });
              }
            }
          });
        }

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const v = Math.abs(self.getVelocity() / 2000);
            if (loopInstance.current) {
              gsap.to(loopInstance.current, { timeScale: 1 + v, duration: 1, overwrite: "auto" });
            }
          }
        });
      }, containerRef.current);

      return () => ctx.revert();
    };

    const timer = setTimeout(initMarquee, 100);
    return () => clearTimeout(timer);
  }, []);

  function horizontalLoop(items: HTMLElement[], config: any) {
    items = gsap.utils.toArray(items);
    config = config || {};
    const tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        }
      });
    
    const length = items.length;
    const startX = items[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    const pixelsPerSecond = (config.speed || 1) * 100;
    const snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1);
    
    gsap.set(items, {
      xPercent: (i, target) => {
        const w = widths[i] = parseFloat(gsap.getProperty(target, "width", "px") as string);
        xPercents[i] = snap(parseFloat(gsap.getProperty(target, "xPercent") as string) || 0);
        return xPercents[i];
      }
    });
    gsap.set(items, { x: 0 });
    
    const gap = parseFloat(config.paddingRight) || 0;
    const totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth + gap;
    
    for (let i = 0; i < length; i++) {
      const item = items[i];
      const curX = xPercents[i] / 100 * widths[i];
      const distanceToStart = item.offsetLeft - startX;
      const distanceToLoop = distanceToStart + widths[i] + gap;
      tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
        .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    
    tl.progress(1, true).progress(0, true);
    if (config.reversed) {
      if (tl.vars.onReverseComplete) {
        tl.vars.onReverseComplete();
      }
      tl.reverse();
    }
    return tl;
  }

  return (
    <section ref={containerRef} id="testimonials" className="pt-40 pb-24 md:pt-64 md:pb-64 bg-gold relative overflow-hidden select-none border-b border-bordeaux/5">
      
      <div className="container mx-auto px-6 mb-16 md:mb-24 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl text-bordeaux tracking-tight leading-tight flex justify-center items-baseline flex-wrap gap-x-4">
          <span className="font-title font-bold">Quem prova,</span>
          <span className="font-serif font-light italic">recomenda</span>
        </h2>
        <div className="w-16 h-0.5 bg-bordeaux/10 mx-auto mt-8"></div>
      </div>

      <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing pb-12">
        <div className="absolute left-0 top-0 bottom-12 w-32 md:w-64 bg-gradient-to-r from-gold via-gold/80 to-transparent z-20 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-12 w-32 md:w-64 bg-gradient-to-l from-gold via-gold/80 to-transparent z-20 pointer-events-none hidden md:block"></div>

        <div ref={trackRef} className="flex w-max py-4 overflow-visible">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div 
              key={`${item.id}-${idx}`}
              className="testimonial-card w-[210px] md:w-[320px] flex-shrink-0 mr-4 md:mr-8"
            >
              <div className="bg-bordeaux p-5 md:p-8 rounded-[1.8rem] md:rounded-[2rem] border border-white/10 h-full flex flex-col items-start transition-all hover:bg-bordeaux/95 shadow-none ring-0">
                <div className="w-full flex gap-1 text-gold/80 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} stroke="currentColor" />
                  ))}
                </div>

                <p className="font-body-standard text-cream/90 text-xs md:text-lg leading-relaxed mb-6 italic font-light line-clamp-6">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-white/5 w-full">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold/60 border border-white/10">
                    <UserRound size={16} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="font-title-standard text-[12px] md:text-base text-gold/90 leading-none mb-0.5">
                      {item.author}
                    </h4>
                    <span className="text-[7px] text-cream/30 uppercase tracking-[0.1em] font-bold">Verificado</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;