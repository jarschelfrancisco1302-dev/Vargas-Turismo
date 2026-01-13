import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5562999542389"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
    </a>
  );
};