// Navigation Bar
// No Parameter Requirement
// Using View Width as measurment unit
// Desktop Version temporaly

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBook, FaCamera, FaClock, FaHome, FaQuestion } from "react-icons/fa";

// JSON Data for option in navbar
const MENU = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Dokumentasi",
    link: "/dokumentasi",
  },
  {
    name: "Agenda",
    link: "/agenda",
  },
  {
    name: "Materi",
    link: "/materi",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
];

export default function Navbar() {
  //   const [isHide, setIsHide] = useState(false); // Variable for hide status
  //   const [prevScrollPos, setPrevScrollPos] = useState(0); // Variable for position scroll

  //   useEffect(() => {
  //     // Function for handle scroll by checking current scroll position and previous scroll position
  //     const handleScroll = () => {
  //       const currentScrollPos = window.pageYOffset;
  //       if (currentScrollPos > prevScrollPos) {
  //         setIsHide(false);
  //       } else {
  //         setIsHide(false);
  //       }
  //       setPrevScrollPos(currentScrollPos);
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, [prevScrollPos]);

  const NavbarDesktop = () => {
    return (
      <nav
        className={
          "fixed z-[999] flex w-full justify-between bg-gradient-to-r from-[#34144E] from-50% to-[#5E1675] px-[3.75vw] py-[0.25vw] font-publica-sans text-[1.25vw]/[1.5vw] text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000] duration-100 max-lg:hidden"
        }
      >
        <div className="font- flex items-center gap-x-[0.5vw]">
          <Image
            className="aspect-auto w-[3.75vw]"
            alt="Logo Kesatria 2024"
            src="/images/logo/logo_yellow.svg"
            width={71}
            height={72}
          />
          <Link href={"/"} className="translate-y-[0.25vw]">
            PIONIR KESATRIA 2024
          </Link>
        </div>
        <div className="flex translate-y-[0.25vw] items-center gap-x-[3vw]">
          {MENU.map((item, index) => (
            <Link href={item.link} key={index} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

  const NavbarTablet = () => {
    return (
      <nav
        className={
          "fixed z-[999] flex w-full justify-between bg-gradient-to-r from-[#34144E] from-50% to-[#5E1675] px-[2vw] py-[1vw] font-publica-sans text-[2vw]/[2vw] text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000] duration-300 max-sm:hidden lg:hidden"
        }
      >
        <div className="font- flex items-center gap-x-[0.5vw]">
          <Image
            className="aspect-auto w-[6vw]"
            alt="Logo Kesatria 2024"
            src="/images/logo/logo_yellow.svg"
            width={71}
            height={72}
          />
          <Link href={"/"} className="translate-y-[0.25vw]">
            PIONIR KESATRIA 2024
          </Link>
        </div>
        <div className="flex translate-y-[0.25vw] items-center gap-x-[3vw]">
          {MENU.map((item, index) => (
            <Link href={item.link} key={index} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    );
  };

  const NavbarHP = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(!isOpen);
    };
    const Icons = ({ input }: { input: string }) => {
      if (input == "Beranda") return <FaHome className="text-[5vw]" />;
      if (input == "Dokumentasi") return <FaCamera className="text-[5vw]" />;
      if (input == "Materi") return <FaBook className="text-[5vw]" />;
      if (input == "Agenda") return <FaClock className="text-[5vw]" />;
      if (input == "FAQ") return <FaQuestion className="text-[5vw]" />;
    };
    return (
      <nav
        className={
          "fixed z-[999] flex w-full flex-col bg-gradient-to-r from-[#34144E] from-50% to-[#5E1675] px-[2vw] py-[1vw] font-publica-sans text-[2vw]/[2vw] text-[#FFE5C7] shadow-[0_0.6vw_10vw_0_#000000] sm:hidden"
        }
      >
        <div className="flex w-full justify-between px-[]">
          <div className="flex items-center gap-x-[0.5vw]">
            <Link href={"/"} className="">
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
            className="z-[1] flex translate-y-[0.25vw] flex-col place-content-center items-center"
          >
            <div
              className={
                "h-[1.5vw] w-[10vw] rounded-[1vw] bg-[#FFE5C7] bg-transparent duration-100 " +
                (isOpen ? "rotate-45" : "rotate-0")
              }
            />
            <div
              className={
                "absolute h-[1.5vw] w-[10vw] rounded-[1vw] bg-[#FFE5C7] duration-300 " +
                (isOpen ? "rotate-45" : "rotate-0")
              }
            />
            <div
              className={
                "absolute h-[1.5vw] w-[10vw] rounded-[1vw] bg-[#FFE5C7] duration-300 " +
                (isOpen ? "-rotate-45" : "rotate-0")
              }
            />
            <div
              className={
                "absolute h-[1.5vw] rounded-[1vw] bg-[#FFE5C7] duration-300 " +
                (isOpen ? "w-0 translate-y-0" : "w-[10vw] translate-y-[-3vw]")
              }
            />
            <div
              className={
                "absolute h-[1.5vw] rounded-[1vw] bg-[#FFE5C7] duration-300 " +
                (isOpen ? "w-0 translate-y-0" : "w-[10vw] translate-y-[3vw]")
              }
            />
          </div>
        </div>
        <div
          className={
            "m-auto flex w-full flex-col place-content-center items-center overflow-hidden rounded-[2vw] border-[#FFE5C7] bg-[#FFE5C7] font-medium text-[#5E1675] duration-300 " +
            (isOpen ? "h-[42vw] border-t-[0.5vw]" : "h-0 border-0")
          }
        >
          {/* <Image
            className={
              "absolute translate-x-[-25vw] duration-200 " +
              (isOpen ? "w-[30vw]" : "w-0")
            }
            alt=""
            src={"/vercel.svg"}
            width={100}
            height={100}
          /> */}
          {MENU.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="z-[1] flex w-full items-center justify-end gap-[2vw] px-[8vw] hover:underline"
              onClick={() => setIsOpen(false)}
            >
              <p className="translate-y-[0.5vw] bg-gradient-to-r from-[#34144E] to-[#5E1675] bg-clip-text p-[1vw] text-[5vw]/[5vw] text-transparent">
                {item.name}
              </p>
              <Icons input={item.name} />
            </Link>
          ))}
        </div>
      </nav>
    );
  };

  return (
    <>
      <NavbarDesktop />
      <NavbarTablet />
      <NavbarHP />
    </>
  );
}
