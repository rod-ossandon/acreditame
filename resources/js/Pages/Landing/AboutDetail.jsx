import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    ChevronLeft, Shield, Eye, Rocket,
    Handshake, ShieldCheck, Users, CheckCircle2,
    Lightbulb, Medal, Leaf, Globe
} from 'lucide-react';
import Navbar from '@/Components/Landing/Navbar';
import BackgroundStars from '@/Components/3D/BackgroundStars';
import { useScroll, useTransform } from 'framer-motion';
import Footer from '@/Components/Landing/Footer';

export default function AboutDetail() {
    const { scrollYProgress } = useScroll();
    const opacityBg = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

    return (
        <div className="min-h-screen bg-[#020203] text-gray-300 font-goldman selection:bg-yellow-500/30 overflow-x-hidden">
            <Head title="Nosotros | ACREDITAME" />

            {/* Fondo Estelar y Grilla HUD */}
            <motion.div style={{ opacity: opacityBg }} className="fixed inset-0 z-0 pointer-events-none">
                <BackgroundStars scrollProgress={scrollYProgress} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
            </motion.div>

            <Navbar />

            <main className="relative z-10 pt-32 md:pt-40 pb-20 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Navegación Superior */}
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between mb-12 md:mb-16 border-b border-white/5 pb-6">
                        <Link href="/" className="group flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.4em] text-yellow-500/40 hover:text-yellow-500 transition-all uppercase">
                            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> // VOLVER
                        </Link>
                        <div className="hidden sm:block text-[8px] text-zinc-600 tracking-[0.5em] uppercase text-right">
                            ACREDITAME // ANTOFAGASTA
                        </div>
                    </motion.div>

                    {/* Hero Section: Quiénes Somos */}
                    <header className="mb-20 md:mb-32 relative">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <h1 className="text-5xl sm:text-7xl md:text-9xl font-goldman uppercase tracking-tighter text-white mb-8 leading-none">
                                NOSO<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-600 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">TROS</span>
                            </h1>

                            <div className="max-w-4xl space-y-6">
                                <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed font-light border-l-4 border-yellow-500 pl-6 md:pl-8">
                                    <strong className="text-yellow-500">Acreditame y Servicios Limitada</strong> fue fundada en 2024 con el propósito de ofrecer soluciones integrales en seguridad electrónica, redes y telecomunicaciones.
                                </p>
                                <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed pl-8 md:pl-10">
                                    Nuestro compromiso es proporcionar productos y servicios de alta calidad que optimicen la seguridad, la conectividad y la personalización.
                                </p>
                            </div>
                        </motion.div>
                    </header>

                    {/* Misión y Visión (Responsive Grid) */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-40">
                        <SpecCard icon={<Rocket className="w-5 h-5 md:w-6 md:h-6" />} title="MISIÓN" content="Entregar soluciones eficientes en identificación, publicidad, seguridad electrónica y telecomunicaciones bajo innovación y confianza." />
                        <SpecCard icon={<Eye className="w-5 h-5 md:w-6 md:h-6" />} title="VISIÓN" content="Ser reconocidos como líderes en soluciones tecnológicas integrales para un desarrollo industrial más seguro y conectado." />
                    </section>

                    {/* Sección Valores (Grid Adaptativo) */}
                    <section className="mb-24 md:mb-32">
                        <div className="text-center mb-16 md:mb-20">
                            <h2 className="text-3xl sm:text-4xl md:text-6xl font-goldman uppercase tracking-tighter text-white">
                                VALO<span className="text-yellow-500">RES</span>
                            </h2>
                            <div className="w-16 md:w-24 h-1 bg-yellow-500 mx-auto mt-4" />
                        </div>

                        {/* Primera Fila: 1 col móvil, 3 cols desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
                            <ValueNode icon={<Handshake />} title="Responsabilidad" desc="Ética empresarial en cada proceso." />
                            <ValueNode icon={<ShieldCheck />} title="Confianza" desc="Estableciendo relaciones sólidas con clientes." />
                            <ValueNode icon={<Users />} title="Compromiso" desc="Con nuestros clientes y el medio ambiente." />
                        </div>

                        {/* Segunda Fila: 2 cols móvil, 4 cols desktop */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            <ValueNode icon={<CheckCircle2 />} title="Calidad" desc="En cada producto y servicio." />
                            <ValueNode icon={<Lightbulb />} title="Innovación" desc="Aplicando tecnología avanzada." />
                            <ValueNode icon={<Medal />} title="Excelencia" desc="Superando expectativas en cada proyecto." />
                            <ValueNode icon={<Leaf />} title="Sostenibilidad" desc="Responsabilidad con el medio ambiente." />
                        </div>
                    </section>

                    {/* Carrusel de Colaboradores (Overflow Controlado) */}
                    <section className="mb-24 md:mb-32 relative group">
                        <div className="absolute inset-0 bg-yellow-500/5 blur-[120px] pointer-events-none" />
                        <div className="text-center mb-12 md:mb-16 relative z-10">
                            <h2 className="text-2xl md:text-5xl font-goldman uppercase tracking-tighter text-white">
                                COLABOR<span className="text-yellow-500">ADORES</span>
                            </h2>
                            <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4" />
                        </div>

                        <div className="relative w-full overflow-hidden bg-white/[0.02] border-y border-white/5 py-10 md:py-12">
                            <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#020203] to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#020203] to-transparent z-10" />

                            <div className="flex w-fit animate-infinite-scroll">
                                {[1, 2].map((block) => (
                                    <div key={block} className="flex items-center gap-12 md:gap-20 px-6 min-w-full">
                                        <LogoImg src="https://logodownload.org/wp-content/uploads/2014/04/microsoft-logo-2.png" />
                                        <LogoImg src="https://www.ecured.cu/images/6/66/Firefox-logo-nuevo-2013.png" />
                                        <LogoImg src="https://logos-marcas.com/wp-content/uploads/2020/04/Instagram-Logo.png" />
                                        <LogoImg src="http://1000marcas.net/wp-content/uploads/2020/02/YouTube-logo.png" />
                                        <LogoImg src="https://i.pinimg.com/originals/dc/5f/ee/dc5fee0189b193c8ebf8e19076ad56f0.png" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Call to Action (CTA Responsive) */}
                    <section className="py-16 md:py-24 text-center relative overflow-hidden border-t border-white/5 mt-16 md:mt-20">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[600px] h-[300px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

                        <div className="relative z-10 px-4">
                            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl md:text-7xl font-goldman uppercase tracking-tighter text-white mb-6">
                                ¡Transforma tu <span className="text-yellow-500">negocio</span> hoy!
                            </motion.h2>
                            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-zinc-500 text-sm md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
                                Descubre cómo marcar la diferencia con nosotros.
                            </motion.p>
                            <Link href="/#contacto" className="inline-flex items-center justify-center px-8 sm:px-12 py-5 sm:py-6 bg-yellow-500 text-black font-black rounded-full uppercase tracking-[0.2em] text-[10px] sm:text-[11px] hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] transition-all duration-500 shadow-2xl">
                                Habla con nosotros ahora!
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

{/* Sub-componentes con Ajustes de Tamaño Responsivo */}
const SpecCard = ({ icon, title, content }) => (
    <motion.div whileHover={{ y: -5 }} className="bg-white/[0.03] border border-white/5 p-6 md:p-10 rounded-2xl md:rounded-3xl hover:border-yellow-500/30 transition-all">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center text-yellow-500 mb-6 md:mb-8">{icon}</div>
        <h4 className="text-white text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4 font-black transition-colors">// {title}</h4>
        <p className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">{content}</p>
    </motion.div>
);

const ValueNode = ({ icon, title, desc }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center">
        <div className="w-14 h-14 md:w-20 md:h-20 mb-4 md:mb-6 flex items-center justify-center text-yellow-500">
            {React.cloneElement(icon, { size: 48, className: "md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]" })}
        </div>
        <h5 className="text-white text-base md:text-lg font-bold uppercase tracking-widest mb-2">{title}</h5>
        <p className="text-zinc-500 text-[9px] md:text-[11px] leading-relaxed max-w-[150px] md:max-w-[200px] uppercase tracking-tighter">{desc}</p>
    </motion.div>
);

const LogoImg = ({ src }) => (
    <div className="flex-shrink-0 transition-all duration-500 cursor-pointer">
        <img src={src} alt="Colaborador" className="h-8 sm:h-10 md:h-14 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
    </div>
);
