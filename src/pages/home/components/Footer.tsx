import { Link } from 'react-router-dom';
import { useSiteConfigContext } from '@/contexts/SiteConfigContext';

export default function Footer() {
  const { config } = useSiteConfigContext();
  const f = config.footer;

  return (
    <footer className="w-full border-t border-gray-200" style={{ backgroundColor: config.footerStyle.bgColor }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {/* Logo + info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-3 md:mb-4">
              <img
                src={config.logo}
                alt="Logo"
                className="object-contain max-w-full"
                style={{ maxHeight: 44 }}
              />
            </a>
            <p className="text-xs text-gray-500 leading-relaxed">
              Dịch vụ sửa chữa điều hòa, điện lạnh tại nhà chuyên nghiệp. 10+ năm kinh nghiệm, 15.000+ khách hàng tin tưởng.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-4">Menu</h4>
            <ul className="space-y-1.5">
              {(config.simpleNav ?? []).slice(0, 4).map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-xs md:text-sm text-gray-600 hover:text-teal-700 transition-colors whitespace-nowrap">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/dat-lich" className="text-xs md:text-sm text-teal-700 font-medium hover:text-teal-800 transition-colors whitespace-nowrap">
                  Đặt lịch sửa chữa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-4">Liên hệ</h4>
            <ul className="space-y-1.5 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-phone-line text-teal-600 w-3 h-3 flex items-center justify-center" /></span>
                <span>{f.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-mail-line text-teal-600 w-3 h-3 flex items-center justify-center" /></span>
                <span>{f.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-4 h-4 flex items-center justify-center mt-0.5"><i className="ri-map-pin-line text-teal-600 w-3 h-3 flex items-center justify-center" /></span>
                <span>124 Lê Hồng Phong, Nam Nha Trang, Tỉnh Khánh Hòa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center"><i className="ri-time-line text-teal-600 w-3 h-3 flex items-center justify-center" /></span>
                <span>24/7 kể cả ngày lễ</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 md:mb-4">Mạng xã hội</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-100 transition-colors" aria-label="Facebook">
                <i className="ri-facebook-fill text-teal-700 w-4 h-4 flex items-center justify-center" />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-100 transition-colors" aria-label="Telegram">
                <i className="ri-telegram-fill text-teal-700 w-4 h-4 flex items-center justify-center" />
              </a>
              <a href="#" className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-100 transition-colors" aria-label="Zalo">
                <i className="ri-chat-1-fill text-teal-700 w-4 h-4 flex items-center justify-center" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}