"use client";
import { useState } from "react";
import "aos/dist/aos.css";

export default function Day({ data }: any) {
  return (
    <div
      data-aos="fade-up"
      className="mx-auto flex w-[90%] flex-col items-center gap-3 sm:w-[70%] lg:max-w-[700px] xl:max-w-[900px]"
    >
      {data.map((item: any, index: number) => {
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
}

interface AgendaItemProps {
  time: string;
  agenda: string;
  desc: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, agenda, desc }) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <div
      className="flex w-full cursor-pointer flex-col items-start justify-center font-publica-sans sm:flex-row sm:gap-[2vw] lg:gap-[0vw]"
      onClick={() => {
        setState(!state);
      }}
    >
      <div
        className={`hidden w-12 font-publica-sans font-bold sm:mt-[1.2vw] sm:flex sm:w-[8vw] sm:items-center sm:justify-center sm:text-[2.5vw] lg:mt-[0.5vw] lg:w-[6vw] lg:text-[1.3vw] ${state ? "text-[#EA5571]" : "text-[#CD4258]"}`}
      >
        {time}
      </div>

      <div className="w-full">
        <div
          className={`relative z-[1] flex w-full flex-col rounded-t-[3vw] text-[#FFE5C7] duration-200 sm:rounded-t-[2vw] lg:rounded-t-[1vw] ${state ? "rounded-b-none" : "rounded-b-[3vw] sm:rounded-b-[2vw] lg:rounded-b-[1vw]"} ${state ? "bg-[#EA5571]" : "bg-[#CD4258]"}`}
        >
          <div className="relative flex w-full select-none flex-row items-center justify-between p-[2.5vw] font-publica-sans font-normal sm:px-[2vw] sm:py-[1.5vw] lg:py-[0.8vw] lg:pl-[1.2vw] lg:pr-[1vw]">
            <div className="flex flex-row items-center justify-start gap-[2vw]">
              <p className="text-[3vw] font-bold sm:hidden">{time}</p>
              <p className="w-max text-[3.2vw] font-normal sm:text-[2vw] lg:text-[1.2vw]">
                {agenda}
              </p>
            </div>

            {/* Arrow */}
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
          </div>
        </div>
        <div
          className={
            "grid -translate-y-[3vw] select-none rounded-b-[3vw] bg-[#EA5571] p-[2.5vw] text-[#FFE5C7] drop-shadow-lg transition-[grid-template-rows] duration-200 sm:-translate-y-[2.5vw] sm:rounded-b-[2vw] lg:-translate-y-[1.5vw] lg:rounded-b-[1vw] lg:px-[1.2vw] lg:py-[1.5vw] " +
            (state ? "grid-rows-[1fr]" : "grid-rows-[0fr] !p-0 !pt-0")
          }
        >
          <p className="w-full overflow-hidden text-justify text-[3vw] font-light sm:text-[2vw] lg:text-[1.2vw]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
