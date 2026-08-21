import React from 'react';
import { products } from '@/lib/products';
import Link from 'next/link';
import CustomizerClient from './CustomizerClient';

export default async function CustomizePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Product not found</h2>
        <p className="text-gray-500 mb-8">The product you are trying to customize does not exist or has been removed.</p>
        <Link href="/products" className="text-blue-600 hover:text-blue-500 font-medium">
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return <CustomizerClient product={product} />;
}
