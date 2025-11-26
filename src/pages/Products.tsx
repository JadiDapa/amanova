import PageHeader from "../components/PageHeader";
import ProductList from "../components/Product/ProductsList";

export default function ProductPage() {
  return (
    <>
      <PageHeader
        title="Kami Hadirkan Produk Terbaik untuk Anda"
        description="Jelajahi berbagai produk unggulan kami yang dirancang untuk memenuhi kebutuhan Anda dengan kualitas terbaik dan inovasi terkini."
      />
      <ProductList />
    </>
  );
}
