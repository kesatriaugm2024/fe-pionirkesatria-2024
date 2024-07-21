import Image from "next/image";
import Link from "next/link";
import { motion } from "framer";

const CONTENT = [
  {
    title: "Bagian III: Kesatria Muda Berkarya",
    titleTab: "Bagian III: Kesatria Muda Berkarya",
    titleHP: ["Bagian III:", "Kesatria Muda Berkarya"],
    titleDesc:
      "Tentunya kesatria muda sebagai calon-calon insinyur muda akan menghadapi masalah-masalah yang terjadi di Indonesia baik itu dari sektor manufaktur, infrastruktur, dan energi. Di bagian 3 ini, kesatria muda akan mengerjakan sebuah masalah keteknikan yang mana nantinya akan melatih kemampuan berpikir kritis, problem solving, dan kerja sama.",
    subtitle1: "Karya Kesatria Muda",
    subtitle1desc:
      "Para kesatria muda diharapkan mampu mengaplikasikan pengetahuan dan keterampilan yang relevan serta pemahaman mendalam mengenai  jurusan Teknik yang kesatria muda ambil untuk kontribusi mereka bagi bangsa dan negara di masa depan.",
    subtitle2: "Karya Aplikatif",
    subtitle2desc:
      "Indonesia sebagai negara berkembang terus menghadapi berbagai tantangan dalam sektor manufaktur, infrastruktur, dan energi. Di era globalisasi dan revolusi industri 4.0, kebutuhan akan tenaga ahli di bidang teknik semakin meningkat. Kesatria muda sebagai calon-calon insinyur muda berperan penting dalam pembangunan berkelanjutan dan peningkatan kualitas hidup masyarakat. Oleh karena itu, pendidikan teknik harus dapat membekali pengetahuan dan keterampilan yang relevan serta pemahaman mendalam tentang kontribusi mereka bagi bangsa.",
  },
];

const JudulChapter = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center max-lg:max-w-[65vw] max-sm:hidden">
      <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[4vw] text-transparent drop-shadow-[0_0.5vw_0.2vw_#000000] max-lg:text-[4.8vw]">
        {CONTENT[0].title}
      </h1>
      <p className="font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7] max-lg:text-[2.5vw]/[3.2vw] text-justify font-light drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
        {CONTENT[0].titleDesc}
      </p>
    </div>
  );
};

const JudulChapterHP = () => {
  return (
    <div data-aos="fade-up" className="flex w-full flex-col place-content-center items-center gap-[2.5vw] text-center sm:hidden">
      <h1 className="font-legendaire text-[6vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
        <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          {CONTENT[0].titleHP[0]}
        </span>
        <br />
        <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          {CONTENT[0].titleHP[1]}
        </span>
      </h1>
      <p className="text-justify font-publica-sans text-[3.5vw]/[4.5vw] text-[#FFE5C7] max-w-[72vw] drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)] font-light">
        {CONTENT[0].titleDesc}
      </p>
    </div>
  );
};

const KesatriaMudaBerkarya = () => {
  return (
    <div className="flex w-full items-center justify-between max-lg:hidden">
      <div data-aos="fade-right" className="flex max-w-[40vw] flex-col gap-[1vw]">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[3vw] text-transparent custom-shadow-text">
          {CONTENT[0].subtitle1}
        </h2>
        <p className="text-justify font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7] font-light drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
          {CONTENT[0].subtitle1desc}
        </p>
        <Link 
        href={'/materi'}
        className="w-[16.5vw] rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
          <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text font-legendaire text-[2vw] text-transparent z-[10] text-center">
            Lihat Modul
          </p>
        </Link>

        
      </div>
      <div data-aos="fade-left" className="h-[24vw] w-[31.5vw] rounded-[2.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.1vw_1vw_#000000]"></div>
    </div>
  );
};

const KaryaAplikatif = () => {
  return (
    <div className="flex w-full items-center justify-between max-lg:hidden">
      <div data-aos="fade-right" className="h-[24vw] w-[31.5vw] rounded-[2.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.1vw_1vw_#000000]"></div>
      <div data-aos="fade-left" className="flex max-w-[40vw] flex-col gap-[1vw]">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[3vw] text-transparent text-right custom-shadow-text">
          {CONTENT[0].subtitle2}
        </h2>
        <p className="text-justify font-publica-sans text-[1.5vw]/[2vw] text-[#FFE5C7] font-light drop-shadow-[-20_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
          {CONTENT[0].subtitle2desc}
        </p>
        <Link 
        href={'/materi'}
        className="w-[16.5vw] rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F] z-[10]">
          <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text font-legendaire text-[2vw] text-transparent text-center">
            Lihat Modul
          </p>
        </Link>
      </div>
    </div>
  );
};

const KesatriaMudaBerkaryaTab = () => {
  return (
    <div className="flex w-[71vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
      <div data-aos="fade-up" className="flex w-full flex-col items-center gap-[1vw]">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[5vw] text-transparent custom-shadow-text">
          {CONTENT[0].subtitle1}
        </h2>
        <p className="text-justify font-publica-sans text-[2.5vw]/[3.2vw] text-[#FFE5C7] max-w-[65vw] font-light drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle1desc}
        </p>
        <div className="mt-[2vw] flex w-full flex-col items-center justify-center gap-[2vw] lg:hidden">
          <Image
            className="absolute left-0 w-[50vw] translate-y-[5vw]"
            alt=""
            src={"/images/assets_beranda_chapter3_pitaungu_kiri.svg"}
            width={1965}
            height={880}
          />
          <Image
            className="absolute right-0 w-[50vw] translate-y-[5vw]"
            alt=""
            src={"/images/assets_beranda_chapter3_pitaungu_kanan.svg"}
            width={1965}
            height={880}
          />
          <div className="z-[1] h-[23.2vw] w-[39.7vw] rounded-[2.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] ">
            {/* Tablet */}
          </div>
          <Link 
          href={'/materi'}
          className="z-[1] w-[26.9vw] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
            <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text font-legendaire text-[3vw] text-transparent text-center">
              Lihat Modul
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const KaryaAplikatifTab = () => {
  return (
    <div className="flex w-[71vw] flex-col place-content-center items-center justify-between max-sm:hidden lg:hidden">
      <div data-aos="fade-up" className="flex w-full flex-col items-center gap-[1vw]">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[5vw] text-transparent custom-shadow-text">
          {CONTENT[0].subtitle2}
        </h2>
        <p className="text-justify font-publica-sans text-[2.5vw]/[3.2vw] text-[#FFE5C7] max-w-[65vw] font-light drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle2desc}
        </p>
        <div className="mt-[2vw] flex w-full flex-col items-center justify-center gap-[2vw] lg:hidden">
          <Image
            className="absolute left-0 w-[50vw] translate-y-[5vw]"
            alt=""
            src={"/images/assets_beranda_chapter3_pitaungu_kiri.svg"}
            width={1965}
            height={880}
          />
          <Image
            className="absolute right-0 w-[50vw] translate-y-[5vw] "
            alt=""
            src={"/images/assets_beranda_chapter3_pitaungu_kanan.svg"}
            width={1965}
            height={880}
          />
          <div className="z-[1] h-[23.2vw] w-[39.7vw] rounded-[2.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
            {/* Tablet */}
          </div>
          <Link 
          href={'/materi'}
          className="z-[1] w-[26.9vw] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
            <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text font-legendaire text-[3vw] text-transparent text-center">
              Lihat Modul
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

const KesatriaMudaBerkaryaHP = () => {
  return (
    <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
      <div data-aos="fade-up" className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden">
        <h1 className="font-legendaire text-[5vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
          <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
            {CONTENT[0].subtitle1}
          </span>
        </h1>
        <p className="font-publica-sans text-[3.5vw]/[4.5vw] text-[#FFE5C7]  text-justify max-w-[72vw] font-light drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle1desc}
        </p>
      </div>
      <div data-aos="fade-up" className="flex w-full justify-center">
        <div className="z-[1] h-[33.3vw] w-[50vw] rounded-[4.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]">
          {/* Content */}
        </div>
        <div
        className="absolute z-[0] w-[25vw] translate-x-[-23vw] translate-y-[15vw]">
        <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'linear'
        }}
        >
        <Image
          className="w-full"
          alt=""
          src={"/images/assets_beranda_chapter3_gerigimerah_hp.svg"}
          width={100}
          height={100}
        />
        </motion.div>
        </div>
      </div>
      <Link 
      data-aos="fade-up"
      href={'/materi'}
      className="z-[1] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
        <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text font-legendaire text-[4vw] py-[0.5] text-transparent text-center px-[7vw]">
          Lihat Modul
        </p>
      </Link>
    </div>
  );
};

const KaryaAplikasiHP = () => {
  return (
    <div className="flex w-full flex-col place-content-center items-center gap-[2.5vw] sm:hidden">
      <div data-aos="fade-up" className="flex w-full flex-col place-content-center items-center gap-[1vw] text-center sm:hidden">
        <h1 className="font-legendaire text-[5vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
          <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
            {CONTENT[0].subtitle2}
          </span>
        </h1>
        <p className="text-justify font-publica-sans text-[3.5vw]/[4.5vw] text-[#FFE5C7] max-w-[72vw] font-light drop-shadow-[-10_4px_5px_rgba(0,0,0,0.7)]">
          {CONTENT[0].subtitle2desc}
        </p>
      </div>
      <div data-aos="fade-up" className="flex w-full justify-center">
        <div className="z-[1] h-[33.3vw] w-[50vw] rounded-[4.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]">
          {/* Content */}
        </div>
        <div
        className="absolute z-[0] w-[25vw] translate-x-[25vw] translate-y-[15vw]">
        <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'linear'
        }}
        >
        <Image
          className="w-full"
          alt=""
          src={"/images/assets_beranda_chapter3_gerigimerah_hp.svg"}
          width={100}
          height={100}
        />
        </motion.div>
      </div>
      </div>
      <Link 
      data-aos="fade-up"
      href={'/materi'}
      className="z-[1] rounded-[3.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
        <p className="bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text font-legendaire text-[4vw] py-[0.5] text-transparent text-center px-[7vw]">
          Lihat Modul
        </p>
      </Link>
    </div>
  );
};

const TransitiAtas = () => {
  return (
    <div className="min-h-[25vw] w-full">
      <div className="absolute w-full overflow-hidden">
        <Image
          className="absolute right-0 w-[17.5vw] translate-x-[5vw] translate-y-[-30.5vw]"
          alt=""
          src={"/images/assets_beranda_selamatdatangvideo_buluemas.svg"}
          width={100}
          height={100}
        />
        <Image
          className="w-[100vw]"
          alt=""
          src={"/images/assets_beranda_chapter3_kainunguatas.svg"}
          width={100}
          height={1000}
        />
        <Image
          className="absolute w-[10vw] translate-x-[65vw] translate-y-[-35vw] max-lg:hidden"
          alt=""
          src={"/images/assets_beranda_chapter3_burungemas.svg"}
          width={100}
          height={100}
        />
        <div className="absolute right-0 w-[17.5vw] translate-x-[5vw] translate-y-[-30.5vw] max-lg:hidden">
          <motion.div 
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'linear'
          }}
          >
        <Image
          className="w-full"
          alt=""
          src={"/images/assets_beranda_selamatdatangvideo_gerigimerah.svg"}
          width={100}
          height={1000}
        />
        </motion.div>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="z-[10] flex min-h-screen w-full flex-col place-content-center items-center gap-[5vw] px-[9.9vw] py-[0vw] pb-[10vw]">
      <JudulChapter />
      <JudulChapterHP />
      <KesatriaMudaBerkarya />
      <KesatriaMudaBerkaryaTab />
      <KesatriaMudaBerkaryaHP />
      <KaryaAplikatif />
      <KaryaAplikatifTab />
      <KaryaAplikasiHP />
    </div>
  );
};

export default function Chapter3() {
  return (
    <>
      <TransitiAtas />
      <Content />
    </>
  );
}
