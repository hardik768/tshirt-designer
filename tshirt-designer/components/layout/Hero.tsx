import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-slate-50 overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '5s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '6s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left pt-12 lg:pt-0">
            <h1 className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl">
              <span className="block mb-2">Design your</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 drop-shadow-sm">
                perfect t-shirt
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Express yourself with our premium custom t-shirts. Create unique, high-quality designs in seconds with our intuitive tools. Perfect for you, your team, or your brand.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 hover:scale-105 transform transition-all duration-300 md:text-lg"
                >
                  Shop Now
                </Link>
              </div>
              <div className="mt-4 sm:mt-0 rounded-full">
                <Link
                  href="/products"
                  className="w-full flex items-center justify-center px-8 py-4 border-2 border-indigo-100 text-base font-bold rounded-full text-indigo-600 bg-white hover:bg-indigo-50 hover:border-indigo-200 hover:scale-105 transform transition-all duration-300 md:text-lg shadow-sm"
                >
                  Explore Designs
                </Link>
              </div>
            </div>
          </div>
          
          {/* Visual Showcase Area */}
          <div className="relative mt-12 lg:mt-0 hidden md:block">
            <div className="relative rounded-2xl bg-white/40 backdrop-blur-3xl border border-white/50 shadow-2xl p-8 transform hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl shadow-inner p-10 flex items-center justify-center min-h-[400px]">
                {/* SVG T-Shirt Illustration with floating animation */}
                <svg
                  className="w-64 h-64 text-indigo-500 filter drop-shadow-xl animate-pulse"
                  style={{ animationDuration: '3s' }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.9 9.5 16 5h-2.1l-1.3 1.9c-.3.4-.8.6-1.3.6h-2.6c-.5 0-1-.2-1.3-.6L6.1 5H4L.1 9.5c-.3.4-.2 1 .2 1.3l2.8 2v8.2c0 .6.4 1 1 1h15.8c.6 0 1-.4 1-1v-8.2l2.8-2c.4-.3.5-.9.2-1.3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
