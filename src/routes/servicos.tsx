import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
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
  CheckCircle2,
} from "lucide-react";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Atlântico Contábil | Tax, LLC e contabilidade na Flórida" },
      {
        name: "description",
        content:
          "Preparação de impostos, abertura de LLC/Corp, escrita contábil, folha, planejamento tributário, Sales Tax, FBAR, FIRPTA, Quit Claim Deed e mais — para brasileiros e empresas internacionais na Flórida.",
      },
      { property: "og:title", content: "Serviços — Atlântico Contábil" },
      { property: "og:description", content: "Soluções contábeis e fiscais completas para brasileiros nos EUA." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: ServicosPage,
});

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

const detailed: Record<string, string[]> = {
  "preparacao-impostos": [
    "Declaração federal (Form 1040, 1120, 1120-S, 1065)",
    "Declarações estaduais quando aplicável",
    "Otimização de deduções e créditos",
    "Declaração brasileira (DIRPF, CBE) coordenada",
  ],
  "abertura-empresas": [
    "Análise da melhor estrutura (LLC, C-Corp, S-Corp)",
    "Registro no estado da Flórida",
    "EIN, ITIN e abertura de conta bancária",
    "Operating Agreement e compliance inicial",
  ],
  "escrita-contabil": [
    "Bookkeeping mensal completo",
    "Conciliação bancária e cartões",
    "Relatórios gerenciais (DRE, balancete)",
    "Suporte para auditorias e financiamentos",
  ],
  "folha-pagamento": [
    "Processamento mensal/quinzenal",
    "Emissão de W-2 e 1099",
    "Recolhimento de impostos trabalhistas",
    "Compliance estadual e federal",
  ],
  "planejamento-tributario": [
    "Estratégia anual de redução tributária",
    "Estruturação patrimonial Brasil-EUA",
    "Evitar bitributação (tratados, créditos)",
    "Sucessão e proteção patrimonial",
  ],
  "sales-tax": [
    "Cadastro no Departamento de Receita",
    "Apuração mensal e recolhimento",
    "Regularização de pendências",
    "Compliance multi-estadual quando aplicável",
  ],
  "consultoria-premium": [
    "Diagnóstico 360° da sua operação fiscal e contábil",
    "Consultor sênior dedicado e atendimento prioritário",
    "Plano de ação personalizado com prazos e responsáveis",
    "Reuniões estratégicas recorrentes de acompanhamento",
  ],
  "tributacao-internacional": [
    "Estruturação de operações cross-border (Brasil-EUA e além)",
    "Aproveitamento de tratados e créditos contra bitributação",
    "Compliance de FATCA, CRS e obrigações acessórias",
    "Planejamento de remessas, dividendos e royalties",
  ],
  "imposto-de-renda-estimado": [
    "Cálculo trimestral do Estimated Tax (1040-ES / 1120-W)",
    "Projeção de receita e ajustes ao longo do ano",
    "Pagamentos via EFTPS sem juros e multas",
    "Acompanhamento de safe harbor e prevenção de penalidades",
  ],
  firpta: [
    "Análise prévia da retenção de 15% sobre venda de imóvel",
    "Withholding Certificate (Form 8288-B) quando aplicável",
    "Preparação de Form 8288 e 8288-A para o closing",
    "Recuperação do imposto retido via Tax Return seguinte",
  ],
  fbar: [
    "Identificação das contas reportáveis no exterior",
    "Preparação e envio do FinCEN Form 114 (FBAR)",
    "Integração com Form 8938 (FATCA) quando aplicável",
    "Regularização de FBARs em atraso (Streamlined Procedures)",
  ],
  "quit-claim-deed": [
    "Elaboração do Quit Claim Deed conforme leis da Flórida",
    "Coordenação de assinatura, notarização e testemunhas",
    "Registro junto ao County Clerk competente",
    "Análise de impactos fiscais (Doc Stamp Tax, gift tax)",
  ],
  "recadastramento-anual-florida": [
    "Submissão do Annual Report na Sunbiz dentro do prazo",
    "Atualização de Registered Agent, sócios e endereço",
    "Reativação de empresas Inactive ou Dissolved",
    "Acompanhamento de cobranças e late fees",
  ],
};

function ServicosPage() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-4">Nossos serviços</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance mb-6">
            Soluções contábeis para sua tranquilidade nos EUA.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Da abertura da sua empresa ao planejamento tributário avançado, cuidamos de cada detalhe para você focar no crescimento.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((s, idx) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            const reverse = idx % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 grid lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl ring-1 ring-black/5 p-8 lg:p-12"
              >
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : ""}`}>
                  <div className="size-14 rounded-xl bg-brand-soft text-brand grid place-items-center mb-5">
                    <Icon className="size-7" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.short}</p>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover"
                  >
                    Saiba mais <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="bg-brand-soft/40 rounded-xl p-6 lg:p-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-4">O que está incluso</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {detailed[s.slug].map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
            Não sabe por onde começar?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
            Conte sua situação. Em uma conversa de 30 minutos sugerimos o caminho certo — sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
            >
              Falar no WhatsApp
            </a>
            <Link to="/contato" className="bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors">
              Enviar formulário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
