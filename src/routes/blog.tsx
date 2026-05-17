import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Atlântico Contábil | Tax e contabilidade nos EUA" },
      {
        name: "description",
        content:
          "Conteúdos sobre tax return, abertura de empresas, planejamento tributário e contabilidade na Flórida para brasileiros nos EUA.",
      },
      { property: "og:title", content: "Blog — Atlântico Contábil" },
      { property: "og:description", content: "Insights sobre contabilidade, tax e abertura de empresas nos EUA." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  {
    cat: "Tax",
    title: "Entenda a preparação de declarações de imposto de renda nos Estados Unidos",
    excerpt:
      "Da mesma forma como acontece no Brasil, é realizado anualmente a declaração do Imposto de Renda nos EUA. Veja o que muda.",
    date: "12 Mar 2025",
  },
  {
    cat: "Internacional",
    title: "Declaração de Capitais Brasileiros no Exterior — CBE",
    excerpt:
      "Você possui bens, imóveis, participações ou investimentos fora do Brasil? Saiba quando e como declarar à CBE.",
    date: "05 Mar 2025",
  },
  {
    cat: "Empresas",
    title: "Como abrir uma empresa nos EUA em 2025",
    excerpt:
      "Já pensou em dolarizar seu patrimônio e ganhar em dólar? Passo a passo da abertura de LLC ou Corporation.",
    date: "21 Fev 2025",
  },
  {
    cat: "Planejamento",
    title: "Bitributação Brasil-EUA: como evitar pagar imposto duas vezes",
    excerpt:
      "Tratados, créditos fiscais e a estrutura certa para você não pagar imposto a mais do que deveria.",
    date: "10 Fev 2025",
  },
  {
    cat: "Sales Tax",
    title: "Sales Tax na Flórida: o guia prático para o seu e-commerce",
    excerpt:
      "Quando coletar, como recolher e o que muda dependendo do tipo de produto ou serviço vendido.",
    date: "28 Jan 2025",
  },
  {
    cat: "Folha",
    title: "W-2 ou 1099: qual o regime certo para contratar nos EUA",
    excerpt:
      "Diferenças, riscos e quando faz sentido contratar como employee ou independent contractor.",
    date: "15 Jan 2025",
  },
];

function BlogPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-4">Conteúdo</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance mb-6">
            Insights sobre contabilidade e tax nos EUA.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Artigos práticos para ajudar você a tomar decisões melhores sobre sua empresa e seus impostos nos Estados Unidos.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group bg-white rounded-2xl ring-1 ring-black/5 overflow-hidden hover:ring-brand/30 transition-all flex flex-col">
              <div className="aspect-[16/10] bg-gradient-to-br from-brand-soft to-brand/10 grid place-items-center">
                <span className="text-brand/30 font-semibold text-sm uppercase tracking-widest">{p.cat}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="font-semibold text-brand">{p.cat}</span>
                  <span className="flex items-center gap-1"><Calendar className="size-3" /> {p.date}</span>
                </div>
                <h2 className="text-lg font-semibold mb-3 leading-snug group-hover:text-brand transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.excerpt}</p>
                <a href="#" className="text-sm font-semibold text-brand inline-flex items-center gap-1">
                  Ler artigo <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto bg-brand-soft rounded-2xl p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Receba nossos conteúdos por e-mail</h2>
          <p className="text-muted-foreground mb-6">Novidades sobre tax, prazos e oportunidades — sem spam.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-md bg-white border border-border focus:outline-none focus:ring-2 focus:ring-brand text-sm"
            />
            <button className="bg-brand hover:bg-brand-hover text-white px-5 py-3 rounded-md text-sm font-semibold transition-colors">
              Assinar
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
