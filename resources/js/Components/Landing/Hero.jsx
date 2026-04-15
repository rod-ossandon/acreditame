import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lalbLogo from '../../assets/LALB.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroStory() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const logoRef = useRef(null);
    const aboutRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=350%",
                    pin: true,
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(heroRef.current, {
                opacity: 0,
                y: -100,
                scale: 0.95,
                duration: 1.5
            })
            .to(logoRef.current, {
                top: "50%",
                yPercent: -50,
                // Mantenemos la escala de animación proporcional al nuevo tamaño base
                scale: window.innerWidth < 768 ? 1.5 : 2.2,
                opacity: 1,
                duration: 2.5,
                ease: "power2.inOut"
            }, "-=1.2")
            .to(logoRef.current, {
                opacity: 0.05,
                scale: 1.2,
                filter: "blur(15px)",
                duration: 1.5
            })
            .to(aboutRef.current, {
                opacity: 1,
                y: 0,
                duration: 2,
                pointerEvents: "auto"
            }, "-=1");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative bg-[#050505] overflow-hidden selection:bg-yellow-500 selection:text-black">

            {/* --- FONDO --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(234,179,8,0.04)_0%,_transparent_70%)]" />
                <div className="absolute inset-0 opacity-[0.03] bg-[size:40px_40px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]" />
            </div>

            {/* --- CAPA 1: EL LOGO (AGRANDADO) --- */}
            <div
                ref={logoRef}
                // Ajustamos top-[15%] para que al ser más grande no choque tanto con el título abajo
                className="fixed top-[20%] md:top-[25%] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            >
                <img
                    src={lalbLogo}
                    alt="Logo Acreditame"
                    // CAMBIO: de w-28/w-56 a w-40/w-72 para que sea más imponente
                    className="w-40 md:w-72 h-auto drop-shadow-[0_0_60px_rgba(234,179,8,0.5)]"
                />
            </div>

            {/* --- CAPA 2: HERO --- */}
            <section ref={heroRef} className="relative z-30 h-[100dvh] w-full flex flex-col items-center justify-center pt-20">
                {/* Aumentamos el margen superior (mt-40 / mt-64) para compensar el tamaño del logo */}
                <div className="flex flex-col items-center text-center px-6 mt-32 md:mt-56">

                    <span className="font-sans text-[8px] md:text-[10px] tracking-[0.6em] text-white/40 uppercase mb-8 md:mb-10">
                        /// BIENVENIDO A
                    </span>

                    <h1 className="font-goldman text-[15vw] md:text-8xl lg:text-[11rem] font-black tracking-tighter uppercase text-white leading-[0.8] mb-6 pr-4">
                        ACREDI<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 drop-shadow-[0_10px_30px_rgba(234,179,8,0.4)] italic inline-block">TAME</span>
                    </h1>

                    <p className="font-goldman text-yellow-500 font-bold text-[8px] md:text-xs tracking-[0.3em] uppercase mb-6">
                        ¡IMPULSA TU INDUSTRIA AL SIGUIENTE NIVEL!
                    </p>

                    <p className="font-sans text-white/40 text-[10px] md:text-sm tracking-[0.1em] leading-relaxed max-w-sm mx-auto font-light mb-12">
                        Descubre cómo nuestras soluciones innovadoras y productos de calidad pueden <span className="text-white/70 font-bold underline decoration-yellow-500/50 underline-offset-4">revolucionar</span> tu negocio.
                    </p>

                    <div className="flex flex-col items-center gap-2 opacity-20">
                        <ArrowDown className="w-4 h-4 text-white animate-bounce" />
                    </div>
                </div>
            </section>

            {/* --- CAPA 3: SECCIÓN NOSOTROS --- */}
            <section
                id='nosotros'
                ref={aboutRef}
                className="absolute inset-0 h-[100dvh] w-full flex items-center justify-center z-40 px-3 md:px-10 opacity-0 translate-y-24 pointer-events-none"
            >
                <div className="max-w-[1600px] w-full">
                    <div className="p-6 md:p-20 bg-black/60 backdrop-blur-[40px] border border-white/10 rounded-[2.5rem] md:rounded-[5rem] shadow-[0_0_100px_rgba(0,0,0,0.9)] relative overflow-hidden group">

                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-end justify-between relative z-10">
                            <div className="max-w-4xl">
                                <span className="text-yellow-500 font-mono text-[9px] md:text-[10px] font-black tracking-[0.8em] mb-6 md:mb-10 block uppercase opacity-80 text-left">
                                    /// NOSOTROS
                                </span>

                                <h2 className="font-goldman text-4xl md:text-7xl lg:text-[7.5rem] font-black uppercase text-white tracking-tighter leading-none mb-8 md:mb-12 text-left">
                                    Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 italic">Somos</span>
                                </h2>

                                <div className="space-y-6 md:space-y-10 relative text-left">
                                    <div className="absolute -left-4 md:-left-16 top-0 w-[1px] h-full bg-gradient-to-b from-yellow-500 via-yellow-500/20 to-transparent" />

                                    <p className="font-sans text-white/90 text-lg md:text-4xl leading-snug md:leading-[1.1] font-light tracking-tight">
                                        <strong className="font-goldman text-white italic">Acreditame y Servicios Limitada</strong> fusiona la robustez industrial de <span className="text-yellow-500 font-medium">Antofagasta</span> con el desarrollo de software de vanguardia.
                                    </p>

                                    <p className="font-goldman text-white/30 text-[10px] md:text-sm leading-relaxed md:leading-loose tracking-[0.3em] uppercase border-t border-white/10 pt-6 md:pt-10 max-w-xl">
                                        Optimizamos activos críticos mediante <span className="text-white/60">ingeniería avanzada</span> y visualización 3D.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-4 md:pb-6">
                                <Link
                                    href="/nosotros-detalle"
                                    className="font-goldman group relative flex items-center justify-center gap-6 bg-yellow-500 text-black font-black px-10 md:px-14 py-5 md:py-7 rounded-2xl uppercase text-[10px] md:text-xs tracking-[0.2em] transition-all duration-700 shadow-[0_20px_40px_rgba(234,179,8,0.15)] hover:bg-white"
                                >
                                    <span className="relative z-10">Nosotros</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500 relative z-10" />
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                                <span className="text-[9px] text-white/20 uppercase tracking-[0.4em]">STATUS: SISTEMA_OPERATIVO_ACTIVO</span>
                            </div>
                            <div className="text-[9px] text-white/10 uppercase tracking-[0.2em]">
                                © 2026 ACREDITAME // ANTOFAGASTA
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
