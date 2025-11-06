import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.postimg.cc/YqpLK4Kj/premium-photo-1698084059560-9a53de7b816b.jpg')" }}></div>
      <div className="absolute inset-0 bg-purplish-black/70"></div>
      
      <div className="relative z-10 text-center px-6 animate-fade-in w-full max-w-5xl mx-auto flex flex-col items-center">
        <img 
          src="https://i.postimg.cc/D0sz1Tb9/Design-sem-nome-11-removebg-preview.png" 
          alt="Agenor Junio Rocha Advocacia Logo" 
          className="mx-auto mb-10 -mt-20 w-48 md:w-64" 
        />
        <div className="w-full max-w-3xl flex items-start">
          <div className="relative pl-6 border-l-2 border-gold/80 text-left">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow">
              Defesa e Justiça para Quem Precisa Ser Ouvido.
            </h1>
            <p className="font-sans text-lg md:text-xl max-w-3xl mb-8 text-shadow-sm">
              Atuação sólida em Direito Civil e do Consumidor, com foco em resultados reais e atendimento humano.
            </p>
            <a 
              href="#contato" 
              className="inline-block bg-gold text-purplish-black font-bold py-3 px-8 rounded-lg text-lg uppercase tracking-wider hover:bg-soft-gold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              FALAR COM O ADVOGADO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;