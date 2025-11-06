import React from 'react';

interface FooterProps {
  onShieldClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShieldClick }) => {
  return (
    <footer className="bg-purplish-black text-soft-gold py-8">
      <div className="container mx-auto px-6 text-center text-sm font-sans">
        <p>© 2025 – Agenor Junio Rocha – Advogado | Todos os direitos reservados.</p>
        <div className="mt-4">
          <a href="#" className="hover:text-gold transition-colors mx-2">Termos de Uso</a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-gold transition-colors mx-2">Política de Privacidade</a>
        </div>
        <div className="mt-6">
          <button
            onClick={onShieldClick}
            className="text-2xl hover:opacity-80 transition-opacity"
            aria-label="Ver cadastros"
          >
            🛡️
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;