import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  Mail,
  ShieldCheck,
  Sparkles,
  HelpCircle,
  FileText,
  Building2,
  BookOpen,
  Users,
  TrendingUp,
  Receipt,
  Crown,
  Globe2,
  Calculator,
  Home,
  Landmark,
  FileSignature,
  RefreshCw,
  Star,
  Clock,
  Award,
  ChevronDown,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { services, site } from "@/lib/site";
import { serviceContent } from "@/lib/serviceContent";

const iconMap = {
  FileText,
  Building2,
  BookOpen,
  Users,
  TrendingUp,
  Receipt,
  Crown,
  Globe2,
  Calculator,
  Home,
  Landmark,
  FileSignature,
  RefreshCw,
};

// Imagens temáticas por serviço (Unsplash — licença free, sem atribuição)
const serviceImages: Record<string, string> = {
  "preparacao-impostos":
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=80",
  "abertura-empresas":
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80",
  "escrita-contabil":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
  "folha-pagamento":
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&auto=format&fit=crop&q=80",
  "planejamento-tributario":
    "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=900&auto=format&fit=crop&q=80",
  "sales-tax":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format&fit=crop&q=80",
  "consultoria-premium":
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
  "tributacao-internacional":
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&auto=format&fit=crop&q=80",
  "imposto-de-renda-estimado":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&auto=format&fit=crop&q=80",
  firpta:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80",
  fbar: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=900&auto=format&fit=crop&q=80",
  "quit-claim-deed":
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=900&auto=format&fit=crop&q=80",
  "recadastramento-anual-florida":
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop&q=80",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&auto=format&fit=crop&q=80";

// Depoimentos fixos para prova social
const testimonials = [
  {
    name: "Bruno Mastrorosa",
    role: "Empresário · Orlando, FL",
    text: "Finalmente encontrei uma equipe que entende a realidade de quem tem negócio no Brasil e nos EUA ao mesmo tempo. Me pouparam muito dinheiro e muito estresse.",
    stars: 5,
  },
  {
    name: "Renata Oliveira",
    role: "Profissional Autônoma · Miami, FL",
    text: "Declarei meu imposto nos EUA pela primeira vez com eles. Me explicaram tudo com calma, em português, e descobri que tinha direito a restituição que eu nem sabia.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Investidor Imobiliário · Tampa, FL",
    text: "Profissionalismo e disponibilidade. Sempre que precisei tirar uma dúvida, tive resposta rápida. Não troco por nada.",
    stars: 5,
  },
];

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    const content = serviceContent[params.slug];
    if (!service || !content) throw notFound();
    return { service, content };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Serviço — Atlântico Contábil" }] };
    const { service, content } = loaderData;
    const title = `${service.title} — Atlântico Contábil | Orlando, FL`;
    return {
      meta: [
        { title },
        { name: "description", content: content.emotionalHook },
        { property: "og:title", content: title },
        { property: "og:description", content: content.emotionalHook },
        { property: "og:url", content: `/servicos/${service.slug}` },
        { property: "og:image", content: serviceImages[service.slug] ?? fallbackImage },
      ],
      links: [{ rel: "canonical", href: `/servicos/${service.slug}` }],
    };
  },
  component: ServicoDetailPage,
  notFoundComponent: () => (
    <div className="px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold mb-3">Serviço não encontrado</h1>
      <Link to="/servicos" className="text-brand hover:text-brand-hover font-medium">
        Ver todos os serviços →
      </Link>
    </div>
  ),
  errorComponent: () => (
    <div className="px-6 py-32 text-center">
      <h1 className="text-2xl font-semibold mb-3">Algo deu errado</h1>
      <Link to="/servicos" className="text-brand hover:text-brand-hover font-medium">
        Voltar para serviços →
      </Link>
    </div>
  ),
});

function ServicoDetailPage() {
  const data = Route.useLoaderData() as {
    service: (typeof services)[number];
    content: (typeof serviceContent)[string];
  };
  const { service, content } = data;
  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const heroImage = serviceImages[service.slug] ?? fallbackImage;

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Imagem + Headline + CTAs
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={service.title}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Gradiente sobre a imagem */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-gray-950/20" />
        </div>

        {/* Breadcrumb */}
        <div className="relative z-10 px-6 pt-8">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/servicos"
              className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
            >
              ← Todos os serviços
            </Link>
          </div>
        </div>

        {/* Conteúdo do hero */}
        <div className="relative z-10 px-6 pb-16 pt-8 lg:pb-24">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-end">
            {/* Texto esquerda */}
            <div className="lg:col-span-3">
              {/* Badge do serviço */}
              <div className="inline-flex items-center gap-2 bg-brand/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5 backdrop-blur">
                <Icon className="size-3.5" />
                {service.title}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
                {content.emotionalHook}
              </h1>

              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
                {content.story[0]}
              </p>

              {/* CTAs principais */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contato-servico"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5"
                >
                  Falar com especialista <ArrowRight className="size-4" />
                </a>
                <a
                  href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                    `Olá! Tenho interesse em ${service.title}.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb857] text-white px-7 py-3.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-4" /> WhatsApp agora
                </a>
              </div>
            </div>

            {/* Card direita — mini-formulário rápido */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                <p className="text-white font-bold text-lg mb-1">Consulta gratuita</p>
                <p className="text-white/70 text-sm mb-5">Resposta em até 24h, em português.</p>
                <QuickLeadForm serviceTitle={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR — Selos de confiança
      ═══════════════════════════════════════ */}
      <section className="bg-gray-950 border-b border-white/10 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-5 items-center">
          {[
            { icon: BadgeCheck, label: "Licensed & Certified", sub: "Flórida · IRS Authorized" },
            { icon: Users, label: "+500 clientes atendidos", sub: "Brasileiros nos EUA" },
            { icon: Clock, label: "Resposta em 24h", sub: "Atendimento em português" },
            { icon: Award, label: "+15 anos de experiência", sub: "Contabilidade internacional" },
            { icon: ShieldCheck, label: "Sigilo garantido", sub: "Seus dados protegidos" },
          ].map(({ icon: TrustIcon, label, sub }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-brand/20 text-brand grid place-items-center shrink-0">
                <TrustIcon className="size-4" />
              </div>
              <div>
                <p className="text-white text-xs font-bold leading-none mb-0.5">{label}</p>
                <p className="text-white/50 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          URGENCY NOTE
      ═══════════════════════════════════════ */}
      {content.urgencyNote && (
        <div className="px-6 py-4 bg-amber-50 border-b border-amber-200">
          <div className="max-w-5xl mx-auto flex items-start gap-3">
            <Zap className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed font-medium">{content.urgencyNote}</p>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════
          PARA QUEM É + STORY
      ═══════════════════════════════════════ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Coluna esquerda — Para quem é */}
          <div>
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
              Este serviço é para você
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Se uma dessas situações é sua, você está no lugar certo.
            </h2>
            <div className="space-y-3">
              {content.whoIsFor?.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-brand-soft/30 border border-brand/10 hover:border-brand/30 transition-colors"
                >
                  <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna direita — Story completo */}
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p className="text-xs font-bold text-brand uppercase tracking-widest">
              Entenda o cenário
            </p>
            {content.story.map((p, i) => (
              <p key={i} className={i === 0 ? "text-lg text-foreground font-medium" : "text-base"}>
                {p}
              </p>
            ))}
            <a
              href="#contato-servico"
              className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:gap-3 transition-all"
            >
              Quero resolver minha situação <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FAIXA — Destaque no meio da página
      ═══════════════════════════════════════ */}
      <section className="px-6 py-14 bg-brand relative overflow-hidden">
        {/* Detalhe visual */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-1">
              Consulta gratuita
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
              Tem dúvidas sobre {service.title.toLowerCase()}?<br className="hidden md:block" /> Fale
              com um especialista agora.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                `Olá! Tenho interesse em ${service.title}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-all shadow-lg"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
            <a
              href="#contato-servico"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-lg text-sm transition-all"
            >
              Formulário de contato <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DORES — Identificação com o cliente
      ═══════════════════════════════════════ */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
              Você se reconhece aqui?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Essas preocupações são mais comuns do que você imagina.
            </h2>
            <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
              Se você pensou em alguma dessas frases, nosso time já resolveu situações muito parecidas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.pains.map((p) => (
              <div
                key={p}
                className="bg-white rounded-2xl ring-1 ring-black/6 p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="size-8 rounded-full bg-red-50 text-red-500 grid place-items-center shrink-0 mt-0.5">
                  <HelpCircle className="size-4" />
                </div>
                <p className="text-foreground/90 leading-relaxed italic">"{p}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#contato-servico"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-8 py-4 rounded-xl font-bold text-sm shadow-lg shadow-brand/20 hover:-translate-y-0.5 transition-all"
            >
              Quero resolver isso agora <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          COMO AJUDAMOS — Com imagem lateral
      ═══════════════════════════════════════ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem */}
          <div className="relative">
            <img
              src={heroImage}
              alt={`${service.title} - Como ajudamos`}
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-xl"
              loading="lazy"
            />
            {/* Badge sobre a imagem */}
            <div className="absolute -bottom-5 -right-4 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3">
              <div className="size-10 rounded-full bg-brand text-white grid place-items-center">
                <BadgeCheck className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Atendimento</p>
                <p className="font-bold text-sm">Em português · 24h</p>
              </div>
            </div>
          </div>

          {/* Lista como ajudamos */}
          <div>
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
              Como trabalhamos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Um time que entende sua realidade — e age por você.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mais do que executar um serviço, somos parceiros do seu patrimônio e do seu negócio.
              Cada caso é tratado com atenção individual, em português, com total transparência.
            </p>
            <ul className="space-y-3">
              {content.howWeHelp.map((h, i) => (
                <li
                  key={h}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-soft/30 transition-colors"
                >
                  <div className="size-7 rounded-full bg-brand text-white grid place-items-center shrink-0 text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm leading-relaxed text-foreground">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:gap-3 transition-all"
              >
                Conheça nossa história <ArrowRight className="size-4" />
              </Link>
              <span className="text-muted-foreground text-sm">·</span>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BENEFÍCIOS
      ═══════════════════════════════════════ */}
      <section className="px-6 py-20 bg-gray-950 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
              O que você ganha
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Resultado concreto — não promessa vaga.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-brand/30 transition-all"
              >
                <div className="size-12 rounded-xl bg-brand/20 text-brand grid place-items-center mb-5">
                  {i === 0 ? (
                    <Sparkles className="size-6" />
                  ) : i === 1 ? (
                    <ShieldCheck className="size-6" />
                  ) : (
                    <TrendingUp className="size-6" />
                  )}
                </div>
                <h3 className="font-bold text-lg mb-3 text-white">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DEPOIMENTOS — Prova social
      ═══════════════════════════════════════ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
              Quem já confiou em nós
            </p>
            <h2 className="text-3xl font-bold">O que dizem nossos clientes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 flex-1 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Google Rating */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground text-sm">no Google · +47 avaliações</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      {content.faq.length > 0 && (
        <section className="px-6 py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Dúvidas sobre {service.title.toLowerCase()}
              </h2>
              <p className="text-muted-foreground mt-3">
                Respondemos as perguntas mais comuns. Não achou a sua?{" "}
                <a href="#contato-servico" className="text-brand font-semibold hover:underline">
                  Fale conosco.
                </a>
              </p>
            </div>
            <div className="space-y-3">
              {content.faq.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white rounded-2xl ring-1 ring-black/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-3 cursor-pointer p-6">
                    <span className="font-semibold text-left">{f.q}</span>
                    <ChevronDown className="size-5 text-brand shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {f.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          OUTROS SERVIÇOS
      ═══════════════════════════════════════ */}
      <section className="px-6 py-16 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Outros serviços que podem te ajudar</h2>
            <Link to="/servicos" className="text-sm text-brand font-semibold hover:underline hidden sm:block">
              Ver todos →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((s) => {
                const OtherIcon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <Link
                    key={s.slug}
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="group flex items-start gap-3 p-4 rounded-xl ring-1 ring-black/5 hover:ring-brand/30 hover:bg-brand-soft/20 transition-all"
                  >
                    <div className="size-9 rounded-lg bg-brand-soft text-brand grid place-items-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                      <OtherIcon className="size-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm leading-tight mb-1">{s.title}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{s.short}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA FINAL + FORMULÁRIO
      ═══════════════════════════════════════ */}
      <section id="contato-servico" className="px-6 py-20 bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Lado esquerdo */}
          <div className="lg:col-span-2 text-white">
            <p className="text-xs font-bold text-brand uppercase tracking-widest mb-3">
              Próximo passo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {content.ctaHeadline}
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">{content.ctaSubheadline}</p>

            {/* Canais de contato */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Tenho interesse em ${service.title}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-xl hover:opacity-95 transition font-semibold"
              >
                <MessageCircle className="size-5 shrink-0" />
                <div>
                  <p className="text-xs opacity-80">Resposta mais rápida</p>
                  <p className="font-bold">WhatsApp {site.whatsappDisplay}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
                <Phone className="size-5 text-brand shrink-0" />
                <div className="text-sm">
                  <p className="text-white/60 text-xs">USA · {site.phoneUSA}</p>
                  <p className="text-white/60 text-xs">BRA · {site.phoneBRA}</p>
                </div>
              </div>
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Interesse em ${service.title}`)}`}
                className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:border-brand/30 transition"
              >
                <Mail className="size-5 text-brand shrink-0" />
                <span className="text-sm text-white/70 break-all">{site.email}</span>
              </a>
            </div>

            {/* Garantia */}
            <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="size-5 text-brand" />
                <span className="font-bold text-sm text-white">Sem compromisso</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Nossa primeira conversa é uma consulta gratuita. Sem custo, sem pressão. Você
                entende o que precisa e decide com calma.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-3">
            <ServiceContactForm serviceTitle={service.title} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════
   MINI FORMULÁRIO DO HERO (quick lead)
══════════════════════════════════════════ */
function QuickLeadForm({ serviceTitle }: { serviceTitle: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = fd.get("nome") as string;
    const telefone = fd.get("telefone") as string;
    if (!nome || !telefone) return;
    const text = `Olá! Me chamo *${nome}* e tenho interesse em *${serviceTitle}*. Meu WhatsApp: ${telefone}`;
    window.open(
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  if (sent) {
    return (
      <div className="text-center py-4">
        <p className="text-white font-bold">✅ Mensagem enviada!</p>
        <p className="text-white/60 text-sm mt-1">Abrimos o WhatsApp para você.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="nome"
        placeholder="Seu nome"
        required
        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand focus:bg-white/15 transition"
      />
      <input
        name="telefone"
        placeholder="WhatsApp / Telefone"
        required
        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-brand focus:bg-white/15 transition"
      />
      <button
        type="submit"
        className="w-full bg-brand hover:bg-brand-hover text-white py-3 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20"
      >
        Quero consulta gratuita →
      </button>
      <p className="text-white/40 text-xs text-center">Sem spam. Atendimento humano.</p>
    </form>
  );
}

/* ══════════════════════════════════════════
   FORMULÁRIO COMPLETO DO RODAPÉ
══════════════════════════════════════════ */
const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(6, "Telefone inválido").max(40),
  mensagem: z.string().trim().min(10, "Conte um pouco mais sobre sua situação").max(1500),
});

function ServiceContactForm({ serviceTitle }: { serviceTitle: string }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      nome: fd.get("nome"),
      email: fd.get("email"),
      telefone: fd.get("telefone"),
      mensagem: fd.get("mensagem"),
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = String(issue.path[0]);
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      setSubmitting(false);
      return;
    }
    setErrors({});

    const text =
      `Olá! Tenho interesse em *${serviceTitle}*.%0A%0A` +
      `*Nome:* ${parsed.data.nome}%0A` +
      `*E-mail:* ${parsed.data.email}%0A` +
      `*Telefone:* ${parsed.data.telefone}%0A%0A` +
      `${encodeURIComponent(parsed.data.mensagem)}`;
    window.open(`https://wa.me/${site.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    setSubmitting(false);
  }

  if (sent) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center text-white">
        <div className="size-16 mx-auto rounded-full bg-brand/20 text-brand grid place-items-center mb-5">
          <MessageCircle className="size-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Mensagem enviada!</h3>
        <p className="text-white/60 max-w-md mx-auto text-sm">
          Abrimos o WhatsApp com sua mensagem. Caso não tenha aberto,{" "}
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-bold hover:underline"
          >
            clique aqui
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-9 space-y-5"
      noValidate
    >
      <div>
        <h3 className="text-xl font-bold text-white mb-1">
          Fale com um especialista em {serviceTitle}
        </h3>
        <p className="text-sm text-white/60">Resposta em até 24h · Atendimento em português</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <DarkFormField label="Nome completo" name="nome" error={errors.nome} required />
        <DarkFormField label="E-mail" name="email" type="email" error={errors.email} required />
        <DarkFormField label="WhatsApp / Telefone" name="telefone" error={errors.telefone} required />
        <DarkFormField
          label="Serviço de interesse"
          name="servico"
          defaultValue={serviceTitle}
          readOnly
        />
      </div>

      <DarkFormTextarea
        label="Conte sua situação"
        name="mensagem"
        error={errors.mensagem}
        placeholder={`Ex.: Quero entender como ${serviceTitle.toLowerCase()} pode ajudar no meu caso...`}
        required
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-brand hover:bg-brand-hover disabled:opacity-60 text-white py-4 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-brand/20 inline-flex items-center justify-center gap-2"
      >
        {submitting ? "Enviando..." : <>Enviar mensagem <ArrowRight className="size-4" /></>}
      </button>
      <p className="text-xs text-white/40 text-center">
        🔒 Seus dados são tratados com sigilo e nunca compartilhados.
      </p>
    </form>
  );
}

function DarkFormField({
  label, name, type = "text", required, error, defaultValue, readOnly,
}: {
  label: string; name: string; type?: string; required?: boolean;
  error?: string; defaultValue?: string; readOnly?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5 text-white/80">
        {label}{required && <span className="text-brand"> *</span>}
      </span>
      <input
        type={type} name={name} defaultValue={defaultValue} readOnly={readOnly}
        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand transition ${
          error ? "border-red-500" : "border-white/15"
        } ${readOnly ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      {error && <span className="block mt-1 text-xs text-red-400">{error}</span>}
    </label>
  );
}

function DarkFormTextarea({
  label, name, required, error, placeholder,
}: {
  label: string; name: string; required?: boolean; error?: string; placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5 text-white/80">
        {label}{required && <span className="text-brand"> *</span>}
      </span>
      <textarea
        name={name} rows={5} placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-lg bg-white/5 border text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand resize-y transition ${
          error ? "border-red-500" : "border-white/15"
        }`}
      />
      {error && <span className="block mt-1 text-xs text-red-400">{error}</span>}
    </label>
  );
}
