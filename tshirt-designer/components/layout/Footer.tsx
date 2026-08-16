import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 tracking-tight">
                T-Studio
              </span>
            </Link>
            <p className="mt-6 text-base text-slate-400 max-w-sm leading-relaxed">
              The premier destination for designing your custom t-shirts. Bring your ideas to life with our premium fabrics and cutting-edge printing technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-base text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-indigo-500 mr-0 group-hover:mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-base text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-indigo-500 mr-0 group-hover:mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-base text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-indigo-500 mr-0 group-hover:mr-2"></span>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-base text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-indigo-500 mr-0 group-hover:mr-2"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-slate-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 transition-all duration-300 h-0.5 bg-indigo-500 mr-0 group-hover:mr-2"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-base text-slate-500">
            &copy; {new Date().getFullYear()} T-Studio, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="text-slate-500 text-sm">Designed with absolute precision.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
