// resources/js/Components/ContactFooter.jsx
import React from 'react';

export default function ContactFooter() {
    return (
        <footer id="contacto" className="relative bg-[#050a1f] pt-20 pb-10 border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">¿Listo para <span className="bg-gradient-to-r from-neon-blue to-neon-purple text-transparent bg-clip-text">Actualizarte?</span></h2>

                <form className="max-w-md mx-auto space-y-4 text-left">
                    <div>
                        <label className="text-gray-400 text-sm ml-1">Correo Electrónico</label>
                        <input type="email" className="w-full mt-1 bg-tech-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-neon-purple focus:border-transparent outline-none transition" placeholder="tu@empresa.com" />
                    </div>
                    <div>
                        <label className="text-gray-400 text-sm ml-1">Mensaje</label>
                        <textarea className="w-full mt-1 bg-tech-bg border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-neon-blue focus:border-transparent outline-none transition h-32" placeholder="Necesito cotizar 50 credenciales..."></textarea>
                    </div>
                    <button className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-lg text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition transform hover:-translate-y-1">
                        ENVIAR MENSAJE
                    </button>
                </form>

                <div className="mt-16 pt-8 border-t border-white/5 text-gray-500 text-sm">
                    © 2024 TechID Solutions. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
