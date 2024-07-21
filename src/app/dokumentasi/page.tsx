"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import MainDokumentasi from "@/components/dokumentasi/main-dokumentasi";
import { Mobile_A, Mobile_B } from "@/components/dokumentasi/mobile";
import { Tablet_A, Tablet_B } from "@/components/dokumentasi/tablet";
import {
  Desktop_Right,
  Desktop_Left,
  Desktop_Center,
} from "@/components/dokumentasi/desktop";

import AOS from "aos";
import "aos/dist/aos.css";

import image1 from "../../../public/images/dokumentasi/DSC06149.jpg";
import image2 from "../../../public/images/dokumentasi/DSC07402.jpg";
import image3 from "../../../public/images/dokumentasi/DSC06261.jpg";
import image4 from "../../../public/images/dokumentasi/IMG_3312.jpg";
import image5 from "../../../public/images/dokumentasi/IMG_4920.jpg";
import image6 from "../../../public/images/dokumentasi/IMG_3358.jpg";
import image7 from "../../../public/images/dokumentasi/DSC06190.jpg";
import image8 from "../../../public/images/dokumentasi/DSC08883.jpg";
import image9 from "../../../public/images/dokumentasi/IMG_4666.jpg";
import image10 from "../../../public/images/dokumentasi/DSCF5801.jpg";
import image11 from "../../../public/images/dokumentasi/DSCF6221.jpg";
import image12 from "../../../public/images/dokumentasi/DSC05282.jpg";
import image13 from "../../../public/images/dokumentasi/IMG_4706.jpg";
import image14 from "../../../public/images/dokumentasi/DSCF5435.jpg";
import image15 from "../../../public/images/dokumentasi/2023_0802_12552600.jpg";

import ImageModal from "@/components/dokumentasi/image-modal";

export default function Dokumentasi() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image1);
  const imgArrayDesktop: any = [
    [image1, image2, image3],
    [image4, image5, image6],
    [image7, image8, image9],
    [image10, image11, image12],
    [image13, image14, image15],
  ];

  const imgArrayMobile: any = [
    [image1, image2],
    [image3, image4],
    [image5, image6],
    [image7, image8],
    [image9, image10],
    [image11, image12],
    [image13, image14],
    [image15],
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative w-full pb-[60vw] sm:pb-[35vw] lg:pb-[23vw]">
        {/* bg atas hp */}
        <div
          className="absolute top-[10vw] z-0 w-full sm:hidden"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <Image
            className="w-full"
            alt=""
            src={"/images/agenda/atas-hp.svg"}
            width={1000}
            height={1000}
          />
        </div>
        {/* bg atas tab */}
        <div
          className="absolute top-[8vw] z-0 hidden w-full sm:block lg:hidden"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <Image
            className="w-full"
            alt=""
            src={"/images/agenda/atas-tab.svg"}
            width={2000}
            height={1000}
          />
        </div>
        {/* bg atas desktop */}
        <div
          className="absolute top-[3.5vw] z-0 hidden w-full lg:block"
          data-aos="fade-down"
          data-aos-delay="700"
        >
          <Image
            className="w-full"
            alt=""
            src={"/images/agenda/atas-desktop.svg"}
            width={2000}
            height={1000}
          />
        </div>

        {/* Main Section */}
        <MainDokumentasi />
        {/* Desktop */}
        <div className="hidden w-full flex-col items-center justify-center overflow-x-clip lg:flex">
          {imgArrayDesktop.map((item: any, index: number) => (
            <div className="flex w-full flex-wrap justify-center" key={index}>
              <Desktop_Left
                img={item[0]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
              <Desktop_Center
                img={item[1]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
              <Desktop_Right
                img={item[2]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden w-full flex-col items-center justify-center overflow-x-clip sm:flex lg:hidden">
          {imgArrayMobile.map((item: any, index: number) => (
            <div className="flex w-full flex-wrap justify-center" key={index}>
              <Tablet_A
                img={item[0]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
              {item[1] && (
                <Tablet_B
                  img={item[1]}
                  setModalIsOpen={setModalIsOpen}
                  setSelectedImage={setSelectedImage}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex w-full flex-col items-center justify-center overflow-x-clip sm:hidden">
          {imgArrayMobile.map((item: any, index: number) => (
            <div className="flex w-full flex-wrap justify-center" key={index}>
              <Mobile_A
                img={item[0]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
              {item[1] && (
                <Mobile_B
                  img={item[1]}
                  setModalIsOpen={setModalIsOpen}
                  setSelectedImage={setSelectedImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <ImageModal image={selectedImage} setModalIsOpen={setModalIsOpen} />
      )}

      {/* Footer Manual Mobile */}
      <div
        className={"fixed bottom-0 w-full sm:hidden"}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
      >
        <Image
          className="w-full"
          alt=""
          src={"/images/footer-HP.svg"}
          width={1000}
          height={1000}
        />
      </div>
      {/* Footer Manual Desktop Tab */}
      <div
        className={"fixed bottom-0 hidden w-full sm:block lg:absolute"}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-offset="-10000"
      >
        <Image
          className="w-full"
          alt=""
          src={"/images/background/footer-tab-desktop-agenda.png"}
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
}
