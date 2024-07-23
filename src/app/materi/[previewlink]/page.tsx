// Static Site Generation
// export async function generateStaticParams() {
//   // Fetch or define your dynamic route parameters here
//   const params = [
//     { previewlink: "attribute" }, // Attribute
//     { previewlink: "1RLGj0-gtIK5BxxHBp8JiUs7o-bpcdzZ1" }, // Guidebook
//     { previewlink: "1w6AQyjaFXOSQpm_ZQe3RHZkU_80uNUHb" }, // Kesatria Merajut Karsa
//     { previewlink: "143Jwso1wesP16x-MQxdKsZVPNmh3orVm" }, // Lika-Liku Kesatria
//     { previewlink: "1g3khW7dKm8xqAjmtJpuWJk13jIyt-4fr" }, // Kesatria Muda Berkarya
//     { previewlink: "1I1Gy5ds5m49J61qDT2hxvqygN1rWniWo" }, // Karya Aplikatif
//     { previewlink: "prodi" }, // Pengenanal Jurusan
//     { previewlink: "1pJurt6XIllXkBgFsEF9nl2AI0S_IS0Pq" }, // Jelajah Lembaga
//     { previewlink: "1CZpujWAl0SC1GWpOGn-k_acMeL2W0X1U" }, // Pameran Karya
//     { previewlink: "1eFLENcwhriBPk6uqChqVCeZtCfWK-wOW" }, // Fasilitas Teknik

//     { previewlink: "12zubIS9OxEX3WIItJJKNUGeu6aBmsA-u" }, // Hari ke 3
//     { previewlink: "17uTHDSMay6Y6HcsaswLbFJpvg6s7Y9Gk" }, // Hari ke 4

//     // DTAP
//     { previewlink: "1WE9n9aLgGgPli2c5crFcOFa73rGEkv83" }, // Arsitektur
//     { previewlink: "163KaAm1aVLO2lFQoCxUSSB2Oe78PvzH0" }, // Perencanaan Wilayah

//     // DTETI
//     { previewlink: "WqCID-FAz3zm8PxOoot7Ial3rf9bpsPI" }, // Teknik Elektro
//     { previewlink: "1FeMeOPvvplVnfXh2KP0GDtGk__3eihYX" }, // Teknologi Informasi
//     { previewlink: "1IkwwlbENfG_NcXeKZE0cGIKIle0VzveX" }, // Teknik Biomedis

//     // DTNTF
//     { previewlink: "1QQZEqIXEn63ad8UpKPIY2NN9wzl4Reu3" }, // Teknik Nuklir
//     { previewlink: "1nJuu5tQWI2136rxl5u-UnNBafCQ2bPpK" }, // Teknik Fisika

//     // DTGD
//     { previewlink: "19DoXIk_GZlrTfh9LAnnFv0tMfyNoGs00" }, // Teknik Geodesi

//     // DTGL
//     { previewlink: "17zstl6s9gmRWGkLINwpLUaWYXLoo1RVa" }, // Teknik Geologi

//     // DTK
//     { previewlink: "1VHVlEHJRbQL7Wi8l8oQhuBrMEJ1REPHt" }, // Teknik Kimia

//     // DTMI
//     { previewlink: "1vJ0pwnzHOZPk2XZg_kjvjezwvm0Icj7B" }, // Teknik Mesin
//     { previewlink: "14OR3K0NBrd7tPRMc_fcM5okf9KrDWdeT" }, // Teknik Industri

//     // DTSL
//     { previewlink: "1ZapisYGM7MzxZsyfex-ttBnbjYsyINy_" }, // Teknik Sipil
//     { previewlink: "1AA_QooNb1gkwglp-e8HAEgiGdwKMtWtd" }, // Teknik Infrastruktur Lingkungan
//     { previewlink: "1Vck7DS_OcnV93_zyrBC6MG_1RJH3hZcc" }, // Teknik Sumber Daya Air
//   ];
//   return params;
// }

export default function ReadMode({ params }: any) {
  return (
    <main className="min-w-screen flex min-h-screen flex-col place-content-center items-center">
      <iframe
        className="h-[100dvh] w-full max-lg:mt-[8vw] max-sm:mt-[17vw] lg:mt-[4vw]"
        src={
          "https://drive.google.com/file/d/" + params.previewlink + "/preview"
        }
      />
    </main>
  );
}
