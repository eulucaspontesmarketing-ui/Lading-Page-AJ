import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-6">
              Compromisso, Ética e Resultados.
            </h2>
            <div className="font-sans text-base md:text-lg text-purplish-black/80 leading-relaxed space-y-4">
              <p>
                Agenor Junio Rocha é advogado especializado em Direito Civil e do Consumidor.
              </p>
              <p>
                Com uma atuação pautada na ética, transparência e dedicação, oferece soluções jurídicas personalizadas, com foco em proteger os direitos e os interesses de seus clientes.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://i.postimg.cc/rmhR9V3T/a7e47fd97936544d1bac9c53048e4f3c.jpg" 
                alt="Imagem estratégica do escritório"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;