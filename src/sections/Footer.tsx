import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showIP, setShowIP] = useState(false);
  const [showSpeed, setShowSpeed] = useState(false);
  const [ipData, setIpData] = useState<any>(null);
  const [ipLoading, setIpLoading] = useState(false);



  const getCountryName = (code: string) => {
    try {
      return new Intl.DisplayNames(['ru'], { type: 'region' }).of(code);
    } catch {
      return code;
    }
  };

  const fetchIP = async () => {
    setIpLoading(true);

    const fetchers = [
      async () => {
        const res = await fetch('https://ipinfo.io/json');
        const data = await res.json();
        return {
          ip: data.ip,
          country_name: getCountryName(data.country),
          city: data.city,
          org: data.org,
        };
      },
      async () => {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        const ipJson = await ipRes.json();
        const geoRes = await fetch(`https://ipapi.co/${ipJson.ip}/json/`);
        const geoJson = await geoRes.json();
        return {
          ip: ipJson.ip,
          country_name: geoJson.country_name,
          city: geoJson.city,
          org: geoJson.org,
        };
      },
      async () => {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        return {
          ip: data.ip,
          country_name: data.country_name,
          city: data.city,
          org: data.org,
        };
      },
    ];

    for (const fetcher of fetchers) {
      try {
        const data = await fetcher();
        if (data.ip) {
          setIpData(data);
          setIpLoading(false);
          return;
        }
      } catch {
        // try next fallback
      }
    }

    setIpData({ error: true });
    setIpLoading(false);
  };

  const vpnLinks = [
    { label: 'Мой IP адрес', action: () => { setShowIP(true); fetchIP(); } },
    { label: 'Тест скорости', action: () => setShowSpeed(true) },
    { label: 'Инструкция', href: '/instructions' },
  ];

  const infoLinks = [
    { label: 'Публичная оферта', href: '/offer' },
    { label: 'Политика конфиденциальности', href: '/privacy' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const socialLinks = [
    { label: 'Telegram бот', href: 'https://t.me/raylink_service_bot' },
    { label: 'VK бот', href: 'https://vk.com/raylinkvpn' },
    { label: 'Поддержка', href: 'https://t.me/RayLinkSupport' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative pt-16 lg:pt-24 pb-8"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

      <div ref={contentRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-4">
            <span className="font-syncopate text-2xl font-bold text-dark dark:text-white tracking-wider uppercase block mb-4">
              RayLink
            </span>
            <p className="font-montserrat text-gray-500 dark:text-gray-light text-sm mb-6 max-w-xs">
              Быстрый VPN на протоколе VLESS. Безопасный доступ к интернету без ограничений.
            </p>
            <a
              href="https://t.me/RayLinkSupport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-lime/30 text-lime hover:bg-lime/10 transition-colors font-montserrat text-sm"
            >
              <Mail className="w-4 h-4" />
              Напишите нам
            </a>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-martian text-sm font-semibold text-dark dark:text-white mb-4">О VPN</h4>
              <ul className="space-y-3">
                {vpnLinks.map((link, idx) => (
                  <li key={idx}>
                    {'action' in link ? (
                      <button
                        onClick={link.action}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-light hover:text-lime transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-lime transition-colors" />
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href as string}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-light hover:text-lime transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-lime transition-colors" />
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-martian text-sm font-semibold text-dark dark:text-white mb-4">Информация</h4>
              <ul className="space-y-3">
                {infoLinks.map((link, idx) => (
                  <li key={idx}>
                    {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                      <Link
                        to={link.href as string}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-light hover:text-lime transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-lime transition-colors" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href as string}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-light hover:text-lime transition-colors group"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-lime transition-colors" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-martian text-sm font-semibold text-dark dark:text-white mb-4">Связь</h4>
              <ul className="space-y-3">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-light hover:text-lime transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-lime transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 dark:border-white/5 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-montserrat text-xs text-gray-500 dark:text-gray-light">
              © 2026 RayLink. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/offer" 
                className="font-montserrat text-xs text-gray-500 dark:text-gray-light hover:text-lime transition-colors duration-300"
              >
                Публичная оферта
              </Link>
              <Link 
                to="/privacy" 
                className="font-montserrat text-xs text-gray-500 dark:text-gray-light hover:text-lime transition-colors duration-300"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showIP && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowIP(false)}
        >
          <div
            className="glass-card w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowIP(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-dark hover:bg-black/10 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
            <h3 className="font-syncopate text-xl font-bold mb-6 uppercase tracking-wide text-dark dark:text-white">
              Мой IP адрес
            </h3>
            {ipLoading ? (
              <p className="font-montserrat text-sm text-gray-500 dark:text-gray-400">Загрузка...</p>
            ) : ipData?.error ? (
              <p className="font-montserrat text-sm text-red-500 dark:text-red-400">Не удалось получить данные</p>
            ) : (
              <div className="space-y-3 font-montserrat text-sm">
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-gray-500 dark:text-gray-400">IP адрес</span>
                  <span className="text-lime font-bold">{ipData?.ip}</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-gray-500 dark:text-gray-400">Страна</span>
                  <span className="text-dark dark:text-white">{ipData?.country_name}</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="text-gray-500 dark:text-gray-400">Город</span>
                  <span className="text-dark dark:text-white">{ipData?.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">Провайдер</span>
                  <span className="text-dark dark:text-white text-right max-w-[60%]">{ipData?.org}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showSpeed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowSpeed(false)}
        >
          <div
            className="glass-card w-full max-w-2xl p-4 relative h-[540px] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSpeed(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:text-dark hover:bg-black/10 dark:hover:text-white dark:hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
            <h3 className="font-syncopate text-xl font-bold mb-4 uppercase tracking-wide px-2 text-dark dark:text-white">
              Тест скорости
            </h3>
            <iframe
              src="https://openspeedtest.com/speedtest?Run=5"
              className="w-full flex-1 rounded-xl border-0"
              allow="fullscreen"
              title="Тест скорости интернета"
            />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
