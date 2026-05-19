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
      className="glass-card-light p-8 lg:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime/40"
    >
      <div className="mb-6">
        <div className="w-14 h-14 rounded-2xl bg-dark-card flex items-center justify-center border border-white/5 transition-all duration-300 group-hover:border-lime/50 group-hover:scale-110 group-hover:shadow-glow-sm">
          <Icon className="w-7 h-7 text-gray-light transition-colors duration-300 group-hover:text-lime" />
        </div>
      </div>
      <h3 className="font-montserrat text-lg font-bold text-white mb-3 uppercase tracking-wide">
        {title}
      </h3>
      <p className="font-montserrat text-gray-light text-sm leading-relaxed">
        {description}
      </p>
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
      className="relative pt-12 pb-16 lg:pt-16 lg:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="font-montserrat text-3xl lg:text-4xl font-bold text-center text-white mb-16 lg:mb-20 uppercase tracking-wide"
        >
          Почему RayLink
        </h2>

        {/* Features Grid */}
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
