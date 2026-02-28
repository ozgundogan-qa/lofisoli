/// <reference types="@react-three/fiber" />
/// <reference types="three" />
"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface BraceletProps {
    baseColor: string;
    accentColor: string;
    claspType: string;
}

function BraceletModel({ baseColor, accentColor, claspType }: BraceletProps) {
    const groupRef = useRef<THREE.Group>(null);
    const [bumpTexture, setBumpTexture] = useState<THREE.CanvasTexture | null>(null);

    // Paracord macro-texture (woven threads)
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.fillStyle = '#666666';
            ctx.fillRect(0, 0, 128, 128);
            ctx.strokeStyle = '#aaaaaa';
            ctx.lineWidth = 3;
            for (let i = -128; i < 256; i += 12) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i + 128, 128);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(i + 128, 0);
                ctx.lineTo(i, 128);
                ctx.stroke();
            }
        }
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(150, 2);
        texture.needsUpdate = true;
        setBumpTexture(texture);
    }, []);

    // Slow auto-rotation
    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.15;
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }
    });

    const claspMat = useMemo(() => {
        switch (claspType) {
            case "black":
                return { color: "#111111", metalness: 0.6, roughness: 0.7 }; // Matte tactical plastic/cerakote
            case "brass":
                return { color: "#c1a353", metalness: 0.9, roughness: 0.4 };
            case "steel":
            default:
                return { color: "#999999", metalness: 0.9, roughness: 0.2 };
        }
    }, [claspType]);

    // Geometry parameters for the Cobra Weave
    const R = 2.6;
    const numKnots = 38;
    const gap = 0.35; // Gap for the buckle
    const startTheta = Math.PI + gap;
    const endTheta = 3 * Math.PI - gap;
    const numPoints = 250; // Reduced from 500 for massive performance boost
    const strandRadius = 0.16;

    // A smoothed square wave function to create the flat loops characteristic of Cobra Weaves
    const sq = (x: number) => Math.atan(Math.sin(x) * 6) / 1.4;

    const strands = useMemo(() => {
        const generateCobraStrand = (isBase: boolean) => {
            const points = [];
            const color = isBase ? baseColor : accentColor;
            const sign = isBase ? 1 : -1;

            for (let i = 0; i <= numPoints; i++) {
                const t = i / numPoints;
                const theta = startTheta + t * (endTheta - startTheta);
                const phi = t * numKnots * Math.PI * 2;

                const xBase = Math.sin(theta) * R;
                const yBase = Math.cos(theta) * R;
                const nX = Math.sin(theta);
                const nY = Math.cos(theta);

                let localZ = sq(phi) * 0.48 * sign;
                let localN = Math.cos(phi) * 0.32 * sign;

                // Taper smoothly into the buckle
                let taper = 1;
                if (t < 0.05) taper = t / 0.05;
                if (t > 0.95) taper = (1 - t) / 0.05;
                taper = taper * taper * (3 - 2 * taper); // smoothstep

                localZ *= taper;
                localN *= taper;

                points.push(new THREE.Vector3(
                    xBase + nX * localN,
                    yBase + nY * localN,
                    localZ
                ));
            }
            return { curve: new THREE.CatmullRomCurve3(points, false), color };
        };

        const generateCore = (offsetZ: number) => {
            const points = [];
            for (let i = 0; i <= 60; i++) {
                const t = i / 60;
                const theta = startTheta + t * (endTheta - startTheta);
                const xBase = Math.sin(theta) * R;
                const yBase = Math.cos(theta) * R;
                let taper = 1;
                if (t < 0.05) taper = t / 0.05;
                if (t > 0.95) taper = (1 - t) / 0.05;
                points.push(new THREE.Vector3(xBase, yBase, offsetZ * taper));
            }
            return { curve: new THREE.CatmullRomCurve3(points, false), color: baseColor };
        };

        return {
            weaves: [generateCobraStrand(true), generateCobraStrand(false)],
            cores: [generateCore(0.18), generateCore(-0.18)]
        };
    }, [baseColor, accentColor]);

    return (
        <group ref={groupRef} rotation={[Math.PI / 8, 0, 0]}>
            {/* The Woven Strands */}
            {strands.weaves.map((strand, i) => (
                <mesh key={`weave-${i}`} castShadow receiveShadow>
                    <tubeGeometry args={[strand.curve, numPoints, strandRadius, 12, false]} />
                    <meshStandardMaterial
                        color={strand.color}
                        roughness={0.9}
                        metalness={0.0}
                        bumpMap={bumpTexture || undefined}
                        bumpScale={0.04}
                    />
                </mesh>
            ))}

            {/* The Inner Cores */}
            {strands.cores.map((core, i) => (
                <mesh key={`core-${i}`} castShadow receiveShadow>
                    <tubeGeometry args={[core.curve, 60, strandRadius * 0.9, 8, false]} />
                    <meshStandardMaterial
                        color={core.color}
                        roughness={0.9}
                        metalness={0.0}
                        bumpMap={bumpTexture || undefined}
                        bumpScale={0.04}
                    />
                </mesh>
            ))}

            {/* Side-Release Buckle / Clasp */}
            {/* Clasp is at theta = Math.PI, meaning x=0, y=-R. The tangent is along +X, normal is -Y */}
            <group position={[0, -R, 0]} rotation={[0, 0, 0]}>

                {/* Female Receptor Body */}
                <mesh position={[0.4, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.9, 0.35, 1.15]} />
                    <meshStandardMaterial color={claspMat.color} metalness={claspMat.metalness} roughness={claspMat.roughness} />
                </mesh>

                {/* Male Insert Body */}
                <mesh position={[-0.4, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.7, 0.3, 1.05]} />
                    <meshStandardMaterial color={claspMat.color} metalness={claspMat.metalness} roughness={claspMat.roughness} />
                </mesh>

                {/* Male Prongs (Side push buttons) */}
                <mesh position={[-0.05, 0, 0.45]} castShadow receiveShadow>
                    <boxGeometry args={[0.4, 0.25, 0.2]} />
                    <meshStandardMaterial color={claspMat.color} metalness={claspMat.metalness} roughness={claspMat.roughness} />
                </mesh>
                <mesh position={[-0.05, 0, -0.45]} castShadow receiveShadow>
                    <boxGeometry args={[0.4, 0.25, 0.2]} />
                    <meshStandardMaterial color={claspMat.color} metalness={claspMat.metalness} roughness={claspMat.roughness} />
                </mesh>

                {/* Center locking prong */}
                <mesh position={[-0.05, 0, 0]} castShadow receiveShadow>
                    <boxGeometry args={[0.5, 0.2, 0.3]} />
                    <meshStandardMaterial color={claspMat.color} metalness={claspMat.metalness} roughness={claspMat.roughness} />
                </mesh>
            </group>
        </group>
    );
}

export default function Bracelet3D({ baseColor, accentColor, claspType }: BraceletProps) {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 4, 8], fov: 45 }} shadows>
                <ambientLight intensity={0.7} />
                <spotLight position={[5, 10, 5]} angle={0.3} penumbra={1} intensity={1.5} castShadow />
                <Environment preset="city" />

                <BraceletModel
                    baseColor={baseColor}
                    accentColor={accentColor}
                    claspType={claspType}
                />

                <ContactShadows
                    position={[0, -3.0, 0]}
                    opacity={0.4}
                    scale={15}
                    blur={3}
                    far={4}
                    color="#000000"
                />
                <OrbitControls
                    enableZoom={true}
                    minDistance={4}
                    maxDistance={15}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>

            {/* Overlay hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white/90 pointer-events-none flex items-center gap-2 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                Döndürmek için sürükleyin
            </div>
        </div>
    );
}
