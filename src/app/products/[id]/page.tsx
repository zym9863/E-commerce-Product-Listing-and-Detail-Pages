import { getProductById } from '@/lib/data/products';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ProductDetailPage({ params: { id } }: { params: { id: string } }) {
  const product = await getProductById(id);
  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-80 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
            <svg className="w-28 h-28 text-indigo-400 dark:text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="white" className="dark:fill-gray-800"/>
              <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.3" />
              <path d="M8 34l9-10a2 2 0 0 1 3 0l8 9 4-4a2 2 0 0 1 3 0l5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          {/* 图片缩略图 */}
          <div className="flex gap-2 mt-4">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="relative w-16 h-16 rounded overflow-hidden border border-gray-200 dark:border-gray-700 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <svg className="w-8 h-8 text-indigo-400 dark:text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="white" className="dark:fill-gray-800"/>
                  <circle cx="16" cy="18" r="3" fill="currentColor" opacity="0.3" />
                  <path d="M8 34l9-10a2 2 0 0 1 3 0l8 9 4-4a2 2 0 0 1 3 0l5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-400 font-bold">{product.rating.toFixed(1)}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">({product.reviews} 条评价)</span>
          </div>
          <div className="flex items-center gap-4 mb-2">
            {product.discountPrice ? (
              <>
                <span className="text-2xl font-bold text-red-600 dark:text-red-400">¥{product.discountPrice.toFixed(2)}</span>
                <span className="line-through text-gray-500 dark:text-gray-400">¥{product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-2xl font-bold text-gray-900 dark:text-white">¥{product.price.toFixed(2)}</span>
            )}
          </div>
          <p className="text-gray-700 dark:text-gray-200 mb-4">{product.description}</p>
          <div className="mb-4">
            <span className="font-semibold text-gray-900 dark:text-white">库存：</span>
            <span className={product.stock > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
              {product.stock > 0 ? `${product.stock} 件` : '无货'}
            </span>
          </div>
          <div className="mb-4">
            <span className="font-semibold text-gray-900 dark:text-white">产品特性：</span>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
