import HeroSection from "./HeroSection";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../hooks/useProducts";
const { products, loading } = useProducts();

function HomePage() {
  const products = useProducts();

  return (
    <div>
      <HeroSection />
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}

export default HomePage;
