"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Footer from "@/components/layout/footer";

const DEPARTEMEN = [
  {
    title: "Departemen Teknik Arsitektur dan Perencanaan",
    prodi: [
      {
        namaprodi: "Arsitektur",
        link: "1WE9n9aLgGgPli2c5crFcOFa73rGEkv83",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Arsitektur.pdf.png",
      },
      {
        namaprodi: "Perencanaan Wilayah Kota",
        link: "163KaAm1aVLO2lFQoCxUSSB2Oe78PvzH0",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Perencanaan Wilayah dan Kota.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Elektro dan Teknologi Informasi",
    prodi: [
      {
        namaprodi: "Teknik Elektro",
        link: "WqCID-FAz3zm8PxOoot7Ial3rf9bpsPI",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Elektro (DONE).docx.pdf.png",
      },
      {
        namaprodi: "Teknologi Informasi",
        link: "1FeMeOPvvplVnfXh2KP0GDtGk__3eihYX",
        imgpath:
          "/images/covermodul2/Modul Prodi Teknologi Informasi_Page_1.png",
      },
      {
        namaprodi: "Teknik Biomedis",
        link: "1IkwwlbENfG_NcXeKZE0cGIKIle0VzveX",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Biomedis (DONE).docx.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Nuklir dan Teknik Fisika",
    prodi: [
      {
        namaprodi: "Teknik Nuklir",
        link: "1QQZEqIXEn63ad8UpKPIY2NN9wzl4Reu3",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Nuklir.pdf.png",
      },
      {
        namaprodi: "Teknik Fisika",
        link: "1nJuu5tQWI2136rxl5u-UnNBafCQ2bPpK",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Fisika (DONE).docx.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Geodesi",
    prodi: [
      {
        namaprodi: "Teknik Geodesi",
        link: "19DoXIk_GZlrTfh9LAnnFv0tMfyNoGs00",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Geodesi (DONE).docx.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Geologi",
    prodi: [
      {
        namaprodi: "Teknik Geologi",
        link: "17zstl6s9gmRWGkLINwpLUaWYXLoo1RVa",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Geologi (DONE).docx.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Kimia",
    prodi: [
      {
        namaprodi: "Teknik Kimia",
        link: "1VHVlEHJRbQL7Wi8l8oQhuBrMEJ1REPHt",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Kimia.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Mesin dan Industri",
    prodi: [
      {
        namaprodi: "Teknik Mesin",
        link: "1vJ0pwnzHOZPk2XZg_kjvjezwvm0Icj7B",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Mesin.pdf.png",
      },
      {
        namaprodi: "Teknik Industri",
        link: "14OR3K0NBrd7tPRMc_fcM5okf9KrDWdeT",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Industri.pdf.png",
      },
    ],
  },
  {
    title: "Departemen Teknik Sipil dan Lingkungan",
    prodi: [
      {
        namaprodi: "Teknik Sipil",
        link: "1ZapisYGM7MzxZsyfex-ttBnbjYsyINy_",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Sipil.pdf.png",
      },
      {
        namaprodi: "Teknik Infrastruktur Lingkungan",
        link: "1AA_QooNb1gkwglp-e8HAEgiGdwKMtWtd",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Infrastruktur Lingkungan.pdf.png",
      },
      {
        namaprodi: "Teknik Sumber Daya Air",
        link: "1Vck7DS_OcnV93_zyrBC6MG_1RJH3hZcc",
        imgpath:
          "/images/covermodul2/Pages from Modul Prodi Teknik Sumber Daya Air.pdf.png",
      },
    ],
  },
];

export default function ProdiPage() {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeSwiper, setActiveSwiper] = useState(1);

  function DepartemenCardDesktop({ title, prodi }: any) {
    return (
      <div className="flex flex-col place-content-center items-center gap-[4vw] px-[10vw] lg:gap-0 lg:py-[5vw]">
        <div className="h-[10vw] lg:flex lg:w-full lg:items-center lg:justify-between">
          <div className="flex min-h-[10vw] w-[4vw] items-center justify-center max-lg:hidden">
            <button
              onClick={() => {
                if (swiper) swiper.slidePrev();
                setActiveSwiper((prev) =>
                  prev === 0 ? DEPARTEMEN.length - 1 : prev - 1,
                );
              }}
            >
              <Image
                className="w-[7.5vw] duration-100 hover:w-[10vw] lg:w-[3vw] lg:hover:w-[4vw]"
                alt=""
                src={"/images/assets_materi_arrow_kiri.svg"}
                height={100}
                width={100}
              />
            </button>
          </div>

          {/*  */}
          <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-center font-legendaire text-[7vw]/[7vw] text-transparent lg:text-[4vw]/[4vw]">
            {title}
          </h1>
          {/*  */}
          <div className="flex min-h-[10vw] w-[4vw] items-center justify-center max-lg:hidden">
            <button
              onClick={() => {
                if (swiper) swiper.slideNext();
                setActiveSwiper((prev) =>
                  prev === DEPARTEMEN.length - 1 ? 0 : prev + 1,
                );
              }}
            >
              <Image
                className="w-[7.5vw] duration-100 hover:w-[10vw] lg:w-[3vw] lg:hover:w-[4vw]"
                alt=""
                src={"/images/assets_materi_arrow_kanan.svg"}
                height={100}
                width={100}
              />
            </button>
          </div>
        </div>
        <div className="flex h-[30vw] w-full items-center justify-center max-lg:h-[50vw]">
          {prodi.map(
            (
              item: { namaprodi: string; link: string; imgpath: string },
              idx: number,
            ) => (
              <Link
                href={"/materi/" + item.link}
                className="flex w-full items-center justify-center"
                key={idx}
              >
                <div className="h-[23vw] w-[13vw] flex-shrink-0 rounded-[1.7vw] border-[0.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] duration-100 hover:h-[27.8vw] hover:w-[15.6vw] max-lg:h-[40vw] max-lg:w-[20vw] max-lg:hover:h-[50vw] max-lg:hover:w-[25vw]">
                  <Image
                    className="h-full w-full rounded-[1.7vw]"
                    alt=""
                    src={item.imgpath}
                    width={1000}
                    height={1000}
                  />
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    );
  }

  return (
    <main className="min-w-screen flex min-h-screen flex-col place-content-center items-center lg:pt-[3vw]">
      <div className="w-full max-lg:py-[10vw]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          onSwiper={setSwiper}
          loop={true}
        >
          {DEPARTEMEN.map((item, index) => (
            <SwiperSlide key={index}>
              <DepartemenCardDesktop
                index={index}
                prodi={item.prodi}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid w-full grid-cols-2 lg:hidden">
        <div className="flex min-h-[10vw] items-center justify-end px-[15vw]">
          <button
            onClick={() => {
              if (swiper) swiper.slidePrev();
              setActiveSwiper((prev) =>
                prev === 0 ? DEPARTEMEN.length - 1 : prev - 1,
              );
            }}
          >
            <Image
              className="w-[7.5vw] duration-100 hover:w-[10vw] lg:w-[6vw] lg:hover:w-[8vw]"
              alt=""
              src={"/images/assets_materi_arrow_kiri.svg"}
              height={100}
              width={100}
            />
          </button>
        </div>
        <div className="flex w-full items-center justify-start px-[15vw]">
          <button
            onClick={() => {
              if (swiper) swiper.slideNext();
              setActiveSwiper((prev) =>
                prev === DEPARTEMEN.length - 1 ? 0 : prev + 1,
              );
            }}
          >
            <Image
              className="w-[7.5vw] duration-100 hover:w-[10vw] lg:w-[6vw] lg:hover:w-[8vw]"
              alt=""
              src={"/images/assets_materi_arrow_kanan.svg"}
              height={1000}
              width={1000}
            />
          </button>
        </div>
      </div>
      <Footer className={"z-[0] mt-[5vw] max-sm:absolute max-sm:bottom-0"} />
    </main>
  );
}
