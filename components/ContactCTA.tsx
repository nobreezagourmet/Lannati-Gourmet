import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="relative pt-12 md:pt-40 pb-48 md:pb-64 bg-gold z-10">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-bordeaux tracking-tight leading-[1.1] mb-20 max-w-5xl mx-auto flex flex-col items-center">
            <span className="flex justify-center items-baseline flex-wrap gap-x-4">
              <span className="font-serif font-light italic">Adoce</span>
              <span className="font-title font-bold">seus momentos especiais</span>
            </span>
            <span className="flex justify-center items-baseline flex-wrap gap-x-4">
              <span className="font-title font-bold">com nossas</span>
              <span className="font-serif font-light italic">delícias artesanais</span>
            </span>
          </h2>

          <a 
            href="https://wa.me/message/4UTFA7QUPX6PE1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury bg-bordeaux text-gold py-10 px-12 md:px-20 text-xl md:text-2xl hover:scale-105 transition-all duration-700 shadow-2xl shadow-bordeaux/20"
          >
            ENCOMENDAR PELO WHATSAPP AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;