import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const menu = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Organisasi", href: "/organization" },
  { name: "Produk", href: "/products" },
  { name: "Kegiatan", href: "/activities" },
];

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex justify-between items-center w-full px-24 py-3">
      <div className="flex gap-3 items-center">
        <img
          src="https://www.freeiconspng.com/thumbs/doctor-logo/doctors-medicine-doctor-logo-png-clipart-6.png"
          alt="Logo Rafselfmedika"
          className="size-14"
        />
        <p className="text-2xl  font-heading font-semibold">
          <span className="text-brand-primary">RAFSELF</span>
          <span className="text-sub-primary">MEDIKA</span>
        </p>
      </div>
      <div className="flex gap-3 ">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-lg font-heading border-md px-3 bg-transparent hover:bg-brand-primary/20 rounded-md hover:text-brand-primary transition-colors ${
              pathname === item.href ? "font-semibold text-brand-primary" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <button className="rounded-full flex gap-4 h-9 px-7 items-center text-white bg-brand-primary">
        <p>Kontak Kami</p>
        <Phone fill="white" strokeWidth={0} className="size-4" />
      </button>
    </nav>
  );
}
