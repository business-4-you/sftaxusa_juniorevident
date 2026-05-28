import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, ChevronRight, AlertTriangle, Lightbulb, Users, Star } from 'lucide-react';
import { useI18n } from '../i18n';
import { getWhatsAppUrl, trackEvent } from '../data/config';
import FAQAccordion from '../components/ui/FAQAccordion';

// ─── Rich service content (PT only shown; EN/ES would follow same structure) ──
const serviceContent: Record<string, {
  seoTitle: { pt: string; en: string; es: string };
  seoDesc: { pt: string; en: string; es: string };
  headline: { pt: string; en: string; es: string };
  subheadline: { pt: string; en: string; es: string };
  pains: { pt: string[]; en: string[]; es: string[] };
  solution: { pt: string; en: string; es: string };
  forWhom: { pt: string[]; en: string[]; es: string[] };
  benefits: { pt: string[]; en: string[]; es: string[] };
  process: { pt: { title: string; desc: string }[]; en: { title: string; desc: string }[]; es: { title: string; desc: string }[] };
  faq: { pt: { q: string; a: string }[]; en: { q: string; a: string }[]; es: { q: string; a: string }[] };
  ctaText: { pt: string; en: string; es: string };
}> = {
  'preparacao-de-impostos': {
    seoTitle: {
      pt: 'Preparação de Impostos nos EUA | SF TAX USA – Flórida',
      en: 'Tax Preparation in Florida | SF TAX USA',
      es: 'Preparación de Impuestos en EE.UU. | SF TAX USA',
    },
    seoDesc: {
      pt: 'Declaração de imposto de renda federal e estadual nos EUA para pessoa física e empresas. Atendimento em português, com segurança e dentro dos prazos.',
      en: 'Federal and state income tax preparation for individuals and businesses in Florida. Accurate, on-time, bilingual service.',
      es: 'Declaración de impuesto sobre la renta federal y estatal en EE.UU. para personas físicas y empresas. Servicio en español.',
    },
    headline: {
      pt: 'Preparação de Impostos nos EUA com Segurança e Precisão',
      en: 'Tax Preparation in the USA — Accurate and On Time',
      es: 'Preparación de Impuestos en EE.UU. con Seguridad y Precisión',
    },
    subheadline: {
      pt: 'Declaração federal e estadual para pessoa física e jurídica, realizada por profissionais que entendem a sua realidade nos Estados Unidos.',
      en: 'Federal and state tax filing for individuals and businesses, handled by specialists who understand your reality in the USA.',
      es: 'Declaración federal y estatal para personas físicas y jurídicas, realizada por profesionales que entienden su situación en EE.UU.',
    },
    pains: {
      pt: [
        'Medo de errar o prazo e pagar multas ao IRS',
        'Dúvida sobre o que precisa ser declarado',
        'Renda em múltiplos países sem saber como organizar',
        'Primeira declaração nos EUA sem orientação',
        'Receio de pagar impostos a mais ou a menos',
      ],
      en: [
        'Fear of missing deadlines and paying IRS penalties',
        'Uncertainty about what needs to be reported',
        'Income from multiple countries without knowing how to organize',
        'First US tax return without guidance',
        'Concern about overpaying or underpaying taxes',
      ],
      es: [
        'Miedo de perder plazos y pagar multas al IRS',
        'Dudas sobre qué necesita declararse',
        'Ingresos en varios países sin saber cómo organizarlos',
        'Primera declaración en EE.UU. sin orientación',
        'Preocupación por pagar impuestos de más o de menos',
      ],
    },
    solution: {
      pt: 'A SF TAX USA prepara sua declaração de imposto de renda federal e estadual com atenção a cada detalhe da sua situação. Analisamos todas as fontes de renda, deduções aplicáveis e obrigações específicas para garantir que você esteja em conformidade com o IRS e as autoridades estaduais.',
      en: 'SF TAX USA prepares your federal and state income tax returns with attention to every detail of your situation. We analyze all income sources, applicable deductions and specific obligations to ensure you are compliant with the IRS and state tax authorities.',
      es: 'SF TAX USA prepara su declaración de impuestos federal y estatal con atención a cada detalle de su situación. Analizamos todas las fuentes de ingresos, deducciones aplicables y obligaciones específicas para garantizar que esté en cumplimiento con el IRS y las autoridades fiscales estatales.',
    },
    forWhom: {
      pt: ['Brasileiros e latinos residentes nos EUA', 'Trabalhadores com visto de trabalho (H1B, L1, etc.)', 'Autônomos e freelancers', 'Proprietários de LLC ou Corp', 'Investidores com renda nos EUA', 'Estrangeiros não-residentes com renda americana'],
      en: ['Brazilians and Latinos residing in the USA', 'Work visa holders (H1B, L1, etc.)', 'Self-employed and freelancers', 'LLC or Corp owners', 'Investors with US income', 'Non-resident aliens with US-sourced income'],
      es: ['Brasileños y latinos residentes en EE.UU.', 'Titulares de visas de trabajo (H1B, L1, etc.)', 'Autónomos y freelancers', 'Propietarios de LLC o Corp', 'Inversores con ingresos en EE.UU.', 'Extranjeros no residentes con ingresos en EE.UU.'],
    },
    benefits: {
      pt: ['Cumprimento dos prazos federais e estaduais', 'Análise de todas as deduções aplicáveis ao seu perfil', 'Evitar multas e juros por erros na declaração', 'Clareza sobre o que e quanto você deve ao IRS', 'Segurança para declarar renda de múltiplas fontes', 'Atendimento em português, inglês ou espanhol'],
      en: ['Meeting federal and state deadlines', 'Analysis of all deductions applicable to your profile', 'Avoiding penalties for errors in your return', 'Clarity on what and how much you owe the IRS', 'Confidence in reporting income from multiple sources', 'Service in Portuguese, English or Spanish'],
      es: ['Cumplimiento de plazos federales y estatales', 'Análisis de todas las deducciones aplicables a su perfil', 'Evitar multas por errores en la declaración', 'Claridad sobre qué y cuánto debe al IRS', 'Seguridad para declarar ingresos de múltiples fuentes', 'Atención en portugués, inglés o español'],
    },
    process: {
      pt: [
        { title: 'Conversa inicial', desc: 'Entendemos sua situação, tipo de renda e histórico fiscal.' },
        { title: 'Coleta de documentos', desc: 'Informamos quais documentos são necessários para sua declaração.' },
        { title: 'Preparação', desc: 'Elaboramos sua declaração com atenção a deduções e obrigações.' },
        { title: 'Revisão e entrega', desc: 'Você revisa, aprovamos juntos e enviamos ao IRS.' },
      ],
      en: [
        { title: 'Initial consultation', desc: 'We understand your situation, income type and tax history.' },
        { title: 'Document collection', desc: 'We inform which documents are needed for your return.' },
        { title: 'Preparation', desc: 'We prepare your return with attention to deductions and obligations.' },
        { title: 'Review and filing', desc: 'You review, we finalize together and file with the IRS.' },
      ],
      es: [
        { title: 'Consulta inicial', desc: 'Entendemos su situación, tipo de ingresos e historial fiscal.' },
        { title: 'Recopilación de documentos', desc: 'Le informamos qué documentos son necesarios para su declaración.' },
        { title: 'Preparación', desc: 'Elaboramos su declaración con atención a deducciones y obligaciones.' },
        { title: 'Revisión y entrega', desc: 'Usted revisa, aprobamos juntos y enviamos al IRS.' },
      ],
    },
    faq: {
      pt: [
        { q: 'Qual o prazo para declarar imposto de renda nos EUA?', a: 'O prazo padrão é 15 de abril. Para estrangeiros não-residentes, geralmente 15 de junho. É possível solicitar prorrogação até 15 de outubro.' },
        { q: 'Preciso declarar mesmo que minha renda seja baixa?', a: 'Depende do seu tipo de renda e status. Em muitos casos, mesmo com renda abaixo do mínimo, vale declarar para recuperar impostos retidos ou ter acesso a créditos fiscais.' },
        { q: 'Posso declarar renda do Brasil na declaração americana?', a: 'Sim. Cidadãos e residentes americanos devem declarar renda global. Há tratados e créditos que podem evitar dupla tributação.' },
        { q: 'O que acontece se não declarar no prazo?', a: 'Podem incidir multas por atraso (5% ao mês até 25% do imposto devido) e juros. A SF TAX USA auxilia na regularização de declarações atrasadas.' },
        { q: 'Posso retificar uma declaração já entregue?', a: 'Sim, por meio do formulário 1040-X é possível corrigir erros em declarações anteriores.' },
        { q: 'Como funciona para quem tem empresa e é pessoa física ao mesmo tempo?', a: 'Analisamos as duas situações juntas para otimizar a declaração e evitar pagamento duplicado ou erros de classificação.' },
      ],
      en: [
        { q: 'What is the deadline to file taxes in the USA?', a: 'The standard deadline is April 15. For non-resident aliens, generally June 15. Extensions to October 15 are available.' },
        { q: 'Do I need to file even if my income is low?', a: 'It depends on your income type and status. In many cases, even with income below the minimum, filing is worthwhile to recover withheld taxes or claim credits.' },
        { q: 'Can I report Brazilian income on my US tax return?', a: 'Yes. US citizens and residents must report worldwide income. Treaties and credits may prevent double taxation.' },
        { q: 'What happens if I miss the filing deadline?', a: 'Penalties of 5% per month (up to 25% of tax owed) and interest may apply. SF TAX USA helps with late filing regularization.' },
        { q: 'Can I amend a return already filed?', a: 'Yes, Form 1040-X allows you to correct errors in previous returns.' },
        { q: 'How does it work if I have a business and personal income?', a: 'We analyze both situations together to optimize the filing and avoid duplicate payments or misclassification errors.' },
      ],
      es: [
        { q: '¿Cuál es el plazo para declarar impuestos en EE.UU.?', a: 'El plazo estándar es el 15 de abril. Para extranjeros no residentes, generalmente el 15 de junio. Se puede solicitar prórroga hasta el 15 de octubre.' },
        { q: '¿Necesito declarar aunque mis ingresos sean bajos?', a: 'Depende de su tipo de ingreso y estado. En muchos casos, incluso con ingresos por debajo del mínimo, vale la pena declarar para recuperar impuestos retenidos o acceder a créditos fiscales.' },
        { q: '¿Puedo declarar ingresos de Brasil en la declaración americana?', a: 'Sí. Los ciudadanos y residentes americanos deben declarar ingresos globales. Hay tratados y créditos que pueden evitar la doble tributación.' },
        { q: '¿Qué pasa si no declaro en el plazo?', a: 'Pueden aplicarse multas del 5% mensual (hasta 25% del impuesto adeudado) e intereses. SF TAX USA ayuda en la regularización de declaraciones atrasadas.' },
        { q: '¿Puedo rectificar una declaración ya presentada?', a: 'Sí, mediante el formulario 1040-X se pueden corregir errores en declaraciones anteriores.' },
        { q: '¿Cómo funciona si tengo empresa e ingresos personales al mismo tiempo?', a: 'Analizamos ambas situaciones juntas para optimizar la declaración y evitar pagos duplicados o errores de clasificación.' },
      ],
    },
    ctaText: {
      pt: 'Evite erros e multas. Fale com um especialista da SF TAX USA e prepare sua declaração com segurança.',
      en: 'Avoid mistakes and penalties. Talk to a SF TAX USA specialist and file your return with confidence.',
      es: 'Evite errores y multas. Hable con un especialista de SF TAX USA y prepare su declaración con seguridad.',
    },
  },
  'abertura-de-empresa': {
    seoTitle: {
      pt: 'Abrir Empresa nos EUA | LLC e Corp na Flórida – SF TAX USA',
      en: 'Open a Business in the USA | LLC & Corp in Florida – SF TAX USA',
      es: 'Abrir Empresa en EE.UU. | LLC y Corp en Florida – SF TAX USA',
    },
    seoDesc: {
      pt: 'Orientação completa para abrir LLC, Corp e outras estruturas empresariais nos EUA. Atendimento em português para brasileiros na Flórida.',
      en: 'Complete guidance for forming LLCs, Corporations and other business structures in the USA. Bilingual service in Florida.',
      es: 'Orientación completa para abrir LLC, Corp y otras estructuras empresariales en EE.UU. Servicio en español en Florida.',
    },
    headline: {
      pt: 'Abra sua Empresa nos EUA com Orientação Profissional',
      en: 'Form Your US Business with Professional Guidance',
      es: 'Abra su Empresa en EE.UU. con Orientación Profesional',
    },
    subheadline: {
      pt: 'Da escolha da estrutura ideal ao registro oficial, a SF TAX USA acompanha todo o processo de abertura da sua empresa na Flórida e outros estados.',
      en: 'From choosing the right structure to official registration, SF TAX USA guides you through the entire business formation process in Florida and other states.',
      es: 'Desde la elección de la estructura ideal hasta el registro oficial, SF TAX USA acompaña todo el proceso de apertura de su empresa en Florida y otros estados.',
    },
    pains: {
      pt: ['Não saber qual tipo de empresa abrir (LLC, Corp, etc.)', 'Medo de cometer erros no processo de registro', 'Dúvida sobre custos e obrigações após a abertura', 'Preocupação com EIN, conta bancária e impostos', 'Desconhecimento das exigências da Flórida'],
      en: ['Not knowing which business structure to choose (LLC, Corp, etc.)', 'Fear of making mistakes in the registration process', 'Uncertainty about costs and obligations after formation', 'Concerns about EIN, bank account and taxes', 'Unfamiliarity with Florida requirements'],
      es: ['No saber qué tipo de empresa abrir (LLC, Corp, etc.)', 'Miedo de cometer errores en el proceso de registro', 'Dudas sobre costos y obligaciones después de la apertura', 'Preocupación sobre EIN, cuenta bancaria e impuestos', 'Desconocimiento de los requisitos de Florida'],
    },
    solution: {
      pt: 'A SF TAX USA oferece orientação completa para a abertura da sua empresa nos EUA. Analisamos seu perfil, objetivos e necessidades para recomendar a estrutura mais adequada — LLC, Corporation (C-Corp ou S-Corp), ou outra — e acompanhamos todo o processo de registro com clareza.',
      en: 'SF TAX USA provides complete guidance for opening your business in the USA. We analyze your profile, goals and needs to recommend the most suitable structure — LLC, Corporation (C-Corp or S-Corp), or other — and guide you through the entire registration process with clarity.',
      es: 'SF TAX USA ofrece orientación completa para la apertura de su empresa en EE.UU. Analizamos su perfil, objetivos y necesidades para recomendar la estructura más adecuada — LLC, Corporation (C-Corp o S-Corp), u otra — y acompañamos todo el proceso de registro con claridad.',
    },
    forWhom: {
      pt: ['Brasileiros que querem empreender nos EUA', 'Imigrantes com visto de trabalho ou residência', 'Investidores estrangeiros', 'Profissionais que prestam serviços para clientes americanos', 'Empresas brasileiras que querem expandir para os EUA'],
      en: ['Brazilians who want to do business in the USA', 'Immigrants with work or residency visas', 'Foreign investors', 'Professionals providing services to US clients', 'Brazilian companies looking to expand to the USA'],
      es: ['Brasileños que quieren emprender en EE.UU.', 'Inmigrantes con visa de trabajo o residencia', 'Inversores extranjeros', 'Profesionales que prestan servicios a clientes americanos', 'Empresas brasileñas que quieren expandirse a EE.UU.'],
    },
    benefits: {
      pt: ['Escolha da estrutura empresarial mais adequada ao seu perfil', 'Registro correto junto às autoridades estaduais', 'Orientação sobre EIN (Tax ID) para a empresa', 'Suporte para abertura de conta bancária empresarial', 'Clareza sobre obrigações fiscais após a abertura', 'Atendimento personalizado em português'],
      en: ['Choosing the most suitable business structure for your profile', 'Correct registration with state authorities', 'Guidance on obtaining an EIN (Tax ID) for the business', 'Support for opening a business bank account', 'Clarity on tax obligations after formation', 'Personalized service in English'],
      es: ['Elección de la estructura empresarial más adecuada', 'Registro correcto ante las autoridades estatales', 'Orientación sobre el EIN (Tax ID) para la empresa', 'Apoyo para abrir una cuenta bancaria empresarial', 'Claridad sobre obligaciones fiscales tras la apertura', 'Atención personalizada en español'],
    },
    process: {
      pt: [
        { title: 'Análise do perfil', desc: 'Entendemos seus objetivos para recomendar a estrutura ideal.' },
        { title: 'Escolha da estrutura', desc: 'LLC, C-Corp, S-Corp — explicamos as diferenças com clareza.' },
        { title: 'Registro oficial', desc: 'Submetemos todos os documentos ao estado da Flórida (ou outro).' },
        { title: 'EIN e documentos', desc: 'Obtemos o EIN junto ao IRS e orientamos sobre próximos passos.' },
      ],
      en: [
        { title: 'Profile analysis', desc: 'We understand your goals to recommend the ideal structure.' },
        { title: 'Structure selection', desc: 'LLC, C-Corp, S-Corp — we explain the differences clearly.' },
        { title: 'Official registration', desc: 'We submit all documents to the state of Florida (or other).' },
        { title: 'EIN and documents', desc: 'We obtain the EIN from the IRS and guide you on next steps.' },
      ],
      es: [
        { title: 'Análisis del perfil', desc: 'Entendemos sus objetivos para recomendar la estructura ideal.' },
        { title: 'Elección de la estructura', desc: 'LLC, C-Corp, S-Corp — explicamos las diferencias con claridad.' },
        { title: 'Registro oficial', desc: 'Presentamos todos los documentos ante el estado de Florida (u otro).' },
        { title: 'EIN y documentos', desc: 'Obtenemos el EIN ante el IRS y orientamos sobre los próximos pasos.' },
      ],
    },
    faq: {
      pt: [
        { q: 'Qual a diferença entre LLC e Corporation?', a: 'A LLC é mais simples e flexível, com tributação direta aos sócios (pass-through). A Corporation tem estrutura mais rígida e pode ser C-Corp (tributada na empresa) ou S-Corp (pass-through com certas restrições).' },
        { q: 'Quanto tempo leva para abrir uma LLC na Flórida?', a: 'O processo pode levar de 3 a 10 dias úteis para o registro estadual. O EIN pode ser obtido imediatamente pelo IRS em muitos casos.' },
        { q: 'Estrangeiro pode abrir empresa nos EUA?', a: 'Sim. Estrangeiros não-residentes podem abrir e ter empresas nos EUA. Há considerações fiscais específicas que a SF TAX USA orienta em detalhes.' },
        { q: 'Preciso ter visto americano para abrir empresa nos EUA?', a: 'Não é obrigatório ter visto para registrar uma empresa, mas o visto pode ser necessário para operar fisicamente nos EUA.' },
        { q: 'Quais são as obrigações anuais após abrir a empresa?', a: 'Depende do estado, mas a Flórida exige um Annual Report anual. Além disso, há obrigações de declaração de imposto, folha de pagamento, sales tax (se aplicável) e escrituração contábil.' },
        { q: 'Qual o custo de manutenção anual de uma LLC na Flórida?', a: 'O principal custo obrigatório é o Annual Report da Flórida. Outros custos dependem das atividades da empresa. Orientamos sobre todos os custos durante nossa consulta.' },
      ],
      en: [
        { q: 'What is the difference between an LLC and a Corporation?', a: 'An LLC is simpler and more flexible, with pass-through taxation to owners. A Corporation has a more rigid structure and can be a C-Corp (taxed at the company level) or S-Corp (pass-through with certain restrictions).' },
        { q: 'How long does it take to form an LLC in Florida?', a: 'The process can take 3 to 10 business days for state registration. An EIN can often be obtained immediately from the IRS.' },
        { q: 'Can a foreigner open a business in the USA?', a: 'Yes. Non-resident aliens can open and own businesses in the USA. There are specific tax considerations that SF TAX USA explains in detail.' },
        { q: 'Do I need a US visa to open a business in the USA?', a: 'A visa is not required to register a company, but may be necessary to physically operate in the USA.' },
        { q: 'What are the annual obligations after forming the company?', a: 'It depends on the state, but Florida requires an annual Annual Report. Additionally, there are tax return obligations, payroll, sales tax (if applicable) and bookkeeping.' },
        { q: 'What is the annual maintenance cost of an LLC in Florida?', a: 'The main mandatory cost is the Florida Annual Report. Other costs depend on business activities. We advise on all costs during our consultation.' },
      ],
      es: [
        { q: '¿Cuál es la diferencia entre LLC y Corporation?', a: 'La LLC es más simple y flexible, con tributación directa a los socios (pass-through). La Corporation tiene una estructura más rígida y puede ser C-Corp (tributada en la empresa) o S-Corp (pass-through con ciertas restricciones).' },
        { q: '¿Cuánto tiempo lleva abrir una LLC en Florida?', a: 'El proceso puede tardar de 3 a 10 días hábiles para el registro estatal. El EIN puede obtenerse de inmediato en muchos casos.' },
        { q: '¿Puede un extranjero abrir una empresa en EE.UU.?', a: 'Sí. Los extranjeros no residentes pueden abrir y tener empresas en EE.UU. Hay consideraciones fiscales específicas que SF TAX USA detalla.' },
        { q: '¿Necesito visa americana para abrir una empresa en EE.UU.?', a: 'No es obligatorio tener visa para registrar una empresa, pero puede ser necesaria para operar físicamente en EE.UU.' },
        { q: '¿Cuáles son las obligaciones anuales después de abrir la empresa?', a: 'Depende del estado, pero Florida exige un Annual Report anual. Además, hay obligaciones de declaración de impuestos, nómina, sales tax (si aplica) y contabilidad.' },
        { q: '¿Cuál es el costo de mantenimiento anual de una LLC en Florida?', a: 'El principal costo obligatorio es el Annual Report de Florida. Otros costos dependen de las actividades de la empresa. Orientamos sobre todos los costos durante nuestra consulta.' },
      ],
    },
    ctaText: {
      pt: 'Abra sua empresa nos EUA com segurança. Fale com um especialista da SF TAX USA hoje mesmo.',
      en: 'Form your US business with confidence. Talk to a SF TAX USA specialist today.',
      es: 'Abra su empresa en EE.UU. con seguridad. Hable con un especialista de SF TAX USA hoy mismo.',
    },
  },
};

// Generic fallback content for services without specific content
function getGenericContent(_serviceSlug: string, serviceName: string, serviceDesc: string, lang: 'pt' | 'en' | 'es') {
  const generic = {
    pt: {
      headline: `${serviceName} nos EUA com Orientação Especializada`,
      subheadline: serviceDesc,
      pain: 'Enfrentar as exigências fiscais e contábeis nos EUA sem o suporte adequado pode gerar insegurança, erros e prejuízos.',
      solution: `A SF TAX USA oferece orientação especializada para ${serviceName.toLowerCase()}, garantindo que você esteja em conformidade com todas as exigências americanas. Nossa equipe está preparada para atender brasileiros, latinos e estrangeiros com clareza e profissionalismo.`,
      cta: `Tire suas dúvidas sobre ${serviceName} com a SF TAX USA. Fale com um especialista agora.`,
    },
    en: {
      headline: `${serviceName} in the USA — Expert Guidance`,
      subheadline: serviceDesc,
      pain: 'Navigating US tax and accounting requirements without proper support can lead to uncertainty, errors and financial losses.',
      solution: `SF TAX USA provides expert guidance for ${serviceName.toLowerCase()}, ensuring you comply with all US requirements. Our team is prepared to serve Brazilians, Latinos and foreigners with clarity and professionalism.`,
      cta: `Get your questions answered about ${serviceName} with SF TAX USA. Talk to a specialist now.`,
    },
    es: {
      headline: `${serviceName} en EE.UU. con Orientación Especializada`,
      subheadline: serviceDesc,
      pain: 'Enfrentar los requisitos fiscales y contables en EE.UU. sin el apoyo adecuado puede generar inseguridad, errores y pérdidas.',
      solution: `SF TAX USA ofrece orientación especializada para ${serviceName.toLowerCase()}, garantizando que esté en cumplimiento con todos los requisitos americanos. Nuestro equipo está preparado para atender a brasileños, latinos y extranjeros con claridad y profesionalismo.`,
      cta: `Resuelva sus dudas sobre ${serviceName} con SF TAX USA. Hable con un especialista ahora.`,
    },
  };
  return generic[lang];
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useI18n();
  const whatsappUrl = getWhatsAppUrl(lang);

  const serviceInfo = t.services.list.find(s => s.slug === slug);
  const content = slug ? serviceContent[slug] : undefined;

  if (!serviceInfo) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Serviço não encontrado</h1>
        <Link to={`/${lang}/servicos`} className="mt-6 inline-block text-blue-600 underline">Ver todos os serviços</Link>
      </div>
    );
  }

  const l = lang as 'pt' | 'en' | 'es';

  const headline = content?.headline[l] || getGenericContent(slug || '', serviceInfo.name, serviceInfo.desc, l).headline;
  const subheadline = content?.subheadline[l] || getGenericContent(slug || '', serviceInfo.name, serviceInfo.desc, l).subheadline;
  const pains = content?.pains[l] || [];
  const solution = content?.solution[l] || getGenericContent(slug || '', serviceInfo.name, serviceInfo.desc, l).solution;
  const forWhom = content?.forWhom[l] || [];
  const benefits = content?.benefits[l] || [];
  const process = content?.process[l] || [];
  const faq = content?.faq[l] || [];
  const ctaText = content?.ctaText[l] || getGenericContent(slug || '', serviceInfo.name, serviceInfo.desc, l).cta;

  const processLabels = { pt: ['Diagnóstico inicial', 'Análise dos documentos', 'Orientação e execução', 'Entrega e acompanhamento'], en: ['Initial assessment', 'Document analysis', 'Guidance and execution', 'Delivery and follow-up'], es: ['Diagnóstico inicial', 'Análisis de documentos', 'Orientación y ejecución', 'Entrega y seguimiento'] };

  const genericProcess = [
    { title: processLabels[l][0], desc: { pt: 'Conversa inicial para entender sua situação e necessidades.', en: 'Initial conversation to understand your situation and needs.', es: 'Conversación inicial para entender su situación y necesidades.' }[l] },
    { title: processLabels[l][1], desc: { pt: 'Coletamos e verificamos todos os documentos necessários.', en: 'We collect and verify all necessary documents.', es: 'Recopilamos y verificamos todos los documentos necesarios.' }[l] },
    { title: processLabels[l][2], desc: { pt: 'Executamos o serviço com precisão e dentro dos prazos.', en: 'We deliver the service with accuracy and on time.', es: 'Ejecutamos el servicio con precisión y dentro de los plazos.' }[l] },
    { title: processLabels[l][3], desc: { pt: 'Entregamos o resultado e ficamos à disposição para dúvidas.', en: 'We deliver the result and remain available for questions.', es: 'Entregamos el resultado y quedamos disponibles para consultas.' }[l] },
  ];

  const finalProcess = process.length > 0 ? process : genericProcess;

  const genericForWhom = {
    pt: ['Brasileiros nos EUA', 'Latinos e estrangeiros', 'Profissionais autônomos', 'Empresários e investidores'],
    en: ['Brazilians in the USA', 'Latinos and foreigners', 'Self-employed professionals', 'Business owners and investors'],
    es: ['Brasileños en EE.UU.', 'Latinos y extranjeros', 'Profesionales independientes', 'Empresarios e inversores'],
  };

  const finalForWhom = forWhom.length > 0 ? forWhom : genericForWhom[l];

  const genericBenefits = {
    pt: ['Clareza sobre suas obrigações fiscais', 'Cumprimento de prazos importantes', 'Redução de riscos e erros', 'Segurança nas decisões financeiras', 'Atendimento em português', 'Suporte contínuo e personalizado'],
    en: ['Clarity on your tax obligations', 'Meeting important deadlines', 'Reduced risks and errors', 'Confidence in financial decisions', 'Service in your language', 'Ongoing personalized support'],
    es: ['Claridad sobre sus obligaciones fiscales', 'Cumplimiento de plazos importantes', 'Reducción de riesgos y errores', 'Seguridad en las decisiones financieras', 'Atención en su idioma', 'Soporte continuo y personalizado'],
  };

  const finalBenefits = benefits.length > 0 ? benefits : genericBenefits[l];

  const genericFaq = {
    pt: [
      { q: 'Quanto tempo leva para concluir este serviço?', a: 'O prazo varia conforme a complexidade da situação. Na primeira conversa, informamos o tempo estimado com base no seu caso específico.' },
      { q: 'Quais documentos preciso providenciar?', a: 'A lista depende do serviço específico. Após a análise inicial, enviamos um checklist detalhado com tudo o que é necessário.' },
      { q: 'Atendem clientes fora da Flórida?', a: 'Sim. Atendemos de forma remota em todo o território americano com a mesma qualidade de serviço.' },
      { q: 'Como é feito o acompanhamento após a entrega?', a: 'Ficamos disponíveis para esclarecer dúvidas e orientar sobre eventuais comunicações do IRS ou órgãos estaduais.' },
      { q: 'Atendem em português?', a: 'Sim. Nosso atendimento é em português, inglês e espanhol, de acordo com a preferência do cliente.' },
    ],
    en: [
      { q: 'How long does it take to complete this service?', a: 'The timeline varies by complexity. In our initial conversation, we provide an estimated timeframe based on your specific case.' },
      { q: 'What documents do I need to provide?', a: 'The list depends on the specific service. After the initial analysis, we send a detailed checklist of everything needed.' },
      { q: 'Do you serve clients outside Florida?', a: 'Yes. We serve clients remotely throughout the United States with the same quality of service.' },
      { q: 'How is follow-up handled after delivery?', a: 'We remain available to answer questions and advise on any IRS or state agency communications.' },
      { q: 'Do you serve clients in English?', a: 'Yes. Our service is available in Portuguese, English and Spanish, according to client preference.' },
    ],
    es: [
      { q: '¿Cuánto tiempo tarda en completarse este servicio?', a: 'El plazo varía según la complejidad. En nuestra conversación inicial, informamos el tiempo estimado según su caso específico.' },
      { q: '¿Qué documentos necesito proporcionar?', a: 'La lista depende del servicio específico. Tras el análisis inicial, enviamos una lista detallada de todo lo necesario.' },
      { q: '¿Atienden clientes fuera de Florida?', a: 'Sí. Atendemos de forma remota en todo el territorio americano con la misma calidad de servicio.' },
      { q: '¿Cómo se realiza el seguimiento después de la entrega?', a: 'Quedamos disponibles para aclarar dudas y orientar sobre comunicaciones del IRS u organismos estatales.' },
      { q: '¿Atienden en español?', a: 'Sí. Nuestro servicio está disponible en portugués, inglés y español, según la preferencia del cliente.' },
    ],
  };

  const finalFaq = faq.length > 0 ? faq : genericFaq[l];

  const authorityPoints = {
    pt: ['Atendimento especializado em português, inglês e espanhol', 'Experiência com clientes brasileiros, latinos e estrangeiros nos EUA', 'Conhecimento profundo do sistema fiscal americano', 'Comunicação clara e transparente em cada etapa'],
    en: ['Specialized service in Portuguese, English and Spanish', 'Experience with Brazilian, Latino and foreign clients in the USA', 'Deep knowledge of the American tax system', 'Clear and transparent communication at every step'],
    es: ['Servicio especializado en portugués, inglés y español', 'Experiencia con clientes brasileños, latinos y extranjeros en EE.UU.', 'Conocimiento profundo del sistema fiscal americano', 'Comunicación clara y transparente en cada etapa'],
  };

  const sectionLabels = {
    pt: { pain: 'Dificuldades comuns', solution: 'Como a SF TAX USA ajuda', forWhom: 'Para quem é este serviço', benefits: 'Benefícios', process: 'Como funciona', authority: 'Por que a SF TAX USA', faq: 'Perguntas Frequentes', ctaTitle: 'Pronto para dar o próximo passo?' },
    en: { pain: 'Common challenges', solution: 'How SF TAX USA helps', forWhom: 'Who is this service for', benefits: 'Benefits', process: 'How it works', authority: 'Why SF TAX USA', faq: 'Frequently Asked Questions', ctaTitle: 'Ready to take the next step?' },
    es: { pain: 'Desafíos comunes', solution: 'Cómo SF TAX USA ayuda', forWhom: 'Para quién es este servicio', benefits: 'Beneficios', process: 'Cómo funciona', authority: 'Por qué SF TAX USA', faq: 'Preguntas Frecuentes', ctaTitle: '¿Listo para dar el siguiente paso?' },
  };
  const sl = sectionLabels[l];

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs text-gray-400 pt-4">
            <Link to={`/${lang}`} className="hover:text-gray-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to={`/${lang}/servicos`} className="hover:text-gray-600 transition-colors">{t.nav.services}</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600">{serviceInfo.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-4"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d3b5e 70%, #1a5276 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(200,168,75,0.15)', color: '#e0c070', border: '1px solid rgba(200,168,75,0.2)' }}>
            <span className="text-xl">{serviceInfo.icon}</span>
            SF TAX USA
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}>
            {headline}
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl leading-relaxed">{subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'service_hero', service: slug })}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold text-white transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ background: '#25D366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.cta.btn1}
            </a>
            <Link to={`/${lang}/contato`}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold transition-all hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
              {t.cta.btn2}
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Pain section */}
        {pains.length > 0 && (
          <section className="py-16">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle size={22} style={{ color: '#c8a84b' }} />
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{sl.pain}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pains.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl"
                  style={{ background: '#fff8f0', border: '1px solid #fde8c8' }}>
                  <span className="text-lg">⚠️</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Solution */}
        <section className="py-8">
          <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #f0f6ff, #e8f2ff)' }}>
            <div className="flex items-center gap-3 mb-5">
              <Lightbulb size={22} style={{ color: '#0d3b5e' }} />
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{sl.solution}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-base">{solution}</p>
          </div>
        </section>

        {/* For whom */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <Users size={22} style={{ color: '#c8a84b' }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{sl.forWhom}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {finalForWhom.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'white', border: '1.5px solid #eef2f7' }}>
                <CheckCircle size={16} style={{ color: '#c8a84b' }} />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-8">
          <div className="flex items-center gap-3 mb-8">
            <Star size={22} style={{ color: '#c8a84b' }} />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{sl.benefits}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {finalBenefits.map((b, i) => (
              <div key={i} className="p-5 rounded-2xl text-center"
                style={{ background: 'white', border: '1.5px solid #eef2f7', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <CheckCircle size={20} className="mx-auto mb-3" style={{ color: '#0d3b5e' }} />
                <p className="text-sm text-gray-700 font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{sl.process}</h2>
          <div className="space-y-4">
            {finalProcess.map((step, i) => (
              <div key={i} className="flex items-start gap-5 p-6 rounded-2xl"
                style={{ background: 'white', border: '1.5px solid #eef2f7' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0a1628, #0d3b5e)', fontFamily: 'var(--font-display)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authority */}
        <section className="py-8 mb-4">
          <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #0a1628, #0d3b5e)' }}>
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>{sl.authority}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {authorityPoints[l].map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={16} style={{ color: '#c8a84b' }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-blue-200">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>{sl.faq}</h2>
          <FAQAccordion items={finalFaq} />
        </section>

        {/* Service CTA */}
        <section className="py-8 mb-8">
          <div className="p-10 rounded-3xl text-center"
            style={{ background: 'linear-gradient(135deg, #f8fafc, #eef2f7)', border: '1.5px solid #e2e8f0' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#0a1628' }}>
              {sl.ctaTitle}
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">{ctaText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'service_cta', service: slug })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:-translate-y-1"
                style={{ background: '#25D366' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t.cta.btn1}
              </a>
              <Link to={`/${lang}/contato`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all hover:-translate-y-1"
                style={{ background: '#0a1628', color: 'white' }}>
                {t.cta.btn2} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
