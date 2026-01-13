import React from 'react';
import { HeartHandshake, PiggyBank, Clock, Star } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-brand-900 text-white relative overflow-hidden scroll-mt-28">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl" />
         <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sky-400 font-bold uppercase tracking-wide text-sm mb-3">Diferenciais</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a Vargas Turismo?
          </h3>
          <p className="text-brand-100 text-lg">
            Cada viagem é única, assim como você. Cuidamos de tudo para que sua única preocupação seja fazer as malas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto bg-sky-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-500/30">
              <Star className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3">100% Personalizado</h4>
            <p className="text-brand-100 text-sm">
              Criamos roteiros sob medida para seu perfil, orçamento e preferências.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto bg-sky-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-500/30">
              <PiggyBank className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3">Economia Garantida</h4>
            <p className="text-brand-100 text-sm">
              Negociações diretas que garantem ofertas que você não encontraria sozinho.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto bg-sky-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-500/30">
              <Clock className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3">Suporte 24h</h4>
            <p className="text-brand-100 text-sm">
              Do primeiro contato até seu retorno, estamos disponíveis para resolver imprevistos.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-14 h-14 mx-auto bg-sky-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-sky-500/30">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3">Experiência Comprovada</h4>
            <p className="text-brand-100 text-sm">
              Expertise local que garante dicas exclusivas e experiências autênticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};