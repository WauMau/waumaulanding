import React from 'react';
import {
  Youtube,
  Send,
  Instagram,
  Heart,
  Star,
  Award,
  ChevronDown,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070')] bg-cover bg-center opacity-10"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-float"
            style={{ animationDelay: '-3s' }}
          ></div>
        </div>

        <div className="z-10 text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-glow">
              Welcome
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 tracking-wider font-light">
              Explore Content from WauMau and enjoy!
            </p>
          </div>

          <div className="animate-bounce mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SocialCard
            icon={<Youtube className="w-8 h-8" />}
            title="YouTube"
            description="Watch my latest videos"
            link="https://youtube.com"
            color="hover:bg-red-500/10 hover:border-red-500"
            delay={0}
          />

          <SocialCard
            icon={<Send className="w-8 h-8" />}
            title="Telegram"
            description="Join my community"
            link="https://telegramm.com"
            color="hover:bg-blue-500/10 hover:border-blue-500"
            delay={100}
          />

          <SocialCard
            icon={<Instagram className="w-8 h-8" />}
            title="Instagram"
            description="Follow my daily updates"
            link="https://instagram.com"
            color="hover:bg-pink-500/10 hover:border-pink-500"
            delay={200}
          />

          <SocialCard
            icon={<Star className="w-8 h-8" />}
            title="Boosty"
            description="Support my work"
            link="https://boosty.to"
            color=""
            delay={300}
            className="neon-yellow"
          />

          <SocialCard
            icon={<Award className="w-8 h-8" />}
            title="Patreon"
            description="Become a patron"
            link="https://patreon.com"
            color=""
            delay={400}
            className="neon-orange"
          />

          <SocialCard
            icon={<Heart className="w-8 h-8" />}
            title="OnlyFans"
            description="Exclusive content"
            link="https://onlyfans.com"
            color=""
            delay={500}
            className="neon-blue"
          />
        </div>
      </div>
    </div>
  );
}

interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
  delay: number;
  className?: string;
}

function SocialCard({
  icon,
  title,
  description,
  link,
  color,
  delay,
  className = '',
}: SocialCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] block p-6 rounded-xl backdrop-blur-sm 
        transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 ${color}
        bg-gray-800/50 group ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4">
        <div className="transition-transform duration-300 group-hover:rotate-12">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default App;
