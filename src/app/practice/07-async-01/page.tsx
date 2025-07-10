'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function AsyncChaseGame() {
  const [gameState, setGameState] = useState('ready'); // ready, chasing, caught, escaped
  const [tomPosition, setTomPosition] = useState(0);
  const [jerryPosition, setJerryPosition] = useState(100);
  const [score, setScore] = useState(0);
  const [gameLog, setGameLog] = useState<string[]>([]);

  const addLog = (message: string) => {
    setGameLog(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const startChase = async () => {
    setGameState('chasing');
    setTomPosition(0);
    setJerryPosition(100);
    addLog('🐱 汤姆开始追逐！');

    try {
      // 异步追逐序列
      await delay(500);
      setTomPosition(20);
      addLog('🐱 汤姆加速前进...');

      await delay(800);
      setTomPosition(40);
      addLog('🐭 杰瑞感觉到危险！');

      await delay(600);
      setJerryPosition(80);
      addLog('🐭 杰瑞开始逃跑！');

      await delay(700);
      setTomPosition(60);
      addLog('🐱 汤姆紧追不舍！');

      await delay(500);
      setJerryPosition(60);
      
      // 随机结果
      const catchProbability = Math.random();
      
      if (catchProbability > 0.7) {
        await delay(400);
        setTomPosition(60);
        setGameState('caught');
        addLog('😱 汤姆抓住了杰瑞！');
        setScore(prev => prev + 10);
      } else {
        await delay(300);
        setJerryPosition(20);
        await delay(200);
        setJerryPosition(0);
        setGameState('escaped');
        addLog('🎉 杰瑞成功逃脱！');
        setScore(prev => prev + 5);
      }

      // 重置游戏
      await delay(2000);
      setGameState('ready');
      addLog('🔄 游戏重置，准备下一轮');
      
    } catch (error) {
      console.error('追逐过程中出现错误:', error);
      addLog('❌ 追逐过程中出现错误');
      setGameState('ready');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-300 mb-4">
            ⚡ 异步追逐大作战 ⚡
          </h1>
          <p className="text-lg text-blue-200">
            学习JavaScript异步编程：Promise、async/await 在游戏中的应用
          </p>
        </header>

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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 游戏区域 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 游戏场景 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-cyan-400">🎮 追逐场景</h2>
                <div className="text-xl font-bold text-yellow-400">
                  得分: {score}
                </div>
              </div>
              
              {/* 追逐跑道 */}
              <div className="relative bg-gradient-to-r from-green-200 to-blue-200 rounded-lg h-24 mb-6 overflow-hidden">
                {/* 背景装饰 */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <span className="text-2xl">🏁</span>
                  <span className="text-2xl">🧀</span>
                  <span className="text-2xl">🕳️</span>
                </div>
                
                {/* 汤姆 */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 text-3xl transition-all duration-500 z-10"
                  style={{ left: `${tomPosition}%` }}
                >
                  🐱
                </div>
                
                {/* 杰瑞 */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 text-2xl transition-all duration-500 z-10"
                  style={{ left: `${jerryPosition}%` }}
                >
                  🐭
                </div>
                
                {/* 游戏状态指示器 */}
                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  {gameState === 'ready' && '准备就绪'}
                  {gameState === 'chasing' && '追逐中...'}
                  {gameState === 'caught' && '被抓住了！'}
                  {gameState === 'escaped' && '成功逃脱！'}
                </div>
              </div>

              {/* 游戏控制 */}
              <div className="text-center">
                <button
                  onClick={startChase}
                  disabled={gameState !== 'ready'}
                  className={`px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 ${
                    gameState === 'ready'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-500 cursor-not-allowed text-gray-300'
                  }`}
                >
                  {gameState === 'ready' ? '🚀 开始异步追逐' : '⏳ 追逐进行中...'}
                </button>
              </div>
            </section>

            {/* 异步概念说明 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">📚 异步编程概念</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-3">Promise (承诺)</h4>
                  <p className="text-sm text-blue-100 mb-3">
                    Promise 代表一个异步操作的最终完成或失败。在游戏中，每个追逐动作都是一个 Promise。
                  </p>
                  <div className="bg-slate-800 p-3 rounded text-xs text-green-400">
                    const delay = (ms) =&gt; new Promise(resolve =&gt; setTimeout(resolve, ms));
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-3">async/await (异步等待)</h4>
                  <p className="text-sm text-blue-100 mb-3">
                    async/await 让异步代码看起来像同步代码，使追逐序列更易理解。
                  </p>
                  <div className="bg-slate-800 p-3 rounded text-xs text-green-400">
                    await delay(500);<br/>
                    setTomPosition(20);
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* 侧边栏 */}
          <aside className="space-y-6">
            {/* 游戏日志 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">📋 游戏日志</h3>
              <div className="space-y-2 h-64 overflow-y-auto">
                {gameLog.length === 0 ? (
                  <p className="text-blue-200 text-sm italic">点击开始按钮查看日志...</p>
                ) : (
                  gameLog.map((log, index) => (
                    <div key={index} className="text-sm text-blue-100 bg-slate-700/30 p-2 rounded">
                      {log}
                    </div>
                  ))
                )}
              </div>
            </section>

            {/* 异步编程技巧 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">💡 编程技巧</h3>
              <div className="space-y-3 text-sm">
                <div className="border-l-4 border-yellow-500 pl-3">
                  <h4 className="font-semibold text-yellow-300">错误处理</h4>
                  <p className="text-blue-100">使用 try/catch 处理异步操作中的错误</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3">
                  <h4 className="font-semibold text-green-300">状态管理</h4>
                  <p className="text-blue-100">在异步操作中正确更新组件状态</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <h4 className="font-semibold text-blue-300">时序控制</h4>
                  <p className="text-blue-100">使用 await 控制异步操作的执行顺序</p>
                </div>
              </div>
            </section>

            {/* 代码示例 */}
            <section className="bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">💻 核心代码</h3>
              <div className="bg-slate-900 rounded-lg p-4 text-xs overflow-x-auto">
                <pre className="text-green-400">
                  <code>{`// 异步追逐函数
const startChase = async () => {
  setGameState('chasing');
  
  try {
    await delay(500);
    setTomPosition(20);
    
    await delay(800);
    setTomPosition(40);
    
    // 更多异步操作...
  } catch (error) {
    console.error(error);
  }
};`}</code>
                </pre>
              </div>
            </section>
          </aside>
        </div>

        {/* 学习总结 */}
        <section className="mt-8 bg-slate-800/50 rounded-xl shadow-lg p-6 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">🎓 异步编程学习要点</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h4 className="font-semibold text-blue-300 mb-2">时间控制</h4>
              <p className="text-sm text-blue-100">
                使用 setTimeout 和 Promise 控制游戏节奏，创造真实的追逐体验
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-semibold text-blue-300 mb-2">状态同步</h4>
              <p className="text-sm text-blue-100">
                在异步操作中保持UI状态与游戏逻辑的同步更新
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-semibold text-blue-300 mb-2">性能优化</h4>
              <p className="text-sm text-blue-100">
                合理使用异步编程避免界面阻塞，提升用户体验
              </p>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-12 text-center text-blue-300 border-t border-blue-500/30 pt-6">
          <p>&copy; 2024 汤姆杰瑞异步编程学院 - 在游戏中学习异步编程</p>
          <p className="text-sm text-blue-200 mt-2">学习案例：Promise、async/await 实际应用</p>
        </footer>
      </div>
    </div>
  );
} 