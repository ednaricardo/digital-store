import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCartContext();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
        <Link
          to="/"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
          Voltar à loja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Seu Carrinho</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm">Quantidade: {item.quantity}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold">
                R$ {(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 text-sm mt-2 hover:underline"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-10">
        <p className="text-xl font-bold mb-4">
          Total: R$ {total.toFixed(2)}
        </p>
        <div className="flex gap-4 justify-end">
          <button
            onClick={clearCart}
            className="px-5 py-2 border border-gray-400 rounded hover:bg-gray-100"
          >
            Esvaziar carrinho
          </button>
          <Link
            to="/checkout"
            className="bg-black text-white px-6 py-2 rounded hover:opacity-90 transition"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

