"use client";
import { useState } from "react";
import { Day1 } from "@/app/agenda/rundown/day1";
import { Day2 } from "@/app/agenda/rundown/day2";
import Image from "next/image";
// import AOS from "aos";

export default function Agenda() {
  const [activePage, setActivePage] = useState("Day1")

  function handleDay1(){
    setActivePage("Day1")
  }

  function handleDay2(){
    setActivePage("Day2")
  }

  return (

    <main className="bg-[url('/images/background/background-agenda.svg')] w-full bg-cover h-[250vh] bg-top">
      <div>
        <h1 className="font-legendaire gradient-text-purple text-9xl text-center pt-[18vh]">
          Agenda
        </h1>
      </div>
      <div className="font font-publica-sans text-[#FFE5C7] flex flex-row gap-x-[8vw] place-content-center mt-5">
        <div>
          <button onClick={handleDay1} className={`p-1 pr-14 pl-14 rounded-2xl hover:bg-[#EA5571] ${activePage =="Day1"?  'bg-[#EA5571]' : 'bg-[#CD4258]'}`}>
            Hari Pertama
          </button>
        </div>
        <div>
          <button onClick={handleDay2} className={`p-1 pr-14 pl-14 rounded-2xl hover:bg-[#EA5571] ${activePage =="Day2"?  'bg-[#EA5571]' : 'bg-[#CD4258]'}`}>
            Hari Kedua
          </button>
        </div>
      </div>
      <div className="pt-8">
        {activePage=="Day1" && <Day1/>}
        {activePage=="Day2" && <Day2/>}
      </div>
    </main>
  );
}
