import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CursorGlow() {
    // Valores de posición del mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Configuración de "Spring" para que el movimiento sea suave (inercia)
    const springConfig = { damping: 25, stiffness: 150 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Centramos el brillo restando la mitad de su tamaño (ej: si mide 400px, restamos 200)
            mouseX.set(e.clientX - 200);
            mouseY.set(e.clientY - 200);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9999] opacity-40"
            style={{
                x: cursorX,
                y: cursorY,
                background: 'radial-gradient(circle, rgba(255, 193, 7, 0.6) 0%, transparent 70%)',
                filter: 'blur(40px)',
            }}
        />
    );
}
