import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white  lg:px-24 gap-12 py-12 px-6 md:px-12">
      <div className="relative  rounded-4xl bg-brand-500/80 text-white py-24 flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1681842883882-b5c1c9f37869?q=80&w=1181&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hospital background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        {/* Overlay gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-brand-500/40 to-sub-primary/40"></div> */}

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Percayakan Kami Menjadi{" "}
            <span className="bg-sub-primary  text-white px-2 rounded-md">
              Partner
            </span>{" "}
            <br /> Kesehatan Anda
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Kami berkomitmen memberikan pelayanan kesehatan terbaik untuk Anda
            dan keluarga. Silakan hubungi kami untuk informasi lebih lanjut.
          </p>
          <a
            href="#contact"
            className=" flex items-center max-w-fit mx-auto gap-2    bg-white text-brand-700 font-semibold px-6 py-2.5 rounded-lg shadow-md hover:bg-brand-50 transition"
          >
            <Phone className="size-5" />
            <p>Hubungi Kami</p>
          </a>
        </div>
      </div>
    </section>
  );
}
