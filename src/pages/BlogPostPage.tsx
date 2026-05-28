import { useParams, Link } from 'react-router-dom';
import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';
import { ArrowLeft, Tag, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackEvent } from '../data/config';

// Static blog post content per slug and lang
const postContent: Record<string, Record<string, { title: string; category: string; body: string[] }>> = {
  'declarar-imposto-brasil-eua': {
    pt: {
      title: 'Como declarar imposto de renda nos EUA sendo brasileiro',
      category: 'Impostos',
      body: [
        'Brasileiros que vivem nos Estados Unidos ou que possuem renda de fontes americanas podem ter obrigações fiscais nos EUA, independentemente de sua cidadania. Entender essas obrigações é fundamental para manter a regularidade fiscal e evitar multas.',
        'O sistema tributário americano considera como contribuintes obrigatórios: cidadãos americanos (em qualquer parte do mundo), residentes permanentes (green card), e estrangeiros residentes (resident aliens), que são aqueles que passaram no Substantial Presence Test.',
        'O Substantial Presence Test avalia o número de dias que você permaneceu nos EUA nos últimos três anos. Se você esteve presente por pelo menos 31 dias no ano corrente e a soma ponderada dos três anos atingir 183 dias, você pode ser considerado residente fiscal americano.',
        'Para brasileiros que declaram nos dois países, a questão da bitributação é uma preocupação frequente. Os EUA possuem tratados e mecanismos como o Foreign Tax Credit (FTC) que, em muitos casos, permitem abater impostos pagos em outros países do imposto americano. No entanto, o Brasil e os EUA não possuem tratado de dupla tributação, o que torna o planejamento ainda mais importante.',
        'Os principais formulários utilizados na declaração americana incluem o Form 1040 (declaração individual), Schedule C (rendimento autônomo), Schedule E (aluguéis e royalties) e, para quem tem contas bancárias no exterior, o FBAR (FinCEN 114).',
        'Os prazos geralmente são: 15 de abril para residentes nos EUA, com possibilidade de extensão automática até 15 de outubro. Para quem está fora dos EUA no momento do prazo, há uma extensão automática de dois meses.',
        'A SF TAX USA está aqui para orientar você em cada etapa desse processo. Nossa equipe fala português e entende a realidade de quem tem vínculos com o Brasil e os EUA.',
      ],
    },
    en: {
      title: 'How to file income taxes in the USA as a Brazilian',
      category: 'Taxes',
      body: [
        'Brazilians living in the United States or earning income from American sources may have tax obligations in the USA, regardless of their citizenship. Understanding these obligations is fundamental to maintaining tax compliance and avoiding penalties.',
        'The American tax system considers as mandatory taxpayers: American citizens (anywhere in the world), permanent residents (green card holders), and resident aliens — those who pass the Substantial Presence Test.',
        'The Substantial Presence Test evaluates the number of days you were present in the USA over the last three years. If you were present for at least 31 days in the current year and the weighted sum over three years reaches 183 days, you may be considered an American tax resident.',
        'For Brazilians filing in both countries, the concern about double taxation is common. The USA has treaties and mechanisms like the Foreign Tax Credit (FTC), which in many cases allow credits for taxes paid in other countries against the American tax. However, Brazil and the USA do not have a tax treaty, making planning even more important.',
        'The main forms used in the American tax return include Form 1040 (individual return), Schedule C (self-employment income), Schedule E (rentals and royalties), and for those with foreign bank accounts, the FBAR (FinCEN 114).',
        'Deadlines are generally: April 15 for US residents, with automatic extension available until October 15. For those outside the USA at the time of the deadline, there is an automatic two-month extension.',
        'SF TAX USA is here to guide you through every step of this process. Our team speaks Portuguese and understands the reality of those with ties to both Brazil and the USA.',
      ],
    },
    es: {
      title: 'Cómo declarar impuestos en EE.UU. siendo brasileño',
      category: 'Impuestos',
      body: [
        'Los brasileños que viven en los Estados Unidos o que tienen ingresos de fuentes americanas pueden tener obligaciones fiscales en EE.UU., independientemente de su ciudadanía. Entender estas obligaciones es fundamental para mantener la regularidad fiscal y evitar multas.',
        'El sistema tributario americano considera como contribuyentes obligatorios: ciudadanos americanos (en cualquier parte del mundo), residentes permanentes (green card) y extranjeros residentes (resident aliens), quienes pasan el Substantial Presence Test.',
        'El Substantial Presence Test evalúa el número de días que estuvo presente en EE.UU. en los últimos tres años. Si estuvo presente al menos 31 días en el año corriente y la suma ponderada de los tres años alcanza 183 días, puede ser considerado residente fiscal americano.',
        'Para los brasileños que declaran en ambos países, la preocupación por la doble tributación es frecuente. EE.UU. tiene tratados y mecanismos como el Foreign Tax Credit (FTC) que, en muchos casos, permiten descontar impuestos pagados en otros países del impuesto americano. Sin embargo, Brasil y EE.UU. no tienen tratado de doble tributación, lo que hace la planificación aún más importante.',
        'Los principales formularios utilizados incluyen el Form 1040 (declaración individual), Schedule C (ingresos como autónomo), Schedule E (alquileres y regalías) y, para quienes tienen cuentas bancarias en el exterior, el FBAR (FinCEN 114).',
        'Los plazos generalmente son: 15 de abril para residentes en EE.UU., con posibilidad de extensión automática hasta el 15 de octubre. Para quienes están fuera de EE.UU. en el momento del plazo, hay una extensión automática de dos meses.',
        'SF TAX USA está aquí para orientarle en cada etapa de este proceso. Nuestro equipo habla español y entiende la realidad de quienes tienen vínculos con Brasil y EE.UU.',
      ],
    },
  },
  'abrir-empresa-florida': {
    pt: {
      title: 'Como abrir uma empresa na Flórida: passo a passo',
      category: 'Empresas',
      body: [
        'A Flórida é um dos estados americanos mais atrativos para empreendedores estrangeiros, especialmente brasileiros. Sem imposto de renda estadual, legislação empresarial flexível e uma forte comunidade latina, o estado oferece um ambiente favorável para novos negócios.',
        'O primeiro passo é definir o tipo de entidade: LLC (Limited Liability Company) ou Corporation (Inc. ou Corp.). A LLC é a mais popular entre pequenos negócios por sua flexibilidade fiscal e proteção patrimonial. Já a Corporation é indicada para empresas que pretendem captar investimento ou emitir ações.',
        'O processo de abertura inclui: escolha e verificação da disponibilidade do nome da empresa, elaboração e registro dos Articles of Organization (LLC) ou Articles of Incorporation (Corp.), definição do Registered Agent, obtenção do EIN (Employer Identification Number) junto ao IRS, e abertura de conta bancária empresarial.',
        'Um ponto importante para estrangeiros é que não é obrigatório ter visto americano ou ser residente para abrir uma empresa nos EUA. Porém, algumas atividades podem requerer licenças específicas.',
        'Após a abertura, existem obrigações anuais como o Annual Report da Flórida (que deve ser enviado entre 1º de janeiro e 1º de maio), além de obrigações fiscais federais e estaduais que variam conforme a atividade.',
        'A SF TAX USA acompanha todo o processo de abertura, desde a escolha da estrutura até o cumprimento das primeiras obrigações fiscais. Entre em contato para uma consulta personalizada.',
      ],
    },
    en: {
      title: 'How to open a company in Florida: step by step',
      category: 'Business',
      body: [
        'Florida is one of the most attractive American states for foreign entrepreneurs, especially Brazilians. With no state income tax, flexible business legislation, and a strong Latin community, the state offers a favorable environment for new businesses.',
        'The first step is to define the type of entity: LLC (Limited Liability Company) or Corporation (Inc. or Corp.). The LLC is the most popular among small businesses for its tax flexibility and asset protection. The Corporation is recommended for companies looking to raise investment or issue shares.',
        'The opening process includes: choosing and verifying the availability of the company name, drafting and registering the Articles of Organization (LLC) or Articles of Incorporation (Corp.), defining the Registered Agent, obtaining the EIN (Employer Identification Number) from the IRS, and opening a business bank account.',
        'An important point for foreigners is that it is not mandatory to have an American visa or be a resident to open a company in the USA. However, some activities may require specific licenses.',
        'After opening, there are annual obligations such as the Florida Annual Report (which must be filed between January 1 and May 1), in addition to federal and state tax obligations that vary depending on the activity.',
        'SF TAX USA guides the entire opening process, from choosing the structure to meeting the first tax obligations. Contact us for a personalized consultation.',
      ],
    },
    es: {
      title: 'Cómo abrir una empresa en Florida: paso a paso',
      category: 'Negocios',
      body: [
        'Florida es uno de los estados americanos más atractivos para emprendedores extranjeros, especialmente brasileños. Sin impuesto sobre la renta estatal, legislación empresarial flexible y una fuerte comunidad latina, el estado ofrece un ambiente favorable para nuevos negocios.',
        'El primer paso es definir el tipo de entidad: LLC (Limited Liability Company) o Corporation (Inc. o Corp.). La LLC es la más popular entre pequeños negocios por su flexibilidad fiscal y protección patrimonial. La Corporation es recomendada para empresas que pretenden captar inversión o emitir acciones.',
        'El proceso de apertura incluye: elección y verificación de disponibilidad del nombre de la empresa, elaboración y registro de los Articles of Organization (LLC) o Articles of Incorporation (Corp.), definición del Registered Agent, obtención del EIN ante el IRS y apertura de cuenta bancaria empresarial.',
        'Un punto importante para extranjeros es que no es obligatorio tener visa americana o ser residente para abrir una empresa en EE.UU. Sin embargo, algunas actividades pueden requerir licencias específicas.',
        'Después de la apertura, existen obligaciones anuales como el Annual Report de Florida (que debe enviarse entre el 1 de enero y el 1 de mayo), además de obligaciones fiscales federales y estatales que varían según la actividad.',
        'SF TAX USA acompaña todo el proceso de apertura, desde la elección de la estructura hasta el cumplimiento de las primeras obligaciones fiscales. Contáctenos para una consulta personalizada.',
      ],
    },
  },
};

// Fallback generic content
const genericContent = {
  pt: { title: 'Artigo', category: 'Insights', body: ['Este artigo está sendo preparado. Em breve, conteúdo completo estará disponível aqui. Enquanto isso, entre em contato com nossa equipe para esclarecer qualquer dúvida.'] },
  en: { title: 'Article', category: 'Insights', body: ['This article is being prepared. Full content will be available here soon. In the meantime, contact our team to clarify any questions.'] },
  es: { title: 'Artículo', category: 'Insights', body: ['Este artículo está siendo preparado. El contenido completo estará disponible aquí pronto. Mientras tanto, contáctenos para aclarar cualquier duda.'] },
};

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useI18n();

  const postData = slug && postContent[slug] ? postContent[slug][lang] : genericContent[lang];
  const allPosts = t.blog.posts as { slug: string; title: string; category: string; summary: string }[];
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${postData.title} | SF TAX USA`}
        description={postData.body[0].slice(0, 160)}
        slug={`blog/${slug}`}
        lang={lang}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to={`/${lang}/blog`} className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {lang === 'pt' ? 'Voltar ao Blog' : lang === 'en' ? 'Back to Blog' : 'Volver al Blog'}
          </Link>
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-gold/20 text-gold mb-4">
            <Tag className="w-3 h-3" />
            {postData.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
            {postData.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            {postData.body.map((paragraph, i) => (
              <p key={i} className="text-slate-600 leading-relaxed mb-6 text-lg">{paragraph}</p>
            ))}
          </article>

          {/* CTA inline */}
          <div className="mt-12 bg-gradient-to-br from-navy to-petrol rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-3">
              {lang === 'pt' ? 'Precisa de ajuda com esse assunto?' : lang === 'en' ? 'Need help with this topic?' : '¿Necesita ayuda con este tema?'}
            </h3>
            <p className="text-slate-300 mb-6">
              {lang === 'pt' ? 'Nossa equipe está pronta para orientar você.' : lang === 'en' ? 'Our team is ready to guide you.' : 'Nuestro equipo está listo para orientarle.'}
            </p>
            <a
              href={getWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { page: 'blog_post', slug, lang })}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-xl transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              {lang === 'pt' ? 'Falar pelo WhatsApp' : lang === 'en' ? 'Chat on WhatsApp' : 'Chatear por WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-navy mb-8 text-center">
              {lang === 'pt' ? 'Outros artigos' : lang === 'en' ? 'Other articles' : 'Otros artículos'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((post, i) => (
                <Link
                  key={i}
                  to={`/${lang}/blog/${post.slug}`}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                >
                  <span className="text-xs font-semibold text-gold">{post.category}</span>
                  <h3 className="font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{post.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
