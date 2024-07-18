"use client";
import { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";

const CARDCONTENT = [
  {
    title: "Lika-Liku Kesatria",
    desc: "Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.",
    link: "/",
  },
  {
    title: "Lika-Liku Kesatria 2",
    desc: "Perkuliahan adalah jenjang lebih tinggi yang diambil oleh seseorang setelah menyelesaikan pendidikan menengah atas (SMA/SMK) atau sederajat. Sebelum memasuki dunia perkuliahan, sebaiknya kesatria muda harus mengenal terlebih dahulu seputar perkuliahan sehingga nantinya dapat mempersiapkan diri untuk menyesuaikan diri dengan lingkungan yang baru.",
    link: "/",
    imgpath:'/next.svg'
  }
];

const Chapter2_Desktop = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);
  const SwiperCard = ({ title, desc, imgpath, link }) => {
    return (
      <div className="flex items-center justify-center gap-[2.5vw]">
        <div className="relative h-[13.5vw] w-[20vw] rounded-[2vw] bg-cover">
            <Image
            className="absolute w-full h-full rounded-[2vw]"
            alt=""
            src={imgpath}
            width={100}
            height={100}
            >
              
            </Image>
            <div className="absolute w-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] h-full rounded-[2vw] opacity-50">
              {/* Opacity */}
            </div>
            <div className="absolute -right-[7vw] -top-[8vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-1.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
            <div className="absolute -bottom-[5.9vw] -left-[7.9vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-2.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
          </div>
        <div className="flex flex-col gap-[1vw]">
          <h2 className="bg-gradient-to-r from-[#5E1675] to-[#B22635] bg-clip-text font-legendaire text-[3vw] text-transparent">
            {title}
          </h2>
          <p className="w-[36vw] font-publica-sans text-[1.2vw] text-justify">{desc}</p>
          <button className="w-fit rounded-[1.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[2.5vw] duration-100 hover:from-[#FFA514] hover:to-[#FFD23F]">
            <p className="font-legendaire text-[1.5vw] text-[#5E1675]">
              Baca Modul
            </p>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col place-content-center items-center gap-[2.5vw] pt-[5vw] max-lg:hidden">
      <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[4vw]/[4vw] text-transparent">
        Bagian II: Lika-Liku Kesatria
      </h1>
      <p className="w-[80vw] text-center font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7]">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat
        sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki
        jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di
        masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan
        kesibukan akademik dan di luar akademik yang cukup kompleks semasa
        kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk
        menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan
        yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik
        pada modul ini.
      </p>
      <div className="flex flex-col py-[6vw]">
        <Image
          className="absolute right-0 z-[0] w-[35vw] translate-y-[-12vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kanan.svg"}
          width={528}
          height={549}
        />
        <Image
          className="absolute left-0 z-[0] w-[35vw] translate-y-[-12vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kiri.svg"}
          width={528}
          height={549}
        />
        <div className="z-[1] flex h-[25vw] w-[75vw] items-center justify-center gap-[1vw] rounded-[2vw] bg-[#FFE5C7]">
          <div
            className="flex h-full min-w-[3vw] items-center justify-center"
            onClick={() => {
              if (swiper.activeIndex == 0) return;
              swiper.slidePrev();
              setActiveSwiper(swiper.activeIndex);
            }}
          >
            <Image
              className="w-[4vw] duration-100 hover:w-[8vw] hover:translate-x-[-1vw]"
              alt=""
              src={"/images/assets_beranda_chapter2_arrow_kiri.svg"}
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
            {CARDCONTENT.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperCard
                  imgpath={item.imgpath}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className="flex h-full min-w-[3vw] items-center justify-center"
            onClick={() => {
              if (swiper.activeIndex == CARDCONTENT.length) return;
              swiper.slideNext();
              setActiveSwiper(swiper.activeIndex);
            }}
          >
            <Image
              className="w-[4vw] duration-100 hover:w-[8vw] hover:translate-x-[1vw]"
              alt=""
              src={"/images/assets_beranda_chapter2_arrow_kanan.svg"}
              width={52.7}
              height={95.23}
            />
          </div>
        </div>
        <div className="flex px-[2vw]">
          {CARDCONTENT.map((item, index) => (
            <div
              className={
                "z-[1] flex w-full flex-col items-center rounded-b-[1.5vw] bg-gradient-to-b drop-shadow-[0_0.5vw_1vw_#000000] duration-100 " +
                (activeSwiper == index
                  ? "from-[#FFD23F] to-[#FFA514]"
                  : "from-[#491772] to-[#5E1675]")
              }
              key={index}
              onClick={() => {
                setActiveSwiper(index);
                swiper.slideTo(index);
              }}
            >
              <div className="h-[0.4vw] w-[70%] translate-y-[-1vw] rounded-[0.5vw] bg-[#491772]">
                <div
                  className={
                    "h-full rounded-[0.5vw] bg-gradient-to-r from-[#B22635] to-[#EA5571] " +
                    (activeSwiper == index ? "w-full" : "w-0")
                  }
                />
              </div>
              <p
                className={
                  "bg-gradient-to-b bg-clip-text p-[0.8vw] text-center font-legendaire text-[1.6vw] text-transparent " +
                  (activeSwiper != index
                    ? "from-[#FFD23F] to-[#FFA514]"
                    : "from-[#491772] to-[#5E1675]")
                }
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Chapter2_Tablet =()=>{
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);

  const Title = () =>{
    return(
      <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[5vw]/[5vw] drop-shadow-[0_0.5vw_0.2vw_#000000] text-transparent">
        Bagian II: Lika-Liku Kesatria
      </h1>
    )
  }

  const Descrtiption=()=>{
    return(
      <p className=" w-[70vw] font-publica-sans text-[#FFE5C7] text-[2vw]/[3vw] text-center">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan kesibukan akademik dan di luar akademik yang cukup kompleks semasa kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik pada modul ini.
      </p>
    )
  }
  const SwiperCard = ({title, desc, imgpath, link})=>{
    const Gambar = () =>{
      return(
        <div className="relative h-[13.5vw] w-[20vw] rounded-[2vw] bg-cover">
            <Image
            className="absolute w-full h-full rounded-[2vw]"
            alt=""
            src={imgpath}
            width={100}
            height={100}
            />
            <div className="absolute w-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] h-full rounded-[2vw] opacity-50">
              {/* Opacity */}
            </div>
            <div className="absolute -right-[7vw] -top-[8vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-1.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
            <div className="absolute -bottom-[5.9vw] -left-[7.9vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-2.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
          </div>
      )
    }
    const Button = () => {
      return(
        <button className="w-fit rounded-[4.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[5vw] duration-100 hover:from-[#FFA514] hover:to-[#FFD23F]">
          <p className="font-legendaire text-[3vw] text-[#5E1675]">
            Baca Modul
          </p>
        </button>
      )
    }
    return(
      <div className="w-full flex flex-col py-[4vw] items-center place-content-center">
        <Image
          className="absolute right-0 z-[0] w-[48vw] translate-y-[8vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kanan.svg"}
          width={528}
          height={549}
        />
        <Image
          className="absolute left-0 z-[0] w-[48vw] translate-y-[8vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kiri.svg"}
          width={528}
          height={549}
        />
        <div className="w-[65vw] h-[55vw] rounded-[2vw] bg-[#FFE5C7] drop-shadow-[0_0.5vw_1vw_#000000] z-[1] flex flex-col items-center place-content-center gap-[1vw]">
          <h1 className="font-legendaire text-[5vw] bg-gradient-to-r from-[#5E1675] to-[#B22635] bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-[6vw]">
            <button className="w-[8vw] flex justify-end"
            onClick={() => {
              if (swiper.activeIndex == CARDCONTENT.length) return;
              swiper.slidePrev();
              setActiveSwiper(swiper.activeIndex);
            }}
            >
              <Image
                className="w-[4vw] hover:w-[6vw] duration-100 z-[1]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kiri.svg"}
                width={52.7}
                height={95.23}
              />
            </button>
            <Gambar/>
            <button className="w-[8vw] flex justify-start"
            onClick={() => {
              if (swiper.activeIndex == CARDCONTENT.length) return;
              swiper.slideNext();
              setActiveSwiper(swiper.activeIndex);
            }}
            >
              <Image
                className="w-[4vw] hover:w-[6vw] duration-100 z-[1]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kanan.svg"}
                width={52.7}
                height={95.23}
              />
            </button>
          </div>
          <p className="px-[5vw] font-publica-sans text-[2vw]">
            {desc}
          </p>
          <Button/>
        </div>
        <div className="flex z-[0]">
          <div className="w-[15vw] h-[6vw] bg-gradient-to-br from-[#491772] to-[#5E1675] rounded-b-[3vw] drop-shadow-[0_1vw_1vw_#000000]"/>
          <div className="w-[25vw] h-[6vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-b-[3vw] drop-shadow-[0_1vw_1vw_#000000] flex items-center justify-center z-[1] hover:bg-gradient-to-t">
            <button className=" font-legendaire text-center text-[3vw] bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text text-transparent ">
              {title}
            </button>
          </div>
          <div className="w-[15vw] h-[6vw] bg-gradient-to-b from-[#491772] to-[#5E1675] z-[0] rounded-b-[3vw] drop-shadow-[0_1vw_1vw_#000000]"/>
        </div>
      </div>
    )
  }


  return(
    <div className="w-full min-h-screen flex flex-col items-center place-content-center gap-[3vw] py-[10vw] max-md:hidden">
      <Title/>
      <Descrtiption/>
      <div className="w-screen ">
      <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => {
              setActiveSwiper(swiper.activeIndex);
            }}
          >
            {CARDCONTENT.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperCard
                  imgpath={item.imgpath}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  )
}

const Chapter2_HP =()=>{
  const [swiper, setSwiper] = useState(null);
  const [activeSwiper, setActiveSwiper] = useState(0);

  const Title = () =>{
    return(
      <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[6vw]/[6vw] drop-shadow-[0_0.5vw_0.2vw_#000000] text-transparent">
        Bagian II: Lika-Liku Kesatria
      </h1>
    )
  }

  const Descrtiption=()=>{
    return(
      <p className=" w-[70vw] font-publica-sans text-[#FFE5C7] text-[2vw]/[3vw] text-center">
        Masa perkuliahan tentunya berbeda jika dibandingkan dengan masa saat sekolah. Di mana saat sekolah, segala sesuatunya teratur dan memiliki jadwal yang pasti. Selain itu, lingkup pergaulan yang akan ditemui di masa kuliah juga semakin luas dan beragam. Ditambah lagi dengan kesibukan akademik dan di luar akademik yang cukup kompleks semasa kuliah. Hal-hal tersebut harus dapat dikenali terlebih dahulu untuk menjadi bekal agar nantinya bisa menyesuaikan diri dengan lingkungan yang baru. Yuk kita sama-sama lihat apa saja kesibukan di luar akademik pada modul ini.
      </p>
    )
  }
  const SwiperCard = ({title, desc, imgpath, link})=>{
    const Gambar = () =>{
      return(
        <div className="relative h-[13.5vw] w-[20vw] rounded-[2vw] bg-cover">
            <Image
            className="absolute w-full h-full rounded-[2vw]"
            alt=""
            src={imgpath}
            width={100}
            height={100}
            />
            <div className="absolute w-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] h-full rounded-[2vw] opacity-50">
              {/* Opacity */}
            </div>
            <div className="absolute -right-[7vw] -top-[8vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-1.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
            <div className="absolute -bottom-[5.9vw] -left-[7.9vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-2.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
          </div>
      )
    }

    const Button = () => {
      return(
        <button className="w-fit rounded-[4.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[5vw] duration-100 hover:from-[#FFA514] hover:to-[#FFD23F]">
          <p className="font-legendaire text-[3vw] text-[#5E1675]">
            Baca Modul
          </p>
        </button>
      )
    }

    return(
      <div className="w-full flex flex-col py-[4vw] items-center place-content-center">
        <Image
          className="absolute right-0 z-[0] w-[48vw] scale-y-[1.5] translate-y-[8vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kanan.svg"}
          width={528}
          height={549}
        />
        <Image
          className="absolute left-0 z-[0] w-[48vw] scale-y-[1.5] translate-y-[8vw]"
          alt=""
          src={"/images/assets_beranda_chapter2_kainmerah_kiri.svg"}
          width={528}
          height={549}
        />
        <div className="w-[60vw] h-[88vw] rounded-[2vw] bg-[#FFE5C7] drop-shadow-[0_0.5vw_1vw_#000000] z-[1] flex flex-col items-center place-content-center gap-[2.5vw]">
          <h1 className="font-legendaire text-[5vw] bg-gradient-to-r from-[#5E1675] to-[#B22635] bg-clip-text text-transparent">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-[6vw]">
            <button className="w-[8vw] flex justify-end"
            onClick={() => {
              if (swiper.activeIndex == CARDCONTENT.length) return;
              swiper.slidePrev();
              setActiveSwiper(swiper.activeIndex);
            }}
            >
              <Image
                className="w-[4vw] hover:w-[6vw] duration-100 z-[1]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kiri.svg"}
                width={52.7}
                height={95.23}
              />
            </button>
            <Gambar/>
            <button className="w-[8vw] flex justify-start"
            onClick={() => {
              if (swiper.activeIndex == CARDCONTENT.length) return;
              swiper.slideNext();
              setActiveSwiper(swiper.activeIndex);
            }}
            >
              <Image
                className="w-[4vw] hover:w-[6vw] duration-100 z-[1]"
                alt=""
                src={"/images/assets_beranda_chapter2_arrow_kanan.svg"}
                width={52.7}
                height={95.23}
              />
            </button>
          </div>
          <p className="px-[8vw] font-publica-sans text-[2.5vw]">
            {desc}
          </p>
          <Button />
        </div>
        <div className="flex z-[0]">
          <div className="w-[15vw] h-[6vw] bg-gradient-to-br from-[#491772] to-[#5E1675] rounded-b-[3vw] drop-shadow-[0_1vw_1vw_#000000]"/>
          <div className="w-[25vw] h-[6vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-b-[3vw] drop-shadow-[0_1vw_1vw_#000000] flex items-center justify-center z-[1] hover:bg-gradient-to-t">
            <button className=" font-legendaire text-center text-[3vw] bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text text-transparent ">
              {title}
            </button>
          </div>
          <div className="w-[15vw] h-[6vw] bg-gradient-to-b from-[#491772] to-[#5E1675] z-[0] rounded-b-[3vw] drop-shadow-[0_1vw_1vw_#000000]"/>
        </div>
      </div>
    )
  }


  return(
    <div className="w-full min-h-screen flex flex-col items-center place-content-center gap-[3vw] py-[10vw] md:hidden">
      <Title/>
      <Descrtiption/>
      <div className="w-screen ">
      <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            onSwiper={setSwiper}
            onSlideChange={(swiper) => {
              setActiveSwiper(swiper.activeIndex);
            }}
          >
            {CARDCONTENT.map((item, index) => (
              <SwiperSlide key={index}>
                <SwiperCard
                  imgpath={item.imgpath}
                  title={item.title}
                  desc={item.desc}
                  link={item.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </div>
  )
}

export default function Chapter2() {
  return (
    <>
      <Chapter2_Desktop />
      <Chapter2_Tablet/>
      <Chapter2_HP/>
    </>
  );
}
