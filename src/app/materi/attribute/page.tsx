import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";

const PRODI = [
  {
    name: "Hari ke 3",
    link: "12zubIS9OxEX3WIItJJKNUGeu6aBmsA-u",
    imgpath:
      "/images/covermodul/Pages from PIONIR FAKULTAS TEKNIK 2024 Hari Ke-3.pdf.png",
  },
  {
    name: "Hari ke 4",
    link: "17uTHDSMay6Y6HcsaswLbFJpvg6s7Y9Gk",
    imgpath:
      "/images/covermodul/Pages from PIONIR FAKULTAS TEKNIK 2024 Hari Ke-4.pdf.png",
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
    <div className="flex flex-col place-content-center items-center gap-[4vw] lg:gap-0 px-[10vw] lg:py-[5vw]">
      <div className="h-[10vw] w-full">
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-center font-legendaire text-[7vw]/[7vw] text-transparent lg:text-[5vw]/[5vw]">
          {title}
        </h1>
      </div>
      <div className="flex h-[30vw] max-lg:h-[50vw] w-[60vw] items-center justify-between">
        {prodi.map((item: any, idx: number) => (
          <Link
            href={"/materi/" + item.link}
            className="flex w-full items-center justify-center"
            key={idx}
          >
            <div className="h-[23vw] w-[13vw] flex-shrink-0 rounded-[1.7vw] border-[0.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] duration-100 hover:h-[27.8vw] hover:w-[15.6vw] max-lg:w-[20vw] max-lg:h-[40vw] max-lg:hover:h-[50vw] max-lg:hover:w-[25vw] z-[1]">
              <Image
                className="h-full w-full rounded-[1.7vw]"
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
    <main className="min-w-screen flex min-h-screen flex-col place-content-center items-center">
      <DepartemenCardDesktop title={"Attribute"} prodi={PRODI} />
      <Footer className={"absolute bottom-0 z-[0]"}/>
    </main>
  );
}
