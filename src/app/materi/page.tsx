'use client'
import { useState } from "react"
import { MODUL } from "./modul"
import React, { useRef } from 'react';
import Image from "next/image";

export default function MateriPage(){
    const [isTitle, setIsTitle] = useState(MODUL[0].title)
    const [isDesc, setIsDesc] = useState(MODUL[0].desc)
    const [isClick, setIsClick] = useState(0)
    const containerRef = useRef(null);
    // const handleWheel = (event) => {
    //     if (containerRef.current) {
    //     // Menggeser konten horizontal berdasarkan guliran mouse
    //     containerRef.current.scrollLeft += event.deltaY;
    //     }
    // };

    const CardModul = ({item, index}) =>{
        const handleClick = () => {
            setIsTitle(item.title)
            setIsDesc(item.desc)
            setIsClick(index)
        }
        return(
            <div
            onMouseEnter={handleClick}
            key={index}
            className={"w-[13vw] h-[23vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[1.7vw] flex-shrink-0 hover:w-[15.6vw] hover:h-[27.8vw] border-[0.2vw] duration-100 " + (isClick==index?"border-[#FFA514]":"border-[#FFD23F]")}>
    
            </div>
        )
    }

    const Transtition=()=>{
        return(
            <>
            <Image
            className="absolute w-[100vw] top-0 max-md:hidden"
            alt=""
            src={'/images/assets_materi_kainungu_atask.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 left-0 max-md:hidden"
            alt=""
            src={'/images/assets_materi_kainmerah_ataskiri.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 right-0 max-md:hidden"
            alt=""
            src={'/images/assets_materi_kainmerah_ataskanan.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 md:hidden"
            alt=""
            src={'/images/assets_materi_kainungu_atask_mobile.svg'}
            width={100}
            height={100}
            />
            <Image
            className="absolute w-[100vw] top-0 md:hidden"
            alt=""
            src={'/images/assets_materi_kainmerah_ataskiri_mobile.svg'}
            width={100}
            height={100}
            />
            </>
        )
    }
    
    const NextModul = () => {
        setIsClick((prevIsClick) => {
            const result = (prevIsClick + 1) % MODUL.length;
            setIsTitle(MODUL[result].title);
            setIsDesc(MODUL[result].desc);
            return result;
        });
    };
    
    const PrevModul = () => {
        setIsClick((prevIsClick) => {
            const result = prevIsClick - 1;
            const newIsClick = result < 0 ? MODUL.length - 1 : result;
            setIsTitle(MODUL[newIsClick].title);
            setIsDesc(MODUL[newIsClick].desc);
            return newIsClick;
        });
    };

    return(
        <main 
        className="min-w-screen min-h-screen bg-[url('/images/background/Background_beranda.svg')] bg-repeat bg-[size:25%] flex flex-col items-center place-content-center gap-[5vw] py-[15vw] overflow-hidden"
        >
            <Transtition/>
            <div 
            className="flex gap-[10vw] z-[1] px-[7vw]"
            >
                <div 
                className="w-full"
                >
                    <h1 
                    className="font-legendaire text-[8.3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent max-md:text-[16.7vw] max-md:text-center"
                    >
                        Materi
                    </h1>
                    <p className="font-publica-sans text-[1.7vw]/[2vw] text-[#FFE5C7] max-md:text-[2.6vw]/[2.6vw] max-md:text-center">
                    Halo Kesatria Muda! <br/>
                    Seluruh modul-modul berkaitan tentang <br/>
                    PIONIR Kesatria 2024 dapat dibaca di sini.
                    </p>
                </div>
                <div className="w-full max-md:hidden">
                <h2 
                    className="font-legendaire text-[6.7vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-center"
                    >
                        {isTitle}
                    </h2>
                    <p className="font-publica-sans text-[0.9vw] text-[#FFE5C7]">
                        {isDesc}
                    </p>
                </div>
            </div>
            <div
            className="w-[100vw] min-h-[30vw] flex gap-[1vw] overflow-x-auto hide-scrollbar whitespace-nowrap items-center z-[1] max-md:hidden"
            >
                {
                    MODUL.map((item, index) =>(
                        <CardModul item={item} index={index} key={index}/>
                    ))
                }
            </div>

        <div
        className="w-full min-h-[65vw] flex items-center justify-center gap-[6.1vw] md:hidden"
        >
            <div className="flex flex-col items-center gap-[2vw]">
                <div
                className="w-[24vw] h-[43vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[4.3vw]"
                />
                <button
                onClick={PrevModul}
                >
                    <Image
                    className="w-[3.5vw]"
                    alt=""
                    src={'/images/assets_materi_arrow_kiri.svg'}
                    height={100}
                    width={100}
                    />
                </button>
            </div>
            <div
            className="w-[32.6vw] h-[57.8vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[4.3vw]"
            />
            <div className="flex flex-col items-center gap-[2vw]">
                <div
                className="w-[24vw] h-[43vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[4.3vw]"
                />
                <button
                onClick={NextModul}>
                    <Image
                    className="w-[3.5vw]"
                    alt=""
                    src={'/images/assets_materi_arrow_kanan.svg'}
                    height={100}
                    width={100}
                />
                </button>
            </div>
        </div>
        <div className="w-full md:hidden">
            <h2 
            className="font-legendaire text-[12.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-center"
            >
                {isTitle}
            </h2>
            <p className="font-publica-sans text-[2.3vw] text-center text-[#FFE5C7]">
                {isDesc}
            </p>
        </div>
        
        </main>
    )
}