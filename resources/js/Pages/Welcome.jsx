import React from 'react';
import { Head } from '@inertiajs/react';
import { useScroll } from 'framer-motion';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import AboutSection from '@/Components/Landing/AboutSection';
import BackgroundStars from '@/Components/3D/BackgroundStars';
import ServiceSection from '@/Components/Landing/ServiceSection';
import ContactSection from '@/Components/Landing/ContactSection';
import Footer from '@/Components/Landing/Footer';
import ScrollLogo from '@/Components/3D/StarVisual'; // Ajustado a tu ruta de componentes

export default function Welcome() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-[#020203] text-gray-300 overflow-x-hidden relative font-goldman">
            <Head title="Servicios " />

            {/* Brillo central de atmósfera */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-600/10 blur-[150px] rounded-full z-0 pointer-events-none" />

            {/* FONTO GLOBAL: Se eliminó 'hidden lg:block' */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-50 md:opacity-70">
                <BackgroundStars scrollProgress={scrollYProgress} />
            </div>

            {/* LOGO DINÁMICO: Capa intermedia */}
            <div className="fixed inset-0 z-[5] pointer-events-none">
                <ScrollLogo scrollProgress={scrollYProgress} />
            </div>

            {/* CONTENIDO PRINCIPAL: Capa superior */}
            <div className="relative z-[10]">
                <Navbar />
                <main>
                    <Hero />
                    <AboutSection />
                    <ServiceSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    );
}
