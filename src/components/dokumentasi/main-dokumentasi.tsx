"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
export default function MainDokumentasi() {
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    setPosition({
      ...position,
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth - e.pageX * 1) / 40;
      const y = (window.innerHeight - e.pageY * 1) / 40;

      setPosition({
        x,
        y,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-x-clip">
        <p
          className="z-[11] font-legendaire text-6xl drop-shadow-[0_1vw_1vw_rgba(0,0,0,1)] gradient-text-yellow-up-down sm:text-7xl lg:text-8xl"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Dokumentasi
        </p>
        <div className="z-10" data-aos="zoom-in">
          <Parallax
            translateY={[-10, 10]}
            translateX={[-10, -10]}
            scale={[1, 1]}
            easing="easeOutSine"
          >
            <Image
              src="/images/logo/nala-kamera.png"
              alt=""
              width={500}
              height={600}
              className="w-[70vw] drop-shadow-[0_0.1vw_2vw_rgba(0,0,0,0.6)] sm:max-w-[50vw] lg:max-w-[28vw]"
              // style={{
              //   transform: `translateX(${position.x}px) translateY(${position.y}px)`,
              // }}
            ></Image>
          </Parallax>
        </div>

        {/* Kain Merah */}
        <div
          className="absolute -bottom-[12vw] -right-[30vw] z-0 hidden h-full w-full items-center justify-center drop-shadow-2xl lg:flex"
          data-aos="zoom-in-left"
          data-aos-delay="1000"
        >
          <Image
            src="/images/dokumentasi/pita-merah.png"
            alt=""
            width={`${position.width}`}
            height={`${position.height}`}
            className="scale-[0.75]"
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
            width={`${position.width}`}
            height={`${position.height}`}
            className="scale-x-[-0.75] scale-y-[0.75]"
          ></Image>
        </div>
        {/* Kain Ungu */}
        <div
          className="absolute z-0 hidden h-full w-full items-center justify-center drop-shadow-2xl sm:-bottom-[2vw] sm:-right-[15vw] sm:flex"
          data-aos="zoom-in-right"
          data-aos-delay="300"
        >
          <Image
            src="/images/dokumentasi/pita-ungu.png"
            alt=""
            width={`${position.width}`}
            height={`${position.height}`}
            className="sm:scale-[0.8] lg:-bottom-[2vw] lg:-right-[15vw] lg:scale-[0.5]"
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
            width={`${position.width}`}
            height={`${position.height}`}
            className="sm:scale-[0.8] sm:scale-x-[-0.8] sm:scale-y-[0.8] lg:-bottom-[2vw] lg:-left-[15vw] lg:scale-[0.5] lg:scale-x-[-0.5]"
          ></Image>
        </div>
      </div>
    </>
  );
}
