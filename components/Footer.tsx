import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#home" className="inline-block">
              <h3 className="font-serif text-2xl font-bold text-white hover:text-brand-400 transition-colors">
                Vargas Turismo
              </h3>
            </a>
            <p className="text-sm leading-relaxed">
              Vargas Turismo e Taxi Aéreo. Agência localizada em Porto Alegre-RS, conectando você aos melhores destinos do mundo desde 2017.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors hover:-translate-y-1 transform duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-500 mt-1" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase">WhatsApp</span>
                  <a href="https://wa.me/5562999542389" className="hover:text-white transition-colors">+55 (62) 99954-2389</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-500 mt-1" />
                <div>
                  <span className="block text-xs text-slate-500 uppercase">Telefone</span>
                  <a href="tel:+5584988760317" className="hover:text-white transition-colors">+55 (84) 98876-0317</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-500 mt-1" />
                <div>
                   <span className="block text-xs text-slate-500 uppercase">Email</span>
                  <a href="mailto:ag.vargasturismo@gmail.com" className="hover:text-white transition-colors break-all">ag.vargasturismo@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-brand-500 transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-brand-500 transition-colors">Quem Somos</a></li>
              <li><a href="#services" className="hover:text-brand-500 transition-colors">Serviços</a></li>
              <li><a href="#features" className="hover:text-brand-500 transition-colors">Diferenciais</a></li>
            </ul>
          </div>

          {/* Legal/Location */}
          <div className="space-y-6">
             <h4 className="font-bold text-white text-lg">Localização</h4>
             <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 mt-1" />
                <p>Porto Alegre - RS<br/>Atendemos todo o Brasil</p>
             </div>
             <div className="pt-4 border-t border-slate-800">
               <p className="text-xs text-slate-500">
                 CNPJ: 56.440.108/0001-50
               </p>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vargas Turismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};