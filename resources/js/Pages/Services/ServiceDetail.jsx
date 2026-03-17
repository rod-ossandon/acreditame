import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import Navbar from '@/Components/Landing/Navbar';
import Footer from '@/Components/Landing/Footer';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import WhatsAppButton from '@/Components/Landing/WhatsAppButton';

export default function ServiceDetail({ service }) {
    const handleContactClick = (e) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            window.location.href = '/#contacto';
            return;
        }
        const element = document.getElementById('contacto');
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#020203] text-white font-goldman selection:bg-yellow-500/30 overflow-x-hidden">
            <Head title={`${service.title} | Acreditame`} />
            <Navbar />
            <WhatsAppButton />

            <main className="relative pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 px-4 md:px-8">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                     style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <nav className="flex items-center justify-center lg:justify-start gap-3 mb-10 md:mb-16">
                        <Link href="/#servicios" className="text-[9px] md:text-[10px] font-goldman uppercase tracking-[0.3em] text-zinc-500 hover:text-yellow-500 transition-colors flex items-center gap-2">
                            <ArrowLeft size={12} /> // VOLVER
                        </Link>
                        <span className="text-zinc-800">/</span>
                        <span className="text-[9px] md:text-[10px] font-goldman uppercase tracking-[0.3em] text-yellow-500/40 truncate max-w-[150px]">
                            {service.tag}
                        </span>
                    </nav>

                    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-24 items-start">
                        <div className="w-full lg:hidden mb-6 text-center">
                             <h1 className="text-[clamp(2rem,8vw,3.5rem)] font-goldman uppercase leading-[0.9] tracking-tighter">
                                {service.title.split(' ')[0]}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                    {service.title.split(' ').slice(1).join(' ')}
                                </span>
                            </h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full lg:w-[42%] order-1 lg:order-2 lg:sticky lg:top-32"
                        >
                            <div className="relative">
                                <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-10 md:w-16 h-10 md:h-16 border-t border-r border-yellow-500/40 z-20" />
                                <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-10 md:w-16 h-10 md:h-16 border-b border-l border-yellow-500/40 z-20" />

                                <div className="relative overflow-hidden rounded-sm border border-white/10 aspect-[4/5] sm:aspect-video lg:aspect-[4/5] shadow-2xl">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 hover:grayscale-0 hover:scale-105"
                                        alt={service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                        <div className="w-full lg:w-[58%] space-y-8 md:space-y-12 order-2 lg:order-1">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="hidden lg:block">
                                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-goldman uppercase leading-[0.9] tracking-tighter mb-8">
                                    {service.title.split(' ')[0]}<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                        {service.title.split(' ').slice(1).join(' ')}
                                    </span>
                                </h1>
                            </motion.div>

                            <div className="space-y-6 md:space-y-8">
                                <p className="text-zinc-400 text-base md:text-xl leading-relaxed border-l-2 border-yellow-500/30 pl-5 md:pl-8 font-light text-center lg:text-left mx-auto lg:mx-0 max-w-2xl italic">
                                    {service.desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                    {service.features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-white/[0.03] border border-white/5 p-4 md:p-5 rounded-sm flex items-center lg:items-start gap-4 hover:border-yellow-500/20 transition-all"
                                        >
                                            <CheckCircle2 size={16} className="text-yellow-500 shrink-0" />
                                            <span className="text-[10px] md:text-[11px] font-goldman uppercase tracking-widest text-zinc-300 leading-tight">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-center lg:justify-start pt-4">
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    onClick={handleContactClick}
                                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-yellow-500 text-black font-goldman uppercase tracking-[0.2em] md:tracking-[0.3em] text-[9px] md:text-[10px] hover:bg-white transition-all shadow-2xl"
                                >
                                    COTIZACIÓN <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
