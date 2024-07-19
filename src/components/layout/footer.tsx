import Image from "next/image";
import { FaYoutube, FaXTwitter, FaLine, FaTiktok, FaInstagram, FaTwitter} from "react-icons/fa6";

const FooterTabDesktop = () => {
    const BackgroundFooterTabDesktop = () =>(
        <Image
        className="w-full absolute z-0"
        alt=""
        src={'/images/background/footer-bg.svg'}
        height={100}
        width={100}
        />
    )
    const Content = () =>(
        <div className="w-full z-[1] flex-col flex items-center">
            <div className="w-full flex flex-col items-center place-content-end gap-0 translate-y-[10vw]">
                <div>
                    <Image
                    className="w-[21vw]"
                    alt=""
                    src={'/images/footer-logo.svg'}
                    width={100}
                    height={100}/>
                </div>
                <div>
                    <Image
                    className="w-[35vw]"
                    alt=""
                    src={'/images/footer-OA.svg'}
                    width={100}
                    height={100}
                    />
                </div>
            </div>
        </div>
    )
    return (
        <div className="w-full flex items-center justify-between max-md:hidden">
            <BackgroundFooterTabDesktop />
            <Image className="w-[16vw] z-[1] translate-y-[5vw] translate-x-[2vw]" alt="" src={'/images/logo/logo_yellow.svg'} width={100} height={100}/>
            <Content/>
            <div className="max-w-[20vw] w-[20vw] text-[1vw]/[1vw] font font-publica-sans z-[1] text-center translate-y-[8vw] translate-x-[-2vw]">
                <h2 className="bg-clip-text bg-gradient-to-b from-[#FFD23F] to-[#FFA514] text-transparent">PIONIR</h2>
                <h1 className="font-legendaire text-[5.5vw]/[6vw] bg-clip-text bg-gradient-to-b from-[#FFD23F] to-[#FFA514] text-transparent">KesatriA</h1>
                <h2 className="bg-clip-text bg-gradient-to-b from-[#FFD23F] to-[#FFA514] text-transparent">2024</h2>
            </div>
        </div>
    )
}

const FooterHP = () =>{
    return(
        <div className="w-full md:hidden">
            <Image className="w-full absolute" alt="" src={'/images/footer-HP.svg'} width={100} height={100}/>
        </div>
    )
}


export default function Footer(){
    return(
        <>
        <FooterTabDesktop/>
        <FooterHP/>
        </>
    );
}