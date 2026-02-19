import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';

function StarSystem({ scrollProgress, count = 40000 }) {
    const pointsRef = useRef();
    const { viewport } = useThree();

    // 1. GEOMETRÍA (Mantenemos tu configuración actual de 10 puntas)
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

        // --- CALIBRACIÓN DE SECCIONES (Puntos de Control) ---
        const P_TRANSITION_1 = 0.22; // Punto de llegada a Quiénes Somos
        const P_START_STAY = 0.45;   // Fin de estancia en Quiénes Somos
        const P_MAX_EXPANSION = 0.75; // Máxima explosión en Servicios
        const P_CONTACTO = 0.90;      // Inicio armado final

        let target = { intensity: 0, posX: 0, posY: 0, scale: 3.5, spread: 5.0, lerp: 0.1 };

        // FASE 1: HERO -> QUIÉNES SOMOS (Viaje y Ensamblado)
        if (s < P_TRANSITION_1) {
            const p = s / P_TRANSITION_1;
            // Curva parabólica: Explota al inicio y se cierra suavemente al final (p=1)
            target.intensity = Math.sin(p * Math.PI) * 1.0;
            target.posX = THREE.MathUtils.lerp(0, viewport.width / 3.4, p);
            target.posY = THREE.MathUtils.lerp(0, -0.2, p);
            target.scale = THREE.MathUtils.lerp(3.5, 2.6, p);
            // El magnetismo aumenta según se acerca a la sección
            target.lerp = THREE.MathUtils.lerp(0.06, 0.25, p);
        }
        // FASE 2: QUIÉNES SOMOS (Estática y Nítida)
        else if (s >= P_TRANSITION_1 && s < P_START_STAY) {
            target.intensity = 0; // Se mantiene armada al 100%
            target.posX = viewport.width / 3.4;
            target.posY = -0.2;
            target.scale = 2.6;
            target.lerp = 0.3; // Magnetismo alto para mantener la forma nítida
        }
        // FASE 3: QUIÉNES -> SERVICIOS (Explosión Progresiva)
        else if (s >= P_START_STAY && s < P_MAX_EXPANSION) {
            const p = (s - P_START_STAY) / (P_MAX_EXPANSION - P_START_STAY);
            // La explosión crece de forma cuadrática para que sea suave al arrancar
            target.intensity = Math.pow(p, 1.5) * 2.0;
            target.spread = 18.0;
            target.posX = THREE.MathUtils.lerp(viewport.width / 3.4, 0, p);
            target.posY = THREE.MathUtils.lerp(-0.2, 0.2, p);
            target.scale = THREE.MathUtils.lerp(2.6, 6.5, p);
            target.lerp = 0.05;
        }
        // FASE 4: SERVICIOS -> CONTACTO (Re-ensamblado Final)
        else {
            const p = (s - P_MAX_EXPANSION) / (1 - P_MAX_EXPANSION);
            // La intensidad baja de 2.0 a 0 de forma suave
            target.intensity = THREE.MathUtils.lerp(2.0, 0, p);
            target.posX = 0;
            target.posY = 0;
            target.scale = THREE.MathUtils.lerp(6.5, 3.2, p);
            target.lerp = 0.25;
        }

        // --- APLICACIÓN DE FÍSICAS ---
        if (pointsRef.current) {
            const attr = pointsRef.current.geometry.attributes.position;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                const tx = initialPositions[i3] + (explosionData[i3] * target.intensity * target.spread);
                const ty = initialPositions[i3+1] + (explosionData[i3+1] * target.intensity * 5.0);
                const tz = initialPositions[i3+2] + (explosionData[i3+2] * target.intensity * 5.0);

                // El lerp asegura que los puntos fluyan, no que salten
                attr.array[i3] += (tx - attr.array[i3]) * target.lerp;
                attr.array[i3+1] += (ty - attr.array[i3+1]) * target.lerp;
                attr.array[i3+2] += (tz - attr.array[i3+2]) * target.lerp;
            }
            attr.needsUpdate = true;

            // Rotación constante y suavizado de grupo
            pointsRef.current.rotation.y += 0.003;
            pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, target.posX, 0.05);
            pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, target.posY, 0.05);
            pointsRef.current.scale.setScalar(THREE.MathUtils.lerp(pointsRef.current.scale.x, target.scale, 0.05));
        }
    });

    return (
        <points ref={pointsRef} geometry={geo}>
            <pointsMaterial size={0.024} vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
}

export default function StarVisual({ scrollProgress }) {
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ alpha: true }} style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 5 }}>
            <ambientLight intensity={1.5} />
            <StarSystem scrollProgress={scrollProgress} />
        </Canvas>
    );
}
