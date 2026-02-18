import React from 'react';
import { Head } from '@inertiajs/react';
import { useScroll } from 'framer-motion';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import AboutSection from '@/Components/Landing/AboutSection';
import StarVisual from '@/Components/3D/StarVisual';
// IMPORTA EL NUEVO COMPONENTE
import BackgroundStars from '@/Components/3D/BackgroundStars';

export default function Welcome() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-[#020203] text-gray-300 overflow-x-hidden relative font-sans">
            <Head title="ACREDITAME - Ingeniería y Seguridad" />

            {/* Aura dorada sutil en el fondo */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-yellow-600/10 blur-[150px] rounded-full z-0 pointer-events-none" />

            {/* CAPA 1: ESTRELLAS DE FONDO (Z-INDEX 1) */}
            {/* Estas están detrás de la estrella principal */}
            <div className="fixed inset-0 z-[1] pointer-events-none opacity-70">
                <BackgroundStars scrollProgress={scrollYProgress} />
            </div>

            {/* CAPA 2: ESTRELLA PRINCIPAL (Z-INDEX 5) */}
            {/* Esta es la protagonista, está por delante del fondo */}
            <div className="fixed inset-0 z-[5] pointer-events-none">
                <StarVisual scrollProgress={scrollYProgress} />
            </div>

            {/* CAPA 3: CONTENIDO (Z-INDEX 10) */}
            <div className="relative z-[10]">
                <Navbar />
                <main>
                    <Hero />
                    <AboutSection />
                </main>
            </div>
        </div>
    );
}
