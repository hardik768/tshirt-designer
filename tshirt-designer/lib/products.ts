import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: 25.00,
    imageUrl: 'https://placehold.co/400x500/f8f9fa/343a40?text=Classic+White+Tee',
    colors: ['White', 'Black', 'Grey'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Vintage Wash Black Tee',
    price: 30.00,
    imageUrl: 'https://placehold.co/400x500/212529/f8f9fa?text=Vintage+Wash+Black',
    colors: ['Black', 'Dark Grey'],
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  {
    id: '3',
    name: 'Striped Summer Tee',
    price: 28.50,
    imageUrl: 'https://placehold.co/400x500/e9ecef/495057?text=Striped+Summer+Tee',
    colors: ['Blue/White', 'Red/White'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: '4',
    name: 'Graphic Logo T-Shirt',
    price: 35.00,
    imageUrl: 'https://placehold.co/400x500/6c757d/ffffff?text=Graphic+Logo+Tee',
    colors: ['Navy', 'White'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    name: 'Oversized Streetwear Tee',
    price: 32.00,
    imageUrl: 'https://placehold.co/400x500/adb5bd/212529?text=Oversized+Streetwear',
    colors: ['Olive', 'Beige', 'Black'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Premium Pima Cotton Tee',
    price: 45.00,
    imageUrl: 'https://placehold.co/400x500/ced4da/495057?text=Premium+Pima+Cotton',
    colors: ['Navy', 'White', 'Black', 'Charcoal'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
];
