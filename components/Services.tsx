import React from 'react';
import { Plane, Bus, Ship, FileText, Briefcase, ShieldCheck, Map, GraduationCap, Car, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Passagens Aéreas",
    description: "Nacionais e internacionais com as melhores tarifas do mercado."
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: "Pacotes Personalizados",
    description: "Roteiros sob medida para seu perfil, orçamento e preferências."
  },
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Transporte Rodoviário",
    description: "Passagens para 100+ destinos, excursões e fretamentos para grupos."
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: "Cruzeiros Marítimos",
    description: "Experiências temáticas e viagens incríveis em alto mar."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Vistos Consulares",
    description: "Consultoria completa, inclusive pedidos no Sistema Consular Integrado."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Seguros de Viagem",
    description: "Viaje tranquilo com cobertura completa para imprevistos."
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Intercâmbios",
    description: "Programas educacionais e culturais para expandir seus horizontes."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Locação de Veículos",
    description: "Carros básicos, executivos e de luxo à sua disposição."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Serviços Corporativos",
    description: "Gestão completa para viagens de negócios da sua empresa."
  }
];

export const Services: React.FC = () => {
  const handleServiceClick = (serviceTitle: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de mais informações sobre ${serviceTitle}.`);
    window.open(`https://wa.me/5562999542389?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wide text-sm mb-3">Nossos Serviços</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Mais de 14 modalidades de serviços integrados
          </h3>
          <p className="text-slate-600">
            Clique em um dos serviços abaixo para falar diretamente com um consultor especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleServiceClick(service.title)}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 hover:border-brand-200 cursor-pointer relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-500 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-brand-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};