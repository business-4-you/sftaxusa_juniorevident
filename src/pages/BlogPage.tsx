import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';
import CTASection from '../components/ui/CTASection';
import { ArrowRight, Tag } from 'lucide-react';

const seoContent = {
  pt: { title: 'Blog & Insights | SF TAX USA — Contabilidade para Brasileiros na Flórida', description: 'Artigos, guias e orientações sobre impostos, abertura de empresa e vida fiscal nos EUA para brasileiros e latinos.' },
  en: { title: 'Blog & Insights | SF TAX USA — Accounting for Brazilians in Florida', description: 'Articles, guides and tips on taxes, business formation and fiscal life in the USA for Brazilians and Latinos.' },
  es: { title: 'Blog & Insights | SF TAX USA — Contabilidad para Latinos en Florida', description: 'Artículos, guías y orientaciones sobre impuestos, apertura de empresa y vida fiscal en EE.UU. para latinos.' },
};

const categoryColors: Record<string, string> = {
  'Impostos': 'bg-blue-100 text-blue-700',
  'Taxes': 'bg-blue-100 text-blue-700',
  'Impuestos': 'bg-blue-100 text-blue-700',
  'Empresas': 'bg-green-100 text-green-700',
  'Business': 'bg-green-100 text-green-700',
  'Negocios': 'bg-green-100 text-green-700',
  'Sales Tax': 'bg-orange-100 text-orange-700',
  'Contabilidade': 'bg-purple-100 text-purple-700',
  'Accounting': 'bg-purple-100 text-purple-700',
  'Contabilidad': 'bg-purple-100 text-purple-700',
  'Internacional': 'bg-red-100 text-red-700',
  'International': 'bg-red-100 text-red-700',
  'Planejamento': 'bg-yellow-100 text-yellow-700',
  'Planning': 'bg-yellow-100 text-yellow-700',
};

export default function BlogPage() {
  const { lang, t } = useI18n();
  const seo = seoContent[lang];
  const posts = t.blog.posts;

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} slug="blog" lang={lang} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{t.blog.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.blog.subtitle}</p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: { slug: string; title: string; category: string; summary: string }, i: number) => {
              const colorClass = categoryColors[post.category] || 'bg-slate-100 text-slate-700';
              return (
                <Link
                  key={i}
                  to={`/${lang}/blog/${post.slug}`}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group overflow-hidden"
                >
                  {/* Post header gradient */}
                  <div className="h-36 bg-gradient-to-br from-navy to-petrol flex items-center justify-center p-6">
                    <span className="text-4xl">📝</span>
                  </div>
                  <div className="p-6">
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full mb-3 ${colorClass}`}>
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.summary}</p>
                    <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm group-hover:gap-2 transition-all">
                      {t.blog.readMore} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
