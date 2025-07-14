// src/components/Navbar.jsx
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest">DRIP STORE</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-10">
          <a href="#" className="text-zinc-800 hover:text-black transition">Início</a>
          <a href="#" className="text-zinc-800 hover:text-black transition">Produtos</a>
          <a href="#" className="text-zinc-800 hover:text-black transition">Sobre</a>
          <a href="#" className="text-zinc-800 hover:text-black transition">Contato</a>
        </nav>

        {/* Ícones */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-zinc-700 hover:text-black transition">Login</button>
          <button className="text-zinc-700 hover:text-black transition">🛒</button>
        </div>

        {/* Menu mobile button */}
        <button
          className="md:hidden text-zinc-800 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Menu mobile animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t px-4 py-4 flex flex-col gap-4"
          >
            <a href="#" className="text-zinc-800 hover:text-black">Início</a>
            <a href="#" className="text-zinc-800 hover:text-black">Produtos</a>
            <a href="#" className="text-zinc-800 hover:text-black">Sobre</a>
            <a href="#" className="text-zinc-800 hover:text-black">Contato</a>
            <hr />
            <button className="text-zinc-700 hover:text-black">Login</button>
            <button className="text-zinc-700 hover:text-black">🛒 Carrinho</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
