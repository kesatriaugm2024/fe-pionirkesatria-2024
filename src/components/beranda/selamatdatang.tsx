"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { motion } from "framer";

const TransitiAtasSelamatDatang = () => {
  return (
    <div className="absolute w-full">
      <Image
        className="absolute w-[100vw] translate-y-[-5vw] drop-shadow-[0_0.1vw_10vw_#000000]"
        alt=""
        src={"/images/assets_beranda_selamatdatang_kainmerahpendek.svg"}
        width={1000}
        height={816}
      />
      <div className="absolute right-0 top-0 z-[1] w-[17.5vw] translate-y-[5vw] max-lg:translate-x-[-5vw] max-lg:translate-y-[20vw]">
        <Image
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full drop-shadow-[0_0.1vw_10vw_rgba(0,0,0,0.1)]"
          alt="Burung Emas Atas"
          src={"/images/assets_beranda_selamatdatang_burung.svg"}
          width={424}
          height={271}
        />
      </div>
    </div>
  );
};

const TransisiBawahSelamatDatang = () => {
  return (
    <div data-aos="">
      <div className="z-[0] h-[10vh] w-full overflow-hidden">
        <Image
          className="absolute right-0 w-[25vw] translate-x-[-7vw] translate-y-[-30vw] overflow-hidden drop-shadow-[0_0.1vw_10vw_rgba(0,0,0,0.1)] max-lg:hidden"
          alt="Tugu"
          src={"/images/assets_beranda_selamatdatang_tuguungu.svg"}
          width={424}
          height={271}
        />
        <Image
          className="absolute right-0 z-[-1] w-[25vw] translate-x-[0vw] overflow-hidden drop-shadow-[0_0.1vw_1vw_rgba(0,0,0,0.1)] max-lg:w-[50vw] max-lg:translate-y-[-70vw] max-sm:w-[77.5vw] max-sm:translate-y-[-100vw] lg:hidden"
          alt="Tugu"
          src={"/images/assets_beranda_selamatdatang_tuguungumobile.svg"}
          width={424}
          height={271}
        />
        <Image
          className="absolute w-[100vw] translate-y-[-6vw] drop-shadow-[0_1vw_1vw_#000000]"
          alt=""
          src={"/images/assets_beranda_selamatdatang_kainungupanjang.svg"}
          width={424}
          height={271}
        />
        <Image
          className="absolute left-0 w-[17.5vw] translate-y-[-16vw] drop-shadow-[0_0.5vw_1vw_#000000] max-lg:w-[25vw] max-lg:translate-x-[5vw]"
          alt=""
          src={"/images/assets_beranda_selamatdatang_gerigiungu.svg"}
          width={424}
          height={271}
        />
        <Image
          className="absolute left-0 w-[10vw] translate-x-[5vw] translate-y-[-8.5vw] drop-shadow-[0_1vw_1vw_#000000] max-lg:w-[13.3vw] max-lg:translate-x-[20vw] max-lg:translate-y-[-15vw]"
          alt=""
          src={"/images/assets_beranda_selamatdatang_buluemas.svg"}
          width={424}
          height={271}
        />
        <Image
          className="absolute w-[100vw] translate-y-[-17vw] drop-shadow-[0_1vw_1vw_#000000]"
          alt=""
          src={"/images/assets_beranda_selamatdatang_kainmerahpanjang.svg"}
          width={424}
          height={271}
        />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div
      data-aos="fade-up"
      className="z-[1] flex min-h-[90vh] items-center justify-center gap-[5vw] overflow-hidden py-[10vw] max-lg:flex-col"
    >
      <Image
        className="z-[2] w-[27.5vw] translate-x-[-1.5vw] drop-shadow-[0_1vw_1vw_#000000] max-lg:w-[56.25vw]"
        alt=""
        src={"/images/logo/Nala_melambai.png"}
        width={577}
        height={816}
      />
      <div className="z-[2] flex flex-col">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-center font-publica-sans text-[4vw]/[4vw] font-normal text-transparent drop-shadow-[0_0.5vw_0.1vw_#000000] max-lg:text-[5vw]/[5vw]">
          PIONIR
        </h2>
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-center font-legendaire text-[8vw]/[8vw] font-normal text-transparent drop-shadow-[0_0.5vw_0.1vw_#000000] max-lg:text-[10vw]/[10vw]">
          KesatriA
        </h1>
        <h2 className="z-[1] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-center font-publica-sans text-[4vw]/[4vw] font-bold text-transparent drop-shadow-[0_0.5vw_0.1vw_#000000] max-lg:text-[5vw]/[5vw]">
          2024!
        </h2>
      </div>
    </div>
  );
};

export default function SelamatDatang() {
  return (
    <>
      <TransitiAtasSelamatDatang />
      <Content />
      <TransisiBawahSelamatDatang />
    </>
  );
}
