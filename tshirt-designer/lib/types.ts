export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  colors: string[];
  sizes: string[];
}

export interface CartItem {
  cartId: string;         // crypto.randomUUID() — unique per cart line
  productId: string;
  productName: string;
  imageUrl: string;       // product thumbnail
  selectedColor: string;
  selectedSize: string;
  customText: string;
  customImage: string | null; // base64 data-url — stored in memory only, not persisted
  basePrice: number;
  totalPrice: number;
  quantity: number;
}
