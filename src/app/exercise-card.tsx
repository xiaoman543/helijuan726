import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-cyan-500/20 to-transparent"></div>
          <div className="absolute top-2 right-2 text-2xl">
            {Math.random() > 0.5 ? '🐱' : '🐭'}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-br from-slate-50 to-blue-50">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-slate-700 text-sm mb-4 h-20 overflow-y-auto flex-grow leading-relaxed">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`inline-block text-white text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full shadow-sm ${
                  index % 3 === 0 ? 'bg-blue-500' :
                  index % 3 === 1 ? 'bg-cyan-500' : 'bg-indigo-500'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
          <div className="font-medium text-blue-600 group-hover:text-cyan-500 transition-colors duration-300 flex items-center">
            <span className="mr-2">🎯</span>
            开始冒险 &rarr;
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-blue-300/50 group-hover:shadow-2xl border-2 border-blue-200 group-hover:border-blue-400">
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full">{cardContent}</div>
        )}
      </div>
    </div>
  );
} 