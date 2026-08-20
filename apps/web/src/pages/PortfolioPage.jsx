import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Reveal from '@/components/Reveal';
import { categories, portfolio } from '@/data/site';

export default function PortfolioPage() {
  const [cat, setCat] = useState('todos');
  const list = cat === 'todos' ? portfolio : portfolio.filter((p) => p.category === cat);

  return (
    <>
      <Helmet>
        <title>Portfólio de esculturas de balões | Balão & Arte</title>
        <meta
          name="description"
          content="Galeria de projetos com balões por categoria: casamentos, festas infantis, corporativo, chá de bebê e esculturas de autor."
        />
      </Helmet>

      <section className="mx-auto max-w-[90rem] px-5 pb-10 pt-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Portfólio</p>
        <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.02]">
          Projetos montados, fotografados e <span className="italic">bem vividos</span>.
        </h1>

        <div className="mt-10 flex flex-wrap gap-2">
          {[{ id: 'todos', label: 'Todos' }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={`min-h-[44px] rounded-full border px-5 text-sm transition active:scale-[0.98] ${
                cat === c.id
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/75 hover:border-primary/50'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="mt-16 rounded-[1.5rem] border border-dashed border-border p-12 text-center text-muted-foreground">
            Ainda não publicamos projetos desta categoria. Fale conosco para ver referências exclusivas.
          </p>
        ) : (
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}>
                <figure className="group relative overflow-hidden rounded-[1.5rem] break-inside-avoid">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                    <p className="font-display text-lg leading-tight">{p.title}</p>
                    <p className="text-xs text-white/70">{p.place}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
