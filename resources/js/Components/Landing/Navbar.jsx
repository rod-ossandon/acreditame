import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${scrolled ? 'w-[85%] md:w-[60%]' : 'w-[95%] md:w-[80%]'}`}>
            <div className="backdrop-blur-2xl bg-black/80 border border-yellow-500/20 rounded-full px-10 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(0,0,0,0.5)]">

                {/* Logo Minimalista Dorado */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="w-5 h-5 border border-yellow-500 flex items-center justify-center rotate-45 group-hover:bg-yellow-500 transition-all duration-500">
                        <div className="w-1.5 h-1.5 bg-yellow-500 group-hover:bg-black" />
                    </div>
                    <span className="font-['Syncopate'] font-bold text-white tracking-[0.3em] text-[11px]">ACREDITAME</span>
                </div>

                {/* Enlaces con hover Dorado */}
                <div className="hidden md:flex items-center gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-white/40">
                    <a href="#nosotros" className="hover:text-yellow-500 transition-colors">Nosotros</a>
                    <a href="#servicios" className="hover:text-yellow-500 transition-colors">Servicios</a>
                    <a href="#contacto" className="hover:text-yellow-500 transition-colors">Contacto</a>
                </div>

                <button className="px-6 py-2 bg-transparent border border-yellow-500/50 text-yellow-500 text-[9px] font-black uppercase tracking-widest rounded-full hover:bg-yellow-500 hover:text-black transition-all">
                    Cotizar Proyecto
                </button>
            </div>
        </nav>
    );
}
