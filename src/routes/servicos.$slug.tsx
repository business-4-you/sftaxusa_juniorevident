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

  return (
    <>
      {/* HERO */}
      <section className="px-6 pt-16 pb-14 lg:pt-24 lg:pb-20 border-b border-border bg-gradient-to-b from-brand-soft/40 to-background">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-brand mb-8"
          >
            ← Todos os serviços
          </Link>
          <div className="flex items-start gap-5 mb-6">
            <div className="size-14 rounded-xl bg-brand text-white grid place-items-center shrink-0 shadow-sm">
              <Icon className="size-7" />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-2">
                {service.title}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance leading-tight">
                {content.emotionalHook}
              </h1>
            </div>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {content.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato-servico"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Quero falar com um especialista <ArrowRight className="size-4" />
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                `Olá! Tenho interesse em ${service.title}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp hover:opacity-95 text-white px-6 py-3 rounded-md text-sm font-semibold transition"
            >
              <MessageCircle className="size-4" /> WhatsApp direto
            </a>
          </div>
<<<<<<< HEAD

          {/* URGENCY NOTE */}
          {content.urgencyNote && (
            <div className="mt-8 max-w-3xl bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-900 leading-relaxed">
              {content.urgencyNote}
            </div>
          )}
        </div>
      </section>

      {/* PARA QUEM É ESTE SERVIÇO */}
      {content.whoIsFor && content.whoIsFor.length > 0 && (
        <section className="px-6 py-14 bg-white border-b border-border">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">Para quem é este serviço</p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-balance">
              Este serviço foi feito para você se…
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {content.whoIsFor.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-brand-soft/40 rounded-xl p-4">
                  <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

=======
        </div>
      </section>

>>>>>>> 2f8349a9d1e612bad415713dfc4784e77249e6ea
      {/* DORES */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
              Você se reconhece aqui?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-balance">
              Se uma dessas frases é sua, podemos ajudar agora.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {content.pains.map((p) => (
              <div
                key={p}
                className="bg-white rounded-xl ring-1 ring-black/5 p-5 flex items-start gap-3"
              >
                <span className="mt-1 size-2 rounded-full bg-brand shrink-0" />
                <p className="text-foreground/90 leading-relaxed">"{p}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO AJUDAMOS */}
      <section className="px-6 py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
              Como ajudamos
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-balance">
              Um time que entende sua realidade — e age por você.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mais do que executar serviço, somos parceiros do seu negócio e do seu patrimônio.
              Tratamos cada caso com atenção, em português, com transparência total.
            </p>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover"
            >
              Conheça nossa história <ArrowRight className="size-4" />
            </Link>
          </div>
          <ul className="space-y-3">
            {content.howWeHelp.map((h) => (
              <li
                key={h}
                className="flex items-start gap-3 bg-white p-4 rounded-xl ring-1 ring-black/5"
              >
                <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
              O que você ganha
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-balance">
              Resultado concreto, não promessa vaga.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl ring-1 ring-black/5 p-7 hover:shadow-md transition-shadow"
              >
                <div className="size-11 rounded-lg bg-brand-soft text-brand grid place-items-center mb-4">
                  {i === 0 ? (
                    <Sparkles className="size-5" />
                  ) : i === 1 ? (
                    <ShieldCheck className="size-5" />
                  ) : (
                    <TrendingUp className="size-5" />
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {content.faq.length > 0 && (
        <section className="px-6 py-20 bg-secondary/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
                Perguntas frequentes
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">Dúvidas comuns sobre {service.title}</h2>
            </div>
            <div className="space-y-3">
              {content.faq.map((f) => (
                <details
                  key={f.q}
                  className="group bg-white rounded-xl ring-1 ring-black/5 p-5 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-start gap-3 cursor-pointer">
                    <HelpCircle className="size-5 text-brand shrink-0 mt-0.5" />
                    <span className="font-semibold flex-1">{f.q}</span>
                  </summary>
                  <p className="mt-3 pl-8 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA + FORMULÁRIO */}
      <section id="contato-servico" className="px-6 py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">
              Próximo passo
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
              {content.ctaHeadline}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {content.ctaSubheadline}
            </p>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
                  `Olá! Tenho interesse em ${service.title}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-whatsapp text-white p-4 rounded-xl hover:opacity-95 transition"
              >
                <MessageCircle className="size-5" />
                <div>
                  <p className="text-xs uppercase tracking-wider opacity-90 font-semibold">
                    Resposta mais rápida
                  </p>
                  <p className="font-semibold">WhatsApp {site.whatsappDisplay}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl ring-1 ring-black/5">
                <div className="size-9 rounded-md bg-brand-soft text-brand grid place-items-center">
                  <Phone className="size-4" />
                </div>
                <div className="text-sm">
                  <p className="text-muted-foreground">USA · {site.phoneUSA}</p>
                  <p className="text-muted-foreground">BRA · {site.phoneBRA}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl ring-1 ring-black/5">
                <div className="size-9 rounded-md bg-brand-soft text-brand grid place-items-center">
                  <Mail className="size-4" />
                </div>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`Interesse em ${service.title}`)}`}
                  className="text-sm hover:text-brand break-all"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ServiceContactForm serviceTitle={service.title} />
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- Formulário ---------------- */

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

    // Abre WhatsApp com mensagem pré-preenchida (canal preferencial)
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
      <div className="bg-white rounded-2xl ring-1 ring-black/5 p-10 text-center">
        <div className="size-14 mx-auto rounded-full bg-brand-soft text-brand grid place-items-center mb-5">
          <MessageCircle className="size-7" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Mensagem enviada!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Abrimos o WhatsApp com sua mensagem. Caso não tenha aberto automaticamente,{" "}
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand font-semibold hover:underline"
          >
            clique aqui
          </a>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl ring-1 ring-black/5 p-7 md:p-9 space-y-5"
      noValidate
    >
      <div>
        <h3 className="text-xl font-semibold mb-1">Fale com um especialista em {serviceTitle}</h3>
        <p className="text-sm text-muted-foreground">
          Resposta em até 24h. Atendimento em português, sem compromisso.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Nome completo" name="nome" error={errors.nome} required />
        <FormField label="E-mail" name="email" type="email" error={errors.email} required />
        <FormField label="WhatsApp / Telefone" name="telefone" error={errors.telefone} required />
        <FormField label="Serviço de interesse" name="servico" defaultValue={serviceTitle} readOnly />
      </div>

      <FormTextarea
        label="Conte sua situação"
        name="mensagem"
        error={errors.mensagem}
        placeholder={`Ex.: Quero entender como ${serviceTitle.toLowerCase()} pode ajudar no meu caso...`}
        required
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-brand hover:bg-brand-hover disabled:opacity-60 text-white py-3 rounded-md text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2"
      >
        {submitting ? "Enviando..." : (
          <>
            Enviar mensagem <ArrowRight className="size-4" />
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Seus dados são tratados com sigilo e não são compartilhados com terceiros.
      </p>
    </form>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
  error,
  defaultValue,
  readOnly,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  defaultValue?: string;
  readOnly?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        readOnly={readOnly}
        className={`w-full px-4 py-2.5 rounded-md bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-brand ${
          error ? "border-destructive" : "border-border"
        } ${readOnly ? "bg-secondary/60 cursor-not-allowed" : ""}`}
      />
      {error && <span className="block mt-1 text-xs text-destructive">{error}</span>}
    </label>
  );
}

function FormTextarea({
  label,
  name,
  required,
  error,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-brand"> *</span>}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 rounded-md bg-background border text-sm focus:outline-none focus:ring-2 focus:ring-brand resize-y ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <span className="block mt-1 text-xs text-destructive">{error}</span>}
    </label>
  );
}
