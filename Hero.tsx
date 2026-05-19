import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance animation
      gsap.fromTo(
        cardRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.6 }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.8 }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 1 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToPricing = () => {
    const target = document.querySelector('#pricing');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Blueprint grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(204,255,0,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'floatBlob 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(204,255,0,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animation: 'floatBlob 10s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)',
            filter: 'blur(50px)',
            animation: 'floatBlob 12s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative p-8 sm:p-12 lg:p-16 text-center rounded-[40px] overflow-hidden"
          style={{
            background: 'rgba(26, 26, 26, 0.25)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
            touchAction: 'pan-y',
          }}
        >
          {/* Liquid glass inner glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, rgba(204,255,0,0.08) 0%, transparent 60%)',
            }}
          />

          {/* Main Title */}
          <h1
            ref={titleRef}
            className="relative font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-wider"
          >
            RayLink
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="relative font-montserrat text-base sm:text-lg text-lime tracking-[0.2em] font-bold mb-6 uppercase"
          >
            Свобода в каждом клике
          </p>

          {/* Description */}
          <p
            ref={descRef}
            className="relative font-montserrat text-lg text-gray-light max-w-xl mx-auto mb-10"
          >
            Откройте для себя интернет без границ. Быстро, безопасно, свободно.
          </p>

          {/* CTA Button */}
          <button
            ref={buttonRef}
            onClick={scrollToPricing}
            className="relative btn-primary group"
          >
            <span>Начать бесплатно</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

      <style>{`
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
