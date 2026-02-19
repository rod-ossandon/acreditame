import React from 'react';
import { ArrowUp, Linkedin, Instagram, Mail, ShieldCheck } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-20 bg-black/90 backdrop-blur-xl border-t border-white/10 text-white font-sans overflow-hidden">

            {/* Decoración de fondo (Grilla técnica) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative">

                {/* --- SECCIÓN SUPERIOR: DATOS Y NAVEGACIÓN --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* 1. IDENTIDAD */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
                                <span className="font-black text-black text-lg">A</span>
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tighter">ACREDITAME</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Ingeniería y desarrollo de software industrial desde el corazón minero de Chile. Fusionamos robustez operativa con innovación digital.
                        </p>

                        {/* Coordenadas Antofagasta (Toque técnico) */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 rounded text-[10px] font-mono text-yellow-500/80">
                            <MapPinIcon className="w-3 h-3" />
                            <span>23.6509° S, 70.3975° W // ANTOFAGASTA_HQ</span>
                        </div>
                    </div>

                    {/* 2. NAVEGACIÓN RÁPIDA */}
                    <div>
                        <h4 className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">// DIRECTORIO</h4>
                        <ul className="space-y-4">
                            {['Nosotros', 'Servicios', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <Link href={`/#${item.toLowerCase()}`} className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. LEGAL & CERTIFICACIONES */}
                    <div>
                        <h4 className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">// PROTOCOLOS</h4>
                        <ul className="space-y-4">

                            {/* Enlace a Términos Generales */}
                            <li>
                                <Link href="/terminos" className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Términos y Condiciones
                                </Link>
                            </li>

                            {/* --- NUEVO ENLACE A FAQ --- */}
                            <li>
                                {/* Usamos el #faq para activar el scroll automático */}
                                <Link href="/terminos#faq" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Preguntas Frecuentes
                                </Link>
                            </li>

                            {/* Enlace a Privacidad (apunta al mismo archivo pero diferente sección) */}
                            <li>
                                <Link href="/terminos#privacidad_intro" className="text-zinc-400 hover:text-green-400 text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Política de Privacidad
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* 4. CONEXIÓN & ESTADO */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">// RED_ENLACE</h4>
                            <div className="flex gap-4">
                                <SocialButton icon={<Instagram size={18} />} href="#" label="Instagram" />
                                <SocialButton icon={<Mail size={18} />} href="mailto:contacto@acreditame.cl" label="Email" />
                            </div>
                        </div>

                        {/* Botón Volver Arriba */}
                        <button
                            onClick={scrollToTop}
                            className="group mt-10 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-yellow-500 transition-colors w-fit"
                        >
                            <span>Volver a superficie</span>
                            <div className="p-3 border border-white/10 group-hover:border-yellow-500 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* --- BARRA INFERIOR: COPYRIGHT --- */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-xs font-mono">
                        © {new Date().getFullYear()} ACREDITAME LTDA. | TODOS LOS DERECHOS RESERVADOS.
                    </p>

                    {/* Indicador de estado del sistema */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 rounded-full border border-green-500/10">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold text-green-500 tracking-wider">SYSTEMS: ONLINE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Botón social auxiliar
const SocialButton = ({ icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 rounded hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 group"
    >
        {icon}
    </a>
);

// Icono de Mapa simple (puedes importarlo de lucide-react si prefieres)
const MapPinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);
