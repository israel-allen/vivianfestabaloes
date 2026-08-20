import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageCircle, Instagram, Mail, Phone } from 'lucide-react';
import { brand, whatsappLink, instagramLink } from '@/data/site';

const nav = [
  { to: '/', label: 'Início' },
  { to: '/portfolio', label: 'Portfólio' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/contato', label: 'Contato' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/images/vivian-logo-transparente.png"
        alt={brand.name}
        className="h-16 w-auto"
      />
      <span className="font-display text-2xl tracking-tight">
        {brand.name}
      </span>
    </Link>
  );
}

export function InstagramButton() {
  return (
    <a
      href={instagramLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Seguir no Instagram"
      className="fixed bottom-20 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#d62976]/30 transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <Instagram className="h-5 w-5" strokeWidth={2} />
      <span className="hidden sm:inline">Instagram</span>
    </a>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between px-5 py-4 lg:px-10">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-primary ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground/70'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:scale-[0.98] sm:inline-block"
            >
              Pedir orçamento
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              className="rounded-full border border-border p-2.5 md:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-border/60 py-3 text-base last:border-0 ${
                    isActive ? 'text-primary' : ''
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>{children}</main>

      <footer className="mt-24 border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-14 md:grid-cols-3 lg:px-10">
          <div>
            <Logo />

            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {brand.tagline}. Atendemos no {brand.city}.
            </p>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-medium uppercase tracking-widest text-muted-foreground">
              Navegue
            </p>

            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="text-foreground/80 hover:text-primary"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-3 font-medium uppercase tracking-widest text-muted-foreground">
              Contato
            </p>

            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 text-primary" />

                <a
                  href={instagramLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  {brand.instagram}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>{brand.email}</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>{brand.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/70 px-5 py-5 text-center text-xs text-muted-foreground lg:px-10">
          © {new Date().getFullYear()} {brand.name}. Todos os direitos reservados.
        </div>
      </footer>

      <InstagramButton />
      <WhatsAppButton />
    </div>
  );
}
