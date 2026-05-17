import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 rounded-md bg-brand grid place-items-center text-white font-bold text-sm">
              A
            </div>
            <span className="text-lg font-semibold tracking-tight">
              {site.shortName}
              <span className="text-brand"> Contábil</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Contabilidade estratégica para brasileiros e empresas que crescem nos Estados Unidos.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4">Navegação</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-brand">Home</Link></li>
            <li><Link to="/sobre" className="hover:text-brand">Sobre</Link></li>
            <li><Link to="/servicos" className="hover:text-brand">Serviços</Link></li>
            <li><Link to="/blog" className="hover:text-brand">Blog</Link></li>
            <li><Link to="/contato" className="hover:text-brand">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4">Contato</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="size-4 shrink-0 mt-0.5 text-brand" />
              <span>USA {site.phoneUSA}<br />BRA {site.phoneBRA}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 shrink-0 mt-0.5 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-brand break-all">{site.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold mb-4">Endereço</p>
          <p className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
            <MapPin className="size-4 shrink-0 mt-0.5 text-brand" />
            <span>{site.address.line1}<br />{site.address.line2}</span>
          </p>
          <div className="flex gap-3 mt-5">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-9 grid place-items-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="size-9 grid place-items-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors">
              <Linkedin className="size-4" />
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="size-9 grid place-items-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <p>CPA Firm licenciada na Flórida, EUA.</p>
        </div>
      </div>
    </footer>
  );
}
