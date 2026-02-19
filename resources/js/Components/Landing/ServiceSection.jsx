import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    { id: "01", title: "Consultoría Estratégica", tag: "INTELIGENCIA", desc: "Optimización de procesos operativos mediante análisis de datos complejos e ingeniería industrial.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
    { id: "02", title: "Credenciales", tag: "CREDENCIALES", desc: "Sistemas de identificación avanzada con tecnología NFC y biometría para entornos mineros.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" },
    { id: "03", title: "Merchandising", tag: "FABRICACION", desc: "Desarrollo de artículos corporativos mediante manufactura aditiva y grabado láser de precisión.", image: "https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1635&auto=format&fit=crop" },
    { id: "04", title: "Soporte Técnico", tag: "MANTENIMIENTO", desc: "Gestión de mantenimiento preventivo y correctivo de hardware con protocolos de respuesta inmediata.", image: "https://plus.unsplash.com/premium_photo-1661657610740-7d27accfe43c?q=80&w=1169&auto=format&fit=crop" },
    { id: "05", title: "Seguridad", tag: "CCTV", desc: "Infraestructura de videovigilancia inteligente con detección de patrones y monitoreo centralizado.", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop" },
    { id: "06", title: "Telecomunicaciones", tag: "NETWORK", desc: "Despliegue de enlaces de alta capacidad y conectividad robusta para operaciones remotas.", image: "https://plus.unsplash.com/premium_photo-1683134474265-7bf3848ffbd9?q=80&w=1170&auto=format&fit=crop" },
    { id: "07", title: "Ciberseguridad", tag: "SEGURIDAD", desc: "Protección perimetral de redes y blindaje de bases de datos contra intrusiones externas.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" }
];

export default function ServiceSection() {
    const [activeId, setActiveId] = useState("01");

    return (
        <section id="servicios" className="relative z-10 py-32 px-6 bg-transparent overflow-hidden font-sans">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="mb-20 border-b border-white/10 pb-12">
                    <span className="text-yellow-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">// SERVICIOS</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none">
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Servicios</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row gap-4 h-[1000px] md:h-[650px] w-full">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            layout
                            onClick={() => setActiveId(service.id)} // Click para móviles
                            onMouseEnter={() => setActiveId(service.id)} // Hover para desktop
                            className={`
                                relative rounded-2xl overflow-hidden cursor-pointer group
                                border border-white/5 border-t-white/10
                                backdrop-blur-md
                                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                ${activeId === service.id
                                    ? 'flex-[10] bg-zinc-900/60 shadow-[0_0_40px_rgba(0,0,0,0.5)]'
                                    : 'flex-[1.5] bg-white/5 hover:bg-white/10 grayscale hover:grayscale-0'
                                }
                            `}
                        >
                            {/* --- IMAGEN DE FONDO (Con opacidad controlada) --- */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700
                                    ${activeId === service.id ? 'opacity-40' : 'opacity-20 group-hover:opacity-30'}
                                `}
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* --- GRADIENTE DE SUPERPOSICIÓN (Para legibilidad) --- */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-80'}`} />

                            {/* --- CONTENIDO --- */}
                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-20">

                                {/* CABECERA: ID y Estado */}
                                <div className="flex justify-between items-start">
                                    <span className={`font-mono font-bold transition-all duration-500 ${activeId === service.id ? 'text-5xl text-yellow-500/80' : 'text-2xl text-white/20'}`}>
                                        {service.id}
                                    </span>
                                    {/* Indicador de estado activo (punto brillante) */}
                                    {activeId === service.id && (
                                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                                    )}
                                </div>

                                {/* CUERPO: Texto e Información */}
                                <div className="relative overflow-hidden">
                                    {/* Título Vertical (Solo visible cuando está CERRADO) */}
                                    {activeId !== service.id && (
                                        <div className="absolute bottom-0 left-0 w-full">
                                            <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 origin-bottom-left whitespace-nowrap group-hover:text-yellow-500 transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                    )}

                                    {/* Contenido Expandido (Solo visible cuando está ABIERTO) */}
                                    <AnimatePresence mode='wait'>
                                        {activeId === service.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                className="w-full"
                                            >
                                                <span className="inline-block px-2 py-1 mb-4 text-[10px] font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded uppercase tracking-wider backdrop-blur-sm">
                                                    // {service.tag}
                                                </span>

                                                <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] mb-6 drop-shadow-lg tracking-tight">
                                                    {service.title}
                                                </h3>

                                                <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-yellow-500/50 pl-6">
                                                    {service.desc}
                                                </p>

                                                <button className="group flex items-center gap-4 px-8 py-4 bg-yellow-500 hover:bg-white text-black font-bold uppercase tracking-widest text-xs transition-all duration-300">
                                                    <span>Ver</span>
                                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
