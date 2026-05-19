import { useEffect, useState } from 'react';
import { ArrowLeft, Smartphone, Monitor, Laptop, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Platform = 'ios' | 'android' | 'windows' | 'macos';

interface PlatformData {
  id: Platform;
  name: string;
  icon: React.ElementType;
  appName: string;
  steps: string[];
}

const platformsData: PlatformData[] = [
  {
    id: 'ios',
    name: 'iOS',
    icon: Apple,
    appName: 'V2RayTun',
    steps: [
      'Скачайте приложение V2RayTun из App Store',
      'Напишите нашему боту в Telegram или ВКонтакте для получения конфигурационной ссылки',
      'Откройте полученную ссылку в приложении или скопируйте конфигурацию вручную',
      'Нажмите кнопку подключения в приложении',
    ],
  },
  {
    id: 'android',
    name: 'Android',
    icon: Smartphone,
    appName: 'v2rayNG',
    steps: [
      'Установите v2rayNG из Google Play или GitHub',
      'Напишите нашему боту в Telegram или ВКонтакте для получения конфигурационной ссылки',
      'Отсканируйте QR-код или импортируйте ссылку в приложении',
      'Выберите сервер и нажмите кнопку подключения',
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    icon: Monitor,
    appName: 'v2rayN / Hiddify',
    steps: [
      'Загрузите v2rayN или Hiddify с официального сайта',
      'Запустите установщик и следуйте инструкциям',
      'Напишите нашему боту в Telegram или ВКонтакте для получения конфигурационной ссылки',
      'Вставьте ссылку в приложение и нажмите подключение',
    ],
  },
  {
    id: 'macos',
    name: 'macOS',
    icon: Laptop,
    appName: 'V2RayXS / V2RayU',
    steps: [
      'Установите V2RayXS или V2RayU из GitHub',
      'Напишите нашему боту в Telegram или ВКонтакте для получения конфигурационной ссылки',
      'Вставьте ссылку в приложение через буфер обмена',
      'Выберите сервер и активируйте подключение',
    ],
  },
];

const InstructionsPage = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('ios');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate('/');
  };

  const currentPlatform = platformsData.find((p) => p.id === selectedPlatform);
  const PlatformIcon = currentPlatform?.icon || Apple;

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={goBack}
            className="flex items-center gap-2 text-gray-light hover:text-lime transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-montserrat text-sm">Назад</span>
          </button>
          <h1 className="font-montserrat text-lg font-bold text-white uppercase tracking-wide">Инструкция по подключению</h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-8 lg:p-12">
          {/* Platform Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {platformsData.map((platform) => {
              const Icon = platform.icon;
              return (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`glass-card-light p-5 flex flex-col items-center gap-2 transition-all duration-300 ${
                    selectedPlatform === platform.id
                      ? 'border-lime/50 bg-lime/5'
                      : 'hover:border-white/20'
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors ${
                      selectedPlatform === platform.id ? 'text-lime' : 'text-gray-light'
                    }`}
                  />
                  <span
                    className={`font-montserrat text-sm font-medium ${
                      selectedPlatform === platform.id ? 'text-white' : 'text-gray-light'
                    }`}
                  >
                    {platform.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Platform Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center border border-lime/30">
              <PlatformIcon className="w-6 h-6 text-lime" />
            </div>
            <div>
              <h2 className="font-montserrat text-xl font-bold text-white uppercase tracking-wide">
                {currentPlatform?.name}
              </h2>
              <p className="font-montserrat text-sm text-gray-light">
                Приложение: {currentPlatform?.appName}
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-10">
            <h3 className="font-montserrat text-lg font-bold text-white uppercase tracking-wide">
              Шаги настройки
            </h3>
            {currentPlatform?.steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start p-4 rounded-2xl bg-dark-card/50 border border-white/5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center">
                  <span className="font-montserrat font-bold text-lime text-sm">
                    {index + 1}
                  </span>
                </div>
                <p className="font-montserrat text-gray-300 text-sm leading-relaxed pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {/* Bot Links */}
          <div className="border-t border-white/10 pt-8 mb-8">
            <h3 className="font-montserrat text-lg font-bold text-white mb-4 uppercase tracking-wide">
              Получить конфигурацию
            </h3>
            <p className="font-montserrat text-gray-light text-sm mb-6">
              Напишите нашему боту для получения персональной конфигурации и начала тестового периода (72 часа)
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/raylink_service_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Telegram бот</span>
              </a>
              <a
                href="https://vk.com/raylinkvpn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-vk flex-1 justify-center"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.033-1.49-1.171-1.744-1.171-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.673 4 8.231c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.491-.085.744-.576.744z"/>
                </svg>
                <span>VK бот</span>
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-white/10 pt-8">
            <h3 className="font-montserrat text-lg font-bold text-white mb-6 uppercase tracking-wide">
              Частые вопросы
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-dark-card/50 border border-white/5">
                <h4 className="font-montserrat font-semibold text-white text-sm mb-2">
                  Что делать, если не подключается?
                </h4>
                <p className="font-montserrat text-gray-light text-sm leading-relaxed">
                  Проверьте правильность введенной конфигурации, убедитесь что приложение обновлено до последней версии, попробуйте перезагрузить устройство. Если проблема остаётся — обратитесь в поддержку.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-dark-card/50 border border-white/5">
                <h4 className="font-montserrat font-semibold text-white text-sm mb-2">
                  Можно ли использовать на нескольких устройствах?
                </h4>
                <p className="font-montserrat text-gray-light text-sm leading-relaxed">
                  Да, одна подписка позволяет подключить до 3 устройств одновременно.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-dark-card/50 border border-white/5">
                <h4 className="font-montserrat font-semibold text-white text-sm mb-2">
                  Как обновить конфигурацию?
                </h4>
                <p className="font-montserrat text-gray-light text-sm leading-relaxed">
                  Просто запросите новую конфигурацию у бота в Telegram или ВКонтакте и импортируйте её в приложение.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructionsPage;
