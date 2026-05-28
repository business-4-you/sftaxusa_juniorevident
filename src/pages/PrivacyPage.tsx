import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';

export default function PrivacyPage() {
  const { lang, t } = useI18n();

  return (
    <>
      <SEOHead
        title={`${t.privacy.title} | SF TAX USA`}
        description="Política de privacidade da SF TAX USA. Como coletamos, usamos e protegemos suas informações."
        slug="privacidade"
        lang={lang}
      />

      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">{t.privacy.title}</h1>
          <p className="text-slate-300">{t.privacy.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div
          className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-navy prose-a:text-gold"
          dangerouslySetInnerHTML={{ __html: t.privacy.content }}
        />
      </section>
    </>
  );
}
