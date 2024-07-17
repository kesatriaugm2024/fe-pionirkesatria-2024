"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Chapter2(){
    const [swiper, setSwiper] = useState(null);
    const [activeSwiper, setActiveSwiper] = useState(0);
    return(
        <div className="flex flex-col bg-pattern-ungu-kesat bg-top bg-repeat py-10" >
            <div className="container flex w-full flex-col items-center justify-center">
                <h2 className="text-center font-legendaire text-[3rem] text-white drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)] gradient-text-yellow-up-down">
                Bagian II: Lika Liku Kesatria 
                </h2>
                <p className="text-center font-publica-sans font-normal text-[1.3rem] text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
                Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat sekolah. Di mana saat <br/> sekolah, segala sesuatunya teratur dan memiliki jadwal yang pasti. Selain itu, lingkup pergaulan yang <br /> akan ditemui di masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan kesibukan <br /> akademik dan di luar akademik yang cukup kompleks semasa kuliah. Hal-hal tersebut harus dapat <br /> dikenali terlebih dahulu untuk menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan <br /> yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik pada modul ini.
                </p>
            </div>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            className="w-full !overflow-y-visible !px-[10px]"
            grabCursor={true}
            >
                <SwiperSlide>
                    Slide 1
                </SwiperSlide>
                <SwiperSlide>
                    Slide 2
                </SwiperSlide>
                <SwiperSlide>
                    Slide 3
                </SwiperSlide>
                <SwiperSlide>
                    Slide 4
                </SwiperSlide>
                <SwiperSlide>
                    Slide 5
                </SwiperSlide>
            </Swiper>
        </div>
    )
}