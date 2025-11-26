import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

type Product = {
  no: string;
  merk: string;
  zat_aktif: string;
  isi_box: string;
  golongan: string;
  indikasi: string;
  harga: string;
  gambar: string;
};

export default function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/anp464vgibayl")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const product = products.find((p) => p.no === id);

  if (loading) {
    return <p className="text-center mt-10">Memuat detail produk...</p>;
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-gray-600 mb-4">Produk tidak ditemukan.</p>
        <Link to="/products" className="text-sub-primary font-medium underline">
          Kembali ke daftar produk
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-primary mb-10"
      >
        <ArrowLeft className="size-5" />
        Kembali
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 bg-white rounded-2xl p-10 shadow-md">
        {/* Left Side — Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.gambar}
            alt={product.merk}
            className="w-full max-w-sm h-auto object-contain bg-white rounded-xl shadow-sm p-6"
          />
        </div>

        {/* Right Side — Product Information */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-primary leading-tight">
            {product.merk}
          </h1>

          <div className="flex gap-4">
            <span className="bg-sub-primary text-white px-3 py-1.5 rounded-md text-sm font-medium">
              {product.golongan}
            </span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {product.indikasi}
          </p>

          {/* Detail Table */}
          <div className="mt-6 border rounded-xl p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-brand-primary mb-4">
              Informasi Produk
            </h3>

            <div className="space-y-3 text-gray-700">
              <p>
                <b>Zat Aktif:</b> {product.zat_aktif}
              </p>
              <p>
                <b>Isi Box:</b> {product.isi_box}
              </p>
              <p>
                <b>Harga:</b>{" "}
                <span className="text-sub-primary font-bold text-lg">
                  {product.harga}
                </span>
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4">
            <button className="w-full md:w-auto px-8 py-3 bg-sub-primary text-white rounded-xl font-semibold hover:bg-sub-primary/80 transition">
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
