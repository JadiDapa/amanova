"use client";

const timeline = [
  {
    year: "1994",
    title: "Berdiri sebagai Pusat Penelitian Kunyit",
    desc: "PT Amanova didirikan sebagai laboratorium riset yang berfokus pada tanaman kunyit dan ekstraksi kurkumin untuk fitofarmaka.",
  },
  {
    year: "1998",
    title: "Peluncuran Produk Pertama – Curcumed",
    desc: "Curcumed menjadi produk herbal unggulan dengan fungsi hepaprotektor dan penambah nafsu makan, membuka langkah awal Amanova di industri fitofarmaka.",
  },
  {
    year: "2004",
    title: "Transisi ke Industri Obat Generik",
    desc: "Memasuki segmen obat generik bermerk, fokus pada analgesik, antipiretik, vitamin, dan obat dasar fasilitas kesehatan.",
  },
  {
    year: "2011",
    title: "Penguatan Produksi & Distribusi",
    desc: "Amanova meningkatkan kapasitas pabrik, menerapkan standar CPOB modern, dan memperluas distribusi nasional.",
  },
  {
    year: "2019",
    title: "Masuk ke Produk Steril & Peluncuran Dexrosep",
    desc: "Membangun fasilitas sediaan steril dan merilis produk injeksi pertama: Dexrosep, terapi hipoglikemia untuk instalasi gawat darurat.",
  },
  {
    year: "Saat Ini",
    title: "Amanova sebagai Perusahaan Farmasi Modern",
    desc: "Bertransformasi dari laboratorium kecil menjadi perusahaan farmasi yang menggabungkan fitofarmaka kunyit, obat generik, dan produk injeksi steril.",
  },
];

export default function History() {
  return (
    <section className="w-full py-20 bg-brand-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-4 text-center">
          <p className="text-lg uppercase text-sub-primary font-semibold">
            HISTORI KAMI
          </p>
          <h2 className="text-3xl md:text-5xl text-brand-primary font-medium font-heading">
            Sejarah{" "}
            <span className="bg-sub-200 text-sub-primary px-2 rounded-md">
              Kami
            </span>{" "}
            di Industri Farmasi
          </h2>
        </div>

        <div className="relative border-l-2 border-brand-500 mt-20">
          {timeline.map((item, index) => (
            <div key={index} className="mb-12 ml-6">
              {/* Dot */}
              <div className="w-4 h-4 bg-brand-600 rounded-full absolute -left-2.5 mt-1.5"></div>

              <h3 className="text-xl font-semibold text-brand-700">
                {item.year}
              </h3>
              <h4 className="text-lg font-bold mt-1">{item.title}</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
