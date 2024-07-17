"use client"
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";

const CARDCONTENT = [
  {
    'title':'Lika-Liku Kesatria',
    'desc':'Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.',
    'link':'/'
  },
  {
    'title':'Lika-Liku Kesatria 2',
    'desc':'Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.',
    'link':'/'
  },
  {
    'title':'Lika-Liku Kesatria 3',
    'desc':'Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.',
    'link':'/'
  },
  {
    'title':'Lika-Liku Kesatria 4',
    'desc':'Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.',
    'link':'/'
  },
]

const Desktop = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);
  const SwiperCard =({title, desc, link})=>{
    return(
      <div className="flex items-center justify-center gap-[2.5vw]">
        <div className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] w-[21.5vw] h-[15vw] rounded-[2vw]">
          {/* Gambar */}
        </div>
        <div className="flex flex-col ">
          <h2 className="font-legendaire bg-gradient-to-r from-[#5E1675] to-[#B22635] bg-clip-text text-transparent text-[3.125vw]">
            {title}
          </h2>
          <p className="w-[36vw] font-publica-sans text-[1.25vw]">
            {desc}
          </p>
          <button className="w-fit bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[2.5vw] rounded-[1.5vw] hover:from-[#FFA514] hover:to-[#FFD23F] duration-100">
            <p className="font-legendaire text-[#5E1675] text-[1.7vw]">
              Baca Modul
            </p>
          </button>
        </div>
      </div>
    )
  }

  return(
    <div className="flex flex-col min-h-screen items-center place-content-center gap-[2.5vw]">
      <h1 className="font-legendaire bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-[4vw]/[4vw]">
        Bagian II: Lika-Liku Kesatria
      </h1>
      <p className="font-publica-sans text-[1.7vw]/[1.7vw] text-[#FFE5C7] text-center w-[80vw]">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan kesibukan akademik dan di luar akademik yang cukup kompleks semasa kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik pada modul ini.
      </p>
      <div className="flex flex-col py-[6vw]">
        <Image
        className="absolute w-[35vw] z-[0] right-0 translate-y-[-12vw]"
        alt=""
        src={'/images/assets_beranda_chapter2_kainmerah_kanan.svg'}
        width={528}
        height={549}
        />
        <Image
        className="absolute w-[35vw] z-[0] left-0 translate-y-[-12vw]"
        alt=""
        src={'/images/assets_beranda_chapter2_kainmerah_kiri.svg'}
        width={528}
        height={549}
        />
        <div className="bg-[#FFE5C7] w-[75vw] h-[25vw] rounded-[2vw] flex items-center justify-center z-[1] gap-[1vw]">
          <div 
          className="h-full min-w-[3vw] flex items-center justify-center"
          onClick={() => {
            if (swiper.activeIndex == 0) return;
            swiper.slidePrev();
            setActiveSwiper(swiper.activeIndex);
          }}
          >
            <Image 
            className="w-[4vw] duration-100 hover:w-[8vw] hover:translate-x-[-1vw] "
            alt=""
            src={'/images/assets_beranda_chapter2_arrow_kiri.svg'}
            width={52.7}
            height={95.23}
            />
          </div>
          <Swiper
          slidesPerView={1}
          spaceBetween={10}
          grabCursor={true}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActiveSwiper(swiper.activeIndex);
          }}
          >
            {CARDCONTENT.map((item,index)=>(
              <SwiperSlide key={index}>
                <SwiperCard 
                title={item.title}
                desc={item.desc}
                link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div 
          className="h-full min-w-[3vw] flex items-center justify-center"
          onClick={() => {
            if (swiper.activeIndex == CARDCONTENT.length) return;
            swiper.slideNext();
            setActiveSwiper(swiper.activeIndex);
          }}
          >
            <Image 
            className="w-[4vw] duration-100 hover:w-[8vw] hover:translate-x-[1vw]"
            alt=""
            src={'/images/assets_beranda_chapter2_arrow_kanan.svg'}
            width={52.7}
            height={95.23}
            />
          </div>
        </div>
        <div className="flex px-[2vw]">
          {CARDCONTENT.map((item,index) =>(
            <div
            className={"w-full drop-shadow-[0_0.5vw_1vw_#000000] flex flex-col items-center bg-gradient-to-b rounded-b-[1.5vw] z-[1] duration-100 " + (activeSwiper==index?"from-[#FFD23F] to-[#FFA514]":"from-[#491772] to-[#5E1675]")}
            key={index}
            onClick={() => {
              setActiveSwiper(index);
              swiper.slideTo(index);
            }}>
              <div 
              className="w-[70%] h-[0.4vw] bg-[#491772] translate-y-[-1vw] rounded-[0.5vw]"
              >
                <div
                className={"h-full rounded-[0.5vw] bg-gradient-to-r from-[#B22635] to-[#EA5571]  " +  (activeSwiper==index?"w-full":"w-0")}
                />
              </div>
              <p className={"font-legendaire p-[0.8vw] text-[1.6vw] text-center bg-gradient-to-b bg-clip-text text-transparent " + (activeSwiper!=index?"from-[#FFD23F] to-[#FFA514]":"from-[#491772] to-[#5E1675]")}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Chapter2() {
  return(
    <>
      <Desktop/>
    </>
  )
}
