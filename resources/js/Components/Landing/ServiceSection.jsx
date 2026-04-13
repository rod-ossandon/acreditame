import React, { useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, RotateCcw, CheckCircle2, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "01",
        year: "2026",
        title: "Consultoría Estratégica",
        tag: "INTELIGENCIA",
        desc: "Asesoramiento experto para escalar tu negocio con inteligencia de datos y optimización de flujos estratégicos.",
        features: ['Análisis de Procesos', 'Optimización de Recursos', 'Gestión de Proyectos', 'KPIs Industriales'],
        fullDesc: "Implementamos metodologías ágiles y análisis predictivo para transformar datos crutos en decisiones estratégicas. Nuestro enfoque reduce costos operativos en un promedio del 20%.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
    },
    {
        id: "02",
        year: "2026",
        title: "Credenciales",
        tag: "CREDENCIALES",
        desc: "Identificación avanzada, tarjetas PVC y tecnología NFC de última generación para control de acceso corporativo.",
        features: ['Chips NFC/RFID', 'Lectura Biométrica', 'Diseño Anti-falsificación', 'Gestión de Usuarios'],
        fullDesc: "Soluciones de seguridad física de alto nivel. Nuestras credenciales incluyen encriptación de datos para evitar clonaciones y asegurar el acceso solo a personal autorizado.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470"
    },
    {
        id: "03",
        year: "2026",
        title: "Merchandising",
        tag: "FABRICACION",
        desc: "Grabado láser y artículos promocionales únicos mediante manufactura aditiva para destacar el ADN de tu marca.",
        features: ['Impresión 3D Pro', 'Grabado Fibra Óptica', 'Diseño Personalizado', 'Materiales Industriales'],
        fullDesc: "Creamos objetos que comunican la esencia de tu empresa. Desde prototipos industriales hasta regalos corporativos de alta gama con grabado láser permanente.",
        image: "https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1635"
    },
    {
        id: "04",
        year: "2026",
        title: "Soporte Técnico",
        tag: "MANTENIMIENTO",
        desc: "Mantenimiento preventivo y correctivo para asegurar la continuidad operativa de tu infraestructura crítica.",
        features: ['SLA de Respuesta', 'Hardware Crítico', 'Preventivo Programado', 'Remoto y Terreno'],
        fullDesc: "Garantizamos que tu operación no se detenga. Disponemos de técnicos especializados en terreno y soporte remoto con tiempos de respuesta garantizados por contrato.",
        image: "https://plus.unsplash.com/premium_photo-1661657610740-7d27accfe43c?q=80&w=1169"
    },
    {
        id: "05",
        year: "2026",
        title: "Sistemas Seguridad",
        tag: "CCTV",
        desc: "Video vigilancia inteligente y monitoreo 24/7 con detección de patrones para proteger tus activos de valor.",
        features: ['IA de Reconocimiento', 'Centralización de Nodos', 'Alertas en Tiempo Real', 'Grabación Segura'],
        fullDesc: "Integramos analítica de video avanzada para perímetros inteligentes. Detección automática de intrusos y control de elementos de protección personal (EPP) mediante IA.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070"
    },
    {
        id: "06",
        year: "2026",
        title: "Telecomunicaciones",
        tag: "NETWORK",
        desc: "Enlaces de fibra óptica y cableado estructurado de alta velocidad para entornos industriales y remotos.",
        features: ['Radio Enlaces', 'Fibra Óptica', 'Redes Mesh', 'Monitoreo de Tráfico'],
        fullDesc: "Conectividad robusta en cualquier lugar. Diseñamos redes de alta disponibilidad para entornos mineros e industriales, asegurando el flujo constante de información crítica.",
        image: "https://plus.unsplash.com/premium_photo-1683134474265-7bf3848ffbd9?q=80&w=1170"
    },
    {
        id: "07",
        year: "2026",
        title: "Ciberseguridad",
        tag: "SEGURIDAD",
        desc: "Hacking ético, blindaje de servidores y protección de datos críticos ante amenazas digitales externas.",
        features: ['Pentesting', 'Firewalls Avanzados', 'Encriptación AES-256', 'Auditoría de Sistemas'],
        fullDesc: "Blindamos tu infraestructura digital. Realizamos auditorías constantes y desplegamos capas de protección para mitigar riesgos de ataques de ransomware y filtraciones.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
    }
];

export default function ServiceSection() {
    const mainContainer = useRef(null);
    const [flippedId, setFlippedId] = useState(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.card-instance');

            // Estado inicial: Las tarjetas fuera de vista abajo
            gsap.set(cards.slice(1), { yPercent: 120, opacity: 0 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainContainer.current,
                    start: "top top",
                    end: () => `+=${cards.length * 120}%`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        // Si scrolleamos, quitamos el flip
                        if (Math.abs(self.getVelocity()) > 10) setFlippedId(null);
                    }
                }
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                // Animación de entrada de la tarjeta actual
                tl.to(card, {
                    yPercent: 0,
                    opacity: 1,
                    ease: "power2.inOut",
                    duration: 1
                }, i)
                    // Animación de salida de la tarjeta anterior (LA HACEMOS MÁS FUERTE)
                    .to(cards[i - 1], {
                        scale: 0.9,
                        opacity: 0, // La ocultamos totalmente para que no se vea doble
                        pointerEvents: 'none',
                        duration: 0.5
                    }, i);
            });
        }, mainContainer);
        return () => ctx.revert();
    }, []);

    const toggleFlip = (id) => {
        setFlippedId(flippedId === id ? null : id);
    };

    const handleContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contacto');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id='servicios' ref={mainContainer} className="relative w-full h-screen overflow-hidden bg-[#050505] font-goldman">

            <div className="absolute font-goldman top-12 left-0 w-full px-6 md:px-20 z-0">
                <span className="text-yellow-500 text-[10px] tracking-[0.5em] uppercase">/// Servicios</span>
                <h2 className="text-4xl font-goldman md:text-7xl text-white uppercase tracking-tighter mt-2">
                    Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700 italic">Servicios</span>
                </h2>
            </div>

            <div className="relative h-full w-full flex items-center justify-center px-4 md:px-10 pt-20">
                <div className="relative w-full max-w-6xl h-[520px] md:h-[600px] [perspective:2000px]">

                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="card-instance absolute inset-0 w-full h-full"
                            style={{ zIndex: index + 1 }}
                        >
                            <motion.div
                                className="relative w-full h-full [transform-style:preserve-3d]"
                                animate={{ rotateY: flippedId === service.id ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            >

                                {/* --- CARA FRONTAL --- */}
                                <div className="absolute inset-0 w-full h-full bg-zinc-950 border border-gold-primary/20 flex flex-col md:flex-row rounded-[2.5rem] overflow-hidden [backface-visibility:hidden]">
                                    <div className="w-full md:w-[38%] h-[160px] md:h-full relative overflow-hidden group border-b md:border-b-0 md:border-r border-gold-primary/10">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-luminosity"
                                            style={{ backgroundImage: `url(${service.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-gradient-to-l" />
                                    </div>

                                    <div className="flex-1 p-6 md:p-12 flex flex-col justify-between bg-[#080808]">
                                        <div className="space-y-4 md:space-y-6 text-left">
                                            <div className="flex items-center justify-between">
                                                <div className="px-3 py-1 border border-gold-primary/30 rounded-full bg-gold-primary/5 text-gold-light text-[8px] md:text-[10px] tracking-widest uppercase">
                                                    {service.year} // {service.tag}
                                                </div>
                                                <span className="text-gold-primary/10 font-bold text-4xl md:text-7xl leading-none italic">{service.id}</span>
                                            </div>

                                            <h3 className="text-2xl md:text-5xl lg:text-6xl font-goldman text-white uppercase leading-[0.9] tracking-tighter">
                                                <span className="text-gold-primary block text-xs md:text-sm tracking-[0.2em] mb-2 uppercase">Servicio</span>
                                                {service.title}
                                            </h3>

                                            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-xl border-l border-gold-primary/40 pl-5">
                                                {service.desc}
                                            </p>
                                        </div>

                                        <div className="pt-6 md:pt-0 text-left">
                                            <button
                                                onClick={() => toggleFlip(service.id)}
                                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-primary text-black rounded-full text-[10px] font-black tracking-[0.2em] hover:bg-white transition-all shadow-[0_10px_20px_rgba(212,175,55,0.2)]"
                                            >
                                                MÁS INFORMACIÓN
                                                <ArrowRight size={14} strokeWidth={3} className="transform group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* --- CARA TRASERA (HOJA TÉCNICA OPTIMIZADA) --- */}
                                <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border-2 border-gold-primary/30 flex flex-col justify-between rounded-[2.5rem] p-6 md:p-12 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[inset_0_0_60px_rgba(212,175,55,0.05)]">

                                    {/* Contenedor Superior Scrolleable */}
                                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar text-left space-y-4 md:space-y-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-[1px] bg-gold-primary" />
                                            <span className="text-gold-primary text-[9px] md:text-[10px] tracking-widest uppercase italic font-mono">
                                                DATA_SHEET // {service.tag}
                                            </span>
                                        </div>

                                        <h4 className="text-white text-2xl md:text-5xl font-goldman uppercase leading-none italic">
                                            Ficha <span className="text-gold-primary">Técnica</span>
                                        </h4>

                                        {/* Descripción reducida en móvil para legibilidad */}
                                        <p className="text-zinc-300 text-sm md:text-2xl font-light leading-relaxed italic border-b border-white/5 pb-4">
                                            "{service.desc}"
                                        </p>

                                        {/* Lista de Features */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 pt-2">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 group">
                                                    <CheckCircle2 size={16} className="text-gold-primary shrink-0" />
                                                    <span className="text-zinc-400 text-xs md:text-lg font-light tracking-wide">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* BOTONES: Volver como Icono + Cotizar Masivo */}
                                    <div className="flex items-center gap-3 pt-6 mt-4 border-t border-white/5">
                                        <button
                                            onClick={() => toggleFlip(service.id)}
                                            className="flex-none w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-white/10 text-white rounded-xl hover:bg-white hover:text-black transition-all active:scale-95 shadow-lg shadow-black"
                                            title="Volver"
                                        >
                                            <RotateCcw size={18} className="md:w-6 md:h-6" />
                                        </button>

                                        <button
                                            onClick={handleContact}
                                            className="flex-1 bg-gold-primary text-center py-4 md:py-6 text-black font-black uppercase tracking-[0.2em] text-[10px] md:text-xs rounded-xl hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3 active:scale-95"
                                        >
                                            <MessageSquare size={14} className="md:w-5 md:h-5" />
                                            <span className="inline-block">Cotizar Servicio</span>
                                        </button>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
