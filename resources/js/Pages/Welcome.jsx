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
import WhatsAppButton from '@/Components/Landing/WhatsAppButton';

export default function Welcome() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-[#050505] text-gray-300 overflow-x-hidden relative font-goldman">
            <Head title="Servicios - Acreditame" />

            <WhatsAppButton />

            {/* CONTENIDO PRINCIPAL: Sin capas 3D estorbando */}
            <div className="relative z-[10]">
                <Navbar />
                <main>
                    <Hero />{/*
                    <AboutSection /> */}
                    <ServiceSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    );
}
