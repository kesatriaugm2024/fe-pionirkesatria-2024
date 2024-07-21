"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

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

export default function Agenda() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative min-h-[100vh] w-full bg-pattern-krem-kesat bg-[size:40%] bg-repeat sm:bg-[size:30%] lg:bg-[size:15%]">
      <main className="flex w-full flex-col">
        <NotFound />
        {/* Footer Manual Mobile */}
        <div className={"fixed bottom-0 w-full sm:hidden"} data-aos="fade-up">
          <Image
            className="w-full"
            alt=""
            src={"/images/footer-HP.svg"}
            width={1000}
            height={100}
          />
        </div>
        {/* Footer Manual Desktop Tab */}
      </main>
      <div
        className={"absolute bottom-0 hidden w-full sm:block"}
        data-aos="fade-up"
      >
        <Image
          className="w-full"
          alt=""
          src={"/images/background/footer-tab-desktop-agenda.png"}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
