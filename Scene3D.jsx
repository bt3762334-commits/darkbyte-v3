"use client";

import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="absolute inset-0">

      <Canvas>

        <ambientLight intensity={2} />

        <Float>

          <mesh>
            <torusKnotGeometry args={[2,0.5,100,16]} />
            <meshStandardMaterial color="#00ffff" />
          </mesh>

        </Float>

      </Canvas>

    </div>
  );
}
