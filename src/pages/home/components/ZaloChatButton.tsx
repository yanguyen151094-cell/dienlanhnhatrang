import { useState } from 'react';

const ZALO_PHONE = '0358218547';
const ZALO_URL = `https://zalo.me/${ZALO_PHONE}`;
const DISPLAY_PHONE = '0358 218 547';

export default function ZaloChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-2.5">

      {/* Popup card */}
      {open && (
        <div
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden w-56"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.14)' }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-2.5"
            style={{ background: 'linear-gradient(135deg, #1a8cff 0%, #0052cc 100%)' }}>
            {/* Real Zalo icon */}
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                alt="Zalo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <p className="text-white font-bold text-xs leading-tight">Điện Lạnh Nha Trang</p>
              <p className="text-blue-100 text-[10px] leading-tight">Trả lời trong vài phút</p>
            </div>
          </div>
          {/* Body */}
          <div className="px-4 py-3">
            <p className="text-gray-500 text-xs mb-3">Nhắn Zalo hoặc gọi ngay để được tư vấn miễn phí!</p>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white font-bold text-sm mb-2 transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1a8cff 0%, #0052cc 100%)' }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
                alt="Zalo"
                width={18}
                height={18}
                className="w-[18px] h-[18px] object-contain brightness-0 invert"
              />
              Chat Zalo ngay
            </a>
            <a
              href={`tel:${ZALO_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm border border-teal-200 text-teal-700 hover:bg-teal-50 transition-colors"
            >
              <i className="ri-phone-fill text-teal-600" />
              {DISPLAY_PHONE}
            </a>
          </div>
        </div>
      )}

      {/* Main Zalo button */}
      <button
        onClick={() => setOpen(!open)}
        className="relative flex items-center gap-0 rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-transform"
        style={{ boxShadow: '0 4px 20px rgba(0, 104, 255, 0.45)' }}
        aria-label="Chat Zalo"
      >
        {/* Pulse ring */}
        {!open && (
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: 'rgba(0, 104, 255, 0.25)' }}
          />
        )}
        {/* Button body - white bg to show real Zalo icon colors */}
        <div
          className="relative w-14 h-14 rounded-full flex items-center justify-center bg-white overflow-hidden"
          style={{ padding: 2 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
            alt="Zalo"
            width={52}
            height={52}
            className="w-full h-full object-contain select-none"
          />
        </div>
      </button>

      {/* Phone button */}
      <a
        href={`tel:${ZALO_PHONE}`}
        className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        style={{
          background: 'linear-gradient(145deg, #14b8a6 0%, #0d9488 60%, #0f766e 100%)',
          boxShadow: '0 4px 16px rgba(13, 148, 136, 0.4)',
        }}
        aria-label={`Gọi ${DISPLAY_PHONE}`}
      >
        <i className="ri-phone-fill text-white text-xl" />
      </a>
    </div>
  );
}