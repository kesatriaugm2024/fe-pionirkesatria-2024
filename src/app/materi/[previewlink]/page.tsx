export default function ReadMode({ params }: any) {
  return (
    <main className="min-w-screen flex min-h-screen flex-col place-content-center items-center">
      <iframe
        className="aspect-[9/16] w-full"
        src={
          "https://drive.google.com/file/d/" + params.previewlink + "/preview"
        }
      />
    </main>
  );
}
