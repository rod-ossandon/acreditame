import React, { useState } from 'react';


const services = [
    {
        id: 1,
        title: "Consultoría Estratégica",
        tag: "BUSINESS_INTELLIGENCE",
        icon: "🧠",
        desc: "Asesoramiento experto para escalar tu negocio con inteligencia de datos.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Credenciales",
        tag: "RFID_NFC_TECH",
        icon: "🆔",
        desc: "Identificación avanzada, tarjetas PVC y tecnología NFC de última generación.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Merchandising",
        tag: "LASER_&_3D_PRINT",
        icon: "✨",
        desc: "Grabado láser y artículos promocionales únicos para destacar tu marca.",
        image: "https://images.unsplash.com/photo-1656360088907-5109c245851d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        title: "Soporte Técnico",
        tag: "HARDWARE_OPS",
        icon: "🛠️",
        desc: "Mantenimiento preventivo y correctivo para asegurar la continuidad operativa.",
        image: "https://plus.unsplash.com/premium_photo-1661657610740-7d27accfe43c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        title: "Sistemas Seguridad",
        tag: "CCTV_PROTECTION",
        icon: "👁️",
        desc: "Video vigilancia inteligente y monitoreo 24/7 para proteger tus activos.",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Telecomunicaciones",
        tag: "NETWORK_LINKS",
        icon: "📡",
        desc: "Enlaces de fibra óptica y cableado estructurado de alta velocidad.",
        image: "https://plus.unsplash.com/premium_photo-1683134474265-7bf3848ffbd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        title: "Ciberseguridad",
        tag: "CYBER_DEFENSE",
        icon: "🛡️",
        desc: "Hacking ético, blindaje de servidores y protección de datos críticos.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function ServiceSection() {

    const [activeId, setActiveId] = useState(1);

    return (
        <section id="servicios" className="relative z-10 py-32 px-4 md:px-6 bg-transparent">
            <div className="max-w-[1400px] mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8 gap-6">
                    <div>
                        <span className="text-gold-primary font-mono text-xs font-bold tracking-widest mb-2 block">/// CAPABILITIES</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase text-white font-wide tracking-tight">
                            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">Servicios</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm text-right max-w-xs font-mono hidden md:block">
                        Desliza o haz clic para explorar nuestras soluciones modulares.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 h-[800px] md:h-[600px] w-full">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`
                                relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out bg-[#0f172a] shadow-2xl
                                ${activeId === service.id ? 'flex-[10]' : 'flex-[2] hover:flex-[3]'}
                                h-full
                            `}
                            onClick={() => setActiveId(service.id)}
                            onMouseEnter={() => setActiveId(service.id)}
                        >

                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >

                                <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${activeId === service.id ? 'opacity-40' : 'opacity-70'}`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>


                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full z-20">


                                <div className={`
                                    w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 mb-4 transition-all duration-500
                                    ${activeId === service.id
                                        ? 'bg-gold-primary text-black scale-100'
                                        : 'bg-white/10 text-white scale-75 origin-bottom-left'}
                                `}>
                                    <span className="text-2xl md:text-3xl">{service.icon}</span>
                                </div>

                                <div className={`transition-opacity duration-500 ${activeId === service.id ? 'opacity-100 delay-200' : 'opacity-0 md:opacity-100 md:hidden'}`}>

                                    <span className={`text-[10px] font-bold tracking-widest uppercase mb-2 block ${activeId === service.id ? 'text-gold-secondary' : 'text-gray-400'}`}>
                                        {service.tag}
                                    </span>

                                    <h3 className={`font-wide font-bold uppercase leading-none mb-4 text-white ${activeId === service.id ? 'text-2xl md:text-4xl' : 'text-xl'}`}>
                                        {service.title}
                                    </h3>

                                    <p className={`text-gray-300 font-sans text-sm md:text-base max-w-lg transition-all duration-500 ${activeId === service.id ? 'h-auto opacity-100 translate-y-0' : 'h-0 opacity-0 translate-y-4 overflow-hidden'}`}>
                                        {service.desc}
                                    </p>

                                    {activeId === service.id && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="mt-6 px-6 py-2 border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest text-white hover:bg-gold-primary hover:text-black hover:border-gold-primary transition-all duration-300"
                                        >
                                            Cotizar ahora
                                        </button>
                                    )}
                                </div>

                                {activeId !== service.id && (
                                    <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-max -rotate-90 origin-bottom-left opacity-70">
                                        <span className="text-lg font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                                            {service.title}
                                        </span>
                                    </div>
                                )}

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
