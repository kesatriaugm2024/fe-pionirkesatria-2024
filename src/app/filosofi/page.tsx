"use client";
import Image from "next/image";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Filosofi() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Filosofi_Desktop className="hidden lg:flex" />
      <Filosofi_Tablet className="hidden sm:flex lg:hidden" />
      <Filosofi_Mobile className="flex sm:hidden" />
    </>
  );
}

// Desktop
function Filosofi_Desktop({ className }: { className?: string }) {
  return (
    <div
      className={`relative z-10 flex max-h-[100dvh] min-h-[100dvh] w-full flex-col items-center justify-center gap-[1vw] overflow-clip pb-[0vw] ${className}`}
    >
      <div
        className="z-10 flex w-full flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-center font-legendaire text-[3vw]/[3vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Mengenal Pionir Kesatria
        </h1>
        <h2 className="text-center font-legendaire text-[4vw]/[4vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Gamadhira
        </h2>
      </div>
      <div
        className="relative my-[1vw] flex h-[12vw] w-[16vw] items-center justify-center rounded-[1.5vw] bg-gradient-to-t from-[#FFB7A7] to-[#FFE5C7]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          src={"/images/filosofi/logo-kesat.png"}
          alt="Gamadhira"
          width={1000}
          height={100}
          className="w-full translate-x-[0.5vw] translate-y-[-0.5vw] scale-[0.65] drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)]"
        />
        <div className="absolute -right-[5.3vw] -top-[7vw] w-full">
          <Image
            src="/images/filosofi/pita-atas.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.5]"
          />
        </div>
        <div className="absolute -bottom-[5.6vw] -left-[7.05vw] w-full">
          <Image
            src="/images/filosofi/pita-bawah.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.3]"
          />
        </div>
      </div>

      <div
        className="flex h-[5vw] w-[38vw] flex-row items-center justify-center gap-[2vw] rounded-[1.5vw] bg-[#4C1F72]/40 p-[0.2vw] px-[3vw] drop-shadow-[0_0.1vw_0.1vw_rgba(0,0,0,0.3)]"
        data-aos="fade-up"
      >
        <Image
          src={"/images/filosofi/plus-kuning.svg"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[1.5vw]"
          data-aos="fade-right"
        />
        <Image
          src={"/images/filosofi/logo-1.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[3vw]"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Image
          src={"/images/filosofi/logo-2.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[3vw]"
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <Image
          src={"/images/filosofi/logo-3.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[3vw]"
          data-aos="fade-up"
          data-aos-delay="800"
        />
        <Image
          src={"/images/filosofi/logo-4.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[3vw]"
          data-aos="fade-up"
          data-aos-delay="500"
        />
        <Image
          src={"/images/filosofi/logo-5.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[3vw]"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        <Image
          src={"/images/filosofi/plus-kuning.svg"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[1.5vw]"
          data-aos="fade-left"
        />
      </div>
      <p
        className="z-10 mx-[15vw] text-center font-publica-sans text-[1.5vw]/[1.5vw] text-[#FFE5C7]"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        Gamadhira berasal dari kata &quot;gamadi&quot; yang berarti perjalanan
        dan kata &quot;dhira&quot; yang berarti kebijaksanaan, kecerdasan, dan
        keberagaman. Gamadhira layaknya burung merak yang identik dengan
        keberagaman, ketangguhan, dan keindahan. Dengan Gamadhira diharapkan
        Kesatria Muda memiliki perjalanan yang indah di Fakultas Teknik
        Universitas Gadjah Mada dalam keberagaman latar belakang. Sehingga dapat
        menghasilkan individu yang bijaksana, cerdas, tangguh dan juga
        kolaboratif antar sesama.
      </p>

      {/* ATAS */}
      <Image
        className="absolute -right-[5vw] -top-[6vw] z-[1] w-full scale-[0.9]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/aset-kain-merah-kanan.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
      />
      <Image
        className="absolute -left-[5vw] -top-[2vw] z-[1] w-full scale-[0.9]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/aset-kain-merah-kiri.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
      />

      <Image
        className="absolute top-0 z-0 w-full"
        alt="Gamadhira"
        src="/images/filosofi/desktop/aset-kain-ungu-atas.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
      />

      {/* Bawah */}
      <Image
        className="absolute -bottom-[16vw] -right-[0vw] z-[1] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/asset-kain-ungu-bawah.png"
        width={1000}
        height={1000}
        data-aos="fade-up"
      />
      <Image
        className="absolute -bottom-[0vw] -right-[0vw] z-[0] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/asset-kain-merah-bawah.png"
        width={1000}
        height={1000}
        data-aos="fade-up"
      />

      {/* Gambar Gunungan */}
      <Image
        className="absolute -bottom-[65vw] -right-[44vw] z-[0] w-full rotate-[15deg] scale-[0.125]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/asset-gunungan.png"
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -bottom-[65vw] -left-[44vw] z-[0] w-full -rotate-[15deg] scale-[0.125]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/asset-gunungan.png"
        width={1000}
        height={1000}
      />
    </div>
  );
}

// Tablet
function Filosofi_Tablet({ className }: { className?: string }) {
  return (
    <div
      className={`relative z-10 flex max-h-[100dvh] min-h-[100dvh] w-full flex-col items-center justify-center gap-[3vw] overflow-clip pb-[10vw] ${className}`}
    >
      <div
        className="z-10 flex w-full flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <h1 className="text-center font-legendaire text-[5vw]/[5vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Mengenal Pionir Kesatria
        </h1>
        <h2 className="text-center font-legendaire text-[6vw]/[6vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Gamadhira
        </h2>
      </div>
      <div
        className="relative my-[1vw] flex h-[18vw] w-[24vw] items-center justify-center rounded-[1.5vw] bg-gradient-to-t from-[#FFB7A7] to-[#FFE5C7]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Image
          src={"/images/filosofi/logo-kesat.png"}
          alt="Gamadhira"
          width={1000}
          height={100}
          className="w-full translate-x-[0.5vw] translate-y-[-0.5vw] scale-[0.65] drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)]"
        />
        <div className="absolute -right-[8vw] -top-[10vw] w-full">
          <Image
            src="/images/filosofi/pita-atas.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.5]"
          />
        </div>
        <div className="absolute -bottom-[8.4vw] -left-[10.68vw] w-full">
          <Image
            src="/images/filosofi/pita-bawah.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.3]"
          />
        </div>
      </div>

      <div
        className="flex h-[9vw] w-[70vw] flex-row items-center justify-center gap-[8vw] rounded-[1.5vw] bg-[#4C1F72]/40 p-[0.2vw] px-[3vw] drop-shadow-[0_0.1vw_0.1vw_rgba(0,0,0,0.3)]"
        data-aos="fade-up"
      >
        <Image
          src={"/images/filosofi/logo-1.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[5vw]"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <Image
          src={"/images/filosofi/logo-2.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[5vw]"
          data-aos="fade-up"
          data-aos-delay="600"
        />
        <Image
          src={"/images/filosofi/logo-3.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[5vw]"
          data-aos="fade-up"
          data-aos-delay="900"
        />
        <Image
          src={"/images/filosofi/logo-4.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[5vw]"
          data-aos="fade-up"
          data-aos-delay="600"
        />
        <Image
          src={"/images/filosofi/logo-5.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[5vw]"
          data-aos="fade-up"
          data-aos-delay="300"
        />
      </div>
      <p
        className="z-10 mx-[15vw] text-center font-publica-sans text-[2vw]/[2.5vw] text-[#FFE5C7]"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        Gamadhira berasal dari kata &quot;gamadi&quot; yang berarti perjalanan
        dan kata &quot;dhira&quot; yang berarti kebijaksanaan, kecerdasan, dan
        keberagaman. Gamadhira layaknya burung merak yang identik dengan
        keberagaman, ketangguhan, dan keindahan. Dengan Gamadhira diharapkan
        Kesatria Muda memiliki perjalanan yang indah di Fakultas Teknik
        Universitas Gadjah Mada dalam keberagaman latar belakang. Sehingga dapat
        menghasilkan individu yang bijaksana, cerdas, tangguh dan juga
        kolaboratif antar sesama.
      </p>

      {/* ATAS */}
      <Image
        className="absolute -right-[0vw] -top-[8vw] z-[1] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/tablet/aset-kain-merah-atas.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
        data-aos-delay="200"
      />

      <Image
        className="absolute -left-[0vw] -top-[32vw] z-0 w-full"
        alt="Gamadhira"
        src="/images/filosofi/tablet/aset-kain-ungu-atas.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
      />

      {/* Bawah */}
      <Image
        className="absolute -bottom-[5vw] -right-[0vw] z-[2] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/tablet/aset-kain-ungu-bawah.png"
        width={1000}
        height={1000}
        data-aos="fade-up"
      />
      <Image
        className="absolute -bottom-[10vw] -right-[0vw] z-[1] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/tablet/aset-kain-merah-bawah.png"
        width={1000}
        height={1000}
        data-aos="fade-up"
        data-aos-delay="200"
      />

      {/* Gambar Gerigi */}
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className="absolute -bottom-[40vw] -left-[20vw] z-[0] w-full"
      >
        <Image
          className="scale-[0.2]"
          alt="Gamadhira"
          src="/images/filosofi/tablet/gerigi-kuning.svg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}

// HP
function Filosofi_Mobile({ className }: { className?: string }) {
  return (
    <div
      className={`relative z-10 flex max-h-[100dvh] min-h-[100dvh] w-full flex-col items-center justify-center gap-[3vw] overflow-clip pb-[10vw] ${className}`}
    >
      <div className="z-10 flex w-full flex-col items-center justify-center">
        <h1
          className="text-center font-legendaire text-[7vw]/[7vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down"
          data-aos="fade-up"
        >
          Mengenal Pionir Kesatria
        </h1>
        <h2
          className="text-center font-legendaire text-[9vw]/[9vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Gamadhira
        </h2>
      </div>

      {/* BOX LOGO */}
      <div
        className="relative my-[1vw] flex h-[24vw] w-[32vw] items-center justify-center rounded-[1.5vw] bg-gradient-to-t from-[#FFB7A7] to-[#FFE5C7]"
        data-aos="fade-up"
      >
        {/* LOGO KESAT */}
        <Image
          src={"/images/filosofi/logo-kesat.png"}
          alt="Gamadhira"
          width={1000}
          height={100}
          className="w-full translate-x-[0.5vw] translate-y-[-0.5vw] scale-[0.65] drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)]"
        />
        {/* PITA KOTAK */}
        <div className="absolute -right-[10.5vw] -top-[13vw] w-full">
          <Image
            src="/images/filosofi/pita-atas.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.5]"
          />
        </div>
        <div className="absolute -bottom-[11.2vw] -left-[14.2vw] w-full">
          <Image
            src="/images/filosofi/pita-bawah.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.3]"
          />
        </div>
      </div>

      {/* LOGO-LOGO */}
      <div
        className="-my-[1vw] flex h-[12vw] w-[44vw] flex-row items-center justify-center gap-[8vw] rounded-[1.5vw] bg-[#4C1F72]/40 p-[0.2vw] px-[3vw] drop-shadow-[0_0.1vw_0.1vw_rgba(0,0,0,0.3)]"
        data-aos="zoom-in"
      >
        <Image
          src={"/images/filosofi/logo-1.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[10vw]"
          data-aos="zoom-in"
          data-aos-delay="100"
        />
        <Image
          src={"/images/filosofi/logo-2.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[10vw]"
          data-aos="zoom-in"
          data-aos-delay="200"
        />
      </div>
      <div
        className="flex h-[12vw] w-[60vw] flex-row items-center justify-center gap-[8vw] rounded-[1.5vw] bg-[#4C1F72]/40 p-[0.2vw] px-[3vw] drop-shadow-[0_0.1vw_0.1vw_rgba(0,0,0,0.3)]"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <Image
          src={"/images/filosofi/logo-3.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[9vw]"
          data-aos="zoom-in"
          data-aos-delay="400"
        />
        <Image
          src={"/images/filosofi/logo-4.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[9vw]"
          data-aos="zoom-in"
          data-aos-delay="600"
        />
        <Image
          src={"/images/filosofi/logo-5.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-[8vw]"
          data-aos="zoom-in"
          data-aos-delay="800"
        />
      </div>

      <p
        className="z-10 mx-[15vw] text-center font-publica-sans text-[3vw]/[3.5vw] text-[#FFE5C7]"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        Gamadhira berasal dari kata &quot;gamadi&quot; yang berarti perjalanan
        dan kata &quot;dhira&quot; yang berarti kebijaksanaan, kecerdasan, dan
        keberagaman. Gamadhira layaknya burung merak yang identik dengan
        keberagaman, ketangguhan, dan keindahan. Dengan Gamadhira diharapkan
        Kesatria Muda memiliki perjalanan yang indah di Fakultas Teknik
        Universitas Gadjah Mada dalam keberagaman latar belakang. Sehingga dapat
        menghasilkan individu yang bijaksana, cerdas, tangguh dan juga
        kolaboratif antar sesama.
      </p>

      {/* ATAS */}
      <Image
        className="absolute -right-[0vw] -top-[3vw] z-[1] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/hp/aset-kain-merah-atas.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
        data-aos-delay="300"
      />

      <Image
        className="absolute -left-[0vw] -top-[20vw] z-[2] w-full"
        alt="Gamadhira"
        src="/images/filosofi/hp/aset-kain-ungu-atas.png"
        width={1000}
        height={1000}
        data-aos="fade-down"
      />
      {/* Gambar Gerigi */}
      <div className="absolute -left-[17vw] -top-[40vw] z-[0] w-full scale-[0.25]">
        <Image
          className=""
          alt="Gamadhira"
          src="/images/filosofi/tablet/gerigi-kuning.svg"
          width={1000}
          height={1000}
          data-aos="fade-down"
          data-aos-delay="600"
        />
      </div>

      {/* Bawah */}
      <Image
        className="absolute -bottom-[5vw] -right-[0vw] z-[2] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/tablet/aset-kain-ungu-bawah.png"
        width={1000}
        height={1000}
        data-aos="fade-up"
      />
      <Image
        className="absolute -bottom-[10vw] -right-[0vw] z-[0] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/tablet/aset-kain-merah-bawah.png"
        width={1000}
        height={1000}
        data-aos="fade-up"
        data-aos-delay="300"
      />

      {/* Gambar Gunungan */}
      <div className="absolute -bottom-[63vw] -left-[15vw] z-[1] w-full -rotate-[20deg] scale-[0.25]">
        <Image
          className=""
          alt="Gamadhira"
          src="/images/filosofi/desktop/asset-gunungan.png"
          width={1000}
          height={1000}
          data-aos="fade-up"
          data-aos-delay="600"
        />
      </div>
    </div>
  );
}
