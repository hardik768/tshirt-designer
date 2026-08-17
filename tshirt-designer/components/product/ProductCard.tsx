import React from 'react';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <span className="font-semibold text-lg text-gray-900 shrink-0">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <div className="mt-auto space-y-3 pt-4 border-t border-gray-50">
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-1">Colors:</span>
            {product.colors.map(color => (
              <span key={color} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                {color}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-1">Sizes:</span>
            {product.sizes.map(size => (
              <span key={size} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                {size}
              </span>
            ))}
          </div>
          
          <button className="w-full mt-5 rounded-xl bg-black px-4 py-3 text-center text-sm font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all active:scale-[0.98]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
