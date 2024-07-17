import Image from "next/image";
import { FaYoutube, FaXTwitter, FaLine, FaTiktok, FaInstagram} from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="w-full bottom-0 flex font-publica-sans text-[#FFE5C7] text-[1vw]/[1vw] justify-between">
            <Image
            className="absolute w-full translate-y-[-39.5vw] z-[0]"
            alt=""
            src={'/images/background/background-footer.svg'}
            width={100}
            height={100}
            />
            <div className="flex items-center z-[1]">
                <Image
                className="w-[18vw]"
                alt=""
                src={'/images/logo/logo_yellow.svg'}
                width={100}
                height={100}
                />
                <div className="flex flex-col gap-[2vw]">
                    <p>
                        PIONIR KESATRIA 2024
                    </p>
                    <p>
                        Fakultas Teknik
                    </p>
                    <p>
                        Jalan Grafika <br/>
                        Mlati, Yogyakarta, 55281, ID
                    </p>
                    <p>
                        https:pionir.ft.ugm.ac.id
                    </p>
                </div>
            </div>
            <div className="w-[30vw] grid grid-cols-2 grid-rows-4 z-[1] py-[3vw]">
                <div className="col-span-2 flex items-center">Official Akun</div>
                <div className="flex items-center gap-[1vw]"><FaXTwitter className="text-[3vw]"/>pionirkesatria_</div>
                <div className="flex items-center gap-[1vw]"><FaTiktok className="text-[3vw]"/>pionirkesatria_</div>
                <div className="flex items-center gap-[1vw]"><FaLine className="text-[3vw]"/>@nrb2565a</div>
                <div className="flex items-center gap-[1vw]"><FaInstagram className="text-[3vw]"/>pionirkesatria_</div>
                <div className="flex items-center gap-[1vw]"><FaYoutube className="text-[3vw]"/>PIONIR KESATRIA</div>
                
            </div>
        </div>
    );
}