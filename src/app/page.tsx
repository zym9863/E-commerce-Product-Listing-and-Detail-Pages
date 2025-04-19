import Image from "next/image";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16">
      <Image src="/next.svg" alt="logo" width={120} height={30} className="mb-6 dark:invert" />
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">欢迎来到电商商城</h1>
      <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg">发现优质商品，享受便捷购物体验！</p>
      <Link
        href="/products"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-md"
      >
        进入商品列表
      </Link>
    </div>
  );
}

