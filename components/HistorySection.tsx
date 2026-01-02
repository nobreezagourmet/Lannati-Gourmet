import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section className="relative pt-40 pb-48 md:pb-64 bg-bordeaux text-cream z-10">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-30 -translate-y-[99.8%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[80px] md:h-[150px] text-bordeaux fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-32 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 text-left space-y-8 md:space-y-12">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-cream tracking-tight leading-tight flex justify-start items-baseline flex-wrap gap-x-4">
              <span className="font-serif font-light italic text-gold">Uma história</span>
              <span className="font-title font-bold">de amor</span>
            </h2>
            <p className="font-body-standard text-xl md:text-2xl text-cream/60 leading-relaxed font-light w-full text-justify md:text-left [hyphens:auto]">
              Transformamos paixão em doçura artesanal. Cada receita carrega a essência de um sonho concretizado com perfeição e os melhores ingredientes do mundo, para que cada mordida seja uma memória inesquecível e pura felicidade.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-[3rem] md:rounded-[4rem] overflow-hidden border-4 md:border-8 border-white/5 bg-charcoal/10 shadow-2xl shadow-black/20">
            <img 
              src="https://i.postimg.cc/65nHdSJ5/Gemini-Generated-Image-3y9pni3y9pni3y9p.png" 
              className="w-full aspect-square object-cover opacity-90" 
              alt="Nossa História" 
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 translate-y-[99.8%]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[80px] md:h-[150px] text-bordeaux fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HistorySection;