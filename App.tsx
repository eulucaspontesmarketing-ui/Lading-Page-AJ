
import React, { useState, useEffect } from 'react';
import type { Submission } from './types';
import Hero from './components/Hero';
import Commitment from './components/Commitment';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Faq from './components/Faq';
import Footer from './components/Footer';
import SubmissionsModal from './components/SubmissionsModal';
import Header from './components/Header';

const STORAGE_KEY = 'formSubmissions';

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
            src="https://www.google.com/maps?q=Rua%20Herminio%20Barbosa%2023%20Morro%20da%20Liberdade%20Manaus&output=embed" 
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
  const [submissions, setSubmissions] = useState<Submission[]>(() => {
    try {
      const storedSubmissions = localStorage.getItem(STORAGE_KEY);
      if (storedSubmissions) {
        const parsedSubmissions: Submission[] = JSON.parse(storedSubmissions);
        const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
        return parsedSubmissions.filter(sub => sub.timestamp > twentyFourHoursAgo);
      }
    } catch (error) {
      console.error("Failed to load submissions from local storage", error);
    }
    return [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
    } catch (error) {
      console.error("Failed to save submissions to local storage", error);
    }
  }, [submissions]);

  const addSubmission = (submission: Omit<Submission, 'id' | 'date' | 'timestamp'>) => {
    const newSubmission: Submission = {
      ...submission,
      id: new Date().toISOString(),
      date: new Date().toLocaleString('pt-BR'),
      timestamp: Date.now(),
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