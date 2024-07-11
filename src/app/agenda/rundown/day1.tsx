"use client";
import { useState } from "react";

const RUNDOWN = [
  {
    time: "07.00",
    agenda: "Kedatangan Kesatria Muda",
    deskripsi: "Kesatria Muda tiba di area Tugu Teknik dan melakukan pengecekan atribut serta persiapan awal Pionir Kesatria 2024.",
  },
  {
    time: "07.30",
    agenda: "Upacara Pembukaan Pionir Kesatria 2024",
    deskripsi: "Upacara Pembukaan dimulai dengan berbagai sambutan, irring-iringan serta perkenalan dengan pihak dekanar dan sesi seremonial untuk penyambutan Kesatria Muda.",
  },
  {
    time: "09.40",
    agenda: "Kepemanduan",
    deskripsi : "Kegiatan belajar di dalam kelas yang dipimpin oleh pemandu, mencakup penjelasan modul, diskusi kelompok, dan presentasi hasil diskusi.",
  },
  {
    time: "11.25",
    agenda: "ISHOMA",
    deskripsi: "Kesatria Muda dapat melakukan Istirahat, Sholat, dan Makan.",
  },
  {
    time: "12.55",
    agenda: "Jelajah Lembaga & Games Angkatan",
    deskripsi: "Kegiatan pengenalan setiap fasilitas, departemen, serta BSO dan KM/HM yang ada di Fakultas Teknik Universitas Gadjah Mada, yang akan ditutup dengan penyusunan games angkatan.",
  },
  {
    time: "15.30",
    agenda: "Penutupan Hari Pertama Pionir Kesatria 2024",
    deskripsi: "Penutupan rangkaian acara hari pertama dengan seremonial Supersonik dan apresiasi dari Koordinator Umum, serta pemutaran anthem sebelum Kesatria Muda pulang.",
  },
];

const Timeline = ({item, index}) => {
  const [isOpen, setIsOpen] = useState(false)
  function handleOpen(){
    setIsOpen(!isOpen)
  }
  return(
    <div 
    key={index}
    className="flex justify-center gap-x-[1vw]"
    onClick={handleOpen}
    >
      <div 
      className="font-publica-sans font-medium text-[1.7vw] pt-[1.25vw] text-[#CD4258] text-right w-[5vw]"
      >
        {item.time}
      </div>
      <div
      className="flex flex-col w-[3vw] items-center gap-y-[0.3vw] pt-[1.25vw]"
      >
        <div 
        className="w-[1.7vw] h-[2vw] rounded-full bg-[#CD4258] drop-shadow-[0_0.3vw_0.2vw_#000000]"
        />
        <div 
        className={"min-h-[5.7vw] h-full translate-y-[0.5vw] w-[0.2vw] bg-[#CD4258] drop-shadow-[0_0.2vw_0.2vw_#000000]" + (RUNDOWN.length-1 == index?" hidden": "")}
        />
        {/* <div 
        className={"bottom-0 translate-y-[vw] h-[1.2vw] w-[0.2vw] bg-[#CD4258] drop-shadow-[0_0.2vw_0.2vw_#000000]" + (RUNDOWN.length-1 == index?" hidden": "")}
        /> */}
      </div>
      <div
      className={"w-[57.7vw] h-fit py-[0.9vw] items-center px-[2vw] font-publica-sans font-medium text-[1.7vw] rounded-[1.7vw] text-[#FFE5C7] ease-linear drop-shadow-[0_0.2vw_0.2vw_#000000] flex-shrink-0 duration-300" + (isOpen?" min-h-[12.7vw] bg-[#EA5571]":" bg-[#CD4258]")}
      >
        <p>{item.agenda}</p>
        {isOpen&&
        <p className="font-light text-[1.25vw] pt-[0.9vw]">{item.deskripsi}</p>
        }
      </div>
      
    </div>
  )
}

export const Day1 = () => {
  return(
    <div 
    className="flex flex-col gap-y-[0.5vw] py-[3vw]">
      {RUNDOWN.map((item, index) =>(
        <Timeline 
        item={item} 
        index={index} 
        key={index}/>
      ))}
    </div>
  )
}

// interface RundownItem {
//   time: string;
//   agenda: string;
//   deskripsi: string;
// }

// export const Day1 = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const RUNDOWN: RundownItem[] = [
//     {
//       time: "07.00",
//       agenda: "Kedatangan Kesatria Muda",
//       deskripsi: "Kesatria Muda tiba di area Tugu Teknik dan melakukan pengecekan atribut serta persiapan awal Pionir Kesatria 2024.",
//     },
//     {
//       time: "07.30",
//       agenda: "Upacara Pembukaan Pionir Kesatria 2024",
//       deskripsi: "Upacara Pembukaan dimulai dengan berbagai sambutan, irring-iringan serta perkenalan dengan pihak dekanar dan sesi seremonial untuk penyambutan Kesatria Muda.",
//     },
//     {
//       time: "09.40",
//       agenda: "Kepemanduan",
//       deskripsi : "Kegiatan belajar di dalam kelas yang dipimpin oleh pemandu, mencakup penjelasan modul, diskusi kelompok, dan presentasi hasil diskusi.",
//     },
//     {
//       time: "11.25",
//       agenda: "ISHOMA",
//       deskripsi: "Kesatria Muda dapat melakukan Istirahat, Sholat, dan Makan.",
//     },
//     {
//       time: "12.55",
//       agenda: "Jelajah Lembaga & Games Angkatan",
//       deskripsi: "Kegiatan pengenalan setiap fasilitas, departemen, serta BSO dan KM/HM yang ada di Fakultas Teknik Universitas Gadjah Mada, yang akan ditutup dengan penyusunan games angkatan.",
//     },
//     {
//       time: "15.30",
//       agenda: "Penutupan Hari Pertama Pionir Kesatria 2024",
//       deskripsi: "Penutupan rangkaian acara hari pertama dengan seremonial Supersonik dan apresiasi dari Koordinator Umum, serta pemutaran anthem sebelum Kesatria Muda pulang.",
//     },
//   ];

//   return (
//     <div
//       data-aos="fade-up"
//       className="flex flex-col gap-3 w-[90%] sm:w-[70%] mx-auto lg:max-w-[700px] xl:max-w-[900px] items-center"
//     >
//       {RUNDOWN.map((item, index) => {
//         return (
//           <AgendaItem
//             key={index}
//             time={item.time}
//             agenda={item.agenda}
//             desc={item.deskripsi}
//           />
//         );
//       })}
//     </div>
//   );
// };

// interface AgendaItemProps {
//   time: string;
//   agenda: string;
//   desc: string;
// }

// const AgendaItem: React.FC<AgendaItemProps> = ({ time, agenda, desc }) => {
//   const [state, setState] = useState<boolean>(false);
//   return (
//     <div className="flex w-full flex-col sm:flex-row font-creato items-start xs:justify-start xs:items-start sm:gap-3 cursor-pointer">
//       <div className={`w-12 mt-1 font-publica-sans font-bold ${state ? 'text-[#EA5571]' : 'text-[#CD4258]'}`}>
//         {time}
//       </div>
//       <div className={`w-[15px] h-[15px] mt-2 rounded-t-full rounded-b-full ${state ? 'bg-[#EA5571]' : 'bg-[#CD4258]'}`}>
        
//       </div>
//       {/* <div className={`p-2 text-center flex-shrink-0 h-[40px] w-full sm:w-[150px] md:w-[173px] text-neutral-100 rounded-t-xl sm:rounded-xl drop-shadow-lg ${state ? 'bg-[#EA5571]' : 'bg-[#CD4258]'}`}> */}
//         {/* {time} */}
//       {/* </div> */}


//       <div
//         className="w-full"
//         onClick={() => {
//           setState(!state);
//         }}
//       >
//         <div className={`w-full text-[#FFE5C7] rounded-b-xl sm:rounded-xl xs:flex xs:flex-col relative z-[1] ${state ? 'bg-[#EA5571]' : 'bg-[#CD4258]'}`}>
//           <div className="relative w-full p-2 flex xs:flex-row justify-between font-normal items-center select-none">
//             <p className="w-max font-bold">{agenda}</p>
//             <img
//               className={
//                 "h-[10px] duration-200 flex-shrink-0 " + (state ? "rotate-0" : "rotate-180")
//               }
//               src="/icon-up.png"
//               alt=""
//             />
//           </div>
//         </div>
//         <div
//           className={
//             "bg-[#EA5571] rounded-b-xl text-[#FFE5C7] p-2 pt-5 transition-[grid-template-rows] duration-200 translate-y-[-15px] drop-shadow-lg grid select-none " +
//             (state ? "grid-rows-[1fr]" : "grid-rows-[0fr] !p-0 !pt-0")
//           }
//         >
//           <p className="overflow-hidden w-full text-justify">{desc}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
