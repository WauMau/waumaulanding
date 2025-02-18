import React from 'react';
import {
  Youtube,
  Send,
  Instagram,
  Star,
  Award,
  ChevronDown,
} from 'lucide-react';

const OnlyFansIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="32" 
    height="32" 
    fill="currentColor"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#050505] opacity-80"></div>
      
      {/* Subtle pattern overlay */}
      <div className="fixed inset-0 backdrop-filter backdrop-blur-[100px] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IC00TDQgNlpNLTQgNkw2IC00WiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Ambient light effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-[150px] animate-float"
            style={{ animationDuration: '20s' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full filter blur-[150px] animate-float"
            style={{ animationDuration: '25s', animationDelay: '-10s' }}
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
      <div className="relative max-w-4xl mx-auto px-4 py-20">
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
            icon={<OnlyFansIcon />}
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
        bg-gray-800/30 group ${className}`}
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
