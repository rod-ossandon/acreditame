import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Landing/Navbar';
import Hero from '@/Components/Landing/Hero';
import AboutSection from '@/Components/Landing/AboutSection';
import ServicesGrid from '@/Components/Landing/ServiceSection';
import TestimonialsSection from '@/Components/Landing/TestimonialSection';
import AnimatedBackground from '@/Components/Landing/AnimatedBackground';
import ContactSection from '@/Components/Landing/ContactSection';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-[#030308] text-gray-300 selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
            <Head title="ACREDITAME - " />

            <AnimatedBackground />

            <Navbar />

            <main>
                <Hero />
                <AboutSection />
                <ServicesGrid />
                <TestimonialsSection />
                <ContactSection />
            </main>

            <footer className="relative z-10 py-12 border-t border-white/10 text-center">
                <p className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">
                    ACREDITAME © 2026. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}
