"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/lib/cartContext";
import { CartItem } from "@/lib/types";

function CartItemRow({ item }: { item: CartItem }) {
  const { removeItem, updateQty } = useCart();

  return (
    <div className="flex gap-4 py-6 border-b border-gray-100 last:border-0">
      <div className="w-24 h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.imageUrl}
          alt={item.productName}
          className="w-full h-full object-cover object-center"
        />
        {item.customImage && (
          <div className="absolute inset-0 flex items-center justify-center p-2 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.customImage}
              alt="Custom artwork"
              className="max-w-[60%] max-h-[60%] object-contain drop-shadow"
            />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-base font-bold text-gray-900 truncate">{item.productName}</h3>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
          <span>Color: <span className="text-gray-800 font-medium">{item.selectedColor}</span></span>
          <span>Size: <span className="text-gray-800 font-medium">{item.selectedSize}</span></span>
        </div>
        {item.customText && (
          <p className="mt-1 text-sm text-indigo-600 font-medium truncate">
            Text: &ldquo;{item.customText}&rdquo;
          </p>
        )}

        <div className="mt-3 flex items-center gap-4">
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <button
              id={`qty-decrease-${item.cartId}`}
              onClick={() => updateQty(item.cartId, item.quantity - 1)}
              className="px-3 py-1.5 text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-3 py-1.5 text-sm font-semibold text-gray-900 min-w-[2rem] text-center">
              {item.quantity}
            </span>
            <button
              id={`qty-increase-${item.cartId}`}
              onClick={() => updateQty(item.cartId, item.quantity + 1)}
              className="px-3 py-1.5 text-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <span className="text-base font-bold text-gray-900 ml-auto">
            ${(item.totalPrice * item.quantity).toFixed(2)}
          </span>

          <button
            id={`remove-${item.cartId}`}
            onClick={() => removeItem(item.cartId)}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>

        {item.quantity > 1 && (
          <p className="mt-1 text-xs text-gray-400">
            ${item.totalPrice.toFixed(2)} each
          </p>
        )}
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        Looks like you have not added anything yet. Browse our collection and customize your perfect tee.
      </p>
      <Link
        href="/products"
        className="inline-flex items-center gap-2 bg-black text-white font-bold px-8 py-4 rounded-2xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default function CartPage() {
  const { items, subtotal, clearCart } = useCart();

  const grandTotal = subtotal;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Your Cart</h1>
          <EmptyCart />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Your Cart</h1>
          <button
            id="clear-cart-btn"
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-2">
              {items.map((item) => (
                <CartItemRow key={item.cartId} item={item} />
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-extrabold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-extrabold text-gray-900 border-t border-gray-100 mt-4 pt-4">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>

              <button
                id="checkout-btn"
                disabled
                className="mt-6 w-full bg-gray-200 text-gray-400 font-bold py-4 px-8 rounded-2xl cursor-not-allowed flex flex-col items-center gap-0.5"
                title="Checkout coming in Phase 7"
              >
                <span>Proceed to Checkout</span>
                <span className="text-xs font-normal opacity-70">Coming Soon - Phase 7</span>
              </button>

              <p className="mt-4 text-xs text-center text-gray-400">
                Free standard shipping on all orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}