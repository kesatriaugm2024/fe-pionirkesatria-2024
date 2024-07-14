"use client";
import Image, { StaticImageData } from "next/image";

import React from "react";
import { Parallax } from "react-scroll-parallax";

const className =
  "drop-shadow shadow-slate-700/70 shadow-2xl rounded-2xl max-w-[50vw] aspect-[5/4] object-cover";

export function Tablet_A({
  children,
  img,
  setModalIsOpen,
  setSelectedImage,
}: {
  children?: React.ReactNode;
  img: any;
  setModalIsOpen?: (value: boolean) => void;
  setSelectedImage?: (value: any) => void;
}) {
  const handleClick = (image: StaticImageData) => {
    setModalIsOpen && setModalIsOpen(true);
    setSelectedImage && setSelectedImage(image);
  };

  return (
    <Parallax
      translateX={[-100, 60]}
      speed={10}
      scale={[0.8, 1]}
      rotateZ={["-20", "10"]}
      opacity={[10, 0]}
      easing="easeOutSine"
      onProgress={(progress) => console.log(progress)}
    >
      <div
        className="flex drop-shadow shadow-slate-700/70 shadow-2xl justify-center items-center w-[53vw] aspect-[5/4] bg-gradient-to-b from-[#EA5571] to-[#843040] rounded-2xl hover:cursor-pointer hover:scale-105 transition hover:from-[#FFD23F] hover:to-[#FFA514] active:scale-100"
        onClick={() => handleClick(img)}
      >
        <Image src={img} alt="" className={className} />
      </div>
      <div>{children}</div>
    </Parallax>
  );
}

export function Tablet_B({
  children,
  img,
  setModalIsOpen,
  setSelectedImage,
}: {
  children?: React.ReactNode;
  img: any;
  setModalIsOpen?: (value: boolean) => void;
  setSelectedImage?: (value: any) => void;
}) {
  const handleClick = (image: StaticImageData) => {
    setModalIsOpen && setModalIsOpen(true);
    setSelectedImage && setSelectedImage(image);
  };

  return (
    <Parallax
      translateX={[100, -60]}
      speed={10}
      scale={[1, 0.8]}
      rotateZ={["20", "-10"]}
      opacity={[10, 0]}
      easing="easeOutSine"
    >
      <div
        className="flex drop-shadow shadow-slate-700/70 shadow-2xl justify-center items-center w-[53vw] aspect-[5/4] bg-gradient-to-b from-[#EA5571] to-[#843040] rounded-2xl hover:cursor-pointer hover:scale-105 transition hover:from-[#FFD23F] hover:to-[#FFA514] active:scale-100"
        onClick={() => handleClick(img)}
      >
        <Image src={img} alt="" className={className} />
      </div>
      <div>{children}</div>
    </Parallax>
  );
}
