import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Atlântico Contábil | Orlando, Flórida" },
      {
        name: "description",
        content:
          "Fale com a Atlântico Contábil em Orlando. Atendimento por WhatsApp, telefone EUA/BR ou formulário. Resposta em até 24h.",
      },
      { property: "og:title", content: "Contato — Atlântico Contábil" },
      { property: "og:description", content: "Fale conosco em português. Orlando, Flórida." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 pt-16 pb-12 lg:pt-24 lg:pb-16 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-brand uppercase tracking-wider mb-4">Fale conosco</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance mb-6">
            Vamos conversar sobre sua operação nos EUA.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Responda em poucos campos — em até 24h um especialista entra em contato. Prefere agilidade? Chame no WhatsApp.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Formulário */}
          <div className="lg:col-span-3 bg-white rounded-2xl ring-1 ring-black/5 p-8 md:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="size-14 mx-auto rounded-full bg-brand-soft text-brand grid place-items-center mb-5">
                  <MessageCircle className="size-7" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Mensagem enviada!</h2>
                <p className="text-muted-foreground">Em até 24 horas um especialista vai responder no e-mail informado.</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 className="text-xl font-semibold mb-2">Envie sua mensagem</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Nome completo" name="nome" required />
                  <Field label="E-mail" name="email" type="email" required />
                  <Field label="WhatsApp / Telefone" name="phone" required />
                  <Field label="Empresa (opcional)" name="empresa" />
                </div>
                <SelectField
                  label="Qual serviço te interessa?"
                  name="servico"
                  options={[
                    "Preparação de Impostos (Tax)",
                    "Abertura de Empresas (LLC/Corp)",
                    "Escrita Contábil Mensal",
                    "Folha de Pagamento",
                    "Planejamento Tributário",
                    "Sales Tax",
                    "Outro / Não sei ainda",
                  ]}
                />
                <TextareaField label="Conte sua situação" name="mensagem" required />
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-hover text-white py-3 rounded-md text-sm font-semibold transition-colors"
                >
                  Enviar mensagem
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Seus dados estão protegidos. Não compartilhamos com terceiros.
                </p>
              </form>
            )}
          </div>

          {/* Info lateral */}
          <aside className="lg:col-span-2 space-y-4">
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-whatsapp text-white p-6 rounded-2xl hover:opacity-95 transition"
            >
              <MessageCircle className="size-7 mb-3" />
              <p className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">Resposta mais rápida</p>
              <p className="text-xl font-semibold">WhatsApp {site.whatsappDisplay}</p>
              <p className="text-sm opacity-90 mt-1">Atendimento em português, seg–sex 9h–18h (EST).</p>
            </a>

            <InfoCard icon={<Phone className="size-5" />} title="Telefones">
              <p>USA · {site.phoneUSA}</p>
              <p>BRA · {site.phoneBRA}</p>
            </InfoCard>

            <InfoCard icon={<Mail className="size-5" />} title="E-mail">
              <a href={`mailto:${site.email}`} className="hover:text-brand break-all">{site.email}</a>
            </InfoCard>

            <InfoCard icon={<MapPin className="size-5" />} title="Endereço">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
            </InfoCard>

            <InfoCard icon={<Clock className="size-5" />} title="Horário de atendimento">
              <p>Segunda a sexta · 9h às 18h (EST)</p>
            </InfoCard>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden ring-1 ring-black/5">
          <iframe
            title="Localização Atlântico Contábil"
            src="https://www.google.com/maps?q=6735+Conroy+Road,+Orlando,+FL&output=embed"
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full block"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-brand"> *</span>}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand text-sm"
      />
    </label>
  );
}

function TextareaField({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-brand"> *</span>}</span>
      <textarea
        name={name}
        rows={5}
        required={required}
        className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand text-sm resize-y"
      />
    </label>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium mb-1.5">{label}</span>
      <select
        name={name}
        className="w-full px-4 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-brand text-sm"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-2xl ring-1 ring-black/5">
      <div className="flex items-center gap-3 mb-2">
        <div className="size-9 rounded-md bg-brand-soft text-brand grid place-items-center">{icon}</div>
        <p className="font-semibold">{title}</p>
      </div>
      <div className="text-sm text-muted-foreground pl-12 space-y-0.5">{children}</div>
    </div>
  );
}
