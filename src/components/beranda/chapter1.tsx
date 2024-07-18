import Image from "next/image";

export default function Chapter1() {
  return (
    <>
      <Chapter1_Desktop className="hidden lg:block" />
      <Chapter1_Tablet className="hidden sm:block lg:hidden" />
    </>
  );
}

export function Chapter1_Desktop({ className }: { className?: string }) {
  return (
    <div
      className={`mb-[8vw] flex flex-col bg-transparent pt-[5vw] ${className}`}
    >
      {/* Halo Kesatria Muda! */}
      <div className="flex w-full flex-col items-center justify-center px-[5vw]">
        <h1 className="text-center font-legendaire text-[4vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Halo Kesatria Muda!
        </h1>
        <h2 className="text-center font-legendaire text-[3vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Selamat Datang di Bagian I: Kesatria Merajut Karsa
        </h2>
        <p className="mx-[10vw] text-center font-publica-sans text-[1.5vw]/[2vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
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
      <div className="mx-[9vw] my-[5vw] flex flex-row items-center justify-center">
        <div className="relative flex w-full flex-row items-center rounded-[3vw] bg-[#FFE5C7] px-[4vw] py-[3.5vw]">
          <div className="relative h-[13.5vw] w-[20vw] rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
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
          <div className="w-1/2 flex-grow pl-[3vw] text-justify font-publica-sans text-[1.2vw] font-medium text-[#491772]">
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
          <div className="absolute -bottom-[1.5vw] left-1/2 w-fit -translate-x-1/2 transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[3vw] py-[0.2vw] font-legendaire text-[2vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]">
            Lihat Modul
          </div>
        </div>
      </div>

      {/* SEJARAH TEKNIK */}
      <div className="mx-[9vw] my-[2vw] flex flex-row items-center justify-center">
        <div className="flex w-full flex-row items-center justify-between">
          {/* Text Sejarah Teknik */}
          <div className="relative flex h-[18.6vw] w-[40vw] flex-col rounded-[2vw] bg-[#491772] p-[1.3vw] pl-[5vw]">
            <h1 className="mb-[0.5vw] font-legendaire text-[3.4vw] gradient-text-yellow-up-down">
              Sejarah Teknik
            </h1>
            <p className="font-publica-sans text-[1.5vw]/[1.8vw] font-light text-[#FFE5C7]">
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
          <div className="relative h-[18.8vw] w-[32vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/oHzXxIKJJ70"
                title="Kenapa Anak Muda Suka Banget Istilah Baru?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <Image
              src={"/images/beranda/gerigi-merah.png"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[13.5vw] -right-[15vw] z-0 w-full scale-[0.35]"
            />
          </div>
        </div>
      </div>

      {/* SEJARAH KESATRIA */}
      <div className="mx-[9vw] mb-[7vw] mt-[2vw] flex flex-row items-center justify-center">
        <div className="relative flex h-[22vw] w-full flex-row items-center justify-between">
          {/* BOX */}
          <div className="relative z-10 h-[16.5vw] w-[28vw] self-end">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw]">
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
              src={"/images/beranda/gerigi-merah.png"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[13vw] -left-[12vw] z-0 w-full scale-[0.35]"
            />
          </div>
          {/* Tugu */}
          <div className="relative h-[0vw] w-[6vw] bg-red-250">
            <Image
              src={"/images/beranda/tugu-teknik-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[12vw] z-0 w-full scale-[3.3]"
            />
          </div>
          {/* Text Sejarah Kesatria */}
          <div className="relative z-10 flex h-[18vw] w-[40vw] flex-col p-[1.3vw]">
            <h1 className="mb-[0.5vw] text-right font-legendaire text-[3.4vw] gradient-text-yellow-up-down">
              Sejarah Kesatria
            </h1>
            <p className="text-justify font-publica-sans text-[1.5vw]/[1.8vw] font-light text-[#FFE5C7]">
              Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
              perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB
              Fakultas terbesar di Universitas Gadjah Mada memiliki segudang
              filosofi di dalamnya. Penasaran bagaimana PPSMB Kesatria dapat
              mempertahankan esensinya? Yuk, simak video berikut untuk memahami
              lebih dalam!
            </p>
          </div>
          <div className="absolute -bottom-[4vw] right-0 z-10 w-fit transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[3vw] py-[0.5vw] font-legendaire text-[1.7vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]">
            Lihat Selengkapnya
          </div>
        </div>
      </div>

      {/* Transisi Bawah*/}
      <div className="h-[0vh] w-full pb-[6vw]">
        <div className="absolute w-full -translate-y-[19vw]">
          <Image
            className="absolute z-[1] w-[100vw]"
            alt=""
            src={"/images/beranda/aset-kain-merah-1.png"}
            width={1920}
            height={1265}
          />
          <Image
            className="absolute -left-[12vw] -top-[32vw] z-0 w-full scale-[0.5]"
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
      className={`mb-[8vw] flex flex-col bg-transparent pt-[5vw] ${className}`}
    >
      {/* Halo Kesatria Muda! */}
      <div className="flex w-full flex-col items-center justify-center px-[5vw]">
        <h1 className="text-center font-legendaire text-[5vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Halo Kesatria Muda!
        </h1>
        <h2 className="pb-[2vw] pt-[0.5vw] text-center font-legendaire text-[6vw]/[6vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Selamat Datang di Bagian I: <br /> Kesatria Merajut Karsa
        </h2>
        <p className="mx-[8vw] text-center font-publica-sans text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
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
      <div className="mx-[12vw] my-[5vw] flex flex-row items-center justify-center">
        <div className="relative flex w-full flex-col items-center gap-[2vw] rounded-[3vw] bg-[#FFE5C7] px-[4vw] py-[4vw]">
          <div className="relative aspect-[4/3] w-1/2 rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
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
          <div className="flex-grow px-[3vw] py-[2vw] text-justify font-publica-sans text-[2.2vw]/[3vw] font-medium text-[#491772]">
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
          <div className="absolute -bottom-[1.5vw] left-1/2 w-fit -translate-x-1/2 transform cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[7vw] py-[0.5vw] font-legendaire text-[3vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]">
            Lihat Modul
          </div>
        </div>
      </div>

      {/* SEJARAH TEKNIK */}
      <div className="mx-[12vw] my-[10vw] flex flex-row items-center justify-center">
        <div className="flex w-full flex-col items-center justify-between gap-[4vw]">
          {/* Text Sejarah Teknik */}
          <div className="relative flex w-full flex-col rounded-[2vw] bg-[#491772] pb-[4vw] pl-[10vw] pr-[4vw] pt-[2vw]">
            <h1 className="mb-[0.5vw] font-legendaire text-[5vw] gradient-text-yellow-up-down">
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
              className="absolute -bottom-[134vw] -left-[35vw] w-full scale-[0.115]"
            />
          </div>
          {/* Box */}
          <div className="relative h-[23.3vw] w-[40vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/oHzXxIKJJ70"
                title="Kenapa Anak Muda Suka Banget Istilah Baru?"
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
              className="absolute -right-[22vw] -top-[1vw] z-0 w-full scale-[1.4]"
            />
            <Image
              src={"/images/beranda/fabric_top_fix.png"}
              alt=""
              width={413}
              height={395}
              className="absolute -left-[22vw] -top-[1vw] z-0 w-full scale-[1.4] -scale-x-[1.4] scale-y-[1.4]"
            />
          </div>
        </div>
      </div>

      {/* SEJARAH KESATRIA */}
      <div className="mx-[9vw] mb-[7vw] flex flex-row items-center justify-center py-[5vw]">
        <div className="relative flex w-full flex-col items-center justify-between gap-[2vw]">
          {/* Text Sejarah Kesatria */}
          <h2 className="z-10 pb-[2vw] pt-[0.5vw] text-center font-legendaire text-[5vw]/[4vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
            Sejarah Kesatria
          </h2>
          {/* Text */}
          <p className="z-10 mx-[8vw] text-center font-publica-sans text-[2.5vw]/[3.2vw] font-light text-[#FFE5C7] drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
            Tahukah kalian kalau PPSMB Kesatria pernah mengalami beberapa
            perubahan dari tahun ke tahun? PPSMB Kesatria sebagai PPSMB Fakultas
            terbesar di Universitas Gadjah Mada memiliki segudang filosofi di
            dalamnya. Penasaran bagaimana PPSMB Kesatria dapat mempertahankan
            esensinya? Yuk, simak video berikut untuk memahami lebih dalam!
          </p>
          {/* BOX */}
          <div className="relative h-[23.3vw] w-[40vw]">
            <div className="absolute left-0 top-0 z-10 h-full w-full rounded-[2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-[0.8vw]">
              <iframe
                className="h-full w-full rounded-[1.8vw]"
                src="https://www.youtube.com/embed/oHzXxIKJJ70"
                title="Kenapa Anak Muda Suka Banget Istilah Baru?"
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
              className="absolute -right-[22vw] -top-[1vw] z-0 w-full scale-[1.4]"
            />
            <Image
              src={"/images/beranda/fabric_top_fix.png"}
              alt=""
              width={413}
              height={395}
              className="absolute -left-[22vw] -top-[1vw] z-0 w-full scale-[1.4] -scale-x-[1.4] scale-y-[1.4]"
            />
          </div>

          <div className="z-10 my-[5vw] cursor-pointer rounded-full bg-gradient-to-b from-[#FFD23F] to-[#FFA514] px-[7vw] py-[0.5vw] font-legendaire text-[3vw] font-medium text-[#5E1675] hover:from-[#FFA514] hover:to-[#FFD23F]">
            Lihat Selengkapnya
          </div>
        </div>
      </div>

      {/* Transisi Bawah*/}
      <div className="h-[0vh] w-full pb-[18vw]">
        <div className="absolute w-full -translate-y-[40vw]">
          <Image
            className="absolute z-[1] w-[100vw]"
            alt=""
            src={"/images/beranda/asset-kain-ungu-2.png"}
            width={1920}
            height={1265}
          />
          <Image
            className="absolute -left-[0vw] top-[20vw] z-[2] w-full scale-[1]"
            alt=""
            src={"/images/beranda/asset-kain-merah-2.png"}
            width={2000}
            height={1000}
          />
          <div className="absolute w-[30vw] -translate-x-[10vw] translate-y-[45vw]">
            <Image
              src={"/images/beranda/tugu-teknik-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[5vw] z-0 w-full scale-[1]"
            />
          </div>
          <div className="absolute -bottom-[38vw] -right-[15vw] w-[30vw]">
            <Image
              src={"/images/beranda/gerigi-kuning.svg"}
              alt=""
              width={100}
              height={100}
              className="absolute -bottom-[0vw] z-0 w-full scale-[0.65]"
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
