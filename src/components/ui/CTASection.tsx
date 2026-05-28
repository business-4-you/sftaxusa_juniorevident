import { useI18n } from '../../i18n';
import { getWhatsAppUrl, trackEvent } from '../../data/config';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({ title, subtitle }: CTASectionProps) {
  const { t, lang } = useI18n();
  const whatsappUrl = getWhatsAppUrl(lang);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d3b5e 60%, #1a5276 100%)' }} />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c8a84b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a5276 0%, transparent 50%)' }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-display)' }}>
          {title || t.cta.title}
        </h2>
        <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle || t.cta.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'cta_section' })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
            style={{ background: '#25D366' }}
          >
            <MessageCircle size={20} />
            {t.cta.btn1}
          </a>
          <Link
            to={`/${lang}/contato`}
            onClick={() => trackEvent('schedule_click', { location: 'cta_section' })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <Calendar size={20} />
            {t.cta.btn2}
          </Link>
        </div>
      </div>
    </section>
  );
}
