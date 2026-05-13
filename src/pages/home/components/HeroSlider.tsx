import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface SlideData {
  image: string;
  badge: string;
  badgeColor: string;
  headline: string;
  highlightWord: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  ctaExternal?: boolean;
  cta2: string;
  cta2Link: string;
  cta2External?: boolean;
  trust1: string;
  trust2: string;
  trust3: string;
}

const ZALO = 'https://zalo.me/0358218547';

const slides: SlideData[] = [
  {
    image: 'https://readdy.ai/api/search-image?query=Professional%20Vietnamese%20HVAC%20technician%20in%20dark%20teal%20uniform%20kneeling%20beside%20large%20outdoor%20air%20conditioner%20unit%20on%20apartment%20balcony%20Nha%20Trang%20Vietnam%20dramatic%20lighting%20dark%20moody%20atmosphere%20tools%20equipment%20close%20up%20detail%20shot&width=1440&height=760&seq=slide_dark_1_v3&orientation=landscape',
    badge: '⚡ DỊCH VỤ 24/7 · NHA TRANG',
    badgeColor: '#0d9488',
    headline: 'Sửa Điều Hòa',
    highlightWord: 'Tận Nơi – Nhanh Chóng',
    subtitle: 'Kỹ thuật viên có mặt trong 30 phút. Báo giá miễn phí trước khi sửa. Bảo hành 3–12 tháng chính hãng.',
    cta: 'Đặt lịch ngay',
    ctaLink: '/dat-lich',
    cta2: '📞 0358 218 547',
    cta2Link: 'tel:0358218547',
    cta2External: true,
    trust1: '30 phút có mặt',
    trust2: 'Báo giá miễn phí',
    trust3: 'Bảo hành 3–12 tháng',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Close%20up%20air%20conditioner%20indoor%20unit%20being%20cleaned%20with%20high%20pressure%20water%20jet%20dramatic%20dark%20studio%20lighting%20professional%20technician%20in%20uniform%20spray%20foam%20wash%20filter%20evaporator%20coil%20vivid%20teal%20accent%20light%20Vietnam%20service&width=1440&height=760&seq=slide_dark_2_v3&orientation=landscape',
    badge: '🔧 ƯU ĐÃI THÁNG NÀY',
    badgeColor: '#b45309',
    headline: 'Bảo Dưỡng Điều Hòa',
    highlightWord: 'Chỉ 150.000đ',
    subtitle: 'Vệ sinh dàn lạnh + dàn nóng + kiểm tra gas + hệ thống điện. Máy mát hơn, tiết kiệm điện ngay 30%.',
    cta: '💬 Chat Zalo đặt lịch',
    ctaLink: ZALO,
    ctaExternal: true,
    cta2: '📞 Gọi ngay',
    cta2Link: 'tel:0358218547',
    cta2External: true,
    trust1: 'Vệ sinh toàn diện',
    trust2: 'Tiết kiệm điện 30%',
    trust3: 'Bảo hành 3 tháng',
  },
  {
    image: 'https://readdy.ai/api/search-image?query=Confident%20Vietnamese%20refrigeration%20repair%20team%20of%20three%20technicians%20in%20matching%20teal%20uniform%20standing%20together%20with%20professional%20tools%20dramatic%20dark%20background%20studio%20lighting%20professional%20corporate%20team%20photo%20Nha%20Trang&width=1440&height=760&seq=slide_dark_3_v3&orientation=landscape',
    badge: '🛡️ 10 NĂM KINH NGHIỆM',
    badgeColor: '#7c3aed',
    headline: 'Điện Lạnh Nha Trang',
    highlightWord: 'Uy Tín – Chuyên Nghiệp',
    subtitle: '15.000+ khách hàng tin tưởng. Sửa điều hòa, tủ lạnh, máy giặt, bình nóng lạnh mọi hãng.',
    cta: '💬 Tư vấn qua Zalo',
    ctaLink: ZALO,
    ctaExternal: true,
    cta2: 'Đặt lịch ngay',
    cta2Link: '/dat-lich',
    trust1: '15.000+ khách hàng',
    trust2: '50+ kỹ thuật viên',
    trust3: '98% hài lòng',
  },
];

function TrustBadge({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-white/90">
      <span className="w-4 h-4 flex items-center justify-center shrink-0">
        <i className={`${icon} text-teal-400 text-xs`} />
      </span>
      <span className="text-xs font-semibold whitespace-nowrap">{text}</span>
    </div>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTextKey((k) => k + 1);
    setTimeout(() => setAnimating(false), 600);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-950"
      style={{ height: 'clamp(480px, 68vw, 700px)' }}
    >
      {/* Background images (preloaded but only active one is visible) */}
      {slides.map((s, idx) => (
        <img
          key={idx}
          src={s.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            idx === current ? 'opacity-40' : 'opacity-0'
          }`}
          loading={idx === 0 ? 'eager' : 'lazy'}
          style={{ filter: 'contrast(1.05) saturate(0.8)' }}
        />
      ))}

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      {/* Teal accent glow — left side */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: 'linear-gradient(to bottom, #0d9488, #0f766e)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-16" style={{ maxWidth: 680 }}>
          <div
            key={textKey}
            className="slide-content"
            style={{ animation: 'slideIn 0.65s cubic-bezier(.22,1,.36,1) both' }}
          >
            {/* Badge */}
            <div className="mb-4">
              <span
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-white text-xs font-black rounded-full tracking-widest uppercase"
                style={{ background: slide.badgeColor, letterSpacing: '0.08em' }}
              >
                {slide.badge}
              </span>
            </div>

            {/* Headline */}
            <div className="mb-4">
              <h1
                className="text-white font-black leading-[1.1] block"
                style={{
                  fontSize: 'clamp(30px, 7vw, 58px)',
                  textShadow: '0 4px 24px rgba(0,0,0,0.8)',
                  letterSpacing: '-0.02em',
                }}
              >
                {slide.headline}
              </h1>
              <h2
                className="font-black leading-[1.1] block"
                style={{
                  fontSize: 'clamp(30px, 7vw, 58px)',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #5eead4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 2px 8px rgba(13,148,136,0.5))',
                }}
              >
                {slide.highlightWord}
              </h2>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(to right, #0d9488, transparent)' }} />
            </div>

            {/* Subtitle */}
            <p
              className="text-white/85 leading-relaxed mb-5"
              style={{ fontSize: 'clamp(13px, 2.2vw, 16px)', maxWidth: 480 }}
            >
              {slide.subtitle}
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-6">
              <TrustBadge icon="ri-check-double-line" text={slide.trust1} />
              <TrustBadge icon="ri-check-double-line" text={slide.trust2} />
              <TrustBadge icon="ri-check-double-line" text={slide.trust3} />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {slide.ctaExternal ? (
                <a
                  href={slide.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-black rounded-xl text-sm whitespace-nowrap transition-all hover:brightness-110 active:scale-95 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #1a8cff 0%, #0052cc 100%)', boxShadow: '0 4px 20px rgba(0,82,204,0.45)' }}
                >
                  {slide.cta}
                </a>
              ) : (
                <Link
                  to={slide.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-black rounded-xl text-sm whitespace-nowrap transition-all hover:brightness-110 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)', boxShadow: '0 4px 20px rgba(13,148,136,0.5)' }}
                >
                  <i className="ri-calendar-check-line w-4 h-4 flex items-center justify-center" />
                  {slide.cta}
                </Link>
              )}

              {slide.cta2External ? (
                <a
                  href={slide.cta2Link}
                  className="inline-flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm whitespace-nowrap transition-all hover:bg-white/25 active:scale-95 border border-white/30 text-white backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  {slide.cta2}
                </a>
              ) : (
                <Link
                  to={slide.cta2Link}
                  className="inline-flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-sm whitespace-nowrap transition-all hover:bg-white/25 active:scale-95 border border-white/30 text-white backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  {slide.cta2}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/15 active:scale-90 cursor-pointer backdrop-blur-sm"
        aria-label="Slide trước"
      >
        <i className="ri-arrow-left-s-line text-xl w-5 h-5 flex items-center justify-center" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/15 active:scale-90 cursor-pointer backdrop-blur-sm"
        aria-label="Slide tiếp"
      >
        <i className="ri-arrow-right-s-line text-xl w-5 h-5 flex items-center justify-center" />
      </button>

      {/* Slide counter + dots — bottom center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="transition-all duration-400 cursor-pointer rounded-full"
            style={{
              width: idx === current ? 32 : 8,
              height: 8,
              background: idx === current
                ? 'linear-gradient(90deg, #0d9488, #2dd4bf)'
                : 'rgba(255,255,255,0.35)',
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <div
          key={`${current}-progress`}
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #0d9488, #2dd4bf)',
            animation: 'heroProgress 6s linear forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes heroProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}