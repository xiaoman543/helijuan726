import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600/30 backdrop-blur-md text-white p-4 shadow-lg w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-cyan-300 transition-colors duration-300 tracking-wider">
          🐱汤姆和杰瑞学习园地🐭
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-cyan-300 transition-colors duration-300">首页</Link>
          <Link href="/archive" className="hover:text-cyan-300 transition-colors duration-300">精彩回顾</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-20 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-800 to-transparent rounded-full blur-3xl"></div>
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 mb-6 drop-shadow-lg">
            🎬《汤姆和杰瑞》编程冒险🎬
          </h1>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto tracking-wide font-medium">
            跟随汤姆和杰瑞一起学习前端开发，在欢声笑语中掌握编程技能！
          </p>
          <div className="mt-8 flex justify-center space-x-8 text-4xl">
            <span className="animate-bounce">🐱</span>
            <span className="animate-pulse">🧀</span>
            <span className="animate-bounce delay-200">🐭</span>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}
