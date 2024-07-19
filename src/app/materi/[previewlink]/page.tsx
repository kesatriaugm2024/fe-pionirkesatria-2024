export default function ReadMode({params}){
    return(
        <main className="min-w-screen min-h-screen flex flex-col items-center place-content-center">
            <iframe className="w-full aspect-[9/16] " src={"https://drive.google.com/file/d/"+ params.previewlink+"/preview"} />
        </main>
    )
}