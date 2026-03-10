import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';

function StarSystem({ scrollProgress, count = 40000 }) {
    const pointsRef = useRef();
    const { viewport } = useThree();

    // Detectamos móvil (ancho menor a 10 unidades de Three.js)
    const isMobile = viewport.width < 10;

    const { geo, initialPositions, explosionData } = useMemo(() => {
        const shape = new THREE.Shape();
        const pts = 10;
        const outer = 1;
        const inner = 0.5;
        for (let i = 0; i < pts * 2; i++) {
            const r = i % 2 === 0 ? outer : inner;
            const a = (i / pts) * Math.PI - Math.PI / 2;
            const px = Math.cos(a) * r;
            const py = Math.sin(a) * r;
            if (i === 0) shape.moveTo(px, py); else shape.lineTo(px, py);
        }
        shape.closePath();
        const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: false });
        geometry.center();
        const sampler = new MeshSurfaceSampler(new THREE.Mesh(geometry)).build();
        const pos = new Float32Array(count * 3);
        const init = new Float32Array(count * 3);
        const vecs = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const temp = new THREE.Vector3();
        for (let i = 0; i < count; i++) {
            sampler.sample(temp);
            const i3 = i * 3;
            pos.set([temp.x, temp.y, temp.z], i3);
            init.set([temp.x, temp.y, temp.z], i3);
            vecs[i3] = (Math.random() - 0.5) * 2.5;
            vecs[i3+1] = (Math.random() - 0.5) * 2.5;
            vecs[i3+2] = (Math.random() - 0.5) * 3.0;
            const color = new THREE.Color().lerpColors(new THREE.Color("#3d2b1f"), new THREE.Color("#eab308"), Math.min(temp.length() * 1.5, 1));
            colors.set([color.r, color.g, color.b], i3);
        }
        const bufferGeo = new THREE.BufferGeometry();
        bufferGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        bufferGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return { geo: bufferGeo, initialPositions: init, explosionData: vecs };
    }, [count]);

 useFrame((state) => {
    const s = scrollProgress.get();

    // --- CONFIGURACIÓN RESPONSIVA ---
    const isMobile = viewport.width < 10;
    const responsiveScaleBase = isMobile ? 2.4 : 3.5;
    const responsiveScaleContact = isMobile ? 2.0 : 4.0; // Tamaño al final

    // --- PUNTOS DE CONTROL DE LA ANIMACIÓN ---
    const P_EXPLOSION_PEAK = 0.6;   // Punto máximo de desorden
    const P_START_FORMATION = 0.8;  // Empieza a juntarse de nuevo
    const P_FINAL_CONTACT = 0.95;   // Estrella formada totalmente

    let target = {
        intensity: 0,
        posX: 0,
        posY: 0,
        scale: responsiveScaleBase,
        spread: 0,
        lerp: 0.1
    };

    if (s < P_EXPLOSION_PEAK) {
        // Fase 1: De la calma a la explosión total
        const p = s / P_EXPLOSION_PEAK;
        target.intensity = p * 0.5; // Aumenta la dispersión
        target.spread = isMobile ? 12 : 20;
        target.posX = THREE.MathUtils.lerp(0, viewport.width / 4, p);
        target.scale = THREE.MathUtils.lerp(responsiveScaleBase, responsiveScaleBase * 1.5, p);
        target.lerp = 0.05; // Movimiento orgánico
    }
    else if (s >= P_EXPLOSION_PEAK && s < P_START_FORMATION) {
        // Fase 2: Mantener el caos mientras baja
        target.intensity = 1.5;
        target.spread = isMobile ? 12 : 20;
        target.posX = viewport.width / 4;
        target.posY = -viewport.height / 4;
        target.lerp = 0.02; // Más lento para que se vea el desorden
    }
    else if (s >= P_START_FORMATION) {
        // Fase 3: RE-FORMACIÓN EN CONTACTO
        // p va de 0 (caos) a 1 (estrella perfecta)
        const p = Math.min((s - P_START_FORMATION) / (P_FINAL_CONTACT - P_START_FORMATION), 1);

        target.intensity = 1.5 * (1 - p); // La intensidad vuelve a 0 (forma original)
        target.spread = isMobile ? 12 : 20;

        // Posicionamos la estrella detrás del formulario de contacto
        target.posX = THREE.MathUtils.lerp(viewport.width / 4, 0, p);
        target.posY = THREE.MathUtils.lerp(-viewport.height / 4, -0.5, p);
        target.scale = THREE.MathUtils.lerp(responsiveScaleBase * 1.5, responsiveScaleContact, p);

        // Aumentamos el lerp al final para que los puntos "encajen" con precisión
        target.lerp = THREE.MathUtils.lerp(0.05, 0.15, p);
    }

    if (pointsRef.current) {
        const attr = pointsRef.current.geometry.attributes.position;
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Calculamos posición destino: Inicial + (Vector de explosión * Intensidad actual)
            const tx = initialPositions[i3] + (explosionData[i3] * target.intensity * target.spread);
            const ty = initialPositions[i3+1] + (explosionData[i3+1] * target.intensity * 8.0);
            const tz = initialPositions[i3+2] + (explosionData[i3+2] * target.intensity * 8.0);

            // Suavizado de posición de cada partícula
            attr.array[i3] += (tx - attr.array[i3]) * target.lerp;
            attr.array[i3+1] += (ty - attr.array[i3+1]) * target.lerp;
            attr.array[i3+2] += (tz - attr.array[i3+2]) * target.lerp;
        }
        attr.needsUpdate = true;

        // Rotación constante de la estrella
        pointsRef.current.rotation.y += 0.002;

        // Posicionamiento global del sistema
        pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, target.posX, 0.05);
        pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, target.posY, 0.05);
        pointsRef.current.scale.setScalar(THREE.MathUtils.lerp(pointsRef.current.scale.x, target.scale, 0.05));
    }
});

    return (
        <points ref={pointsRef} geometry={geo}>
            <pointsMaterial
                size={isMobile ? 0.015 : 0.024} // Partículas más pequeñas en móvil para no deslumbrar
                vertexColors
                transparent
                opacity={isMobile ? 0.5 : 0.8} // Menos opacidad en móvil mejora contraste
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

export default function StarVisual({ scrollProgress }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            gl={{ alpha: true, antialias: false }}
            dpr={[2, 1.9]} // Limitamos resolución en móvil para ahorrar RAM
            style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 5 }}
        >
            <ambientLight intensity={1.5} />
            <StarSystem scrollProgress={scrollProgress} />
        </Canvas>
    );
}
