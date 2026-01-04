import React from 'react';

const HistorySection: React.FC = () => {
  return (
    <section id="history" className="relative pt-32 pb-40 md:pt-48 md:pb-64 bg-bordeaux text-cream z-10 scroll-mt-20">
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-50 -translate-y-[calc(100%-1.5px)]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[101.5%] h-[80px] md:h-[180px] text-bordeaux fill-current will-change-transform"
          style={{ left: '-0.75%', shapeRendering: 'geometricPrecision' }}
        >
          <path d="M0,0V60.53C0,60.53,156.45,130.45,340,90.53C523.55,50.61,640,0,820,30.53C1000,61.06,1200,120.53,1200,120.53V0H0Z" transform="scale(1, -1) translate(0, -120)"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-32 max-w-7xl mx-auto">
          <div className="w-full md:w-1/2 text-left space-y-6 md:space-y-12">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-cream tracking-tight leading-tight flex justify-start items-baseline flex-wrap gap-x-4">
              <span className="font-serif font-light italic text-gold">Nossa história</span>
            </h2>
            <p className="font-body-standard text-base md:text-xl text-cream/60 leading-relaxed font-light w-full text-justify md:text-left [hyphens:auto]">
              Tudo começou em 2022, quando fazer brigadeiros era apenas um hobby. O que começou de forma simples, com muito carinho e vontade de aprender, aos poucos foi se transformando em algo muito maior. Hoje, posso dizer que amo o que faço. Cada encomenda traz uma ansiedade boa, aquela vontade de entregar sempre o meu melhor. Cada brigadeiro é feito com dedicação, cuidado e muito amor, porque acredito que doces também contam histórias e criam momentos especiais.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-black/20">
            <img 
              src="https://i.postimg.cc/LX7pkg1s/Whats-App-Image-2025-12-29-at-13-37-22.png" 
              className="w-full aspect-square md:aspect-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-700 max-h-[400px] md:max-h-none" 
              alt="Nossa História" 
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50 translate-y-[calc(100%-1.5px)]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-[101.5%] h-[80px] md:h-[180px] text-bordeaux fill-current will-change-transform"
          style={{ left: '-0.75%', shapeRendering: 'geometricPrecision' }}
        >
          <path d="M0,0V60.53C0,60.53,156.45,130.45,340,90.53C523.55,50.61,640,0,820,30.53C1000,61.06,1200,120.53,1200,120.53V0H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HistorySection;