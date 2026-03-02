import React from 'react';
import { Head } from '@inertiajs/react';
import { useScroll } from 'framer-motion';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import AboutSection from '@/Components/Landing/AboutSection';
import StarVisual from '@/Components/3D/StarVisual';
// IMPORTA EL NUEVO COMPONENTE
import BackgroundStars from '@/Components/3D/BackgroundStars';
import ServiceSection from '@/Components/Landing/ServiceSection';
import ContactSection from '@/Components/Landing/ContactSection';
import Footer from '@/Components/Landing/Footer';

export default function Welcome() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-[#020203] text-gray-300 overflow-x-hidden relative font-sans">
            <Head title="ACREDITAME - Ingeniería y Seguridad" />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-600/10 blur-[150px] rounded-full z-0 pointer-events-none" />

            {/* Solo carga el fondo pesado en Desktop para proteger la RAM del móvil */}
            <div className="hidden lg:block fixed inset-0 z-[1] pointer-events-none opacity-70">
                <BackgroundStars scrollProgress={scrollYProgress} />
            </div>

            <div className="fixed inset-0 z-[5] pointer-events-none">
                <StarVisual scrollProgress={scrollYProgress} />
            </div>

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
