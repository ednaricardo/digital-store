import { ShoppingBag, User, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-widest">DRIP STORE</h1>

      {/* Links */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-zinc-800 hover:text-black transition">Início</a>
        <a href="#" className="text-zinc-600 hover:text-black transition">Produtos</a>
        <a href="#" className="text-zinc-600 hover:text-black transition">Contato</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-6">
        <Search className="w-5 h-5 cursor-pointer text-zinc-600 hover:text-black" />
        <User className="w-5 h-5 cursor-pointer text-zinc-600 hover:text-black" />
        <ShoppingBag className="w-5 h-5 cursor-pointer text-zinc-600 hover:text-black" />
      </div>
    </header>
  );
}
