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
  const titleRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      );

      const items = gsap.utils.toArray(".testimonial-card") as HTMLElement[];
      const style = window.getComputedStyle(items[0]);
      const marginRight = parseFloat(style.marginRight) || 0;

      const loop = horizontalLoop(items, {
        repeat: -1,
        speed: 0.12, 
        paddingRight: marginRight,
      });

      let dragProxy = document.createElement("div");

      Draggable.create(dragProxy, {
        type: "x",
        trigger: trackRef.current,
        onPress() {
          this.startOffset = loop.totalTime();
          gsap.killTweensOf(loop);
        },
        onDrag() {
          loop.totalTime(this.startOffset + (this.startX - this.x) * 0.005);
        }
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, []);

  function horizontalLoop(items: any[], config: any) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat, 
        defaults: {ease: "none"}, 
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times: any[] = [],
      widths: any[] = [],
      xPercents: any[] = [],
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? (v: any) => v : gsap.utils.snap(config.snap || 1), 
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
    
    gsap.set(items, { 
      xPercent: (i, target) => {
        let w = widths[i] = parseFloat(gsap.getProperty(target, "width", "px") as string);
        xPercents[i] = snap(parseFloat(gsap.getProperty(target, "x", "px") as string) / w * 100 + (gsap.getProperty(target, "xPercent") as number));
        return xPercents[i];
      }
    });
    gsap.set(items, {x: 0});
    
    const itemWidth = parseFloat(gsap.getProperty(items[0], "width", "px") as string);
    const gap = parseFloat(config.paddingRight) || 0;
    totalWidth = (itemWidth + gap) * length;
    
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft - startX;
      distanceToLoop = distanceToStart + widths[i] + gap;
      tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
        .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    tl.progress(1, true).progress(0, true); 
    return tl;
  }

  return (
    <section ref={containerRef} className="pt-52 pb-24 md:pt-72 md:pb-48 bg-gold relative overflow-hidden select-none border-b border-bordeaux/5">
      <div className="container mx-auto px-6 mb-8 md:mb-24 text-center">
        <div ref={titleRef}>
             <h2 className="text-5xl sm:text-6xl lg:text-7xl text-bordeaux tracking-tight leading-tight flex justify-center items-baseline flex-wrap gap-x-4">
               <span className="font-title font-bold">Quem prova,</span>
               <span className="font-serif font-light italic">recomenda</span>
             </h2>
             <div className="w-12 h-0.5 bg-bordeaux/10 mx-auto mt-8"></div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <div ref={trackRef} className="flex w-max py-4 px-0 overflow-visible">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="testimonial-card w-[200px] md:w-[240px] flex-shrink-0 mr-6"
            >
              <div className="bg-bordeaux p-6 md:p-8 rounded-[2rem] border border-white/5 h-full flex flex-col items-start transition-all hover:bg-bordeaux/95">
                <div className="w-full flex gap-1 text-gold/70 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill={i < Math.floor(item.rating) ? "currentColor" : "none"} stroke="currentColor" />
                  ))}
                </div>

                <p className="font-body-standard text-cream/90 text-xs md:text-sm leading-relaxed mb-6 italic font-light">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5 w-full">
                  <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold/60 border border-white/5">
                    <UserRound size={16} strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="font-title-standard text-xs md:text-sm text-gold/90 leading-none mb-0.5">
                      {item.author}
                    </h4>
                    <span className="text-[8px] text-cream/30 uppercase tracking-[0.1em] font-medium">Cliente</span>
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