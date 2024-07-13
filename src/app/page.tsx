import Chapter1 from "@/components/beranda/chapter1";
import Chapter2 from "@/components/beranda/chapter2";
import SelamatDatang from "@/components/beranda/selamatdatang";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SelamatDatang/>
      <Chapter1/>
      <Chapter2/>
    </main>
  );
}
