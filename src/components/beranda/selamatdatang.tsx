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
            className="absolute right-0 w-[17.5vw] top-0 drop-shadow-[0_0.1vw_10vw_#000000] max-md:text-[23.4vw] max-md:translate-x-[-5vw] translate-y-[5vw]"
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
            className="absolute overflow-hidden right-0 w-[25vw] translate-y-[-30vw] drop-shadow-[0_0.5vw_1vw_#000000] translate-x-[-7vw] max-md:w-[77.5vw] max-md:translate-y-[-80vw] max-md:hidden"
            alt="Tugu"
            src={'/images/assets_beranda_selamatdatang_tuguungu.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute overflow-hidden right-0 w-[25vw] drop-shadow-[0_0.5vw_1vw_#000000]  max-md:w-[77.5vw] max-md:translate-y-[-100vw] md:hidden"
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
            className="absolute w-[17.5vw] left-0 drop-shadow-[0_0.5vw_1vw_#000000] translate-y-[-16vw] max-md:w-[25vw] max-md:translate-x-[5vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatang_gerigiungu.svg'}
            width={424}
            height={271}
            />
            <Image
            className="absolute w-[10vw] left-0 translate-x-[5vw] drop-shadow-[0_1vw_1vw_#000000] translate-y-[-8.5vw] max-md:w-[13.3vw] max-md:translate-x-[20vw] max-md:translate-y-[-15vw]"
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

const Content = ({parallax1}) => {
    return(
        <div
        className="min-h-[90vh] flex items-center justify-center max-md:flex-col overflow-hidden"
        ref={parallax1.ref}
        >
            <Image
            className="w-[27.5vw] drop-shadow-[0_1vw_1vw_#000000] z-[1] max-md:w-[56.25vw]"
            alt=""
            src={'images/logo/Nala_melambai.svg'}
            width={577}
            height={816}
            />
            <div className="flex flex-col z-[1]">
                <h2
                className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-legendaire text-[4.7vw]/[4vw] text-center font-normal drop-shadow-[0_0.5vw_0.1vw_#000000] max-md:text-[5.2vw]/[5vw]"
                >
                    Selamat Datang
                </h2>
                <h1
                className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-legendaire text-[8.3vw]/[8vw] font-normal text-center drop-shadow-[0_0.5vw_0.1vw_#000000] max-md:text-[9vw]/[9vw]"
                >
                    Kesatria Muda
                </h1>
                <h2
                className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-publica-sans font-bold text-[4.7vw]/[4vw] text-center drop-shadow-[0_0.5vw_0.1vw_#000000] max-md:text-[5.2vw]/[5vw]"
                >
                    2024!
                </h2>
            </div>
        </div>
    )
}

export default function SelamatDatang(){
    // const [viewportSize, setViewportSize] = useState({
    //     width: typeof window !== 'undefined' ? window.innerWidth : 0,
    //     height: typeof window !== 'undefined' ? window.innerHeight : 0,
    //   });
    
    //   useEffect(() => {
    //     const handleResize = () => {
    //       setViewportSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //       });
    //     };
    
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);
    const parallax10 = useParallax({
        speed: -10,
        scale: [0,1]
    });
    return(
        <>
        <ParallaxProvider>
        <TransitiAtasSelamatDatang/>
        <Content parallax1={parallax10}/>
        <TransisiBawahSelamatDatang/>
        </ParallaxProvider>
        </>
    )
}