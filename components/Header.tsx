import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#compromisso', label: 'Compromisso' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#atuacao', label: 'Atuação' },
    { href: '#contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-purplish-black/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#inicio" className="flex items-center space-x-2">
          <img src="https://i.postimg.cc/D0sz1Tb9/Design-sem-nome-11-removebg-preview.png" alt="Logo Agenor Junio Rocha" className="h-10 w-auto" />
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white hover:text-gold transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <nav className="flex flex-col items-center space-y-4 py-4 bg-purplish-black/95">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-lg hover:text-gold transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;