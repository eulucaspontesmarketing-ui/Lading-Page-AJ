import React from 'react';

const UserGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 01-12.022 0m12.022 0L20.5 5.63m-4.91 8.74a6 6 0 01-7.38 5.84m2.56-5.84L5.63 20.5m8.74-4.91a12.022 12.022 0 010-12.022m0 12.022L5.63 5.63m13.24 13.24L14.37 8.41" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
              <div className="flex-shrink-0">{pillar.icon}</div>
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