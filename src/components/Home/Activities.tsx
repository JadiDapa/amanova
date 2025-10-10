export default function Activities() {
  const posts = [
    {
      id: 1,
      title:
        "Kegiatan Bimbingan Penjagaan Kesehatan Lansia di Rumah Memberikan Dampak Positif",
      author: "Olivia Rhye",
      date: "20 September 2025",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1200&q=80",
      description:
        "We sat down with London's fast-growing brand and product design studio, Makr & Co. to find out how they’ve used Untitled UI to 2x their revenue.",
      tags: ["Design", "Research", "Interviews"],
      featured: true,
    },
    {
      id: 2,
      title: "Tim Rafselfmedika Mengadakan Workshop Kesehatan Masyarakat",
      author: "Phoenix Baker",
      date: "19 September 2025",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      description:
        "“I began to notice that there was a sharp contrast between well-made...”",
      tags: ["Design", "Research"],
    },
    {
      id: 3,
      title:
        "Suplemen Terbaru dari Rafselfmedika Terbukti Efekti Dukung Imun Tubuh",
      author: "Lana Steiner",
      date: "18 September 2025",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      description:
        "Starting a business with your spouse or significant other is an exciting but challenging journey.",
      tags: ["Business", "Research"],
    },
    {
      id: 4,
      title: "Studi Terbaru: Diet Nabati Tingkatkan Kesehatan dan Umur Panjang",
      author: "Lana Steiner",
      date: "18 September 2025",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      description:
        "Eating more plants and less meat has been tied to a longer life and a lower risk of chronic diseases.",
      tags: ["Health", "Research"],
    },
  ];

  const featured = posts.find((p) => p.featured);
  const others = posts.filter((p) => !p.featured);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-2">
          <p className="text-sm uppercase text-sub-primary border-sub-primary font-semibold border-l-6 pl-2">
            KEGIATAN KAMI
          </p>
          <h2 className="text-3xl md:text-5xl text-brand-primary font-medium font-heading">
            Kami Mengayomi{" "}
            <span className="bg-green-200 text-sub-primary px-2 rounded-md">
              Semua
            </span>{" "}
            Untuk Sehat
          </h2>
          <p className="mt-2">
            Berikut adalah beberapa kegiatan yang kami lakukan untuk kesehatan
            Anda
          </p>
        </div>
        <a
          href="#"
          className="text-brand-primary font-medium hover:underline flex items-center gap-1"
        >
          LIHAT KEGIATAN LENGKAP →
        </a>
      </div>

      {/* Layout */}
      <div className="flex gap-8">
        {/* Featured Post (big one on left) */}
        <div className="w-2/5">
          <div className="rounded-2xl overflow-hidden  bg-white  transition">
            <img
              src={featured?.image}
              alt={featured?.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="py-3 space-y-2">
              <p className="text-sm text-gray-500">{featured?.date}</p>
              <h3 className="text-xl font-semibold hover:text-brand-primary transition cursor-pointer">
                {featured?.title}
              </h3>
              <p className="text-gray-600 text-sm">{featured?.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {featured?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xm bg-sub-primary/10 text-brand-primary px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column (small posts) */}
        <div className="w-3/5 space-y-4">
          {others.map((post) => (
            <div
              key={post.id}
              className="flex gap-4  w-full items-start hover:shadow-md transition rounded-xl overflow-hidden bg-white border-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-48 h-32 object-cover flex-shrink-0 rounded-s-md"
              />
              <div className="flex flex-col justify-between py-2">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-semibold">
                    {post.date}
                  </p>
                  <h4 className="font-semibold text-lg leading-snug hover:text-brand-primary transition cursor-pointer">
                    {post.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-sub-primary/10 text-brand-primary px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
