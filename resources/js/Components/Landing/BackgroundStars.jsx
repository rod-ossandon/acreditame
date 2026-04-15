import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Componente simple para estrellas de fondo distantes
function BackgroundSystem({ scrollProgress }) {
    const pointsRef = useRef();

    // Crear puntos aleatorios muy dispersos
    const particles = useMemo(() => {
        const count = 3000;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Rango amplio (spread) de -40 a 40 en cada eje
            positions[i * 3] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, []);

    useFrame((state) => {
        const s = scrollProgress.get();
        if (pointsRef.current) {
            // Rotación muy lenta del fondo
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;

            // DESVANECER AL HACER SCROLL
            // Se vuelven transparentes rápidamente al salir del Hero.
            // Math.min(s * 5, 1) hace que al 20% del scroll ya sean invisibles.
            pointsRef.current.material.opacity = THREE.MathUtils.lerp(0.4, 0, Math.min(s * 5, 1));
        }
    });

    return (
        <points ref={pointsRef} geometry={particles}>
            <pointsMaterial
                size={0.02} // Puntos muy pequeños
                color="#fbbf24" // Color dorado
                transparent
                opacity={0.4} // Opacidad inicial baja
                blending={THREE.AdditiveBlending}
                sizeAttenuation={true}
            />
        </points>
    );
}

export default function BackgroundStars({ scrollProgress }) {
    return (
        // Cámara alejada (Z=30) para que parezca fondo
        <Canvas camera={{ position: [0, 0, 30], fov: 60 }} gl={{ alpha: true }}>
            <BackgroundSystem scrollProgress={scrollProgress} />
        </Canvas>
    );
}
