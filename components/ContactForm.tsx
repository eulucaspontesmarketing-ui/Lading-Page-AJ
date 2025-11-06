import React, { useState } from 'react';

// IMPORTANTE: Substitua pela URL do seu Web App gerado no Google Apps Script.
const GOOGLE_SHEET_WEB_APP_URL = "COLE_AQUI_A_URL_DO_SEU_WEB_APP";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const dataToSend = {
      nome: formData.fullName,
      email: formData.email,
      telefone: formData.phone,
      assunto: formData.subject,
      mensagem: formData.message
    };

    try {
      await fetch(GOOGLE_SHEET_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend)
      });
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error("Erro ao enviar:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const renderStatusMessage = () => {
    switch (status) {
      case 'success':
        return (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md shadow-md max-w-3xl mx-auto text-center" role="alert">
            <p className="font-bold text-lg">✅ Recebemos sua mensagem!</p>
            <p>Em breve entraremos em contato para entender sua necessidade.</p>
          </div>
        );
      case 'error':
        return (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md max-w-3xl mx-auto text-center" role="alert">
            <p className="font-bold text-lg">❌ Erro no envio.</p>
            <p>Não foi possível enviar sua mensagem. Por favor, tente novamente.</p>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-brown font-bold mb-4">
            Fale com o Escritório
          </h2>
          <p className="font-sans text-base md:text-lg text-purplish-black/80 mb-12">
            Preencha o formulário abaixo e receba o retorno diretamente do advogado.
          </p>
        </div>
        
        {status === 'success' || status === 'error' ? renderStatusMessage() : (
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <input type="text" name="fullName" placeholder="Nome Completo" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition" disabled={status === 'sending'} />
            </div>
            <div>
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition" disabled={status === 'sending'} />
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Telefone / WhatsApp" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition" disabled={status === 'sending'} />
            </div>
            <div className="md:col-span-2">
              <input type="text" name="subject" placeholder="Assunto" value={formData.subject} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition" disabled={status === 'sending'} />
            </div>
            <div className="md:col-span-2">
              <textarea name="message" placeholder="Mensagem" value={formData.message} onChange={handleChange} rows={5} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition" disabled={status === 'sending'}></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" disabled={status === 'sending'} className="w-full md:w-auto bg-gold text-purplish-black font-bold py-3 px-12 rounded-lg text-lg uppercase tracking-wider hover:bg-soft-gold hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'sending' ? 'Enviando...' : 'ENVIAR MENSAGEM'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;