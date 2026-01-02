import React from 'react';

const products = [
  { 
    id: 1, 
    title: "Tradicional", 
    description: "Nosso clássico absoluto. Elaborado com o mais puro chocolate belga 50% cacau e finalizado com granulado gourmet que derrete delicadamente na boca a cada mordida.", 
    image: "https://i.postimg.cc/xqrdtzL0/Tradicional.png" 
  },
  { 
    id: 2, 
    title: "Gourmet", 
    description: "O equilíbrio sublime entre a suavidade do leite Ninho premium e um recheio generoso da legítima Nutella, resultando em uma cremosidade incomparável.", 
    image: "https://i.postimg.cc/66MgnKt4/ferrero-site.png" 
  },
  { 
    id: 3, 
    title: "Personalizados", 
    description: "Transformamos seus sonhos em arte comestível. Doces e bolos exclusivos desenvolvidos sob medida para celebrar as datas e conquistas mais importantes da sua vida.", 
    image: "https://i.postimg.cc/mrTK7gz0/Personalizado.png" 
  }
];

const ProductSection: React.FC = () => {
  return (
    <section id="products-section" className="pt-[180px] pb-48 md:pt-48 md:pb-72 bg-gold relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Título da Seção - Com respiro milimétrico final solicitado para mobile */}
        <div className="text-center mb-16 md:mb-32">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-bordeaux tracking-tight leading-[1.2] flex flex-col items-center">
            <div className="flex flex-col md:hidden items-center text-center">
              <span className="flex items-baseline gap-x-2">
                <span className="font-serif font-light italic">Sinta a</span>
                <span className="font-title font-bold">diferença</span>
              </span>
              <span className="font-title font-bold">de uma receita</span>
              <span className="font-serif font-light italic">autêntica</span>
            </div>
            
            <div className="hidden md:flex flex-col items-center">
              <span className="flex items-baseline gap-x-3">
                <span className="font-serif font-light italic">Sinta a</span>
                <span className="font-title font-bold">diferença de uma</span>
              </span>
              <span className="flex items-baseline gap-x-3">
                <span className="font-title font-bold">receita</span>
                <span className="font-serif font-light italic">autêntica</span>
              </span>
            </div>
          </h2>
          <div className="w-20 h-px bg-bordeaux/10 mx-auto mt-8 md:mt-12"></div>
        </div>

        <div className="flex flex-col gap-24 md:gap-48">
          {products.map((p, index) => (
            <div 
              key={p.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-32`}
            >
              {/* Container da Imagem */}
              <div className="w-full md:w-[55%]">
                <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-white/5 group shadow-none border-none">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transform transition-transform duration-[2.5s] group-hover:scale-110" 
                  />
                </div>
              </div>

              {/* Bloco de Texto com Alinhamento Fiel à Foto (Desktop) */}
              <div className={`w-full md:w-[45%] flex flex-col text-center ${index % 2 === 0 ? 'md:text-left md:items-start' : 'md:text-right md:items-end'}`}>
                <h3 className="font-title-standard text-3xl md:text-5xl text-bordeaux mb-4 md:mb-8 tracking-tight">
                  {p.title}
                </h3>
                <p className={`font-body-standard text-charcoal/80 text-lg md:text-xl mb-8 md:mb-12 w-full md:max-w-xl font-light leading-relaxed text-justify ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} [hyphens:auto]`}>
                  {p.description}
                </p>
                <a 
                  href="https://wa.me/message/4UTFA7QUPX6PE1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury py-5 px-8 md:py-6 md:px-12 bg-bordeaux text-gold hover:scale-105 transition-all duration-500 shadow-xl shadow-bordeaux/10 w-full sm:w-auto"
                >
                  QUERO ENCOMENDAR AGORA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;