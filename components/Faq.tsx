import React, { useState } from 'react';

const faqData = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'O primeiro contato serve para entender seu caso e indicar o melhor caminho jurídico.',
  },
  {
    question: 'O escritório atende online?',
    answer: 'Sim! Atendemos clientes de todo o Brasil de forma segura e prática.',
  },
  {
    question: 'Como saber se meu caso é de Direito do Consumidor?',
    answer: 'Basta nos contar o que aconteceu — analisamos e orientamos sem compromisso.',
  },
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-1"
      >
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-sans font-semibold text-lg text-purplish-black">{item.question}</h3>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="font-sans text-purplish-black/80 pb-5 pl-10">{item.answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-12 text-center">
            Dúvidas Frequentes
          </h2>
          <div>
            {faqData.map((item, index) => (
              <FaqItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;