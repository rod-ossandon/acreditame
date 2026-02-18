import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler';

const SPARK_COUNT = 1500;

function StarSystem({ scrollProgress, count = 45000 }) {
    const pointsRef = useRef();

    // --- MEMORIA: GEOMETRÍA Y DATOS DE EXPLOSIÓN (Sin cambios en tu lógica) ---
    const { geo, initialPositions, explosionData } = useMemo(() => {
        const shape = new THREE.Shape();
        const points = 10;
        const outerRadius = 1;
        const innerRadius = 0.68;
        for (let i = 0; i < points * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius;
            const angle = (i / points) * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
        }
        shape.closePath();

        const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.3, bevelEnabled: false });
        geometry.center();
        const tempMesh = new THREE.Mesh(geometry);
        const sampler = new MeshSurfaceSampler(tempMesh).build();

        const positions = new Float32Array(count * 3);
        const initialPos = new Float32Array(count * 3);
        const explodeVecs = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const tempPos = new THREE.Vector3();

        for (let i = 0; i < count; i++) {
            sampler.sample(tempPos);
            const i3 = i * 3;
            positions.set([tempPos.x, tempPos.y, tempPos.z], i3);
            initialPos.set([tempPos.x, tempPos.y, tempPos.z], i3);
            explodeVecs[i3] = (Math.random() - 0.5) * 2.0;
            explodeVecs[i3 + 1] = (Math.random() - 0.5) * 2.0;
            explodeVecs[i3 + 2] = (Math.random() - 0.5) * 2.5;

            const dist = tempPos.length();
            const mixedColor = new THREE.Color().lerpColors(new THREE.Color("#3d2b1f"), new THREE.Color("#eab308"), Math.min(dist * 1.3, 1));
            if (Math.random() > 0.99) mixedColor.set("#ffffff");
            colors.set([mixedColor.r, mixedColor.g, mixedColor.b], i3);
        }

        const bufferGeo = new THREE.BufferGeometry();
        bufferGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        bufferGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.dispose();

        return { geo: bufferGeo, initialPositions: initialPos, explosionData: explodeVecs };
    }, [count]);

 useFrame((state) => {
        const s = scrollProgress.get();
        const time = state.clock.elapsedTime;
        const { x, y } = state.mouse;

        // 1. INTENSIDAD DE FRAGMENTACIÓN (Tu lógica intacta)
        const intensity = Math.pow(Math.sin(s * Math.PI), 2) * (1 - s * 0.4);

        if (pointsRef.current) {
            const attr = pointsRef.current.geometry.attributes.position;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                const tx = initialPositions[i3] + (explosionData[i3] * intensity * 5.0);
                const ty = initialPositions[i3+1] + (explosionData[i3+1] * intensity * 5.0);
                const tz = initialPositions[i3+2] + (explosionData[i3+2] * intensity * 5.0);

                attr.array[i3] += (tx - attr.array[i3]) * 0.1;
                attr.array[i3+1] += (ty - attr.array[i3+1]) * 0.1;
                attr.array[i3+2] += (tz - attr.array[i3+2]) * 0.1;
            }
            attr.needsUpdate = true;

            // 2. REFINAMIENTO DE POSICIÓN (DOCKING)
            // Ajustamos el targetX a 3.8 para que entre bien en el radar lateral
            const targetX = THREE.MathUtils.lerp(0, 5.2, s);
            const targetY = THREE.MathUtils.lerp(0, -0.2, s); // Ajuste fino de altura

            // Aplicamos el movimiento con suavizado
            pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX + (x * 0.15), 0.05);
            pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY + (y * 0.15), 0.05);

            // 3. ESCALA DE INDICADOR
            // Se compacta ligeramente para verse como un módulo de control
            const baseScale = THREE.MathUtils.lerp(3.5, 2.0, s);
            pointsRef.current.scale.setScalar(THREE.MathUtils.lerp(pointsRef.current.scale.x, baseScale, 0.05));

            pointsRef.current.rotation.y = time * 0.15;
            pointsRef.current.rotation.x = s * Math.PI; // Giro de presentación al acoplarse
        }
    });

    return (
        <points ref={pointsRef} geometry={geo}>
            <pointsMaterial
                size={0.022}
                vertexColors
                transparent
                opacity={0.85}
                blending={THREE.AdditiveBlending}
                sizeAttenuation
                depthWrite={false}
            />
        </points>
    );
}

export default function StarVisual({ scrollProgress }) {
    return (
        <Canvas camera={{ position: [0, 0, 12], fov: 45 }} gl={{ alpha: true, antialias: true }}>
            <ambientLight intensity={1.5} />
            <StarSystem scrollProgress={scrollProgress} />
        </Canvas>
    );
}
