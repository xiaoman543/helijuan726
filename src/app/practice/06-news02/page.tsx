'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CatMouseMagazine() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const articles = [
    {
      id: 1,
      title: '汤姆的最新追逐技巧大揭秘',
      excerpt: '经过无数次失败后，汤姆终于总结出了一套全新的追逐战术...',
      image: '🐱',
      author: '记者猫咪',
      date: '2024-03-15',
      category: '技巧'
    },
    {
      id: 2,
      title: '杰瑞的地下洞穴大改造',
      excerpt: '杰瑞为了更好地躲避汤姆，对自己的洞穴进行了全面升级...',
      image: '🐭',
      author: '记者小鼠',
      date: '2024-03-14',
      category: '生活'
    },
    {
      id: 3,
      title: '猫鼠友谊：和谐共处的秘密',
      excerpt: '虽然表面上是对手，但汤姆和杰瑞之间有着深厚的友谊...',
      image: '🤝',
      author: '记者友情',
      date: '2024-03-13',
      category: '情感'
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % articles.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlay, articles.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white">
      {/* 杂志头部 */}
      <header className="bg-blue-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-cyan-300 mb-2">
              📖 汤姆杰瑞在线杂志 📖
            </h1>
            <p className="text-xl text-blue-200">探索猫鼠世界的精彩故事</p>
            <div className="mt-4 flex justify-center space-x-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">热门</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">最新</span>
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">独家</span>
            </div>
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

        {/* 轮播文章 */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-xl shadow-lg border border-blue-500/30 overflow-hidden">
            <div className="relative h-96">
              {articles.map((article, index) => (
                <div
                  key={article.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-full flex items-center">
                    <div className="flex-1 p-12">
                      <div className="mb-4">
                        <span className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-4xl font-bold text-white mb-4">
                        {article.title}
                      </h2>
                      <p className="text-xl text-blue-100 mb-6">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-blue-200">
                        <span className="mr-4">✍️ {article.author}</span>
                        <span>📅 {article.date}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 p-12">
                      <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center text-8xl">
                        {article.image}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 轮播控制 */}
            <div className="bg-slate-700/50 p-4 flex items-center justify-between">
              <div className="flex space-x-2">
                {articles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-cyan-400' : 'bg-slate-500'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isAutoPlay 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-slate-600 hover:bg-slate-700 text-white'
                }`}
              >
                {isAutoPlay ? '⏸️ 暂停' : '▶️ 播放'}
              </button>
            </div>
          </div>
        </section>

        {/* 杂志栏目 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主要内容 */}
          <main className="lg:col-span-2 space-y-8">
            {/* 本期特色 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 border-b border-blue-500/30 pb-3">
                ⭐ 本期特色
              </h3>
              
              <div className="space-y-6">
                <article className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">🎯</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-2">
                        追逐游戏的心理学分析
                      </h4>
                      <p className="text-blue-100 mb-3">
                        深入分析汤姆和杰瑞为什么乐此不疲地进行追逐游戏，这背后隐藏着什么心理动机...
                      </p>
                      <div className="flex items-center text-sm text-blue-300">
                        <span className="mr-3">🔍 心理学博士</span>
                        <span>📊 阅读量: 8,765</span>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">🏗️</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-blue-300 mb-2">
                        杰瑞洞穴的建筑奇迹
                      </h4>
                      <p className="text-blue-100 mb-3">
                        专业建筑师解析杰瑞洞穴的精妙设计，探讨小空间大智慧的建筑理念...
                      </p>
                      <div className="flex items-center text-sm text-blue-300">
                        <span className="mr-3">🏗️ 建筑专家</span>
                        <span>📊 阅读量: 6,432</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            {/* 读者投稿 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">📝 读者投稿</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-300 mb-2">我眼中的完美猫鼠关系</h4>
                  <p className="text-sm text-blue-100 mb-3">
                    &ldquo;虽然他们总是在打闹，但我觉得这就是最好的友谊方式...&rdquo;
                  </p>
                  <div className="text-xs text-blue-300">— 投稿者：小猫咪爱好者</div>
                </div>
                
                <div className="bg-slate-700/50 rounded-lg p-4 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-300 mb-2">学习杰瑞的生存智慧</h4>
                  <p className="text-sm text-blue-100 mb-3">
                    &ldquo;杰瑞教会了我如何在困境中保持机智和乐观...&rdquo;
                  </p>
                  <div className="text-xs text-blue-300">— 投稿者：智慧小老鼠</div>
                </div>
              </div>
            </section>
          </main>

          {/* 侧边栏 */}
          <aside className="space-y-6">
            {/* 本期目录 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">📋 本期目录</h3>
              <nav className="space-y-2">
                <a href="#feature" className="block text-blue-100 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-700/50">
                  🌟 特色报道
                </a>
                <a href="#life" className="block text-blue-100 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-700/50">
                  🏠 生活方式
                </a>
                <a href="#tech" className="block text-blue-100 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-700/50">
                  🔧 技术解析
                </a>
                <a href="#entertainment" className="block text-blue-100 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-700/50">
                  🎪 娱乐八卦
                </a>
                <a href="#readers" className="block text-blue-100 hover:text-cyan-300 transition-colors p-2 rounded hover:bg-slate-700/50">
                  💌 读者来信
                </a>
              </nav>
            </section>

            {/* 编辑推荐 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">👑 编辑推荐</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-300 mb-1">年度最佳追逐</h4>
                  <p className="text-sm text-blue-100">回顾2024年最精彩的十次追逐...</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-300 mb-1">奶酪品鉴指南</h4>
                  <p className="text-sm text-blue-100">杰瑞亲自推荐的顶级奶酪...</p>
                </div>
              </div>
            </section>

            {/* 订阅信息 */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">📬 订阅杂志</h3>
              <p className="text-blue-100 mb-4">获取最新猫鼠资讯</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                立即订阅
              </button>
            </section>
          </aside>
        </div>

        {/* 页脚 */}
        <footer className="mt-12 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30 text-center">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">联系我们</h4>
              <p className="text-sm text-blue-100">📧 magazine@catmouse.com</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">关注我们</h4>
              <div className="flex justify-center space-x-4 text-2xl">
                <span>📱</span>
                <span>🐦</span>
                <span>📘</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-2">发行信息</h4>
              <p className="text-sm text-blue-100">第42期 | 2024年3月刊</p>
            </div>
          </div>
          <div className="border-t border-blue-500/30 pt-4">
            <p className="text-blue-300">&copy; 2024 汤姆杰瑞在线杂志 - 专业的猫鼠文化媒体</p>
            <p className="text-sm text-blue-200 mt-2">学习案例：动态内容与交互式媒体设计</p>
          </div>
        </footer>
      </div>
    </div>
  );
} 