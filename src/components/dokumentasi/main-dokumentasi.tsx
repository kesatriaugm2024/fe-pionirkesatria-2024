"use client";
import Image from "next/image";
import { motion } from "framer";
export default function MainDokumentasi() {
  return (
    <>
      <div className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-x-clip lg:gap-[0vw] lg:pt-[6vw]">
        {/* LOGO Nala Kamera */}
        <div className="z-0 sm:z-10" data-aos="zoom-in-up">
          <Image
            src="/images/logo/nala-kamera.png"
            alt=""
            width={500}
            height={600}
            className="w-[55vw] -translate-x-[7vw] drop-shadow-[0_0.1vw_1vw_rgba(0,0,0,0.6)] sm:w-[50vw] sm:translate-y-[0vw] lg:w-[20vw] lg:translate-x-[-2.5vw] lg:translate-y-[0vw]"
          ></Image>
        </div>
        {/* TEXT Dokumentasi */}
        <p
          className="z-[11] font-legendaire text-[6vh] drop-shadow-[0_1vw_1vw_rgba(0,0,0,1)] gradient-text-yellow-up-down lg:text-[4vw]"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="300"
        >
          Dokumentasi
        </p>
        {/* Arrow Down */}
        <motion.div
          className="z-0 w-[10vw] text-red-150 drop-shadow-[0_1vw_1vw_rgba(0,0,0,1)] sm:w-[6vw] lg:w-[3vw]"
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            id="caret-double-down"
            fill="#ffb314"
          >
            <rect width="256" height="256" fill="none"></rect>
            <polyline
              fill="none"
              stroke="#ffb314"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
              points="208 128 128 208 48 128"
            ></polyline>
            <polyline
              fill="none"
              stroke="#ffb314"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
              points="208 48 128 128 48 48"
            ></polyline>
          </svg>
        </motion.div>
        {/* ABSOLUTE Kain Merah */}
        {/* <div
          className="absolute -bottom-[12vw] -right-[30vw] z-0 hidden h-full w-full items-center justify-center drop-shadow-2xl lg:flex"
          data-aos="zoom-in-left"
          data-aos-delay="1000"
        >
          <Image
            src="/images/dokumentasi/pita-merah.png"
            alt=""
            width={1000}
            height={100}
            className="w-full scale-[0.75]"
          ></Image>
        </div>
        <div
          className="absolute -bottom-[12vw] -left-[30vw] z-0 hidden h-full w-full items-center justify-center drop-shadow-2xl lg:flex"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <Image
            src="/images/dokumentasi/pita-merah.png"
            alt=""
            width={1000}
            height={100}
            className="w-full scale-x-[-0.75] scale-y-[0.75]"
          ></Image>
        </div> */}
        {/* ABSOLUTE Kain Ungu */}
        <div
          className="absolute z-0 hidden h-full w-full items-center justify-center drop-shadow-2xl sm:-bottom-[2vw] sm:-right-[15vw] sm:flex"
          data-aos="zoom-in-right"
          data-aos-delay="300"
        >
          <Image
            src="/images/dokumentasi/pita-ungu.png"
            alt=""
            width={1000}
            height={100}
            className="w-full sm:scale-[0.8] lg:-bottom-[2vw] lg:-right-[15vw] lg:scale-[0.5]"
          ></Image>
        </div>
        <div
          className="absolute z-0 hidden h-full w-full items-center justify-center drop-shadow-2xl sm:-bottom-[2vw] sm:-left-[15vw] sm:flex"
          data-aos="zoom-in-left"
          data-aos-delay="300"
        >
          <Image
            src="/images/dokumentasi/pita-ungu.png"
            alt=""
            width={1000}
            height={100}
            className="w-full sm:scale-[0.8] sm:scale-x-[-0.8] sm:scale-y-[0.8] lg:-bottom-[2vw] lg:-left-[15vw] lg:scale-[0.5] lg:scale-x-[-0.5]"
          ></Image>
        </div>
      </div>
    </>
  );
}
