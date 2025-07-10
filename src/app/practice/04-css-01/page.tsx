'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function KitchenChase() {
  const [tomPosition, setTomPosition] = useState({ x: 10, y: 10 });
  const [jerryPosition, setJerryPosition] = useState({ x: 80, y: 80 });
  const [isChasing, setIsChasing] = useState(false);

  const startChase = () => {
    setIsChasing(true);
    // 汤姆朝杰瑞移动
    setTimeout(() => {
      setTomPosition({ x: 60, y: 60 });
    }, 500);
    // 杰瑞逃跑
    setTimeout(() => {
      setJerryPosition({ x: 20, y: 20 });
    }, 1000);
    // 重置
    setTimeout(() => {
      setIsChasing(false);
      setTomPosition({ x: 10, y: 10 });
      setJerryPosition({ x: 80, y: 80 });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            🍳 厨房追逐大战 🏃‍♂️
          </h1>
          <p className="text-lg text-blue-200">
            学习CSS浮动和定位技术，重现汤姆和杰瑞在厨房的经典追逐！
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 厨房场景 */}
          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">🎬 追逐场景</h2>
            <div className="relative bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg h-80 overflow-hidden border-4 border-amber-400">
              {/* 厨房背景元素 */}
              <div className="absolute top-2 left-2 text-2xl">🍳</div>
              <div className="absolute top-2 right-2 text-2xl">🥘</div>
              <div className="absolute bottom-2 left-2 text-2xl">🧊</div>
              <div className="absolute bottom-2 right-2 text-2xl">🍞</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">🧀</div>

              {/* 汤姆 */}
              <div 
                className={`absolute transition-all duration-1000 text-4xl z-10 ${isChasing ? 'transform rotate-12' : ''}`}
                style={{ 
                  left: `${tomPosition.x}%`, 
                  top: `${tomPosition.y}%`,
                  transform: `translate(-50%, -50%) ${isChasing ? 'rotate(12deg)' : ''}`
                }}
              >
                🐱
              </div>
              
              {/* 杰瑞 */}
              <div
                className={`absolute transition-all duration-1000 text-3xl z-10 ${isChasing ? 'transform rotate-45' : ''}`}
                style={{
                  left: `${jerryPosition.x}%`,
                  top: `${jerryPosition.y}%`,
                  transform: `translate(-50%, -50%) ${isChasing ? 'rotate(45deg)' : ''}`
                }}
              >
                🐭
              </div>

              {/* 追逐轨迹 */}
              {isChasing && (
                <div className="absolute inset-0">
                  <div className="absolute top-2 left-2 text-xl animate-bounce">💨</div>
                  <div className="absolute top-4 left-8 text-xl animate-bounce delay-100">💨</div>
                  <div className="absolute top-6 left-12 text-xl animate-bounce delay-200">💨</div>
                </div>
              )}
            </div>
            
            <div className="mt-4 text-center">
              <button 
                onClick={startChase}
                disabled={isChasing}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  isChasing 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isChasing ? '追逐中...' : '🎬 开始追逐！'}
              </button>
            </div>
          </div>

          {/* 定位技术说明 */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">📍 CSS定位类型</h2>
              <div className="space-y-4">
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Static (静态)</h3>
                  <p className="text-blue-100 text-sm">默认定位，元素按正常文档流排列</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-300 mb-2">Relative (相对)</h3>
                  <p className="text-blue-100 text-sm">相对于元素原位置进行偏移</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Absolute (绝对)</h3>
                  <p className="text-blue-100 text-sm">相对于最近的定位祖先元素</p>
                </div>
                <div className="bg-slate-700 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-300 mb-2">Fixed (固定)</h3>
                  <p className="text-blue-100 text-sm">相对于浏览器窗口定位</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🏊 浮动概念</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-2">👈</span>
                  <span className="text-blue-100">float: left - 元素向左浮动</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">👉</span>
                  <span className="text-blue-100">float: right - 元素向右浮动</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">🚫</span>
                  <span className="text-blue-100">clear: both - 清除浮动影响</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS代码示例 */}
        <div className="mt-8 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">💻 厨房追逐CSS代码</h2>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`/* 厨房场景容器 */
.kitchen-scene {
  position: relative;
  width: 100%;
  height: 320px;
  background: linear-gradient(135deg, #fef3c7, #fed7aa);
  border: 4px solid #f59e0b;
  border-radius: 12px;
  overflow: hidden;
}

/* 汤姆的定位 */
.tom {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 2.5rem;
  transition: all 1s ease-in-out;
  z-index: 10;
}

/* 杰瑞的定位 */
.jerry {
  position: absolute;
  top: 80%;
  left: 80%;
  font-size: 2rem;
  transition: all 1s ease-in-out;
  z-index: 10;
}

/* 追逐动画 */
.chasing .tom {
  top: 60%;
  left: 60%;
  transform: rotate(12deg);
}

.chasing .jerry {
  top: 20%;
  left: 20%;
  transform: rotate(45deg);
}

/* 厨房道具浮动布局 */
.kitchen-items {
  float: left;
  margin: 8px;
  font-size: 1.5rem;
}

.kitchen-items:nth-child(even) {
  float: right;
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
                理解CSS定位的四种类型
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                掌握绝对定位和相对定位
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                学习浮动布局的原理
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                实践动画和过渡效果
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">🧪 实验建议</h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                调整角色的起始位置
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                修改动画持续时间
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                尝试不同的动画效果
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                添加更多厨房道具
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