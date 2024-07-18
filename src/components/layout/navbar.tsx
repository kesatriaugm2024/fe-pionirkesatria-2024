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


    const NavbarDesktop=()=>{
        return(
            <nav 
            className={"fixed z-[999] w-full bg-gradient-to-r from-[#34144E] to-[#5E1675] from-50% py-[0.25vw] px-[3.75vw] flex justify-between text-[1.25vw]/[1.5vw] font-publica-sans text-[#FFE5C7] max-lg:hidden shadow-[0_0.6vw_10vw_0_#000000] duration-100 " + (isHide? "translate-y-[-5vw]" : "translate-y-0")}>
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

    const NavbarTablet=()=>{
        return(
            <nav 
            className={"fixed z-[999] w-full bg-gradient-to-r from-[#34144E] to-[#5E1675] from-50% py-[1vw] px-[2vw] flex justify-between text-[2vw]/[2vw] font-publica-sans text-[#FFE5C7] lg:hidden shadow-[0_0.6vw_10vw_0_#000000] duration-300 max-md:hidden " + (isHide? "translate-y-[-10vw]" : "translate-y-0")}>
                <div
                className="flex items-center gap-x-[0.5vw] font-">
                    <Image 
                    className="w-[6vw] aspect-auto"
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

    const NavbarHP=()=>{
        const [isOpen, setIsOpen] = useState(false)
        const handleOpen=()=>{
            setIsOpen(!isOpen)
        }
        return(
            <nav 
            className={"fixed z-[999] w-full bg-gradient-to-r from-[#34144E] to-[#5E1675] from-50% py-[1vw] px-[2vw] flex flex-col text-[2vw]/[2vw] font-publica-sans text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000]  md:hidden " + (isHide? "translate-y-[-11vw] duration-300" : "translate-y-0 duration-300")}>
                <div className='w-full flex justify-between'>
                    <div
                    className="flex items-center gap-x-[0.5vw] font-">
                        <Link href={'/'} className=""
                        >
                            <Image 
                            className="w-[8vw] aspect-auto"
                            alt="Logo Kesatria 2024"
                            src="/images/logo/logo_yellow.svg"
                            width={71}
                            height={72}
                            />
                        </Link>
                    </div>
                    <div 
                    onClick={handleOpen}
                    className="flex flex-col place-content-center items-center translate-y-[0.25vw]"
                    >
                        <div className={'bg-[#FFE5C7] bg-transparent h-[0.75vw] rounded-[1vw] w-[4vw] duration-100 ' + (isOpen?"rotate-45":"rotate-0")}/>
                        <div className={'bg-[#FFE5C7] absolute h-[0.75vw] rounded-[1vw] w-[4vw] duration-100 ' + (isOpen?"rotate-45":"rotate-0")}/>
                        <div className={'bg-[#FFE5C7] absolute h-[0.75vw] rounded-[1vw] w-[4vw] duration-100 ' + (isOpen?"-rotate-45":"rotate-0")}/>
                        <div className={'bg-[#FFE5C7] h-[0.75vw] rounded-[1vw] absolute duration-200 ' + (isOpen?"translate-y-0 w-0":"translate-y-[-1.5vw] w-[4vw]" )}/>
                        <div className={'bg-[#FFE5C7] h-[0.75vw] rounded-[1vw] absolute duration-200 ' + (isOpen?"translate-y-0 w-0":"translate-y-[1.5vw] w-[4vw]" )}/>
                    </div>
                </div>
                <div className={'w-full m-auto flex flex-col items-end place-content-center duration-300 overflow-hidden  border-[#FFE5C7]   '+ (isOpen?"h-[12vh] border-t-[0.5vw]":"h-0 border-0")} >
                {MENU.map((item, index) =>(
                    <Link 
                    href={item.link} 
                    key={index}
                    className="hover:underline text-[3vw]/[4vw]"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            </nav>
        )
    }

    return(
        <>
        <NavbarDesktop/>
        <NavbarTablet/>
        <NavbarHP/>
        </>
    )
}