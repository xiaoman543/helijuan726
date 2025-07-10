'use client';

import Link from 'next/link';

export default function CatMouseNews() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white">
      {/* 导航栏 */}
      <nav className="bg-blue-900/80 backdrop-blur-md border-b border-blue-500/30 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-cyan-300">🐱猫鼠日报🐭</h1>
            <div className="flex space-x-6">
              <a href="#top-news" className="hover:text-cyan-300 transition-colors">头条</a>
              <a href="#entertainment" className="hover:text-cyan-300 transition-colors">娱乐</a>
              <a href="#sports" className="hover:text-cyan-300 transition-colors">体育</a>
              <a href="#weather" className="hover:text-cyan-300 transition-colors">天气</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 返回按钮 */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span className="mr-2">🏠</span>
            返回猫鼠乐园
          </Link>
        </div>

        {/* 主要内容区域 */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 主新闻区 */}
          <main className="lg:col-span-2 space-y-8">
            {/* 头条新闻 */}
            <section id="top-news" className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-3xl font-bold text-cyan-400 mb-6 border-b border-blue-500/30 pb-3">
                🔥 头条新闻
              </h2>
              <article className="mb-6">
                <div className="relative mb-4">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-lg flex items-center justify-center text-6xl">
                    🐱💨🐭
                  </div>
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    突发
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">
                  汤姆再次追逐失败！杰瑞巧妙逃脱创历史纪录
                </h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  今日上午10点，在厨房发生了本年度第1,247次追逐事件。汤姆使用了全新的&ldquo;飞扑战术&rdquo;，
                  但杰瑞凭借其灵活的身手和对地形的熟悉，再次成功逃脱。这已经是杰瑞连续第30天成功逃脱，
                  创造了新的历史纪录...
                </p>
                <div className="flex items-center text-sm text-blue-300">
                  <span className="mr-4">📅 2024年3月15日</span>
                  <span className="mr-4">✍️ 记者小狗</span>
                  <span>👀 阅读量: 12,345</span>
                </div>
              </article>
            </section>

            {/* 娱乐新闻 */}
            <section id="entertainment" className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-blue-500/30 pb-2">
                🎪 娱乐动态
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <article className="border border-slate-600 rounded-lg p-4 hover:border-blue-400 transition-colors">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg flex items-center justify-center text-4xl mb-3">
                    🎭
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    汤姆学习芭蕾舞？优雅追逐新境界
                  </h3>
                  <p className="text-sm text-blue-100">
                    为了提高追逐技巧，汤姆决定学习芭蕾舞来增强身体协调性...
                  </p>
                </article>
                <article className="border border-slate-600 rounded-lg p-4 hover:border-blue-400 transition-colors">
                  <div className="w-full h-32 bg-gradient-to-br from-green-200 to-emerald-200 rounded-lg flex items-center justify-center text-4xl mb-3">
                    🧀
                  </div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">
                    杰瑞开设奶酪品鉴课程
                  </h3>
                  <p className="text-sm text-blue-100">
                    杰瑞将分享他多年来收集奶酪的经验，教授如何辨别优质奶酪...
                  </p>
                </article>
              </div>
            </section>

            {/* 体育新闻 */}
            <section id="sports" className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4 border-b border-blue-500/30 pb-2">
                🏃‍♂️ 体育赛事
              </h2>
              <article className="border border-slate-600 rounded-lg p-4">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">
                  第一届猫鼠追逐大赛即将举办
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🐱</div>
                    <div className="text-blue-100">汤姆队</div>
                    <div className="text-cyan-300 font-bold">速度: 85</div>
                  </div>
                  <div className="text-4xl text-yellow-400">VS</div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🐭</div>
                    <div className="text-blue-100">杰瑞队</div>
                    <div className="text-cyan-300 font-bold">敏捷: 95</div>
                  </div>
                </div>
                <p className="text-blue-100">
                  比赛将于下周六在后花园举行，届时将有专业裁判和观众观看...
                </p>
              </article>
            </section>
          </main>

          {/* 侧边栏 */}
          <aside className="space-y-6">
            {/* 天气预报 */}
            <section id="weather" className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">🌤️ 天气预报</h2>
              <div className="text-center">
                <div className="text-4xl mb-2">☀️</div>
                <div className="text-2xl font-bold text-blue-300 mb-2">22°C</div>
                <div className="text-blue-100 mb-4">晴朗</div>
                <div className="text-sm text-blue-200">
                  今天是追逐的好天气！阳光明媚，能见度极佳，适合户外活动。
                </div>
              </div>
            </section>

            {/* 热门话题 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">🔥 热门话题</h2>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">🔥</span>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    #汤姆追逐失败
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">🔥</span>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    #杰瑞逃脱技巧
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-500 mr-2">🔥</span>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    #奶酪收藏大全
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">🔥</span>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    #猫咪健身指南
                  </a>
                </li>
              </ul>
            </section>

            {/* 广告位 */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">🧀 杰瑞牌奶酪</h3>
              <p className="text-blue-100 mb-4">品质保证，美味可口！</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                立即购买
              </button>
            </section>

            {/* 往期回顾 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-xl font-bold text-cyan-400 mb-4">📰 往期回顾</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    📅 昨日: 汤姆新战术研发成功
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    📅 前日: 杰瑞洞穴扩建工程完工
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-cyan-300 transition-colors">
                    📅 上周: 追逐大赛预热赛举行
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        {/* 页脚 */}
        <footer className="mt-12 text-center text-blue-300 border-t border-blue-500/30 pt-6">
          <p>&copy; 2024 猫鼠日报 - 专业报道汤姆和杰瑞的每日生活</p>
          <p className="text-sm text-blue-200 mt-2">CSS新闻布局学习案例 - HTML结构与样式设计</p>
        </footer>
      </div>
    </div>
  );
} 