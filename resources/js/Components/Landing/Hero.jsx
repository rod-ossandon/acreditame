import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const itemVariants = {
        hidden: { opacity: 0, y: 15 }, // Cambiamos x por y para un slide-up más limpio en móvil
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const handleScrollTo = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            window.history.pushState(null, '', `/#${id}`);
        }
    };

    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center bg-transparent select-none overflow-hidden font-sans" id='inicio'>

            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(234,179,8,0.08)_0%,_transparent_50%)]" />

            {/* Ajustamos el padding superior e inferior para pantallas cortas */}
            <div className="relative z-10 w-full max-w-[1600px] px-6 sm:px-12 md:px-20 py-12 md:py-0">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>

                            <motion.h2 variants={itemVariants} className="font-sans text-[10px] sm:text-xs tracking-[0.4em] text-white/50 uppercase mb-3">
                                /// BIENVENIDO A
                            </motion.h2>

                            {/* Título responsivo dinámico (vw) para evitar que rompa en móviles pequeños */}
                            <motion.h1 variants={itemVariants} className="font-goldman text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase text-white mb-4 leading-[0.9]">
                                ACREDI<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">TAME</span>
                            </motion.h1>

                            <motion.p variants={itemVariants} className="text-yellow-500 font-bold text-[9px] sm:text-xs tracking-[0.2em] uppercase mb-6">
                                ¡IMPULSA TU INDUSTRIA AL SIGUIENTE NIVEL!
                            </motion.p>

                            {/* Subimos el tamaño de text-xs para legibilidad en móvil */}
                            <motion.p variants={itemVariants} className="text-white/60 text-xs sm:text-sm md:text-base tracking-wide leading-relaxed max-w-sm mb-10 mx-auto lg:mx-0 font-light">
                                Descubre cómo nuestras soluciones innovadoras y productos de calidad pueden <span className="text-white font-bold">revolucionar</span> tu negocio.
                            </motion.p>

                            {/* Botones con gap ajustado y py-4 para no ocupar toda la pantalla vertical */}
                            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 w-full sm:w-auto">
                                <button
                                    onClick={(e) => handleScrollTo(e, 'contacto')}
                                    className="w-full sm:w-auto px-8 py-4 bg-[#eab308] text-black font-black text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-white transition-all transform active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                                >
                                    Comenzar Ahora
                                </button>
                                <button
                                    onClick={(e) => handleScrollTo(e, 'servicios')}
                                    className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold text-[11px] tracking-[0.2em] uppercase rounded-sm hover:bg-white/5 transition-all backdrop-blur-sm active:scale-95"
                                >
                                    Explorar Soluciones
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Ocultamos el indicador de desplaza en móviles muy pequeños para dar espacio a los botones */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-20">
                <div className="w-[1px] h-10 bg-gradient-to-b from-yellow-500 to-transparent" />
                <span className="text-[8px] tracking-[0.6em] uppercase font-mono text-yellow-500">Desplaza</span>
            </div>
        </section>
    );
}
