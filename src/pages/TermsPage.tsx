import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';

export default function TermsPage() {
  const { lang, t } = useI18n();

  return (
    <>
      <SEOHead
        title={`${t.terms.title} | SF TAX USA`}
        description="Termos de uso da SF TAX USA. Condições gerais de uso do site e dos serviços."
        slug="termos"
        lang={lang}
      />

      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">{t.terms.title}</h1>
          <p className="text-slate-300">{t.terms.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-navy prose-a:text-gold"
          dangerouslySetInnerHTML={{ __html: t.terms.content }}
        />
      </section>
    </>
  );
}
