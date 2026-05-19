import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Shield, Lock, Smartphone, MessageCircle, Wallet } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="relative group cursor-pointer transition-all duration-500 hover:-translate-y-2 overflow-hidden rounded-[28px] bg-white/60 dark:bg-[rgba(255,255,255,0.01)] border border-black/[0.08] dark:border-white/[0.08] shadow-[inset_0_1px_0_rgba(0,0,0,0.03),0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_20px_rgba(0,0,0,0.1)]"
      style={{
        backdropFilter: 'blur(20px) saturate(140%)',
        WebkitBackdropFilter: 'blur(20px) saturate(140%)',
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none hidden dark:block"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none block dark:hidden"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 40%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none block dark:hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 40%)',
        }}
      />
      <div className="relative z-10 p-8 lg:p-10">
        <div className="mb-6">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.06]"
            style={{
              boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.03)',
            }}
          >
            <Icon className="w-7 h-7 text-gray-500 dark:text-gray-300 transition-colors duration-300 group-hover:text-lime" />
          </div>
        </div>
        <h3 className="font-martian text-lg font-bold text-dark dark:text-white mb-3 uppercase tracking-wide">
          {title}
        </h3>
        <p className="font-montserrat text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const features = [
    {
      icon: Zap,
      title: 'До 1 Гбит/с',
      description: 'Оптимизированные серверы для максимальной скорости соединения без просадок.',
    },
    {
      icon: Shield,
      title: 'Протокол VLESS',
      description: 'Современный протокол с шифрованием и защитой трафика от перехвата.',
    },
    {
      icon: Lock,
      title: 'Приватность',
      description: 'Ваш трафик остаётся конфиденциальным. Мы не храним логи активности.',
    },
    {
      icon: Smartphone,
      title: '1 клик для подключения',
      description: 'Настройка за 2 минуты через Telegram бота. Работает на всех устройствах.',
    },
    {
      icon: MessageCircle,
      title: '24/7 Поддержка',
      description: 'Отвечаем в течение часа в чате Telegram. Помогаем с настройкой.',
    },
    {
      icon: Wallet,
      title: '150₽ в месяц',
      description: 'Никаких скрытых платежей и комиссий. Прозрачная цена навсегда.',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <svg
          className="w-[1400px] h-[900px] opacity-[0.04]"
          viewBox="0 0 1400 900"
          fill="none"
          style={{ minWidth: '1400px' }}
        >
          <ellipse cx="700" cy="450" rx="650" ry="350" className="stroke-black/20 dark:stroke-white" strokeWidth="1" />
          <ellipse cx="700" cy="450" rx="520" ry="280" className="stroke-black/20 dark:stroke-white" strokeWidth="0.5" />
          <ellipse cx="700" cy="450" rx="390" ry="210" className="stroke-black/20 dark:stroke-white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="font-syncopate text-3xl lg:text-4xl font-bold text-center text-dark dark:text-white mb-16 lg:mb-20 uppercase tracking-wide"
        >
          Преимущества
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
