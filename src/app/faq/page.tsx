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
        <h1 className="ml-[4vw] mt-[6vw] self-start bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[7vw] text-transparent">
          Frequently Asked Question
        </h1>

        <div className="bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[2.5vw] text-transparent">
          Punya Pertanyaan?
          <div className="h-[4vw] w-[86vw] rounded-xl bg-[#5E1675]"></div>
          <div className="relative mt-[1.5vw] flex h-[30vw] w-[86vw] flex-col items-center rounded-xl bg-[#5E1675] py-[1vw]">
            <p className="bg-gradient-to-b from-[#FFA514] to-[#FFD23F] bg-clip-text font-legendaire text-[3vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
              Pertanyaan Umum
            </p>
            {/* Bungkus Pertanyaan */}
            <div className="relative flex flex-col gap-[1.5vw]">
              {/* Item Pertanyaan */}
              <ItemPertanyaan
                question={`Q: Pembagian forum dan link Google Classroom dapat dilihat di mana?`}
                answer={`A: Di Simaster (Kemahasiswaan → PIONIR → Fakultas/Sekolah Vokasi).`}
              />
              <ItemPertanyaan
                question={`Q: Pembagian forum dan link Google Classroom ?`}
                answer={`A: Di Simaster (KemahasisSekolah Vokasi).`}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const ItemPertanyaan = ({
  question,
  answer,
}: {
  question: any;
  answer: any;
}) => {
  return (
    <div className="flex h-[6vw] w-[80vw] cursor-pointer flex-col items-start rounded-[1.5vw] bg-gradient-to-r from-[#B22635] to-[#EA5571]">
      <div className="flex h-[3vw] w-full items-center rounded-[1.5vw] bg-gradient-to-b from-[#FFA514] to-[#FFD23F]">
        <p className="px-[1vw] font-publica-sans text-[1.4vw] font-medium text-[#5E1675]">
          {question}
        </p>
      </div>
      <div className="flex h-[3vw] w-full items-center">
        <p className="px-[1vw] font-publica-sans text-[1.4vw] font-medium gradient-text-yellow-up-down">
          {answer}
        </p>
      </div>
    </div>
  );
};
