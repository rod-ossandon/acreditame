import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="nosotros" className="relative z-10 py-32 md:py-48 px-4 md:px-6 bg-transparent overflow-hidden">
            <div className="max-w-[1600px] mx-auto relative">

                <div className="grid grid-cols-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 relative z-20"
                    >
                        <div className="relative p-8 md:p-20 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[4rem] shadow-[0_0_80px_rgba(0,0,0,0.6)] overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]" />

                            <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
                                <div className="max-w-3xl">
                                    <span className="text-yellow-500 font-mono text-[10px] font-black tracking-[0.6em] mb-6 block uppercase opacity-80">
                                        /// NOSOTROS
                                    </span>

                                    <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-none font-goldman mb-10">
                                        Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Somos</span>
                                    </h2>

                                    <div className="space-y-8 relative">
                                        <div className="absolute -left-6 md:-left-12 top-0 w-[2px] h-full bg-gradient-to-b from-yellow-500/50 to-transparent" />

                                        <p className="text-white/90 text-xl md:text-3xl leading-tight font-light font-sans">
                                            <strong className="text-white font-goldman italic">Acreditame y Servicios Limitada</strong> fusiona la robustez industrial de <span className="text-yellow-500">Antofagasta</span> con el desarrollo de software de vanguardia.
                                        </p>

                                        <p className="text-white/50 text-xs md:text-sm leading-loose tracking-[0.2em] uppercase font-goldman border-t border-white/5 pt-10 max-w-xl">
                                            Optimizamos activos críticos mediante <span className="text-white">ingeniería avanzada</span> y visualización 3D.
                                        </p>
                                    </div>
                                </div>

                                <div className="pb-4">
                                    <Link
                                        href="/nosotros-detalle"
                                        className="group relative flex items-center gap-4 bg-yellow-500 text-black font-goldman font-black px-10 py-6 rounded-xl uppercase text-sm tracking-widest hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                                    >
                                        Nosotros
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        <div className="absolute -inset-2 border border-yellow-500/20 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">SISTEMA_OPERATIVO_ACTIVO</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
