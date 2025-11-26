import { HeartPulse, Hospital, UserRound } from "lucide-react";

export default function HealthcareServicesSection() {
  const services = [
    {
      id: 1,
      title: "Emergency",
      description:
        "Layanan darurat selama 24 jam, memberikan respon cepat untuk situasi medis kritis.",
      icon: <HeartPulse className="size-6 text-brand-primary" />,
      active: true,
    },
    {
      id: 2,
      title: "Medical Center",
      description:
        "Fasilitas modern dengan peralatan canggih dan tenaga medis profesional.",
      icon: <Hospital className="size-6 text-brand-primary" />,
    },
    {
      id: 3,
      title: "Doctor Specialist",
      description:
        "Konsultasi dengan dokter spesialis dari berbagai bidang kesehatan.",
      icon: <UserRound className="size-6 text-brand-primary" />,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
        {/* Left: Image */}

        {/* Right: Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm uppercase text-sub-400 border-sub-400 font-semibold border-l-6 pl-2">
              LAYANAN KAMI
            </p>
            <h2 className="text-3xl md:text-5xl text-brand-primary font-medium font-heading">
              Kami Melayani <br />
              dengan Sepenuh{" "}
              <span className="bg-sub-200 text-sub-primary px-2 rounded-md">
                Hati
              </span>
            </h2>
            <p className="text-gray-600 max-w-lg">
              Kami memberikan pelayanan kesehatan lengkap dengan fasilitas dan
              tenaga medis terbaik untuk kebutuhan Anda dan keluarga.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex items-start gap-4 p-4 border-2  rounded-xl hover:shadow-sm transition ${
                  service.active
                    ? "border-brand-primary shadow-lg"
                    : "border-gray-200"
                }`}
              >
                <div className="bg-sub-primary/10 rounded-full p-3">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-brand-primary font-heading">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-2xl shadow-md">
          <div className="absolute -top-4 -left-7 w-1/4 h-2/3 bg-sub-primary rounded-2xl opacity-30 z-0" />
          <div className="absolute -bottom-4 -right-4 w-2/3 h-1/3 bg-brand-primary rounded-2xl opacity-30 z-0" />
          <img
            src="https://www.amnhealthcare.com/siteassets/amn-insights/news-and-features/home_healthcare.jpg"
            alt="Healthcare team"
            className="w-full h-full object-cover rounded-2xl z-10 relative"
          />
        </div>
      </div>
    </section>
  );
}
