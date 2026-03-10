import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@inertiajs/react';

const serviceOptions = [
    "Credenciales",
    "Soporte Técnico",
    "Seguridad Industrial",
    "Consultoría",
    "Ciberseguridad",
    "Telecomunicaciones"
];

export default function ContactSection() {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        email: '',
        name: '',
        services: [],
        message: ''
    });

    const toggleService = (service) => {
        const currentServices = [...data.services];
        const isSelected = currentServices.includes(service);
        const newServices = isSelected
            ? currentServices.filter(s => s !== service)
            : [...currentServices, service];

        setData('services', newServices);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contacto', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <section id="contacto" className="relative z-10 py-32 px-6 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div>
                        <span className="text-yellow-500 font-mono text-xs font-bold tracking-[0.3em] mb-4 block bg-yellow-500/10 w-fit px-2 py-1 rounded border border-yellow-500/20">
                            /// CONTACTO
                        </span>
                        <h2 className="text-4xl md:text-6xl font-goldman uppercase text-white leading-none tracking-tighter">
                            Hablemos de tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">
                                Próximo Proyecto
                            </span>
                        </h2>
                        <p className="font-goldman mt-8 text-zinc-400 text-lg leading-relaxed max-w-md border-l-2 border-yellow-500/50 pl-6">
                           Complete el formulario a continuación para ponerse en contacto con nosotros y descubrir cómo podemos ayudar a su negocio a <span className="text-white font-bold">crecer</span>.
                        </p>
                    </div>

                    <div className="space-y-6 font-goldman">
                        <ContactItem icon={<Mail />} label="EMAIL" value="contacto@acreditame.cl" />
                        <ContactItem icon={<Phone />} label="TELEFONO" value="+56 9 1234 5678" />
                        <ContactItem icon={<MapPin />} label="UBICACION" value="Antofagasta, Chile" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-transparent rounded-2xl blur-2xl opacity-30 pointer-events-none"></div>

                    <form onSubmit={handleSubmit} className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
                        <AnimatePresence>
                            {wasSuccessful && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded flex items-center gap-3 text-green-400 font-mono text-[10px] uppercase tracking-widest"
                                >
                                    <ShieldCheck size={16} />
                                    SISTEMA: Correo enviado con éxito
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-8">
                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-2 group-focus-within:text-yellow-400 transition-colors">// EMAIL</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    placeholder="nombre@empresa.com"
                                    className={`w-full bg-white/5 border-b py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 transition-all font-mono text-sm ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'}`}
                                />
                                {errors.email && <p className="mt-1 text-[9px] text-red-500 font-mono uppercase">{errors.email}</p>}
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-2 group-focus-within:text-yellow-400 transition-colors">// NOMBRE_AGENTE</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="Tu nombre completo"
                                    className={`w-full bg-white/5 border-b py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 transition-all font-mono text-sm ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'}`}
                                />
                                {errors.name && <p className="mt-1 text-[9px] text-red-500 font-mono uppercase">{errors.name}</p>}
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-3">
                                    // REQUERIMIENTOS (SELECCIÓN MÚLTIPLE)
                                </label>
                                <div className="flex flex-wrap gap-2">
                                    {serviceOptions.map((service) => {
                                        const isSelected = data.services.includes(service);
                                        return (
                                            <button
                                                key={service}
                                                type="button"
                                                onClick={() => toggleService(service)}
                                                className={`
                                                    relative px-3 py-2 text-[11px] font-mono uppercase tracking-wide border transition-all duration-300 flex items-center gap-2
                                                    ${isSelected
                                                        ? 'bg-yellow-500/10 border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(234,179,8,0.2)]'
                                                        : 'bg-white/5 border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                                                    }
                                                `}
                                            >
                                                <div className={`w-3 h-3 border flex items-center justify-center transition-colors ${isSelected ? 'border-yellow-500 bg-yellow-500' : 'border-zinc-600 bg-transparent'}`}>
                                                    {isSelected && <Check size={10} className="text-black" strokeWidth={4} />}
                                                </div>
                                                {service}
                                            </button>
                                        );
                                    })}
                                </div>
                                {errors.services && <p className="mt-2 text-[9px] text-red-500 font-mono uppercase">{errors.services}</p>}
                            </div>

                            <div className="group">
                                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-yellow-500/70 mb-2 group-focus-within:text-yellow-400 transition-colors">// MENSAJE</label>
                                <textarea
                                    rows="3"
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    placeholder="Describa los parámetros del proyecto..."
                                    className={`w-full bg-white/5 border-b py-3 px-4 text-white placeholder-white/20 focus:outline-none focus:bg-white/10 transition-all font-mono text-sm resize-none ${errors.message ? 'border-red-500' : 'border-white/10 focus:border-yellow-500'}`}
                                ></textarea>
                                {errors.message && <p className="mt-1 text-[9px] text-red-500 font-mono uppercase">{errors.message}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-widest text-xs transition-all duration-500 overflow-hidden ${processing ? 'opacity-70 cursor-wait' : 'hover:bg-white'}`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {processing ? 'ENVIANDO...' : 'ENVIAR CORREO'}
                                    {!processing && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </span>
                                {!processing && (
                                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

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
