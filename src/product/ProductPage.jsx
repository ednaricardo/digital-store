import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useCartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import RelatedProducts from "./RelatedProducts";

function ProductPage() {
  const { id } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCartContext();

  if (!product) return <div className="text-center py-20">Produto não encontrado.</div>;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Produto adicionado ao carrinho!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover rounded-xl" />

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 mb-4">{product.category}</p>
        <p className="text-2xl font-bold text-black mb-6">R$ {product.price.toFixed(2)}</p>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductPage;

