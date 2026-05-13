import { useState, useCallback } from 'react';
import { useSiteConfigContext } from '@/contexts/SiteConfigContext';

const ZALO_URL = 'https://zalo.me/0358218547';

interface InfoCardProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
  color?: string;
}

function InfoCard({ icon, label, value, href, color = 'bg-teal-50' }: InfoCardProps) {
  const content = (
    <div className={`flex items-start gap-3 p-3.5 rounded-xl ${color} hover:scale-[1.02] transition-transform cursor-pointer`}>
      <div className="w-10 h-10 flex items-center justify-center bg-teal-700 rounded-lg shrink-0">
        <i className={`${icon} text-white text-base w-5 h-5 flex items-center justify-center`} />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 font-medium mb-0.5">{label}</p>
        <p className="text-sm font-bold text-gray-800 leading-snug">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{content}</a>;
  return <>{content}</>;
}

export default function Contact() {
  const { config } = useSiteConfigContext();
  const { title, subtitle } = config.contact;
  const { contactStyle } = config;

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '', phone: '', device_type: '', note: '',
  });

  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget as HTMLFormElement;
    const fd = new FormData(form);
    const params = new URLSearchParams();
    fd.forEach((value, key) => { if (typeof value === 'string') params.append(key, value); });
    try {
      await fetch('https://readdy.ai/api/form/d7vuv0t3mj78tu7voc40', {
        method: 'POST', mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setSubmitted(true);
      setFormData({ full_name: '', phone: '', device_type: '', note: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Submit error:', err);
    } finally {
      setSubmitting(false);
    }
  }, []);

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all';

  return (
    <section
      id="lien-he"
      className="w-full"
      style={{
        paddingTop: contactStyle.paddingTop,
        paddingBottom: contactStyle.paddingBottom,
        backgroundColor: contactStyle.bgColor,
      }}
    >
      {/* Section header */}
      <div className="mx-auto px-4 md:px-6 text-center mb-10" style={{ maxWidth: contactStyle.maxWidth }}>
        <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest rounded-full mb-3">
          {subtitle}
        </span>
        <h2
          className="font-black text-gray-900 mb-3"
          style={{ fontSize: contactStyle.titleSize }}
        >
          {title}
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto text-base">
          Liên hệ ngay để được kỹ thuật viên có mặt trong <strong className="text-teal-700">30 phút</strong>. Báo giá miễn phí trước khi sửa.
        </p>
      </div>

      <div className="mx-auto px-4 md:px-6" style={{ maxWidth: contactStyle.maxWidth }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT: Contact form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg">
                <i className="ri-calendar-check-line text-teal-700 w-4 h-4 flex items-center justify-center" />
              </span>
              Đặt lịch ngay hôm nay
            </h3>
            <form
              id="lien-he-dien-lanh"
              data-readdy-form
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Họ và tên *</label>
                <input
                  type="text" name="full_name" placeholder="Nguyễn Văn A"
                  value={formData.full_name} onChange={handleChange}
                  required className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Số điện thoại *</label>
                <input
                  type="tel" name="phone" placeholder="0358 218 547"
                  value={formData.phone} onChange={handleChange}
                  required className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Loại thiết bị *</label>
                <select
                  name="device_type"
                  value={formData.device_type} onChange={handleChange}
                  required className={inputClass}
                >
                  <option value="">-- Chọn thiết bị --</option>
                  <option value="Điều hòa">Điều hòa</option>
                  <option value="Tủ lạnh">Tủ lạnh</option>
                  <option value="Máy giặt">Máy giặt</option>
                  <option value="Bình nóng lạnh">Bình nóng lạnh</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mô tả lỗi / Yêu cầu</label>
                <textarea
                  name="note" placeholder="VD: Điều hòa không mát, chảy nước..."
                  value={formData.note} onChange={handleChange}
                  maxLength={500} rows={3}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit" disabled={submitting}
                className="w-full py-3.5 rounded-xl font-bold text-white text-base transition-all whitespace-nowrap cursor-pointer disabled:opacity-50 hover:opacity-90 active:scale-[0.99]"
                style={{ background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)' }}
              >
                {submitting ? (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center" />
                    Đang gửi...
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 justify-center">
                    <i className="ri-send-plane-fill w-4 h-4 flex items-center justify-center" />
                    GỬI YÊU CẦU NGAY
                  </span>
                )}
              </button>

              {/* Zalo quick button */}
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 font-bold text-sm transition-all hover:opacity-90 whitespace-nowrap"
                style={{ borderColor: '#0068ff', color: '#0068ff' }}
              >
                <span className="font-black text-base leading-none">Z</span>
                Hoặc chat Zalo ngay: 0358 218 547
              </a>

              {submitted && (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 text-sm text-teal-700 text-center font-medium">
                  ✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ trong 15 phút.
                </div>
              )}
            </form>
          </div>

          {/* RIGHT: Info cards + Google Maps */}
          <div className="flex flex-col gap-4">
            {/* Info cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoCard
                icon="ri-phone-fill"
                label="Hotline 24/7"
                value="0358 218 547"
                href="tel:0358218547"
              />
              <InfoCard
                icon="ri-chat-1-fill"
                label="Chat Zalo"
                value="0358 218 547"
                href={ZALO_URL}
                color="bg-blue-50"
              />
              <InfoCard
                icon="ri-map-pin-fill"
                label="Địa chỉ cửa hàng"
                value="124 Lê Hồng Phong, Nam Nha Trang, Khánh Hòa"
              />
              <InfoCard
                icon="ri-time-fill"
                label="Giờ phục vụ"
                value="24/7 kể cả ngày lễ Tết"
                color="bg-amber-50"
              />
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex-1" style={{ minHeight: 280 }}>
              <iframe
                title="Bản đồ Điện Lạnh Nha Trang - 124 Lê Hồng Phong"
                src="https://maps.google.com/maps?q=124+Le+Hong+Phong,+Nha+Trang,+Khanh+Hoa,+Vietnam&output=embed&z=16&hl=vi"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 260 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direction link */}
            <a
              href="https://maps.google.com/?q=124+Le+Hong+Phong,+Nha+Trang,+Khanh+Hoa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-teal-200 text-teal-700 font-semibold text-sm hover:bg-teal-50 transition-colors whitespace-nowrap"
            >
              <i className="ri-navigation-fill w-4 h-4 flex items-center justify-center" />
              Xem đường đi trên Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}