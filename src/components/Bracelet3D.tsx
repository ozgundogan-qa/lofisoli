/// <reference types="@react-three/fiber" />
/// <reference types="three" />
"use client";

import { useRef, useEffect, useState } from "react";
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

    // Generate a procedural woven pattern texture for the bump map.
    // This gives the macro paracord look!
    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            // Background
            ctx.fillStyle = '#808080';
            ctx.fillRect(0, 0, 64, 64);

            // Woven threads
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 4;
            for (let i = -64; i < 128; i += 16) {
                ctx.beginPath();
                ctx.moveTo(i, 0);
                ctx.lineTo(i + 64, 64);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(i + 64, 0);
                ctx.lineTo(i, 64);
                ctx.stroke();
            }
        }
        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        // Stretch the texture aggressively along the cord to make lines look like tight threads
        texture.repeat.set(150, 4);
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

    // Calculate clasp color based on type
    const getClaspMaterial = () => {
        switch (claspType) {
            case "black":
                return { color: "#1a1a1a", metalness: 0.8, roughness: 0.6 };
            case "brass":
                return { color: "#c1a353", metalness: 0.9, roughness: 0.4 };
            case "steel":
            default:
                return { color: "#cccccc", metalness: 0.9, roughness: 0.2 };
        }
    };

    const claspMat = getClaspMaterial();

    // Procedural braiding parameters simulating exactly the "Cobra Weave / Solomon Bar" knot
    const radius = 2.1;
    const twists = 36;
    const W = 0.55;
    const H = 0.26;
    const strandRadius = 0.16;
    const numKnotsPoints = 400; // Resolution of the curve

    // Pre-calculate the geometry curves
    const strands = [0, 1].map((i) => {
        const isAccent = i === 1;
        const strandColor = isAccent ? accentColor : baseColor;
        const phase = i * Math.PI;

        const points = [];
        for (let j = 0; j <= numKnotsPoints; j++) {
            const t = j / numKnotsPoints;
            const angle = t * Math.PI * 2;

            // Base circle equation
            const x0 = Math.sin(angle) * radius;
            const y0 = Math.cos(angle) * radius;

            const localAngle = angle * twists + phase;
            const cosVal = Math.cos(localAngle);

            // Smoothed square wave makes the strand cross straight, and curl sharply at edges!
            const dx_local = W * Math.sign(cosVal) * Math.pow(Math.abs(cosVal), 0.65);
            // Height moves smoothly to weave over and under the core!
            const dz_local = H * Math.sin(localAngle);

            const xDir = Math.sin(angle);
            const yDir = Math.cos(angle);

            // Create an exact gap for the clasp to sit in
            let taperVal = 1;
            const dAngle = Math.min(t, 1 - t) * Math.PI * 2;
            if (dAngle < 0.25) {
                taperVal = Math.max(0, (dAngle - 0.05) * 6);
            }

            points.push(new THREE.Vector3(
                x0 + dx_local * xDir * taperVal,
                y0 + dx_local * yDir * taperVal,
                dz_local * taperVal
            ));
        }

        return {
            curve: new THREE.CatmullRomCurve3(points, false),
            color: strandColor
        };
    });

    const cores = [0, 1].map((i) => {
        const offset = i === 0 ? 0.16 : -0.16;
        const points = [];
        for (let j = 0; j <= 64; j++) {
            const t = j / 64;
            const angle = t * Math.PI * 2;
            const x0 = Math.sin(angle) * radius;
            const y0 = Math.cos(angle) * radius;
            const xDir = Math.sin(angle);
            const yDir = Math.cos(angle);

            let taperVal = 1;
            const dAngle = Math.min(t, 1 - t) * Math.PI * 2;
            if (dAngle < 0.22) {
                taperVal = Math.max(0, (dAngle - 0.05) * 6);
            }

            points.push(new THREE.Vector3(
                x0 + offset * xDir * taperVal,
                y0 + offset * yDir * taperVal,
                0
            ));
        }
        return {
            curve: new THREE.CatmullRomCurve3(points, false),
            color: baseColor
        };
    });

    return (
        <group ref={groupRef}>
            {/* Render Braided Strands */}
            {strands.map((strand, i) => (
                <mesh key={`strand-${i}`} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                    <tubeGeometry args={[strand.curve, 400, strandRadius, 16, false]} />
                    <meshStandardMaterial
                        color={strand.color}
                        roughness={0.8}
                        metalness={0.1}
                        bumpMap={bumpTexture || undefined}
                        bumpScale={0.03}
                    />
                </mesh>
            ))}

            {/* Render Core Strands */}
            {cores.map((core, i) => (
                <mesh key={`core-${i}`} rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                    <tubeGeometry args={[core.curve, 64, 0.14, 12, false]} />
                    <meshStandardMaterial
                        color={core.color}
                        roughness={0.9}
                        metalness={0.1}
                        bumpMap={bumpTexture || undefined}
                        bumpScale={0.02}
                    />
                </mesh>
            ))}

            {/* Clasp Main Body */}
            <mesh position={[0, 0, 2.1]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.55, 0.55, 1.4, 32]} />
                <meshStandardMaterial
                    color={claspMat.color}
                    metalness={claspMat.metalness}
                    roughness={claspMat.roughness}
                />
            </mesh>

            {/* Clasp Button Detail */}
            <mesh position={[0.45, 0, 2.1]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.16, 0.16, 0.3, 16]} />
                <meshStandardMaterial
                    color={claspMat.color}
                    metalness={claspMat.metalness}
                    roughness={claspMat.roughness}
                />
            </mesh>
        </group>
    );
}

export default function Bracelet3D({ baseColor, accentColor, claspType }: BraceletProps) {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 5, 8], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
                <Environment preset="city" />

                <BraceletModel
                    baseColor={baseColor}
                    accentColor={accentColor}
                    claspType={claspType}
                />

                <ContactShadows
                    position={[0, -1.8, 0]}
                    opacity={0.6}
                    scale={15}
                    blur={2.5}
                    far={5}
                    color="#13ec5b"
                />
                <OrbitControls
                    enableZoom={true}
                    minDistance={3}
                    maxDistance={12}
                    enablePan={false}
                    autoRotate={false}
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
