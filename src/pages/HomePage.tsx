import { Link } from 'react-router-dom';
import { ArrowRight, Globe, CheckCircle, Star } from 'lucide-react';
import { useI18n } from '../i18n';
import { getWhatsAppUrl, trackEvent } from '../data/config';
import CTASection from '../components/ui/CTASection';
import FAQAccordion from '../components/ui/FAQAccordion';

// Geometric SVG placeholder hero image
function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-lg mx-auto">
      <rect width="560" height="480" rx="24" fill="#f0f4f8"/>
      {/* Building */}
      <rect x="80" y="180" width="120" height="260" rx="8" fill="#0d3b5e"/>
      <rect x="90" y="200" width="30" height="30" rx="4" fill="#c8a84b" opacity="0.8"/>
      <rect x="130" y="200" width="30" height="30" rx="4" fill="#c8a84b" opacity="0.6"/>
      <rect x="170" y="200" width="20" height="30" rx="4" fill="#c8a84b" opacity="0.5"/>
      <rect x="90" y="245" width="30" height="30" rx="4" fill="white" opacity="0.3"/>
      <rect x="130" y="245" width="30" height="30" rx="4" fill="white" opacity="0.3"/>
      <rect x="170" y="245" width="20" height="30" rx="4" fill="white" opacity="0.3"/>
      <rect x="90" y="290" width="30" height="30" rx="4" fill="white" opacity="0.3"/>
      <rect x="130" y="290" width="30" height="30" rx="4" fill="white" opacity="0.3"/>
      <rect x="170" y="290" width="20" height="30" rx="4" fill="white" opacity="0.3"/>
      <rect x="90" y="335" width="100" height="25" rx="4" fill="#c8a84b" opacity="0.5"/>
      {/* Tall Building */}
      <rect x="230" y="100" width="140" height="340" rx="8" fill="#0a1628"/>
      <rect x="248" y="120" width="35" height="35" rx="4" fill="#c8a84b" opacity="0.7"/>
      <rect x="295" y="120" width="35" height="35" rx="4" fill="#c8a84b" opacity="0.5"/>
      <rect x="248" y="168" width="35" height="35" rx="4" fill="white" opacity="0.2"/>
      <rect x="295" y="168" width="35" height="35" rx="4" fill="white" opacity="0.2"/>
      <rect x="248" y="216" width="35" height="35" rx="4" fill="white" opacity="0.2"/>
      <rect x="295" y="216" width="35" height="35" rx="4" fill="white" opacity="0.2"/>
      <rect x="248" y="264" width="35" height="35" rx="4" fill="white" opacity="0.2"/>
      <rect x="295" y="264" width="35" height="35" rx="4" fill="white" opacity="0.2"/>
      <rect x="248" y="312" width="35" height="35" rx="4" fill="#c8a84b" opacity="0.4"/>
      <rect x="295" y="312" width="35" height="35" rx="4" fill="#c8a84b" opacity="0.4"/>
      {/* Small building */}
      <rect x="400" y="220" width="100" height="220" rx="8" fill="#1a5276"/>
      <rect x="415" y="238" width="25" height="25" rx="3" fill="white" opacity="0.3"/>
      <rect x="450" y="238" width="25" height="25" rx="3" fill="white" opacity="0.3"/>
      <rect x="415" y="275" width="25" height="25" rx="3" fill="#c8a84b" opacity="0.6"/>
      <rect x="450" y="275" width="25" height="25" rx="3" fill="#c8a84b" opacity="0.4"/>
      <rect x="415" y="312" width="25" height="25" rx="3" fill="white" opacity="0.3"/>
      <rect x="450" y="312" width="25" height="25" rx="3" fill="white" opacity="0.3"/>
      {/* Ground */}
      <rect x="60" y="437" width="440" height="6" rx="3" fill="#0d3b5e" opacity="0.3"/>
      {/* Dollar sign accent */}
      <circle cx="460" cy="100" r="40" fill="#c8a84b" opacity="0.15"/>
      <text x="447" y="108" fill="#c8a84b" fontSize="28" fontWeight="bold" fontFamily="Georgia">$</text>
      {/* Flag */}
      <rect x="300" y="60" width="4" height="50" fill="#0a1628"/>
      <rect x="304" y="60" width="30" height="20" fill="#c8a84b"/>
      {/* Stars on flag */}
      <text x="308" y="76" fill="white" fontSize="10">★</text>
      {/* Chart line */}
      <polyline points="60,380 120,340 190,350 260,300 340,270 420,240 500,190" stroke="#c8a84b" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <circle cx="500" cy="190" r="6" fill="#c8a84b"/>
    </svg>
  );
}

function ServiceIllustration({ icon }: { icon: string }) {
  return (
    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
      style={{ background: 'linear-gradient(135deg, #f0f4f8, #e8edf5)' }}>
      {icon}
    </div>
  );
}

export default function HomePage() {
  const { t, lang } = useI18n();
  const whatsappUrl = getWhatsAppUrl(lang);

  const featuredServices = t.services.list.slice(0, 6);
  const faqItems = t.faq.items.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20"
        style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 40%, #e5ecf5 100%)' }}>
        {/* Decorative shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: 'radial-gradient(circle, #0d3b5e, transparent)' }} />
        <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #c8a84b, transparent)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                style={{ background: 'rgba(200,168,75,0.12)', color: '#8a6d1e', border: '1px solid rgba(200,168,75,0.25)' }}>
                <Star size={12} fill="currentColor" />
                {t.hero.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>
                {t.hero.headline}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                {t.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'hero' })}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-semibold text-white transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{ background: '#25D366' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.hero.cta1}
                </a>
                <Link
                  to={`/${lang}/servicos`}
                  onClick={() => trackEvent('services_click', { location: 'hero' })}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold transition-all hover:-translate-y-1"
                  style={{ background: 'white', color: '#0a1628', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  {t.hero.cta2}
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Globe size={15} style={{ color: '#c8a84b' }} />
                {t.hero.trustBadge}
              </div>
            </div>

            {/* Illustration */}
            <div className="animate-fadeInUp delay-200 hidden lg:block">
              <HeroIllustration />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl animate-fadeInUp"
                style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: '#0d3b5e' }}>{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pains */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>
              {t.pains.title}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t.pains.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.pains.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white transition-shadow hover:shadow-lg"
                style={{ border: '1px solid #eef2f7' }}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>
              {t.services.title}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((s, i) => (
              <Link
                key={s.slug}
                to={`/${lang}/servicos/${s.slug}`}
                onClick={() => trackEvent('service_click', { service: s.slug, location: 'home_services' })}
                className="group p-7 rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                style={{ border: '1.5px solid #eef2f7', background: 'white', animationDelay: `${i * 0.05}s` }}
              >
                <ServiceIllustration icon={s.icon} />
                <h3 className="font-bold text-gray-800 mt-5 mb-2 text-lg group-hover:text-blue-900 transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {s.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#c8a84b' }}>
                  {t.services.cta} <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to={`/${lang}/servicos`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all hover:-translate-y-0.5"
              style={{ background: '#0a1628', color: 'white' }}
            >
              {t.services.viewAll} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d3b5e 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
                style={{ background: 'rgba(200,168,75,0.15)', color: '#e0c070', border: '1px solid rgba(200,168,75,0.2)' }}>
                SF TAX USA
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}>
                {t.about.title}
              </h2>
              <p className="text-blue-200 leading-relaxed mb-4">{t.about.body}</p>
              <p className="text-blue-200 leading-relaxed mb-8">{t.about.body2}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {t.about.values.map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} style={{ color: '#c8a84b' }} />
                    <span className="text-sm text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
              <Link
                to={`/${lang}/sobre`}
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: '#c8a84b' }}
              >
                {t.about.cta} <ArrowRight size={14} />
              </Link>
            </div>
            {/* Why choose us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.why.items.slice(0, 4).map((item, i) => (
                <div key={i} className="p-6 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="text-2xl mb-3">
                    {i === 0 ? '🌐' : i === 1 ? '👥' : i === 2 ? '✅' : '📅'}
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{item.title}</h3>
                  <p className="text-blue-300 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>
              {t.process.title}
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">{t.process.subtitle}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-0">
            {t.process.steps.map((step, i) => (
              <div key={i} className="relative flex-1 p-6 text-center">
                {/* Connector line */}
                {i < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 right-0 h-0.5 z-0"
                    style={{ background: 'linear-gradient(90deg, #c8a84b, #e5e7eb)' }} />
                )}
                <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white font-bold text-lg mb-4"
                  style={{ background: 'linear-gradient(135deg, #0a1628, #0d3b5e)', fontFamily: 'var(--font-display)' }}>
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multilingual */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>
              {t.multilingual.title}
            </h2>
            <p className="text-gray-500">{t.multilingual.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { key: 'pt', flag: '🇧🇷', ...t.multilingual.pt },
              { key: 'en', flag: '🇺🇸', ...t.multilingual.en },
              { key: 'es', flag: '🇪🇸', ...t.multilingual.es },
            ].map(item => (
              <div key={item.key} className="p-8 rounded-2xl text-center transition-all hover:shadow-lg"
                style={{ background: 'white', border: '1.5px solid #eef2f7' }}>
                <div className="text-4xl mb-4">{item.flag}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{t.blog.title}</h2>
              <p className="text-gray-500 mt-2">{t.blog.subtitle}</p>
            </div>
            <Link to={`/${lang}/blog`} className="hidden sm:flex items-center gap-1 text-sm font-semibold"
              style={{ color: '#c8a84b' }}>
              {t.blog.readMore} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.blog.posts.slice(0, 3).map((post, i) => (
              <Link key={i} to={`/${lang}/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden transition-all hover:shadow-lg"
                style={{ border: '1.5px solid #eef2f7' }}>
                <div className="h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${i === 0 ? '#0a1628, #0d3b5e' : i === 1 ? '#0d3b5e, #1a5276' : '#1a5276, #0a1628'})` }}>
                  <div className="text-4xl">
                    {i === 0 ? '📊' : i === 1 ? '🏢' : '🧾'}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#f0f4f8', color: '#0d3b5e' }}>{post.category}</span>
                  <h3 className="font-bold text-gray-800 mt-3 mb-2 text-sm leading-snug group-hover:text-blue-900 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{t.faq.title}</h2>
            <p className="text-gray-500">{t.faq.subtitle}</p>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="text-center mt-8">
            <Link to={`/${lang}/faq`} className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#0d3b5e' }}>
              Ver todas as perguntas <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
