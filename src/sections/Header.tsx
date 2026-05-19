import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const anchorLinks = [
    { label: 'Преимущества', href: '#features' },
    { label: 'Тариф', href: '#pricing' },
    { label: 'Как работает', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-white/85 dark:bg-[rgba(10,10,10,0.85)] backdrop-blur-[20px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#hero" className="flex items-center gap-2 group" onClick={(e) => handleAnchorClick(e, '#hero')}>
              <span className="font-syncopate text-lg font-bold tracking-wider text-dark dark:text-white uppercase">
                RayLink
              </span>
            </a>

            <nav className="flex items-center gap-8">
              {anchorLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="relative font-montserrat text-sm text-gray-600 dark:text-gray-light hover:text-lime transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Link
                to="/instructions"
                className="relative font-montserrat text-sm text-gray-600 dark:text-gray-light hover:text-lime transition-colors duration-300 group"
              >
                Инструкция
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-lime transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://t.me/RayLinkSupport"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-2.5 px-5 text-sm font-martian"
              >
                Поддержка
              </a>
            </div>
          </div>
        </div>
      </header>

      <header
        className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white/95 dark:bg-[rgba(10,10,10,0.95)] backdrop-blur-[20px] pt-[env(safe-area-inset-top)]"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <a href="#hero" className="flex items-center gap-2" onClick={(e) => handleAnchorClick(e, '#hero')}>
              <span className="font-syncopate text-lg font-bold tracking-wider text-dark dark:text-white uppercase">
                RayLink
              </span>
            </a>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-10 h-10 flex items-center justify-center text-dark dark:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-gray-200/20 dark:border-white/5 bg-white/98 dark:bg-[rgba(10,10,10,0.98)] backdrop-blur-[20px]">
            <nav className="flex flex-col py-4 px-4">
              {anchorLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-montserrat text-gray-600 dark:text-gray-light hover:text-lime transition-colors duration-200 py-3"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/instructions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-montserrat text-gray-600 dark:text-gray-light hover:text-lime transition-colors duration-200 py-3"
              >
                Инструкция
              </Link>
              <a
                href="https://t.me/RayLinkSupport"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3 mt-4 text-center font-martian"
              >
                Поддержка
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
