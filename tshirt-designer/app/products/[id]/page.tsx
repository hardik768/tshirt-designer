import React from 'react';
import { products } from '@/lib/products';
import Link from 'next/link';

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Product not found</h2>
        <p className="text-gray-500 mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link href="/products" className="text-blue-600 hover:text-blue-500 font-medium">
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Product Image */}
          <div className="flex-col-reverse">
            <div className="aspect-[4/5] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
            
            <div className="mt-4">
              <p className="text-3xl text-gray-900 font-bold">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Available Colors</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <div key={color} className="relative rounded-full border border-gray-200 px-4 py-2 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 transition-colors cursor-pointer bg-white text-gray-900 shadow-sm">
                    {color}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {product.sizes.map((size) => (
                  <div key={size} className="relative rounded-xl border border-gray-200 px-4 py-3 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 transition-colors cursor-pointer bg-white text-gray-900 shadow-sm">
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <button 
                type="button"
                className="flex-1 bg-black border border-transparent rounded-2xl py-4 px-8 flex items-center justify-center text-base font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Customize
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 space-y-4">
              <p>Free standard shipping on all orders.</p>
              <p>Looking for a unique design? Use our customizer tool to add your own text, images, and artwork to this premium T-shirt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
