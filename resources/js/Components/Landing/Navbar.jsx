import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react'; // Necesitamos iconos para el menú
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logonegro.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para el menú móvil

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Función para cerrar el menú al hacer clic en un enlace
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <nav className={`fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 w-[95%] ${scrolled ? 'md:w-[60%]' : 'md:w-[80%]'}`}>
                <div className="backdrop-blur-xl bg-black/80 border border-yellow-500/20 rounded-full px-6 md:px-10 py-3 flex items-center justify-between shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-50">

                    {/* --- LOGO --- */}
                    <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
                        <img src={logo} alt="Logo" className="h-6 md:h-8 w-auto invert transition-transform group-hover:scale-110" />
                       {/*  <span className="font-['Syncopate'] font-bold text-white tracking-[0.2em] text-[10px] md:text-[11px] group-hover:text-yellow-500 transition-colors">
                            ACREDITAME
                        </span> */}
                    </Link>

                    {/* --- MENÚ DESKTOP (Oculto en móvil) --- */}
                    <div className="hidden md:flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/60">
                        <Link href="/#inicio" className="hover:text-yellow-500 hover:scale-105 transition-all">INICIO</Link>
                        <Link href="/#nosotros" className="hover:text-yellow-500 hover:scale-105 transition-all">Nosotros</Link>
                        <Link href="/#servicios" className="hover:text-yellow-500 hover:scale-105 transition-all">Servicios</Link>
                        <Link href="/#contacto" className="hover:text-yellow-500 hover:scale-105 transition-all">Contacto</Link>
                    </div>

                    {/* --- BOTÓN Y HAMBURGUESA --- */}
                    <div className="flex items-center gap-4">
                        {/* Botón Cotizar (Visible siempre, pero más pequeño en móvil) */}
                        <Link
                            href="/#contacto"
                            className={`
                                hidden sm:block px-4 py-2 bg-transparent border border-yellow-500/50 text-yellow-500 text-[9px] font-black uppercase tracking-widest rounded-full
                                hover:bg-yellow-500 hover:text-black transition-all
                            `}
                        >
                            Cotizar
                        </Link>

                        {/* Botón Hamburguesa (Solo móvil) */}
                        <button
                            className="md:hidden text-white hover:text-yellow-500 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MENÚ MÓVIL (OVERLAY) --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8"
                    >
                        {/* Enlaces Gigantes para dedo */}
                        <MobileLink href="/#inicio" onClick={closeMenu}>Inicio</MobileLink>
                        <MobileLink href="/#nosotros" onClick={closeMenu}>Nosotros</MobileLink>
                        <MobileLink href="/#servicios" onClick={closeMenu}>Servicios</MobileLink>
                        <MobileLink href="/terminos" onClick={closeMenu}>Legal</MobileLink>

                        <div className="w-12 h-[1px] bg-yellow-500/30 my-8"></div>

                        <Link
                            href="/#contacto"
                            onClick={closeMenu}
                            className="px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest text-sm rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                        >
                            Cotizar Proyecto
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Componente auxiliar para enlaces móviles
const MobileLink = ({ href, children, onClick }) => (
    <Link
        href={href}
        onClick={onClick}
        className="text-2xl font-black uppercase tracking-widest text-white/80 hover:text-yellow-500 transition-colors"
    >
        {children}
    </Link>
);
