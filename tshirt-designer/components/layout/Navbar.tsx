import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/60 backdrop-blur-lg shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 tracking-tight transform group-hover:scale-105 transition-transform duration-300">
                T-Studio
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-semibold transition-colors group"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
            <Link
              href="/products"
              className="relative text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-semibold transition-colors group"
            >
              Products
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
            <Link
              href="/cart"
              className="relative text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-semibold transition-colors group"
            >
              Cart
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
