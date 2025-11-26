import { ChevronRight } from "lucide-react";

const stats = [
  { value: "100+", label: "Katalog Produk" },
  { value: "5", label: "Layanan Tersedia" },
  { value: "99%", label: "Pasien Puas" },
];

export default function Maps() {
  return (
    <section className="px-8 lg:px-24 bg-brand-50 gap-12 py-24 ">
      {/* Top Text Section */}
      <div className="flex gap-12">
        <div className="flex-1 shadow-xl bg-brand-300 rounded-3xl p-4">
          <img
            src="/denah.jpg"
            alt="Main"
            className="w-[600px] object-cover rounded-2xl"
          />
        </div>

        <div className="space-y-4 mb-10 ">
          <p className="text-sm uppercase text-sub-400 border-sub-400 font-semibold border-l-6 pl-2">
            DENAH
          </p>
          <h2 className="text-3xl md:text-5xl font-medium font-heading">
            Kunjungi Area{" "}
            <span className="bg-sub-200 text-sub-primary px-2 rounded-md">
              Kami
            </span>
          </h2>
          <p className="text-lg max-w-2xl mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ab nam vero architecto?
          </p>
        </div>
      </div>
    </section>
  );
}
