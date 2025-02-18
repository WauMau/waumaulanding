import React, { useEffect, useState, useRef } from "react";
import { Youtube, Send, Instagram, Star, Award, ChevronDown } from "lucide-react";

const OnlyFansIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

function App() {
  const [loaded, setLoaded] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Плавная загрузка страницы
  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  // Плавный скролл вниз
  const scrollToSection = () => {
    const section = document.getElementById("social-links");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-target").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-white transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}>
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#050505] opacity-80"></div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="z-10 text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-glow">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 tracking-wider font-light">
            Explore Content from WauMau and enjoy!
          </p>

          <div className="animate-bounce mt-16 cursor-pointer" onClick={scrollToSection}>
            <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div id="social-links" className="relative max-w-4xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SocialCard
            icon={<Youtube className="w-8 h-8" />}
            title="YouTube"
            description="Watch my latest videos"
            link="https://youtube.com"
            color="hover:bg-red-500/10 hover:border-red-500"
          />

          <SocialCard
            icon={<Send className="w-8 h-8" />}
            title="Telegram"
            description="Join my community"
            link="https://telegraыm.com"
            color="hover:bg-blue-500/10 hover:border-blue-500"
          />

          <SocialCard
            icon={<Instagram className="w-8 h-8" />}
            title="Instagram"
            description="Follow my daily updates"
            link="https://instagram.com"
            color="hover:bg-pink-500/10 hover:border-pink-500"
          />

          <SocialCard
            icon={<Star className="w-8 h-8" />}
            title="Boosty"
            description="Support my work"
            link="https://boosty.to"
            color=""
            className="neon-yellow"
          />

          <SocialCard
            icon={<Award className="w-8 h-8" />}
            title="Patreon"
            description="Become a patron"
            link="https://patreon.com"
            color=""
            className="neon-orange"
          />

          <SocialCard
            icon={<OnlyFansIcon />}
            title="OnlyFans"
            description="Exclusive content"
            link="https://onlyfans.com"
            color=""
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
  className?: string;
}

function SocialCard({
  icon,
  title,
  description,
  link,
  color,
  className = '',
}: SocialCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`fade-target opacity-0 translate-y-10 block p-6 rounded-xl backdrop-blur-sm 
        transition-all duration-700 transform hover:scale-100 hover:-translate-y-0.5 ${color}
        bg-gray-800/30 group ${className}`}
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
