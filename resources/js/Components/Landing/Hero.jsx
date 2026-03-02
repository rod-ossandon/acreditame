import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Función de Scroll Sutil para los botones
    const handleScrollTo = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);

        if (element) {
            const offset = 80; // Margen para el Navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Actualiza la URL suavemente
            window.history.pushState(null, '', `/#${id}`);
        }
    };

    return (
        <section className="relative h-screen w-full flex items-center justify-center bg-transparent select-none overflow-hidden font-sans" id='inicio'>

            {/* GRADIENTE DE FONDO */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(234,179,8,0.05)_0%,_transparent_50%)]" />

            <div className="relative z-10 w-full max-w-[1600px] px-6 md:px-20 grid grid-cols-12 items-center gap-8">

                <div className="col-span-12 lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>

                        <motion.h2 variants={itemVariants} className="font-sans text-xs md:text-base tracking-[0.5em] text-white/50 uppercase mb-2">
                            BIENVENIDO A
                        </motion.h2>

                        <motion.h1 variants={itemVariants} className="font-['Syncopate'] text-3xl sm:text-4xl md:text-7xl font-black tracking-[-0.04em] uppercase text-white mb-6 leading-tight">
                            ACREDI<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">TAME</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-yellow-500 font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase mb-4">
                            ¡IMPULSA TU INDUSTRIA AL SIGUIENTE NIVEL!
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-white/60 text-[10px] md:text-xs tracking-wider leading-relaxed max-w-sm mb-10 mx-auto lg:mx-0">
                            Descubre cómo nuestras soluciones innovadoras y productos de calidad pueden <span className="text-white font-bold">revolucionar</span> tu negocio.
                        </motion.p>

                        {/* --- BOTONES CON ACCIÓN --- */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pointer-events-auto w-full sm:w-auto">

                            {/* Comenzar Ahora -> Contacto */}
                            <button
                                onClick={(e) => handleScrollTo(e, 'contacto')}
                                className="px-8 py-4 lg:py-3 bg-[#eab308] text-black font-black text-[10px] tracking-[0.2em] uppercase rounded-sm hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                            >
                                Comenzar Ahora
                            </button>

                            {/* Explorar Soluciones -> Servicios */}
                            <button
                                onClick={(e) => handleScrollTo(e, 'servicios')}
                                className="px-8 py-4 lg:py-3 border border-white/20 text-white font-bold text-[10px] tracking-[0.2em] uppercase rounded-sm hover:bg-white/5 transition-all backdrop-blur-sm"
                            >
                                Explorar Soluciones
                            </button>

                        </motion.div>
                    </motion.div>
                </div>

                <div className="hidden lg:block lg:col-span-2" />
                <div className="hidden lg:flex lg:col-span-5 justify-end" />

            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <div className="w-[1px] h-10 bg-gradient-to-b from-yellow-500 to-transparent" />
                <span className="text-[7px] tracking-[0.8em] uppercase font-mono text-yellow-500">Desplaza</span>
            </div>

        </section>
    );
}
