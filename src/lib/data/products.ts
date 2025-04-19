export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  images: string[];
  stock: number;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: '高性能无线耳机',
    description: '这款高性能无线耳机采用最新蓝牙5.2技术，提供卓越的音质和稳定的连接。配备主动降噪功能，让您沉浸在音乐世界中，不受外界干扰。超长续航能力，单次充电可使用长达30小时。',
    price: 999,
    discountPrice: 799,
    rating: 4.8,
    reviews: 245,
    category: '电子产品',
    images: [
      '/images/headphones-1.jpg',
      '/images/headphones-2.jpg',
      '/images/headphones-3.jpg',
    ],
    stock: 50,
    features: [
      '主动降噪技术',
      '蓝牙5.2连接',
      '30小时续航',
      'IPX5防水',
      '触控操作',
    ],
  },
  {
    id: '2',
    name: '智能手表',
    description: '多功能智能手表，支持心率监测、血氧检测、睡眠分析等健康功能。防水设计，适合各种运动场景。支持多种运动模式，精准记录您的运动数据。',
    price: 1299,
    discountPrice: 1099,
    rating: 4.6,
    reviews: 189,
    category: '电子产品',
    images: [
      '/images/smartwatch-1.jpg',
      '/images/smartwatch-2.jpg',
    ],
    stock: 35,
    features: [
      '心率监测',
      '血氧检测',
      '睡眠分析',
      '50米防水',
      '14天续航',
    ],
  },
  {
    id: '3',
    name: '超薄笔记本电脑',
    description: '轻薄设计，重量仅为1.2kg，厚度13.9mm，便于携带。配备高性能处理器和高清显示屏，满足办公和娱乐需求。指纹识别，一触即开，保障安全。',
    price: 6999,
    discountPrice: 6499,
    rating: 4.9,
    reviews: 321,
    category: '电子产品',
    images: [
      '/images/laptop-1.jpg',
      '/images/laptop-2.jpg',
      '/images/laptop-3.jpg',
    ],
    stock: 20,
    features: [
      '超薄设计',
      '高性能处理器',
      '高清显示屏',
      '指纹识别',
      '快速充电',
    ],
  },
  {
    id: '4',
    name: '智能家居套装',
    description: '包含智能音箱、智能灯泡、智能插座等多种设备，打造智能家居生活。支持语音控制，远程操作，定时设置等功能。兼容多种智能家居平台，扩展性强。',
    price: 1599,
    discountPrice: 1399,
    rating: 4.5,
    reviews: 156,
    category: '智能家居',
    images: [
      '/images/smarthome-1.jpg',
      '/images/smarthome-2.jpg',
    ],
    stock: 30,
    features: [
      '语音控制',
      '远程操作',
      '定时设置',
      '场景联动',
      '兼容多平台',
    ],
  },
  {
    id: '5',
    name: '高清投影仪',
    description: '支持4K超高清分辨率，画面清晰细腻。内置智能系统，支持多种流媒体平台。自动对焦和梯形校正，简化设置过程。低噪音设计，不影响观影体验。',
    price: 3999,
    discountPrice: 3599,
    rating: 4.7,
    reviews: 203,
    category: '电子产品',
    images: [
      '/images/projector-1.jpg',
      '/images/projector-2.jpg',
    ],
    stock: 15,
    features: [
      '4K超高清',
      '智能系统',
      '自动对焦',
      '低噪音设计',
      '支持蓝牙连接',
    ],
  },
  {
    id: '6',
    name: '便携式蓝牙音箱',
    description: '小巧便携，音质出色，低音强劲。防水设计，户外使用无忧。支持TWS双音箱连接，营造立体声效果。内置麦克风，支持通话功能。',
    price: 399,
    discountPrice: 299,
    rating: 4.4,
    reviews: 178,
    category: '电子产品',
    images: [
      '/images/speaker-1.jpg',
      '/images/speaker-2.jpg',
    ],
    stock: 60,
    features: [
      '便携设计',
      '防水功能',
      'TWS连接',
      '通话功能',
      '12小时续航',
    ],
  },
  {
    id: '7',
    name: '电动牙刷',
    description: '采用声波技术，高频震动，深层清洁牙齿。多种清洁模式，满足不同需求。智能计时功能，确保刷牙时间充足。防水设计，使用安全。',
    price: 599,
    discountPrice: 499,
    rating: 4.6,
    reviews: 145,
    category: '个人护理',
    images: [
      '/images/toothbrush-1.jpg',
      '/images/toothbrush-2.jpg',
    ],
    stock: 40,
    features: [
      '声波技术',
      '多种模式',
      '智能计时',
      '防水设计',
      '长效续航',
    ],
  },
  {
    id: '8',
    name: '空气净化器',
    description: '高效过滤PM2.5、甲醛等有害物质。采用HEPA滤网，过滤效率高达99.97%。智能检测空气质量，自动调节工作模式。静音设计，夜间使用不受干扰。',
    price: 1999,
    discountPrice: 1799,
    rating: 4.8,
    reviews: 210,
    category: '家用电器',
    images: [
      '/images/airpurifier-1.jpg',
      '/images/airpurifier-2.jpg',
    ],
    stock: 25,
    features: [
      'HEPA滤网',
      '智能检测',
      '静音设计',
      '定时功能',
      '滤网更换提醒',
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getDiscountedProducts(): Product[] {
  return products.filter(product => product.discountPrice !== undefined);
}
