import { HomeGradient } from '@/assets';
import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <section id="home" className="w-full relative z-50">
      <p className="text-2xl border-black rounded-full border mx-auto w-fit px-6 py-2 my-6 z-50">
        Yahallo!
      </p>
      <h1 className="text-9xl text-center">
        I&apos;m <span className="text-[#ff0000]">Aditya</span>,
      </h1>
      <h2 className="text-9xl text-center">Graphic & UI/UX Designer</h2>
    </section>
  );
}
