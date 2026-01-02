import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="relative pt-4 md:pt-32 pb-48 md:pb-64 bg-bordeaux z-10">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-tight flex justify-center items-baseline flex-wrap gap-x-4">
            <span className="font-title font-bold text-gold/90">Nossos</span>
            <span className="font-serif font-light italic text-gold">diferenciais</span>
          </h2>
          <div className="w-16 h-px bg-gold/30 mx-auto mt-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-20 lg:gap-16 max-w-7xl mx-auto">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-16 md:gap-24 text-center lg:text-right order-2 lg:order-1">
            <div>
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase">Receita original</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-right [hyphens:auto]">Preservamos o sabor autêntico das receitas tradicionais passadas por gerações em nossa família.</p>
            </div>
            <div>
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase">Produção artesanal</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-right [hyphens:auto]">Cada detalhe é moldado à mão com paciência e perfeccionismo para garantir a perfeição absoluta.</p>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] flex items-center justify-center">
              <div className="w-full h-full">
                <img 
                  src="https://i.postimg.cc/fRD2zKtQ/Sem-Titulo-1.png" 
                  alt="Destaque Lannati" 
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-all duration-1000 shadow-none border-none outline-none"
                  style={{ filter: 'drop-shadow(0 0 0 transparent)' }}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-16 md:gap-24 text-center lg:text-left order-3">
            <div>
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase">Ingredientes premium</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-left [hyphens:auto]">Selecionamos apenas matérias-primas de excelência para entregar um sabor inigualável em cada mordida.</p>
            </div>
            <div>
              <h3 className="font-title-standard text-3xl md:text-4xl text-gold mb-4 md:mb-6 tracking-normal lowercase first-letter:uppercase">Experiência exclusiva</h3>
              <p className="font-body-standard text-cream/50 text-xl md:text-2xl font-light leading-relaxed w-full text-justify md:text-center lg:text-left [hyphens:auto]">Mais do que um doce, entregamos um momento de prazer e sofisticação em cada pedido realizado.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 translate-y-[99.8%]">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="block w-full h-[100px] md:h-[150px] text-bordeaux fill-current"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;