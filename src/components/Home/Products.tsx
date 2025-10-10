import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Paracetamol",
    category: "Obat",
    image:
      "https://pimpharma.com/wp-content/uploads/2023/02/paracetamol-box-1.png",
    discount: "20% Off",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Blackmores Multivitamin",
    category: "Suplement",
    image:
      "https://blackmores-bucket.s3.ap-southeast-1.amazonaws.com/blackmores/product/images6809c3bdbccb6.png",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Konimex",
    category: "Obat",
    image:
      "https://www.konimex.com/0_repository/images/20180612090355KonimexSiladex_DMP-web.png",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Paracetamol",
    category: "Obat",
    image:
      "https://pimpharma.com/wp-content/uploads/2023/02/paracetamol-box-1.png",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Blackmores Multivitamin",
    category: "Suplement",
    image:
      "https://blackmores-bucket.s3.ap-southeast-1.amazonaws.com/blackmores/product/images6809c3bdbccb6.png",
    rating: 4.5,
  },
];

export default function BestDealsSection() {
  return (
    <section className="bg-white  lg:px-24 gap-12 py-24 px-6 md:px-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-2">
          <p className="text-sm uppercase text-sub-primary border-sub-primary font-semibold border-l-6 pl-2">
            PRODUK KAMI
          </p>
          <h2 className="text-3xl md:text-5xl text-brand-primary font-medium font-heading">
            Produk Keluaran{" "}
            <span className="bg-green-200 text-sub-primary px-2 rounded-md">
              Terbaru
            </span>{" "}
            Kami!
          </h2>
          <p className="mt-2">Pilihan terbaik untuk kesehatan Anda</p>
        </div>
        <a
          href="#"
          className="text-brand-primary font-medium hover:underline flex items-center gap-1"
        >
          LIHAT PRODUK LENGKAP →
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-brand-primary/90 cursor-pointer rounded-2xl p-4 relative group hover:shadow-md transition"
          >
            {product.discount && (
              <span className="absolute top-6 right-6 bg-sub-primary text-white text-xs font-medium px-2 py-1 rounded-md">
                {product.discount}
              </span>
            )}

            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-contain mb-4 bg-white rounded-md"
            />

            {/* Category */}
            <p className="text-xs font-medium border-b max-w-fit leading-4 mb-1 text-white">
              {product.category}
            </p>

            {/* Product Name + Cart Icon */}
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-[17px] font-medium text-white leading-snug flex-1">
                {product.name}
              </h3>
              <button className="text-white rounded-full bg-sub-primary hover:text-sub-800 p-1.5">
                <ShoppingCart className="size-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
