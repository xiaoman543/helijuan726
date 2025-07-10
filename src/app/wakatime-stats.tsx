import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API Key Not Configured";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;
    
    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "Error Fetching Data";
    }

    const stats = await response.json();
    return stats.data?.text || "No activity yet";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "Server Error";
  }
}

async function WakaTimeData() {
    const stats = await getWakaTimeStats();
    return (
        <p className="flex items-center justify-center space-x-2">
          <span>🐱汤姆的编程修炼时长:</span> 
          <span className="font-semibold text-blue-600 bg-cyan-200 px-3 py-1 rounded-full">{stats}</span>
          <span>🐭</span>
        </p>
    );
}

export default function WakaTimeStats() {
  return (
    <footer className="text-slate-200 text-center p-8 mt-auto w-full z-10 bg-gradient-to-t from-slate-800/50 to-transparent">
        <div className="container mx-auto">
          <p className="mb-3 text-lg">🎬 &copy; {new Date().getFullYear()} 汤姆和杰瑞编程冒险学园 🎬</p>
          <Suspense fallback={
            <p className="flex items-center justify-center space-x-2">
              <span>🐱</span>
              <span>正在统计编程冒险时长...</span>
              <span>🐭</span>
            </p>
          }>
            <WakaTimeData />
          </Suspense>
          <p className="mt-3 text-sm text-blue-300">在欢声笑语中学习，与汤姆杰瑞一起成长！</p>
        </div>
    </footer>
  );
} 