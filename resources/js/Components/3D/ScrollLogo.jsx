import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import logo from '../../assets/Logonegro.png';

export default function ScrollLogo({ scrollProgress }) {
    // 1. Detectamos el ancho de pantalla para ajustar escalas
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const isSE = windowWidth < 380; // iPhone SE o similares

    // --- CONFIGURACIÓN DE ESCALA RESPONSIVA ---
    // Si es SE: 2.2x -> 1.0x | Si es Mobile: 2.8x -> 1.3x | Si es Desktop: 4.5x -> 1.8x
    const scaleRange = isSE ? [2.2, 1.0, 3.5, 0.7]
                     : (isMobile ? [2.8, 1.3, 4.5, 0.8]
                     : [3.2, 0.5, 4.0, 0.8]);

    // --- CONFIGURACIÓN DE POSICIÓN X ---
    // En móvil se queda centrado (0%), en desktop se mueve a la derecha (38%)
    const xRange = isMobile ? ["0%", "0%", "0%", "-42%"]
                            : ["0%", "250%", "0%", "-42%"];

    // --- CONFIGURACIÓN DE POSICIÓN Y ---
    // En móvil lo bajamos más para que no tape el texto del Hero
    const yRange = isMobile ? ["5%", "15%", "0%", "-46%"]
                            : ["0%", "8%", "0%", "-46%"];

    // Mapeo de transformaciones
    const scale = useTransform(scrollProgress, [0, 0.22, 0.6, 1], scaleRange);
    const x = useTransform(scrollProgress, [0, 0.22, 0.6, 1], xRange);
    const y = useTransform(scrollProgress, [0, 0.22, 0.6, 1], yRange);

    const opacity = useTransform(scrollProgress,
        [0, 0.22, 0.45, 0.7, 1],
        [1, 0.9, 0.05, 0.4, 0] // En 0.45 (Servicios) se vuelve marca de agua sutil
    );

    const rotate = useTransform(scrollProgress, [0, 1], [0, 360]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[45] flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ x, y, scale, opacity, rotate }}
                className="relative flex items-center justify-center"
            >
                {/* Logo con tamaños base por CSS para ayudar a la escala de framer */}
                <img
                    src={logo}
                    alt="Logo Acreditame"
                    className="w-32 sm:w-48 md:w-64 lg:w-72 h-auto brightness-125 drop-shadow-[0_0_40px_rgba(234,179,8,0.15)]"
                />

                {/* Resplandor industrial responsivo */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollProgress, [0, 0.15], [isMobile ? 0.3 : 0.5, 0])
                    }}
                    className="absolute inset-0 bg-yellow-500/10 blur-[80px] md:blur-[120px] rounded-full scale-150"
                />
            </motion.div>
        </div>
    );
}
