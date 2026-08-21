"use client";

import React, { useState, useRef } from 'react';
import { Product } from '@/lib/types';
import Link from 'next/link';

interface CustomizerClientProps {
  product: Product;
}

const colorMap: Record<string, string> = {
  'White': '#ffffff',
  'Black': '#000000',
  'Grey': '#9ca3af',
  'Dark Grey': '#4b5563',
  'Blue/White': '#3b82f6',
  'Red/White': '#ef4444',
  'Navy': '#1e3a8a',
  'Olive': '#4d7c0f',
  'Beige': '#f5f5dc',
  'Charcoal': '#374151'
};

export default function CustomizerClient({ product }: CustomizerClientProps) {
  const defaultColor = product.colors[0] || '';
  const defaultSize = product.sizes[0] || '';

  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [customText, setCustomText] = useState("");
  const [customImage, setCustomImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setSelectedColor(defaultColor);
    setSelectedSize(defaultSize);
    setCustomText("");
    setCustomImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const TEXT_PRICE = 5;
  const IMAGE_PRICE = 10;

  const hasText = customText.trim().length > 0;
  const hasImage = customImage !== null;

  const textCost = hasText ? TEXT_PRICE : 0;
  const imageCost = hasImage ? IMAGE_PRICE : 0;
  const totalPrice = product.price + textCost + imageCost;

  const handleAddToCart = () => {
    const customization = {
      productId: product.id,
      productName: product.name,
      basePrice: product.price,
      selectedColor,
      selectedSize,
      customText,
      customImage: customImage ? "Local Image Data" : null,
      totalPrice
    };
    console.log("Added to cart:", customization);
    alert("Added to cart! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
          <span>/</span>
          <Link href={`/products/${product.id}`} className="hover:text-gray-900 transition-colors">{product.name}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Customize</span>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Left Column: Preview */}
          <div className="flex-col-reverse sticky top-6 self-start">
            <div className="aspect-[4/5] w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative">
              {/* Base Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              
              {/* Color Overlay */}
              <div 
                className="absolute inset-0 mix-blend-multiply opacity-40 transition-colors duration-300 pointer-events-none"
                style={{ backgroundColor: colorMap[selectedColor] || 'transparent' }}
              />

              {/* Custom Image */}
              {customImage && (
                <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={customImage} alt="Custom upload" className="max-w-[60%] max-h-[60%] object-contain shadow-sm drop-shadow-md" />
                </div>
              )}

              {/* Custom Text */}
              {hasText && (
                <div className="absolute inset-0 flex flex-col justify-start pt-32 items-center pointer-events-none z-20">
                  <span className="text-3xl font-extrabold text-black/90 uppercase tracking-widest drop-shadow-lg break-words max-w-[80%] text-center mix-blend-overlay">
                    {customText}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Controls */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-2">
              Customize {product.name}
            </h1>
            <p className="text-gray-500 mb-8">Personalize your shirt with custom text and images.</p>

            {/* Colors */}
            <div className="mb-8 border-b border-gray-200 pb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative rounded-full border px-5 py-2.5 flex items-center justify-center text-sm font-medium uppercase transition-all shadow-sm ${
                      selectedColor === color 
                        ? 'border-black bg-black text-white ring-2 ring-black ring-offset-2' 
                        : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span 
                      className="w-3 h-3 rounded-full mr-2 border border-gray-300" 
                      style={{ backgroundColor: colorMap[color] || '#ccc' }}
                    />
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-8 border-b border-gray-200 pb-8">
              <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`relative rounded-xl border px-6 py-3 flex items-center justify-center text-sm font-bold uppercase transition-all shadow-sm ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white ring-2 ring-black ring-offset-2' 
                        : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Text */}
            <div className="mb-8 border-b border-gray-200 pb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Add Custom Text</h3>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">+$5.00</span>
              </div>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Enter text (e.g. YOUR NAME)"
                className="w-full border-gray-300 rounded-xl shadow-sm focus:border-black focus:ring-black px-4 py-3 border text-gray-900 transition-shadow hover:shadow-md"
                maxLength={20}
              />
            </div>

            {/* Custom Image */}
            <div className="mb-8 border-b border-gray-200 pb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Upload Artwork</h3>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">+$10.00</span>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-black file:text-white
                  hover:file:bg-gray-800 cursor-pointer transition-all border border-gray-200 rounded-xl p-2"
              />
              {customImage && (
                <button
                  onClick={() => {
                    setCustomImage(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="mt-3 text-sm text-red-600 font-medium hover:text-red-800 transition-colors"
                >
                  Remove Image
                </button>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="mb-8 bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Price Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Base Price</span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
                {hasText && (
                  <div className="flex justify-between text-gray-600">
                    <span>Custom Text</span>
                    <span>${TEXT_PRICE.toFixed(2)}</span>
                  </div>
                )}
                {hasImage && (
                  <div className="flex justify-between text-gray-600">
                    <span>Custom Image</span>
                    <span>${IMAGE_PRICE.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-extrabold text-gray-900 border-t border-gray-200 pt-3 mt-3">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button 
                onClick={handleReset}
                className="px-6 py-4 border-2 border-gray-300 rounded-2xl text-base font-bold text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                Reset
              </button>
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black border border-transparent rounded-2xl py-4 px-8 flex items-center justify-center text-base font-extrabold text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                Add to Cart — ${totalPrice.toFixed(2)}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
