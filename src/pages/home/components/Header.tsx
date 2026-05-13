import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteConfigContext } from '@/contexts/SiteConfigContext';

function BrandLogo() {
  return (
    <a href="/" className="flex items-center shrink-0 gap-2 cursor-pointer">
      {/* Icon block */}
      <div
        className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
        style={{ background: 'linear-gradient(145deg, #0d9488 0%, #0f766e 55%, #115e59 100%)' }}
      >
        <span className="text-white select-none" style={{ fontSize: 22, lineHeight: 1 }}>❄</span>
      </div>
      {/* Text block */}
      <div className="flex flex-col leading-none gap-0.5">
        <span
          className="font-black text-teal-800 tracking-widest uppercase"
          style={{ fontSize: 13, letterSpacing: '0.12em' }}
        >
          Điện Lạnh
        </span>
        <span
          className="font-extrabold tracking-widest uppercase"
          style={{ fontSize: 10, letterSpacing: '0.22em', color: '#0d9488' }}
        >
          Nha Trang
        </span>
      </div>
    </a>
  );
}

export default function Header() {
  const { config } = useSiteConfigContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50 bg-white border-b border-gray-100">
      <div className="w-full mx-auto px-3 md:px-6 py-2.5 md:py-3 flex items-center justify-between gap-2">
        {/* Logo */}
        <BrandLogo />

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8">
          {(config.simpleNav ?? []).map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-sm text-gray-600 hover:text-teal-700 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + Auth buttons */}
        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          <a
            href="tel:0358218547"
            className="hidden sm:flex items-center gap-1.5 text-xs md:text-sm font-semibold text-teal-700 border border-teal-200 px-2 py-1.5 md:px-3 md:py-2 rounded-lg whitespace-nowrap transition-colors hover:bg-teal-50"
          >
            <i className="ri-phone-line w-4 h-4 flex items-center justify-center" />
            0358 218 547
          </a>
          <Link
            to="/dat-lich"
            className="text-xs md:text-sm font-bold text-white px-3 py-2 md:px-4 md:py-2 rounded-lg whitespace-nowrap transition-colors"
            style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' }}
          >
            Đặt lịch ngay
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
            aria-label="Toggle menu"
          >
            <i
              className={`${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-xl text-gray-700 w-5 h-5 flex items-center justify-center`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 z-40 shadow-sm">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {(config.simpleNav ?? []).map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0358218547"
              className="text-sm text-teal-700 font-semibold hover:bg-teal-50 px-3 py-2.5 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 mt-1 border-t border-gray-100 pt-3"
            >
              <i className="ri-phone-fill w-4 h-4 flex items-center justify-center text-teal-600" />
              Gọi ngay: 0358 218 547
            </a>
            <a
              href="https://zalo.me/0358218547"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white px-3 py-2.5 rounded-lg flex items-center gap-2 mt-1"
              style={{ background: 'linear-gradient(135deg, #1a8cff, #0068ff)' }}
            >
              <span className="font-black text-base leading-none">Z</span>
              Chat Zalo ngay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}