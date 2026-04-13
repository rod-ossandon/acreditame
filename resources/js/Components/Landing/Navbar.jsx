import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import lalbLogo from '../../assets/LALB.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efecto de cambio de fondo al scrollear
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animación de entrada con GSAP
    useEffect(() => {
        gsap.from(".nav-item", {
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.5
        });
    }, []);

    const navLinks = [
        { name: 'Nosotros', href: '#nosotros' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Contacto', href: '#contacto' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
                scrolled ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'
            }`}
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO AREA */}
                <Link href="/" className="nav-item flex items-center gap-4 group">
                    <img
                        src={lalbLogo}
                        alt="Logo"
                        className="w-8 md:w-10 h-auto drop-shadow-[0_0_10px_rgba(234,179,8,0.3)] group-hover:rotate-12 transition-transform duration-500"
                    />
                    <span className="font-goldman text-white text-lg md:text-xl font-black tracking-tighter uppercase">
                        ACREDI<span className="text-yellow-500 italic">TAME</span>
                    </span>
                </Link>

                {/* DESKTOP NAV LINKS */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-item font-goldman text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-yellow-500 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-yellow-500 transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}

                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu className="text-yellow-500" />}
                </button>
            </div>

            {/* MOBILE OVERLAY MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 h-screen bg-black/95 backdrop-blur-2xl z-[110] flex flex-col items-center justify-center lg:hidden"
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                    className="font-goldman text-3xl uppercase text-white hover:text-yellow-500 transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-12 flex flex-col items-center gap-4"
                            >
                                <div className="w-12 h-[1px] bg-yellow-500/50" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
