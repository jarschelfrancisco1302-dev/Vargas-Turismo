import React, { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#features' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Fecha o menu mobile se estiver aberto
      setIsMobileMenuOpen(false);
      
      // Rola suavemente até o elemento
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-brand-600 text-white group-hover:bg-brand-700' : 'bg-white text-brand-600 group-hover:bg-brand-50'}`}>
              <Plane size={24} />
            </div>
            <div className={`font-serif font-bold text-xl md:text-2xl leading-tight ${isScrolled ? 'text-brand-900' : 'text-white drop-shadow-md'}`}>
              Vargas <span className={isScrolled ? 'text-brand-600' : 'text-brand-100'}>Turismo</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium text-sm hover:underline underline-offset-4 transition-colors cursor-pointer ${
                  isScrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white hover:text-brand-100 drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5562999542389" 
              target="_blank"
              rel="noreferrer"
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-brand-600 text-white hover:bg-brand-700' 
                  : 'bg-white text-brand-800 hover:bg-brand-50'
              }`}
            >
              Fale Conosco
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-current"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-lg md:hidden flex flex-col p-4 animate-fade-in-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 px-4 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-600 rounded-lg cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
             href="https://wa.me/5562999542389"
             target="_blank"
             rel="noreferrer" 
             className="mt-4 w-full bg-brand-600 text-white py-3 rounded-lg text-center font-bold"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </header>
  );
};