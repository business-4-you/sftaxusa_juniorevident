import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';
import ContactForm from '../components/ui/ContactForm';
import { getWhatsAppUrl, trackEvent, SITE_CONFIG } from '../data/config';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const content = {
  pt: {
    title: 'Contato | SF TAX USA — Fale com Nossos Especialistas',
    description: 'Entre em contato com a SF TAX USA. Atendemos por WhatsApp, e-mail e formulário. Especialistas em impostos e contabilidade para brasileiros na Flórida.',
    badge: 'Fale Conosco',
    h1: 'Entre em contato com nossa equipe',
    sub: 'Estamos prontos para responder suas dúvidas sobre impostos, abertura de empresa e planejamento fiscal nos EUA.',
    whatsapp: 'Chamar no WhatsApp',
    info: {
      phone: 'Telefone',
      email: 'E-mail',
      address: 'Localização',
      hours: 'Horário de atendimento',
    },
    formTitle: 'Envie uma mensagem',
  },
  en: {
    title: 'Contact | SF TAX USA — Talk to Our Specialists',
    description: 'Contact SF TAX USA. We serve via WhatsApp, email, and form. Specialists in taxes and accounting for Brazilians and Latinos in Florida.',
    badge: 'Get in Touch',
    h1: 'Contact our team',
    sub: 'We are ready to answer your questions about taxes, business formation, and tax planning in the USA.',
    whatsapp: 'Chat on WhatsApp',
    info: {
      phone: 'Phone',
      email: 'Email',
      address: 'Location',
      hours: 'Business hours',
    },
    formTitle: 'Send a message',
  },
  es: {
    title: 'Contacto | SF TAX USA — Hable con Nuestros Especialistas',
    description: 'Contáctenos en SF TAX USA. Atendemos por WhatsApp, correo y formulario. Especialistas en impuestos y contabilidad para latinos en Florida.',
    badge: 'Contáctenos',
    h1: 'Contacte a nuestro equipo',
    sub: 'Estamos listos para responder sus preguntas sobre impuestos, apertura de empresa y planificación fiscal en EE.UU.',
    whatsapp: 'Chatear por WhatsApp',
    info: {
      phone: 'Teléfono',
      email: 'Correo electrónico',
      address: 'Ubicación',
      hours: 'Horario de atención',
    },
    formTitle: 'Enviar un mensaje',
  },
};

export default function ContactPage() {
  const { lang } = useI18n();
  const c = content[lang];

  return (
    <>
      <SEOHead title={c.title} description={c.description} slug="contato" lang={lang} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-gold/20 text-gold text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {c.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {c.h1}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">{c.sub}</p>
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { page: 'contact', lang })}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            {c.whatsapp}
          </a>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Info */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                { icon: <Phone className="w-5 h-5" />, label: c.info.phone, value: SITE_CONFIG.contact.phone },
                { icon: <Mail className="w-5 h-5" />, label: c.info.email, value: SITE_CONFIG.contact.email },
                { icon: <MapPin className="w-5 h-5" />, label: c.info.address, value: SITE_CONFIG.contact.address },
                { icon: <Clock className="w-5 h-5" />, label: c.info.hours, value: SITE_CONFIG.contact.hours[lang] },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                  <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-navy font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-gradient-to-br from-navy/5 to-petrol/10 h-52 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-gold" />
                <p className="font-semibold text-navy">Florida, United States</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
            <h2 className="text-2xl font-serif font-bold text-navy mb-6">{c.formTitle}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
