"use client";
import Image from "next/image";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { motion } from "framer";

const Content = () => {
  const VideoSelamatDatang = () => {
    return (
      <iframe
        id="video"
        className="h-full w-full rounded-[1.8vw]"
        src="https://www.youtube.com/embed/zvbdEJgUSb0?si=Nc5-cCmNifvP8s0U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  };
  return (
    <div
      data-aos="fade-up"
      className="flex min-h-[90vh] flex-col place-content-center items-center py-[20vh] max-lg:gap-[5vw]"
    >
      <div
        data-aos="fade-up"
        className="z-[1] flex flex-col items-center font-legendaire custom-shadow-text"
      >
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-[3vw] max-lg:text-[6vw] text-transparent">
          Selamat Datang
        </h2>
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-[4vw]/[4vw] max-lg:text-[8vw]/[8vw] text-transparent">
          Kesatria Muda{" "}
          <span className="font-publica-sans text-[4.4vw] max-lg:text-[8vw] font-medium">
            {/* 2024! */}
          </span>
        </h1>
      </div>
      <div className="absolute w-[25vw] translate-x-[-29vw] translate-y-[6vw]">
      <Image
      data-aos="fade-left"
        className="w-full"
        alt=""
        src={"/images/assets_beranda_selamatdatangvideo_gunungankiri.svg"}
        width={317.2}
        height={501.35}
      />
      </div>
      <div className="absolute w-[25vw] translate-x-[29vw] translate-y-[6vw]">
      <Image
        data-aos="fade-right"
        className="w-full"
        alt=""
        src={"/images/assets_beranda_selamatdatangvideo_gunungankanan.svg"}
        width={317.2}
        height={501.35}
      />
      </div>
      <div className="z-[1] flex h-[27vw] w-[48vw] items-center justify-center rounded-[1.8vw] bg-[#CD4258]">
        <div className="h-[25vw] w-[44vw] rounded-[1.8vw] bg-[#FFFFFF]">
          <VideoSelamatDatang />
        </div>
      </div>
    </div>
  );
};

const TransisiBawahSelamatDatangVideo = () => {
  return (
    <div>
      <div className="h-[10vh] w-full">
        <div className="absolute w-full translate-y-[-18vw]">
          <Image
            className="absolute right-0 w-[54vw]"
            alt=""
            src={"/images/assets_beranda_selamatdatangvideo_kainmerah.svg"}
            width={317.2}
            height={501.35}
          />
          <div
          className="absolute left-0 w-[17.5vw] translate-x-[5vw] translate-y-[7vw]"
          >
            <motion.div
            animate={{rotate:360}}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'linear',
            }}
            >
              <Image
              className="w-full"
              alt=""
              src={"/images/assets_beranda_selamatdatangvideo_gerigimerah.svg"}
              width={317.2}
              height={501.35}
              />
            </motion.div>
          </div>
          <Image
            className="absolute w-[100vw] translate-y-[-2vw]"
            alt=""
            src={"/images/assets_beranda_selamatdatangvideo_kainemas.svg"}
            width={317.2}
            height={501.35}
          />
          <Image
            className="absolute w-[100vw] translate-y-[-2vw]"
            alt=""
            src={"/images/assets_beranda_selamatdatangvideo_kainungu.svg"}
            width={317.2}
            height={501.35}
          />
        </div>
      </div>
    </div>
  );
};

export default function SelamatDatangVideo() {
  return (
    <>
      <ParallaxProvider>
        <Content />
        <TransisiBawahSelamatDatangVideo />
      </ParallaxProvider>
    </>
  );
}
