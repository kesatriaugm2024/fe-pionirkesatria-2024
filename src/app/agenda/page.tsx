"use client";
import { useState } from "react";
import { Day1 } from "@/app/agenda/rundown/day1";
import { Day2 } from "@/app/agenda/rundown/day2";
import Image from "next/image";
// import AOS from "aos";

const BUTTONOPTION = [
  {
    'name' : 'Day1',
    'label' : 'Hari Pertama'
  },
  {
    'name' : 'Day2',
    'label' : 'Hari Kedua'
  },
]

export default function Agenda() {
  const [activePage, setActivePage] = useState("Day1")

  function handleDay1(){
    setActivePage("Day1")
  }

  function handleDay2(){
    setActivePage("Day2")
  }

  return (

    <main 
    className="bg-[url('/images/background/background-agenda.svg')] w-full bg-cover min-h-screen flex flex-col pt-[5vw]"
    >
      <h1 
      className="font-legendaire bg-gradient-to-t from-[#5E1675] to-[#CD4258] via-[#982D66] text-[8.4vw] text-center bg-clip-text text-transparent"
      >
        Agenda
      </h1>
      <div className="w-full flex justify-center py-[1vw] gap-x-[4vw]">
        {BUTTONOPTION.map((item, index) =>(
          <button 
          key={index}
          className={"w-[20.8vw] h-[2.9vw] rounded-[1.7vw] font-publica-sans font-medium text-[#FFE5C7] text-[1.7vw] " + (activePage==item.name?'bg-[#EA5571] ' : 'bg-[#CD4258] hover:bg-[#EA5571]')}
          onClick={item.name=='Day1'?handleDay1:handleDay2}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="py-[1vw]">
        {activePage=="Day1" && <Day1/>}
        {activePage=="Day2" && <Day2/>}
      </div>
    </main>
  ); 
}
