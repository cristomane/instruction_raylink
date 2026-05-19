import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, delay }: FAQItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  useEffect(() => {
    if (answerRef.current) {
      if (isOpen) {
        gsap.to(answerRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(answerRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={itemRef}
      className="glass-card-light overflow-hidden transition-all duration-300 hover:border-lime/30"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-montserrat text-lg font-medium text-white pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-lime flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={answerRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="font-montserrat text-gray-light text-sm px-6 pb-6 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Как начать пользоваться RayLink?',
      answer: 'Просто перейдите в нашего бота в Telegram (@raylink_service_bot) или ВКонтакте (vk.com/raylinkvpn), нажмите "Start" и следуйте инструкциям. Тестовый период 72 часа активируется автоматически.',
    },
    {
      question: 'Сколько устройств можно подключить?',
      answer: 'Одна подписка позволяет подключить до 3 устройств одновременно. Вы можете использовать VPN на телефоне, ноутбуке и планшете.',
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату банковскими картами (Visa, Mastercard, МИР) и через СБП (Систему быстрых платежей).',
    },
    {
      question: 'Будет ли работать на iPhone?',
      answer: 'Да, RayLink работает на всех платформах: iOS, Android, Windows, macOS и Linux. Мы предоставляем подробные инструкции для каждой платформы.',
    },
    {
      question: 'Что такое тестовый период 72 часа?',
      answer: 'Это бесплатный доступ к полному функционалу VPN на 72 часа. Вы можете протестировать скорость и стабильность перед покупкой подписки.',
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Наша поддержка доступна 24/7 в Telegram чате @RayLinkSupport. Обычно отвечаем в течение часа.',
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
          duration: 0.9,
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

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 lg:py-32"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="font-montserrat text-3xl lg:text-4xl font-bold text-center text-white mb-16 lg:mb-20 uppercase tracking-wide"
        >
          Частые вопросы
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;