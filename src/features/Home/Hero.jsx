// src/components/Hero.jsx
export function Hero() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Texto */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
            A melhor loja de <br />
            <span className="text-violet-600">Streetwear</span>
          </h1>
          <p className="text-zinc-600">
            Compre looks autênticos, estilosos e modernos.
          </p>
          <button className="bg-violet-600 hover:bg-violet-700 transition text-white px-6 py-3 rounded-full font-medium">
            Ver coleção
          </button>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src="/src/assets/banner-modelo.png"
            alt="Modelo com roupa streetwear"
            className="max-w-md w-full rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
