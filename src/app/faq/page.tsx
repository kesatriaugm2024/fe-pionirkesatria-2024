"use client";

import { RiArrowDownSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import {
  listPertanyaanUmum,
  listPertanyaanMateri,
} from "@/app/faq/listPertanyaan";
import AOS from "aos";
import Image from "next/image";

export default function DesignGuidelinePage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  return (
    <main className="bg-faq-background min-h-screen w-full flex-col bg-cover bg-top bg-repeat py-10">
      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="ml-[4vw] mt-[6vw] self-start bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[5rem] text-transparent">
          Frequently Asked Question
        </h1>

        <div className="bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[2.5vw] text-transparent">
          Punya Pertanyaan?
          <div className="h-[4vw] w-[86vw] rounded-xl bg-[#5E1675]"></div>
          <div className="mt-[1.5vw] flex h-[30vw] w-[86vw] flex-col items-center rounded-xl bg-[#5E1675] py-[1vw]">
            <p className="bg-gradient-to-b from-[#FFA514] to-[#FFD23F] bg-clip-text font-legendaire text-[3vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
              Pertanyaan Umum
            </p>
            <div className="h-[3vw] w-[80vw] rounded-xl bg-gradient-to-b from-[#FFA514] to-[#FFD23F]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
