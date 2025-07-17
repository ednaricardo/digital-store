import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../hooks/useProducts";

function RelatedProducts({ currentProductId, category }) {
  const products = useProducts();

  // Filtra produtos da mesma categoria, mas com ID diferente
  const related = products.filter(
    (p) => p.category === category && p.id !== currentProductId
  );

  // Se quiser limitar o número:
  const limited = related.slice(0, 4);

  if (limited.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {limited.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
