import React from 'react';

const ShieldCheckIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const BuildingLibraryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" />
  </svg>
);

const DocumentTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);


const areas = [
  {
    icon: <ShieldCheckIcon />,
    title: 'Direito do Consumidor',
    description: 'Defesa em casos de cobranças indevidas, negativação irregular, vícios em produtos e serviços.',
  },
  {
    icon: <BuildingLibraryIcon />,
    title: 'Direito Civil',
    description: 'Contratos, indenizações, responsabilidade civil, danos morais e materiais.',
  },
  {
    icon: <DocumentTextIcon />,
    title: 'Direito Contratual',
    description: 'Elaboração e revisão de contratos com segurança jurídica.',
  },
];

const PracticeAreas: React.FC = () => {
  return (
    <section id="atuacao" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-4">
          Principais Áreas de Atuação
        </h2>
        <p className="font-sans text-base md:text-lg text-purplish-black/80 max-w-2xl mx-auto mb-12">
          Com experiência sólida e atendimento individualizado, Agenor atua nas seguintes áreas:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.title} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
              <div className="mb-4 text-gold">{area.icon}</div>
              <h3 className="font-serif text-xl font-bold text-purplish-black mb-2">{area.title}</h3>
              <p className="font-sans text-purplish-black/70">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;