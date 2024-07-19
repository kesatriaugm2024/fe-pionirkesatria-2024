"use client";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { listPertanyaanUmum, listPertanyaanMateri } from "@/app/faq/listPertanyaan";

export default function DesignGuidelinePage() {
  return (
    <main className="min-h-screen w-full flex-col bg-faq-background bg-cover bg-top bg-repeat py-10">
      <>
        <FAQ_Desktop className="hidden lg:block" />
      </>
    </main>
  );
}

export const ItemPertanyaan = ({
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
      className={`flex w-[80vw] cursor-pointer flex-col items-start rounded-[1.5vw] bg-gradient-to-r from-[#B22635] to-[#EA5571] duration-200 ${
        isOpen ? "h-[6vw]" : "h-[3vw]"
      }`}
      onClick={handleClick}
    >
      <div className="flex h-[3vw] w-full items-center justify-between rounded-[1.5vw] bg-gradient-to-b from-[#FFA514] to-[#FFD23F] pr-[1.5vw]">
        <p className="px-[1vw] font-publica-sans text-[1.4vw] font-medium text-[#5E1675]">
          {question}
        </p>
        <div className="h-[1.25vw] w-[1.25vw] items-end">
          <FaPlus className="h-full text-black" />
        </div>
      </div>
      <div
        className={`h-[3vw] w-full items-center ${isOpen ? "flex" : "hidden"}`}
      >
        <p
          className={`px-[1vw] font-publica-sans text-[1.4vw] font-medium gradient-text-yellow-up-down ${isOpen ? "block" : "hidden"}`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export function FAQ_Desktop({ className }: { className?: string }) {
  const [userInput, setUserInput] = useState("");
  const [foundPertanyaanUmum, setFoundPertanyaanUmum] =
    useState(listPertanyaanUmum);
  const [foundPertanyaanMateri, setFoundPertanyaanMateri] =
    useState(listPertanyaanMateri);

  const checkSearchResult = () => {
    let questionUmum = [];
    let questionMateri = [];
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

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === "") {
      setFoundPertanyaanUmum(listPertanyaanUmum);
      setFoundPertanyaanMateri(listPertanyaanMateri);
    } else {
      checkSearchResult();
    }
  };
  return (
    <main className={`min-h-screen w-full flex-col py-10 ${className} `}>
      <div className={`flex w-full flex-col items-center justify-center`}>
        <h1 className="ml-[4vw] mt-[6vw] self-start bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[7vw] text-transparent">
          Frequently Asked Question
        </h1>

        <div className="bg-gradient-to-b from-[#5E1675] via-[#982D66] to-[#CD4258] bg-clip-text font-legendaire text-[2.5vw] text-transparent">
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
          <div className="relative mt-[1.5vw] flex flex-col items-center rounded-xl bg-[#5E1675] py-[1vw] hover:bg-[#5E1675]">
            <p className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[3vw] text-transparent drop-shadow-[0_4px_5px_rgba(0,0,0,0.7)]">
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

// export function FAQ_Tablet({ className }: { className?: string }){
//   return(

//   );
// }
