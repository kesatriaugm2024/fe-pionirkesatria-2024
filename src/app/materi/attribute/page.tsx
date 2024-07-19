import Image from "next/image"
import Link from "next/link"

const PRODI = [
    {
        name:"Hari ke 3",
        link:"12zubIS9OxEX3WIItJJKNUGeu6aBmsA-u",
        imgpath:"/images/covermodul/Pages from PIONIR FAKULTAS TEKNIK 2024 Hari Ke-3.pdf.png"
    },
    {
        name:"Hari ke 4",
        link:"17uTHDSMay6Y6HcsaswLbFJpvg6s7Y9Gk",
        imgpath:"/images/covermodul/Pages from PIONIR FAKULTAS TEKNIK 2024 Hari Ke-4.pdf.png"
    },
]

function DepartemenCardDesktop({title, prodi}){
    return(
        <div className="flex flex-col items-center place-content-center px-[10vw] gap-[4vw] lg:py-[5vw]">
            <div className="w-full h-[10vw]">
                <h1 className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent font-legendaire text-[7vw]/[7vw] lg:text-[5vw]/[5vw] text-center">{title}</h1>
            </div>
            <div className="w-[60vw] flex items-center justify-between h-[30vw]">
                {prodi.map((item, idx)=>(
                    <Link
                    href={'/materi/'+item.link}
                    className="w-full flex items-center justify-center" key={idx}>
                        <div className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[1.7vw] flex-shrink-0 border-[0.2vw] duration-100 hover:w-[15.6vw] hover:h-[27.8vw] w-[13vw] h-[23vw]">
                            <Image className="w-full h-full rounded-[1.7vw]" alt="" src={item.imgpath} width={100} height={100}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default function AttributePage(){
    return(
    <main className="min-w-screen min-h-screen flex flex-col items-center place-content-center">
        <DepartemenCardDesktop title={"Attribute"} prodi={PRODI}/>
    </main>
    )
}