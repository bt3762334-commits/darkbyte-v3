"use client";

import Image from "next/image";
import Scene3D from "./Scene3D";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <Scene3D />

      <div className="text-center z-10">

        <Image
          src="/images/basem.png"
          width={300}
          height={300}
          alt="Basem"
          className="rounded-full border-4 border-cyan-400"
        />

        <h1 className="text-6xl font-bold mt-6">
          DarkByte V3
        </h1>

        <p className="text-cyan-400 mt-3">
          Full Stack Developer
        </p>

      </div>

    </section>
  );
}
