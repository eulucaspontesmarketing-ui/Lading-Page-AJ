import React, { useState } from 'react';
import type { Submission } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import SubmissionsModal from './components/SubmissionsModal';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-4">
            Onde Estamos
          </h2>
          <p className="font-sans text-base md:text-lg text-purplish-black/80 mb-12">
            Nosso escritório está de portas abertas para receber você.
          </p>
        </div>
        <div className="max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.847146480579!2d-59.9970896852424!3d-3.13620899772396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b0f1a2b3c4d%3A0x5a6f6c7b8d9e0f1a!2sR.%20Herm%C3%ADnio%20Barbosa%2C%2023%20-%20Morro%20da%20Liberdade%2C%20Manaus%20-%20AM%2C%2069074-680!5e0!3m2!1spt-BR!2sbr!4v1627885012345!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="350" 
            style={{ border:0, borderRadius: '12px' }} 
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addSubmission = (submission: Omit<Submission, 'id' | 'date'>) => {
    const newSubmission: Submission = {
      ...submission,
      id: new Date().toISOString(),
      date: new Date().toLocaleString('pt-BR'),
    };
    setSubmissions(prev => [newSubmission, ...prev]);
  };

  return (
    <div className="bg-white text-purplish-black font-sans">
      <Header />
      <main>
        <Hero />
        <Commitment />
        <About />
        <PracticeAreas />
        <Testimonials />
        <ContactForm onFormSubmit={addSubmission} />
        <Faq />
        <Location />
      </main>
      <Footer onShieldClick={() => setIsModalOpen(true)} />
      <SubmissionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        submissions={submissions}
      />
    </div>
  );
};

export default App;