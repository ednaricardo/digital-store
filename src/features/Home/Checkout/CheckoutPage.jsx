function CheckoutPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>

      <form className="space-y-4">
        <div>
          <label className="block mb-1">Nome completo</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Endereço de entrega</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1">Número do cartão</label>
          <input type="text" className="w-full border p-2 rounded" />
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
