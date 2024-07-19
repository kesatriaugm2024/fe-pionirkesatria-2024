"use client";
import Image, { StaticImageData } from "next/image";

import React from "react";
import { Parallax } from "react-scroll-parallax";

const className = "rounded-2xl max-w-[24vw] aspect-[5/4] object-cover";

export function Desktop_Right({
  children,
  img,
  setModalIsOpen,
  setSelectedImage,
}: {
  children?: React.ReactNode;
  img: StaticImageData;
  setModalIsOpen?: (value: boolean) => void;
  setSelectedImage?: (value: StaticImageData) => void;
}) {
  const handleClick = (image: StaticImageData) => {
    setModalIsOpen && setModalIsOpen(true);
    setSelectedImage && setSelectedImage(image);
  };

  return (
    <Parallax
      translateX={[-100, 60]}
      speed={20}
      scale={[0.2, 1]}
      rotateX={["100", "-20"]}
      rotateY={["-90", "20"]}
      rotate={["-50", "10"]}
      opacity={[10, 0]}
      easing="easeOutSine"
    >
      <div
        className="flex aspect-[5/4] w-[26vw] items-center justify-center rounded-2xl bg-gradient-to-b from-[#EA5571] to-[#843040] shadow-2xl shadow-slate-700/70 drop-shadow transition hover:scale-105 hover:cursor-pointer hover:from-[#FFD23F] hover:to-[#FFA514] active:scale-100"
        onClick={() => handleClick(img)}
      >
        <Image src={img} alt="a" className={className} />
      </div>
      <div>{children}</div>
    </Parallax>
  );
}

export function Desktop_Center({
  children,
  img,
  setModalIsOpen,
  setSelectedImage,
}: {
  children?: React.ReactNode;
  img: StaticImageData;
  setModalIsOpen?: (value: boolean) => void;
  setSelectedImage?: (value: StaticImageData) => void;
}) {
  const handleClick = (image: StaticImageData) => {
    setModalIsOpen && setModalIsOpen(true);
    setSelectedImage && setSelectedImage(image);
  };
  return (
    <Parallax
      speed={10}
      scale={[0.2, 1]}
      rotateX={["100", "-20"]}
      opacity={[10, 0]}
      easing="easeOutSine"
    >
      <div
        className="flex aspect-[5/4] w-[26vw] items-center justify-center rounded-2xl bg-gradient-to-b from-[#EA5571] to-[#843040] shadow-2xl shadow-slate-700/70 drop-shadow transition hover:scale-105 hover:cursor-pointer hover:from-[#FFD23F] hover:to-[#FFA514] active:scale-100"
        onClick={() => handleClick(img)}
      >
        <Image src={img} alt="" className={className} />
      </div>
      <div>{children}</div>
    </Parallax>
  );
}

export function Desktop_Left({
  children,
  img,
  setModalIsOpen,
  setSelectedImage,
}: {
  children?: React.ReactNode;
  img: StaticImageData;
  setModalIsOpen?: (value: boolean) => void;
  setSelectedImage?: (value: StaticImageData) => void;
}) {
  const handleClick = (image: StaticImageData) => {
    setModalIsOpen && setModalIsOpen(true);
    setSelectedImage && setSelectedImage(image);
  };
  return (
    <Parallax
      translateX={[100, -60]}
      speed={20}
      scale={[0.2, 1]}
      rotateX={["100", "-20"]}
      rotateY={["90", "-20"]}
      rotate={["50", "-10"]}
      opacity={[10, 0]}
      easing="easeOutSine"
    >
      <div
        className="flex aspect-[5/4] w-[26vw] items-center justify-center rounded-2xl bg-gradient-to-b from-[#EA5571] to-[#843040] shadow-2xl shadow-slate-700/70 drop-shadow transition hover:scale-105 hover:cursor-pointer hover:from-[#FFD23F] hover:to-[#FFA514] active:scale-100"
        onClick={() => handleClick(img)}
      >
        <Image src={img} alt="" className={className} />
      </div>
      <div>{children}</div>
    </Parallax>
  );
}
