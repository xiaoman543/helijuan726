'use client';

import Link from 'next/link';
import { useState } from 'react';

type FurStyleKey = 'elegant' | 'striped' | 'spotted' | 'shiny';

interface FurStyle {
  name: string;
  color: string;
  pattern: string;
  description: string;
}

export default function TomStyleDesigner() {
  const [selectedStyle, setSelectedStyle] = useState<FurStyleKey>('elegant');

  const furStyles: Record<FurStyleKey, FurStyle> = {
    elegant: {
      name: '优雅蓝毛',
      color: 'bg-blue-400',
      pattern: 'solid',
      description: '汤姆最喜欢的经典蓝色毛发'
    },
    striped: {
      name: '条纹图案',
      color: 'bg-gradient-to-r from-blue-600 to-cyan-400',
      pattern: 'striped',
      description: '时尚的蓝青条纹设计'
    },
    spotted: {
      name: '斑点风格',
      color: 'bg-blue-500',
      pattern: 'spotted',
      description: '独特的斑点装饰效果'
    },
    shiny: {
      name: '闪亮光泽',
      color: 'bg-gradient-to-br from-cyan-300 to-blue-600',
      pattern: 'shiny',
      description: '华丽的渐变光泽效果'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            🎨 汤姆的造型设计师 ✨
          </h1>
          <p className="text-lg text-blue-200">
            学习CSS高级样式技术，为汤姆设计完美的毛发造型！
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 汤姆造型展示 */}
          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">🐱 汤姆造型预览</h2>
            <div className="bg-gradient-to-br from-slate-200 to-blue-100 rounded-lg p-8 h-80 flex items-center justify-center relative overflow-hidden">
              {/* 汤姆的身体 */}
              <div className="relative">
                {/* 身体 */}
                <div className={`w-32 h-40 ${furStyles[selectedStyle].color} rounded-full relative transition-all duration-500`}>
                  {/* 条纹效果 */}
                  {furStyles[selectedStyle].pattern === 'striped' && (
                    <div className="absolute inset-0 bg-repeat rounded-full opacity-30" 
                         style={{
                           backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.5) 8px, rgba(255,255,255,0.5) 16px)'
                         }}></div>
                  )}
                  
                  {/* 斑点效果 */}
                  {furStyles[selectedStyle].pattern === 'spotted' && (
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute top-2 left-4 w-3 h-3 bg-white/40 rounded-full"></div>
                      <div className="absolute top-8 right-3 w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="absolute bottom-6 left-6 w-4 h-4 bg-white/40 rounded-full"></div>
                      <div className="absolute bottom-12 right-8 w-2 h-2 bg-white/40 rounded-full"></div>
                    </div>
                  )}
                  
                  {/* 闪亮效果 */}
                  {furStyles[selectedStyle].pattern === 'shiny' && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent rounded-full animate-pulse"></div>
                  )}
                  
                  {/* 汤姆的脸 */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="text-3xl">😸</div>
                  </div>
                  
                  {/* 尾巴 */}
                  <div className={`absolute -right-12 top-1/2 w-16 h-4 ${furStyles[selectedStyle].color} rounded-full transform -translate-y-1/2 rotate-45`}></div>
                </div>
                
                {/* 四肢 */}
                <div className={`absolute -bottom-4 left-4 w-6 h-12 ${furStyles[selectedStyle].color} rounded-full`}></div>
                <div className={`absolute -bottom-4 right-4 w-6 h-12 ${furStyles[selectedStyle].color} rounded-full`}></div>
                <div className={`absolute top-16 -left-8 w-8 h-6 ${furStyles[selectedStyle].color} rounded-full`}></div>
                <div className={`absolute top-16 -right-8 w-8 h-6 ${furStyles[selectedStyle].color} rounded-full`}></div>
              </div>
              
              {/* 装饰元素 */}
              <div className="absolute top-4 left-4 text-2xl animate-bounce">✨</div>
              <div className="absolute top-4 right-4 text-2xl animate-bounce delay-200">✨</div>
              <div className="absolute bottom-4 left-4 text-2xl animate-bounce delay-300">💫</div>
              <div className="absolute bottom-4 right-4 text-2xl animate-bounce delay-100">💫</div>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">{furStyles[selectedStyle].name}</h3>
              <p className="text-blue-100 text-sm">{furStyles[selectedStyle].description}</p>
            </div>
          </div>

          {/* 样式选择器 */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🎭 毛发样式选择</h2>
              <div className="space-y-3">
                {Object.entries(furStyles).map(([key, style]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedStyle(key as FurStyleKey)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedStyle === key 
                        ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/30' 
                        : 'border-slate-600 bg-slate-700/30 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 ${style.color} rounded-full flex-shrink-0`}></div>
                      <div>
                        <h3 className="font-semibold text-blue-100">{style.name}</h3>
                        <p className="text-sm text-blue-200/70">{style.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🎨 CSS样式技术</h2>
              <div className="space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">渐变背景</h3>
                  <p className="text-blue-100 text-sm">linear-gradient, radial-gradient</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">变换效果</h3>
                  <p className="text-blue-100 text-sm">transform: scale, rotate, translate</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">阴影效果</h3>
                  <p className="text-blue-100 text-sm">box-shadow, text-shadow</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-300 mb-2">动画效果</h3>
                  <p className="text-blue-100 text-sm">animation, transition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS代码示例 */}
        <div className="mt-8 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">💻 汤姆造型CSS代码</h2>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`/* 汤姆的身体基础样式 */
.tom-body {
  width: 128px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  transition: all 0.5s ease-in-out;
}

/* 优雅蓝毛样式 */
.elegant-fur {
  background: #60a5fa;
}

/* 条纹图案样式 */
.striped-fur {
  background: linear-gradient(to right, #2563eb, #06b6d4);
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    rgba(255,255,255,0.5) 8px,
    rgba(255,255,255,0.5) 16px
  );
}

/* 斑点风格样式 */
.spotted-fur {
  background: #3b82f6;
  position: relative;
}

.spotted-fur::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: rgba(255,255,255,0.4);
  border-radius: 50%;
  top: 20px;
  left: 30px;
}

/* 闪亮光泽样式 */
.shiny-fur {
  background: linear-gradient(135deg, #67e8f9, #2563eb);
  animation: shine 2s ease-in-out infinite;
}

@keyframes shine {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* 悬浮动画效果 */
.tom-body:hover {
  transform: scale(1.05) rotate(5deg);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
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
                掌握CSS渐变背景技术
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                学习transform变换效果
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                理解阴影和光效创建
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                实践CSS动画关键帧
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">🧪 设计实验</h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                调整渐变方向和颜色
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                修改动画时长和效果
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                尝试不同的变换组合
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                创建自定义图案效果
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