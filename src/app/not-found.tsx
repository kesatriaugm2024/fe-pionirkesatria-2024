"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

export default function NotFoundPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-[100vh] w-full bg-pattern-krem-kesat bg-[size:40%] bg-repeat sm:bg-[size:30%] lg:bg-[size:15%]">
      <main className="flex w-full flex-col">
        <NotFound />
        {/* Footer Manual Mobile */}
        <div
          className={"fixed bottom-0 w-full sm:hidden"}
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-once="true"
          data-aos-duration="800"
          data-aos-offset="-1000"
        >
          <Image
            className="w-full"
            alt=""
            src={"/images/footer-HP.svg"}
            width={1000}
            height={100}
          />
        </div>
        {/* Footer Component Desktop */}
      </main>
      <FooterTabDesktop className="hidden sm:flex" />
    </div>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center text-center">
      <h1
        className="text-[15vw]/[15vw] font-bold gradient-text-red-up-down sm:text-[10vw]/[10vw] lg:text-[7vw]/[7vw]"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        404
      </h1>
      <p
        className="font-publica-sans text-[5vw]/[5vw] gradient-text-purple sm:text-[3vw]/[3vw] lg:text-[2vw]/[2vw]"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Page Not Found
      </p>
    </div>
  );
}

const FooterTabDesktop = ({ className }: { className?: string }) => {
  const BackgroundFooterTabDesktop = () => (
    <Image
      className="fixed bottom-0 z-0 w-full"
      alt=""
      src={"/images/background/footer-bg.svg"}
      height={100}
      width={100}
    />
  );
  const Content = () => (
    <div className="z-[1] flex w-full flex-col items-center">
      <div className="flex w-full translate-y-[10vw] flex-col place-content-end items-center gap-0">
        <div>
          <Image
            className="w-[21vw]"
            alt=""
            src={"/images/footer-logo.svg"}
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <Image
            className="w-[35vw]"
            alt=""
            src={"/images/footer-OA.svg"}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={
        "absolute bottom-0 flex w-full items-center justify-between max-md:hidden " +
        className
      }
      data-aos="fade-up"
      data-aos-delay="700"
      data-aos-once="true"
      data-aos-duration="800"
      data-aos-offset="-1000"
    >
      <BackgroundFooterTabDesktop />
      <Image
        className="z-[1] w-[16vw] -translate-y-[1.5vw] translate-x-[2vw]"
        alt=""
        src={"/images/logo/logo_yellow.svg"}
        width={100}
        height={100}
      />
      <div className="-translate-y-[6.5vw]">
        <Content />
      </div>
      <div className="font z-[1] w-[20vw] max-w-[20vw] translate-x-[-2vw] translate-y-[1.5vw] text-center font-publica-sans text-[1vw]/[1vw]">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          PIONIR
        </h2>
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[5.5vw]/[6vw] text-transparent">
          KesatriA
        </h1>
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          2024
        </h2>
      </div>
    </div>
  );
};
