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
      <div className="w-full relative h-[90vh] flex flex-col justify-center items-center overflow-x-clip">
        <p className="text-6xl sm:text-7xl lg:text-8xl font-legendaire gradient-text-yellow z-10">
          Dokumentasi
        </p>
        <div className="z-10">
          <Parallax translateY={[20, -30]} scale={[1, 1]} easing="easeOutSine">
            <Image
              src="/images/dokumentasi/nala.png"
              alt=""
              width={600}
              height={600}
              style={{
                transform: `translateX(${position.x}px) translateY(${position.y}px)`,
              }}
            ></Image>
          </Parallax>
        </div>
        <div className="absolute w-full h-full z-0 hidden lg:flex justify-center items-center drop-shadow-2xl">
          <Parallax translateY={[0, -20]} scale={[1, 1]} easing="easeOutSine">
            <Image
              src="/images/background/element-kain-merah-full.svg"
              alt=""
              width={`${position.width}`}
              height={`${position.height}`}
              // style={{
              //   transform: `translateX(${position.x / 4}px) translateY(${
              //     position.y / 4
              //   }px)`,
              //   scale: "1.1",
              // }}
            ></Image>
          </Parallax>
        </div>
      </div>
    </>
  );
}
