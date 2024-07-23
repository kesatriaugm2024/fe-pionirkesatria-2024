import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";

const PRODI = [
  {
    name: "Hari ke 3",
    link: "12zubIS9OxEX3WIItJJKNUGeu6aBmsA-u",
    imgpath:
      "/images/covermodul2/Pages from PIONIR FAKULTAS TEKNIK 2024 Hari Ke-3.pdf.png",
  },
  {
    name: "Hari ke 4",
    link: "17uTHDSMay6Y6HcsaswLbFJpvg6s7Y9Gk",
    imgpath:
      "/images/covermodul2/Pages from PIONIR FAKULTAS TEKNIK 2024 Hari Ke-4.pdf.png",
  },
];

function DepartemenCardDesktop({
  title,
  prodi,
}: {
  title: string;
  prodi: any[string];
}) {
  return (
    <div className="flex flex-col place-content-center items-center gap-[4vw] px-[10vw] sm:gap-0 lg:gap-0 lg:py-[5vw]">
      <div className="h-[10vw] w-full sm:h-fit">
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-center font-legendaire text-[10vw] text-transparent sm:text-[8vw] lg:text-[5vw]/[5vw]">
          {title}
        </h1>
      </div>
      <div className="flex h-[30vw] w-[70vw] items-center justify-between max-lg:h-[50vw] sm:h-[33vw] sm:w-[60vw] lg:h-[20vw] lg:w-[30vw]">
        {prodi.map((item: any, idx: number) => (
          <Link
            href={"/materi/" + item.link}
            className="flex w-full items-center justify-center"
            key={idx}
          >
            <div className="z-[1] h-[38.61vw] w-[27.3vw] flex-shrink-0 rounded-[1.7vw] border-[0.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] duration-100 hover:h-[42.7vw] hover:w-[30vw] sm:h-[29.7vw] sm:w-[21vw] sm:hover:h-[32.07vw] sm:hover:w-[22.68vw] lg:h-[16.33vw] lg:w-[11.55vw] lg:rounded-[0.5vw] lg:hover:h-[17.226vw] lg:hover:w-[12.18vw]">
              <Image
                className="h-full w-full rounded-[1.7vw] lg:rounded-[0.5vw]"
                alt=""
                src={item.imgpath}
                width={1000}
                height={1000}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AttributePage() {
  return (
    <main className="min-w-screen flex h-[100dvh] min-h-screen flex-col items-center justify-center">
      <div className="mb-[20vw] lg:mb-[0vw]">
        <DepartemenCardDesktop title={"Attribute"} prodi={PRODI} />
      </div>
      <Footer
        className={
          "fixed bottom-0 z-[10] -translate-y-[50vw] sm:-translate-y-[10vw] lg:absolute lg:translate-y-[10vw]"
        }
      />
    </main>
  );
}
