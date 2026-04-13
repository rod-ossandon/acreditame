import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, ShieldCheck, User, MessageCircle, Hash, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from '@inertiajs/react';
import ReCAPTCHA from "react-google-recaptcha";

const serviceOptions = [
    "Credenciales", "Soporte Técnico", "Seguridad Industrial",
    "Consultoría", "Ciberseguridad", "Telecomunicaciones"
];

export default function ContactSection() {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        email: '',
        name: '',
        phone: '',
        services: [],
        message: '',
        captcha_token: null,
    });

    const toggleService = (service) => {
        const newServices = data.services.includes(service)
            ? data.services.filter(s => s !== service)
            : [...data.services, service];
        setData('services', newServices);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/contacto', { preserveScroll: true, onSuccess: () => reset() });
    };

    return (
        <section id="contacto" className="relative z-10 py-16 md:py-32 px-4 sm:px-6 bg-[#050505] overflow-hidden">

            {/* --- FONDO --- */}
            <div className="absolute top-1/4 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* --- LADO IZQUIERDO: TEXTOS (Ahora siempre primero) --- */}
                    <div className="space-y-8 md:space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block mb-4 px-3 py-1 rounded border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 font-mono text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase">
                                /// CONTACTO_OPERATIVO
                            </span>

                            <h2 className="font-goldman text-4xl md:text-7xl text-white leading-tight md:leading-none tracking-tighter uppercase mb-6">
                                Hablemos de tu <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 italic pr-4">
                                    Próximo Proyecto
                                </span>
                            </h2>

                            <p className="font-sans text-zinc-500 text-base md:text-lg leading-relaxed max-w-md border-l-2 border-yellow-500/50 pl-6 md:pl-8 italic">
                                Complete el formulario para iniciar el <span className="text-white font-bold">protocolo</span> de comunicación técnica.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            <InfoItem icon={<Mail size={18}/>} label="EMAIL_ENLACE" value="contacto@acreditame.cl" />
                            <InfoItem icon={<Phone size={18}/>} label="LÍNEA_DIRECTA" value="+56 9 1234 5678" />
                            <InfoItem icon={<MapPin size={18}/>} label="UBICACIÓN_ID" value="Antofagasta, Chile" />
                        </div>
                    </div>

                    {/* --- LADO DERECHO: FORMULARIO --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10 bg-white/[0.01] border border-white/5 p-6 md:p-14 rounded-[1.5rem] md:rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">

                            <AnimatePresence>
                                {wasSuccessful && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-3 bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-[8px] md:text-[10px] tracking-widest uppercase text-center rounded-lg flex items-center justify-center gap-2"
                                    >
                                        <ShieldCheck size={14} /> SISTEMA: Transmitido con éxito
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <FloatingInput
                                        label="NOMBRE_AGENTE"
                                        icon={<User size={14}/>}
                                        value={data.name}
                                        onChange={v => setData('name', v)}
                                        error={errors.name}
                                        placeholder="Nombre completo"
                                    />
                                    <FloatingInput
                                        label="TELÉFONO_LINK"
                                        icon={<Smartphone size={14}/>}
                                        value={data.phone}
                                        onChange={v => setData('phone', v)}
                                        placeholder="+56 9 ..."
                                    />
                                </div>

                                <FloatingInput
                                    label="EMAIL_ENLACE"
                                    icon={<Mail size={14}/>}
                                    value={data.email}
                                    onChange={v => setData('email', v)}
                                    error={errors.email}
                                    placeholder="nombre@empresa.com"
                                />

                                <div className="space-y-4">
                                    <label className="text-[9px] md:text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase flex items-center gap-2">
                                        <Hash size={12} className="text-yellow-500" /> SERVICIOS_REQUERIDOS
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {serviceOptions.map((service) => {
                                            const active = data.services.includes(service);
                                            return (
                                                <button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`px-3 py-2 rounded-full text-[8px] md:text-[10px] font-mono border transition-all duration-500 ${
                                                        active
                                                        ? 'bg-yellow-500 border-yellow-500 text-black shadow-lg shadow-yellow-500/10'
                                                        : 'bg-transparent border-white/10 text-white/40'
                                                    }`}
                                                >
                                                    {service}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <FloatingInput
                                    label="DESCRIPCIÓN_PROYECTO"
                                    icon={<MessageCircle size={14}/>}
                                    value={data.message}
                                    onChange={v => setData('message', v)}
                                    textarea
                                    error={errors.message}
                                    placeholder="Detalles del requerimiento..."
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-4">
                                <div className="w-full sm:w-auto flex justify-center scale-90 sm:scale-100 origin-center sm:origin-left">
                                    <ReCAPTCHA
                                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                                        onChange={(t) => setData('captcha_token', t)}
                                        theme="dark"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing || !data.captcha_token}
                                    className="group relative w-full sm:w-auto px-10 py-5 border border-yellow-500 text-yellow-500 font-goldman text-[10px] tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:text-black"
                                >
                                    <div className="absolute inset-0 bg-yellow-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {processing ? 'ENVIANDO...' : 'ENVIAR'}
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const FloatingInput = ({ label, icon, value, onChange, textarea, error, placeholder }) => {
    const [focused, setFocused] = React.useState(false);
    return (
        <div className="relative group w-full text-left">
            <div className={`flex items-center gap-3 mb-2 transition-colors duration-500 ${focused ? 'text-yellow-500' : 'text-white/20'}`}>
                {icon}
                <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] font-black">{label}</span>
            </div>
            {textarea ? (
                <textarea rows="2" value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-white/5 focus:outline-none transition-all resize-none font-sans text-base"
                />
            ) : (
                <input type="text" value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-white placeholder-white/5 focus:outline-none transition-all font-sans text-base"
                />
            )}
            <div className={`absolute bottom-0 left-0 h-[1.5px] bg-yellow-500 transition-all duration-700 ${focused ? 'w-full' : 'w-0'}`} />
            {error && <p className="text-[9px] text-red-500 font-mono mt-2 uppercase">{error}</p>}
        </div>
    );
};

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-start gap-4 md:gap-6 group text-left">
        <div className="mt-1 text-yellow-500 group-hover:scale-110 transition-transform duration-500 shrink-0">{icon}</div>
        <div className="min-w-0">
            <span className="block text-[8px] md:text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-1 font-black">{label}</span>
            <span className="text-white text-base md:text-xl font-light tracking-tight group-hover:text-yellow-500 transition-colors duration-500 break-words">{value}</span>
        </div>
    </div>
);
