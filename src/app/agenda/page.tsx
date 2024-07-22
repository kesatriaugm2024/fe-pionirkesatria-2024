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
    <main className="relative min-h-[100vh] w-full bg-pattern-krem-kesat bg-[size:40%] bg-repeat sm:bg-[size:30%] lg:bg-[size:15%]">
      {/* bg atas hp */}
      <div
        className="absolute top-[10vw] z-0 w-full sm:hidden"
        data-aos="fade-down"
        data-aos-delay="700"
      >
        <Image
          className="w-full"
          alt=""
          src={"/images/agenda/atas-hp.svg"}
          width={1000}
          height={1000}
        />
      </div>
      {/* bg atas tab */}
      <div
        className="absolute top-[8vw] z-0 hidden w-full sm:block lg:hidden"
        data-aos="fade-down"
        data-aos-delay="700"
      >
        <Image
          className="w-full"
          alt=""
          src={"/images/agenda/atas-tab.svg"}
          width={2000}
          height={1000}
        />
      </div>
      {/* bg atas desktop */}
      <div
        className="absolute top-[3.5vw] z-0 hidden w-full lg:block"
        data-aos="fade-down"
        data-aos-delay="700"
      >
        <Image
          className="w-full"
          alt=""
          src={"/images/agenda/atas-desktop.svg"}
          width={2000}
          height={1000}
        />
      </div>

      <div className="flex w-full flex-col pb-[50vw] pt-[30vw] sm:pb-[30vw] sm:pt-[20vw] lg:pb-[28vw] lg:pt-[10vw]">
        <h1
          className="z-10 bg-gradient-to-t from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text text-center font-legendaire text-[15vw] text-transparent drop-shadow-[0.5vw_0.5vw_0.1vw_rgba(0,0,0,0.3)] sm:text-[10vw] sm:drop-shadow-[0.3vw_0.3vw_0.05vw_rgba(0,0,0,0.3)] lg:text-[8vw] lg:drop-shadow-[0.3vw_0.3vw_0.05vw_rgba(0,0,0,0.3)]"
          // data-aos="fade-up"
        >
          Agenda
        </h1>
        <div
          className="z-10 flex w-full justify-center gap-x-[0vw] pb-[3vw] pt-[2vw] sm:gap-x-[0vw] md:pb-[1vw] md:pt-[1vw] lg:gap-x-[0vw] lg:pb-[1vw]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {BUTTONOPTION.map((item, index) => (
            <button
              key={index}
              className={`group relative mb-2 me-2 inline-flex w-[28vw] items-center justify-center overflow-hidden rounded-full bg-[#CD4258] p-0.5 text-[3vw] font-medium hover:text-[#FFE5C7] sm:w-[24vw] sm:text-[2vw] lg:w-[15vw] lg:text-[1.2vw] ${activePage === item.name ? "text-[#FFE5C7]" : "text-[#CD4258]"}`}
              onClick={item.name == "Day1" ? handleDay1 : handleDay2}
            >
              <span
                className={`relative w-[28vw] rounded-full bg-[#FFE5C7] px-[3.5vw] py-[1vw] font-publica-sans transition-all duration-75 ease-in group-hover:bg-opacity-0 lg:px-0 lg:py-[0.5vw] ${activePage === item.name ? "bg-opacity-0" : "bg-opacity-100"}`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <div className="py-[1vw] sm:translate-x-[-3.5vw] sm:py-[2vw] lg:translate-x-[-2vw] lg:py-[1vw]">
          {activePage == "Day1" && <Day data={dataDay1} />}
          {activePage == "Day2" && <Day data={dataDay2} />}
        </div>
        <div></div>
        {/* Footer Manual Mobile */}
        <div
          className={"fixed bottom-0 w-full sm:hidden"}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-once="true"
        >
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
      <div
        className={"absolute bottom-0 hidden w-full sm:block"}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-10000"
      >
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
