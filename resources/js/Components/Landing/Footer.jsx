import React from 'react';
import { ArrowUp, Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from '@inertiajs/react';
import logo from '../../assets/LALB.png';

export default function Footer() {

    // --- FUNCIÓN DE NAVEGACIÓN INTELIGENTE ---
    const handleNavigation = (e, id) => {
        e.preventDefault();

        // 1. Verificamos si estamos fuera de la Home (ej: /servicios/ciberseguridad)
        if (window.location.pathname !== '/') {
            // Redirección forzada a la Home + Ancla
            window.location.href = `/#${id}`;
            return;
        }

        // 2. Si estamos en la Home, ejecutamos el scroll suave
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Margen para el Navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Actualizamos la URL sin recargar
            window.history.pushState(null, '', `/#${id}`);
        }
    };

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

                {/* --- SECCIÓN SUPERIOR --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* 1. IDENTIDAD */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-500 rounded-sm flex items-center justify-center">
                                <img
                                    src={logo} // USAMOS LA VARIABLE IMPORTADA
                                    alt="Logo Acreditame"
                                    className="relative w-12 h-12 object-contain filter drop-shadow-[0_0_5px_rgba(234,179,8,0.4)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-2xl font-goldman uppercase tracking-tighter">ACREDITAME</h3>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Ingeniería y desarrollo de software industrial desde el corazón minero de Chile. Fusionamos robustez operativa con innovación digital.
                        </p>
                    </div>

                    {/* 2. NAVEGACIÓN RÁPIDA (Actualizado con handleNavigation) */}
                    <div>
                        <h4 className="font-mono text-xs font-goldman text-yellow-500 uppercase tracking-widest mb-6">// DIRECTORIO</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Inicio', id: 'inicio' },
                                { name: 'Nosotros', id: 'nosotros' },
                                { name: 'Servicios', id: 'servicios' },
                                { name: 'Contacto', id: 'contacto' }
                            ].map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`/#${item.id}`}
                                        onClick={(e) => handleNavigation(e, item.id)}
                                        className="text-zinc-400 hover:text-white hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2 group cursor-pointer"
                                    >
                                        <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. LEGAL & PROTOCOLOS */}
                    <div>
                        <h4 className="font-mono text-xs font-goldman text-yellow-500 uppercase tracking-widest mb-6">// PROTOCOLOS</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/terminos" className="text-zinc-400 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Términos y Condiciones
                                </Link>
                            </li>
                            <li>
                                <Link href="/terminos#faq" className="text-zinc-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                            <li>
                                <Link href="/terminos#privacidad_intro" className="text-zinc-400 hover:text-green-400 text-sm transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Política de Privacidad
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 4. CONEXIÓN */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="font-mono text-xs font-bold text-yellow-500 uppercase tracking-widest mb-6">// RED_SOCIALES</h4>
                            <div className="flex gap-4">
                                <SocialButton icon={<Instagram size={18} />} href="#" label="Instagram" />
                                <SocialButton icon={<Mail size={18} />} href="mailto:contacto@acreditame.cl" label="Email" />
                            </div>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="group mt-10 flex items-center gap-4 text-xs font-goldman uppercase tracking-widest text-zinc-500 hover:text-yellow-500 transition-colors w-fit"
                        >
                            <span>Volver a superficie</span>
                            <div className="p-3 border border-white/10 group-hover:border-yellow-500 rounded-full group-hover:bg-yellow-500 group-hover:text-black transition-all">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>

                {/* --- BARRA INFERIOR --- */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-xs font-mono">
                        © {new Date().getFullYear()} ACREDITAME LTDA. | TODOS LOS DERECHOS RESERVADOS.
                    </p>

                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/5 rounded-full border border-green-500/10">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-bold text-green-500 tracking-wider">SISTEMA: ACTIVO</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SocialButton = ({ icon, href, label }) => (
    <a
        href={href}
        aria-label={label}
        className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 rounded hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition-all duration-300 group"
    >
        {icon}
    </a>
);
