"use client";
import { useState } from "react";

import MainDokumentasi from "@/components/dokumentasi/main-dokumentasi";

import { Mobile_A, Mobile_B } from "@/components/dokumentasi/mobile";
import { Tablet_A, Tablet_B } from "@/components/dokumentasi/tablet";
import {
  Desktop_Right,
  Desktop_Left,
  Desktop_Center,
} from "@/components/dokumentasi/desktop";

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

import ImageModal from "@/components/dokumentasi/image-modal";

export default function Dokumentasi() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(image1);
  const imgArrayDesktop: any = [
    [image1, image2, image3],
    [image4, image5, image6],
    [image7, image8, image9],
    [image10, image11, image12],
  ];

  const imgArrayMobile: any = [
    [image1, image2],
    [image3, image4],
    [image5, image6],
    [image7, image8],
    [image9, image10],
    [image11, image12],
  ];

  return (
    <>
      <div className="relative w-full bg-pattern-ungu-kesat bg-top bg-repeat pt-32">
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
              <Tablet_B
                img={item[1]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
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
              <Mobile_B
                img={item[1]}
                setModalIsOpen={setModalIsOpen}
                setSelectedImage={setSelectedImage}
              />
            </div>
          ))}
        </div>
      </div>
      {modalIsOpen && (
        <ImageModal image={selectedImage} setModalIsOpen={setModalIsOpen} />
      )}
    </>
  );
}
