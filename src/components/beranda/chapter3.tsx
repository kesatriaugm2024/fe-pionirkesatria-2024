import Image from "next/image"

const CONTENT = [
    {
        'title':'Bagian III: Kesatria Muda Berkarya',
        'titleTab': 'Bagian III: Kesatria Muda Berkarya',
        'titleHP': ['Bagian III:', 'Kesatria Muda Berkarya'],
        'titleDesc':'Tentunya kesatria muda sebagai calon-calon insinyur muda akan menghadapi masalah-masalah yang terjadi di Indonesia baik itu dari sektor manufaktur, infrastruktur, dan energi. Di bagian 3 ini, kesatria muda akan mengerjakan sebuah masalah keteknikan yang mana nantinya akan melatih kemampuan berpikir kritis, problem solving, dan kerja sama.',
        'subtitle1':'Karya Kesatria Muda',
        'subtitle1desc':'Para kesatria muda diharapkan mampu mengaplikasikan pengetahuan dan keterampilan yang relevan serta pemahaman mendalam mengenai  jurusan Teknik yang kesatria muda ambil untuk kontribusi mereka bagi bangsa dan negara di masa depan.',
        'subtitle2':'Karya Aplikatif',
        'subtitle2desc':'Para kesatria muda diharapkan mampu mengaplikasikan pengetahuan dan keterampilan yang relevan serta pemahaman mendalam men.'
    }
]

const JudulChapter = () =>{
    return(
        <div
        className="flex flex-col items-center max-lg:max-w-[71vw] max-md:hidden"
        >
            <h1 
            className="font-legendaire bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-[4vw] drop-shadow-[0_0.5vw_0.2vw_#000000] max-lg:text-[4.8vw]"
            >
                {CONTENT[0].title}
            </h1>
            <p
            className="font-publica-sans text-[1.7vw]/[2vw] text-[#FFE5C7] text-center max-lg:text-[2.5vw]/[2.5vw]"
            >
                {CONTENT[0].titleDesc}
            </p>
        </div>
    )
}

const JudulChapterHP=()=>{
    return(
        <div className="flex flex-col w-full md:hidden items-center place-content-center text-center gap-[2.5vw]">
            <h1 className="font-legendaire text-[6.7vw]/[6.7vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
                <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">{CONTENT[0].titleHP[0]}</span><br/>
                <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">{CONTENT[0].titleHP[1]}</span>
            </h1>
            <p
            className="font-publica-sans text-[2.5vw]/[2.5vw] text-[#FFE5C7] text-center"
            >
                {CONTENT[0].titleDesc}
            </p>
        </div>
    )
}

const KesatriaMudaBerkarya = () => {
    return(
        <div
        className="w-full flex justify-between items-center max-lg:hidden"
        >
            <div
            className="max-w-[40vw] flex flex-col gap-[1vw]"
            >
                <h2
                className="font-legendaire bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-[4vw]"
                >
                    {CONTENT[0].subtitle1}
                </h2>
                <p
                className="font-publica-sans text-[1.7vw]/[2vw] text-[#FFE5C7] text-justify"
                >
                    {CONTENT[0].subtitle1desc}
                </p>
                <button
                className="w-[16.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[2vw] hover:from-[#FFA514] hover:to-[#FFD23F]"
                >
                    <p
                    className="font-legendaire bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-transparent text-[2.2vw] "
                    >
                        Baca Modul
                    </p>
                </button>
            </div>
            <div 
            className="w-[31.5vw] h-[24vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[2.9vw]"
            >
            </div>
        </div>
    )
}

const KaryaAplikatif = () => {
    return(
        <div
            className="w-full flex justify-between items-center max-lg:hidden"
            >
                <div 
                className="w-[31.5vw] h-[24vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[2.9vw]"
                >
                </div>
                <div
                className="max-w-[40vw] flex flex-col gap-[1vw]"
                >
                    <h2
                    className="font-legendaire bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-[4vw]"
                    >
                        {CONTENT[0].subtitle2}
                    </h2>
                    <p
                    className="font-publica-sans text-[1.7vw]/[2vw] text-[#FFE5C7] text-justify"
                    >
                        {CONTENT[0].subtitle2desc}
                    </p>
                    <button
                    className="w-[16.5vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F] rounded-[2vw]"
                    >
                        <p
                        className="font-legendaire bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-transparent text-[2.2vw] "
                        >
                            Baca Modul
                        </p>
                    </button>
                </div>
            </div>
    )
}

const KesatriaMudaBerkaryaTab = () => {
    return(
        <div
        className="flex flex-col justify-between place-content-center items-center w-[71vw] lg:hidden max-md:hidden"
        >
            <div
            className="w-full flex flex-col gap-[1vw] items-center"
            >
                <h2
                className="font-legendaire bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-[4.8vw]"
                >
                    {CONTENT[0].subtitle1}
                </h2>
                <p
                className="font-publica-sans text-[2.5vw]/[2.5vw] text-[#FFE5C7] text-justify"
                >
                    {CONTENT[0].subtitle1desc}
                </p>
                <div className="w-full flex flex-col items-center justify-center lg:hidden mt-[2vw] gap-[2vw]">
                    <Image
                    className="absolute w-[50vw] left-0 translate-y-[5vw]"
                    alt=""
                    src={'/images/assets_beranda_chapter3_pitaungu_kiri.svg'}
                    width={1965}
                    height={880}
                    />
                    <Image
                    className="absolute w-[50vw] right-0 translate-y-[5vw]"
                    alt=""
                    src={'/images/assets_beranda_chapter3_pitaungu_kanan.svg'}
                    width={1965}
                    height={880}
                    />
                    <div 
                    className="w-[39.7vw] h-[23.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[2.9vw] z-[1]"
                    >
                        {/* Tablet */}
                    </div>
                    <button
                    className="w-[26.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F] rounded-[3.5vw] z-[1]"
                    >
                        <p
                        className="font-legendaire bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-transparent text-[3.9vw] "
                        >
                            Baca Modul
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}



const KaryaAplikatifTab = () => {
    return(
        <div
        className="flex flex-col justify-between place-content-center items-center w-[71vw] lg:hidden max-md:hidden"
        >
            <div
            className="w-full flex flex-col gap-[1vw] items-center"
            >
                <h2
                className="font-legendaire bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent text-[4.8vw]"
                >
                    {CONTENT[0].subtitle2}
                </h2>
                <p
                className="font-publica-sans text-[2.5vw]/[2.5vw] text-[#FFE5C7] text-justify"
                >
                    {CONTENT[0].subtitle2desc}
                </p>
                <div className="w-full flex flex-col items-center justify-center lg:hidden mt-[2vw] gap-[2vw]">
                    <Image
                    className="absolute w-[50vw] left-0 translate-y-[5vw]"
                    alt=""
                    src={'/images/assets_beranda_chapter3_pitaungu_kiri.svg'}
                    width={1965}
                    height={880}
                    />
                    <Image
                    className="absolute w-[50vw] right-0 translate-y-[5vw]"
                    alt=""
                    src={'/images/assets_beranda_chapter3_pitaungu_kanan.svg'}
                    width={1965}
                    height={880}
                    />
                    <div 
                    className="w-[39.7vw] h-[23.2vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[2.9vw] z-[1]"
                    >
                        {/* Tablet */}
                    </div>
                    <button
                    className="w-[26.9vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F] rounded-[3.5vw] z-[1]"
                    >
                        <p
                        className="font-legendaire bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-transparent text-[3.9vw] "
                        >
                            Baca Modul
                        </p>
                    </button>
                </div>
            </div>
        </div>
    )
}

const KesatriaMudaBerkaryaHP = () => {
    return(
        <div className="w-full flex flex-col items-center place-content-center gap-[2.5vw] md:hidden">
            <div className="flex flex-col w-full md:hidden items-center place-content-center text-center gap-[2.5vw]">
                <h1 className="font-legendaire text-[6.7vw]/[6.7vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
                    <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">{CONTENT[0].subtitle1}</span>
                </h1>
                <p
                className="font-publica-sans text-[2.5vw]/[2.5vw] text-[#FFE5C7] text-center"
                >
                    {CONTENT[0].subtitle1desc}
                </p>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[50vw] h-[33.3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[4.2vw] drop-shadow-[0_0.5vw_1vw_#000000] z-[1]">
                    {/* Content */}
                </div>
                <Image
                className="absolute w-[25vw] z-[0] translate-x-[-25vw] translate-y-[15vw]"
                alt=""
                src={'/images/assets_beranda_chapter3_gerigimerah_hp.svg'}
                width={100}
                height={100}
                />
            </div>
            <button
            className="w-[33.3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F] rounded-[3.5vw] z-[1]"
            >
                <p
                className="font-legendaire bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-transparent text-[5vw] "
                >
                    Baca Modul
                </p>
            </button>
        </div>
    )
}

const KaryaAplikasiHP = () => {
    return(
        <div className="w-full flex flex-col items-center place-content-center gap-[2.5vw] md:hidden">
            <div className="flex flex-col w-full md:hidden items-center place-content-center text-center gap-[2.5vw]">
                <h1 className="font-legendaire text-[6.7vw]/[6.7vw] drop-shadow-[0_0.5vw_0.2vw_#000000]">
                    <span className="bg-gradient-to-b from-[#FFD23F] to-[#FFA514] bg-clip-text text-transparent">{CONTENT[0].subtitle2}</span>
                </h1>
                <p
                className="font-publica-sans text-[2.5vw]/[2.5vw] text-[#FFE5C7] text-center"
                >
                    {CONTENT[0].subtitle2desc}
                </p>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[50vw] h-[33.3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] rounded-[4.2vw] drop-shadow-[0_0.5vw_1vw_#000000] z-[1]">
                    {/* Content */}
                </div>
                <Image
                className="absolute w-[25vw] z-[0] translate-x-[25vw] translate-y-[15vw]"
                alt=""
                src={'/images/assets_beranda_chapter3_gerigimerah_hp.svg'}
                width={100}
                height={100}
                />
            </div>
            <button
            className="w-[33.3vw] bg-gradient-to-b from-[#FFD23F] to-[#FFA514] hover:from-[#FFA514] hover:to-[#FFD23F] rounded-[3.5vw] z-[1]"
            >
                <p
                className="font-legendaire bg-gradient-to-b from-[#5E1675] to-[#5E1675] bg-clip-text text-transparent text-[5vw] "
                >
                    Baca Modul
                </p>
            </button>
        </div>
    )
}

const TransitiAtas = () =>{
    return(
        <div className="w-full min-h-[25vw]">
            <div className="absolute w-full overflow-hidden">
                <Image
                className="absolute w-[17.5vw] translate-y-[-30.5vw] right-0 translate-x-[5vw]"
                alt=""
                src={'/images/assets_beranda_selamatdatangvideo_buluemas.svg'}
                width={1965}
                height={880}
                />
                <Image
                className="w-[100vw]"
                alt=""
                src={'/images/assets_beranda_chapter3_kainunguatas.svg'}
                width={1965}
                height={880}
                />
                <Image
                className="absolute translate-x-[65vw] translate-y-[-35vw] w-[10vw] max-lg:hidden"
                alt=""
                src={'/images/assets_beranda_chapter3_burungemas.svg'}
                width={1965}
                height={880}
                />
                <Image
                className="absolute w-[17.5vw] translate-y-[-30.5vw] right-0 translate-x-[5vw] max-lg:hidden"
                alt=""
                src={'/images/assets_beranda_selamatdatangvideo_gerigimerah.svg'}
                width={1965}
                height={880}
                />
            </div>
        </div>
    )
}

const Content = () =>{
    return(
        <div 
        className="min-h-screen w-full flex flex-col items-center place-content-center px-[9.9vw] gap-[5vw] py-[0vw] z-[1] pb-[10vw]"
        >
            <JudulChapter/>
            <JudulChapterHP/>
            <KesatriaMudaBerkarya/>
            <KesatriaMudaBerkaryaTab/>
            <KesatriaMudaBerkaryaHP/>
            <KaryaAplikatif/>
            <KaryaAplikatifTab/>
            <KaryaAplikasiHP/>
        </div>
    )
}

export default function Chapter3(){
    return(
        <>
            <TransitiAtas/>
            <Content/>
        </>
    )
}