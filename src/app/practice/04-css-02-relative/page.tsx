'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function TomHideAndSeek() {
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const [foundJerry, setFoundJerry] = useState(false);

  const handleBoxClick = (index: number) => {
    setActiveBox(index);
    if (index === 2) { // 杰瑞藏在第3个盒子里
      setFoundJerry(true);
      setTimeout(() => {
        setFoundJerry(false);
        setActiveBox(null);
      }, 2000);
    } else {
      setTimeout(() => {
        setActiveBox(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            🎮 汤姆的捉迷藏游戏 🔍
          </h1>
          <p className="text-lg text-blue-200">
            学习CSS相对定位技术，帮助汤姆找到躲藏的杰瑞！
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 捉迷藏游戏区 */}
          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">🎯 找找杰瑞在哪里</h2>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 h-80 relative">
              {/* 房间背景装饰 */}
              <div className="absolute top-2 left-2 text-2xl">🏠</div>
              <div className="absolute top-2 right-2 text-2xl">🪟</div>
              <div className="absolute bottom-2 left-2 text-2xl">🛋️</div>
              <div className="absolute bottom-2 right-2 text-2xl">📺</div>

              {/* 可点击的盒子 */}
              <div className="grid grid-cols-3 gap-4 h-full">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <button
                    key={index}
                    onClick={() => handleBoxClick(index)}
                    className={`relative bg-amber-300 border-4 border-amber-600 rounded-lg transition-all duration-300 hover:bg-amber-400 hover:scale-105 ${
                      activeBox === index ? 'bg-amber-500 scale-110' : ''
                    }`}
                    style={{
                      // 使用相对定位的随机偏移
                      transform: `translate(${Math.sin(index) * 10}px, ${Math.cos(index) * 8}px) ${activeBox === index ? 'scale(1.1)' : ''}`,
                    }}
                  >
                    {/* 盒子标号 */}
                    <div className="absolute top-1 left-1 text-xs text-amber-800 font-bold">
                      #{index + 1}
                    </div>
                    
                    {/* 盒子内容 */}
                    <div className="h-full flex items-center justify-center text-2xl">
                      {activeBox === index ? (
                        index === 2 ? (
                          <span className="animate-bounce">🐭</span>
                        ) : (
                          <span>📦</span>
                        )
                      ) : (
                        '❓'
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* 汤姆角色 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl animate-pulse">
                🐱
              </div>

              {/* 发现杰瑞的特效 */}
              {foundJerry && (
                <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20 rounded-lg">
                  <div className="text-6xl animate-bounce">🎉</div>
                  <div className="text-2xl text-blue-800 font-bold ml-4">找到了！</div>
                </div>
              )}
            </div>

            <div className="mt-4 text-center">
              <p className="text-blue-100">
                {foundJerry ? '🎉 恭喜汤姆找到杰瑞了！' : '🔍 点击盒子寻找杰瑞'}
              </p>
            </div>
          </div>

          {/* 相对定位说明 */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">📍 相对定位原理</h2>
              <div className="space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">position: relative</h3>
                  <p className="text-blue-100 text-sm">元素相对于其正常位置偏移</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">保持文档流</h3>
                  <p className="text-blue-100 text-sm">原位置仍然占据空间</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">偏移属性</h3>
                  <p className="text-blue-100 text-sm">top, right, bottom, left</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🎲 游戏机制</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-2">📦</span>
                  <span className="text-blue-100">每个盒子使用相对定位</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎯</span>
                  <span className="text-blue-100">随机偏移创造自然效果</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🐭</span>
                  <span className="text-blue-100">杰瑞藏在第3号盒子里</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✨</span>
                  <span className="text-blue-100">动画增强交互体验</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🎪 视觉效果</h2>
              <div className="space-y-3 text-blue-100">
                <div className="flex items-center">
                  <span className="mr-2">🎨</span>
                  <span>悬浮时缩放变换</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🌟</span>
                  <span>点击时突出显示</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🎉</span>
                  <span>找到杰瑞时庆祝动画</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS代码示例 */}
        <div className="mt-8 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">💻 捉迷藏游戏CSS代码</h2>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`/* 游戏盒子基础样式 */
.game-box {
  position: relative;
  background: #fbbf24;
  border: 4px solid #d97706;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* 相对定位偏移 */
.game-box:nth-child(1) {
  top: 5px;
  left: -3px;
}

.game-box:nth-child(2) {
  top: -8px;
  right: 4px;
}

.game-box:nth-child(3) {
  top: 12px;
  left: 6px;
}

/* 悬浮效果 */
.game-box:hover {
  background: #f59e0b;
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(251, 191, 36, 0.3);
}

/* 激活状态 */
.game-box.active {
  background: #f59e0b;
  transform: scale(1.1);
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
}

/* 汤姆角色动画 */
.tom-character {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  animation: search 2s ease-in-out infinite;
}

@keyframes search {
  0%, 100% { 
    transform: translateX(-50%) rotate(-5deg); 
  }
  50% { 
    transform: translateX(-50%) rotate(5deg); 
  }
}

/* 发现杰瑞的特效 */
.found-effect {
  position: absolute;
  inset: 0;
  background: rgba(59, 130, 246, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  animation: celebrate 1s ease-out;
}

@keyframes celebrate {
  0% { 
    opacity: 0; 
    transform: scale(0.8); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}`}</code>
            </pre>
          </div>
        </div>

        {/* 学习要点 */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-blue-300 mb-4">🎯 学习重点</h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                理解相对定位的特点
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                掌握偏移属性的使用
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                学习文档流的保持
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                实践交互动画效果
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">🧪 实验建议</h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                调整盒子的偏移值
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                修改悬浮动画效果
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                尝试不同的布局方式
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                添加更多游戏元素
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span className="mr-2">🏠</span>
            返回猫鼠乐园
          </Link>
        </div>
      </div>
    </div>
  );
} 