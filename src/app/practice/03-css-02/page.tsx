'use client';

import Link from 'next/link';
import { useState } from 'react';

type CaveRoomKey = 'entrance' | 'storage' | 'bedroom' | 'escape';

export default function JerryCaveLayout() {
  const [selectedRoom, setSelectedRoom] = useState<CaveRoomKey>('entrance');

  const caveRooms: Record<CaveRoomKey, {
    name: string;
    description: string;
    color: string;
    icon: string;
  }> = {
    entrance: {
      name: '洞口入口',
      description: '杰瑞小心翼翼地探查洞口',
      color: 'bg-blue-100',
      icon: '🕳️'
    },
    storage: {
      name: '奶酪储藏室',
      description: '堆满了美味奶酪的储藏空间',
      color: 'bg-yellow-100',
      icon: '🧀'
    },
    bedroom: {
      name: '舒适卧室',
      description: '杰瑞的温暖小窝',
      color: 'bg-pink-100',
      icon: '🛏️'
    },
    escape: {
      name: '紧急逃生通道',
      description: '汤姆来了！快跑！',
      color: 'bg-red-100',
      icon: '🏃‍♂️'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-blue-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            🐭 杰瑞的地下洞穴设计师 🏠
          </h1>
          <p className="text-lg text-blue-200">
            学习CSS盒模型，为杰瑞设计一个完美的地下居住空间！
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 洞穴布局图 */}
          <div className="lg:col-span-2 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">🗺️ 洞穴布局图</h2>
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg p-8 h-96">
              {/* 洞穴房间 */}
              <div className="grid grid-cols-2 gap-4 h-full">
                {Object.entries(caveRooms).map(([key, room]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRoom(key as CaveRoomKey)}
                    className={`${room.color} rounded-lg p-4 border-4 transition-all duration-300 ${
                      selectedRoom === key 
                        ? 'border-blue-500 shadow-lg shadow-blue-500/50 scale-105' 
                        : 'border-gray-400 hover:border-blue-400'
                    }`}
                  >
                    <div className="text-4xl mb-2">{room.icon}</div>
                    <div className="font-semibold text-gray-800">{room.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{room.description}</div>
                  </button>
                ))}
              </div>
              
              {/* 连接通道 */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full">
                  <path 
                    d="M 50% 25% L 50% 75%" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    strokeDasharray="5,5"
                  />
                  <path 
                    d="M 25% 50% L 75% 50%" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 房间详情 */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">🔍 房间详情</h2>
              <div className={`${caveRooms[selectedRoom].color} rounded-lg p-6 text-center`}>
                <div className="text-6xl mb-4">{caveRooms[selectedRoom].icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {caveRooms[selectedRoom].name}
                </h3>
                <p className="text-gray-600">
                  {caveRooms[selectedRoom].description}
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">📐 CSS盒模型</h2>
              <div className="space-y-4">
                <div className="border-4 border-red-400 p-4 rounded">
                  <div className="border-4 border-yellow-400 p-4 rounded">
                    <div className="border-4 border-green-400 p-4 rounded">
                      <div className="bg-blue-400 p-4 rounded text-center text-white font-bold">
                        内容区域
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-sm space-y-1">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-400 rounded mr-2"></div>
                    <span>Content (内容)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-400 rounded mr-2"></div>
                    <span>Padding (内边距)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                    <span>Border (边框)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-400 rounded mr-2"></div>
                    <span>Margin (外边距)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS代码示例 */}
        <div className="mt-8 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-6">💻 盒模型CSS代码</h2>
          <div className="bg-slate-900 text-green-400 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{`/* 杰瑞洞穴房间布局 */
.cave-room {
  /* 内容区域 */
  width: 200px;
  height: 150px;
  
  /* 内边距 - 房间内部空间 */
  padding: 20px;
  
  /* 边框 - 洞穴墙壁 */
  border: 4px solid #3b82f6;
  border-radius: 12px;
  
  /* 外边距 - 房间之间的距离 */
  margin: 16px;
  
  /* 背景 - 房间装饰 */
  background: linear-gradient(135deg, #e0f2fe, #b3e5fc);
}

/* 悬浮效果 */
.cave-room:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.5);
  transition: all 0.3s ease;
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
                理解CSS盒模型的四个组成部分
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                掌握padding、border、margin的用法
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                学习box-sizing属性的作用
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔹</span>
                实践布局和间距控制技巧
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">🧪 实验建议</h2>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                调整不同房间的padding值
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                修改border样式和颜色
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                尝试不同的margin组合
              </li>
              <li className="flex items-center">
                <span className="mr-2">🔬</span>
                使用box-sizing: border-box
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