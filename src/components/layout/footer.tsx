import Image from "next/image";
import {
  FaYoutube,
  FaXTwitter,
  FaLine,
  FaTiktok,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const FooterTabDesktop = ({ className }: { className?: string }) => {
  const BackgroundFooterTabDesktop = () => (
    <Image
      className="absolute z-0 w-full"
      alt=""
      src={"/images/background/footer-bg.svg"}
      height={100}
      width={100}
    />
  );
  const Content = () => (
    <div className="z-[1] flex w-full flex-col items-center">
      <div className="flex w-full translate-y-[10vw] flex-col place-content-end items-center gap-0">
        <div>
          <Image
            className="w-[21vw]"
            alt=""
            src={"/images/footer-logo.svg"}
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            className="w-[35vw]"
            alt=""
            src={"/images/footer-OA.svg"}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
  return (
    <div
      className={
        "flex w-full items-center justify-between max-md:hidden " + className
      }
    >
      <BackgroundFooterTabDesktop />
      <Image
        className="z-[1] w-[16vw] translate-x-[2vw] translate-y-[5vw]"
        alt=""
        src={"/images/logo/logo_yellow.svg"}
        width={100}
        height={100}
      />
      <Content />
      <div className="font z-[1] w-[20vw] max-w-[20vw] translate-x-[-2vw] translate-y-[8vw] text-center font-publica-sans text-[1vw]/[1vw]">
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          PIONIR
        </h2>
        <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text font-legendaire text-[5.5vw]/[6vw] text-transparent">
          KesatriA
        </h1>
        <h2 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">
          2024
        </h2>
      </div>
    </div>
  );
};

const FooterHP = ({ className }: { className?: string }) => {
  return (
    <div className={"w-full md:hidden " + className}>
      <Image
        className="absolute w-full"
        alt=""
        src={"/images/footer-HP.png"}
        width={10000}
        height={10000}
      />
    </div>
  );
};

export default function Footer({ className }: { className?: string }) {
  return (
    <>
      <FooterTabDesktop className={className} />
      <FooterHP className={className} />
    </>
  );
}
