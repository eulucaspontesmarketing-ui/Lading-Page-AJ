import React from 'react';

// !!! IMPORTANT: Replace this with your actual Google Sheet ID !!!
const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_PLANILHA';
const googleSheetUrl = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit?usp=sharing`;

const Footer: React.FC = () => {
  return (
    <>
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
      <a
        href={googleSheetUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Ver Cadastros"
        className="fixed bottom-5 right-5 z-50 bg-purplish-black text-gold text-3xl w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:bg-dark-brown hover:scale-110"
        style={{ textShadow: '0 2px 4px rgba(202, 164, 95, 0.5)' }}
      >
        🛡️
      </a>
    </>
  );
};

export default Footer;
