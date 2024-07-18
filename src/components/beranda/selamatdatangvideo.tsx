'use client'
import Image from "next/image"
import { ParallaxProvider, useParallax } from "react-scroll-parallax";



const Content = () => {
    const VideoSelamatDatang= () =>{
        return(
            <iframe 
            id="video"
            className="w-full h-full rounded-[1.8vw]" 
            src="https://www.youtube.com/embed/-jNK03W1M2g?si=Zu-xFOJxMxd3tCDL" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen/>
        )
    }
    return(
        <div className="min-h-[90vh] py-[20vh] flex flex-col items-center place-content-center"
        >
            <div className="flex flex-col font-legendaire z-[1] items-center">
                <h2 className="text-[3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">Selamat Datang</h2>
                <h1 className="text-[4vw]/[4vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">Kesatria Muda <span className="font-publica-sans font-medium text-[4.4vw]">2024!</span></h1>
            </div>
            <Image
            className="absolute translate-x-[-29vw] w-[25vw] translate-y-[3vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatangvideo_gunungankiri.svg'}
            width={317.2}
            height={501.35}
            />
            <Image
            className="absolute translate-x-[29vw] w-[25vw] translate-y-[3vw]"
            alt=""
            src={'/images/assets_beranda_selamatdatangvideo_gunungankanan.svg'}
            width={317.2}
            height={501.35}
            />
            <div className="w-[48vw] h-[27vw] bg-[#CD4258] rounded-[1.8vw] flex items-center justify-center z-[1]">
                <div className="w-[44vw] h-[25vw] bg-[#FFFFFF] rounded-[1.8vw]">
                    <VideoSelamatDatang/>
                </div>
            </div>
        </div>
    )
}

const TransisiBawahSelamatDatangVideo = () => {
    return(
        <div className="w-full h-[10vh]">
            <div className="w-full absolute translate-y-[-18vw]">
                <Image
                className="absolute w-[54vw] right-0"
                alt=""
                src={'/images/assets_beranda_selamatdatangvideo_kainmerah.svg'}
                width={317.2}
                height={501.35}
                />
                <Image
                className="absolute w-[17.5vw] left-0 translate-x-[5vw] translate-y-[7vw]"
                alt=""
                src={'/images/assets_beranda_selamatdatangvideo_gerigimerah.svg'}
                width={317.2}
                height={501.35}
                />
                <Image
                className="absolute w-[100vw] translate-y-[-2vw]"
                alt=""
                src={'/images/assets_beranda_selamatdatangvideo_kainemas.svg'}
                width={317.2}
                height={501.35}
                /> 
                <Image
                className="absolute w-[100vw] translate-y-[-2vw]"
                alt=""
                src={'/images/assets_beranda_selamatdatangvideo_kainungu.svg'}
                width={317.2}
                height={501.35}
                />
            </div>
        </div>
    )
}

export default function SelamatDatangVideo(){
    return(
        <>
        <ParallaxProvider>
            <Content/>
            <TransisiBawahSelamatDatangVideo/>
        </ParallaxProvider>
        </>
    )
}
