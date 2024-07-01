import Image from "next/image";

export default function DesignGuidelinePage(){
    return(
        <main className="min-w-screen min-h-screen flex flex-col">
            <div className="h-[75vw] flex flex-col justify-center place-items-center py-[14.5vw] bg-[url('/images/background/background_design-guideline-1.svg')] bg-cover">
                <p className="font-legendaire text-[20vw] leading-[20vw] text-center gradient-text-yellow text-shadow">Design Guidelines</p>
                <p className="text-yellow-50 text-[4vw] font-publica-sans">Pionir Kesatria 2024</p>
            </div> 
            <div className="h-[75vw] bg-[url('/images/background/background_design-guideline-2.svg')] bg-cover grid grid-cols-2 place-items-center">
                <div className="grid grid-cols-3">
                    <div className="w-[9vw] h-[10vw] bg-purple-250 flex place-items-center justify-center">Purple-250</div>
                    <div className="w-[9vw] h-[10vw] bg-purple-150 text-center place-items-center flex justify-center">Purple-150</div>
                    <div className="w-[9vw] h-[10vw] bg-purple-50 flex place-items-center justify-center">Purple-50</div>
                    <div className="w-[9vw] h-[10vw] bg-red-250 flex place-items-center justify-center">Red-250</div>
                    <div className="w-[9vw] h-[10vw] bg-red-150 flex place-items-center justify-center">Red-150</div>
                    <div className="w-[9vw] h-[10vw] bg-red-50 flex place-items-center justify-center">Red-50</div>
                    <div className="w-[9vw] h-[10vw] bg-yellow-150 flex place-items-center justify-center">Yellow-150</div>
                    <div className="w-[9vw] h-[10vw] bg-yellow-50 flex place-items-center justify-center">Yellow-50</div>
                    <div className="w-[9vw] h-[10vw] bg-yellow-50 flex place-items-center justify-center">Yellow-50</div>
                    <div className="w-full h-[10vw] col-span-3 bg-[#FFE5C7]"></div>
                </div>
                <div className="pr-[10vw]">
                    <p className="text-[12vw] font-legendaire leading-[12vw] gradient-text-purple text-shadow">Colour Pallete</p>
                    <p className="text-[2vw] text-purple-50">+ Hitam dan putih di overlay untuk highlight dan shadow</p>
                </div>
            </div>
            <div className="h-[75vw] bg-[url('/images/background/background_design-guideline-3.svg')] bg-cover items-center grid grid-cols-2 font-publica-sans place-items-center">
                <div className="font-legendaire">Legendeire</div>
                <div>font-legendeire</div>
                <div className="font-publica-sans">Publica-sans</div>
                <div>font-publica-sans</div>
                <div className="gradient-text-yellow">Gradien Kuning</div>
                <div>gradient-text-yellow</div>
                <div className="gradient-text-purple">Gradien Ungu</div>
                <div>gradient-text-purple</div>
                <div className="text-shadow">Drop Shadow Text Gradient</div>
                <div>text-shadow (Apakah Drop Shadow di kalian bisa? tanpa harus konfigurasi tailwind)</div>
            </div>
        </main>
    )
}