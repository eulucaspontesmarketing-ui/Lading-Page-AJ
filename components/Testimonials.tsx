import React from 'react';

const testimonialsData = [
  {
    quote: "Fui muito bem atendida! O Dr. Agenor me explicou tudo com clareza e resolveu meu caso em poucos dias. Recomendo de olhos fechados.",
    author: "Carla Mendes, consumidora",
  },
  {
    quote: "Profissional ético e transparente. Conseguiu um acordo excelente no meu processo civil. Muito satisfeito com o resultado.",
    author: "José Roberto, empresário",
  },
  {
    quote: "O atendimento foi rápido e humano. Me senti segura durante todo o processo.",
    author: "Maria Eduarda, professora",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-4">
            O que dizem nossos clientes
          </h2>
          <p className="font-sans text-base md:text-lg text-purplish-black/80 mb-16">
            Veja o que pessoas que já confiaram no Dr. Agenor dizem sobre o atendimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="font-sans text-purplish-black/90 italic mb-6">
                “{testimonial.quote}”
              </p>
              <p className="font-sans font-semibold text-right text-dark-brown">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;