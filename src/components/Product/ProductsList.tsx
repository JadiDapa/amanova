import { ShoppingCart, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type Product = {
  no: string;
  merk: string;
  zat_aktif: string;
  isi_box: string;
  golongan: string;
  indikasi: string;
  harga: string;
  gambar: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/anp464vgibayl")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = [...products].reverse().filter((p) => {
    const s = search.toLowerCase();
    return (
      p.merk.toLowerCase().includes(s) ||
      p.zat_aktif.toLowerCase().includes(s) ||
      p.golongan.toLowerCase().includes(s) ||
      p.indikasi.toLowerCase().includes(s)
    );
  });

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <section className="bg-white lg:px-24 gap-12 py-24 px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl text-brand-primary font-medium font-heading">
            Daftar{" "}
            <span className="bg-sub-200 text-sub-primary px-2 rounded-md">
              Produk
            </span>{" "}
            Amanova!
          </h2>
        </div>

        {/* Search Bar */}
        <div className="w-full md:w-80 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-5" />
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl py-2.5 pl-11 pr-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-sub-primary/40 transition"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filtered.map((product) => (
          <div
            onClick={() => navigate(`/products/${product.no}`)}
            key={product.no}
            className="bg-brand-primary/90 cursor-pointer rounded-2xl p-4 relative group hover:shadow-md transition"
          >
            {/* Product Image */}
            <img
              src={product.gambar}
              alt={product.merk}
              className="w-full h-60 object-contain mb-4 bg-white rounded-md"
            />

            <p className="text-xs font-medium border-b max-w-fit leading-4 mb-1 text-white">
              {product.golongan}
            </p>

            <div className="flex justify-between items-start gap-2">
              <h3 className="text-[17px] font-medium text-white leading-snug flex-1">
                {product.merk}
              </h3>
              <button className="text-white rounded-full bg-sub-primary hover:text-sub-800 p-1.5">
                <ShoppingCart className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          Produk tidak ditemukan.
        </p>
      )}
    </section>
  );
}
