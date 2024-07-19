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
        <p className="z-[11] font-legendaire text-6xl gradient-text-yellow-up-down sm:text-7xl lg:text-8xl">
          Dokumentasi
        </p>
        <div className="z-10">
          <Parallax translateY={[-10, -10]} scale={[1, 1]} easing="easeOutSine">
            <Image
              src="/images/dokumentasi/nala.png"
              alt=""
              width={600}
              height={600}
              // style={{
              //   transform: `translateX(${position.x}px) translateY(${position.y}px)`,
              // }}
            ></Image>
          </Parallax>
        </div>

        {/* Kain Merah */}
        <div className="absolute -bottom-[12vw] -right-[30vw] z-0 hidden h-full w-full scale-[0.75] items-center justify-center drop-shadow-2xl lg:flex">
          <Image
            src="/images/dokumentasi/pita-merah.png"
            alt=""
            width={`${position.width}`}
            height={`${position.height}`}
          ></Image>
        </div>
        <div className="absolute -bottom-[12vw] -left-[30vw] z-0 hidden h-full w-full scale-x-[-0.75] scale-y-[0.75] items-center justify-center drop-shadow-2xl lg:flex">
          <Image
            src="/images/dokumentasi/pita-merah.png"
            alt=""
            width={`${position.width}`}
            height={`${position.height}`}
          ></Image>
        </div>
        {/* Kain Ungu */}
        <div className="absolute -bottom-[2vw] -right-[15vw] z-0 hidden h-full w-full scale-[0.5] items-center justify-center drop-shadow-2xl lg:flex">
          <Image
            src="/images/dokumentasi/pita-ungu.png"
            alt=""
            width={`${position.width}`}
            height={`${position.height}`}
          ></Image>
        </div>
        <div className="absolute -bottom-[2vw] -left-[15vw] z-0 hidden h-full w-full scale-x-[-0.5] scale-y-[0.5] items-center justify-center drop-shadow-2xl lg:flex">
          <Image
            src="/images/dokumentasi/pita-ungu.png"
            alt=""
            width={`${position.width}`}
            height={`${position.height}`}
          ></Image>
        </div>
      </div>
    </>
  );
}
