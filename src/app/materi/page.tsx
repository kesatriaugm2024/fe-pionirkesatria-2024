"use client";
import { useEffect, useState } from "react";
import { MODUL } from "./modul";
import React from "react";
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import AOS from 'aos';

export default function MateriPage() {
  useEffect(() => {
    AOS.init({
      duration: 100, // Durasi animasi dalam milidetik
    });
  }, []);
  const Transtition = () => {
    return (
      <>
        <Image
          className="absolute top-0 z-[0] w-[100vw] max-md:hidden lg:translate-y-[-5vw]"
          alt=""
          src={"/images/assets_materi_kainungu_atask.svg"}
          width={100}
          height={100}
        />
        <Image
          className="absolute left-0 top-0 z-[0] w-[100vw] max-md:hidden lg:translate-y-[-5vw]"
          alt=""
          src={"/images/assets_materi_kainmerah_ataskiri.svg"}
          width={100}
          height={100}
        />
        <Image
          className="absolute right-0 top-0 z-[0] w-[100vw] max-md:hidden lg:translate-y-[-5vw]"
          alt=""
          src={"/images/assets_materi_kainmerah_ataskanan.svg"}
          width={100}
          height={100}
        />
        <Image
          className="absolute top-0 z-[0] w-[100vw] md:hidden lg:translate-y-[-5vw]"
          alt=""
          src={"/images/assets_materi_kainungu_atask_mobile.svg"}
          width={100}
          height={100}
        />
        <Image
          className="absolute top-0 z-[0] w-[100vw] md:hidden lg:translate-y-[-5vw]"
          alt=""
          src={"/images/assets_materi_kainmerah_ataskiri_mobile.svg"}
          width={100}
          height={100}
        />
      </>
    );
  };
  const MateriDesktop = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [activeSwiper, setActiveSwiper] = useState(0);
    const [modulTitle, setModulTitle] = useState("");
    const [modulDesc, setModulDesc] = useState("");

    const TitleAndModul = () => {
      return (
        <div className="z-[0] flex w-full items-center justify-between px-[7vw]">
          <div className="flex w-full flex-col">
            <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[8vw]/[8vw] text-transparent">
              Materi
            </h1>
            <p className="font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7]">
              Halo Kesatria Muda! <br />
              Seluruh modul-modul berkaitan tentang <br />
              PIONIR Kesatria 2024 dapat dibaca di sini.
            </p>
          </div>
          <div data-aos="fade-up" className="flex w-full flex-col place-content-center items-center p-[2vw]">
            <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[4vw]/[5vw] text-transparent">
              {modulTitle}
            </h2>
            {/* <p className="font-publica-sans text-[1vw]/[1.5vw] text-[#FFE5C7] text-justify">
                            {modulDesc}
                        </p> */}
          </div>
        </div>
      );
    };

    const SwiperCard = ({
      index,
      title,
      desc,
      link,
      imgpath,
    }: {
      index: number;
      title: string;
      desc: string;
      link: string;
      imgpath: string;
    }) => {
      return (
        <Link
          href={"/materi/" + link}
          onMouseEnter={() => {
            setModulTitle(title);
            setModulDesc(desc);
            setActiveSwiper(index);
          }}
          className=""
        >
          <div
            className={
              "h-[23vw] w-[13vw] flex-shrink-0 rounded-[1.7vw] border-[0.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] duration-100 hover:h-[27.8vw] hover:w-[15.6vw]"
            }
          >
            <Image
              className="h-full w-full rounded-[1.7vw]"
              alt=""
              src={imgpath}
              width={1000}
              height={1000}
            />
          </div>
        </Link>
      );
    };
    return (
      <div className="flex min-h-screen w-full flex-col place-content-center items-center pt-[5vw] max-lg:hidden">
        <TitleAndModul />
        <div className="flex w-[100vw] flex-col">
          <div data-aos="fade-up" className="z-[1] flex flex-row justify-end gap-[2vw] px-[7vw]">
            <button
              onClick={() => {
                if (swiper) swiper.slidePrev();
              }}
            >
              <Image
                className="w-[2vw]"
                alt=""
                src={"/images/assets_materi_arrow_kiri.svg"}
                height={100}
                width={100}
              />
            </button>
            <button
              onClick={() => {
                if (swiper) swiper.slideNext();
              }}
            >
              <Image
                className="w-[2vw]"
                alt=""
                src={"/images/assets_materi_arrow_kanan.svg"}
                height={100}
                width={100}
              />
            </button>
          </div>
          <div data-aos="fade-up" className="w-screen">
            <Swiper
              slidesPerView={6}
              spaceBetween={1}
              grabCursor={true}
              onSwiper={setSwiper}
            >
              {MODUL.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex h-[30vw] w-[30vw] items-center justify-center">
                    <SwiperCard
                      index={index}
                      desc={item.desc}
                      imgpath={item.imgpath}
                      link={item.link}
                      title={item.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    );
  };
  const MateriMobile = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [activeSwiper, setActiveSwiper] = useState<number>(1);
    const [modulTitle, setModulTitle] = useState(MODUL[1]?.title || "");
    const [modulDesc, setModulDesc] = useState(MODUL[1]?.desc || "");

    const Title = () => (
      <div className="flex w-full flex-col text-center">
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[15vw] text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000]">
          Materi
        </h1>
        <p className="font-publica-sans text-[2.1vw]/[2.8vw] text-[#FFE5C7]">
          Halo Kesatria Muda! <br />
          Seluruh modul-modul berkaitan tentang <br />
          PIONIR Kesatria 2024 dapat dibaca di sini.
        </p>
      </div>
    );

    const ModulSection = ({ activeSwiper }: { activeSwiper: number }) => {
      if (activeSwiper === 0) {
        setModulTitle(MODUL[0].title);
        setModulDesc(MODUL[0].desc);
      }
      return (
        <div className="flex w-full flex-col text-center">
          <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[7vw] text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000]">
            {modulTitle}
          </h2>
          {/* <p className="font-publica-sans text-[1vw]/[2vw] text-[#FFE5C7] h-[5vw] px-[20vw]">
                    {modulDesc}
                </p> */}
        </div>
      );
    };

    const SwiperCard = ({
      index,
      imgpath,
      link,
    }: {
      index: number;
      imgpath: string;
      link: string;
    }) => (
      <Link
        href={"/materi/" + link}
        className="flex h-[60vw] items-center justify-center"
      >
        <div
          className={
            "flex-shrink-0 rounded-[1.7vw] border-[0.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] duration-200 " +
            (activeSwiper === index ? "h-[50vw] w-[25vw]" : "h-[40vw] w-[20vw]")
          }
        >
          <Image
            className="h-full w-full rounded-[1.7vw]"
            alt=""
            src={imgpath}
            width={1000}
            height={1000}
          />
        </div>
      </Link>
    );
    return (
      <div className="flex min-h-screen w-full flex-col place-content-center items-center lg:hidden sm:translate-y-[5vw] sm:py-[4vw]">
        <Title />
        <div className="w-screen">
          <Swiper
            slidesPerView={3}
            spaceBetween={1}
            loop={true}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => {
              const currentIndex = swiper.realIndex;
              const middleIndex = Math.floor(
                (swiper.params.slidesPerView as number) / 2,
              );
              const newIndex = currentIndex + middleIndex;
              if (newIndex >= 0 && newIndex < MODUL.length) {
                setActiveSwiper(newIndex);
                setModulTitle(MODUL[newIndex].title || "");
                setModulDesc(MODUL[newIndex].desc || "");
              }
            }}
          >
            {MODUL.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperCard
                  index={index}
                  imgpath={item.imgpath}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="z-[1] flex translate-y-[-5vw] flex-row justify-end gap-[60vw] px-[7vw]">
          <button
            onClick={() => {
              if (activeSwiper == 1) {
                if (swiper) swiper.slidePrev();
                setActiveSwiper(0);
                setModulTitle(MODUL[activeSwiper].title);
                setModulDesc(MODUL[activeSwiper].desc);
                return;
              } else if (swiper) swiper.slidePrev();
            }}
          >
            <Image
              className="w-[7.5vw]"
              alt=""
              src={"/images/assets_materi_arrow_kiri.svg"}
              height={100}
              width={100}
            />
          </button>
          <button
            onClick={() => {
              if (activeSwiper == MODUL.length - 1) {
                if (swiper) swiper.slideNext();
                setActiveSwiper(0);
                setModulTitle(MODUL[activeSwiper].title);
                setModulDesc(MODUL[activeSwiper].desc);
                return;
              } else if (swiper) swiper.slideNext();
            }}
          >
            <Image
              className="w-[7.5vw]"
              alt=""
              src={"/images/assets_materi_arrow_kanan.svg"}
              height={100}
              width={100}
            />
          </button>
        </div>
        <ModulSection activeSwiper={activeSwiper} />
      </div>
    );
  };

  return (
    <>
      <Transtition />
      <MateriDesktop />
      <MateriMobile />
      <Footer className={"z-[-1] absolute"}/>
    </>
  );
}
