"use client";
import { useCart } from "@/context/CartContext";

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + (item.product.discountPrice ?? item.product.price) * item.quantity, 0);

  return (
    <div className={`fixed inset-0 z-50 transition-all ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* 背景遮罩 */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      {/* 抽屉内容 */}
      <aside className={`fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold">购物车</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
            关闭
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">购物车为空</div>
          ) : (
            <ul className="space-y-4">
              {cart.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center gap-3">
                  <div className="w-16 h-16 relative rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg className="w-8 h-8 text-indigo-400 dark:text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="white" className="dark:fill-gray-800"/>
                      <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.3" />
                      <path d="M8 34l9-10a2 2 0 0 1 3 0l8 9 4-4a2 2 0 0 1 3 0l5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white line-clamp-1">{product.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">¥{(product.discountPrice ?? product.price).toFixed(2)}</div>
                    <div className="flex items-center mt-2 gap-2">
                      <button className="px-2 py-0.5 border rounded" onClick={() => updateQuantity(product.id, Math.max(1, quantity - 1))}>-</button>
                      <span>{quantity}</span>
                      <button className="px-2 py-0.5 border rounded" onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className="ml-2 text-red-500 hover:text-red-700" onClick={() => removeFromCart(product.id)} title="移除">×</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <div className="flex justify-between mb-4">
            <span>总计：</span>
            <span className="font-bold text-lg text-indigo-600">¥{total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-bold disabled:opacity-50" disabled={cart.length === 0} onClick={clearCart}>
            清空购物车
          </button>
        </div>
      </aside>
    </div>
  );
}
