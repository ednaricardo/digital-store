import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block border rounded-xl overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 font-bold text-black">R$ {product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
