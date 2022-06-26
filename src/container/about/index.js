import React from "react"

const AboutPage = () => (
  <div className="flex flex-col mt-0 md:mt-24 justify-center w-full px-2.5 md:px-10">
    <div className="font-bold text-2xl text-slate-800 pb-5 text-center">
      Qurban Tools
    </div>
    <text className="font-regular text-base text-slate-700 text-justify pb-5">
      Sebuah tool atau aplikasi sederhana yang bersifat open source, untuk
      memudahkan panitia qurban menghitung atau menentukan jumlah berapa berat
      daging qurban yang akan di berikan kepada mustahik. Tool atau aplikasi ini
      tidak bersifat mutlak/pasti tetapi sebagai referensi dalam menghitung atau
      menentukan berat daging dari hewan qurban
    </text>
    <text className="font-regular text-base text-slate-700 text-justify pb-5">
      Tool atau aplikasi ini bersifat open source jika kamu seorang developer
      atau pelajar yang ingin mengembangkan atau sekedar berkontribusi untuk
      bahan belajar, silahkan kunjungi repo github kami{" "}
      <a
        className="cursor-pointer font-semibold text-teal-700"
        href=""
        target="__blank"
      >
        disini
      </a>
    </text>
    <text className="font-regular text-base text-slate-700 text-justify pb-5">
      Jika ada kesalahan dalam kata, referensi atau penentuan terkait
      perhitungan daging qurban mohon maaf dan bisa kirim koreksi, kritik dan
      sarannya melalui email{" "}
      <a
        className="cursor-pointer font-semibold text-teal-700"
        href=""
        target="__blank"
      >
        disini
      </a>
    </text>
    <text className="font-regular text-base text-slate-700 pb-5">
      Berikut beberapa referensi dan artikel dalam pembuatan tool atau aplikasi
      ini :
    </text>
    <text className="font-regular text-base text-slate-700 pb-5">
      <ul className="list-disc">
        <li>
          <a
            href="https://disnakkan.grobogan.go.id/info/berita/503-mengenal-jenis-jenis-potongan-daging-sapi#:~:text=Karkas%20didefinisikan%20sebagai%20bagian%20tubuh,ekor%20serta%20lemak%20yang%20berlebih."
            className="cursor-pointer font-semibold text-teal-700"
            target="__blank"
          >
            https://disnakkan.grobogan.go.id/info/berita/503-mengenal-jenis-jenis-potongan-daging-sapi#:~:text=Karkas%20didefinisikan%20sebagai%20bagian%20tubuh,ekor%20serta%20lemak%20yang%20berlebih.
          </a>
        </li>
        <li>
          <a
            href="https://dispertan.bantenprov.go.id/cara-praktis-menghitung-daging-qurban"
            className="cursor-pointer font-semibold text-teal-700"
            target="__blank"
          >
            https://dispertan.bantenprov.go.id/cara-praktis-menghitung-daging-qurban
          </a>
        </li>
        <li>
          <a
            href="https://pontren.com/2021/07/17/rumus-menghitung-karkas-daging-sapi-dan-kambing/"
            className="cursor-pointer font-semibold text-teal-700"
            target="__blank"
          >
            https://pontren.com/2021/07/17/rumus-menghitung-karkas-daging-sapi-dan-kambing/
          </a>
        </li>
        <li>
          <a
            href="https://yatimmandiri.org/blog/inspirasi/syarat-qurban/"
            className="cursor-pointer font-semibold text-teal-700"
            target="__blank"
          >
            https://yatimmandiri.org/blog/inspirasi/syarat-qurban/
          </a>
        </li>
      </ul>
    </text>
  </div>
)

export default AboutPage
