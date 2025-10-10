import { ChevronRight } from "lucide-react";

const stats = [
  { value: "100+", label: "Katalog Produk" },
  { value: "5", label: "Layanan Tersedia" },
  { value: "99%", label: "Pasien Puas" },
];

export default function About() {
  return (
    <section className="px-8 lg:px-24 gap-12 py-24 bg-brand-900 text-white">
      {/* Top Text Section */}
      <div className="flex gap-12">
        <div className="px-4 flex-1">
          <div className="flex flex-col md:flex-row gap-4 h-[500px]">
            {/* Left big image */}
            <div className="flex-1">
              <img
                src="https://plus.unsplash.com/premium_photo-1673953510107-d5aee40d80a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZGljYWx8ZW58MHx8MHx8fDA%3D"
                alt="Main"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Right two stacked images */}
            <div className="flex-1 flex flex-col gap-4">
              <img
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Bottom"
                className="w-full h-1/4 object-cover rounded-2xl"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Top"
                className="w-full h-3/4 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-10 flex-2 ">
          <p className="text-sm uppercase text-sub-400 border-sub-400 font-semibold border-l-6 pl-2">
            TENTANG KAMI
          </p>
          <h2 className="text-3xl md:text-5xl font-medium font-heading">
            Sekilas Tentang{" "}
            <span className="bg-green-200 text-sub-primary px-2 rounded-md">
              Rafselfmedika
            </span>
          </h2>
          <p className="text-white max-w-2xl mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ab nam vero architecto?
          </p>
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3  text-center md:text-left mt-12">
            {stats.map((item, index) => (
              <div
                key={index}
                className="p-6 flex flex-col items-center md:items-start border-l-0 md:border-l-2 border-white "
              >
                <h3 className="text-6xl font-bold mb-2 font-heading">
                  {item.value}
                </h3>
                <p className="text-white">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-12 ">
            <button className="px-5 py-2 flex items-center gap-2 rounded-lg bg-sub-primary transition">
              <p>Selengkapnya</p>
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
