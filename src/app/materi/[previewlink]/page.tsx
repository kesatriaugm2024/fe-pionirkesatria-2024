export default function ReadMode({ params }: any) {
  return (
    <main className="min-w-screen flex min-h-screen flex-col place-content-center items-center">
      <iframe
        className="w-full h-[100dvh] max-sm:mt-[17vw] max-lg:mt-[8vw] lg:mt-[4vw]"
        src={
          "https://drive.google.com/file/d/" + params.previewlink + "/preview"
        }
      />
    </main>
  );
}
