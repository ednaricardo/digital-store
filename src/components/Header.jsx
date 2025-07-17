import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">Drip Store</Link>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-gray-700">Início</Link>
        <Link to="/cart" className="hover:text-gray-700">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;
