import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Platform = 'ios' | 'android' | 'windows' | 'macos';

interface StepData {
  number: string;
  title: string;
  description: React.ReactNode;
  action?: React.ReactNode;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
  extraDescription?: React.ReactNode;
  extraMedia?: {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  };
}

interface PlatformData {
  id: Platform;
  name: string;
  icon: React.ElementType;
  steps: StepData[];
}

const IOSIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.06 1.87-2.54 6.98.22 8.13-.57 1.5-1.31 2.99-2.27 4.08zm-5.85-15.1c.07-2.04 1.76-3.79 3.78-3.94.29 2.32-1.93 4.48-3.78 3.94z" />
  </svg>
);

const AndroidIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

const MacOSIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="12" rx="2" />
    <path d="M8 20h8" />
    <path d="M2 20h20" />
  </svg>
);

const AppStoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.06 1.87-2.54 6.98.22 8.13-.57 1.5-1.31 2.99-2.27 4.08zm-5.85-15.1c.07-2.04 1.76-3.79 3.78-3.94.29 2.32-1.93 4.48-3.78 3.94z" />
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0225 3.503C15.5902 8.2033 13.8533 7.758 12 7.758c-1.8532 0-3.5901.4453-5.1366 1.1917L4.8409 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
  </svg>
);

const platformsData: PlatformData[] = [
  {
    id: 'ios',
    name: 'iOS',
    icon: IOSIcon,
    steps: [
      {
        number: '01',
        title: 'Скачайте приложение',
        description: 'Установите официальное приложение INCY из App Store:',
        action: (
          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/ru/app/incy/id6756943388"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-dark dark:text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-lime/40 hover:bg-lime/[0.035] dark:hover:bg-lime/[0.045] hover:shadow-[0_14px_34px_-26px_rgba(199,255,0,0.48)] active:translate-y-0 active:scale-[0.99] w-full"
            >
              <AppStoreIcon className="w-9 h-9 flex-shrink-0 text-lime transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_9px_rgba(199,255,0,0.38)]" />
              <div className="flex flex-col leading-tight min-w-0">
                <small className="text-[11px] text-gray-500 dark:text-gray-light font-normal uppercase tracking-wide">Загрузить клиент</small>
                <div className="flex items-start gap-2 flex-wrap">
                  <span className="text-base font-bold tracking-tight">INCY в App Store</span>
                  <span className="px-1.5 py-0.5 rounded-md bg-lime/10 text-lime text-[10px] font-bold uppercase tracking-wide border border-lime/20 mt-0.5 transition-all duration-500 ease-out group-hover:bg-lime group-hover:text-black group-hover:border-lime">
                    Рекомендуем
                  </span>
                </div>
              </div>
            </a>
          </div>
        ),
      },
      {
        number: '02',
        title: 'Получите конфигурацию',
        description: <>Скопируйте свой профиль в разделе <strong>👤 Мой профиль &gt; 🔗 Ссылки</strong> в боте RayLink.</>,
        media: { type: 'image', src: 'media/ios/step2.png', alt: 'Копирование профиля' },
      },
      {
        number: '03',
        title: 'Импортируйте профиль',
        description: <>Откройте приложение Happ, нажмите <strong>«+»</strong> и вставьте скопированную ссылку из бота.</>,
        media: { type: 'image', src: 'media/ios/step3.gif', alt: 'Импорт профиля' },
      },
      {
        number: '04',
        title: 'Подключитесь',
        description: 'Выберите добавленную конфигурацию и нажмите кнопку подключения. Готово!',
        media: { type: 'image', src: 'media/ios/step4.png', alt: 'Подключение' },
      },
    ],
  },
  {
    id: 'android',
    name: 'Android',
    icon: AndroidIcon,
    steps: [
      {
        number: '01',
        title: 'Скачайте приложение',
        description: 'Установите официальное приложение INCY из Google Play:',
        action: (
          <a
            href="https://play.google.com/store/apps/details?id=llc.itdev.incy&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-dark dark:text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-lime/40 hover:bg-lime/[0.035] dark:hover:bg-lime/[0.045] hover:shadow-[0_14px_34px_-26px_rgba(199,255,0,0.48)] active:translate-y-0 active:scale-[0.99] w-full"
          >
            <GooglePlayIcon className="w-9 h-9 flex-shrink-0 text-lime transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_9px_rgba(199,255,0,0.38)]" />
            <div className="flex flex-col leading-tight">
              <small className="text-[11px] text-gray-500 dark:text-gray-light font-normal uppercase tracking-wide">Загрузить клиент</small>
              <span className="text-base font-bold tracking-tight">INCY в Google Play</span>
            </div>
          </a>
        ),
      },
      {
        number: '02',
        title: 'Получите конфигурацию',
        description: <>Скопируйте свой профиль в разделе <strong>👤 Мой профиль &gt; 🔗 Ссылки</strong> в боте RayLink.</>,
        media: { type: 'image', src: 'media/android/step2.png', alt: 'Копирование профиля' },
      },
      {
        number: '03',
        title: 'Импортируйте профиль',
        description: <>Откройте приложение Happ, нажмите <strong>«+»</strong> и вставьте скопированную ссылку из бота.</>,
        media: { type: 'image', src: 'media/android/step3.gif', alt: 'Импорт профиля' },
      },
      {
        number: '04',
        title: 'Подключитесь',
        description: 'Выберите добавленную конфигурацию и нажмите кнопку подключения. Готово!',
        media: { type: 'image', src: 'media/android/step4.png', alt: 'Подключение' },
      },
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    icon: WindowsIcon,
    steps: [
      {
        number: '01',
        title: 'Загрузите клиент',
        description: 'Скачайте Happ для Windows:',
        action: (
          <a
            href="https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x64.exe"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-dark dark:text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-lime/40 hover:bg-lime/[0.035] dark:hover:bg-lime/[0.045] hover:shadow-[0_14px_34px_-26px_rgba(199,255,0,0.48)] active:translate-y-0 active:scale-[0.99] w-full"
          >
            <WindowsIcon className="w-9 h-9 flex-shrink-0 text-lime transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_9px_rgba(199,255,0,0.38)]" />
            <div className="flex flex-col leading-tight">
              <small className="text-[11px] text-gray-500 dark:text-gray-light font-normal uppercase tracking-wide">Скачать</small>
              <span className="text-base font-bold tracking-tight">HAPP для Windows</span>
            </div>
          </a>
        ),
      },
      {
        number: '02',
        title: 'Запуск установщика',
        description: 'Запустите скачанный .exe файл и следуйте инструкциям мастера установки.',
      },
      {
        number: '03',
        title: 'Получите конфигурацию',
        description: <>Скопируйте свой профиль в разделе <strong>👤 Мой профиль &gt; 🔗 Ссылки</strong> в боте RayLink.</>,
        media: { type: 'image', src: 'media/windows/step3.png', alt: 'Копирование профиля' },
      },
      {
        number: '04',
        title: 'Настройте подключение',
        description: 'Вставьте конфигурационную ссылку из бота (Ctrl+V)',
        media: { type: 'image', src: 'media/windows/step4_1.png', alt: 'Вставка конфигурации' },
        extraDescription: 'Убедитесь, что у вас включен режим TUN',
        extraMedia: { type: 'image', src: 'media/windows/step4_2.png', alt: 'Режим TUN' },
      },
      {
        number: '05',
        title: 'Подключитесь',
        description: 'Выберите добавленную конфигурацию и нажмите кнопку подключения. Готово!',
        media: { type: 'image', src: 'media/windows/step5.png', alt: 'Подключение' },
      },
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: MacOSIcon,
    steps: [
      {
        number: '01',
        title: 'Скачайте клиент',
        description: 'Скачайте универсальную версию Happ для macOS. Она подходит для Mac на Apple Silicon и Intel.',
        action: (
          <a
            href="https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.macOS.universal.dmg"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-gray-100 dark:bg-[#1a1a1a] border border-black/10 dark:border-white/10 text-dark dark:text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.01] hover:border-lime/40 hover:bg-lime/[0.035] dark:hover:bg-lime/[0.045] hover:shadow-[0_14px_34px_-26px_rgba(199,255,0,0.48)] active:translate-y-0 active:scale-[0.99] w-full"
          >
            <MacOSIcon className="w-9 h-9 flex-shrink-0 text-lime transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_9px_rgba(199,255,0,0.38)]" />
            <div className="flex flex-col leading-tight">
              <small className="text-[11px] text-gray-500 dark:text-gray-light font-normal uppercase tracking-wide">Скачать</small>
              <span className="text-base font-bold tracking-tight">HAPP для macOS</span>
            </div>
          </a>
        ),
      },
      {
        number: '02',
        title: 'Установите приложение',
        description: 'Откройте скачанный файл .dmg и перетащите Happ в папку Applications. После этого запустите приложение из Launchpad или Finder.',
      },
      {
        number: '03',
        title: 'Получите конфигурацию',
        description: <>Скопируйте свой профиль в разделе <strong>👤 Мой профиль &gt; 🔗 Ссылки</strong> в боте RayLink.</>,
      },
      {
        number: '04',
        title: 'Импортируйте профиль',
        description: <>Откройте Happ, нажмите <strong>«+»</strong>, выберите добавление профиля по ссылке или из буфера обмена и вставьте скопированную ссылку из бота.</>,
      },
      {
        number: '05',
        title: 'Подключитесь',
        description: 'Выберите добавленную конфигурацию, убедитесь, что включен режим TUN, и нажмите кнопку подключения. Готово!',
      },
    ],
  },
];

const faqs = [
  {
    question: 'Как получить пробный период?',
    answer: (
      <>
        Пробный период составляет <strong>72 часа</strong>. Для активации нужно перейти в{' '}
        <a href="https://t.me/raylink_service_bot" className="text-lime hover:underline font-medium">Telegram</a> и нажать кнопку{' '}
        <strong>⚙️ Тестовый период</strong>
      </>
    ),
  },
  {
    question: 'Можно ли использовать на нескольких устройствах?',
    answer: (
      <>
        Да, одна подписка работает на <strong>3 устройствах одновременно</strong>. Вы можете использовать RayLink на телефоне и компьютере. Также профили совместимы с <strong>TV</strong> — подключайте VPN прямо на телевизоре!
      </>
    ),
  },
  {
    question: 'Как продлить подписку?',
    answer: (
      <>
        Откройте бота в <a href="https://t.me/raylink_service_bot" className="text-lime hover:underline font-medium">Telegram</a>, выберите раздел{' '}
        <strong>💳 Тарифы (Оплата)</strong> и следуйте инструкциям. Подписка продлится автоматически после оплаты.
      </>
    ),
  },
];

const InstructionsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('ios');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handlePlatformChange = (platform: Platform) => {
    if (platform === selectedPlatform) return;

    if (stepsContainerRef.current) {
      stepsContainerRef.current.style.height = `${stepsContainerRef.current.offsetHeight}px`;
    }

    setSelectedPlatform(platform);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      if (faqContainerRef.current) {
        const faqItems = faqContainerRef.current.querySelectorAll('.faq-item');
        gsap.fromTo(
          faqItems,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: faqContainerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, pageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!stepsContainerRef.current) return;

    const container = stepsContainerRef.current;
    const stepCards = container.querySelectorAll('.instruction-step');
    const targetHeight = container.scrollHeight;

    gsap.killTweensOf([container, ...Array.from(stepCards)]);
    gsap.to(container, {
      height: targetHeight,
      duration: 0.45,
      ease: 'power2.out',
      onComplete: () => {
        container.style.height = 'auto';
      },
    });
    gsap.fromTo(
      stepCards,
      { y: 18, opacity: 0, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.055,
        ease: 'power2.out',
      }
    );
  }, [selectedPlatform]);

  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (!el) return;
      if (openFaqIndex === idx) {
        gsap.to(el, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' });
      }
    });
  }, [openFaqIndex]);


  const currentPlatform = platformsData.find((p) => p.id === selectedPlatform);

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-foreground">
      <style>{`
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-icon {
          animation: floatIcon 2s ease-in-out infinite;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-black/5 dark:border-white/5 bg-white/95 dark:bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px]">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center">
          <h1 className="font-syncopate text-lg font-bold text-dark dark:text-white uppercase tracking-wide">Инструкция по подключению</h1>
        </div>
      </header>

      <main ref={contentRef} className="max-w-3xl mx-auto px-4 py-10">
        <div className="glass-card p-6 lg:p-10">
          {/* Hero header */}
          <div className="text-center pt-6 pb-8">
            <div className="font-syncopate text-2xl font-bold tracking-widest text-dark dark:text-white uppercase mb-2">RayLink</div>
            <p className="font-montserrat text-sm text-gray-500 dark:text-gray-light">Инструкция по настройке</p>
          </div>

          {/* Platform selector */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {platformsData.map((platform) => {
              const Icon = platform.icon;
              const isActive = selectedPlatform === platform.id;
              return (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformChange(platform.id)}
                  className={`group relative rounded-2xl p-5 text-center transition-all duration-500 ease-out overflow-hidden border hover:-translate-y-0.5 hover:scale-[1.01] hover:border-lime/40 hover:bg-lime/[0.035] dark:hover:bg-lime/[0.045] hover:shadow-[0_14px_34px_-26px_rgba(199,255,0,0.48)] active:translate-y-0 active:scale-[0.99] ${
                    isActive
                      ? 'bg-lime/[0.03] border-lime/55 shadow-[0_0_0_1px_rgba(163,230,53,0.25),0_8px_24px_rgba(163,230,53,0.08)]'
                      : 'bg-gray-100 dark:bg-[#111] border-black/[0.08] dark:border-white/[0.08]'
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 mx-auto mb-3 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 group-hover:drop-shadow-[0_0_9px_rgba(199,255,0,0.38)] ${
                      isActive ? 'text-lime animate-float-icon' : 'text-gray-400 dark:text-gray-500 group-hover:text-lime'
                    }`}
                  />
                  <span
                    className={`font-martian text-sm font-semibold transition-colors duration-500 ease-out ${
                      isActive ? 'text-dark dark:text-white' : 'text-gray-500 dark:text-gray-light group-hover:text-dark dark:group-hover:text-white'
                    }`}
                  >
                    {platform.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Instruction content */}
          <div ref={stepsContainerRef} className="space-y-6 mb-8 overflow-hidden">
            {currentPlatform?.steps.map((step, idx) => (
                  <div
                    key={`${selectedPlatform}-${idx}`}
                    className="instruction-step relative overflow-hidden rounded-[28px] bg-white/60 dark:bg-[rgba(255,255,255,0.01)] border border-black/[0.08] dark:border-white/[0.08] shadow-[inset_0_1px_0_rgba(0,0,0,0.03),0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_20px_rgba(0,0,0,0.1)]"
                    style={{ backdropFilter: 'blur(20px) saturate(140%)', WebkitBackdropFilter: 'blur(20px) saturate(140%)' }}
                  >
                    <div className="absolute inset-x-0 top-0 h-px pointer-events-none hidden dark:block" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)' }} />
                    <div className="absolute inset-x-0 top-0 h-px pointer-events-none block dark:hidden" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />
                    <div className="relative z-10 p-6 lg:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-lime flex items-center justify-center">
                          <span className="font-syncopate text-[11px] font-bold text-dark">{step.number}</span>
                        </div>
                        <h4 className="font-martian text-base font-semibold text-dark dark:text-white">{step.title}</h4>
                      </div>
                      <p className="font-montserrat text-sm text-gray-600 dark:text-gray-light leading-relaxed">
                        {step.description}
                      </p>
                      {step.action && <div className="mt-4">{step.action}</div>}
                      {step.media && (
                        <div className={`rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] mt-4 ${step.media.type === 'video' ? 'bg-black' : ''}`}>
                          {step.media.type === 'video' ? (
                            <video autoPlay loop muted playsInline controls className="w-full h-auto block">
                              <source src={step.media.src} type="video/mp4" />
                              Ваш браузер не поддерживает видео.
                            </video>
                          ) : (
                            <img src={step.media.src} alt={step.media.alt} className="w-full h-auto block" />
                          )}
                        </div>
                      )}
                      {step.extraDescription && (
                        <p className="font-montserrat text-sm text-gray-600 dark:text-gray-light leading-relaxed mt-4">
                          {step.extraDescription}
                        </p>
                      )}
                      {step.extraMedia && (
                        <div className={`rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] mt-4 ${step.extraMedia.type === 'video' ? 'bg-black' : ''}`}>
                          {step.extraMedia.type === 'video' ? (
                            <video autoPlay loop muted playsInline controls className="w-full h-auto block">
                              <source src={step.extraMedia.src} type="video/mp4" />
                              Ваш браузер не поддерживает видео.
                            </video>
                          ) : (
                            <img src={step.extraMedia.src} alt={step.extraMedia.alt} className="w-full h-auto block" />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
            ))}
          </div>

          {/* FAQ */}
          <div ref={faqContainerRef} className="mb-8">
            <h3 className="font-martian text-lg font-bold text-dark dark:text-white mb-5 tracking-tight">Частые вопросы</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="faq-item glass-card-light overflow-hidden transition-all duration-300 hover:border-lime/30"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-martian text-lg font-medium text-dark dark:text-white pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-lime flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      ref={(el) => { answerRefs.current[idx] = el; }}
                      className="overflow-hidden"
                      style={{ height: 0, opacity: 0 }}
                    >
                      <div className="font-montserrat text-gray-600 dark:text-gray-light text-sm px-6 pb-6 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Support */}
          <div className="text-center pt-8 border-t border-black/[0.08] dark:border-white/[0.08]">
            <p className="font-syncopate text-[11px] text-gray-500 dark:text-gray-light uppercase tracking-[0.15em] mb-5">Нужна помощь?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://t.me/RayLinkSupport"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-black/5 dark:bg-white/10 text-dark dark:text-white border border-transparent hover:border-lime hover:text-lime transition-all font-martian text-sm font-semibold w-full"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.44-.42-1.38-.88.03-.24.38-.49 1.03-.74 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.64-1.89 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.03.25z" />
                </svg>
                Написать в поддержку
              </a>
              <a
                href="https://t.me/raylink_news"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-light hover:border-gray-400 dark:hover:border-gray-500 hover:text-dark dark:hover:text-white transition-all font-martian text-sm font-semibold w-full"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
                </svg>
                Новостной канал
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructionsPage;
