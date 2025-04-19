[English Version](/README_EN.md) | [中文文档](/README.md)

# 电商商品展示与详情页面

本项目是基于 [Next.js](https://nextjs.org) 框架开发的电商商品展示与详情页面应用，包含商品列表、商品详情、购物车等核心功能，界面简洁现代，支持响应式设计。

## 主要功能
- 商品列表页：浏览所有商品，展示商品名称、价格、折扣、评分等信息。
- 商品详情页：查看单个商品的详细信息，包括描述、图片、价格、库存、特色等。
- 购物车：添加、移除商品，调整数量，计算总价，支持清空购物车。
- 全局导航栏与页脚，良好的用户体验。

## 目录结构
```
src/
  app/                // Next.js 路由与页面目录
    page.tsx          // 首页（欢迎页）
    layout.tsx        // 全局布局
    products/         // 商品相关页面
      [id]/page.tsx   // 商品详情页（动态路由）
  components/         // 复用组件
    ProductCard.tsx   // 商品卡片组件
    CartDrawer.tsx    // 购物车抽屉组件
    AddToCartButton.tsx // 加入购物车按钮
    Navbar.tsx        // 导航栏
    Footer.tsx        // 页脚
  context/            // 全局状态管理
    CartContext.tsx   // 购物车上下文
  lib/                // 业务逻辑与数据
    data/products.ts  // 商品数据与数据操作方法
```

## 启动方式
1. 安装依赖：
```bash
npm install
```
2. 启动开发服务器：
```bash
npm run dev
```
3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 技术栈
- Next.js 13+
- React 18
- TypeScript
- Tailwind CSS

## 项目亮点
- 全部页面和组件均支持暗黑模式
- 商品数据本地模拟，便于二次开发
- 代码结构清晰，易于扩展

## 适用场景
- 电商商城原型开发
- Next.js/React 进阶学习
- 组件化开发实践

---
如需自定义或扩展功能，建议从 `src/components` 和 `src/lib/data/products.ts` 入手。

欢迎反馈与贡献！
