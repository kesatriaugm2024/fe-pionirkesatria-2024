"use client";
import { useState, useEffect } from "react";
import Day from "@/app/agenda/rundown/day";
import dataDay1 from "@/app/agenda/rundown/day1.json";
import dataDay2 from "@/app/agenda/rundown/day2.json";
import Footer from "@/components/layout/footer";
import AOS from "aos";
import Image from "next/image";

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="relative min-h-[100vh] w-full bg-pattern-krem-kesat bg-[size:20%] bg-repeat">
      {/* bg atas hp */}
      <div className="absolute top-[10vw] z-0 w-full sm:hidden">
        <Image
          className="w-full"
          alt=""
          src={"/images/agenda/atas-hp.svg"}
          width={1000}
          height={1000}
        />
      </div>
      {/* bg atas tab */}
      <div className="absolute top-[8vw] z-0 hidden w-full sm:block lg:hidden">
        <Image
          className="w-full"
          alt=""
          src={"/images/agenda/atas-tab.svg"}
          width={2000}
          height={1000}
        />
      </div>
      {/* bg atas desktop */}
      <div className="absolute top-[3.5vw] z-0 hidden w-full lg:block">
        <Image
          className="w-full"
          alt=""
          src={"/images/agenda/atas-desktop.svg"}
          width={2000}
          height={1000}
        />
      </div>

      <div className="flex w-full flex-col pb-[50vw] pt-[30vw] sm:pb-[30vw] sm:pt-[20vw] lg:pb-[28vw] lg:pt-[10vw]">
        <h1 className="z-10 bg-gradient-to-t from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text text-center font-legendaire text-[15vw] text-transparent sm:text-[10vw] lg:text-[8vw]">
          Agenda
        </h1>
        <div className="z-10 flex w-full justify-center gap-x-[4vw] pb-[3vw] pt-[2vw] sm:gap-x-[2vw] md:pb-[1vw] md:pt-[1vw] lg:pb-[1vw]">
          {BUTTONOPTION.map((item, index) => (
            <button
              key={index}
              className={
                "h-[8vw] w-[28vw] rounded-[10vw] font-publica-sans text-[3vw] font-medium text-[#FFE5C7] sm:h-[6vw] sm:w-[24vw] sm:text-[2.5vw] md:h-[5vw] md:text-[2vw] lg:h-[3.5vw] lg:w-[15vw] lg:text-[1.4vw] 2xl:h-[2.5vw] 2xl:w-[12vw] 2xl:text-[1vw] " +
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

        <div className="py-[1vw] sm:translate-x-[-3.5vw] sm:py-[2vw] lg:translate-x-[-2vw] lg:py-[1vw]">
          {activePage == "Day1" && <Day data={dataDay1} />}
          {activePage == "Day2" && <Day data={dataDay2} />}
        </div>
        <div></div>
        {/* Footer Manual Mobile */}
        <div className={"fixed bottom-0 w-full sm:hidden"}>
          <Image
            className="w-full"
            alt=""
            src={"/images/footer-HP.svg"}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* Footer Manual Desktop Tab */}
      <div className={"absolute bottom-0 hidden w-full sm:block"}>
        <Image
          className="w-full"
          alt=""
          src={"/images/background/footer-tab-desktop-agenda.png"}
          width={2000}
          height={2000}
        />
      </div>
    </main>
  );
}
