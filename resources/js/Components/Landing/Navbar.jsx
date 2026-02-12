import React, { useState, useEffect } from 'react';
import logoImage from '@/assets/LALB.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            setIsMobileMenuOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
                ${scrolled || isMobileMenuOpen
                    ? 'py-3 bg-[#000000]/90 backdrop-blur-lg border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
                    : 'py-6 bg-transparent border-b border-transparent'
                }
            `}
        >
            <div className="px-6 md:px-12 w-full flex justify-between items-center">

                <a href="/" className="flex items-center gap-4 group cursor-pointer relative z-50">
                    <div className={`relative flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-16 h-16' : 'w-24 h-24'}`}>
                        <div className="absolute inset-0 bg-gold-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                            src={logoImage}
                            alt="Logo Acreditame"
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                         <div className="absolute inset-0 flex items-center justify-center" id="logo-fallback">
                            <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">🌟</span>
                        </div>
                    </div>

                    <div className={`flex flex-col justify-center transition-opacity duration-300 ${scrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
                        <span className={`font-bold font-wide text-white tracking-widest leading-none group-hover:text-gold-primary transition-colors drop-shadow-md ${scrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
                            ACREDITAME
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono tracking-[0.3em] uppercase mt-1">
                            Solutions
                        </span>
                    </div>
                </a>

                <div className={`hidden md:flex items-center gap-1 px-2 py-2 rounded-full border shadow-lg shadow-gold-primary/10 transition-all duration-500
                    ${scrolled
                        ? 'bg-black/40 border-white/10 backdrop-blur-md'
                        : 'bg-[#030308]/50 border-white/5 backdrop-blur-sm'
                    }
                `}>
                    <NavLink onClick={(e) => scrollToSection(e, '#hero')} href="#hero">Inicio</NavLink>
                    <NavLink onClick={(e) => scrollToSection(e, '#nosotros')} href="#nosotros">Nosotros</NavLink>
                    <NavLink onClick={(e) => scrollToSection(e, '#servicios')} href="#servicios">Servicios</NavLink>
                    <NavLink onClick={(e) => scrollToSection(e, '#resultados')} href="#resultados">Resultados</NavLink>
                    <NavLink onClick={(e) => scrollToSection(e, '#contacto')} href="#contacto">Contacto</NavLink>
                </div>

                <button
                    onClick={(e) => scrollToSection(e, '#contacto')}
                    className="hidden md:block group relative px-6 py-2.5 overflow-hidden rounded-sm border border-white/10 bg-transparent text-xs font-wide font-bold uppercase tracking-widest text-white transition-all hover:border-gold-primary hover:text-gold-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                    <span className="relative z-10">Cotizar</span>
                    <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white p-2 relative z-50 focus:outline-none"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-8 h-8 text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>

            <div className={`
                absolute top-0 left-0 w-full h-screen bg-[#030308] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
            `}>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-primary/10 rounded-full blur-[100px]"></div>

                <MobileLink onClick={(e) => scrollToSection(e, '#hero')} href="#hero">Inicio</MobileLink>
                <MobileLink onClick={(e) => scrollToSection(e, '#nosotros')} href="#nosotros">Nosotros</MobileLink>
                <MobileLink onClick={(e) => scrollToSection(e, '#servicios')} href="#servicios">Servicios</MobileLink>
                <MobileLink onClick={(e) => scrollToSection(e, '#resultados')} href="#resultados">Resultados</MobileLink>
                <MobileLink onClick={(e) => scrollToSection(e, '#contacto')} href="#contacto">Contacto</MobileLink>

                <button
                    onClick={(e) => scrollToSection(e, '#contacto')}
                    className="mt-8 px-10 py-4 bg-gradient-to-r from-gold-primary to-gold-secondary text-white font-bold uppercase tracking-widest rounded shadow-lg shadow-gold-primary/20"
                >
                    Cotizar Ahora
                </button>
            </div>

        </nav>
    );
}

// Componente de enlace para escritorio
const NavLink = ({ href, onClick, children }) => (
    <a
        href={href}
        onClick={onClick}
        className="px-4 lg:px-5 py-2 rounded-full text-[10px] font-wide font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
    >
        {children}
    </a>
);

// Componente de enlace para móvil (Más grande)
const MobileLink = ({ href, onClick, children }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-2xl font-bold font-wide text-white hover:text-gold-primary tracking-widest uppercase transition-colors relative z-10"
    >
        {children}
    </a>
);
