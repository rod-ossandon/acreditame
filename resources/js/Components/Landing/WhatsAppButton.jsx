import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const phoneNumber = "56968079113"; // Tu número real
    const message = "Hola Acreditame! Solicito información técnica.";

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[999] group">
            {/* Tooltip HUD con Font Goldman */}
            <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-md border border-yellow-500/30 text-yellow-500 font-goldman text-[9px] px-4 py-2 rounded uppercase tracking-[0.3em] whitespace-nowrap shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    // CONTACTO DIRECTO
                </div>
            </div>

            {/* Botón Principal */}
            <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-yellow-500 text-black rounded-full shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:bg-white hover:scale-110 active:scale-95 transition-all duration-500"
            >
                {/* Efecto de Pulso de Radar (Industrial) */}
                <div className="absolute inset-0 rounded-full bg-yellow-500 animate-ping opacity-20" />

                <MessageCircle size={28} strokeWidth={2.5} className="relative z-10" />
            </a>
        </div>
    );
}
