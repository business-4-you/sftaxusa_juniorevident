import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ceoImg from "@/assets/ceo-portrait.jpg";
import teamImg from "@/assets/team-office.jpg";
import { site } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Atlântico — Contabilidade estratégica em Orlando, FL" },
      {
        name: "description",
        content:
          "Conheça a Atlântico Contábil: equipe bilíngue dedicada a ajudar brasileiros e empresas internacionais a crescer com segurança nos Estados Unidos.",
      },
      { property: "og:title", content: "Sobre a Atlântico Contábil" },
      { property: "og:description", content: "Equipe bilíngue em Orlando ajudando brasileiros a prosperar nos EUA." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-4">Quem somos</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance mb-6">
            Estratégia contábil construída para brasileiros nos Estados Unidos.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Desde 2009, ajudamos pessoas físicas e empresas a estruturar suas operações na Flórida com segurança jurídica, eficiência tributária e atendimento humano em português.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <img
            src={teamImg}
            alt="Time da Atlântico Contábil"
            loading="lazy"
            width={1600}
            height={1100}
            className="w-full aspect-[16/9] object-cover rounded-2xl ring-1 ring-black/5"
          />
        </div>
      </section>

      <section className="px-6 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Nossa missão</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ser a ponte que conecta empreendedores e investidores brasileiros ao próximo nível de crescimento nos Estados Unidos. Cuidamos da burocracia para que você foque no seu negócio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Acreditamos que contabilidade é ferramenta de gestão — não apenas obrigação. Por isso, entregamos relatórios claros, planejamento real e atendimento próximo.
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-5">Por que a Atlântico</h2>
            <ul className="space-y-4">
              {[
                { t: "Atendimento 100% bilíngue", d: "Em português, inglês e espanhol — sem ruído na comunicação." },
                { t: "Especialistas no eixo Brasil-EUA", d: "Conhecemos os dois sistemas tributários para evitar bitributação." },
                { t: "Foco em prevenção, não só correção", d: "Planejamento tributário antes do problema surgir." },
                { t: "Tecnologia + relacionamento", d: "Ferramentas digitais com gente real para você falar." },
              ].map((i) => (
                <li key={i.t} className="flex gap-3">
                  <CheckCircle2 className="size-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{i.t}</p>
                    <p className="text-sm text-muted-foreground">{i.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={ceoImg}
            alt="Emerson Correia, CEO"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full max-w-md aspect-[4/5] object-cover rounded-2xl ring-1 ring-black/5 shadow-lg mx-auto"
          />
          <div>
            <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-3">CEO & Fundador</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-balance">Emerson Correia, CPA</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Contador Público Certificado nos EUA com mais de 15 anos de experiência no mercado americano. Especialista em estruturação de empresas internacionais, tax planning e compliance para brasileiros que escolhem a Flórida como base estratégica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sua visão é simples: tratar cada cliente como se fosse o único, com a atenção que se espera de um sócio — não de um fornecedor.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-balance">
            Quer conhecer melhor a Atlântico?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
            Agende uma conversa sem compromisso — em português, com quem entende seu contexto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors inline-flex items-center gap-2"
            >
              Falar no WhatsApp <ArrowRight className="size-4" />
            </a>
            <Link to="/servicos" className="bg-white border border-border hover:border-brand hover:text-brand px-6 py-3 rounded-md text-sm font-semibold transition-colors">
              Ver nossos serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
