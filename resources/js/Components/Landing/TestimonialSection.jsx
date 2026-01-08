import React from 'react';

// Datos extraídos de tus imágenes, adaptados al estilo Dashboard
const metrics = [
    {
        service: "Credenciales ID",
        code: "SYS_ID_V4",
        review: "La calidad es impecable. Las imágenes en alta definición y el sello perlado dan un toque único. Definitivamente las mejores credenciales.",
        stats: [
            { label: "Calidad Material", value: 100 },
            { label: "Definición Img", value: 95 },
            { label: "Originalidad", value: 98 },
        ]
    },
    {
        service: "Soporte Técnico",
        code: "OPS_MAINTENANCE",
        review: "Limpieza detallada de hardware y software. Equipos funcionando como nuevos. Atención rápida y eficiente.",
        stats: [
            { label: "Tiempo Respuesta", value: 95 },
            { label: "Eficiencia", value: 98 },
            { label: "Uptime", value: 100 },
        ]
    },
    {
        service: "Seguridad CCTV",
        code: "SEC_CAM_NET",
        review: "Instalación profesional. Monitoreo en tiempo real 24/7 estable. Confiabilidad total en la seguridad de los espacios.",
        stats: [
            { label: "Instalación", value: 100 },
            { label: "Acceso Remoto", value: 98 },
            { label: "Fiabilidad", value: 99 },
        ]
    },
    {
        service: "Consultoría",
        code: "STRATEGY_CORE",
        review: "Clave para el crecimiento. Soluciones tecnológicas personalizadas que optimizaron nuestros procesos estratégicos.",
        stats: [
            { label: "Impacto", value: 95 },
            { label: "Personalización", value: 98 },
            { label: "Asesoría", value: 100 },
        ]
    }
];

export default function TestimonialsSection() {
    return (
        <section id="resultados" className="relative z-10 py-32 px-6 bg-transparent border-b border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 flex items-end justify-between gap-6">
                    <div>
                        {/* CAMBIO 1: Texto etiqueta en Oro */}
                        <span className="text-gold-primary font-mono text-xs font-bold tracking-widest mb-2 block">/// SYSTEM_FEEDBACK</span>
                        <h2 className="text-3xl md:text-4xl font-bold uppercase text-white font-wide tracking-tight">
                            Resultados <span className="text-gray-600">Comprobados</span>
                        </h2>
                    </div>
                    <div className="hidden md:flex gap-1">
                        {/* CAMBIO 2: Puntos de carga en Oro y Ámbar */}
                        <div className="w-2 h-2 bg-gold-primary rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gold-secondary rounded-full animate-pulse delay-75"></div>
                        <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {metrics.map((item, index) => (
                        <FeedbackCard key={index} data={item} />
                    ))}
                </div>

            </div>
        </section>
    );
}

const FeedbackCard = ({ data }) => (
    // CAMBIO 3: Hover border en Oro
    <div className="group relative bg-white/[0.02] border border-white/10 p-8 hover:border-gold-primary/30 transition-all duration-500 overflow-hidden">
        {/* CAMBIO 4: Luz de fondo al hover en Oro */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-bold text-white font-wide uppercase">{data.service}</h3>
                {/* CAMBIO 5: ID Tag con texto y fondo dorado */}
                <span className="text-[10px] font-mono text-gold-primary tracking-wider bg-gold-primary/10 px-2 py-0.5 rounded">
                    ID: {data.code}
                </span>
            </div>
            {/* CAMBIO 6: Estrellas en Ámbar (gold-secondary) */}
            <div className="flex gap-1 text-gold-secondary text-xs tracking-widest">
                ★★★★★
            </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4 italic">
            "{data.review}"
        </p>

        <div className="space-y-4">
            {data.stats.map((stat, idx) => (
                <div key={idx}>
                    <div className="flex justify-between text-[10px] font-mono font-bold text-gray-500 mb-1 uppercase">
                        <span>{stat.label}</span>
                        <span className="text-white">{stat.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        {/* CAMBIO 7: Barras de progreso con gradiente Oro->Ámbar */}
                        <div
                            className="h-full bg-gradient-to-r from-gold-primary to-gold-secondary rounded-full"
                            style={{ width: `${stat.value}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
            <button className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition flex items-center gap-2 group-hover:gap-3 duration-300">
                Cotizar este servicio <span>→</span>
            </button>
        </div>
    </div>
);
