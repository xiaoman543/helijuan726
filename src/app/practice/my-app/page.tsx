'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CheeseCollector() {
  const [score, setScore] = useState(0);
  const [jerryPosition, setJerryPosition] = useState({ x: 50, y: 50 });
  const [cheeses, setCheeses] = useState([
    { id: 1, x: 20, y: 30, collected: false },
    { id: 2, x: 70, y: 20, collected: false },
    { id: 3, x: 30, y: 70, collected: false },
    { id: 4, x: 80, y: 60, collected: false },
  ]);

  const moveJerry = (direction: string) => {
    setJerryPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;
      
      switch(direction) {
        case 'up': newY = Math.max(5, prev.y - 10); break;
        case 'down': newY = Math.min(90, prev.y + 10); break;
        case 'left': newX = Math.max(5, prev.x - 10); break;
        case 'right': newX = Math.min(90, prev.x + 10); break;
      }
      
      // 检查是否收集到奶酪
      setCheeses(currentCheeses => 
        currentCheeses.map(cheese => {
          if (!cheese.collected && 
              Math.abs(cheese.x - newX) < 8 && 
              Math.abs(cheese.y - newY) < 8) {
            setScore(s => s + 10);
            return { ...cheese, collected: true };
          }
          return cheese;
        })
      );
      
      return { x: newX, y: newY };
    });
  };

  const resetGame = () => {
    setScore(0);
    setJerryPosition({ x: 50, y: 50 });
    setCheeses([
      { id: 1, x: 20, y: 30, collected: false },
      { id: 2, x: 70, y: 20, collected: false },
      { id: 3, x: 30, y: 70, collected: false },
      { id: 4, x: 80, y: 60, collected: false },
    ]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">
            🐭 杰瑞的奶酪收集器 🧀
          </h1>
          <p className="text-lg text-orange-600">
            学习React组件化开发，帮助杰瑞收集美味的奶酪！
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">🎮 游戏区域</h2>
            <div className="relative bg-green-100 border-4 border-green-300 rounded-lg h-80 overflow-hidden">
              {/* 杰瑞 */}
              <div 
                className="absolute transition-all duration-300 text-3xl z-10"
                style={{ 
                  left: `${jerryPosition.x}%`, 
                  top: `${jerryPosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                🐭
              </div>
              
              {/* 奶酪 */}
              {cheeses.map(cheese => (
                !cheese.collected && (
                  <div
                    key={cheese.id}
                    className="absolute text-2xl animate-pulse"
                    style={{
                      left: `${cheese.x}%`,
                      top: `${cheese.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    🧀
                  </div>
                )
              ))}
              
              {/* 装饰元素 */}
              <div className="absolute bottom-2 left-2 text-2xl">🏠</div>
              <div className="absolute top-2 right-2 text-2xl">🌸</div>
            </div>
            
            <div className="mt-4 flex justify-center space-x-2">
              <button 
                onClick={() => moveJerry('up')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                ⬆️
              </button>
            </div>
            <div className="flex justify-center space-x-2 mt-2">
              <button 
                onClick={() => moveJerry('left')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                ⬅️
              </button>
              <button 
                onClick={() => moveJerry('down')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                ⬇️
              </button>
              <button 
                onClick={() => moveJerry('right')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                ➡️
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">📊 游戏状态</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg">得分:</span>
                  <span className="text-2xl font-bold text-orange-600">{score}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">剩余奶酪:</span>
                  <span className="text-2xl font-bold text-yellow-600">
                    {cheeses.filter(c => !c.collected).length}
                  </span>
                </div>
                <button 
                  onClick={resetGame}
                  className="w-full mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                >
                  🔄 重新开始
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">🎯 学习要点</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">🔹</span>
                  React useState Hook状态管理
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔹</span>
                  事件处理和用户交互
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔹</span>
                  组件化思维和代码复用
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🔹</span>
                  CSS动画和过渡效果
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300"
          >
            <span className="mr-2">🏠</span>
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
} 