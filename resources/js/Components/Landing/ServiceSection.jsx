import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

const services = [
    { id: "01", slug: "consultoria-estrategica", title: "Consultoría Estratégica", tag: "INTELIGENCIA", desc: "Optimización de procesos operativos mediante análisis de datos complejos e ingeniería industrial.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" },
    { id: "02", slug: "credenciales", title: "Credenciales", tag: "CREDENCIALES", desc: "Sistemas de identificación avanzada con tecnología NFC y biometría para entornos mineros.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" },
    { id: "03", slug: "merchandising", title: "Merchandising", tag: "FABRICACION", desc: "Desarrollo de artículos corporativos mediante manufactura aditiva y grabado láser de precisión.", image: "https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1635&auto=format&fit=crop" },
    { id: "04", slug: "soporte-tecnico", title: "Soporte Técnico", tag: "MANTENIMIENTO", desc: "Gestión de mantenimiento preventivo y correctivo de hardware con protocolos de respuesta inmediata.", image: "https://plus.unsplash.com/premium_photo-1661657610740-7d27accfe43c?q=80&w=1169&auto=format&fit=crop" },
    { id: "05", slug: "seguridad", title: "Seguridad", tag: "CCTV", desc: "Infraestructura de videovigilancia inteligente con detección de patrones y monitoreo centralizado.", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop" },
    { id: "06", slug: "telecomunicaciones", title: "Telecomunicaciones", tag: "NETWORK", desc: "Despliegue de enlaces de alta capacidad y conectividad robusta para operaciones remotas.", image: "https://plus.unsplash.com/premium_photo-1683134474265-7bf3848ffbd9?q=80&w=1170&auto=format&fit=crop" },
    { id: "07", slug: "ciberseguridad", title: "Ciberseguridad", tag: "SEGURIDAD", desc: "Protección perimetral de redes y blindaje de bases de datos contra intrusiones externas.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" }
];

export default function ServiceSection() {
    const [activeId, setActiveId] = useState("01");
    const containerRef = useRef(null);

    // --- LÓGICA DE ESCANEO DE SCROLL (MÓVIL) ---
    useEffect(() => {
        // Solo activamos si es móvil para evitar conflictos con el hover de desktop
        if (window.innerWidth >= 768) return;

        const observerOptions = {
            root: null,
            // Zona de captura: Franja central del 20% del viewport
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('data-id');
                    setActiveId(id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        const elements = containerRef.current?.querySelectorAll('.service-card');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="servicios" className="relative z-10 py-24 md:py-32 px-4 sm:px-6 bg-transparent overflow-hidden font-goldman">
            <div className="max-w-[1600px] mx-auto">

                {/* Header Industrial */}
                <div className="mb-16 md:mb-20 border-b border-white/10 pb-12">
                    <span className="text-yellow-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">
                        // SERVICIOS
                    </span>
                    <h2 className="text-4xl md:text-7xl font-goldman uppercase text-white tracking-tighter leading-none">
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Servicios</span>
                    </h2>
                </div>

                {/* Contenedor Acordeón con Scroll Snap */}
                <div
                    ref={containerRef}
                    className="flex flex-col md:flex-row gap-6 md:gap-4 h-auto md:h-[650px] w-full snap-y snap-mandatory"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            data-id={service.id}
                            layout
                            className={`
                                service-card relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer group
                                border border-white/5 snap-center transition-all duration-700 ease-in-out
                                ${activeId === service.id
                                    ? 'flex-[10] min-h-[480px] md:min-h-0 bg-zinc-900/60 shadow-[0_0_50px_rgba(0,0,0,0.4)]'
                                    : 'flex-[1] min-h-[90px] md:min-h-0 bg-white/5 grayscale opacity-40 scale-[0.98]'
                                }
                            `}
                            // Interactividad: Click/Hover solo en Desktop
                            onClick={() => { if (window.innerWidth >= 768) setActiveId(service.id) }}
                            onMouseEnter={() => { if (window.innerWidth >= 768) setActiveId(service.id) }}
                        >
                            {/* Visual Engine (Imagen de fondo) */}
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
                                    ${activeId === service.id ? 'opacity-30 scale-105' : 'opacity-10 scale-100'}
                                `}
                                style={{ backgroundImage: `url(${service.image})`, transition: 'all 1.5s ease-out' }}
                            />

                            {/* Capa de contraste HUD */}
                            <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 transition-opacity duration-500 ${activeId === service.id ? 'opacity-100' : 'opacity-80'}`} />

                            <motion.div layout className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between z-20">

                                {/* Status Header */}
                                <div className="flex justify-between items-start">
                                    <span className={`font-goldman transition-all duration-500 ${activeId === service.id ? 'text-3xl md:text-5xl text-yellow-500' : 'text-xl text-white/20'}`}>
                                        {service.id}
                                    </span>
                                    {activeId === service.id && (
                                        <div className="flex items-center gap-2">
                                            <span className="text-[8px] tracking-widest text-green-500 hidden md:block">Servicios</span>
                                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></div>
                                        </div>
                                    )}
                                </div>

                                <div className="relative">
                                    {/* Título Vertical (Solo Desktop Cerrado) */}
                                    {activeId !== service.id && (
                                        <div className="absolute bottom-0 left-0 w-full hidden md:block">
                                            <h3 className="text-xl font-bold text-white/30 uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-100 origin-bottom-left whitespace-nowrap group-hover:text-yellow-500 transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                    )}

                                    {/* Contenido Expandido con AnimatePresence */}
                                    <AnimatePresence mode='wait'>
                                        {activeId === service.id && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 10 }}
                                                className="w-full"
                                            >
                                                <span className="inline-block px-3 py-1 mb-4 text-[9px] font-mono text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 rounded uppercase tracking-[0.3em]">
                                                    // {service.tag}
                                                </span>

                                                <h3 className="text-3xl md:text-6xl font-goldman text-white uppercase leading-none mb-6 tracking-tighter">
                                                    {service.title}
                                                </h3>

                                                <p className="text-zinc-400 text-sm md:text-lg font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-yellow-500/50 pl-6 italic">
                                                    {service.desc}
                                                </p>

                                                <Link
                                                    href={`/servicios/${service.slug}`}
                                                    className="group inline-flex items-center gap-4 px-10 py-4 bg-yellow-500 text-black font-black uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-all shadow-[0_0_30px_rgba(234,179,8,0.2)]"
                                                >
                                                    EXPLORAR SERVICIO
                                                    <div className="flex items-center gap-2">
                                                        <ArrowRight
                                                            size={14}
                                                            strokeWidth={3}
                                                            className="transform transition-transform duration-300 group-hover:translate-x-1"
                                                        />
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
