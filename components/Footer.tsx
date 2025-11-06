import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purplish-black text-soft-gold py-8">
      <div className="container mx-auto px-6 text-center text-sm font-sans">
        <p>© 2025 – Agenor Junio Rocha – Advogado | Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-gold transition-colors mx-2">Termos de Uso</a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-gold transition-colors mx-2">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;