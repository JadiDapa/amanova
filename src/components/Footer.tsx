import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const resourcesLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Organisasi", href: "/organization" },
  { name: "Produk", href: "/products" },
  { name: "Kegiatan", href: "/activities" },
];

const servicesLinks = [
  { label: "Instalasi Gawat Darurat", link: "/" },
  { label: "Medical Center", link: "/product" },
  { label: "Dokter Spesialis", link: "/categories" },
  { label: "Konsultasi Virtual", link: "/contact" },
];

const socialMediaLinks = [
  { link: "/", Icon: RiInstagramFill },
  { link: "/product", Icon: RiFacebookFill },
  { link: "/categories", Icon: RiTwitterFill },
];

export default function Footer() {
  return (
    <footer className="relative bg-brand-primary text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-10 lg:flex-row lg:justify-between">
        {/* Left Column */}
        <div className="max-w-md space-y-5">
          <div className="flex items-center gap-3">
            <img
              src="https://www.freeiconspng.com/thumbs/doctor-logo/doctors-medicine-doctor-logo-png-clipart-6.png"
              alt="Logo"
              className="size-20 object-contain brightness-0 invert"
            />{" "}
            <p className="text-4xl text-white font-heading font-semibold">
              RAFSELFMEDIKA
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">(0711) 34429243</h4>
            <p className=" text-white/90">
              Jl. P. Sudirman No.Kav 52-53, RT.5/RW.3, Kb. Kacang,
              <br />
              Kec. Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota
            </p>
          </div>
          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-white placeholder:text-slate-300 w-72 focus:outline-none border border-white"
            />
            <button className="bg-white text-brand-700 font-semibold px-4 rounded-r-lg hover:bg-brand-50 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 text-lg hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.link}
                    className="text-white/80 text-lg hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-4">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} RAFSELFMEDIKA. All rights
            reserved.
          </p>
          <div className="flex gap-3">
            {socialMediaLinks.map(({ link, Icon }) => (
              <a
                href={link}
                key={link}
                className="border border-white/30 hover:border-white hover:bg-white/10 transition p-2 rounded-full"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
