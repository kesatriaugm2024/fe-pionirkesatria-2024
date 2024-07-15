"use client";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface RundownItem {
  time: string;
  agenda: string;
  deskripsi: string;
}

export const Day2 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const RUNDOWN: RundownItem[] = [
    {
      time: "07.00",
      agenda: "Kedatangan Kesatria Muda",
      deskripsi: "Kesatria Muda tiba di area Tugu Teknik dan melakukan pengecekan atribut serta persiapan awal Hari Kedua Pionir Kesatria 2024.",
    },
    {
      time: "07.30",
      agenda: "Pameran Karya",
      deskripsi: "Pameran karya yang menampilkan hasil kreasi dan inovasi seluruh Tim di Fakultas Teknik Universitas Gadjah Mada serta berbagai proyek yang telah mereka kerjakan.",
    },
    {
      time: "09.25",
      agenda: "Talkshow",
      deskripsi: "Sesi talkshow dengan pembicara inspiratif yang membahas topik-topik relevan bagi Kesatria Muda, diikuti sesi tanya jawab dari pembicara dan Kesatria Muda.",
    },
    {
      time: "10.35",
      agenda: "Kepemanduan",
      deskripsi : "Kegiatan kepemanduan dalam ruangan yang dipimpin oleh pemandu, melanjutkan materi berikutnya dan ditutup dengan diskusi kelas.",
    },
    {
      time: "11.25",
      agenda: "ISHOMA",
      deskripsi: "Kesatria Muda melakukan istirahat, sholat, dan makan secara bergantian.",
    },
    {
      time: "12.40",
      agenda: "Karya Aplikatif",
      deskripsi: "Kesatria Muda mengerjakan proyek aplikasi nyata dari ilmu yang telah dipelajari, diikuti dengan presentasi hasil karya yang akan dinilai oleh Mahasiswa Berprestasi Fakultas Teknik Universitas Gadjah Mada.",
    },
    {
      time: "13.40",
      agenda: "Formasi Angkatan",
      deskripsi: "Kesatria Muda membentuk formasi angkatan 3 warna di wilayah Tugu Teknik Universitas Gadjah Mada.",
    },
    {
      time: "15.30",
      agenda: "Upacara Penutupan Pionir Kesatria 2024",
      deskripsi: "Upacara penutupan Pionir Kesatria 2024 dengan penyematan Korsa Teknik, sambutan penutup, diakhiri dengan pemutaran anthem dan penampilan Band Fakultas Teknik Universitas Gadjah Mada.",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col gap-3 w-[90%] sm:w-[70%] mx-auto lg:max-w-[700px] xl:max-w-[900px] items-center"
    >
      {RUNDOWN.map((item, index) => {
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
    <div className="flex w-full flex-col sm:flex-row font-creato items-start xs:justify-start xs:items-start sm:gap-3 cursor-pointer">
      <div className={`w-12 mt-1 font-publica-sans font-bold ${state ? 'text-[#EA5571]' : 'text-[#CD4258]'}`}>
        {time}
      </div>
      <div className={`w-[15px] h-[15px] mt-2 rounded-t-full rounded-b-full ${state ? 'bg-[#EA5571]' : 'bg-[#CD4258]'}`}>
        
      </div>
      {/* <div className={`p-2 text-center flex-shrink-0 h-[40px] w-full sm:w-[150px] md:w-[173px] text-neutral-100 rounded-t-xl sm:rounded-xl drop-shadow-lg ${state ? 'bg-[#EA5571]' : 'bg-[#CD4258]'}`}> */}
        {/* {time} */}
      {/* </div> */}


      <div
        className="w-full"
        onClick={() => {
          setState(!state);
        }}
      >
        <div className={`w-full text-[#FFE5C7] rounded-b-xl sm:rounded-xl xs:flex xs:flex-col relative z-[1] ${state ? 'bg-[#EA5571]' : 'bg-[#CD4258]'}`}>
          <div className="relative w-full p-2 flex xs:flex-row justify-between font-normal items-center select-none">
            <p className="w-max font-bold">{agenda}</p>
            <img
              className={
                "h-[10px] duration-200 flex-shrink-0 " + (state ? "rotate-0" : "rotate-180")
              }
              src="/icon-up.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={
            "bg-[#EA5571] rounded-b-xl text-[#FFE5C7] p-2 pt-5 transition-[grid-template-rows] duration-200 translate-y-[-15px] drop-shadow-lg grid select-none " +
            (state ? "grid-rows-[1fr]" : "grid-rows-[0fr] !p-0 !pt-0")
          }
        >
          <p className="overflow-hidden w-full text-justify">{desc}</p>
        </div>
      </div>
    </div>
  );
};

