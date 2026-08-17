import React from 'react';
import { products } from '@/lib/products';
import { ProductList } from '@/components/product/ProductList';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-bold tracking-wider text-blue-600 uppercase mb-3">
            Shop the Look
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Our Premium Collection
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 sm:text-xl leading-relaxed">
            Discover our carefully curated selection of high-quality T-shirts, designed for perfect fit, exceptional comfort, and timeless style.
          </p>
        </div>
        
        <ProductList products={products} />
      </div>
    </div>
  );
}
