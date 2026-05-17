import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 rounded-md bg-brand grid place-items-center text-white font-bold text-sm">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {site.shortName}
            <span className="text-brand"> Contábil</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground hover:text-brand transition-colors"
              activeProps={{ className: "text-brand" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-secondary rounded-md">
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-background shadow-sm">PT</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 text-muted-foreground">EN</span>
            <span className="text-[10px] font-semibold px-1.5 py-0.5 text-muted-foreground">ES</span>
          </div>
          <Link
            to="/contato"
            className="hidden sm:inline-flex bg-brand hover:bg-brand-hover text-white text-sm font-medium py-2 px-4 rounded-md transition-colors shadow-sm"
          >
            Fale Conosco
          </Link>
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground hover:text-brand"
                activeProps={{ className: "text-brand" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
