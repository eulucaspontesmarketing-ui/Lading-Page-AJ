import React from 'react';

const ContactForm: React.FC = () => {
  const phoneNumber = '5592987654321'; // Exemplo de número de telefone para Manaus, Brasil
  const message = encodeURIComponent('Olá, Dr. Agenor. Encontrei seu site e gostaria de agendar uma consulta.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-4">
            Fale com o Escritório
          </h2>
          <p className="font-sans text-base md:text-lg text-purplish-black/80 mb-12">
            Clique no botão abaixo para iniciar uma conversa via WhatsApp e agendar sua consulta. O atendimento é rápido e direto com o advogado.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-block bg-gold text-purplish-black font-bold py-4 px-12 rounded-lg text-lg uppercase tracking-wider hover:bg-soft-gold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            FALAR VIA WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;