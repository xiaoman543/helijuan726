"use client";
import Link from 'next/link';

export default function EmbedDemoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] z-0"></div>
      <main className="flex-grow w-full h-full relative z-10">
        <div className="fixed top-0 left-0 w-full z-20 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/30 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-blue-400 hover:text-blue-200 text-xl font-bold transition-colors">🐱 ← 返回猫鼠乐园</Link>
              <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow">🎮 汤姆的追逐游戏 - iframe嵌套演示</span>
            </div>
            <span className="text-slate-400 text-sm hidden md:block">🐭 杰瑞快跑！汤姆来啦！</span>
          </div>
        </div>
        <section className="max-w-3xl mx-auto mt-24 mb-6 bg-slate-800/60 rounded-xl border border-slate-700 shadow-xl p-6 relative z-20">
          <h2 className="text-xl font-bold text-blue-300 mb-2">🎯 案例说明</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1 mb-1">
            <li>本案例演示了如何在 Next.js 页面中嵌入第三方智能问答服务（QAnything）。</li>
            <li>🐱 汤姆风格的蓝色主题美化，iframe 区域全屏沉浸式体验。</li>
            <li>🐭 如需体验交互，请直接在下方问答区输入问题，帮助杰瑞逃脱！</li>
          </ul>
        </section>
        <iframe 
          src="https://ai.youdao.com/saas/qanything/#/home"
          title="🎮 汤姆和杰瑞智能问答服务"
          width="100%" 
          height="100%"
          className="fixed left-0 w-full z-10 border-2 border-blue-500/50"
          style={{
            top: 112, // 标题+说明高度
            height: 'calc(100vh - 112px)',
            border: 'none',
          }}
          allowFullScreen
        />
      </main>
    </div>
  );
} 