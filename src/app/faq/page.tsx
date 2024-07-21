"use client";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import {
  listPertanyaanUmum,
  listPertanyaanMateri,
} from "@/app/faq/listPertanyaan";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DesignGuidelinePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  const checkSearchResult = (input: string) => {
    let questionUmum: any[] = [];
    let questionMateri: any[] = [];
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(input.toUpperCase())) {
        questionUmum.push(item);
      }
    });
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(input.toUpperCase())) {
        questionMateri.push(item);
      }
    });
    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
    checkSearchResult(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult(userInput);
    }
  };

  return (
    <main className="bg-pattern-krem-kesat bg-[size:40%] bg-repeat pb-[50vw] sm:bg-[size:30%] sm:pb-[0vw] sm:pt-[8vw] lg:bg-[size:15%] lg:pb-[0vw] lg:pt-[0vw]">
      <FAQ_Desktop
        className="hidden lg:block"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        userInput={userInput}
        foundPertanyaanUmum={foundPertanyaanUmum}
        foundPertanyaanMateri={foundPertanyaanMateri}
      />
      <FAQ_Tablet
        className="hidden sm:block lg:hidden"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        userInput={userInput}
        foundPertanyaanUmum={foundPertanyaanUmum}
        foundPertanyaanMateri={foundPertanyaanMateri}
      />
      <FAQ_Mobile
        className="block sm:hidden"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        userInput={userInput}
        foundPertanyaanUmum={foundPertanyaanUmum}
        foundPertanyaanMateri={foundPertanyaanMateri}
      />

      {/* Footer Manual Mobile */}
      <div className={"fixed bottom-0 z-20 w-full sm:hidden"}>
        <Image
          className="w-full"
          alt=""
          src={"/images/footer-HP.svg"}
          width={2000}
          height={100}
        />
      </div>

      <div className={"bottom-0 hidden w-full sm:block"}>
        <Image
          className="w-full"
          alt=""
          src={"/images/background/footer-tab-desktop-agenda.png"}
          width={2000}
          height={2100}
        />
      </div>
    </main>
  );
}

const ItemPertanyaan = ({
  question,
  answer,
}: {
  question: any;
  answer: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`ml-[4vw] mr-[4vw] flex w-[88vw] cursor-pointer flex-col items-start rounded-[1.5vw] bg-gradient-to-r from-[#B22635] to-[#EA5571] duration-200 sm:ml-0 sm:mr-0 sm:w-[90vw] lg:ml-0 lg:mr-0 lg:w-[80vw] ${
        isOpen
          ? "h-[35vw] sm:h-[19vw] lg:h-[8.5vw]"
          : "h-[16vw] sm:h-[9vw] lg:h-[3vw]"
      }`}
      onClick={handleClick}
    >
      <div className="flex h-[16vw] w-full shrink-0 items-center justify-between rounded-[1.5vw] bg-gradient-to-b from-[#FFA514] to-[#FFD23F] pr-[1.5vw] sm:h-[9vw] lg:h-[3vw]">
        <p className="px-[2vw] font-publica-sans text-[3.5vw] font-medium text-[#5E1675] sm:text-[3vw] lg:text-[1.4vw]">
          {question}
        </p>
        <div
          className={
            "mr-[3vw] h-[3vw] w-[3vw] sm:mr-[2.5vw] sm:h-[2.5vw] sm:w-[2.5vw] sm:items-end lg:mr-[1vw] lg:h-[1.25vw] lg:w-[1.25vw] lg:items-end"
            // (isOpen ? "rotate-12" : "rotate-0")
          }
        >
          <FaPlus
            className={`h-full text-black transition duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
          />
        </div>
      </div>
      <div
        className={`w-full ${isOpen ? "flex" : "hidden"} items-start py-[2vw] sm:py-[1.5vw] lg:py-[1vw]`}
        // w-full ${isOpen ? "flex" : "hidden"} items-start py-[2vw] sm:py-[1.5vw] lg:py-[1vw] (Versi Baru)
        // lg:"ml-4" h-[6vw] w-full items-start sm:h-[3vw] sm:items-start lg:h-[3vw] lg:items-start ${isOpen ? "flex" : "hidden"} (Versi Lama)
      >
        <p
          className={`px-[2vw] font-publica-sans text-[3.5vw] font-medium gradient-text-yellow-up-down sm:text-[3vw] lg:text-[1.4vw]`}
          // px-[2vw] font-publica-sans text-[3.5vw] font-medium gradient-text-yellow-up-down sm:text-[3vw] lg:text-[1.4vw] (Versi Baru)
          // px-[2vw] font-publica-sans text-[3.5vw] font-medium gradient-text-yellow-up-down sm:text-[3vw] lg:text-[1.4vw] ${isOpen ? "block" : "hidden"} (Versi Lama)
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

function FAQ_Desktop({
  className,
  handleSubmit,
  handleChange,
  userInput,
  foundPertanyaanMateri,
  foundPertanyaanUmum,
}: {
  className?: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  foundPertanyaanMateri: any[];
  foundPertanyaanUmum: any[];
}) {
  return (
    <main
      className={`relative min-h-screen w-full flex-col bg-cover bg-top ${className} `}
    >
      <Image
        src={"/images/background/faq-background-1.png"}
        alt="none"
        width={1000}
        height={1000}
        data-aos="fade-down"
        className="absolute z-[0] w-full"
      />
      <div className={`flex w-full flex-col items-center justify-center`}>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[12vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[7vw] text-transparent"
        >
          Frequently Asked Question
        </h1>

        <div
          data-aos="fade-up"
          className="z-[1] bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[2.5vw] text-transparent"
        >
          Punya Pertanyaan?
          <form
            className="flex h-[4vw] w-[86vw] items-center justify-between gap-[1vw] rounded-xl bg-[#5E1675] px-[1vw]"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Cari di sini..."
                className="w-full border-none bg-transparent font-publica-sans text-[1.5vw] text-[#FFB314] placeholder-[#FFB314] outline-none placeholder:text-[1.5vw]"
                value={userInput}
                onChange={handleChange}
              />
            </div>
            <button className="mr-[1vw] h-[3vw] w-[7vw] items-end rounded-[1vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
              <div className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text font-legendaire text-[2vw] text-transparent">
                Search
              </div>
            </button>
          </form>
          <div className="relative mb-[6vw] mt-[1.5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[3vw] hover:bg-[#5E1675]">
            <p className="mt-[-1.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[3vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
              Pertanyaan Umum
            </p>
            <div className="relative flex flex-col gap-[1.5vw]">
              {foundPertanyaanUmum.map((pertanyaan, index) => (
                <ItemPertanyaan
                  key={index}
                  question={`Q: ${pertanyaan.question}`}
                  answer={`A: ${pertanyaan.answer}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FAQ_Tablet({
  className,
  handleSubmit,
  handleChange,
  userInput,
  foundPertanyaanMateri,
  foundPertanyaanUmum,
}: {
  className?: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  foundPertanyaanMateri: any[];
  foundPertanyaanUmum: any[];
}) {
  return (
    <main
      className={`relative min-h-screen w-full flex-col bg-cover bg-top ${className} `}
    >
      <Image
        src={"/images/background/faq-background-2.png"}
        alt="none"
        width={1000}
        height={1000}
        data-aos="fade-down"
        className="absolute z-[0] w-full"
      />
      <div className={`flex w-full flex-col items-center justify-center`}>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[26vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[10vw] text-transparent"
        >
          Frequently
        </h1>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[-3vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[10vw] text-transparent"
        >
          Asked Question
        </h1>

        <div
          data-aos="fade-up"
          className="z-[1] bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[6vw] text-transparent"
        >
          Punya Pertanyaan?
          <form
            className="flex h-[6vw] w-[94vw] items-center justify-between gap-[1vw] rounded-xl bg-[#5E1675] px-[1vw]"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Cari di sini..."
                className="ml-[2vw] w-full border-none bg-transparent font-publica-sans text-[3vw] text-[#FFB314] placeholder-[#FFB314] outline-none placeholder:text-[3vw]"
                value={userInput}
                onChange={handleChange}
              />
            </div>
            <button className="z-[1] mr-[1vw] h-[3.5vw] w-[9vw] items-end rounded-[1vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
              <div className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text font-legendaire text-[2.5vw] text-transparent">
                Search
              </div>
            </button>
          </form>
          <div className="relative mb-[6vw] mt-[5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[3vw] hover:bg-[#5E1675]">
            <p className="mt-[-2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[5vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
              Pertanyaan Umum
            </p>
            <div className="relative flex flex-col gap-[4vw]">
              {foundPertanyaanUmum.map((pertanyaan, index) => (
                <ItemPertanyaan
                  key={index}
                  question={`Q: ${pertanyaan.question}`}
                  answer={`A: ${pertanyaan.answer}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function FAQ_Mobile({
  className,
  handleSubmit,
  handleChange,
  userInput,
  foundPertanyaanMateri,
  foundPertanyaanUmum,
}: {
  className?: string;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  userInput: string;
  foundPertanyaanMateri: any[];
  foundPertanyaanUmum: any[];
}) {
  return (
    <main
      className={`relative min-h-screen w-full flex-col bg-cover bg-top ${className} `}
    >
      <Image
        src={"/images/background/faq-background-3.png"}
        alt="none"
        width={1000}
        data-aos="fade-down"
        height={1000}
        className="absolute z-[0] w-full"
      />
      <div className={`flex w-full flex-col items-center justify-center`}>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[40vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[12vw] text-transparent"
        >
          Frequently
        </h1>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[-3vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[12vw] text-transparent"
        >
          Asked Question
        </h1>

        <div
          data-aos="fade-up"
          className="z-[1] bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[7vw] text-transparent"
        >
          Punya Pertanyaan?
          <form
            className="flex h-[10vw] w-[96vw] items-center justify-between gap-[1vw] rounded-xl bg-[#5E1675] px-[1vw]"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Cari di sini..."
                className="ml-[2vw] w-full border-none bg-transparent font-publica-sans text-[3.5vw] text-[#FFB314] placeholder-[#FFB314] outline-none placeholder:text-[3.5vw]"
                value={userInput}
                onChange={handleChange}
              />
            </div>
            <button className="mr-[2vw] h-[6vw] w-[12vw] items-end rounded-[1vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F]">
              <div className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text font-legendaire text-[3.5vw] text-transparent">
                Search
              </div>
            </button>
          </form>
          <div className="relative mb-[6vw] mt-[5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[6vw] hover:bg-[#5E1675]">
            <p className="mt-[-5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[8vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
              Pertanyaan Umum
            </p>
            <div className="relative flex flex-col gap-[6vw]">
              {foundPertanyaanUmum.map((pertanyaan, index) => (
                <ItemPertanyaan
                  key={index}
                  question={`Q: ${pertanyaan.question}`}
                  answer={`A: ${pertanyaan.answer}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
