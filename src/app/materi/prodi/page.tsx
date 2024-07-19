'use client'
import { useEffect, useState } from "react";
import React from 'react';
import Image from "next/image";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const DEPARTEMEN = [
    {
        title:"Departemen Teknik Arsitektur dan Perencanaan",
        prodi:[
            {
                namaprodi:"Arsitektur",
                link:"1WE9n9aLgGgPli2c5crFcOFa73rGEkv83",
                imgpath:"/images/covermodul/Pages from Modul Prodi Arsitektur.pdf.png"
            },
            {
                namaprodi:"Perencanaan Wilayah Kota",
                link:"163KaAm1aVLO2lFQoCxUSSB2Oe78PvzH0",
                imgpath:"/images/covermodul/Pages from Modul Prodi Perencanaan Wilayah dan Kota.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Elektro dan Teknologi Informasi",
        prodi:[
            {
                namaprodi:"Teknik Elektro",
                link:"WqCID-FAz3zm8PxOoot7Ial3rf9bpsPI",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Elektro (DONE).docx.pdf.png"
            },
            {
                namaprodi:"Teknologi Informasi",
                link:"1FeMeOPvvplVnfXh2KP0GDtGk__3eihYX",
                imgpath:"/images/covermodul/Modul Prodi Teknologi Informasi_Page_1.png"
            },
            {
                namaprodi:"Teknik Biomedis",
                link:"1IkwwlbENfG_NcXeKZE0cGIKIle0VzveX",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Biomedis (DONE).docx.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Nuklir dan Teknik Fisika",
        prodi:[
            {
                namaprodi:"Teknik Nuklir",
                link:"1QQZEqIXEn63ad8UpKPIY2NN9wzl4Reu3",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Nuklir.pdf.png"
            },
            {
                namaprodi:"Teknik Fisika",
                link:"1nJuu5tQWI2136rxl5u-UnNBafCQ2bPpK",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Fisika (DONE).docx.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Geodesi",
        prodi:[
            {
                namaprodi:"Teknik Geodesi",
                link:"19DoXIk_GZlrTfh9LAnnFv0tMfyNoGs00",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Geodesi (DONE).docx.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Geologi",
        prodi:[
            {
                namaprodi:"Teknik Geologi",
                link:"17zstl6s9gmRWGkLINwpLUaWYXLoo1RVa",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Geologi (DONE).docx.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Kimia",
        prodi:[
            {
                namaprodi:"Teknik Kimia",
                link:"1VHVlEHJRbQL7Wi8l8oQhuBrMEJ1REPHt",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Kimia.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Mesin dan Industri",
        prodi:[
            {
                namaprodi:"Teknik Mesin",
                link:"1vJ0pwnzHOZPk2XZg_kjvjezwvm0Icj7B",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Mesin.pdf.png"
            },
            {
                namaprodi:"Teknik Industri",
                link:"14OR3K0NBrd7tPRMc_fcM5okf9KrDWdeT",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Industri.pdf.png"
            },
        ]
    },
    {
        title:"Departemen Teknik Sipil dan Lingkungan",
        prodi:[
            {
                namaprodi:"Teknik Sipil",
                link:"1ZapisYGM7MzxZsyfex-ttBnbjYsyINy_",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Sipil.pdf.png"
            },
            {
                namaprodi:"Teknik Infrastruktur Lingkungan",
                link:"1AA_QooNb1gkwglp-e8HAEgiGdwKMtWtd",
                imgpath:"/images/covermodul/Pages from Modul Prodi Infrastruktur Lingkungan.pdf.png"
            },
            {
                namaprodi:"Teknik Sumber Daya Air",
                link:"1Vck7DS_OcnV93_zyrBC6MG_1RJH3hZcc",
                imgpath:"/images/covermodul/Pages from Modul Prodi Teknik Sumber Daya Air.pdf.png"
            },
        ]
    },
]

function DepartemenCardDesktop({index, title, prodi}){
    return(
        <div className="flex flex-col items-center place-content-center px-[10vw] gap-[4vw] lg:py-[5vw]">
            <div className="w-full h-[10vw]">
                <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-legendaire text-[7vw]/[7vw] lg:text-[5vw]/[5vw] text-center">{title}</h1>
            </div>
            <div className="w-full flex items-center justify-center h-[30vw]">
                {prodi.map((item, idx)=>(
                    <Link
                    href={'/materi/'+item.link}
                    className="w-full flex items-center justify-center" key={idx}>
                        <div className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[1.7vw] flex-shrink-0 border-[0.2vw] duration-100 hover:w-[15.6vw] hover:h-[27.8vw] w-[13vw] h-[23vw]">
                            <Image className="w-full h-full rounded-[1.7vw]" alt="" src={item.imgpath} width={100} height={100}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default function ProdiPage(){
    const [swiper, setSwiper] = useState(null);
    const [activeSwiper, setActiveSwiper] = useState(1);

    return(
        <main className="min-h-screen min-w-screen flex flex-col items-center place-content-center">
            <div className="w-full">
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                grabCursor={true}
                onSwiper={setSwiper}
                loop={true}
                >
                    {
                    DEPARTEMEN.map((item, index)=>(
                        <SwiperSlide key={index}>
                            <DepartemenCardDesktop index={index} prodi={item.prodi} title={item.title} />
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            <div className="w-full grid grid-cols-2">
                <div className="flex items-center justify-end px-[15vw] min-h-[10vw]">
                    <button
                        onClick={() => {
                            if (swiper) swiper.slidePrev();
                            setActiveSwiper((prev) => (prev === 0 ? DEPARTEMEN.length - 1 : prev - 1));
                        }}
                    >
                        <Image
                            className="w-[7.5vw] hover:w-[10vw] from-neutral-200 lg:w-[6vw] lg:hover:w-[8vw]"
                            alt=""
                            src={'/images/assets_materi_arrow_kiri.svg'}
                            height={100}
                            width={100}
                        />
                    </button>
                </div>
                <div className="w-full flex items-center px-[15vw] justify-start">
                    <button
                        onClick={() => {
                            if (swiper) swiper.slideNext();
                            setActiveSwiper((prev) => (prev === DEPARTEMEN.length - 1 ? 0 : prev + 1));
                        }}
                    >
                        <Image
                            className="w-[7.5vw] hover:w-[10vw]"
                            alt=""
                            src={'/images/assets_materi_arrow_kanan.svg'}
                            height={100}
                            width={100}
                        />
                    </button>
                </div>
            </div>
        </main>
    )
}
