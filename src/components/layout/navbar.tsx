// Navigation Bar
// No Parameter Requirement
// Using View Width as measurment unit
// Desktop Version temporaly

'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

// JSON Data for option in navbar
const MENU = [
    {
        "name" : "Beranda",
        "link" : "/"
    },
    {
        "name" : "Dokumentasi",
        "link" : "/dokumentasi"
    },
    {
        "name" : "Agenda",
        "link" : "/agenda"
    },
    {
        "name" : "Materi",
        "link" : "/materi"
    },
    {
        "name" : "FAQ",
        "link" : "/faq"
    }
]

export default function Navbar(){
    const [isHide, setIsHide] = useState(false);    // Variable for hide status
    const [prevScrollPos, setPrevScrollPos] = useState(0);  // Variable for position scroll

    useEffect(() => {
        // Function for handle scroll by checking current scroll position and previous scroll position
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > prevScrollPos) {
                setIsHide(true);
            } else {
                setIsHide(false);
            }
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return(
    <nav 
    className={"fixed z-[999] w-full bg-gradient-to-r from-[#34144E] to-[#5E1675] from-50% py-[0.25vw] px-[3.75vw] flex justify-between text-[1.25vw]/[1.5vw] font-publica-sans text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000] duration-300 " + (isHide? "translate-y-[-5vw]" : "translate-y-0")}>
            <div 
            className="flex items-center gap-x-[0.5vw] font-">
                <Image 
                className="w-[3.75vw] aspect-auto"
                alt="Logo Kesatria 2024"
                src="/images/logo/logo_yellow.svg"
                width={71}
                height={72}
                />
                <Link href={'/'} className="translate-y-[0.25vw]"
                >
                    PIONIR KESATRIA 2024
                </Link>
            </div>
            <div 
            className="flex gap-x-[3vw] items-center translate-y-[0.25vw]"
            >
                {MENU.map((item, index) =>(
                    <Link 
                    href={item.link} 
                    key={index}
                    className="hover:underline"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    )
}