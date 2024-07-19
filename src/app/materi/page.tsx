'use client'
import { useEffect, useState } from "react";
import { MODUL } from "./modul";
import React from 'react';
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function MateriPage() {
    const Transtition=()=>{
        return(
            <>
            <Image
            className="absolute w-[100vw] z-[0] top-0 max-md:hidden"
            alt=""
            src={'/images/assets_materi_kainungu_atask.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 left-0 max-md:hidden z-[0]"
            alt=""
            src={'/images/assets_materi_kainmerah_ataskiri.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 right-0 max-md:hidden z-[0]"
            alt=""
            src={'/images/assets_materi_kainmerah_ataskanan.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 md:hidden z-[0]"
            alt=""
            src={'/images/assets_materi_kainungu_atask_mobile.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 md:hidden z-[0]"
            alt=""
            src={'/images/assets_materi_kainmerah_ataskiri_mobile.svg'}
            width={100}
            height={100}
            />
            </>
        )
    }
    const MateriDesktop = () => {
        const [swiper, setSwiper] = useState(null);
        const [activeSwiper, setActiveSwiper] = useState(0);
        const [modulTitle, setModulTitle] = useState("");
        const [modulDesc, setModulDesc] = useState("");

        const TitleAndModul = () => {
            return (
                <div className="w-full flex items-center justify-between px-[7vw] z-[0]">
                    <div className="w-full flex flex-col ">
                        <h1
                            className="font-legendaire text-[8vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent"
                        >
                            Materi
                        </h1>
                        <p className="font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7]">Halo Kesatria Muda! <br />
                            Seluruh modul-modul berkaitan tentang <br />
                            PIONIR Kesatria 2024 dapat dibaca di sini.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center place-content-center p-[2vw]">
                        <h2
                            className="font-legendaire text-[6vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent"
                        >
                            {modulTitle}
                        </h2>
                        <p className="font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7]">
                            {modulDesc}
                        </p>
                    </div>
                </div>
            )
        }

        const SwiperCard = ({ index, title, desc, link, imgpath }) => {
            return (
                <div
                    onMouseEnter={() => {
                        setModulTitle(title)
                        setModulDesc(desc)
                        setActiveSwiper(index)
                    }}
                    className="">
                    <div
                    className={"bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[1.7vw] flex-shrink-0 border-[0.2vw] duration-100 hover:w-[15.6vw] hover:h-[27.8vw] w-[13vw] h-[23vw]"}>
                        <Image className="w-full h-full rounded-[1.7vw]" alt="" src={imgpath} width={100} height={100} />
                    </div>
                </div>
            )
        }
        return (
            <div className="min-h-screen w-full flex flex-col items-center place-content-center py-[15vw] max-lg:hidden">
                <TitleAndModul />
                <div className="w-[100vw] flex flex-col">
                    <div className="flex flex-row justify-end gap-[2vw] px-[7vw] z-[1]">
                        <button
                            onClick={() => {
                                if (swiper) swiper.slidePrev();
                            }}
                        >
                            <Image
                                className="w-[2vw]"
                                alt=""
                                src={'/images/assets_materi_arrow_kiri.svg'}
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
                                src={'/images/assets_materi_arrow_kanan.svg'}
                                height={100}
                                width={100}
                            />
                        </button>
                    </div>
                    <div className="w-screen">
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={1}
                            grabCursor={true}
                            onSwiper={setSwiper}
                        >
                            {MODUL.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        className="h-[30vw] w-[30vw] flex items-center justify-center">
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
        )
    }
    const MateriMobile = () => {
        const [swiper, setSwiper] = useState(null);
        const [activeSwiper, setActiveSwiper] = useState(1);
        const [modulTitle, setModulTitle] = useState(MODUL[1]?.title || "");
        const [modulDesc, setModulDesc] = useState(MODUL[1]?.desc || "");
    
        const Title = () => (
            <div className="w-full flex flex-col text-center">
                <h1 className="font-legendaire text-[15vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000]">
                    Materi
                </h1>
                <p className="font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7]">
                    Halo Kesatria Muda! <br />
                    Seluruh modul-modul berkaitan tentang <br />
                    PIONIR Kesatria 2024 dapat dibaca di sini.
                </p>
            </div>
        );
    
        const ModulSection = ({activeSwiper}) => {
        if (activeSwiper === 0) {
            setModulTitle(MODUL[0].title);
            setModulDesc(MODUL[0].desc)
        }
            return(
            <div className="w-full flex flex-col text-center">
                <h2 className="font-legendaire text-[15vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000]">
                    {modulTitle}
                </h2>
                <p className="font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7]">
                    {modulDesc}
                </p>
            </div>
    )};
    
        const SwiperCard = ({ index, imgpath }) => (
            <div className="h-[60vw] flex items-center justify-center">
                <div
                className={
                    "bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[1.7vw] flex-shrink-0 border-[0.2vw] duration-200 " +
                    (activeSwiper === index ? "w-[25vw] h-[50vw]" : "w-[20vw] h-[40vw]")
                }
                >
                    <Image className="w-full h-full rounded-[1.7vw]" alt="" src={imgpath} width={100} height={100} />
                </div>
            </div>
        );
        return (
            <div className="min-h-screen w-full flex flex-col items-center place-content-center">
                <Title />
                <div className="w-screen">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={1}
                        loop={true}
                        onSwiper={setSwiper}
                        onSlideChange={(swiper) => {
                            const currentIndex = swiper.realIndex;
                            const middleIndex = Math.floor(swiper.params.slidesPerView / 2);
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
                                <SwiperCard index={index} imgpath={item.imgpath}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-row justify-end gap-[60vw] px-[7vw] translate-y-[-5vw] z-[1]">
                    <button
                        onClick={() => {
                            if (swiper) swiper.slidePrev();
                        }}
                    >
                        <Image
                            className="w-[7.5vw]"
                            alt=""
                            src={'/images/assets_materi_arrow_kiri.svg'}
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
                            className="w-[7.5vw]"
                            alt=""
                            src={'/images/assets_materi_arrow_kanan.svg'}
                            height={100}
                            width={100}
                        />
                    </button>
                </div>
                <ModulSection 
                activeSwiper={activeSwiper}
                />
            </div>
        );
    };

    return (
        <>
            <Transtition/>
            <MateriDesktop />
            <MateriMobile/>
        </>
    )
}
