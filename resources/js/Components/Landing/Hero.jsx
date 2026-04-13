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
                    end: "+=300%",
                    pin: true,
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(heroRef.current, {
                opacity: 0,
                y: -60,
                scale: 0.95,
                duration: 1.5
            })
            .to(logoRef.current, {
                y: "-50dvh",
                scale: window.innerWidth < 768 ? 1.3 : 1.8,
                opacity: 1,
                duration: 2.5,
                ease: "power2.inOut"
            }, "-=1")
            .to(logoRef.current, {
                opacity: 0.05,
                scale: 1.1,
                filter: "blur(12px)",
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
        <div ref={containerRef} className="relative bg-[#050505] overflow-hidden selection:bg-yellow-500">

            {/* --- FONDO ATMOSFÉRICO --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(234,179,8,0.06)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.03] bg-[size:30px_30px] md:bg-[size:40px_40px] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)]" />
            </div>

            {/* --- CAPA 1: HERO (Textos 100% Originales) --- */}
            <section ref={heroRef} className="relative z-30 h-[100dvh] w-full flex items-center justify-center">
                <div className="w-full px-6 text-center">
                    <h2 className="font-sans text-[9px] md:text-xs tracking-[0.4em] text-white/50 uppercase mb-4">
                        /// BIENVENIDO A
                    </h2>
                    <h1 className="font-goldman text-[14vw] md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase text-white mb-4 leading-none pr-4">
                        ACREDI<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] italic inline-block">TAME</span>
                    </h1>
                    <p className="text-yellow-500 font-goldman font-bold text-[9px] md:text-sm tracking-[0.2em] uppercase mb-6">
                        ¡IMPULSA TU INDUSTRIA AL SIGUIENTE NIVEL!
                    </p>
                    <p className="text-white/60 text-[11px] md:text-base tracking-wide leading-relaxed max-w-sm mx-auto font-light font-sans mb-10">
                        Descubre cómo nuestras soluciones innovadoras y productos de calidad pueden <span className="text-white font-bold">revolucionar</span> tu negocio.
                    </p>

                    <div className="flex flex-col items-center gap-3 opacity-30">
                        <ArrowDown className="w-4 h-4 text-white animate-bounce" />
                    </div>
                </div>
            </section>

            {/* --- CAPA 2: LA ESTRELLA (Ajuste de tamaño móvil) --- */}
            <div ref={logoRef} className="fixed bottom-[-15%] left-1/2 -translate-x-1/2 z-20 opacity-30 pointer-events-none">
                <img src={lalbLogo} alt="Logo" className="w-[85vw] md:w-[60vw] max-w-[800px] h-auto" />
            </div>

            {/* --- CAPA 3: SECCIÓN NOSOTROS (Todos los textos presentes) --- */}
            <section id='nosotros' ref={aboutRef} className="absolute inset-0 h-[100dvh] w-full flex items-center justify-center z-40 px-3 md:px-10 opacity-0 translate-y-20 pointer-events-none">
                <div className="max-w-[1600px] w-full">
                    <div className="p-6 md:p-20 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden">

                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-end justify-between relative z-10">
                            <div className="max-w-4xl">
                                <span className="text-yellow-500 font-mono text-[9px] md:text-[10px] font-black tracking-[0.6em] mb-4 md:mb-8 block uppercase opacity-80 text-left">
                                    /// NOSOTROS
                                </span>

                                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tighter leading-none font-goldman mb-6 md:mb-10 text-left">
                                    Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Somos</span>
                                </h2>

                                <div className="space-y-6 md:space-y-10 relative text-left">
                                    <div className="absolute -left-4 md:-left-12 top-0 w-[2px] h-full bg-gradient-to-b from-yellow-500/50 to-transparent" />

                                    <p className="text-white/90 text-lg md:text-3xl leading-snug md:leading-tight font-light font-sans">
                                        <strong className="text-white font-goldman italic">Acreditame y Servicios Limitada</strong> fusiona la robustez industrial de <span className="text-yellow-500">Antofagasta</span> con el desarrollo de software de vanguardia.
                                    </p>

                                    {/* Mantenemos este párrafo, solo ajustamos tamaño en móvil */}
                                    <p className="text-white/50 text-[10px] md:text-sm leading-relaxed md:leading-loose tracking-[0.2em] uppercase font-goldman border-t border-white/5 pt-6 md:pt-10 max-w-xl">
                                        Optimizamos activos críticos mediante <span className="text-white">ingeniería avanzada</span> y visualización 3D.
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 md:pb-6">
                                <Link
                                    href="/nosotros-detalle"
                                    className="group relative flex items-center justify-center gap-4 bg-yellow-500 text-black font-goldman font-black px-8 md:px-10 py-5 md:py-6 rounded-xl uppercase text-[10px] md:text-xs tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                                >
                                    Nosotros
                                    <ArrowRight className="w-4 h-4 md:w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Barra de estado */}
                        <div className="mt-10 md:mt-12 pt-6 border-t border-white/5 flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span className="text-[8px] md:text-[9px] font-mono text-white/30 uppercase tracking-[0.3em]">SISTEMA_OPERATIVO_ACTIVO</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
