import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Providers } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pionir Kesatria",
  description: "Kegiatan Penerimaan Mahasiswa Baru Fakultas Teknik UGM Tahun 2024",
  keywords: [
    "PPSMB",
    "Penerimaan Mahasiswa Baru",
    "Fakultas Teknik UGM",
    "Teknik UGM",
    "UGM 2024",
    "Pionir Kesatria",
    "Kegiatan Mahasiswa",
    "Orientasi Mahasiswa Baru",
    "Kampus UGM",
    "Yogyakarta"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo/logo_yellow.svg" sizes="any" />
      <body
        className={
          inter.className +
          " z-[-10] bg-pattern-ungu-kesat bg-[size:50%] bg-repeat sm:bg-[size:37%] lg:bg-[size:25%]"
        }
      >
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
