import {
  ArrowIcon,
  AssertionImage,
  EcclipseBG,
  QuoteIcon,
  StarIcon,
} from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <section id="home" className="w-full relative z-50">
      <p className="text-2xl border-black rounded-full border mx-auto w-fit px-6 py-2 mb-8 mt-14 z-50 relative">
        <Image
          src={AssertionImage}
          alt="Assertion"
          className="absolute -right-8 -top-4"
        />
        Hello!
      </p>
      <h1 className="text-9xl text-center">
        I&apos;m <span className="text-[#ff0000]">Aditya</span>,
      </h1>
      <h2 className="text-9xl w-fit mx-auto text-center relative">
        <Image
          src={AssertionImage}
          alt="Assertion"
          className="absolute -bottom-10 -left-4 rotate-180 w-20"
        />
        Graphic & UI/UX Designer
      </h2>
      <div className="relative">
        <div className="mt-20 w-11/12 mx-auto grid grid-cols-2 relative">
          <div className="z-40">
            <Image src={QuoteIcon} alt="Quote Icon" className="w-20" />
            <p className="bg-[#ffffff7a] text-2xl leading-loose mt-5 p-5">
              Incredible Graphix Studio : Logo Design and Poster Design <br />
              ensure our website&apos;s success. <br /> Highly Recommended
            </p>
          </div>
          <div className="z-40 text-right flex justify-end items-end flex-col">
            <div className="flex justify-end">
              <Image className="w-10" src={StarIcon} alt="star icon" />
              <Image className="w-10" src={StarIcon} alt="star icon" />
              <Image className="w-10" src={StarIcon} alt="star icon" />
              <Image className="w-10" src={StarIcon} alt="star icon" />
            </div>
            <h3 className="text-6xl font-semibold">3 Years</h3>
            <p className="text-2xl">Experience</p>
          </div>
        </div>
        <div className="flex justify-center items-center text-2xl gap-x-8 z-50 relative">
          <Link
            href={'/'}
            className="bg-[#ff0000] flex px-8 py-2 items-center justify-center rounded-full text-white"
          >
            Portfolio{' '}
            <Image
              src={ArrowIcon}
              alt="Arrow Icon"
              className="inline rounded-full w-10/12"
            />
          </Link>
          <Link href={'/'}>Contact Us</Link>
        </div>
        <Image
          className="absolute left-1/2 -bottom-14 -translate-x-1/2 z-30"
          src={EcclipseBG}
          alt="Semi Ecclipse gradient"
        />
      </div>
    </section>
  );
}
