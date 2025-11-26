import { CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col pt-24 lg:flex-row bg-linear-gradient start justify-between px-6 lg:px-24 gap-12 bg-white">
      {/* Left Text Section */}
      <div className="flex-1 space-y-6  pt-12 lg:py-16">
        <h1 className="text-4xl lg:text-6xl font-heading font-medium leading-tight text-brand-primary">
          Bersama Kami{" "}
          <span className="bg-sub-100 text-sub-primary px-2 rounded-md">
            Prioritaskan
          </span>{" "}
          Kesehatan Anda
        </h1>

        <p className="text-gray-600  lg:text-lg max-w-md">
          Layanan kesehatan digital yang menghubungkan pasien dengan tenaga
          profesional untuk konsultasi dan perawatan kesehatan.
        </p>

        <div className="flex flex-wrap gap-2 lg:gap-4">
          <button className="px-5 lg:px-8 py-1 lg:py-2 bg-brand-primary text-white rounded-full hover:bg-gray-800 transition">
            Ayo Mulai
          </button>
          <button className="px-5 lg:px-8 py-1 lg:py-2  border-sub-primary text-sub-primary border-2 rounded-full hover:bg-sub-primary transition">
            Lihat Lebih Banyak
          </button>
        </div>

        <div className="flex items-center gap-2 text-brand-primary font-medium mt-8 lg:mt-20">
          <span>Tertarik Berpartner dengan Kami?</span>
          <span className="text-xl">→</span>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-end pb-12 ">
        <div className="w-[480px] h-[320px] lg:h-[540px] relative ">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Doctor"
            className="rounded-2xl w-[500px] h-full  mx-auto shadow-lg object-cover"
          />
          <div className="absolute w-64 bottom-16 right-4 bg-white shadow-md rounded-lg px-4 py-3 flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Support"
              className="size-14 rounded-md"
            />
            <div>
              <p className="font-semibold text-sm">
                24/7 Support For Virtual Clinics
              </p>
              <p className="text-xs text-gray-500">Service #1</p>
            </div>
          </div>

          <div className="absolute w-64 items-center flex gap-2 bottom-4 right-4 text-white bg-brand-primary/80 shadow-md rounded-lg px-5 py-2 text-sm font-medium ">
            <CalendarDays strokeWidth={1.1} className="size-5" />
            <p>Flexibility & Convenience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
