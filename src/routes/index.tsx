import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, Building2, BookOpen, Users, TrendingUp, Receipt, Quote, Crown, Globe2, Calculator, Landmark, Home, FileSignature, RefreshCw } from "lucide-react";
import heroImg from "@/assets/hero-orlando.jpg";
import ceoImg from "@/assets/ceo-portrait.jpg";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atlântico Contábil — Contabilidade para brasileiros na Flórida" },
      {
        name: "description",
        content:
          "Contabilidade estratégica em Orlando para brasileiros e empresas nos EUA. Tax, abertura de LLC, escrita contábil e planejamento tributário. Fale no WhatsApp.",
      },
      { property: "og:title", content: "Atlântico Contábil — Contabilidade para brasileiros na Flórida" },
      { property: "og:description", content: "Tax, abertura de empresas, escrita contábil e planejamento tributário em Orlando." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const iconMap = { FileText, Building2, BookOpen, Users, TrendingUp, Receipt };

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold tracking-wide mb-6">
              <span className="size-1.5 rounded-full bg-brand" /> Orlando · Flórida · EUA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance mb-6">
              Sua ponte contábil entre o <span className="text-brand">Brasil</span> e os <span className="text-brand">Estados Unidos</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Contabilidade estratégica, tax planning e abertura de empresas para brasileiros que crescem nos EUA com segurança jurídica e eficiência tributária.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white py-3 px-5 rounded-md text-sm font-semibold shadow-sm transition-colors"
              >
                Falar com um especialista
                <ArrowRight className="size-4" />
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 bg-white border border-border hover:border-brand hover:text-brand text-foreground py-3 px-5 rounded-md text-sm font-semibold transition-colors"
              >
                Ver serviços
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Skyline de Orlando, Flórida"
              width={1600}
              height={1200}
              className="w-full aspect-[5/4] object-cover rounded-2xl shadow-xl ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-5 max-w-xs hidden md:block">
              <div className="text-3xl font-semibold text-brand">+500</div>
              <p className="text-xs text-muted-foreground mt-1">Clientes brasileiros atendidos nos EUA</p>
            </div>
          </div>
        </div>

        {/* Strip de métricas */}
        <div className="border-t border-border bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
            {[
              { v: "+500", l: "Clientes ativos" },
              { v: "15 anos", l: "De experiência no mercado" },
              { v: "Bilíngue", l: "PT · EN · ES" },
              { v: "24h", l: "Tempo médio de resposta" },
            ].map((m) => (
              <div key={m.l} className="py-8 px-2 border-r border-border last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r">
                <p className="text-2xl md:text-3xl font-semibold text-brand">{m.v}</p>
                <p className="text-[11px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mt-1">{m.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">Soluções completas</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-balance max-w-2xl">
                Tudo o que sua empresa precisa para operar nos EUA — em um só lugar.
              </h2>
            </div>
            <Link to="/servicos" className="text-sm font-semibold text-brand hover:text-brand-hover inline-flex items-center gap-1">
              Conheça todas as soluções <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <Link
                  key={s.slug}
                  to="/servicos"
                  className="group p-7 rounded-2xl bg-white ring-1 ring-black/5 hover:ring-brand/30 hover:-translate-y-0.5 transition-all"
                >
                  <div className="size-11 rounded-lg bg-brand-soft text-brand grid place-items-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO / Quem somos */}
      <section className="py-20 lg:py-28 px-6 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={ceoImg}
              alt="CEO da Atlântico Contábil"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full max-w-md aspect-[4/5] object-cover rounded-2xl ring-1 ring-black/5 shadow-lg"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">Liderança</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-balance">
              Mais do que contabilidade. Estratégia para você crescer com confiança nos EUA.
            </h2>
            <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 border-l-2 border-brand pl-5 italic">
              “Nossa missão é eliminar a fricção burocrática da expansão internacional. Não apenas declaramos impostos — construímos a estrutura financeira para o empreendedor brasileiro prosperar nos Estados Unidos.”
            </blockquote>
            <p className="font-semibold">Emerson Correia, CPA</p>
            <p className="text-sm text-muted-foreground mb-6">Fundador & CEO — Orlando, Flórida</p>
            <ul className="space-y-3 mb-8">
              {[
                "Atendimento bilíngue PT · EN · ES",
                "Mais de 15 anos de experiência no mercado americano",
                "Foco em pessoas físicas e empresas brasileiras nos EUA",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Link to="/sobre" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">
              Conheça a Atlântico <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 lg:py-28 px-6 bg-brand-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">Prova social</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-balance max-w-2xl mx-auto">
              Centenas de brasileiros confiam na Atlântico para crescer nos EUA.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "Juliana Menezes", r: "CEO, Apex Logistics", t: "Transferimos a sede da empresa para Orlando sem dor de cabeça. O conhecimento dos dois sistemas tributários é incomparável." },
              { n: "Lucas Andrade", r: "Founder, TechRio Solutions", t: "Profissionais, ágeis e sempre disponíveis. Funciona como um departamento interno da nossa empresa." },
              { n: "Bruno Mastrorosa", r: "Cliente PF", t: "Desde a fundação confio em todos os serviços contábeis com eles. Equipe altamente qualificada e atenciosa." },
            ].map((d) => (
              <figure key={d.n} className="bg-white p-7 rounded-2xl ring-1 ring-black/5">
                <Quote className="size-6 text-brand mb-4" />
                <blockquote className="text-foreground/90 leading-relaxed mb-6">“{d.t}”</blockquote>
                <figcaption>
                  <p className="text-sm font-semibold">{d.n}</p>
                  <p className="text-xs text-muted-foreground">{d.r}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
            Pronto para crescer nos EUA sem dor de cabeça com a contabilidade?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
            Agende uma conversa gratuita. Em 30 minutos você sai com clareza sobre o próximo passo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Falar no WhatsApp agora
            </a>
            <Link to="/contato" className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors">
              Enviar mensagem pelo site
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
