'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

const TransitiAtasSelamatDatang = () =>{
    return(
        <div
        className="absolute w-full"
        >
            <Image
            className="absolute drop-shadow-[0_0.1vw_10vw_#000000] w-[100vw] translate-y-[-5vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatang_kainmerahpendek.svg'}
            width={1000}
            height={816}
            />
            <Image
            className="absolute right-0 w-[17.5vw] top-0 drop-shadow-[0_0.1vw_10vw_#000000] max-lg:text-[23.4vw] max-lg:translate-x-[-5vw] translate-y-[5vw]"
            alt="Burung Emas Atas"
            src={'/images/assets_beranda_selamatdatang_burung.svg'}
            width={424}
            height={271}
            />
        </div>
    )
}

const TransisiBawahSelamatDatang = () => {
    return(
        <div className="w-full h-[10vh] overflow-hidden">
            <Image
            className="absolute overflow-hidden right-0 w-[25vw] translate-y-[-30vw] drop-shadow-[0_0.5vw_1vw_#000000] translate-x-[-7vw] max-lg::w-[77.5vw] max-lg:translate-y-[-80vw] max-lg:hidden"
            alt="Tugu"
            src={'/images/assets_beranda_selamatdatang_tuguungu.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute overflow-hidden right-0 w-[25vw] drop-shadow-[0_0.5vw_1vw_#000000]  max-lg:w-[77.5vw] max-lg:translate-y-[-100vw] lg:hidden z-[0]"
            alt="Tugu"
            src={'/images/assets_beranda_selamatdatang_tuguungumobile.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute w-[100vw] translate-y-[-6vw] drop-shadow-[0_1vw_1vw_#000000]"
            alt=""
            src={'/images/assets_beranda_selamatdatang_kainungupanjang.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute w-[17.5vw] left-0 drop-shadow-[0_0.5vw_1vw_#000000] translate-y-[-16vw] max-lg:w-[25vw] max-lg:translate-x-[5vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatang_gerigiungu.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute w-[10vw] left-0 translate-x-[5vw] drop-shadow-[0_1vw_1vw_#000000] translate-y-[-8.5vw] max-lg:w-[13.3vw] max-lg:translate-x-[20vw] max-lg:translate-y-[-15vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatang_buluemas.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute w-[100vw] drop-shadow-[0_1vw_1vw_#000000] translate-y-[-17vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatang_kainmerahpanjang.svg'}
            width={424}
            height={271}
            />
        </div>
    )
}

const Content = () => {
    return(
        <div
        className="min-h-[90vh] flex items-center justify-center max-lg:flex-col overflow-hidden z-[1]"
        >
            <Image
            className="w-[27.5vw] drop-shadow-[0_1vw_1vw_#000000] z-[1] max-lg:w-[56.25vw]"
            alt=""
            src={'images/logo/Nala_melambai.svg'}
            width={577}
            height={816}
            />
            <div className="flex flex-col z-[1]">
                <h2
                className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-legendaire text-[4.7vw]/[4vw] text-center font-normal drop-shadow-[0_0.5vw_0.1vw_#000000] max-lg:text-[5.2vw]/[5vw]"
                >
                    Selamat Datang
                </h2>
                <h1
                className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-legendaire text-[8.3vw]/[8vw] font-normal text-center drop-shadow-[0_0.5vw_0.1vw_#000000] max-lg:text-[9vw]/[9vw]"
                >
                    Kesatria Muda
                </h1>
                <h2
                className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-publica-sans font-bold text-[4.7vw]/[4vw] text-center drop-shadow-[0_0.5vw_0.1vw_#000000] max-lg:text-[5.2vw]/[5vw]"
                >
                    2024!
                </h2>
            </div>
        </div>
    )
}

export default function SelamatDatang(){
    return(
        <>
        <TransitiAtasSelamatDatang/>
        <Content/>
        <TransisiBawahSelamatDatang/>
        </>
    )
}