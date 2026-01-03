import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="relative pt-32 pb-48 md:pb-64 bg-bordeaux text-cream z-10 scroll-mt-20">
      
      {/* ONDA SUPERIOR: Ajuste de sobreposição de 1px para evitar fendas em telas AMOLED */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-50 -translate-y-[calc(100%-1px)]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[101%] h-[80px] md:h-[180px] text-bordeaux fill-current"
          style={{ left: '-0.5%' }}
          shapeRendering="geometricPrecision"
        >
          <path d="M0,0V60.53C0,60.53,156.45,130.45,340,90.53C523.55,50.61,640,0,820,30.53C1000,61.06,1200,120.53,1200,120.53V0H0Z" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-32 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 text-left space-y-8 md:space-y-12">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-cream tracking-tight leading-tight flex justify-start items-baseline flex-wrap gap-x-4">
              <span className="font-serif font-light italic text-gold">Uma história</span>
            </h2>
            <p className="font-body-standard text-lg md:text-2xl text-cream/60 leading-relaxed font-light w-full text-justify md:text-left [hyphens:auto]">
              Transformamos paixão em doçura artesanal. Cada receita carrega a essência de um sonho concretizado com perfeição e os melhores ingredientes do mundo, para que cada mordida seja uma memória inesquecível e pura felicidade.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-black/20">
            <img 
              src="https://i.postimg.cc/LX7pkg1s/Whats-App-Image-2025-12-29-at-13-37-22.png" 
              className="w-full aspect-square object-cover opacity-95 hover:opacity-100 transition-opacity duration-700" 
              alt="Nossa História" 
            />
          </div>
        </div>
      </div>

      {/* ONDA INFERIOR: Ajuste de sobreposição de 1px */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50 translate-y-[calc(100%-1px)]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[101%] h-[80px] md:h-[180px] text-bordeaux fill-current"
          style={{ left: '-0.5%' }}
          shapeRendering="geometricPrecision"
        >
          <path d="M0,0V60.53C0,60.53,156.45,130.45,340,90.53C523.55,50.61,640,0,820,30.53C1000,61.06,1200,120.53,1200,120.53V0H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HistorySection;