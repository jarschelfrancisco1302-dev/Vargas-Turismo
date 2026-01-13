import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Paisagem de viagem inspiradora" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 to-brand-800/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-100 backdrop-blur-sm text-sm font-medium mb-6 animate-fade-in">
            Grupo Preferencial Vargas Turismo
          </span>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Seu sonho, <br />
            <span className="text-sky-400">nosso destino.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            Inspirando você a viajar mais com segurança, qualidade e preços que cabem no bolso.
            Pacotes nacionais, internacionais e consultoria completa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="https://wa.me/5562999542389"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-500/30 hover:-translate-y-1"
            >
              Planejar Minha Viagem
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold py-4 px-8 rounded-full transition-all duration-300"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>

      {/* Stats/Badge */}
      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-brand-900 to-transparent pt-20 pb-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 justify-center md:justify-end text-white/90">
          <div className="text-center md:text-right">
            <p className="text-3xl font-serif font-bold text-sky-400">500+</p>
            <p className="text-sm uppercase tracking-wider text-gray-300">Famílias atendidas</p>
          </div>
          <div className="text-center md:text-right">
             <p className="text-3xl font-serif font-bold text-sky-400">40+</p>
             <p className="text-sm uppercase tracking-wider text-gray-300">Países explorados</p>
          </div>
        </div>
      </div>
    </section>
  );
};