"use client";
import { useState } from "react";
import { Day1 } from "@/app/agenda/rundown/day1";
import { Day2 } from "@/app/agenda/rundown/day2";
import Image from "next/image";
import Footer from "@/components/layout/footer";
// import AOS from "aos";

const BUTTONOPTION = [
  {
    name: "Day1",
    label: "Hari Pertama",
  },
  {
    name: "Day2",
    label: "Hari Kedua",
  },
];

export default function Agenda() {
  const [activePage, setActivePage] = useState("Day1");

  function handleDay1() {
    setActivePage("Day1");
  }

  function handleDay2() {
    setActivePage("Day2");
  }

  return (
    <>
      <main className="-mb-[60vw] flex w-full flex-col bg-pattern-krem-kesat bg-[size:20%] bg-repeat pb-[50vw] pt-[10vw] md:-mb-[20vw] md:pb-[30vw]">
        <h1 className="bg-gradient-to-t from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text text-center font-legendaire text-[15vw] text-transparent sm:text-[10vw] lg:text-[8vw]">
          Agenda
        </h1>
        <div className="flex w-full justify-center gap-x-[1vw] pb-[2vw] pt-[2vw] md:pb-[1vw]">
          {BUTTONOPTION.map((item, index) => (
            <button
              key={index}
              className={
                "md h-[8vw] w-[28vw] rounded-[10vw] font-publica-sans text-[3vw] font-medium text-[#FFE5C7] sm:h-[6vw] sm:w-[24vw] sm:text-[2.5vw] md:h-[5vw] md:text-[2vw] lg:h-[3.5vw] lg:w-[15vw] lg:text-[1.4vw] 2xl:h-[2.5vw] 2xl:w-[12vw] 2xl:text-[1vw] " +
                (activePage == item.name
                  ? "bg-[#EA5571]"
                  : "bg-[#CD4258] hover:bg-[#EA5571]")
              }
              onClick={item.name == "Day1" ? handleDay1 : handleDay2}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="py-[1vw]">
          {activePage == "Day1" && <Day1 />}
          {activePage == "Day2" && <Day2 />}
        </div>
      </main>
      <Footer />
    </>
  );
}
