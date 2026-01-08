import React from 'react';

export default function AboutSection() {
    return (
        <section id="nosotros" className="relative z-10 py-32 px-6 border-b border-white/5 bg-transparent">

            <div className="max-w-7xl mx-auto relative">

                {/* CAMBIO 1: Borde izquierdo dorado */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-2 border-gold-primary pl-6">
                    <div>
                        {/* CAMBIO 2: Texto de etiqueta en oro */}
                        <span className="text-gold-primary font-mono text-xs font-bold tracking-widest mb-2 block">/// CORPORATE_PROFILE</span>
                        <h2 className="text-3xl md:text-5xl font-bold uppercase text-white font-wide tracking-tight">
                            Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">Somos</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm font-mono max-w-md">
                        Est. 2024. Antofagasta, Chile. <br/>
                        Ingeniería, Identificación y Seguridad Electrónica.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Texto Narrativo */}
                    <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-sans">
                        <p>
                            <strong className="text-white">Acreditame y Servicios Limitada</strong> nace en 2024 con un propósito claro: redefinir la seguridad integral.
                            Fusionamos el mundo físico y digital para ofrecer soluciones en seguridad electrónica, redes de alta velocidad y
                            telecomunicaciones.
                        </p>
                        <p>
                            No solo proveemos tecnología; creamos ecosistemas. Desde la identificación personalizada hasta la publicidad innovadora,
                            {/* CAMBIO 3: Palabras clave en oro y ámbar */}
                            nuestro equipo de profesionales está enfocado en la <span className="text-gold-primary font-semibold">excelencia</span> y la <span className="text-gold-secondary font-semibold">sostenibilidad ambiental</span>.
                        </p>

                        <div className="pt-6 flex items-center gap-4">
                            <div className="px-4 py-2 border border-white/10 bg-white/5 rounded text-xs font-bold text-white uppercase tracking-wider">
                                🟢 Operativo
                            </div>
                            <div className="px-4 py-2 border border-white/10 bg-white/5 rounded text-xs font-bold text-white uppercase tracking-wider">
                                🚀 Innovando
                            </div>
                        </div>
                    </div>

                    {/* Visual Tech (Control Room Abstracto) */}
                    <div className="relative h-64 lg:h-full w-full bg-white/5 border border-white/10 rounded-sm overflow-hidden group">
                        {/* CAMBIO 4: Gradiente de fondo en tonos bronces/oro oscuros */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark/40 to-gold-primary/20 mix-blend-overlay"></div>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 border border-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                                {/* CAMBIO 5: Círculo dashed en oro */}
                                <div className="w-24 h-24 border border-dashed border-gold-primary/50 rounded-full"></div>
                            </div>
                        </div>

                        {/* CAMBIO 6: Texto de monitoreo en oro */}
                        <div className="absolute bottom-4 left-4 text-xs font-mono text-gold-primary">
                            SYSTEM_MONITORING :: ACTIVE
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Tarjeta Misión */}
                    {/* CAMBIO 7: Hover border a oro */}
                    <div className="group p-8 border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold-primary/30 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition duration-500">
                            <span className="text-4xl">🎯</span>
                        </div>
                        <h3 className="text-xl font-bold uppercase text-white font-wide mb-4 flex items-center gap-3">
                            {/* CAMBIO 8: Barra lateral dorada */}
                            <span className="w-1.5 h-6 bg-gold-primary"></span>
                            Nuestra Misión
                        </h3>
                        <p className="text-gray-400 text-sm leading-7">
                            Entregar soluciones eficientes y de alta calidad. Nos enfocamos en optimizar los procesos operativos
                            de nuestros clientes y proteger sus activos bajo un marco de <span className="text-white font-semibold">innovación y confianza</span>.
                        </p>
                    </div>

                    {/* Tarjeta Visión */}
                    {/* CAMBIO 9: Hover border a ámbar (gold-secondary) */}
                    <div className="group p-8 border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-gold-secondary/30 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition duration-500">
                            <span className="text-4xl">👁️</span>
                        </div>
                        <h3 className="text-xl font-bold uppercase text-white font-wide mb-4 flex items-center gap-3">
                            {/* CAMBIO 10: Barra lateral ámbar */}
                            <span className="w-1.5 h-6 bg-gold-secondary"></span>
                            Nuestra Visión
                        </h3>
                        <p className="text-gray-400 text-sm leading-7">
                            Ser líderes reconocidos en soluciones tecnológicas integrales. Aspiramos a impactar positivamente,
                            estableciendo un nuevo estándar de <span className="text-white font-semibold">calidad y sostenibilidad</span> en el sector industrial.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
