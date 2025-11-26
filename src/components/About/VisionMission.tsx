import { CheckCircle } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="space-y-4 text-center">
          <p className="text-lg uppercase text-sub-primary font-semibold">
            Visi & Misi
          </p>
          <h2 className="text-3xl md:text-5xl text-brand-primary font-medium font-heading">
            Berkomitmen pada{" "}
            <span className="bg-sub-200 text-sub-primary px-2 rounded-md">
              Masa Depan{" "}
            </span>{" "}
            yang Cerah
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="">
            <h3 className="text-2xl font-bold text-brand-700 mb-6">VISI</h3>
            {/* VISI */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 relative overflow-hidden">
              <p className="text-gray-700 leading-relaxed text-xl">
                “Menjadi perusahaan farmasi inovatif yang mengintegrasikan bahan
                alam, obat generik, dan produk steril berkualitas tinggi untuk
                meningkatkan kesehatan masyarakat Indonesia.”
              </p>
            </div>
          </div>
          {/* MISI */}
          <div>
            <h3 className="text-2xl font-bold text-brand-700 mb-6">MISI</h3>

            <div className="space-y-6">
              {/* Item */}
              <div className="bg-white border border-gray-200 shadow-md p-6 rounded-xl flex gap-4">
                <CheckCircle className="text-brand-600 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brand-700">
                    Mengembangkan Produk Berkualitas:
                  </span>{" "}
                  memproduksi obat herbal terstandar, obat generik, serta
                  sediaan steril yang aman dan efektif.
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-md p-6 rounded-xl flex gap-4">
                <CheckCircle className="text-brand-600 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brand-700">
                    Inovasi Berkelanjutan:
                  </span>{" "}
                  riset untuk meningkatkan pemanfaatan kunyit, formulasi obat
                  generik, dan pengembangan sediaan steril.
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-md p-6 rounded-xl flex gap-4">
                <CheckCircle className="text-brand-600 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brand-700">
                    Pelayanan Pelanggan yang Unggul:
                  </span>{" "}
                  menyediakan pelayanan cepat, informatif, dan edukatif.
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-md p-6 rounded-xl flex gap-4">
                <CheckCircle className="text-brand-600 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brand-700">
                    Pendidikan Kesehatan:
                  </span>{" "}
                  meningkatkan kesadaran mengenai bahan alam, obat generik, dan
                  keamanan sediaan steril.
                </p>
              </div>

              <div className="bg-white border border-gray-200 shadow-md p-6 rounded-xl flex gap-4">
                <CheckCircle className="text-brand-600 w-6 h-6 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-brand-700">
                    Tanggung Jawab Sosial:
                  </span>{" "}
                  melaksanakan program yang mendukung kesehatan dan akses obat
                  berkualitas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
