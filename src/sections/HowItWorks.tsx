import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CreditCard, Rocket, MessageSquare, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: 'Перейдите в бота',
    description:
      'Выберите удобную сеть: Telegram сейчас, VK скоро. Тестовый период 72 часа активируется сразу.',
  },
  {
    icon: CreditCard,
    title: 'Оплатите подписку',
    description:
      'Выберите удобный способ оплаты: банковская карта или криптовалюта. Стоимость 150 ₽ в месяц.',
  },
  {
    icon: Rocket,
    title: 'Подключитесь за минуту',
    description:
      'Получите готовую конфигурацию и подключитесь на любом устройстве без ручной настройки.',
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.how-title',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.how-title',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.how-subtitle',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.how-subtitle',
            start: 'top 88%',
          },
        }
      );

      gsap.fromTo(
        '.how-step',
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.how-steps',
            start: 'top 82%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-lime/15 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-lime/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center lg:mb-20">
          <h2 className="how-title font-syncopate text-4xl font-bold uppercase tracking-[0.05em] text-dark dark:text-white sm:text-5xl lg:text-6xl">
            Как это работает
          </h2>
          <p className="how-subtitle mx-auto mt-4 max-w-2xl font-montserrat text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            Три понятных шага, чтобы запустить RayLink без сложных настроек.
          </p>
        </div>

        <div className="how-steps relative">
          <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-lime/45 via-lime/20 to-transparent lg:left-1/2 lg:block lg:-translate-x-1/2" />

          <div className="space-y-7 lg:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={step.title}
                  className={`how-step relative lg:grid lg:grid-cols-2 ${
                    isLeft ? '' : 'lg:[&>*:first-child]:col-start-2'
                  }`}
                >
                  <div
                    className="relative group overflow-visible cursor-pointer transition-all duration-500 hover:-translate-y-1 rounded-[28px] bg-white/60 dark:bg-[rgba(255,255,255,0.01)] border border-black/[0.08] dark:border-white/[0.08] shadow-[inset_0_1px_0_rgba(0,0,0,0.03),0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_20px_rgba(0,0,0,0.1)] p-6 lg:p-7"
                    style={{
                      backdropFilter: 'blur(20px) saturate(140%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-px pointer-events-none hidden dark:block"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                      }}
                    />
                    <div
                      className="absolute inset-x-0 top-0 h-px pointer-events-none block dark:hidden"
                      style={{
                        background:
                          'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none hidden dark:block rounded-[28px]"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 40%)',
                      }}
                    />
                    <div
                      className="absolute inset-0 pointer-events-none block dark:hidden rounded-[28px]"
                      style={{
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.03) 0%, transparent 40%)',
                      }}
                    />

                    <div
                      className={`absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-lime/40 bg-lime text-sm font-bold text-dark shadow-[0_0_22px_rgba(163,230,53,0.45)] lg:flex ${
                        isLeft ? '-right-16' : '-left-16'
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-lime/40 bg-lime text-xs font-bold text-dark shadow-[0_0_18px_rgba(163,230,53,0.4)] lg:hidden">
                      {index + 1}
                    </div>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-syncopate text-[11px] uppercase tracking-[0.06em] text-lime">
                      Шаг {index + 1}
                    </div>

                    <div
                      className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.06]"
                      style={{ boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.03)' }}
                    >
                      <Icon className="h-6 w-6 text-gray-500 dark:text-gray-300 transition-colors duration-300 group-hover:text-lime" />
                    </div>

                    <h3 className="font-martian text-2xl uppercase text-dark transition-colors duration-300 dark:text-white lg:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-montserrat text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>

                    {index === 2 && (
                      <Link
                        to="/instructions"
                        className="group mt-4 inline-flex items-center gap-2 font-montserrat text-sm font-semibold text-lime transition-colors hover:text-lime/80"
                      >
                        Подробная инструкция
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 flex justify-center lg:mt-16">
          <p className="rounded-full border border-lime/30 bg-lime/10 px-5 py-2 font-montserrat text-sm text-gray-700 dark:text-gray-300">
            Первые <span className="font-semibold text-lime">72 часа бесплатно</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
