'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface CheeseData {
  type: string;
  quality: number;
  freshness: string;
  price: string;
  source: string;
  collectedAt: string;
}

export default function JerryCheeseCollector() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [cheeseData, setCheeseData] = useState<CheeseData | null>(null);
  const [collectionProgress, setCollectionProgress] = useState(0);
  const [isCollecting, setIsCollecting] = useState(false);

  useEffect(() => {
    // 杰瑞的奶酪收集准备工作
    async function prepareCollection() {
      console.log('🐭 杰瑞开始准备收集奶酪...');
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('🧀 奶酪储藏室已准备完毕！');
          resolve();
        }, 2000);
      });
    }

    prepareCollection().then(
      result => console.log('杰瑞的奶酪收集器启动成功:', result)
    );
    console.log('🏃‍♂️ 杰瑞开始行动...');

    // 获取奶酪市场数据 (使用公开API模拟)
    async function getCheeseMarketData() {
      try {
        setIsCollecting(true);
        console.log('📊 正在获取奶酪市场数据...');
        
        // 模拟获取奶酪数据 - 使用JSONPlaceholder作为示例
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('奶酪市场数据获取失败');
        }
        await response.json(); // 获取数据但不直接使用
        
        // 将通用数据转换为奶酪主题
        const cheeseInfo: CheeseData = {
          type: '高级切达奶酪',
          quality: Math.floor(Math.random() * 5) + 1,
          freshness: '新鲜',
          price: '¥' + (Math.random() * 50 + 10).toFixed(2),
          source: 'API数据获取',
          collectedAt: new Date().toLocaleString('zh-CN')
        };
        
        return cheeseInfo;
      } catch (error) {
        console.error('🧀 奶酪收集失败:', error);
        return null;
      } finally {
        setIsCollecting(false);
      }
    }

    // 模拟收集进度
    const progressInterval = setInterval(() => {
      setCollectionProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 500);

    getCheeseMarketData().then(data => {
      console.log('🧀 奶酪收集完成:', data);
      setCheeseData(data);
    });

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-800 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-blue-700/[0.05] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      
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
            🧀 杰瑞的异步奶酪收集器 🐭
          </h1>
          <p className="text-lg text-blue-200">
            学习JavaScript异步编程：在奶酪收集过程中掌握async/await、Promise和API调用
          </p>
        </div>

        {/* 案例说明 */}
        <section className="max-w-4xl mx-auto mb-10 bg-slate-800/60 rounded-xl border border-blue-500/30 shadow-xl p-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">🎯 学习目标：异步编程与数据获取</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">📚 知识点</h3>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                <li>async/await 异步函数语法</li>
                <li>Promise 对象的使用</li>
                <li>fetch API 网络请求</li>
                <li>DOM 操作与状态管理</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-3">🔍 观察要点</h3>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                <li>按F12打开控制台查看日志</li>
                <li>观察异步操作的执行顺序</li>
                <li>体验数据加载的过程</li>
                <li>理解错误处理机制</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 主要内容区域 */}
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* 奶酪收集状态 */}
          <section className="bg-slate-800/50 rounded-xl border border-blue-500/30 shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              🧀 奶酪收集状态
            </h3>
            
            {/* 杰瑞角色 */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-2 animate-bounce">🐭</div>
              <p className="text-blue-200">
                {isCollecting ? '杰瑞正在努力收集中...' : '杰瑞收集完成！'}
              </p>
            </div>

            {/* 收集进度条 */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-blue-300 mb-2">
                <span>收集进度</span>
                <span>{Math.round(collectionProgress)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(collectionProgress, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* 状态指示器 */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${isCollecting ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
                <span className="text-blue-100">
                  {isCollecting ? '数据获取中...' : '收集器就绪'}
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-3 ${collectionProgress >= 100 ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                <span className="text-blue-100">收集进度完成</span>
              </div>
            </div>
          </section>

          {/* 收集结果展示 */}
          <section className="bg-slate-800/50 rounded-xl border border-blue-500/30 shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
              📊 奶酪收集结果
            </h3>
            
            <div
              id="demo"
              ref={demoRef}
              className="bg-slate-700/60 rounded-lg p-6"
            >
              {cheeseData ? (
                <div className="space-y-4">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🧀</div>
                    <h4 className="text-lg font-semibold text-blue-300">{cheeseData.type}</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-600/50 rounded p-3">
                      <div className="text-cyan-300 font-semibold">品质等级</div>
                      <div className="text-yellow-400">
                        {'⭐'.repeat(cheeseData.quality)}
                      </div>
                    </div>
                    <div className="bg-slate-600/50 rounded p-3">
                      <div className="text-cyan-300 font-semibold">新鲜度</div>
                      <div className="text-green-400">{cheeseData.freshness}</div>
                    </div>
                    <div className="bg-slate-600/50 rounded p-3">
                      <div className="text-cyan-300 font-semibold">市场价格</div>
                      <div className="text-blue-300 font-mono">{cheeseData.price}</div>
                    </div>
                    <div className="bg-slate-600/50 rounded p-3">
                      <div className="text-cyan-300 font-semibold">数据来源</div>
                      <div className="text-blue-300">{cheeseData.source}</div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-4 border-t border-slate-600">
                    <div className="text-xs text-blue-300">
                      收集时间: {cheeseData.collectedAt}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-spin">🧀</div>
                  <span className="text-slate-400">杰瑞正在搜寻最优质的奶酪...</span>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* 代码示例 */}
        <section className="max-w-4xl mx-auto mt-8 bg-slate-800/50 rounded-xl border border-blue-500/30 shadow-xl p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">💻 异步奶酪收集代码</h3>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`// 杰瑞的异步奶酪收集函数
async function getCheeseMarketData() {
  try {
    setIsCollecting(true);
    console.log('📊 正在获取奶酪市场数据...');
    
    // 异步API调用
    const response = await fetch('https://api.example.com/cheese');
    if (!response.ok) {
      throw new Error('奶酪市场数据获取失败');
    }
    const data = await response.json();
    
    // 数据处理
    const cheeseInfo = {
      type: '高级切达奶酪',
      quality: Math.floor(Math.random() * 5) + 1,
      freshness: '新鲜',
      collectedAt: new Date().toLocaleString('zh-CN')
    };
    
    return cheeseInfo;
  } catch (error) {
    console.error('🧀 奶酪收集失败:', error);
    return null;
  } finally {
    setIsCollecting(false);
  }
}`}</code>
            </pre>
          </div>
        </section>

        {/* 学习要点 */}
        <section className="max-w-4xl mx-auto mt-8 bg-slate-800/50 rounded-xl border border-blue-500/30 shadow-xl p-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">🎓 异步编程学习要点</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h4 className="font-semibold text-blue-300 mb-2">异步时序</h4>
              <p className="text-sm text-blue-100">
                理解异步操作的执行顺序，掌握Promise和async/await的使用时机
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-semibold text-blue-300 mb-2">状态管理</h4>
              <p className="text-sm text-blue-100">
                在异步操作过程中正确管理组件状态，提供良好的用户反馈
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h4 className="font-semibold text-blue-300 mb-2">错误处理</h4>
              <p className="text-sm text-blue-100">
                使用try/catch处理异步操作中的错误，保证程序稳定性
              </p>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="mt-12 text-center text-blue-300 border-t border-blue-500/30 pt-6">
          <p>&copy; 2024 杰瑞的异步编程学院 - 在奶酪收集中掌握异步编程</p>
          <p className="text-sm text-blue-200 mt-2">学习案例：async/await、Promise、fetch API 实际应用</p>
        </footer>
      </main>
    </div>
  );
} 