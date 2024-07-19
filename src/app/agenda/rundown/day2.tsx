"use client";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import dataDay2 from "@/app/agenda/rundown/day2.json";
import Image from "next/image";

export const Day2 = () => {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto flex w-[90%] flex-col items-center gap-3 sm:w-[70%] lg:max-w-[700px] xl:max-w-[900px]"
    >
      {dataDay2.map((item, index) => {
        return (
          <AgendaItem
            key={index}
            time={item.time}
            agenda={item.agenda}
            desc={item.deskripsi}
          />
        );
      })}
    </div>
  );
};

interface AgendaItemProps {
  time: string;
  agenda: string;
  desc: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, agenda, desc }) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div
      className="flex w-full cursor-pointer flex-col items-start justify-center font-publica-sans sm:flex-row sm:gap-3"
      onClick={() => {
        setState(!state);
      }}
    >
      <div
        className={`hidden w-12 font-publica-sans font-bold sm:mt-[1vw] sm:flex lg:mt-[0.8vw] 2xl:mt-[0.5vw] ${state ? "text-[#EA5571]" : "text-[#CD4258]"}`}
      >
        {time}
      </div>
      {/* Buletan */}
      {/* <div
        className={`mt-2 h-[15px] w-[15px] rounded-full rounded-t-full ${state ? "bg-[#EA5571]" : "bg-[#CD4258]"}`}
      ></div> */}

      <div className="w-full">
        <div
          className={`xs:flex xs:flex-col relative z-[1] w-full rounded-xl text-[#FFE5C7] sm:rounded-xl ${state ? "bg-[#EA5571]" : "bg-[#CD4258]"}`}
        >
          <div className="xs:flex-row relative flex w-full select-none items-center justify-between p-2 font-normal">
            <div className="flex flex-row gap-[2vw]">
              <p className="w-[8vw] font-light sm:hidden">{time}</p>
              <p className="w-max font-bold">{agenda}</p>
            </div>
            <div
              className={
                "h-[20px] w-[20px] flex-shrink-0 duration-200 " +
                (state ? "rotate-0" : "rotate-180")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="up-arrow"
                fill="#FFE5C7"
              >
                <path d="M26 22a2 2 0 0 1-1.41-.59L16 12.83l-8.59 8.58a2 2 0 0 1-2.82-2.82l10-10a2 2 0 0 1 2.82 0l10 10A2 2 0 0 1 26 22Z"></path>
              </svg>
            </div>
            {/* <Image
              src="/images/icon/up-arrow.svg"
              alt=""
              width={20}
              height={20}
              className={
                "h-[20px] flex-shrink-0 duration-200 " +
                (state ? "rotate-0" : "rotate-180")
              }
            /> */}
            {/* <img
              className={
                "h-[10px] flex-shrink-0 duration-200 " +
                (state ? "rotate-0" : "rotate-180")
              }
              src="/icon-up.png"
              alt=""
            /> */}
          </div>
        </div>
        <div
          className={
            "grid translate-y-[-15px] select-none rounded-b-xl bg-[#EA5571] p-2 pt-5 text-[#FFE5C7] drop-shadow-lg transition-[grid-template-rows] duration-200 " +
            (state ? "grid-rows-[1fr]" : "grid-rows-[0fr] !p-0 !pt-0")
          }
        >
          <p className="w-full overflow-hidden text-justify">{desc}</p>
        </div>
      </div>
    </div>
  );
};
