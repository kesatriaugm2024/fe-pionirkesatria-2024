import Image from "next/image";
import Link from "next/link";
import { motion } from "framer";

export default function Chapter1() {
  return (
    <>
      <Chapter1_Desktop className="hidden lg:block" />
      <Chapter1_Tablet className="hidden sm:block lg:hidden" />
      <Chapter1_Mobile className="block sm:hidden" />
    </>
  );
}

export function Chapter1_Desktop({ className }: { className?: string }) {
  return (
    <div
      className={`mb-[8vw] flex flex-col bg-transparent pt-[5vw] ${className} overflow-x-clip`}
    >
      {/* Halo Kesatria Muda! */}
      <div
        data-aos="fade-up"
        className="flex w-full flex-col items-center justify-center px-[5vw]"
      >
        <h1 className="custom-shadow-text z-20 text-center font-legendaire text-[4vw] gradient-text-yellow-up-down">
          Halo Kesatria Muda!
        </h1>
        <h2 className="custom-shadow-text z-20 text-center font-legendaire text-[3vw] gradient-text-yellow-up-down">
          Selamat Datang di Bagian I: Kesatria Merajut Karsa
        </h2>
        <p className="z-20 mx-[10vw] text-justify font-publica-sans text-[1.5vw]/[2vw] font-light text-[#FFE5C7] drop-shadow-[0_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
          Dalam mengenal Fakultas Teknik UGM sebagai lingkungan baru bagi
          Kesatria Muda yang akan menapaki dunia perkuliahan, tentunya
          dibutuhkan pengetahuan tentang apa saja yang ada di Fakultas Teknik.
          Selain mengenal lingkungan baru, Kesatria Muda juga diharapkan dapat
          mulai mengenal diri yang akan menunjukkan pribadi Kesatria Muda di
          lingkungan Fakultas Teknik UGM. Selain itu, disini juga terdapat 2
          video menarik yaitu “Sejarah Teknik” dan “Sejarah Kesatria” yang wajib
          ditonton sebelum kita bertemu secara offline di Pionir Kesatria nanti.
        </p>
      </div>

      {/* PERSONAL BRANDING */}
      <div
        data-aos="fade-up"
        className="mx-[9vw] my-[10vw] flex flex-row items-center justify-center"
      >
        <div className="relative flex w-full flex-row items-center px-[0vw] py-[3.5vw]">
          <div className="relative z-10 ml-[4vw] h-[13.5vw] w-[20vw] rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.4vw_0.4vw_rgba(0,0,0,0.2)]">
            <div className="font-legendaire text-[5vw]/[5vw] text-center flex items-center w-full h-full bg-gradient-to-b from-purple-250 to-purple-50 bg-clip-text text-transparent">
              Personal Branding
              {/* Input Gambar disini */}
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
          <div className="z-10 mr-[4vw] w-1/2 flex-grow pl-[3vw] text-justify font-publica-sans text-[1.2vw] font-medium text-[#491772]">
            Personal Branding dapat diartikan sebagai sebuah proses pengenalan
            potensi yang dimiliki seorang individu dalam masyarakat. Personal
            branding meliputi aspek seperti kepribadian, kemampuan, kekuatan
            diri, nilai, kelebihan, serta persepsi positif yang ada dalam diri
            dan dapat dituangkan dalam bentuk curriculum vitae (CV) atau resume.
            Get to Know FT UGM merupakan rangkaian pengenalan lingkungan
            Fakultas Teknik UGM yang meliputi pengetahuan umum tentang FT UGM.
            Pengetahuan umum ini berupa Sejarah berdirinya FT UGM, Kiprah FT UGM
            dari masa perjuangan hingga kini, serta perkenalan departemen dan
            prodi yang ada di FT UGM saat ini.
          </div>
          <Link
            href={"/materi/1w6AQyjaFXOSQpm_ZQe3RHZkU_80uNUHb"}
            className="absolute -bottom-[1.5vw] left-1/2 z-10 w-fit -translate-x-1/2 transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[3vw] py-[0.2vw] font-legendaire text-[2vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]"
          >
            Lihat Modul
          </Link>
          <div className="absolute z-[1] h-full w-full rounded-[3vw] bg-[#FFE5C7] drop-shadow-[0_0.1vw_1vw_rgba(0,0,0,0.8)]"></div>
          {/* Dekor Pita Kiri */}
          <div className="absolute -left-[15vw] -top-[22vw] z-[0] w-full drop-shadow-[0_1vw_2vw_rgba(0,0,0,0.6)]">
            <Image
              src={"/images/beranda/asset-pitabox-kiriatas-2.png"}
              alt=""
              width={1231}
              height={771}
              className="w-full scale-[0.8]"
            />
          </div>
          <div className="absolute -left-[30vw] -top-[16.8vw] z-[2] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kiriatas-1.png"}
              alt=""
              width={1231}
              height={771}
              className="w-full scale-[0.38]"
            />
          </div>
          {/* Dekor Pita Kanan */}
          <div className="absolute -right-[16vw] -top-[7vw] z-[0] w-full drop-shadow-[0_1vw_2vw_rgba(0,0,0,0.6)]">
            <Image
              src={"/images/beranda/asset-pitabox-kananbawah-2.png"}
              alt=""
              width={1000}
              height={500}
              className="w-full scale-[0.8]"
            />
          </div>
          <div className="absolute -bottom-[16.8vw] -right-[31vw] z-[2] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kananbawah-1.png"}
              alt=""
              width={500}
              height={500}
              className="w-full scale-[0.38]"
            />
          </div>
        </div>
      </div>

      {/* SEJARAH TEKNIK */}
      <div className="mx-[9vw] my-[2vw] flex flex-row items-center justify-center">
        <div className="flex w-full flex-row items-center justify-between">
          {/* Text Sejarah Teknik */}
          <div
            data-aos="fade-right"
            className="relative flex h-[19vw] w-[40vw] flex-col rounded-[2vw] bg-[#491772] p-[1.3vw] pl-[5vw] drop-shadow-[0_0.1vw_1vw_rgba(0,0,0,0.5)]"
          >
            <h1 className="custom-shadow-text mb-[0.5vw] font-legendaire text-[3.4vw] gradient-text-yellow-up-down">
              Sejarah Teknik
            </h1>
            <p className="pr-[1.5vw] text-justify font-publica-sans text-[1.5vw]/[1.8vw] font-light text-[#FFE5C7]">
              Fakultas teknik berdiri pada tahun 1949 ini menjadi salah satu
              fakultas tertua di Universitas Gadjah Mada. Sampai saat ini
              Fakultas Teknik terus mengalami berbagai penyesuaian dan
              perkembangan. Mari simak video berikut ini!
            </p>
            <Image
              src={"/images/beranda/kain-merah-sejarah-teknik.png"}
              alt=""
              width={1000}
              height={1000}
              className="absolute -right-[11vw] -top-[4.6vw] w-full scale-[0.5]"
            />
            <Image
              src={"/images/beranda/bulu-kuning-1.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[69vw] -left-[20vw] w-full scale-[0.15]"
            />
          </div>
          {/* Box */}
          <div data-aos="fade-left" className="relative h-[18.8vw] w-[32vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw] drop-shadow-[0_1vw_2vw_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/XrgvvCpavbU"
                title="[GET TO KNOW TEKNIK : SEJARAH TEKNIK]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -bottom-[13.5vw] -right-[15vw] z-0 w-full scale-[0.35]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              >
                <Image
                  src={"/images/beranda/gerigi-merah.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* SEJARAH KESATRIA */}
      <div className="mx-[9vw] mb-[7vw] mt-[2vw] flex flex-row items-center justify-center">
        <div className="relative flex h-[22vw] w-full flex-row items-center justify-between">
          {/* BOX */}
          <div
            data-aos="fade-right"
            className="relative z-10 h-[16.5vw] w-[28vw] self-end"
          >
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw] drop-shadow-[0_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/ejwpfohGQPg"
                title="[SEJARAH KESATRIA]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute -bottom-[13vw] -left-[12vw] z-0 w-full scale-[0.35]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              >
                <Image
                  src={"/images/beranda/gerigi-merah.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
          {/* Tugu */}
          <div
            className="relative h-[0vw] w-[6vw] bg-red-250"
            data-aos="fade-up"
          >
            <Image
              src={"/images/beranda/tugu-teknik-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[12vw] z-0 w-full scale-[3.3]"
            />
          </div>
          {/* Text Sejarah Kesatria */}
          <div
            data-aos="fade-left"
            className="relative z-10 flex h-[18vw] w-[40vw] flex-col p-[1.3vw]"
          >
            <h1 className="custom-shadow-text mb-[0.5vw] text-right font-legendaire text-[3.4vw] gradient-text-yellow-up-down">
              Sejarah Kesatria
            </h1>
            <p className="text-justify font-publica-sans text-[1.5vw]/[1.8vw] font-light text-[#FFE5C7] drop-shadow-[0_0.4vw_0.2vw_rgba(0,0,0,0.6)]">
              Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
              perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB
              Fakultas terbesar di Universitas Gadjah Mada memiliki segudang
              filosofi di dalamnya. Penasaran bagaimana PPSMB Kesatria dapat
              mempertahankan esensinya? Yuk, simak video berikut untuk memahami
              lebih dalam!
            </p>
            <div className="flex w-full justify-end py-[0.5vw]">
              <Link
                href={"/filosofi"}
                className="-bottom-[4vw] right-0 z-10 w-fit transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[3vw] py-[0.5vw] font-legendaire text-[1.7vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Transisi Bawah*/}
      <div className="h-[0vh] w-full pb-[6vw]">
        <div className="absolute w-full -translate-y-[19vw]">
          <Image
            className="absolute z-[1] w-[100vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]"
            alt=""
            src={"/images/beranda/aset-kain-merah-1.png"}
            width={1920}
            height={1265}
          />
          <Image
            className="absolute -left-[12vw] -top-[32vw] z-0 w-full scale-[0.5] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]"
            alt=""
            src={"/images/beranda/aset-kain-ungu-1.svg"}
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}

export function Chapter1_Tablet({ className }: { className?: string }) {
  return (
    <div
      className={`mb-[8vw] flex flex-col overflow-x-hidden bg-transparent pt-[5vw] ${className}`}
    >
      {/* Halo Kesatria Muda! */}
      <div
        data-aos="fade-up"
        className="flex w-full flex-col items-center justify-center px-[5vw]"
      >
        <h1 className="text-center font-legendaire text-[5vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Halo Kesatria Muda!
        </h1>
        <h2 className="pb-[2vw] pt-[0.5vw] text-center font-legendaire text-[6vw]/[6vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Selamat Datang di Bagian I: <br /> Kesatria Merajut Karsa
        </h2>
        <p className="mx-[8vw] text-justify font-publica-sans text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
          Dalam mengenal Fakultas Teknik UGM sebagai lingkungan baru bagi
          Kesatria Muda yang akan menapaki dunia perkuliahan, tentunya
          dibutuhkan pengetahuan tentang apa saja yang ada di Fakultas Teknik.
          Selain mengenal lingkungan baru, Kesatria Muda juga diharapkan dapat
          mulai mengenal diri yang akan menunjukkan pribadi Kesatria Muda di
          lingkungan Fakultas Teknik UGM. Selain itu, disini juga terdapat 2
          video menarik yaitu “Sejarah Teknik” dan “Sejarah Kesatria” yang wajib
          ditonton sebelum kita bertemu secara offline di Pionir Kesatria nanti.
        </p>
      </div>

      {/* PERSONAL BRANDING */}
      <div
        data-aos="fade-up"
        className="mx-[12vw] my-[10vw] flex flex-row items-center justify-center"
      >
        <div className="relative flex w-full flex-col items-center rounded-[3vw] px-[4vw] py-[2vw]">
          <div className="relative z-[10] mt-[5vw] aspect-[4/3] w-1/2 rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.4vw_0.4vw_rgba(0,0,0,0.2)]">
            <div className="font-legendaire text-[7vw]/[7vw] text-center flex items-center w-full h-full bg-gradient-to-b from-purple-250 to-purple-50 bg-clip-text text-transparent">
                Personal Branding
                {/* Input Gambar disini */}
            </div>
            <div className="absolute -right-[12vw] -top-[13vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-1.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
            <div className="absolute -bottom-[10vw] -left-[13.7vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-2.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.5]"
              />
            </div>
          </div>
          <div className="z-[10] flex-grow px-[3vw] py-[2vw] text-justify font-publica-sans text-[2.2vw]/[3vw] font-medium text-[#491772]">
            Personal Branding dapat diartikan sebagai sebuah proses pengenalan
            potensi yang dimiliki seorang individu dalam masyarakat. Personal
            branding meliputi aspek seperti kepribadian, kemampuan, kekuatan
            diri, nilai, kelebihan, serta persepsi positif yang ada dalam diri
            dan dapat dituangkan dalam bentuk curriculum vitae (CV) atau resume.
            Get to Know FT UGM merupakan rangkaian pengenalan lingkungan
            Fakultas Teknik UGM yang meliputi pengetahuan umum tentang FT UGM.
            Pengetahuan umum ini berupa Sejarah berdirinya FT UGM, Kiprah FT UGM
            dari masa perjuangan hingga kini, serta perkenalan departemen dan
            prodi yang ada di FT UGM saat ini.
          </div>

          <Link
            className="absolute -bottom-[4vw] left-1/2 z-[10] w-fit -translate-x-1/2 transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[7vw] py-[0.5vw] font-legendaire text-[3vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]"
            href="/materi/1w6AQyjaFXOSQpm_ZQe3RHZkU_80uNUHb"
          >
            Lihat Modul
          </Link>

          <div className="absolute z-[1] h-full w-full rounded-[3vw] bg-[#FFE5C7] drop-shadow-[0_0.1vw_1vw_rgba(0,0,0,0.8)]"></div>
          {/* Dekor Pita Kiri */}
          <div className="absolute -left-[15vw] -top-[17.4vw] z-[0] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kiriatas-2.png"}
              alt=""
              width={1231}
              height={771}
              className="w-full scale-[0.8]"
            />
          </div>
          <div className="absolute -left-[28.7vw] -top-[12.6vw] z-[2] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kiriatas-1.png"}
              alt=""
              width={1231}
              height={771}
              className="w-full scale-[0.38]"
            />
          </div>
          {/* Dekor Pita Kanan */}
          <div className="absolute -bottom-[22vw] -right-[20vw] z-[0] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kananbawah-2.png"}
              alt=""
              width={1000}
              height={500}
              className="w-full scale-[0.8]"
            />
          </div>
          <div className="absolute -bottom-[17.3vw] -right-[34vw] z-[2] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kananbawah-1.png"}
              alt=""
              width={500}
              height={500}
              className="w-full scale-[0.38]"
            />
          </div>
        </div>
      </div>

      {/* SEJARAH TEKNIK */}
      <div
        data-aos="fade-up"
        className="mx-[12vw] my-[10vw] flex flex-row items-center justify-center"
      >
        <div className="flex w-full flex-col items-center justify-between gap-[4vw]">
          {/* Text Sejarah Teknik */}
          <div className="relative flex w-full flex-col rounded-[2vw] bg-[#491772] pb-[4vw] pl-[10vw] pr-[4vw] pt-[2vw] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
            <h1 className="custom-shadow-text mb-[0.5vw] font-legendaire text-[5vw] gradient-text-yellow-up-down">
              Sejarah Teknik
            </h1>
            <p className="font-publica-sans text-[2.5vw]/[3vw] font-light text-[#FFE5C7]">
              Fakultas teknik berdiri pada tahun 1949 ini menjadi salah satu
              fakultas tertua di Universitas Gadjah Mada. Sampai saat ini
              Fakultas Teknik terus mengalami berbagai penyesuaian dan
              perkembangan. Mari simak video berikut ini!
            </p>
            <Image
              src={"/images/beranda/kain-merah-sejarah-teknik.png"}
              alt=""
              width={1000}
              height={1000}
              className="absolute -right-[20vw] -top-[8.8vw] w-full scale-[0.5]"
            />
            <Image
              src={"/images/beranda/bulu-kuning-1.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[134vw] -left-[35vw] w-full scale-[0.115] drop-shadow-[0_1vw_1vw_rgba(0,0,0,1)]"
            />
          </div>
          {/* Box */}
          <div className="relative h-[23.3vw] w-[40vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw] drop-shadow-[0_0.4vw_1vw_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/XrgvvCpavbU"
                title="[GET TO KNOW TEKNIK : SEJARAH TEKNIK]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <Image
              src={"/images/beranda/fabric_top_fix.png"}
              alt=""
              width={413}
              height={395}
              className="absolute -right-[22vw] -top-[1vw] z-0 w-full scale-[1.4] drop-shadow-[0_0.4vw_1vw_rgba(0,0,0,0.4)]"
            />
            <Image
              src={"/images/beranda/fabric_top_fix.png"}
              alt=""
              width={413}
              height={395}
              className="absolute -left-[22vw] -top-[1vw] z-0 w-full scale-[1.4] -scale-x-[1.4] scale-y-[1.4] drop-shadow-[0_0.4vw_1vw_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* SEJARAH KESATRIA */}
      <div
        data-aos="fade-up"
        className="mx-[9vw] mb-[7vw] flex flex-row items-center justify-center py-[5vw]"
      >
        <div className="relative flex w-full flex-col items-center justify-between gap-[2vw]">
          {/* Text Sejarah Kesatria */}
          <h2 className="z-10 pb-[2vw] pt-[0.5vw] text-center font-legendaire text-[5vw]/[4vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
            Sejarah Kesatria
          </h2>
          {/* Text */}
          <p className="z-10 mx-[8vw] text-justify font-publica-sans text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
            Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
            perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB Fakultas
            terbesar di Universitas Gadjah Mada memiliki segudang filosofi di
            dalamnya. Penasaran bagaimana PPSMB Kesatria dapat mempertahankan
            esensinya? Yuk, simak video berikut untuk memahami lebih dalam!
          </p>
          {/* BOX */}
          <div className="relative h-[23.3vw] w-[40vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw] drop-shadow-[0_0.4vw_1vw_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/ejwpfohGQPg"
                title="[SEJARAH KESATRIA]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <Image
              src={"/images/beranda/fabric_top_fix.png"}
              alt=""
              width={413}
              height={395}
              className="absolute -right-[22vw] -top-[1vw] z-0 w-full scale-[1.4] drop-shadow-[0_0.4vw_1vw_rgba(0,0,0,0.4)]"
            />
            <Image
              src={"/images/beranda/fabric_top_fix.png"}
              alt=""
              width={413}
              height={395}
              className="absolute -left-[22vw] -top-[1vw] z-0 w-full scale-[1.4] -scale-x-[1.4] scale-y-[1.4] drop-shadow-[0_0.4vw_1vw_rgba(0,0,0,0.4)]"
            />
          </div>

          <Link
            href={"/filosofi"}
            className="z-10 my-[5vw] cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[7vw] py-[0.5vw] font-legendaire text-[3vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>

      {/* Transisi Bawah*/}
      <div className="h-[0vh] w-full overflow-x-hidden pb-[18vw]">
        <div className="absolute w-full -translate-y-[30vw]">
          <Image
            className="absolute z-[1] w-[100vw] translate-y-[30vw] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]"
            alt=""
            src={"/images/beranda/asset-kain-ungu-2.png"}
            width={1920}
            height={1265}
          />
          <Image
            className="absolute -left-[0vw] top-[20vw] z-[2] w-full scale-[1] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]"
            alt=""
            src={"/images/beranda/asset-kain-merah-2.png"}
            width={2000}
            height={1000}
          />
          <div className="absolute w-[30vw]" data-aos="fade-up">
            <Image
              src={"/images/beranda/tugu-teknik-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[50vw] -left-[7vw] z-0 w-full scale-[1]"
            />
          </div>
          <div className="absolute w-[1vw]" data-aos="fade-up">
            <Image
              src={"/images/beranda/gerigi-kuning-12.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[25vw] -right-[95.5vw] z-0 w-full scale-[8] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]"
            />
          </div>
          <div className="absolute -bottom-[50vw] right-[3vw] w-[30vw]">
            <Image
              src={"/images/beranda/gerigi-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[0vw] z-0 w-full scale-[1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Chapter1_Mobile({ className }: { className?: string }) {
  return (
    <div
      className={`mb-[0vw] flex flex-col overflow-x-hidden bg-transparent pt-[5vw] ${className}`}
    >
      {/* Halo Kesatria Muda! */}
      <div
        data-aos="fade-up"
        className="flex w-full flex-col items-center justify-center px-[5vw]"
      >
        <h1 className="text-center font-legendaire text-[5vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Halo Kesatria Muda!
        </h1>
        <h2 className="pb-[2vw] pt-[0.5vw] text-center font-legendaire text-[6vw]/[6vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Selamat Datang di Bagian I: <br /> Kesatria Merajut Karsa
        </h2>
        <p className="mx-[8vw] py-[2vw] text-justify font-publica-sans text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
          Dalam mengenal Fakultas Teknik UGM sebagai lingkungan baru bagi
          Kesatria Muda yang akan menapaki dunia perkuliahan, tentunya
          dibutuhkan pengetahuan tentang apa saja yang ada di Fakultas Teknik.
          Selain mengenal lingkungan baru, Kesatria Muda juga diharapkan dapat
          mulai mengenal diri yang akan menunjukkan pribadi Kesatria Muda di
          lingkungan Fakultas Teknik UGM. Selain itu, disini juga terdapat 2
          video menarik yaitu “Sejarah Teknik” dan “Sejarah Kesatria” yang wajib
          ditonton sebelum kita bertemu secara offline di Pionir Kesatria nanti.
        </p>
      </div>

      {/* PERSONAL BRANDING */}
      <div
        data-aos="fade-up"
        className="mx-[15vw] my-[10vw] flex flex-row items-center justify-center"
      >
        <div className="relative flex w-full flex-col items-center gap-[2vw] rounded-[5vw] px-[7vw] py-[4vw]">
          <div className="relative z-10 mt-[8vw] aspect-[4/3] w-3/4 rounded-[4vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.2)]">
            <div className="font-legendaire text-[5vw]/[5vw] place-content-center flex items-center w-full h-full bg-gradient-to-b from-purple-250 to-purple-50 bg-clip-text text-transparent">
                Personal Branding
                {/* Input Gambar disini */}
            </div>
            <div className="absolute -right-[13.6vw] -top-[16vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-1.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.6]"
              />
            </div>
            <div className="absolute -bottom-[14vw] -left-[17.7vw] w-full">
              <Image
                src="/images/beranda/pita-box-ungu-2.png"
                alt=""
                width={100}
                height={100}
                className="w-full scale-[0.4]"
              />
            </div>
          </div>
          <div className="z-10 flex-grow px-[2vw] py-[2vw] text-justify font-publica-sans text-[2.8vw]/[3.8vw] font-medium text-[#491772]">
            Personal Branding dapat diartikan sebagai sebuah proses pengenalan
            potensi yang dimiliki seorang individu dalam masyarakat. Personal
            branding meliputi aspek seperti kepribadian, kemampuan, kekuatan
            diri, nilai, kelebihan, serta persepsi positif yang ada dalam diri
            dan dapat dituangkan dalam bentuk curriculum vitae (CV) atau resume.
            Get to Know FT UGM merupakan rangkaian pengenalan lingkungan
            Fakultas Teknik UGM yang meliputi pengetahuan umum tentang FT UGM.
            Pengetahuan umum ini berupa Sejarah berdirinya FT UGM, Kiprah FT UGM
            dari masa perjuangan hingga kini, serta perkenalan departemen dan
            prodi yang ada di FT UGM saat ini.
          </div>
          <Link
            href={"/materi/1w6AQyjaFXOSQpm_ZQe3RHZkU_80uNUHb"}
            className="absolute -bottom-[7vw] z-10 transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[7vw] py-[0.5vw] font-legendaire text-[5vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]"
          >
            Lihat Modul
          </Link>
          <div className="absolute z-[1] h-full w-full rounded-[5vw] bg-[#FFE5C7] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]"></div>
          {/* Dekor Pita Kiri */}
          <div className="absolute -left-[10vw] -top-[13vw] z-[0] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kiriatas-2.png"}
              alt=""
              width={1231}
              height={771}
              className="w-full scale-[1.04]"
            />
          </div>
          <div className="absolute -left-[26.5vw] -top-[9.8vw] z-[2] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kiriatas-1.png"}
              alt=""
              width={1231}
              height={771}
              className="w-full scale-[0.494]"
            />
          </div>
          {/* Dekor Pita Kanan */}
          <div className="absolute -bottom-[22vw] -right-[10vw] z-[0] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kananbawah-2.png"}
              alt=""
              width={1000}
              height={500}
              className="w-full scale-[1.04]"
            />
          </div>
          <div className="absolute -bottom-[19vw] -right-[26.5vw] z-[2] w-full">
            <Image
              src={"/images/beranda/asset-pitabox-kananbawah-1.png"}
              alt=""
              width={500}
              height={500}
              className="w-full scale-[0.494]"
            />
          </div>
        </div>
      </div>

      {/* SEJARAH TEKNIK */}
      <div
        data-aos="fade-up"
        className="mx-[15vw] my-[10vw] flex flex-row items-center justify-center"
      >
        <div className="flex w-full flex-col items-center justify-between gap-[4vw]">
          {/* Text Sejarah Teknik */}
          <div className="relative flex w-full flex-col rounded-[5vw] bg-[#491772] pb-[4vw] pl-[7vw] pr-[4vw] pt-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]">
            <h1 className="mb-[0.5vw] text-center font-legendaire text-[7vw] gradient-text-yellow-up-down">
              Sejarah Teknik
            </h1>
            <p className="text-justify font-publica-sans text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7]">
              Fakultas teknik berdiri pada tahun 1949 ini menjadi salah satu
              fakultas tertua di Universitas Gadjah Mada. Sampai saat ini
              Fakultas Teknik terus mengalami berbagai penyesuaian dan
              perkembangan. Mari simak video berikut ini!
            </p>

            <Image
              src={"/images/beranda/bulu-kuning-1.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[115vw] -left-[34vw] w-full scale-[0.15] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]"
            />
          </div>
          {/* Box */}
          <div className="relative h-[41.2vw] w-[70vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full rounded-[4vw]"
                src="https://www.youtube.com/embed/XrgvvCpavbU"
                title="[GET TO KNOW TEKNIK : SEJARAH TEKNIK]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute z-0 w-full translate-x-[30vw] scale-[0.35]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              >
                <Image
                  src={"/images/beranda/gerigi-merah.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* SEJARAH KESATRIA */}
      <div
        data-aos="fade-up"
        className="mx-[8vw] mb-[16vw] flex flex-row items-center justify-center py-[5vw]"
      >
        <div className="relative flex w-full flex-col items-center justify-between gap-[0vw]">
          {/* Text Sejarah Kesatria */}
          <h2 className="z-10 text-center font-legendaire text-[7vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
            Sejarah Kesatria
          </h2>
          {/* Text */}
          <p className="z-10 mx-[8vw] mb-[4vw] text-justify font-publica-sans text-[3.5vw]/[4.5vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
            Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
            perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB Fakultas
            terbesar di Universitas Gadjah Mada memiliki segudang filosofi di
            dalamnya. Penasaran bagaimana PPSMB Kesatria dapat mempertahankan
            esensinya? Yuk, simak video berikut untuk memahami lebih dalam!
          </p>
          {/* BOX */}
          <div className="relative h-[41.2vw] w-[70vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[2vw] drop-shadow-[0_0.4vw_2vw_rgba(0,0,0,0.6)]">
              <iframe
                className="h-full w-full rounded-[4vw]"
                src="https://www.youtube.com/embed/ejwpfohGQPg"
                title="[SEJARAH KESATRIA]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute z-0 w-full -translate-x-[30vw] scale-[0.35]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                }}
              >
                <Image
                  src={"/images/beranda/gerigi-merah.png"}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>

          <Link
            href={"/filosofi"}
            className="z-20 my-[5vw] cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[7vw] py-[0.5vw] font-legendaire text-[4vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]"
          >
            Lihat Selengkapnya
          </Link>
        </div>
      </div>

      {/* Transisi Bawah*/}
      <div className="h-[0vh] w-full overflow-x-hidden pb-[18vw]">
        <div className="absolute w-full -translate-y-[30vw]">
          <Image
            className="absolute z-[0] w-[100vw] translate-y-[15vw]"
            alt=""
            src={"/images/beranda/asset-kain-ungu-3.png"}
            width={1920}
            height={1265}
          />
          <Image
            className="absolute -left-[0vw] top-[10vw] z-[2] w-full scale-[1]"
            alt=""
            src={"/images/beranda/asset-kain-merah-3.png"}
            width={2000}
            height={1000}
          />
          <div className="absolute w-[30vw]" data-aos="fade-up">
            <Image
              src={"/images/beranda/tugu-teknik-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[50vw] -right-[60vw] z-[1] w-full scale-[1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
