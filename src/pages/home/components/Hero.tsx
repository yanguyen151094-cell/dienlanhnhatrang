import { useSiteConfigContext } from '@/contexts/SiteConfigContext';

export default function Hero() {
  const { config } = useSiteConfigContext();
  const { hero } = config;
  const { heroStyle } = config;

  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden"
      style={{
        paddingTop: heroStyle.paddingTop,
        paddingBottom: heroStyle.paddingBottom,
        backgroundColor: '#f0fdfa',
      }}
    >
      <div className="mx-auto px-4 md:px-6" style={{ maxWidth: heroStyle.maxWidth }}>
        <div className="flex flex-col md:flex-row items-center" style={{ gap: heroStyle.gap }}>
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full text-xs font-medium mb-4 md:mb-6">
              <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center" />
              Bảo hành dài hạn - Giá cả minh bạch
            </div>
            <h1
              className="font-bold text-gray-900 leading-tight mb-4 md:mb-6"
              style={{ fontSize: heroStyle.titleSize }}
            >
              {hero.title}
            </h1>
            <p
              className="text-gray-600 leading-relaxed mb-6 md:mb-8"
              style={{ fontSize: heroStyle.subtitleSize }}
            >
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="/dat-lich"
                className="w-full sm:w-auto px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-md font-medium transition-colors whitespace-nowrap text-center"
              >
                <span className="inline-flex items-center gap-2">
                  <i className="ri-calendar-check-line w-4 h-4 flex items-center justify-center" />
                  {hero.buttonText}
                </span>
              </a>
              <a
                href="tel:0358218547"
                className="w-full sm:w-auto px-6 py-3 bg-white border border-teal-200 text-teal-700 hover:bg-teal-50 rounded-md font-medium transition-colors whitespace-nowrap text-center"
              >
                <span className="inline-flex items-center gap-2">
                  <i className="ri-phone-line w-4 h-4 flex items-center justify-center" />
                  0358 218 547
                </span>
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <i className="ri-time-line text-teal-600 w-4 h-4 flex items-center justify-center" />
                <span>Phục vụ 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <i className="ri-tools-line text-teal-600 w-4 h-4 flex items-center justify-center" />
                <span>50+ Kỹ thuật viên</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <i className="ri-shield-star-line text-teal-600 w-4 h-4 flex items-center justify-center" />
                <span>Bảo hành 3-12 tháng</span>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex-1 flex justify-center">
            <img
              src={hero.phoneImage}
              alt="Kỹ thuật viên sửa chữa"
              width={500}
              height={500}
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}