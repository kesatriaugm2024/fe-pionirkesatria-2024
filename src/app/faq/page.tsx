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

  return (
    <main className="bg-pattern-krem-kesat bg-[size:25%] bg-repeat">
      <>
        <FAQ_Desktop className="hidden lg:block" />
        <FAQ_Tablet className="hidden sm:block lg:hidden" />
        <FAQ_Mobile className="block sm:hidden" />
      </>
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
      className={`flex w-[88vw] cursor-pointer flex-col items-start rounded-[1.5vw] bg-gradient-to-r from-[#B22635] to-[#EA5571] duration-200 sm:w-[90vw] lg:w-[80vw] ${
        isOpen ? "h-[6vw]" : "h-[3vw]"
      }`}
      onClick={handleClick}
    >
      <div className="flex h-[6vw] w-full items-center justify-between rounded-[1.5vw] bg-gradient-to-b from-[#FFA514] to-[#FFD23F] pr-[1.5vw] sm:h-[6vw] lg:h-[3vw]">
        <p className="px-[1vw] font-publica-sans text-[1.4vw] font-medium text-[#5E1675] sm:text-[1.5vw] lg:text-[1.4vw]">
          {question}
        </p>
        <div className="mr-[2vw] h-[2vw] w-[2vw] sm:mr-[2vw] sm:h-[1.5vw] sm:w-[1.5vw] sm:items-end lg:mr-[1vw] lg:h-[1.25vw] lg:w-[1.25vw] lg:items-end">
          <FaPlus className="h-full text-black" />
        </div>
      </div>
      <div
        className={`h-[6vw] w-full items-center sm:h-[3vw] lg:h-[3vw] ${isOpen ? "flex" : "hidden"}`}
      >
        <p
          className={`px-[1vw] font-publica-sans text-[1.4vw] font-medium gradient-text-yellow-up-down sm:text-[1.5vw] lg:text-[1.4vw] ${isOpen ? "block" : "hidden"}`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

function FAQ_Desktop({ className }: { className?: string }) {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  const checkSearchResult = () => {
    let questionUmum: any[] = [];
    let questionMateri: any[] = [];
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionUmum.push(item);
      }
    });
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionMateri.push(item);
      }
    });
    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult();
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main
      className={`relative min-h-screen w-full flex-col bg-cover bg-top ${className} `}
    >
      <Image
        src={"/images/background/faq-background-1.png"}
        alt="none"
        width={1000}
        height={1000}
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
            <button className="mr-[1vw] h-[3vw] w-[7vw] items-end rounded-[1vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
              <div className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text font-legendaire text-[2vw] text-transparent">
                Search
              </div>
            </button>
          </form>
          <div className="relative mt-[1.5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[3vw] hover:bg-[#5E1675]">
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

function FAQ_Tablet({ className }: { className?: string }) {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  const checkSearchResult = () => {
    let questionUmum: any[] = [];
    let questionMateri: any[] = [];
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionUmum.push(item);
      }
    });
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionMateri.push(item);
      }
    });
    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult();
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // min-h-screen relative w-full flex-col bg-cover bg-top
    <main
      className={`relative min-h-screen w-full flex-col bg-cover bg-top ${className} `}
    >
      <Image
        src={"/images/background/faq-background-2.png"}
        alt="none"
        width={1000}
        height={1000}
        className="absolute z-[0] w-full"
      />
      <div className={`flex w-full flex-col items-center justify-center`}>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[24vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[7vw] text-transparent"
        >
          Frequently
        </h1>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[-3vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[7vw] text-transparent"
        >
          Asked Question
        </h1>

        <div
          data-aos="fade-up"
          className="z-[1] bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[4vw] text-transparent"
        >
          Punya Pertanyaan?
          <form
            className="flex h-[5vw] w-[94vw] items-center justify-between gap-[1vw] rounded-xl bg-[#5E1675] px-[1vw]"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center">
              <input
                type="text"
                placeholder="Cari di sini..."
                className="w-full border-none bg-transparent font-publica-sans text-[2vw] text-[#FFB314] placeholder-[#FFB314] outline-none placeholder:text-[2vw]"
                value={userInput}
                onChange={handleChange}
              />
            </div>
            <button className="z-[1] mr-[1vw] h-[3vw] w-[7vw] items-end rounded-[1vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
              <div className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text font-legendaire text-[2vw] text-transparent">
                Search
              </div>
            </button>
          </form>
          <div className="relative mt-[1.5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[3vw] hover:bg-[#5E1675]">
            <p className="mt-[-2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[3vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
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

function FAQ_Mobile({ className }: { className?: string }) {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  const checkSearchResult = () => {
    let questionUmum: any[] = [];
    let questionMateri: any[] = [];
    listPertanyaanUmum.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionUmum.push(item);
      }
    });
    listPertanyaanMateri.forEach((item) => {
      let _question = item.question.toUpperCase();
      if (_question.includes(userInput.toUpperCase())) {
        questionMateri.push(item);
      }
    });
    setFoundPertanyaanUmum(questionUmum);
    setFoundPertanyaanMateri(questionMateri);
  };

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult();
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // min-h-screen relative w-full flex-col bg-cover bg-top
    <main
      className={`relative min-h-screen w-full flex-col bg-cover bg-top ${className} `}
    >
      <Image
        src={"/images/background/faq-background-3.png"}
        alt="none"
        width={1000}
        height={1000}
        className="absolute z-[0] w-full"
      />
      <div className={`flex w-full flex-col items-center justify-center`}>
        <h1
          data-aos="fade-up"
          className="z-[1] ml-[4vw] mt-[36vw] self-center bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[10vw] text-transparent"
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
            <button className="mr-[1vw] h-[4vw] w-[8vw] items-end rounded-[1vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514]">
              <div className="bg-gradient-to-b from-[#491772] to-[#5E1675] bg-clip-text font-legendaire text-[2vw] text-transparent">
                Search
              </div>
            </button>
          </form>
          <div className="relative mt-[5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[6vw] hover:bg-[#5E1675]">
            <p className="mt-[-1.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[6vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
              Pertanyaan Umum
            </p>
            <div className="relative flex flex-col gap-[2vw]">
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
