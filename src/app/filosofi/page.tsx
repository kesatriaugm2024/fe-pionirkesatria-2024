import Image from "next/image";

export function Filosofi_Desktop() {
  return (
    <div className="relative z-10 flex h-[100dvh] w-full flex-col items-center justify-center gap-[1vw] pb-[5vw]">
      <div className="z-10 flex w-full flex-col items-center justify-center">
        <h1 className="text-center font-legendaire text-[3vw]/[3vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Mengenal Pionir Kesatria
        </h1>
        <h2 className="text-center font-legendaire text-[4vw]/[4vw] drop-shadow-[0_4px_5px_rgba(0,0,0,1)] gradient-text-yellow-up-down">
          Gamadhira
        </h2>
      </div>
      <div className="relative my-[1vw] flex h-[12vw] w-[16vw] items-center justify-center rounded-[1.5vw] bg-gradient-to-t from-[#FFB7A7] to-[#FFE5C7]">
        <Image
          src={"/images/filosofi/logo-kesat.png"}
          alt="Gamadhira"
          width={1000}
          height={100}
          className="w-full translate-x-[0.5vw] translate-y-[-0.5vw] scale-[0.65] drop-shadow-[0_4px_5px_rgba(0,0,0,0.5)]"
        />
        <div className="absolute -right-[5.3vw] -top-[7vw] w-full">
          <Image
            src="/images/filosofi/pita-atas.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.5]"
          />
        </div>
        <div className="absolute -bottom-[5.6vw] -left-[7.05vw] w-full">
          <Image
            src="/images/filosofi/pita-bawah.svg"
            alt=""
            width={100}
            height={100}
            className="w-full scale-[0.3]"
          />
        </div>
      </div>

      <div className="flex h-[5vw] flex-row items-center justify-center gap-[2vw] rounded-[1.5vw] bg-[#4C1F72]/40 p-[0.2vw] px-[3vw]">
        <Image
          src={"/images/filosofi/plus-kuning.svg"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
        <Image
          src={"/images/filosofi/logo-1.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
        <Image
          src={"/images/filosofi/logo-2.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
        <Image
          src={"/images/filosofi/logo-3.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
        <Image
          src={"/images/filosofi/logo-4.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
        <Image
          src={"/images/filosofi/logo-5.png"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
        <Image
          src={"/images/filosofi/plus-kuning.svg"}
          alt="Gamadhira"
          width={1000}
          height={1000}
          className="w-full scale-[0.7]"
        />
      </div>
      <p className="z-10 mx-[15vw] text-center font-publica-sans text-[1.5vw]/[1.5vw] text-[#FFE5C7]">
        Gamadhira berasal dari kata "gamadi" yang berarti perjalanan dan kata
        "dhira" yang berarti kebijaksanaan, kecerdasan, dan keberagaman.
        Gamadhira layaknya burung merak yang identik dengan keberagaman,
        ketangguhan, dan keindahan. Dengan Gamadhira diharapkan Kesatria Muda
        memiliki perjalanan yang indah di Fakultas Teknik Universitas Gadjah
        Mada dalam keberagaman latar belakang. Sehingga dapat menghasilkan
        individu yang bijaksana, cerdas, tangguh dan juga kolaboratif antar
        sesama.
      </p>

      {/* ATAS */}
      <Image
        className="absolute -right-[5vw] -top-[6vw] z-[1] w-full scale-[0.9]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/aset-kain-merah-kanan.png"
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -left-[5vw] -top-[2vw] z-[1] w-full scale-[0.9]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/aset-kain-merah-kiri.png"
        width={1000}
        height={1000}
      />

      <Image
        className="absolute top-0 z-0 w-full"
        alt="Gamadhira"
        src="/images/filosofi/desktop/aset-kain-ungu-atas.png"
        width={1000}
        height={1000}
      />

      {/* Bawah */}
      <Image
        className="absolute -bottom-[0vw] -right-[0vw] z-[1] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/asset-kain-ungu-bawah.png"
        width={1000}
        height={1000}
      />
      <Image
        className="absolute -bottom-[0vw] -right-[0vw] z-[0] w-full scale-[1]"
        alt="Gamadhira"
        src="/images/filosofi/desktop/asset-kain-merah-bawah.png"
        width={1000}
        height={1000}
      />
    </div>
  );
}

export default function Filosofi() {
  return <Filosofi_Desktop />;
}
