import { useCartContext } from "../../contexts/CartContext";

function ProductDetail({ product }) {
  const { addToCart } = useCartContext();

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover rounded-lg shadow"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p className="text-xl font-semibold mb-4">R$ {product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-3 rounded hover:opacity-90 transition w-full md:w-auto"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
