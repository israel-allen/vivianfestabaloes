import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { services, portfolio } from '@/data/site';
export default function ServicosPage() {
  return <>
      <Helmet>
        <title>Serviços de decoração e escultura com balões | Balão & Arte</title>
        <meta name="description" content="Arcos orgânicos, cenários infantis, ativações corporativas e esculturas de autor em balões, com projeto, montagem e desmontagem inclusos." />
      </Helmet>

      <section className="mx-auto max-w-[72rem] px-5 pt-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Serviços</p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.02]">Do desenvolvimento do projeto a montagem , tudo com a nossa equipe.</h1>
      </section>

      <section className="mx-auto mt-14 max-w-[72rem] px-5 lg:px-10">
        <div className="divide-y divide-border border-y border-border">
          {services.map((s, i) => <Reveal key={s.title} delay={i * 0.05}>
              <article className="grid gap-6 py-12 md:grid-cols-[1fr_1.3fr]">
                <div>
                  <h2 className="font-display text-2xl leading-tight md:text-3xl">{s.title}</h2>
                  <p className="mt-3 text-sm text-primary">{s.price}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.items.map(it => <li key={it} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                        {it}
                      </li>)}
                  </ul>
                </div>
              </article>
            </Reveal>)}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-[90rem] gap-6 px-5 md:grid-cols-2 lg:px-10">
        <img src={portfolio[6].image} alt="Decoração de balões rosa e lilás com borboletas e arranjo de flores" loading="lazy" className="h-72 w-full rounded-[1.75rem] object-cover md:h-full" />
        <div className="flex flex-col justify-center rounded-[1.75rem] bg-secondary/70 p-8 md:p-12">
          <h2 className="font-display text-3xl leading-tight">Não achou o que procurava?</h2>
          <p className="mt-4 text-muted-foreground">Fazemos projetos totalmente sob medida, inclusive peças esculturais de para vitrines, feiras e ativações de marca. Conte a sua ideia e planejamos junto com você.</p>
          <Link to="/contato" className="mt-8 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:scale-[0.98]">
            Solicitar orçamento <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>;
}