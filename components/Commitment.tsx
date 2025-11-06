import React from 'react';

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 01-4.134-4.134 3.75 3.75 0 014.134-4.134 3.75 3.75 0 014.134 4.134 3.75 3.75 0 01-4.134 4.134zM12 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a9.094 9.094 0 01-3.741-.479 3 3 0 01-4.682-2.72m7.5-2.962a3.75 3.75 0 004.134-4.134 3.75 3.75 0 00-4.134-4.134 3.75 3.75 0 00-4.134 4.134 3.75 3.75 0 004.134 4.134z" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);


const pillars = [
  { icon: <UserGroupIcon />, text: 'Atendimento humanizado' },
  { icon: <TargetIcon />, text: 'Estratégia técnica e personalizada' },
  { icon: <SearchIcon />, text: 'Transparência em cada etapa' },
  { icon: <BookIcon />, text: 'Experiência em múltiplas áreas' },
];

const Commitment: React.FC = () => {
  return (
    <section id="compromisso" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-purplish-black font-bold mb-6">
            Compromisso com a <span className="text-gold">Justiça</span>. Dedicação com o <span className="text-gold">Cliente</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-center space-x-4">
              {pillar.icon}
              <p className="font-sans font-semibold text-lg text-purplish-black text-left">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;