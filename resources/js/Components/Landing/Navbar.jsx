import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronDown, BarChart3, Contact, Box, Wrench, Cctv, Network, Fingerprint } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logonegro.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const navLinkClass = "text-[13px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-yellow-500 transition-all duration-300 cursor-pointer flex items-center gap-2 outline-none";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    };

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            window.location.href = `/#${id}`;
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            closeMenu();
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            window.history.pushState(null, '', `/#${id}`);
        }
    };

    // 1. Agregamos el "slug" que coincide con el controlador de Laravel
    const serviceItems = [
        { name: 'Consultoría Estratégica', icon: <BarChart3 size={16} />, slug: 'consultoria-estrategica' },
        { name: 'Credenciales', icon: <Contact size={16} />, slug: 'credenciales' },
        { name: 'Merchandising', icon: <Box size={16} />, slug: 'merchandising' },
        { name: 'Soporte Técnico', icon: <Wrench size={16} />, slug: 'soporte-tecnico' },
        { name: 'Seguridad', icon: <Cctv size={16} />, slug: 'seguridad' },
        { name: 'Telecomunicacion', icon: <Network size={16} />, slug: 'telecomunicaciones' },
        { name: 'Ciberseguridad', icon: <Fingerprint size={16} />, slug: 'ciberseguridad' },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-black/95 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* --- LOGO --- */}
                    <Link href="/" className="flex items-center gap-4 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <motion.img whileTap={{ scale: 0.95 }} src={logo} alt="Logo" className="h-9 md:h-11 w-auto invert transition-transform group-hover:scale-105" />
                        <span className="font-['Syncopate'] font-goldman text-white tracking-[0.3em] text-xs md:text-sm hidden sm:block group-hover:text-yellow-500 transition-colors">ACREDITAME</span>
                    </Link>

                    {/* --- MENÚ DESKTOP --- */}
                    <div className="hidden lg:flex items-center gap-10">
                        <DesktopLink onClick={(e) => handleScrollTo(e, 'inicio')} label="Inicio" />
                        <DesktopLink onClick={(e) => handleScrollTo(e, 'nosotros')} label="Nosotros" />

                        <div className="relative group py-2" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                            <motion.a href="#servicios" onClick={(e) => handleScrollTo(e, 'servicios')} whileTap={{ scale: 0.97 }} className={navLinkClass}>
                                Servicios
                                <ChevronDown size={16} className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180 text-yellow-500' : ''}`} />
                            </motion.a>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.98 }} className="absolute top-full -left-6 w-64 bg-zinc-950/98 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl mt-2">
                                        {serviceItems.map((item, i) => (
                                            <Link
                                                key={i}
                                                href={`/servicios/${item.slug}`}
                                                onClick={closeMenu}
                                                className="flex items-center gap-4 px-4 py-4 rounded-xl text-[10px] uppercase font-black tracking-widest text-zinc-400 hover:text-white hover:bg-yellow-500/10 transition-all"
                                            >
                                                <span className="text-yellow-500">{item.icon}</span>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <DesktopLink onClick={(e) => handleScrollTo(e, 'contacto')} label="Contacto" />
                    </div>

                    <div className="flex items-center gap-8">
                        <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MENÚ MÓVIL --- */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/98 backdrop-blur-3xl lg:hidden flex flex-col p-8 pt-28 overflow-y-auto">
                        <div className="flex flex-col space-y-6">
                            <MobileLink onClick={(e) => handleScrollTo(e, 'inicio')}>Inicio</MobileLink>
                            <MobileLink onClick={(e) => handleScrollTo(e, 'nosotros')}>Nosotros</MobileLink>

                            <div className="py-2">
                                <MobileLink onClick={(e) => handleScrollTo(e, 'servicios')} active>Servicios</MobileLink>
                                <div className="grid grid-cols-1 gap-4 mt-6 ml-4 border-l border-white/10 pl-6">
                                    {serviceItems.map((item, i) => (
                                        <Link
                                            key={i}
                                            href={`/servicios/${item.slug}`}
                                            onClick={closeMenu}
                                            className="text-sm font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-3 active:text-white"
                                        >
                                            <span className="text-yellow-500/50">{item.icon}</span>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <MobileLink onClick={(e) => handleScrollTo(e, 'contacto')}>Contacto</MobileLink>
                        </div>

                        <div className="mt-auto pb-10 pt-10 border-t border-white/10">
                            <Link href="/terminos" onClick={closeMenu} className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em] mb-8 block text-center">Terminos</Link>
                            <button onClick={(e) => handleScrollTo(e, 'contacto')} className="w-full py-5 bg-yellow-500 text-black font-black uppercase tracking-widest text-center rounded-xl">Cotizar Ahora</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{ __html: `.mobile-main-link { font-family: 'Syncopate', sans-serif; font-weight: 900; text-transform: uppercase; font-size: clamp(1.4rem, 8vw, 2.2rem); color: white; letter-spacing: -0.02em; transition: all 0.3s ease; }` }} />
        </>
    );
}

const DesktopLink = ({ onClick, label }) => (
    <motion.a href="#" onClick={onClick} whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} className="text-[14px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-yellow-500 transition-all duration-300 outline-none">
        {label}
    </motion.a>
);

const MobileLink = ({ onClick, children, active = false }) => (
    <motion.a href="#" onClick={onClick} whileTap={{ scale: 0.98 }} className={`mobile-main-link ${active ? 'text-yellow-500' : 'text-white'}`}>
        {children}
    </motion.a>
);
