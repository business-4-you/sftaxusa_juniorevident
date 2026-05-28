import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n';
import { trackEvent } from '../data/config';
import CTASection from '../components/ui/CTASection';

export default function ServicesPage() {
  const { t, lang } = useI18n();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d3b5e 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            {t.services.title}
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {t.services.list.map((s) => (
              <Link
                key={s.slug}
                to={`/${lang}/servicos/${s.slug}`}
                onClick={() => trackEvent('service_click', { service: s.slug, location: 'services_page' })}
                className="group p-7 rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1 flex flex-col"
                style={{ border: '1.5px solid #eef2f7', background: 'white' }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: 'linear-gradient(135deg, #f0f4f8, #e8edf5)' }}>
                  {s.icon}
                </div>
                <h2 className="font-bold text-gray-800 mb-2 text-base leading-snug group-hover:text-blue-900 transition-colors flex-1"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {s.name}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold mt-auto" style={{ color: '#c8a84b' }}>
                  {t.services.cta} <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
