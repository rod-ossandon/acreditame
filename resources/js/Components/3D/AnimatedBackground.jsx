import React, { useState, useEffect } from 'react';

export default function AnimatedBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030308]">

            {/* 1. NEBULOSAS FLOTANTES (Ambient Light - AHORA DORADAS) */}
            {/* Luz Principal (Oro) - Reemplaza al morado */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-primary/20 rounded-full blur-[120px] animate-blob"></div>

            {/* Luz Secundaria (Ámbar) - Reemplaza al azul */}
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-gold-secondary/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>

            {/* Luz de Profundidad (Bronce) - Reemplaza al indigo */}
            <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-gold-dark/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>

            {/* 2. LA CUADRÍCULA BASE (Casi invisible) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* 3. MOUSE SPOTLIGHT (La Magia - AHORA BRILLO DORADO) */}
            <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                    // CAMBIO AQUÍ: El RGB (212, 175, 55) es el color Oro (#D4AF37)
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.08), transparent 40%)`
                }}
            ></div>

            {/* Capa extra para resaltar la grid SOLO donde está el mouse */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:34px_34px]"
                style={{
                    maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                }}
            ></div>

        </div>
    );
}
