import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section id="nosotros" className="relative z-10 py-48 px-6 bg-transparent overflow-hidden">
            <div className="max-w-[1500px] mx-auto relative">

                {/* CONTENEDOR PRINCIPAL: Grid de 12 columnas */}
                <div className="grid grid-cols-12 items-center gap-0">

                    {/* --- BLOQUE GLASS (8 Columnas) --- */}
                    <div className="col-span-12 lg:col-span-8 relative z-20">
                        {/* El efecto Glassmorphism Profundo */}
                        <div className="relative p-10 md:p-16 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">

                            {/* Líneas de escaneo sutiles en el fondo del cristal */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />

                            {/* TÍTULO Y HEADER */}
                            <div className="mb-12">
                                <span className="text-yellow-500 font-mono text-[9px] font-black tracking-[0.5em] mb-4 block uppercase opacity-70">
                                    /// NOSOTROS
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none font-['Syncopate']">
                                    Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Somos</span>
                                </h2>
                            </div>

                            {/* CONTENIDO TEXTUAL */}
                            <div className="max-w-2xl space-y-8 relative">
                                <div className="absolute -left-10 top-0 w-[2px] h-full bg-gradient-to-b from-yellow-500/50 to-transparent" />

                                <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
                                    <strong className="text-white font-black italic">Acreditame y Servicios Limitada</strong> nace en la región de <span className="text-yellow-500">Antofagasta</span> con la misión de fusionar la robustez industrial con la agilidad del desarrollo de software moderno.
                                </p>

                                <p className="text-white/40 text-xs md:text-sm leading-loose tracking-[0.2em] uppercase font-bold border-t border-white/5 pt-8">
                                    Optimizamos el control de activos críticos mediante <span className="text-white">ingeniería avanzada</span> y visualización 3D de alta precisión. Confianza absoluta, seguridad total.
                                </p>
                            </div>

                            {/* INDICADORES HUD INFERIORES */}
                            <div className="mt-12 flex items-center justify-between">
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Servicios_Acreditame</span>
                                    </div>
                                </div>
                                <span className="text-[8px] font-mono text-white/10 uppercase tracking-[0.4em]">Ubicacion: Antofagasta // CL</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
