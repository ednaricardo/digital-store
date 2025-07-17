// src/components/CartItem.jsx
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../lib/formatPrice";
import { X } from "lucide-react";

export default function CartItem({ product }) {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <h4 className="font-semibold">{product.name}</h4>
          <p className="text-sm text-gray-500">{formatPrice(product.price)}</p>
          <div className="mt-1 flex items-center gap-2">
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={() => updateQuantity(product.id, product.quantity - 1)}
              disabled={product.quantity <= 1}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={() => updateQuantity(product.id, product.quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(product.id)}
        className="text-red-500 hover:text-red-700"
      >
        <X size={18} />
      </button>
    </div>
  );
}
