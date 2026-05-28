import { useI18n } from '../i18n/index';
import SEOHead from '../components/seo/SEOHead';
import CTASection from '../components/ui/CTASection';
import { getWhatsAppUrl, trackEvent } from '../data/config';
import { CheckCircle, Users, Globe, Award, Heart, Shield } from 'lucide-react';

const content = {
  pt: {
    title: 'Sobre a SF TAX USA | Contabilidade para Brasileiros na Flórida',
    description: 'Conheça a SF TAX USA — empresa de contabilidade especializada em atender brasileiros, latinos e estrangeiros na Flórida com impostos, abertura de empresa e planejamento fiscal.',
    hero: {
      badge: 'Quem Somos',
      h1: 'Mais do que uma contabilidade — somos seu suporte fiscal nos EUA',
      sub: 'A SF TAX USA nasceu para simplificar a vida fiscal de quem vive, empreende ou investe na Flórida. Atendemos em português, inglês e espanhol.',
    },
    mission: {
      h2: 'Nossa missão',
      text: 'Oferecer orientação contábil, fiscal e tributária clara, acessível e confiável para brasileiros, latinos e estrangeiros que precisam de suporte profissional nos Estados Unidos — sem complicação, sem surpresas e com o atendimento humano que você merece.',
    },
    values: {
      h2: 'Nossos valores',
      items: [
        { icon: 'shield', title: 'Integridade', text: 'Atuamos com ética, transparência e responsabilidade em cada orientação que oferecemos.' },
        { icon: 'heart', title: 'Humanidade', text: 'Tratamos cada cliente como único, entendendo seu contexto, dúvidas e objetivos pessoais.' },
        { icon: 'globe', title: 'Diversidade', text: 'Atendemos em 3 idiomas e compreendemos a realidade de quem veio de outro país para construir algo nos EUA.' },
        { icon: 'award', title: 'Excelência', text: 'Mantemos atualização constante sobre a legislação americana para entregar o melhor suporte possível.' },
        { icon: 'users', title: 'Proximidade', text: 'Estamos disponíveis para tirar dúvidas, orientar e acompanhar você em cada etapa da sua jornada fiscal.' },
        { icon: 'check', title: 'Clareza', text: 'Traduzimos o complexo sistema tributário americano para uma linguagem simples e acessível.' },
      ],
    },
    who: {
      h2: 'Quem atendemos',
      items: [
        'Brasileiros na Flórida e em outros estados',
        'Latinos e estrangeiros nos EUA',
        'Pessoas físicas com obrigações fiscais americanas',
        'Empresários com negócios nos EUA',
        'Investidores em imóveis e ativos nos EUA',
        'Profissionais autônomos e freelancers',
        'Empresas em processo de abertura nos EUA',
        'Clientes com renda em múltiplos países',
      ],
    },
    why: {
      h2: 'Por que escolher a SF TAX USA',
      items: [
        'Atendimento em português, inglês e espanhol',
        'Especialização no contexto de brasileiros e estrangeiros nos EUA',
        'Transparência em cada etapa do processo',
        'Suporte proativo para evitar erros e multas',
        'Comunicação clara sobre prazos e obrigações',
        'Equipe atualizada com a legislação americana',
      ],
    },
    cta: 'Fale com a nossa equipe',
  },
  en: {
    title: 'About SF TAX USA | Accounting for Brazilians in Florida',
    description: 'Learn about SF TAX USA — an accounting firm specializing in serving Brazilians, Latinos, and foreigners in Florida with taxes, business formation, and tax planning.',
    hero: {
      badge: 'About Us',
      h1: 'More than an accounting firm — your financial support in the USA',
      sub: 'SF TAX USA was created to simplify the fiscal life of those who live, work, or invest in Florida. We serve in English, Portuguese, and Spanish.',
    },
    mission: {
      h2: 'Our mission',
      text: 'To provide clear, accessible, and reliable accounting, fiscal, and tax guidance for Brazilians, Latinos, and foreigners who need professional support in the United States — no complications, no surprises, with the human service you deserve.',
    },
    values: {
      h2: 'Our values',
      items: [
        { icon: 'shield', title: 'Integrity', text: 'We act with ethics, transparency, and responsibility in every guidance we offer.' },
        { icon: 'heart', title: 'Humanity', text: 'We treat each client as unique, understanding their context, questions, and personal goals.' },
        { icon: 'globe', title: 'Diversity', text: 'We serve in 3 languages and understand the reality of those who came from another country to build something in the USA.' },
        { icon: 'award', title: 'Excellence', text: 'We maintain constant updating on American legislation to deliver the best possible support.' },
        { icon: 'users', title: 'Proximity', text: 'We are available to answer questions, guide you, and accompany you at each stage of your fiscal journey.' },
        { icon: 'check', title: 'Clarity', text: 'We translate the complex American tax system into simple and accessible language.' },
      ],
    },
    who: {
      h2: 'Who we serve',
      items: [
        'Brazilians in Florida and other states',
        'Latinos and foreigners in the USA',
        'Individuals with American tax obligations',
        'Business owners with operations in the USA',
        'Real estate and asset investors in the USA',
        'Self-employed professionals and freelancers',
        'Companies in the process of formation in the USA',
        'Clients with income in multiple countries',
      ],
    },
    why: {
      h2: 'Why choose SF TAX USA',
      items: [
        'Service in Portuguese, English, and Spanish',
        'Specialization in the context of Brazilians and foreigners in the USA',
        'Transparency at each stage of the process',
        'Proactive support to avoid errors and penalties',
        'Clear communication about deadlines and obligations',
        'Team updated with American legislation',
      ],
    },
    cta: 'Talk to our team',
  },
  es: {
    title: 'Sobre SF TAX USA | Contabilidad para Latinos en Florida',
    description: 'Conozca SF TAX USA — empresa de contabilidad especializada en atender brasileños, latinos y extranjeros en Florida con impuestos, apertura de empresa y planificación fiscal.',
    hero: {
      badge: 'Quiénes Somos',
      h1: 'Más que una contabilidad — su soporte fiscal en EE.UU.',
      sub: 'SF TAX USA nació para simplificar la vida fiscal de quienes viven, emprenden o invierten en Florida. Atendemos en español, inglés y portugués.',
    },
    mission: {
      h2: 'Nuestra misión',
      text: 'Ofrecer orientación contable, fiscal y tributaria clara, accesible y confiable para brasileños, latinos y extranjeros que necesitan apoyo profesional en los Estados Unidos — sin complicaciones, sin sorpresas y con el servicio humano que merece.',
    },
    values: {
      h2: 'Nuestros valores',
      items: [
        { icon: 'shield', title: 'Integridad', text: 'Actuamos con ética, transparencia y responsabilidad en cada orientación que ofrecemos.' },
        { icon: 'heart', title: 'Humanidad', text: 'Tratamos a cada cliente como único, entendiendo su contexto, dudas y objetivos personales.' },
        { icon: 'globe', title: 'Diversidad', text: 'Atendemos en 3 idiomas y comprendemos la realidad de quien vino de otro país para construir algo en EE.UU.' },
        { icon: 'award', title: 'Excelencia', text: 'Mantenemos actualización constante sobre la legislación americana para brindar el mejor apoyo posible.' },
        { icon: 'users', title: 'Cercanía', text: 'Estamos disponibles para responder preguntas, orientar y acompañarle en cada etapa de su camino fiscal.' },
        { icon: 'check', title: 'Claridad', text: 'Traducimos el complejo sistema tributario americano a un lenguaje simple y accesible.' },
      ],
    },
    who: {
      h2: 'A quién atendemos',
      items: [
        'Brasileños en Florida y otros estados',
        'Latinos y extranjeros en EE.UU.',
        'Personas físicas con obligaciones fiscales americanas',
        'Empresarios con negocios en EE.UU.',
        'Inversionistas en bienes raíces y activos en EE.UU.',
        'Profesionales autónomos y freelancers',
        'Empresas en proceso de apertura en EE.UU.',
        'Clientes con ingresos en múltiples países',
      ],
    },
    why: {
      h2: 'Por qué elegir SF TAX USA',
      items: [
        'Atención en portugués, inglés y español',
        'Especialización en el contexto de brasileños y extranjeros en EE.UU.',
        'Transparencia en cada etapa del proceso',
        'Apoyo proactivo para evitar errores y multas',
        'Comunicación clara sobre plazos y obligaciones',
        'Equipo actualizado con la legislación americana',
      ],
    },
    cta: 'Hable con nuestro equipo',
  },
};

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  award: <Award className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  check: <CheckCircle className="w-6 h-6" />,
};

export default function AboutPage() {
  const { lang } = useI18n();
  const c = content[lang];

  return (
    <>
      <SEOHead title={c.title} description={c.description} slug="sobre" lang={lang} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-petrol pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-gold/20 text-gold text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {c.hero.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            {c.hero.h1}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            {c.hero.sub}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-serif font-bold text-navy mb-6">{c.mission.h2}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{c.mission.text}</p>
            </div>
            <div className="flex-1">
              {/* Visual placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-navy to-petrol p-10 flex items-center justify-center aspect-square max-w-sm mx-auto">
                <div className="text-center text-white">
                  <div className="text-6xl font-serif font-bold text-gold mb-2">SF</div>
                  <div className="text-2xl font-bold tracking-widest">TAX USA</div>
                  <div className="text-sm mt-3 text-slate-300 tracking-wider">FLORIDA · USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">{c.values.h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.values.items.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-4">
                  {iconMap[v.icon]}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">{c.who.h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.who.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">{c.why.h2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.why.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/10 rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={getWhatsAppUrl(lang)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { page: 'about', lang })}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold/90 text-navy font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              {c.cta}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
