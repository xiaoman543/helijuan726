import Link from 'next/link';

export default function TomJerryHTMLPlayground() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-blue-700/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10 relative">
        <div className="relative mb-12">
          <Link href="/" className="absolute -top-8 left-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <span className="text-2xl font-bold">←</span>
            <span>返回猫鼠乐园</span>
          </Link>
        </div>

        {/* 页面标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            📚 汤姆杰瑞HTML学习乐园 📚
          </h1>
          <p className="text-lg text-blue-200">
            和汤姆、杰瑞一起探索HTML的奇妙世界！
          </p>
        </div>

        {/* 案例说明 */}
        <section className="max-w-4xl mx-auto mb-10 bg-slate-800/60 rounded-xl border border-blue-500/30 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">🎯 HTML基础标签演示</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">📖 学习内容</h3>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                <li>HTML标题、段落、超链接标签</li>
                <li>列表、图片、表格的使用</li>
                <li>表单元素与交互设计</li>
                <li>语义化HTML标签结构</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">🎮 互动体验</h3>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                <li>所有元素均可交互体验</li>
                <li>表单可直接提交测试</li>
                <li>图片支持多种格式</li>
                <li>链接跳转功能完整</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 主要内容区域 */}
        <section className="max-w-4xl mx-auto bg-slate-800/50 rounded-xl border border-blue-500/30 shadow-2xl p-8">
          {/* 标题演示 */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6 text-cyan-200 border-b border-blue-500/30 pb-4">
              🐱 汤姆的HTML标题世界 🐭
            </h1>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h2 className="text-2xl font-semibold text-blue-300 mb-2">🏠 汤姆的豪宅</h2>
                <h3 className="text-xl font-medium text-cyan-300 mb-2">🍽️ 厨房追逐区</h3>
                <h4 className="text-lg text-blue-200 mb-2">🧀 奶酪储藏室</h4>
                <h5 className="text-base text-blue-100 mb-2">🕳️ 杰瑞的秘密通道</h5>
                <h6 className="text-sm text-slate-300">🎪 游戏娱乐区</h6>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="text-4xl text-center mb-4">🏰</div>
                <p className="text-blue-100 text-sm text-center">
                  HTML标题标签从h1到h6，就像汤姆家的建筑结构一样层次分明！
                </p>
              </div>
            </div>
          </div>

          {/* 段落和链接演示 */}
          <div className="mb-8 bg-slate-700/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">📝 段落与超链接</h3>
            <div className="prose prose-invert max-w-none prose-p:text-blue-100 prose-a:text-cyan-400 hover:prose-a:text-cyan-300">
              <p>
                在汤姆和杰瑞的故事中，段落标记就像是每一个完整的追逐场景。
                <a href="https://www.disney.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">
                  点击这里访问迪士尼官网 🏰
                </a>
                了解更多精彩动画内容。
              </p>
              <p>
                超链接是网页的灵魂，就像杰瑞的逃生通道一样，
                <a href="/practice/my-app" className="text-cyan-400 hover:text-cyan-300 underline">
                  带你瞬间到达杰瑞的奶酪游戏 🧀
                </a>
                体验精彩内容！
              </p>
            </div>
          </div>

          {/* 列表演示 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">📋 列表展示</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">🐱 汤姆的追逐装备</h4>
                <ol className="list-decimal list-inside text-blue-100 space-y-2">
                  <li>超快跑鞋 👟</li>
                  <li>隐身斗篷 🧥</li>
                  <li>万能捕鼠器 🪤</li>
                  <li>追踪雷达 📡</li>
                  <li>能量补给包 🍕</li>
                </ol>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">🐭 杰瑞的逃脱工具</h4>
                <ul className="list-disc list-inside text-blue-100 space-y-2">
                  <li>🕳️ 秘密地道网络</li>
                  <li>🧀 诱饵奶酪</li>
                  <li>💨 烟雾弹</li>
                  <li>🪃 回旋镖</li>
                  <li>⚡ 闪电靴</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 图片演示 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">🖼️ 图片画廊</h3>
            <div className="flex gap-4 flex-wrap items-center justify-center">
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-6xl mb-2">🐱</div>
                <p className="text-blue-100 text-sm">汤姆猫</p>
                <p className="text-xs text-slate-300">永不放弃的追逐者</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-6xl mb-2">🐭</div>
                <p className="text-blue-100 text-sm">杰瑞鼠</p>
                <p className="text-xs text-slate-300">机智的逃脱大师</p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-6xl mb-2">🏠</div>
                <p className="text-blue-100 text-sm">温馨的家</p>
                <p className="text-xs text-slate-300">追逐游戏的舞台</p>
              </div>
            </div>
            <p className="text-center text-sm text-blue-200 mt-4">
              💡 在真实项目中，这里会是 &lt;img&gt; 标签展示的实际图片
            </p>
          </div>

          {/* 表格演示 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">📊 追逐战绩表</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-blue-500/30 text-blue-100 bg-slate-700/30 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-900/60">
                    <th className="border border-blue-500/30 p-3 text-cyan-300 font-semibold">日期 📅</th>
                    <th className="border border-blue-500/30 p-3 text-cyan-300 font-semibold">追逐场景 🎬</th>
                    <th className="border border-blue-500/30 p-3 text-cyan-300 font-semibold">结果 🏆</th>
                    <th className="border border-blue-500/30 p-3 text-cyan-300 font-semibold">评分 ⭐</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-600/30 transition-colors">
                    <td className="border border-blue-500/30 p-3">2024-03-15</td>
                    <td className="border border-blue-500/30 p-3">🍳 厨房大作战</td>
                    <td className="border border-blue-500/30 p-3">🐭 杰瑞获胜</td>
                    <td className="border border-blue-500/30 p-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="hover:bg-slate-600/30 transition-colors">
                    <td className="border border-blue-500/30 p-3">2024-03-14</td>
                    <td className="border border-blue-500/30 p-3">🌳 后院追逐</td>
                    <td className="border border-blue-500/30 p-3">🤝 平局</td>
                    <td className="border border-blue-500/30 p-3">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="hover:bg-slate-600/30 transition-colors">
                    <td className="border border-blue-500/30 p-3">2024-03-13</td>
                    <td className="border border-blue-500/30 p-3">🛋️ 客厅捉迷藏</td>
                    <td className="border border-blue-500/30 p-3">🐱 汤姆小胜</td>
                    <td className="border border-blue-500/30 p-3">⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 表单演示 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">📝 加入猫鼠俱乐部</h3>
            <div className="bg-slate-700/50 rounded-lg p-6">
              <form action="https://httpbin.org/post" method="post" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-blue-300 mb-2">
                      🏷️ 昵称
                    </label>
                    <input 
                      type="text" 
                      id="username"
                      name="username" 
                      className="w-full px-3 py-2 rounded bg-slate-900 border border-blue-500/30 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
                      placeholder="输入你的昵称..." 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2">
                      📧 邮箱
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      className="w-full px-3 py-2 rounded bg-slate-900 border border-blue-500/30 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
                      placeholder="your@email.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="team" className="block text-sm font-medium text-blue-300 mb-2">
                    🎯 选择你的队伍
                  </label>
                  <select 
                    id="team"
                    name="team" 
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-blue-500/30 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  >
                    <option value="">请选择...</option>
                    <option value="tom">🐱 汤姆队 - 追逐专家</option>
                    <option value="jerry">🐭 杰瑞队 - 逃脱大师</option>
                    <option value="neutral">🤝 中立观察者</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-2">
                    💬 留言
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows={3}
                    className="w-full px-3 py-2 rounded bg-slate-900 border border-blue-500/30 text-blue-100 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" 
                    placeholder="分享你对汤姆和杰瑞的看法..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    name="newsletter"
                    className="rounded border-blue-500/30 text-cyan-500 focus:ring-cyan-400 focus:ring-offset-slate-800" 
                  />
                  <label htmlFor="newsletter" className="text-sm text-blue-100">
                    📬 订阅猫鼠动态通讯
                  </label>
                </div>

                <div className="flex gap-4">
                  <input 
                    type="submit" 
                    value="🚀 加入俱乐部" 
                    className="px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors cursor-pointer" 
                  />
                  <input 
                    type="reset" 
                    value="🔄 重置表单" 
                    className="px-6 py-2 rounded bg-slate-600 text-white font-semibold hover:bg-slate-700 transition-colors cursor-pointer" 
                  />
                </div>
              </form>
            </div>
          </div>

          {/* HTML标签说明 */}
          <div className="bg-slate-700/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">🏷️ HTML标签学习总结</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-blue-300 mb-3">结构标签</h4>
                <ul className="space-y-2 text-blue-100">
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;h1&gt;-&lt;h6&gt;</code> - 标题层级</li>
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;p&gt;</code> - 段落内容</li>
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;div&gt;</code> - 容器元素</li>
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;span&gt;</code> - 行内元素</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-3">交互标签</h4>
                <ul className="space-y-2 text-blue-100">
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;a&gt;</code> - 超链接</li>
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;form&gt;</code> - 表单容器</li>
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;input&gt;</code> - 输入控件</li>
                  <li><code className="bg-slate-900 px-2 py-1 rounded text-cyan-300">&lt;button&gt;</code> - 按钮元素</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-12 text-center text-blue-300 border-t border-blue-500/30 pt-6">
          <p>&copy; 2024 汤姆杰瑞HTML学习乐园 - 让HTML学习充满乐趣</p>
          <p className="text-sm text-blue-200 mt-2">学习案例：HTML基础标签与语义化结构</p>
        </footer>
      </main>
    </div>
  );
} 