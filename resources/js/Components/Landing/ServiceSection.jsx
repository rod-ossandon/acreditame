import React from 'react';

// Datos de tus servicios
const services = [
    {
        title: "Consultoría Estratégica",
        tag: "BUSINESS_INTELLIGENCE",
        icon: "🧠",
        desc: "Asesoramiento experto para escalar tu negocio."
    },
    {
        title: "Credenciales",
        tag: "RFID_NFC_TECH",
        icon: "🆔",
        desc: "Identificación avanzada y durabilidad garantizada.",
        highlight: true
    },
    {
        title: "Merchandising",
        tag: "LASER_&_3D_PRINT",
        icon: "✨",
        desc: "Accesorios únicos para destacar tu marca."
    },
    {
        title: "Soporte Técnico",
        tag: "HARDWARE_OPS",
        icon: "🛠️",
        desc: "Continuidad operativa para tus equipos críticos."
    },
    {
        title: "Sistemas Seguridad",
        tag: "CCTV_PROTECTION",
        icon: "👁️",
        desc: "Video vigilancia y monitoreo 24/7.",
        highlight: true
    },
    {
        title: "Telecomunicaciones",
        tag: "NETWORK_LINKS",
        icon: "📡",
        desc: "Enlaces, cableado estructurado y fibra óptica."
    }
];

export default function ServiceSection() {
    return (
        <section id="servicios" className="relative z-10 py-32 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-6">
                    <div>
                        {/* CAMBIO 1: Etiqueta en Oro */}
                        <span className="text-gold-primary font-mono text-xs font-bold tracking-widest mb-2 block">/// CAPABILITIES</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-white font-wide tracking-tight">
                            Nuestros <span className="text-gray-600">Servicios</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm text-right max-w-xs font-mono">
                        Soluciones modulares diseñadas para escalar con tu empresa.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
                    {services.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ServiceItem = ({ title, tag, icon, desc, highlight = false }) => (
    <div className={`
        group relative h-72 border-r border-b border-white/10 flex flex-col justify-between p-8 hover:bg-white/[0.02] transition duration-500 cursor-pointer overflow-hidden
        ${highlight ? 'bg-white/[0.015]' : ''}
    `}>

        {/* CAMBIO 2: Gradiente de fondo al hacer Hover en Oro */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

        <div className="relative z-10 flex justify-between items-start">
            {/* CAMBIO 3: Tags con texto y fondo dorado sutil */}
            <span className="text-[10px] font-mono font-bold text-gold-primary tracking-widest bg-gold-primary/10 px-2 py-1 rounded">
                {tag}
            </span>
            <span className="text-3xl filter grayscale group-hover:grayscale-0 transition duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                {icon}
            </span>
        </div>

        <div className="relative z-10 space-y-3">
            {/* CAMBIO 4: Título cambia a Oro al hover */}
            <h3 className="text-xl font-bold uppercase text-white font-wide group-hover:text-gold-primary transition-colors">
                {title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2">
                {desc}
            </p>

            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {/* CAMBIO 5: Enlace "Ver más" en Oro */}
                <span className="text-gold-primary text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    Ver más <span className="text-lg">→</span>
                </span>
            </div>
        </div>
    </div>
);
