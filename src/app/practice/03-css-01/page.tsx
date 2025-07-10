'use client';

import Link from 'next/link';
import { useState } from 'react';

type WhiskerStyleKey = 'default' | 'curly' | 'zigzag' | 'rainbow';

export default function TomWhiskerStyles() {
  const [selectedStyle, setSelectedStyle] = useState<WhiskerStyleKey>('default');

  const whiskerStyles: Record<WhiskerStyleKey, {
    name: string;
    description: string;
    class: string;
    css: string;
    demo: string;
  }> = {
    default: {
      name: '经典样式',
      description: '汤姆的标准胡须造型',
      class: 'whisker-default',
      css: `
.whisker-default {
  border: 2px solid #333;
  border-radius: 50px;
  background: linear-gradient(45deg, #666, #333);
}`,
      demo: '🐱'
    },
    curly: {
      name: '卷曲胡须',
      description: '优雅的卷曲造型',
      class: 'whisker-curly',
      css: `
.whisker-curly {
  border: 3px solid #8B4513;
  border-radius: 20px 50px 20px 50px;
  background: radial-gradient(circle, #D2691E, #8B4513);
  transform: rotate(5deg);
}`,
      demo: '🐱✨'
    },
    zigzag: {
      name: '锯齿胡须',
      description: '充满活力的锯齿样式',
      class: 'whisker-zigzag',
      css: `
.whisker-zigzag {
  border: 2px solid #FF6B35;
  border-radius: 0;
  background: repeating-linear-gradient(
    45deg,
    #FF6B35,
    #FF6B35 10px,
    #FF8C42 10px,
    #FF8C42 20px
  );
}`,
      demo: '🐱⚡'
    },
    rainbow: {
      name: '彩虹胡须',
      description: '色彩斑斓的梦幻造型',
      class: 'whisker-rainbow',
      css: `
.whisker-rainbow {
  border: 3px solid transparent;
  border-radius: 25px;
  background: linear-gradient(45deg, 
    #ff0000, #ff7700, #ffdd00, 
    #00ff00, #0088ff, #6600ff
  );
  animation: rainbow-glow 2s ease-in-out infinite alternate;
}

@keyframes rainbow-glow {
  from { box-shadow: 0 0 10px rgba(255,0,255,0.5); }
  to { box-shadow: 0 0 20px rgba(0,255,255,0.8); }
}`,
      demo: '🐱🌈'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <style jsx>{`
        .whisker-demo {
          width: 150px;
          height: 50px;
          margin: 10px auto;
          position: relative;
        }
        
        .whisker-demo::before,
        .whisker-demo::after {
          content: '';
          position: absolute;
          width: 60px;
          height: 3px;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .whisker-demo::before {
          left: -70px;
        }
        
        .whisker-demo::after {
          right: -70px;
        }
        
        .whisker-default::before,
        .whisker-default::after {
          border: 2px solid #333;
          border-radius: 50px;
          background: linear-gradient(45deg, #666, #333);
        }
        
        .whisker-curly::before,
        .whisker-curly::after {
          border: 3px solid #8B4513;
          border-radius: 20px 50px 20px 50px;
          background: radial-gradient(circle, #D2691E, #8B4513);
          transform: translateY(-50%) rotate(5deg);
        }
        
        .whisker-zigzag::before,
        .whisker-zigzag::after {
          border: 2px solid #FF6B35;
          border-radius: 0;
          background: repeating-linear-gradient(
            45deg,
            #FF6B35,
            #FF6B35 10px,
            #FF8C42 10px,
            #FF8C42 20px
          );
        }
        
        .whisker-rainbow::before,
        .whisker-rainbow::after {
          border: 3px solid transparent;
          border-radius: 25px;
          background: linear-gradient(45deg, 
            #ff0000, #ff7700, #ffdd00, 
            #00ff00, #0088ff, #6600ff
          );
          animation: rainbow-glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes rainbow-glow {
          from { box-shadow: 0 0 10px rgba(255,0,255,0.5); }
          to { box-shadow: 0 0 20px rgba(0,255,255,0.8); }
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            🐱 汤姆的胡须样式设计师 ✨
          </h1>
          <p className="text-lg text-purple-600">
            学习CSS基础样式，为汤姆设计各种有趣的胡须造型！
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 样式选择器 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">🎨 胡须样式选择器</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(whiskerStyles).map(([key, style]) => (
                <button
                  key={key}
                  onClick={() => setSelectedStyle(key as WhiskerStyleKey)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedStyle === key 
                      ? 'border-purple-500 bg-purple-50 shadow-lg' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{style.demo}</div>
                  <div className="font-semibold text-gray-800">{style.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{style.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 样式预览 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">👀 样式预览</h2>
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">
                {whiskerStyles[selectedStyle].demo}
              </div>
              <div className={`whisker-demo ${whiskerStyles[selectedStyle].class}`}>
                <div className="w-full h-full bg-orange-300 rounded-full flex items-center justify-center text-2xl">
                  🐱
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">
                {whiskerStyles[selectedStyle].name}
              </h3>
              <p className="text-gray-600 mt-2">
                {whiskerStyles[selectedStyle].description}
              </p>
            </div>
          </div>
        </div>

        {/* CSS代码展示 */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-red-700 mb-6">💻 CSS代码</h2>
          <div className="bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{whiskerStyles[selectedStyle].css}</code>
            </pre>
          </div>
        </div>

        {/* 学习要点 */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-700 mb-4">🎯 CSS学习要点</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                CSS选择器的使用方法
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                边框(border)样式设置
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                圆角(border-radius)效果
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                渐变背景(gradient)技巧
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                CSS动画(animation)基础
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">🧪 实验建议</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                尝试修改颜色值观察变化
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                调整边框粗细和样式
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                改变圆角数值看效果
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                组合多种CSS属性
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                创建自己的胡须样式
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300"
          >
            <span className="mr-2">🏠</span>
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
} 