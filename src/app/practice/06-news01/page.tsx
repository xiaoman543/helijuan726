'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CatMouseFoodReview() {
  const [selectedFood, setSelectedFood] = useState('cheese');

  const foodReviews = {
    cheese: {
      name: '🧀 顶级奶酪',
      rating: 5,
      description: '杰瑞亲测推荐！香浓可口，口感绝佳',
      price: '¥25.99',
      image: '🧀'
    },
    fish: {
      name: '🐟 新鲜鱼类',
      rating: 4,
      description: '汤姆最爱！营养丰富，美味健康',
      price: '¥35.99',
      image: '🐟'
    },
    milk: {
      name: '🥛 纯牛奶',
      rating: 4,
      description: '清香淡雅，猫咪必备营养品',
      price: '¥15.99',
      image: '🥛'
    },
    treats: {
      name: '🍪 猫咪零食',
      rating: 5,
      description: '香脆可口，训练奖励的完美选择',
      price: '¥19.99',
      image: '🍪'
    }
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white">
      {/* 头部 */}
      <header className="bg-blue-900/80 backdrop-blur-md border-b border-blue-500/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-cyan-300">🍴 汤姆杰瑞美食评论</h1>
              <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-sm font-bold">
                5⭐ 推荐
              </span>
            </div>
            <nav className="flex space-x-6">
              <a href="#reviews" className="hover:text-cyan-300 transition-colors">评论</a>
              <a href="#menu" className="hover:text-cyan-300 transition-colors">菜单</a>
              <a href="#contact" className="hover:text-cyan-300 transition-colors">联系</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 返回按钮 */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span className="mr-2">🏠</span>
            返回猫鼠乐园
          </Link>
        </div>

        {/* 主横幅 */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-8 mb-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            🌟 猫鼠美食天堂 🌟
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            汤姆和杰瑞联手推荐，品质保证的美食体验！
          </p>
          <div className="flex justify-center space-x-8 text-6xl">
            <span className="animate-bounce">��</span>
            <span className="animate-pulse">🍽️</span>
            <span className="animate-bounce delay-200">🐭</span>
          </div>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* 侧边栏 - 食物分类 */}
          <aside className="lg:col-span-1">
            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30 sticky top-24">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🎯 美食分类</h3>
              <ul className="space-y-3">
                {Object.entries(foodReviews).map(([key, food]) => (
                  <li key={key}>
                    <button
                      onClick={() => setSelectedFood(key)}
                      className={`w-full p-3 rounded-lg text-left transition-all duration-300 ${
                        selectedFood === key 
                          ? 'bg-blue-600 text-white shadow-lg' 
                          : 'bg-slate-700/50 hover:bg-slate-600/50 text-blue-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{food.image}</span>
                        <span className="font-medium">{food.name}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* 主内容区 */}
          <main className="lg:col-span-3 space-y-8">
            {/* 特色推荐 */}
            <section id="reviews" className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">🌟 今日特色推荐</h3>
              
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl">{foodReviews[selectedFood as keyof typeof foodReviews].image}</span>
                    <div>
                      <h4 className="text-2xl font-bold text-blue-300">
                        {foodReviews[selectedFood as keyof typeof foodReviews].name}
                      </h4>
                      <div className="text-xl text-yellow-400">
                        {renderStars(foodReviews[selectedFood as keyof typeof foodReviews].rating)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-300">
                      {foodReviews[selectedFood as keyof typeof foodReviews].price}
                    </div>
                    <button className="mt-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors">
                      立即购买
                    </button>
                  </div>
                </div>
                <p className="text-blue-100 text-lg">
                  {foodReviews[selectedFood as keyof typeof foodReviews].description}
                </p>
              </div>
            </section>

            {/* 用户评论 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">💬 用户评论</h3>
              
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">🐱</span>
                    <span className="font-semibold text-blue-300">汤姆猫</span>
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-blue-100">
                    &ldquo;作为一只专业的追逐者，我需要充足的营养。这里的食物质量很棒，特别推荐鱼类！&rdquo;
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-cyan-500">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">🐭</span>
                    <span className="font-semibold text-cyan-300">杰瑞鼠</span>
                    <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-blue-100">
                    &ldquo;奶酪真的太棒了！口感丰富，回味无穷。逃跑时带一块奶酪，能量满满！&rdquo;
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">🐕</span>
                    <span className="font-semibold text-green-300">守护犬</span>
                    <span className="text-yellow-400">⭐⭐⭐⭐</span>
                  </div>
                  <p className="text-blue-100">
                    &ldquo;看着这两个小家伙品尝美食，我也忍不住想试试。配送服务很及时！&rdquo;
                  </p>
                </div>
              </div>
            </section>

            {/* 营养信息 */}
            <section id="menu" className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">📊 营养成分表</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-3">基本信息</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-100">热量</span>
                      <span className="text-cyan-300">350 kcal</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">蛋白质</span>
                      <span className="text-cyan-300">25g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">脂肪</span>
                      <span className="text-cyan-300">15g</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">碳水化合物</span>
                      <span className="text-cyan-300">30g</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-3">维生素含量</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-100">维生素A</span>
                      <span className="text-cyan-300">120%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">维生素C</span>
                      <span className="text-cyan-300">85%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">维生素D</span>
                      <span className="text-cyan-300">95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">钙</span>
                      <span className="text-cyan-300">150%</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* 联系信息 */}
        <section id="contact" className="mt-8 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">📞 联系我们</h3>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold text-blue-300 mb-2">电话订购</h4>
              <p className="text-blue-100">400-CAT-MOUSE</p>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-semibold text-blue-300 mb-2">配送服务</h4>
              <p className="text-blue-100">30分钟极速配送</p>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-4">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-semibold text-blue-300 mb-2">营业时间</h4>
              <p className="text-blue-100">24小时全天候服务</p>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-12 text-center text-blue-300 border-t border-blue-500/30 pt-6">
          <p>&copy; 2024 汤姆杰瑞美食评论 - 专业的宠物美食推荐平台</p>
          <p className="text-sm text-blue-200 mt-2">学习案例：响应式布局与交互设计</p>
        </footer>
      </div>
    </div>
  );
} 