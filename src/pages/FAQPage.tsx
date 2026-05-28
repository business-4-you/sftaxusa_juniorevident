import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTASection from '../components/ui/CTASection';

const seoContent = {
  pt: { title: 'Perguntas Frequentes | SF TAX USA — Contabilidade na Flórida', description: 'Respostas para as dúvidas mais comuns sobre impostos, abertura de empresa e contabilidade para brasileiros e latinos nos EUA.', sub: 'Tire suas dúvidas sobre impostos, contabilidade e vida fiscal nos Estados Unidos.' },
  en: { title: 'FAQ | SF TAX USA — Accounting in Florida', description: 'Answers to the most common questions about taxes, business formation, and accounting for Brazilians and Latinos in the USA.', sub: 'Get your questions answered about taxes, accounting, and financial life in the United States.' },
  es: { title: 'Preguntas Frecuentes | SF TAX USA — Contabilidad en Florida', description: 'Respuestas a las preguntas más comunes sobre impuestos, apertura de empresa y contabilidad para latinos en EE.UU.', sub: 'Resuelva sus dudas sobre impuestos, contabilidad y vida fiscal en los Estados Unidos.' },
};

export default function FAQPage() {
  const { lang, t } = useI18n();
  const seo = seoContent[lang];

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} slug="faq" lang={lang} />

      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.faq.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{seo.sub}</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-500 text-center mb-10">{t.faq.subtitle}</p>
          <FAQAccordion items={t.faq.items} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
