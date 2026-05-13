import { useSiteConfigContext } from '@/contexts/SiteConfigContext';

export default function Stats() {
  const { config } = useSiteConfigContext();
  const { items } = config.stats;
  const { statsStyle } = config;

  return (
    <section
      id="bang-gia"
      className="w-full"
      style={{
        paddingTop: statsStyle.paddingTop,
        paddingBottom: statsStyle.paddingBottom,
        backgroundColor: statsStyle.bgColor,
      }}
    >
      <div className="mx-auto px-4 md:px-6" style={{ maxWidth: statsStyle.maxWidth }}>
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: statsStyle.gap }}
        >
          {items.map((stat, idx) => (
            <div key={idx} className="text-center text-white py-2 md:py-0">
              <div
                className="font-black mb-1.5 leading-none"
                style={{ fontSize: statsStyle.titleSize, textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              >
                {stat.value}
              </div>
              <div className="w-10 h-0.5 bg-white/30 mx-auto mb-2" />
              <div
                className="uppercase tracking-widest opacity-85 font-semibold"
                style={{ fontSize: statsStyle.labelSize }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}