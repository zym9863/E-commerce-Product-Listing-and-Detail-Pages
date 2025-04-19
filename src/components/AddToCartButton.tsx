'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/data/products';

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const disabled = product.stock === 0;

  return (
    <button
      onClick={() => addToCart(product)}
      disabled={disabled}
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors text-lg disabled:opacity-50"
    >
      {disabled ? '已售罄' : '加入购物车'}
    </button>
  );
}
