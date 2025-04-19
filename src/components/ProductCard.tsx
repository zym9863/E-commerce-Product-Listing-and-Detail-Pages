'use client';


import Link from 'next/link';
import { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, price, discountPrice, rating } = product;
  const { addToCart } = useCart();

  // Calculate discount percentage if there's a discount price
  const discountPercentage = discountPrice 
    ? Math.round(((price - discountPrice) / price) * 100) 
    : 0;

  return (
    <Link 
      href={`/products/${id}`}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
    >
      <div className="relative w-full h-64">
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-xl">
          <svg className="w-20 h-20 text-indigo-400 dark:text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="white" className="dark:fill-gray-800"/>
            <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.3" />
            <path d="M8 34l9-10a2 2 0 0 1 3 0l8 9 4-4a2 2 0 0 1 3 0l5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        {discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
            -{discountPercentage}%
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {name}
        </h3>
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 drop-shadow-sm ${
                  i < Math.floor(rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-indigo-500 dark:text-indigo-300 font-semibold ml-2">
            {rating.toFixed(1)}
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            {discountPrice ? (
              <div className="flex items-end gap-2">
                <span className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">
                  ¥{discountPrice.toFixed(2)}
                </span>
                <span className="text-base text-gray-400 dark:text-gray-500 line-through">
                  ¥{price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">
                ¥{price.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
            aria-label="Add to cart"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
