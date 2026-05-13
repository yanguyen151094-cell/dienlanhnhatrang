import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSiteConfigContext } from '@/contexts/SiteConfigContext';

export default function BookingPage() {
  const { config } = useSiteConfigContext();
  const c = config.authRegister;

  const [address, setAddress] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [issueDesc, setIssueDesc] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [desiredDate, setDesiredDate] = useState('');
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(true);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone || !fullName || !address || !deviceType) return;
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === 'string') params.append(key, value);
    });

    try {
      await fetch('https://readdy.ai/api/form/d7vuv0t3mj78tu7voc3g', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      setStatus('success');
      setAddress('');
      setDeviceType('');
      setIssueDesc('');
      setPhone('');
      setFullName('');
      setDesiredDate('');
      form.reset();
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: c.bgColor }}>
      {/* Toolbar 1 */}
      <div className="w-full py-2 text-center text-xs font-medium tracking-wide" style={{ backgroundColor: c.accentColor, color: '#ffffff' }}>
        <div className="flex items-center justify-center gap-2 px-4">
          <span className="w-4 h-4 flex items-center justify-center">
            <i className="ri-tools-line w-4 h-4 flex items-center justify-center" />
          </span>
          <span className="whitespace-nowrap">{c.toolbar1}</span>
        </div>
      </div>

      {/* Toolbar 2 */}
      <div className="w-full py-2 text-center text-xs font-medium tracking-wide" style={{ backgroundColor: '#0a192f', color: '#ffffff' }}>
        <div className="flex items-center justify-center gap-2 px-4">
          <span className="w-4 h-4 flex items-center justify-center">
            <i className="ri-snowflake-line w-4 h-4 flex items-center justify-center text-teal-400" />
          </span>
          <span className="whitespace-nowrap">{c.toolbar2}</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-start justify-center px-3 md:px-4 py-4 md:py-8">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="rounded-lg border overflow-hidden" style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}>
            {/* Header */}
            <div className="px-3 md:px-4 py-3 border-b flex items-center justify-center relative" style={{ borderColor: c.borderColor }}>
              <h1 className="text-sm md:text-base font-bold tracking-wider" style={{ color: c.accentColor }}>
                {c.title}
              </h1>
              <button
                type="button"
                className="absolute right-3 w-7 h-7 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <i className="ri-close-line text-xl w-5 h-5 flex items-center justify-center" />
              </button>
            </div>

            <form id="dat-lich-sua-chua" data-readdy-form onSubmit={handleSubmit} className="p-3 md:p-4 space-y-2.5 md:space-y-3">
              {/* Họ tên */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <label className="text-sm text-gray-700 md:w-24 md:flex-shrink-0 md:text-right">Họ tên</label>
                <input
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nguyễn Văn A"
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-sm border focus:outline-none"
                  style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}
                />
              </div>

              {/* SĐT */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <label className="text-sm text-gray-700 md:w-24 md:flex-shrink-0 md:text-right">{c.phoneLabel}</label>
                <input
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0909 123 456"
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-sm border focus:outline-none"
                  style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}
                />
              </div>

              {/* Địa chỉ */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <label className="text-sm text-gray-700 md:w-24 md:flex-shrink-0 md:text-right">{c.referralCodeLabel}</label>
                <input
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={c.referralCodePlaceholder}
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-sm border focus:outline-none"
                  style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}
                />
              </div>

              {/* Loại thiết bị */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <label className="text-sm text-gray-700 md:w-24 md:flex-shrink-0 md:text-right">{c.accountLabel}</label>
                <select
                  name="deviceType"
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value)}
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-sm border focus:outline-none"
                  style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}
                >
                  <option value="">Chọn loại thiết bị</option>
                  <option value="dieu-hoa">Điều hòa</option>
                  <option value="tu-lanh">Tủ lạnh</option>
                  <option value="may-giat">Máy giặt</option>
                  <option value="binh-nong-lanh">Bình nóng lạnh</option>
                  <option value="khac">Thiết bị khác</option>
                </select>
              </div>

              {/* Mô tả lỗi */}
              <div className="flex flex-col md:flex-row md:items-start gap-1 md:gap-3">
                <label className="text-sm text-gray-700 md:w-24 md:flex-shrink-0 md:text-right md:pt-2">{c.nicknameLabel}</label>
                <textarea
                  name="issueDesc"
                  value={issueDesc}
                  onChange={(e) => setIssueDesc(e.target.value)}
                  placeholder={c.nicknamePlaceholder}
                  maxLength={500}
                  rows={3}
                  className="flex-1 px-3 py-2 text-sm rounded-sm border focus:outline-none resize-none"
                  style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}
                />
              </div>

              {/* Ngày mong muốn */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                <label className="text-sm text-gray-700 md:w-24 md:flex-shrink-0 md:text-right">{c.passwordLabel}</label>
                <input
                  name="desiredDate"
                  type="date"
                  value={desiredDate}
                  onChange={(e) => setDesiredDate(e.target.value)}
                  placeholder={c.passwordPlaceholder}
                  className="flex-1 px-3 py-2 text-sm rounded-sm border focus:outline-none"
                  style={{ backgroundColor: c.cardBg, borderColor: c.borderColor }}
                />
              </div>

              <hr className="my-1" style={{ borderColor: c.borderColor }} />

              {/* Checkbox 1 */}
              <div className="flex items-start gap-2">
                <button
                  type="button"
                  onClick={() => setCheckbox1(!checkbox1)}
                  className="w-5 h-5 flex-shrink-0 flex items-center justify-center border rounded-sm mt-0.5 cursor-pointer"
                  style={{
                    borderColor: c.accentColor,
                    backgroundColor: checkbox1 ? c.accentColor : '#fff',
                  }}
                >
                  {checkbox1 && <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center" />}
                </button>
                <span className="text-xs md:text-sm text-gray-700 leading-relaxed">{c.checkbox1Label}</span>
              </div>

              {/* Checkbox 2 */}
              <div className="flex items-start gap-2">
                <button
                  type="button"
                  onClick={() => setCheckbox2(!checkbox2)}
                  className="w-5 h-5 flex-shrink-0 flex items-center justify-center border rounded-sm mt-0.5 cursor-pointer"
                  style={{
                    borderColor: c.accentColor,
                    backgroundColor: checkbox2 ? c.accentColor : '#fff',
                  }}
                >
                  {checkbox2 && <i className="ri-check-line text-white w-4 h-4 flex items-center justify-center" />}
                </button>
                <span className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {c.checkbox2Label}{' '}
                  <a href={c.termsUrl} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: c.accentColor }}>
                    {c.termsLinkText}
                  </a>
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full text-white text-sm font-medium py-3 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                style={{ backgroundColor: c.accentColor }}
              >
                {status === 'submitting' ? (
                  <span className="inline-flex items-center gap-2">
                    <i className="ri-loader-4-line animate-spin w-4 h-4 flex items-center justify-center" />
                    Đang gửi...
                  </span>
                ) : (
                  c.confirmButtonText
                )}
              </button>
            </form>

            {status === 'success' && (
              <div className="mx-3 md:mx-4 mb-3 md:mb-4 p-3 bg-green-50 border border-green-200 rounded-sm text-sm text-green-700 flex items-start gap-2">
                <i className="ri-checkbox-circle-line mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                {c.successMessage}
              </div>
            )}

            {status === 'error' && (
              <div className="mx-3 md:mx-4 mb-3 md:mb-4 p-3 bg-red-50 border border-red-200 rounded-sm text-sm text-red-700 flex items-start gap-2">
                <i className="ri-error-warning-line mt-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0" />
                {c.errorMessage}
              </div>
            )}

            {/* Hotline */}
            <div className="mx-3 md:mx-4 mb-3 md:mb-4 p-3 bg-teal-50 border border-teal-200 rounded-sm text-sm text-teal-700 text-center">
              <p className="font-medium">Hoặc gọi hotline để đặt lịch nhanh:</p>
              <a href="tel:0909123456" className="text-lg font-bold mt-1 inline-flex items-center gap-2" style={{ color: c.accentColor }}>
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center" />
                0909 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}