'use client'
import Chapter1 from "@/components/beranda/chapter1";
import Chapter2 from "@/components/beranda/chapter2";
import Chapter3 from "@/components/beranda/chapter3";
import SelamatDatang from "@/components/beranda/selamatdatang";
import SelamatDatangVideo from "@/components/beranda/selamatdatangvideo";
import Footer from "@/components/layout/footer";
import { useEffect } from "react";
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi dalam milidetik
    });
  }, []);
  return (
    <main className="min-h-screen">
      <SelamatDatang />
      <SelamatDatangVideo />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Footer />
    </main>
  );
}
