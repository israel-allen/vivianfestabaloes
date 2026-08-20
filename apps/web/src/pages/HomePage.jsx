import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { brand, whatsappLink, portfolio, steps } from '@/data/site';

const ticker = ['Casamentos', 'Festas Infantis', 'Corporativo', 'Chá de Bebê', 'Esculturas de Autor', 'Vitrines'];

export default function HomePage() {
  const destaques = portfolio.slice(0, 7);
  return (
    <>
      <Helmet>
        <title>Balão & Arte — Esculturas de balões sob medida no Rio de Janeiro Centro e Região dos Lagos</title>
        <meta
          name="description"
          content="Ateliê de esculturas e decoração com balões para casamentos, festas infantis e eventos corporativos em São Paulo. Peça seu orçamento pelo WhatsApp."
        />
      </Helmet>

      {/* Hero full-bleed */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden">
        <img
          src={portfolio[0].image}
          alt="Arco de balões em tons blush e dourado na entrada de um casamento"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a1620]/90 via-[#2a1620]/45 to-[#2a1620]/25" />
        <div className="relative mx-auto flex min-h-[100dvh] max-w-[72rem] flex-col justify-end px-5 pb-20 pt-32 lg:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> {brand.city}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] font-semibold leading-[0.98] text-white">
              Esculturas de balões que <span className="marker-underline italic">encantam</span> o seu evento.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Projetos autorais, montagem impecável e paletas desenhadas para o seu espaço — do arco de entrada à peças
              esculturais.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contato"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
              >
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-medium text-white transition hover:brightness-105 active:scale-[0.98]"
              >
                <MessageCircle className="h-4.5 w-4.5" /> Chamar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-secondary/60 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="font-display text-lg text-foreground/60">
              {t} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Números + intro */}
      <section className="mx-auto max-w-[72rem] px-5 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight">
              Uma empresa que trata balão como material de design.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground">
              Cada projeto começa com uma ideia e uma paleta. Selecionamos balões biodegradáveis, montamos estruturas
              seguras e cuidamos da desmontagem — para você só aproveitar a festa.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            { v: 123, s: '+', l: 'Eventos montados' },
            { v: 6, s: ' anos', l: 'De empresa' },
            { v: 7, s: ' m', l: 'Maior escultura' },
            { v: 48, s: ' h', l: 'Para o orçamento' },
          ].map((k) => (
            <div key={k.l}>
              <p className="font-display text-4xl text-primary">
                <CountUp value={k.v} suffix={k.s} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{k.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfólio destaque - mosaico */}
      <section className="mx-auto max-w-[90rem] px-5 pb-8 lg:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)]">Portfólio</h2>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all">
            Ver mais em portfólio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {destaques.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <figure
                className={`group relative overflow-hidden rounded-[1.5rem] ${
                  p.span === 'wide' ? 'col-span-2 aspect-[16/10]' : 'aspect-[3/4]'
                }`}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-white">
                  <p className="font-display text-base leading-tight">{p.title}</p>
                  <p className="text-xs text-white/70">{p.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="mx-auto max-w-[72rem] px-5 py-20 lg:px-10">
        <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)]">Como funciona</h2>
        <ol className="mt-10 divide-y divide-border border-t border-border">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-2 py-7 md:grid-cols-[6rem_14rem_1fr] md:items-baseline">
              <span className="font-display text-2xl text-primary/70">{s.n}</span>
              <span className="font-display text-xl">{s.t}</span>
              <span className="text-muted-foreground">{s.d}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[72rem] px-5 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground md:px-16">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 animate-float-slow rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-14 right-0 h-56 w-56 animate-float-slow rounded-full bg-white/10" />
          <h2 className="relative font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight">
            Vamos idealizar a sua próxima festa?
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-primary-foreground/85">
            Conte a data e o estilo do evento. Respondemos com o orçamento em até 48 horas.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contato"
              className="inline-flex min-h-[48px] items-center rounded-full bg-background px-7 text-sm font-medium text-foreground transition hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Solicitar orçamento
            </Link>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-primary-foreground/40 px-7 text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
