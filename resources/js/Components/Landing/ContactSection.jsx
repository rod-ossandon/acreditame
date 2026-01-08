import React from 'react';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contacto" className="relative z-10 py-32 px-6 bg-transparent border-t border-white/5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                    <div>
                        {/* CAMBIO 1: Etiqueta en Oro */}
                        <span className="text-gold-primary font-mono text-xs font-bold tracking-widest mb-4 block">/// INITIATE_PROTOCOL</span>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase text-white font-wide leading-tight">
                            Hablemos de tu <br />
                            {/* CAMBIO 2: Gradiente de texto Oro->Ámbar */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-primary to-gold-secondary">
                                Próximo Proyecto
                            </span>
                        </h2>
                        <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-md font-mono">
                            ¿Listo para actualizar la seguridad e identidad de tu empresa?
                            Completa el formulario y nuestro equipo de ingeniería te responderá en menos de 24 horas.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ContactItem icon={<Mail />} label="Email" value="contacto@acreditame.cl" />
                        <ContactItem icon={<Phone />} label="Teléfono / WhatsApp" value="+56 9 1234 5678" />
                        <ContactItem icon={<MapPin />} label="Ubicación" value="Antofagasta, Chile" />
                    </div>

                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 rounded-full">
                        <span className="relative flex h-2 w-2">
                          {/* CAMBIO 3: Punto de estado en Oro (puedes dejarlo verde si prefieres semántica) */}
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-primary"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Soporte Online</span>
                    </div>
                </div>

                <div className="relative">
                    {/* CAMBIO 4: Luz de fondo del formulario (Oro/Ámbar) */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary/20 to-gold-secondary/20 rounded-lg blur-xl opacity-50"></div>

                    <form className="relative bg-[#000000]/70 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">

                        <div className="space-y-8">
                            <div className="group">
                                {/* CAMBIO 5: Label focus en Oro */}
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-primary transition-colors">
                                    Email Corporativo
                                </label>
                                {/* CAMBIO 6: Borde focus en Oro */}
                                <input
                                    type="email"
                                    placeholder="nombre@empresa.com"
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary focus:bg-white/[0.02] transition-all duration-300 font-sans"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-primary transition-colors">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary focus:bg-white/[0.02] transition-all duration-300 font-sans"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-primary transition-colors">
                                    Servicio de Interés
                                </label>
                                <select className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold-primary focus:bg-white/[0.02] transition-all duration-300 font-sans appearance-none cursor-pointer">
                                    <option className="bg-[#050014] text-gray-400">Seleccionar opción...</option>
                                    <option className="bg-[#050014]">Credenciales ID</option>
                                    <option className="bg-[#050014]">Soporte Técnico</option>
                                    <option className="bg-[#050014]">CCTV / Seguridad</option>
                                    <option className="bg-[#050014]">Consultoría</option>
                                </select>
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-gold-primary transition-colors">
                                    Mensaje / Requerimiento
                                </label>
                                <textarea
                                    rows="3"
                                    placeholder="Cuéntanos brevemente qué necesitas..."
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-primary focus:bg-white/[0.02] transition-all duration-300 font-sans resize-none"
                                ></textarea>
                            </div>

                            {/* CAMBIO 7: Botón con hover Oro */}
                            <button className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-primary hover:text-white transition-all duration-500 overflow-hidden">
                                <span className="relative z-10">Enviar Solicitud</span>
                                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />

                                <div className="absolute inset-0 bg-gold-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}

const ContactItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-4 group cursor-pointer">
        {/* CAMBIO 8: Iconos de contacto con hover Oro */}
        <div className="w-12 h-12 border border-white/10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-gold-primary/50 group-hover:bg-gold-primary/10 transition-all duration-300">
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500">{label}</span>
            <span className="text-white font-mono text-sm group-hover:text-gold-primary transition-colors">{value}</span>
        </div>
    </div>
);
