import React from 'react';
import { Head } from '@inertiajs/react';
import { useScroll } from 'framer-motion';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import ServiceSection from '@/Components/Landing/ServiceSection';
import ContactSection from '@/Components/Landing/ContactSection';
import Footer from '@/Components/Landing/Footer';
import WhatsAppButton from '@/Components/Landing/WhatsAppButton';
import CursorGlow from '@/Components/Landing/CursorGlow';

export default function Welcome() {
    const { scrollYProgress } = useScroll();

    return (
        <div className="min-h-screen bg-[#050505] text-gray-300 overflow-x-hidden relative font-goldman">
            <Head title="Servicios - Acreditame" />

            <WhatsAppButton />

            {/* CONTENIDO PRINCIPAL: Sin capas 3D estorbando */}
            <div className="relative z-[10]">
                <Navbar />
                <CursorGlow />
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
