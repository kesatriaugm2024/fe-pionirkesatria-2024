import Image from "next/image";

export default function Chapter1() {
  return (
    <div className="flex flex-col bg-pattern-ungu-kesat bg-top bg-repeat py-10">
      {/* Halo Kesatria Muda! */}
      <div className="container flex w-full flex-col items-center justify-center">
        <h1 className="text-center font-legendaire text-[5rem] text-white drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)] gradient-text-yellow-up-down">
          Halo Kesatria Muda!
        </h1>
        <h2 className="text-center font-legendaire text-5xl text-white drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)] gradient-text-yellow-up-down">
          Selamat Datang di Bagian I: Kesatria Merajut Karsa
        </h2>
        <p className="mx-20 py-10 text-center font-publica-sans text-2xl font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
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
      <div className="container my-20 flex flex-row items-center justify-center">
        <div className="relative flex w-full flex-row items-center rounded-3xl bg-[#FFE5C7] px-16 py-10">
          <div className="relative h-[271px] w-[387px] rounded-2xl bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
            <div className="absolute -right-10 -top-14">
              <Image
                src="/images/beranda/pita-box-ungu-1.png"
                alt=""
                width={387 / 2}
                height={271 / 2}
              />
            </div>
            <div className="absolute -bottom-[18px] -left-14">
              <Image
                src="/images/beranda/pita-box-ungu-2.png"
                alt=""
                width={387 / 2}
                height={271 / 2}
              />
            </div>
          </div>
          <div className="ml-10 w-1/2 flex-grow text-justify font-publica-sans text-2xl font-medium text-[#491772]">
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
          {/* BUTTON */}
          <div className="absolute -bottom-5 left-1/2 w-fit -translate-x-1/2 transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-10 py-2 font-legendaire text-3xl font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]">
            Lihat Modul
          </div>
        </div>
      </div>

      {/* SEJARAH TEKNIK */}
      <div className="container my-20 flex flex-row items-center justify-center">
        <div className="flex w-full flex-row items-center justify-between gap-10">
          <div className="relative flex h-[333px] w-[43vw] flex-col rounded-3xl bg-[#491772] p-8 pl-20">
            <h1 className="pb-5 font-legendaire text-6xl gradient-text-yellow-up-down">
              Sejarah Teknik
            </h1>
            <p className="font-publica-sans text-2xl font-light text-[#FFE5C7]">
              Fakultas teknik berdiri pada tahun 1949 ini menjadi salah satu
              fakultas tertua di Universitas Gadjah Mada. Sampai saat ini
              Fakultas Teknik terus mengalami berbagai penyesuaian dan
              perkembangan. <br /> Mari simak video berikut ini!
            </p>
            <div className="absolute -right-7 -top-4 flex flex-col">
              <Image
                src={"/images/beranda/kain-merah-sejarah-teknik.png"}
                alt=""
                width={387}
                height={271}
              />
            </div>

            <div className="absolute -bottom-10 -left-10">
              <Image
                src={"/images/beranda/bulu-kuning-1.svg"}
                alt=""
                width={110}
                height={100}
              />
            </div>
          </div>
          <div className="aspect-video h-[333px] rounded-3xl bg-gradient-to-b from-[#FFD23F] to-[#FFA514]"></div>
        </div>
      </div>
    </div>
  );
}
