import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

export default function ImageModal({
  image,
  setModalIsOpen,
}: {
  image: StaticImageData;
  setModalIsOpen: (value: boolean) => void;
}) {
  // Function to close the modal if the user clicks outside of it
  function modalBehavior(e: any) {
    if (e.target.classList.contains("absolute")) {
      setModalIsOpen(false);
    }
  }

  function escKeyBehavior(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setModalIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", escKeyBehavior);
    return () => {
      window.removeEventListener("keydown", escKeyBehavior);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", modalBehavior);
    return () => {
      document.removeEventListener("click", modalBehavior);
    };
  }, []);

  return (
    <div
      className="min-w-screen fixed inset-0 left-0 top-0 z-[1000] flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat outline-none transition duration-150 ease-in-out focus:outline-none"
      id="modal-id"
    >
      <div className="z-1 absolute inset-0 bg-black opacity-80"></div>
      <div className="relative mx-5 my-auto w-full max-w-md rounded-xl bg-gradient-to-b from-[#FFD23F] to-[#FFA514] p-2 shadow-lg sm:mx-10 sm:max-w-3xl md:mx-20 md:p-3 lg:max-w-6xl lg:p-4">
        {/* Image Content */}
        <div className="">
          <Image src={image} alt="image" className="h-full w-full rounded-xl" />
        </div>

        {/* Close Button */}
        <div
          className="absolute right-3 top-3 -mr-6 -mt-6 h-10 w-10 rounded-full bg-gradient-to-b from-[#EA5571] to-[#843040] transition hover:scale-110 hover:cursor-pointer active:scale-100"
          onClick={() => setModalIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 32 32"
            className="scale-75"
            fill="#FFF"
          >
            <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
