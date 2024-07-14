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
  });

  useEffect(() => {
    document.addEventListener("click", modalBehavior);
    return () => {
      document.removeEventListener("click", modalBehavior);
    };
  }, []);

  return (
    <div
      className="min-w-screen h-screen fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover transition duration-150 ease-in-out"
      id="modal-id"
    >
      <div className="absolute bg-black opacity-80 inset-0 z-1"></div>
      <div className="w-full max-w-md mx-5 sm:max-w-3xl sm:mx-10 lg:max-w-6xl md:mx-20 p-2 md:p-3 lg:p-4 relative my-auto rounded-xl shadow-lg bg-gradient-to-b from-[#FFD23F] to-[#FFA514] ">
        {/* Image Content */}
        <div className="">
          <Image src={image} alt="image" className="w-full h-full rounded-xl" />
        </div>

        {/* Close Button */}
        <div
          className="absolute top-3 right-3 bg-gradient-to-b from-[#EA5571] to-[#843040]  w-10 h-10 -mt-6 -mr-6 rounded-full hover:scale-110 hover:cursor-pointer transition active:scale-100"
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
