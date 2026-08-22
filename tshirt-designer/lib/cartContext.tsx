"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { CartItem } from "./types";

// --- Shape of context value ---------------------------------------------------

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "cartId" | "quantity">) => void;
  removeItem: (cartId: string) => void;
  updateQty: (cartId: string, quantity: number) => void;
  clearCart: () => void;
}

// --- Reducer -----------------------------------------------------------------

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; cartId: string }
  | { type: "UPDATE_QTY"; cartId: string; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "HYDRATE"; payload: CartItem[] };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "HYDRATE":
      return action.payload;
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.cartId !== action.cartId);
    case "UPDATE_QTY":
      return state
        .map((item) =>
          item.cartId === action.cartId
            ? { ...item, quantity: action.quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
}

// --- Persistence helpers ------------------------------------------------------

const STORAGE_KEY = "tstudio_cart_v1";

function serialize(items: CartItem[]): string {
  const stripped = items.map((item) => ({ ...item, customImage: null }));
  return JSON.stringify(stripped);
}

function deserialize(raw: string): CartItem[] {
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as CartItem[];
  } catch {
    return [];
  }
}

// --- Context -----------------------------------------------------------------

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = deserialize(raw);
      if (stored.length > 0) {
        dispatch({ type: "HYDRATE", payload: stored });
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, serialize(items));
  }, [items]);

  const addItem = useCallback(
    (item: Omit<CartItem, "cartId" | "quantity">) => {
      const newItem: CartItem = {
        ...item,
        cartId: crypto.randomUUID(),
        quantity: 1,
      };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    },
    []
  );

  const removeItem = useCallback((cartId: string) => {
    dispatch({ type: "REMOVE_ITEM", cartId });
  }, []);

  const updateQty = useCallback((cartId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QTY", cartId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce(
    (sum, i) => sum + i.totalPrice * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, totalItems, subtotal, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
