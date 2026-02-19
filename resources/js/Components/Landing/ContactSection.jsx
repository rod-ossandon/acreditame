import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Definimos las opciones disponibles
const serviceOptions = [
    "Credenciales ID",
    "Soporte Técnico",
    "Seguridad Industrial",
    "Consultoría",
    "Ciberseguridad",
    "Telecomunicaciones"
];

export default function ContactSection() {
    const [isSending, setIsSending] = useState(false);

    // Estado del formulario actualizado para array de servicios
    const [formState, setFormState] = useState({
        email: '',
        name: '',
        services: [], // Ahora es un array
        message: ''
    });

    // Lógica para marcar/desmarcar servicios
    const toggleService = (service) => {
        setFormState(prev => {
            const isSelected = prev.services.includes(service);
            if (isSelected) {
                // Si ya está, lo sacamos
                return { ...prev, services: prev.services.filter(s => s !== service) };
            } else {
                // Si no está, lo agregamos
                return { ...prev, services: [...prev.services, service] };
            }
        });
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        console.log(formState); // Para que veas los datos en consola
        setTimeout(() => setIsSending(false), 2000);
    };

    return (
        <section id="contacto" className="relative z-10 py-32 px-6 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                {/* COLUMNA IZQUIERDA (Igual que antes) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    {/* ... (Todo el contenido de texto izquierdo se mantiene igual) ... */}
                    <div>
                        <span className="text-yellow-500 font-mono text-xs font-bold tracking-[0.3em] mb-4 block bg-yellow-500/10 w-fit px-2 py-1 rounded border border-yellow-500/20">
                            /// CONTACTO
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none tracking-tighter">
                            Hablemos de tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                Próximo Proyecto
                            </span>
                        </h2>
                        <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-md border-l-2 border-yellow-500/50 pl-6">
                           Complete el formulario a continuación para ponerse en contacto con nosotros y descubrir cómo podemos ayudar a su negocio a <span className="text-white font-bold">crecer</span>.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ContactItem icon={<Mail />} label="EMAIL" value="contacto@acreditame.cl" />
                        <ContactItem icon={<Phone />} label="TELEFONO" value="+56 9 1234 5678" />
                        <ContactItem icon={<MapPin />} label="UBICACION" value="Antofagasta, Chile" />
                    </div>
                </motion.div>

                {/* --- COLUMNA DERECHA: FORMULARIO --- */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-2xl blur-2xl opacity-30 pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">

                        {/* Decoraciones HUD */}
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/10 rounded-bl-2xl"></div>

                        <div className="space-y-8">

                            {/* EMAIL & NOMBRE (Inputs normales) */}
                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-2 group-focus-within:text-yellow-400 transition-colors">// EMAIL</label>
                                <input type="email" name="email" onChange={handleChange} placeholder="nombre@empresa.com" className="w-full bg-white/5 border-b border-white/10 py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all font-mono text-sm" />
                            </div>
                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-2 group-focus-within:text-yellow-400 transition-colors">// NOMBRE_AGENTE</label>
                                <input type="text" name="name" onChange={handleChange} placeholder="Tu nombre completo" className="w-full bg-white/5 border-b border-white/10 py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all font-mono text-sm" />
                            </div>

                            {/* --- AQUÍ ESTÁ EL CAMBIO: SELECTOR MÚLTIPLE DE SERVICIOS --- */}
                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-3">
                                    // REQUERIMIENTOS (SELECCIÓN MÚLTIPLE)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {serviceOptions.map((service) => {
                                        const isSelected = formState.services.includes(service);
                                        return (
                                            <button
                                                key={service}
                                                type="button" // Importante: type="button" para no enviar el form
                                                onClick={() => toggleService(service)}
                                                className={`
                                                    relative px-3 py-2 text-[11px] font-mono uppercase tracking-wide border transition-all duration-300 flex items-center gap-2
                                                    ${isSelected
                                                        ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                                                        : 'bg-white/5 border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                                                    }
                                                `}
                                            >
                                                {/* Checkbox visual simulado */}
                                                <div className={`w-3 h-3 border flex items-center justify-center transition-colors ${isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-zinc-600 bg-transparent'}`}>
                                                    {isSelected && <Check size={10} className="text-black" strokeWidth={4} />}
                                                </div>
                                                {service}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* MENSAJE */}
                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-2 group-focus-within:text-yellow-400 transition-colors">// MENSAJE</label>
                                <textarea name="message" onChange={handleChange} rows="3" placeholder="Describa los parámetros del proyecto..." className="w-full bg-white/5 border-b border-white/10 py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:border-yellow-500 focus:bg-white/10 transition-all font-mono text-sm resize-none"></textarea>
                            </div>

                            <button className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all duration-500 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSending ? 'ENVIANDO...' : 'ENVIAR'}
                                    {!isSending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}

// Componente auxiliar ContactItem (Igual que antes)
const ContactItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-5 group cursor-pointer p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
        <div className="w-12 h-12 border border-yellow-500/30 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-500 group-hover:text-white group-hover:bg-yellow-500 transition-all duration-300 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            {React.cloneElement(icon, { size: 20 })}
        </div>
        <div>
            <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-1">{label}</span>
            <span className="text-white font-sans text-lg font-medium group-hover:text-yellow-400 transition-colors">{value}</span>
        </div>
    </div>
);
