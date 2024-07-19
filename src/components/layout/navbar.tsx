// Navigation Bar
// No Parameter Requirement
// Using View Width as measurment unit
// Desktop Version temporaly

'use client'
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaCamera, FaClock, FaHome, FaQuestion } from 'react-icons/fa';

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
        const [isOpen, setIsOpen] = useState(true)
        const handleOpen=()=>{
            setIsOpen(!isOpen)
        }
        const Icons = ({input}) => {
            if(input == 'Beranda')
                return<FaHome className='text-[5vw]'/>
            if(input == 'Dokumentasi')
                return <FaCamera className='text-[5vw]'/>
            if(input == 'Materi')
                return <FaBook className='text-[5vw]'/>
            if(input == 'Agenda')
                return <FaClock className='text-[5vw]'/>
            if(input =='FAQ')
                return <FaQuestion className='text-[5vw]'/>
        }
        return(
            <nav 
            className={"fixed z-[999] w-full bg-gradient-to-r from-[#34144E] to-[#5E1675] from-50% py-[1vw] px-[2vw] flex flex-col text-[2vw]/[2vw] font-publica-sans text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000]  md:hidden " + (isHide? "translate-y-[-11vw] duration-300" : "translate-y-0 duration-300")}>
                <div className='w-full flex justify-between px-[]'>
                    <div
                    className="flex items-center gap-x-[0.5vw] ">
                        <Link href={'/'} className=""
                        >
                            <Image 
                            className={"aspect-auto w-[15vw]"}
                            alt="Logo Kesatria 2024"
                            src="/images/logo/logo_yellow.svg"
                            width={71}
                            height={72}
                            />
                        </Link>
                    </div>
                    <div 
                    onClick={handleOpen}
                    className="flex flex-col place-content-center items-center translate-y-[0.25vw] z-[1]"
                    >
                        <div className={'bg-[#FFE5C7] bg-transparent h-[1.5vw] rounded-[1vw] w-[10vw] duration-100 ' + (isOpen?"rotate-45":"rotate-0")}/>
                        <div className={'bg-[#FFE5C7] absolute h-[1.5vw] rounded-[1vw] w-[10vw] duration-300 ' + (isOpen?"rotate-45":"rotate-0")}/>
                        <div className={'bg-[#FFE5C7] absolute h-[1.5vw] rounded-[1vw] w-[10vw] duration-300 ' + (isOpen?"-rotate-45":"rotate-0")}/>
                        <div className={'bg-[#FFE5C7] h-[1.5vw] rounded-[1vw] absolute duration-300 ' + (isOpen?"translate-y-0 w-0":"translate-y-[-3vw] w-[10vw]" )}/>
                        <div className={'bg-[#FFE5C7] h-[1.5vw] rounded-[1vw] absolute duration-300 ' + (isOpen?"translate-y-0 w-0":"translate-y-[3vw] w-[10vw]" )}/>
                    </div>
                </div>
                <div className={'w-full m-auto flex flex-col items-center bg-[#FFE5C7] rounded-[2vw] place-content-center duration-300 overflow-hidden border-[#FFE5C7] font-medium text-[#5E1675] '+ (isOpen?"h-[42vw] border-t-[0.5vw]":"h-0 border-0")} >
                    <Image
                    className={'absolute duration-200 translate-x-[-25vw] ' + (isOpen?"w-[30vw]":"w-0")}
                    alt=''
                    src={'/vercel.svg'}
                    width={100}
                    height={100}
                    />
                {MENU.map((item, index) =>(
                    <Link 
                    href={item.link} 
                    key={index}
                    className="z-[1] flex w-full justify-end items-center px-[8vw] hover:underline gap-[2vw]"
                    >
                        <p className='text-[5vw]/[5vw] p-[1vw] translate-y-[0.5vw] bg-gradient-to-r from-[#34144E] to-[#5E1675] bg-clip-text text-transparent'>{item.name}</p>
                        <Icons input={item.name}/>
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