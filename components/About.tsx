import React from 'react';
import { MapPin, Calendar, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://picsum.photos/400/500?random=1" 
              alt="Turista feliz" 
              className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover mt-12"
            />
            <img 
              src="https://picsum.photos/400/500?random=2" 
              alt="Destino turístico" 
              className="rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-brand-600 font-bold uppercase tracking-wide text-sm">Quem Somos</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-900 leading-tight">
              A história de uma paixão que virou referência!
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-lg">
              A <strong>Vargas Turismo</strong> nasceu em 2017 com o ideal de oferecer ao mercado um serviço completo, eficiente e humano. Inspirada pelas vivências do seu fundador <strong>Samuel Vargas</strong>, que já percorreu mais de 40 países e todos os 26 estados brasileiros.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Olhar Plural</h4>
                  <p className="text-slate-500 text-sm">Respeitamos culturas e integramos destinos, promovendo experiências marcantes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Expertise Local e Global</h4>
                  <p className="text-slate-500 text-sm">Atendimento personalizado para viagens de lazer, negócios ou emergenciais.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-lg text-brand-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Desde 2017</h4>
                  <p className="text-slate-500 text-sm">Anos de dedicação ajudando famílias a realizar sonhos.</p>
                </div>
              </div>
            </div>
            
            <p className="italic text-slate-500 border-l-4 border-brand-200 pl-4 mt-6">
              "Nosso objetivo é inspirá-lo(a) a viajar mais, com segurança, qualidade e preços que cabem no seu bolso."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};