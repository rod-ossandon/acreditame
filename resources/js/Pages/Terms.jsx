import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import {
    Shield, FileText, Lock, Scale, AlertTriangle, Globe, ChevronRight,
    Server, Eye, Cookie, HelpCircle, ChevronDown, MessageSquare, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import WhatsAppButton from '@/Components/Landing/WhatsAppButton';

export default function Terms() {
    const [activeSection, setActiveSection] = useState('general');

    // --- LÓGICA DE AUTO-SCROLL (Vital para el Footer) ---
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => {
                scrollToSection(id);
            }, 500); // Esperamos a que cargue el DOM
        }
    }, []);

    const scrollToSection = (id) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            // 140px de offset para que el Navbar fijo no tape el título
            const y = element.getBoundingClientRect().top + window.scrollY - 140;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-black min-h-screen text-white selection:bg-yellow-500/30 font-goldman relative">
            <Head title="Legal & Soporte | Acreditame" />
            <WhatsAppButton />

            {/* --- FONDO TÉCNICO --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}>
            </div>
            <div className="fixed top-0 left-0 w-full h-[600px] bg-gradient-to-b from-slate-900/80 to-transparent pointer-events-none z-0"></div>

            <Navbar />

            <main className="relative z-10 pt-32 pb-24 px-6">
                <div className="max-w-[1400px] mx-auto">

                    {/* --- CABECERA PRINCIPAL --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 border-b border-white/10 pb-8"
                    >
                        <div className="flex items-center gap-3 mb-4"> <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span> <span className="text-yellow-500 font-goldman text-xs tracking-[0.3em] uppercase bg-yellow-500/5 px-2 py-1 rounded border border-yellow-500/10"> /// Descubre Nuestros Términos y Condiciones </span> </div>
                        <h1 className="text-4xl md:text-6xl font-goldman uppercase tracking-tighter mb-4"> Condiciones de Uso  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Claras y Concisas</span> </h1>
                        <p className="mt-4 text-zinc-400 max-w-3xl text-lg leading-relaxed border-l-4 border-yellow-500 pl-6"> Explora los términos que rigen el uso de nuestros servicios y productos,  <strong className="text-white">diseñados para proteger tus intereses y garantizar una experiencia segura.</strong> </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* --- NAVEGACIÓN LATERAL (STICKY) --- */}
                        <div className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 space-y-8 overflow-y-auto max-h-[80vh] pr-4 custom-scrollbar">

                                {/* GRUPO 1: TÉRMINOS */}
                                <div>
                                    <p className="font-goldman text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pl-4 border-l-2 border-yellow-500">
                                        Términos de Servicio
                                    </p>
                                    <nav className="space-y-1">
                                        <NavItem id="general" label="01. General y Uso" icon={<FileText size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="propiedad" label="02. Propiedad Int." icon={<Shield size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="productos" label="03. Productos/Servicios" icon={<BookOpen size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="responsabilidad" label="04. Responsabilidad" icon={<AlertTriangle size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="legal" label="05. Jurisdicción" icon={<Scale size={16} />} active={activeSection} onClick={scrollToSection} />
                                    </nav>
                                </div>

                                {/* GRUPO 2: PRIVACIDAD */}
                                <div>
                                    <p className="font-goldman text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pl-4 border-l-2 border-green-500">
                                        Privacidad
                                    </p>
                                    <nav className="space-y-1">
                                        <NavItem id="privacidad_intro" label="06. Recopilación" icon={<Server size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="uso_datos" label="07. Uso de Datos" icon={<Lock size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="cookies" label="08. Cookies" icon={<Cookie size={16} />} active={activeSection} onClick={scrollToSection} />
                                        <NavItem id="derechos" label="09. Derechos" icon={<Eye size={16} />} active={activeSection} onClick={scrollToSection} />
                                    </nav>
                                </div>

                                {/* GRUPO 3: SOPORTE / FAQ */}
                                <div>
                                    <p className="font-goldman text-[10px] text-zinc-500 uppercase tracking-widest mb-3 pl-4 border-l-2 border-cyan-500">
                                        Ayuda
                                    </p>
                                    <nav className="space-y-1">
                                        <NavItem id="faq" label="10. Preguntas Frecuentes" icon={<HelpCircle size={16} />} active={activeSection} onClick={scrollToSection} />
                                    </nav>
                                </div>
                            </div>
                        </div>

                        {/* --- CONTENIDO PRINCIPAL --- */}
                        <div className="lg:col-span-9 space-y-8">

                            {/* ================= SECCIÓN: TÉRMINOS (AMARILLO) ================= */}

                            <SectionHeader title="Términos y Condiciones" color="yellow" />

                            <TermCard id="general" number="01" title="Generalidades y Aceptación" color="yellow">
                                <p className="mb-4">
                                    Al acceder, navegar o utilizar este sitio web, el usuario declara haber leído, entendido y aceptado la totalidad de los presentes <strong>Términos y Condiciones</strong>.
                                    Si no está de acuerdo con estos términos, debe abandonar el sitio inmediatamente.
                                </p>
                                <div className="bg-white/5 p-6 rounded-lg border border-white/5 mb-4">
                                    <h4 className="text-white font-bold mb-2 text-sm uppercase">1.1 Uso del Sitio</h4>
                                    <p className="mb-2 text-sm text-zinc-300">Queda estrictamente prohibido:</p>
                                    <ul className="grid gap-2">
                                        <ListItem>Causar daño al sitio web, a su disponibilidad o accesibilidad.</ListItem>
                                        <ListItem>Infringir derechos de propiedad intelectual o realizar ingeniería inversa.</ListItem>
                                        <ListItem>Transmisión de virus o códigos dañinos.</ListItem>
                                    </ul>
                                </div>
                                <p className="text-sm text-zinc-500 italic">
                                    Nos reservamos el derecho de restringir el acceso a cualquier persona, en cualquier momento, sin justificación previa.
                                </p>
                            </TermCard>

                            <TermCard id="propiedad" number="02" title="Propiedad Intelectual" color="yellow">
                                <p>
                                    Todo el contenido del sitio (marcas, logotipos, gráficos, textos, software y modelos 3D) es propiedad exclusiva de <strong>Acreditame y Servicios Limitada</strong> y está protegido por leyes de propiedad intelectual nacionales e internacionales.
                                </p>
                                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-500/90 text-sm font-mono flex items-center gap-3">
                                    <AlertTriangle size={18} />
                                    <span>Queda prohibida su reproducción, distribución o modificación no autorizada.</span>
                                </div>
                            </TermCard>

                            <TermCard id="productos" number="03" title="Productos y Servicios" color="yellow">
                                <ul className="space-y-3">
                                    <li className="bg-zinc-900 p-4 rounded border border-white/5">
                                        <strong className="text-white block text-sm mb-1">Modificaciones:</strong>
                                        <span className="text-zinc-400 text-sm">Las descripciones y precios están sujetos a cambio sin previo aviso.</span>
                                    </li>
                                    <li className="bg-zinc-900 p-4 rounded border border-white/5">
                                        <strong className="text-white block text-sm mb-1">Limitación de Venta:</strong>
                                        <span className="text-zinc-400 text-sm">Nos reservamos el derecho de limitar las ventas a regiones geográficas o jurisdicciones específicas.</span>
                                    </li>
                                </ul>
                            </TermCard>

                            <TermCard id="responsabilidad" number="04" title="Responsabilidad y Garantías" color="yellow">
                                <p className="mb-4">
                                    Los servicios se proporcionan «tal como están». No seremos responsables por daños directos o indirectos derivados del uso del sitio.
                                </p>
                                <div className="pl-4 border-l-2 border-white/20">
                                    <h4 className="text-white font-bold text-sm mb-1">Cumplimiento Ley 19.496</h4>
                                    <p className="text-zinc-400 text-sm">
                                        Garantizamos reparaciones por defectos comprobados y derecho a retracto en compras en línea bajo las condiciones legales vigentes en Chile.
                                    </p>
                                </div>
                            </TermCard>

                            <TermCard id="legal" number="05" title="Jurisdicción y Contacto" color="yellow">
                                <div className="flex gap-4 items-start">
                                    <Globe className="text-zinc-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-white font-bold text-sm uppercase mb-2">Ley Aplicable</h4>
                                        <p className="text-zinc-400 text-sm mb-4">
                                            Estos términos se rigen por las leyes de la <strong>República de Chile</strong>.
                                            Cualquier controversia será resuelta exclusivamente por los tribunales competentes de la ciudad de <strong>Antofagasta</strong>.
                                        </p>
                                        <p className="text-zinc-500 text-xs font-mono">
                                            Consultas legales: contacto@acreditame.cl
                                        </p>
                                    </div>
                                </div>
                            </TermCard>


                            {/* ================= SECCIÓN: PRIVACIDAD (VERDE) ================= */}

                            <div className="py-8"></div>
                            <SectionHeader title="Política de Privacidad" color="green" />

                            <TermCard id="privacidad_intro" number="06" title="Información Recopilada" color="green">
                                <p className="mb-4">
                                    En Acreditame y Servicios Limitada protegemos su privacidad. Recopilamos:
                                </p>
                                <ul className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded border border-white/5">
                                        <strong className="text-white block text-sm mb-1">Directa:</strong>
                                        <span className="text-zinc-400 text-xs">Nombre, Rut, Dirección, Teléfono, Email y datos de facturación.</span>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded border border-white/5">
                                        <strong className="text-white block text-sm mb-1">Automática:</strong>
                                        <span className="text-zinc-400 text-xs">Dirección IP, navegador y sistema operativo mediante cookies.</span>
                                    </div>
                                </ul>
                            </TermCard>

                            <TermCard id="uso_datos" number="07" title="Uso y Protección" color="green">
                                <p className="mb-4">La información se utiliza para:</p>
                                <ul className="grid gap-2 mb-6">
                                    <ListItem color="green">Procesar y gestionar pedidos y entregas.</ListItem>
                                    <ListItem color="green">Proporcionar soporte técnico.</ListItem>
                                    <ListItem color="green">Cumplimiento de requisitos legales.</ListItem>
                                </ul>
                                <h4 className="text-green-500 font-mono text-xs uppercase tracking-widest mb-2">// SEGURIDAD</h4>
                                <p className="text-zinc-400 text-sm">
                                    Implementamos cifrado de datos sensibles y restricción de acceso únicamente a personal autorizado. No vendemos ni alquilamos información a terceros.
                                </p>
                            </TermCard>

                            <TermCard id="cookies" number="08" title="Cookies y Terceros" color="green">
                                <p className="mb-4">
                                    Utilizamos cookies necesarias (funcionamiento) y de análisis (tráfico). Puede configurar su navegador para rechazarlas.
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    Podemos compartir datos con proveedores externos (logística/pagos) solo para fines operativos, o cuando la ley lo requiera.
                                </p>
                            </TermCard>

                            <TermCard id="derechos" number="09" title="Derechos del Usuario" color="green">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <p className="mb-2 text-white font-bold">Usted tiene derecho a:</p>
                                        <ul className="space-y-2 text-sm text-zinc-400">
                                            <li>• Acceder y corregir sus datos.</li>
                                            <li>• Solicitar la eliminación de datos.</li>
                                            <li>• Retirar su consentimiento.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-zinc-900 p-6 rounded-xl border border-white/10 text-center">
                                        <p className="text-zinc-500 text-xs font-mono uppercase mb-2">Canal ARCO</p>
                                        <a href="mailto:contacto@acreditame.cl" className="text-green-500 hover:text-white transition-colors text-lg font-mono font-bold">
                                            contacto@acreditame.cl
                                        </a>
                                    </div>
                                </div>
                            </TermCard>


                            {/* ================= SECCIÓN: FAQ (CYAN) ================= */}

                            <div className="py-8"></div>
                            <SectionHeader title="Preguntas Frecuentes" color="cyan" />

                            <div id="faq" className="space-y-4">
                                <FaqItem
                                    question="¿Qué sucede si no estoy de acuerdo con los términos?"
                                    answer="Si no estás de acuerdo con nuestros términos y condiciones, lamentablemente no podrás utilizar nuestros servicios. Te recomendamos contactarnos para discutir cualquier inquietud específica antes de proceder."
                                />
                                <FaqItem
                                    question="¿Cómo puedo obtener más información sobre un término específico?"
                                    answer="Puedes contactarnos directamente a través de nuestro formulario de contacto o al correo contacto@acreditame.cl para obtener aclaraciones detalladas sobre cualquier cláusula técnica o legal."
                                />
                                <FaqItem
                                    question="¿Los términos y condiciones pueden cambiar?"
                                    answer="Sí, los términos y condiciones pueden ser modificados en cualquier momento para adaptarse a nuevas normativas o mejoras en el servicio. Te recomendamos revisarlos periódicamente para estar informado de cualquier actualización."
                                />
                                <FaqItem
                                    question="¿Qué hago si encuentro un error en los términos?"
                                    answer="Si detectas un error tipográfico o de contenido en nuestros términos, por favor infórmanos de inmediato a través de nuestros canales de soporte para que podamos corregirlo lo antes posible."
                                />
                            </div>

                            {/* Banner de Contacto Final */}
                            <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">¿Aún tienes dudas operativas?</h4>
                                    <p className="text-zinc-400 text-sm">Nuestro equipo de ingeniería legal está disponible para responder.</p>
                                </div>
                                <a href="/#contacto" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                                    Contactar Soporte
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

/* --- COMPONENTES AUXILIARES DE DISEÑO --- */

// Cabecera de Sección (Líneas divisorias de color)
const SectionHeader = ({ title, color = "yellow" }) => {
    const colors = {
        yellow: "text-yellow-500 bg-yellow-500/50",
        green: "text-green-500 bg-green-500/50",
        cyan: "text-cyan-500 bg-cyan-500/50"
    };
    const textColor = colors[color].split(' ')[0];
    const bgColor = colors[color].split(' ')[1];

    return (
        <div className="flex items-center gap-4 mb-8 mt-4">
            <div className={`h-[1px] flex-grow ${bgColor}`}></div>
            <h2 className={`text-2xl font-black uppercase tracking-widest ${textColor}`}>
                {title}
            </h2>
            <div className={`h-[1px] flex-grow ${bgColor}`}></div>
        </div>
    );
};

// Tarjeta de Contenido (Glassmorphism)
const TermCard = ({ id, number, title, children, color = "yellow" }) => {
    const borderClass = {
        yellow: "hover:border-yellow-500/30",
        green: "hover:border-green-500/30",
        cyan: "hover:border-cyan-500/30"
    };
    const numberColor = {
        yellow: "group-hover:text-yellow-500/10",
        green: "group-hover:text-green-500/10",
        cyan: "group-hover:text-cyan-500/10"
    };
    const badgeClass = {
        yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
        green: "text-green-500 bg-green-500/10 border-green-500/20",
        cyan: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
    };

    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className={`group relative p-8 md:p-10 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl transition-all duration-500 hover:bg-zinc-900/80 ${borderClass[color]}`}
        >
            <div className={`absolute top-4 right-6 font-mono text-6xl font-black text-white/5 pointer-events-none select-none transition-colors ${numberColor[color]}`}>
                {number}
            </div>

            <div className="flex items-center gap-3 mb-6">
                <span className={`font-mono text-xs font-bold tracking-widest px-2 py-1 rounded border ${badgeClass[color]}`}>
                    //{number}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
            </div>

            <div className="text-zinc-300 leading-relaxed text-base font-light">
                {children}
            </div>
        </motion.div>
    );
};

// Ítem de Navegación Lateral
const NavItem = ({ id, label, icon, active, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`
            w-full flex items-center gap-3 px-4 py-3 text-xs transition-all duration-300 group relative border-l-2
            ${active === id
                ? 'border-white bg-white/5 text-white font-bold'
                : 'border-transparent text-zinc-500 hover:text-white hover:bg-white/5'
            }
        `}
    >
        <span className={`transition-colors ${active === id ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
            {icon}
        </span>
        <span className="relative z-10 text-left">{label}</span>
    </button>
);

// Ítem de Lista con Check
const ListItem = ({ children, color = "yellow" }) => {
    const iconColor = {
        yellow: "text-yellow-500",
        green: "text-green-500",
        cyan: "text-cyan-500"
    };
    return (
        <li className="flex items-start gap-3 text-zinc-400 text-sm">
            <ChevronRight size={16} className={`shrink-0 mt-0.5 ${iconColor[color]}`} />
            <span>{children}</span>
        </li>
    );
};

// Acordeón para FAQ
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border rounded-xl bg-zinc-900/30 overflow-hidden transition-all duration-300 ${isOpen ? 'border-cyan-500/50 bg-zinc-900/60' : 'border-white/5 hover:border-cyan-500/30'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <div className="flex items-center gap-4">
                    <MessageSquare size={20} className={`transition-colors ${isOpen ? 'text-cyan-400' : 'text-zinc-600'}`} />
                    <span className={`font-bold text-base md:text-lg transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                        {question}
                    </span>
                </div>
                <ChevronDown className={`text-cyan-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-6 pl-16 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
