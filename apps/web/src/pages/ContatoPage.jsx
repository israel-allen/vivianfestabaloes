import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MessageCircle, Mail, Phone, Instagram, CheckCircle2 } from 'lucide-react';
import { brand, whatsappLink, categories } from '@/data/site';

const field =
  'mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20';

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', data: '', tipo: categories[0].label, local: '', msg: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.nome.trim()) err.nome = 'Informe o seu nome.';
    if (!form.local.trim()) err.local = 'Informe a cidade ou o local do evento.';
    setErrors(err);
    if (Object.keys(err).length) return;

    const texto = `Olá, ${brand.name}! Meu nome é ${form.nome}.
Tipo de evento: ${form.tipo}
Data: ${form.data || 'a definir'}
Local: ${form.local}
${form.msg ? `Detalhes: ${form.msg}` : ''}`;
    setSent(true);
    window.open(whatsappLink(texto), '_blank', 'noopener');
  };

  return (
    <>
      <Helmet>
        <title>Contato e orçamento | Balão & Arte</title>
        <meta
          name="description"
          content="Solicite um orçamento para esculturas e decoração com balões. Resposta em até 48 horas pelo WhatsApp ou e-mail."
        />
      </Helmet>

      <section className="mx-auto max-w-[72rem] px-5 pt-16 lg:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Contato</p>
        <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,6vw,4rem)] leading-[1.02]">
          Peça o seu orçamento.
        </h1>
        <p className="mt-5 max-w-xl text-muted-foreground">
          Preencha os campos abaixo e enviaremos os valores em até 48 horas. Prefere conversar agora? Chame no
          WhatsApp.
        </p>
      </section>

      <section className="mx-auto mt-12 grid max-w-[72rem] gap-10 px-5 md:grid-cols-[1.4fr_1fr] lg:px-10">
        <form onSubmit={submit} noValidate className="rounded-[1.75rem] border border-border bg-card p-6 md:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="nome" className="text-sm font-medium">Nome completo</label>
              <input id="nome" value={form.nome} onChange={set('nome')} className={field} placeholder="Como podemos te chamar?" />
              {errors.nome && <p className="mt-2 text-xs text-destructive">{errors.nome}</p>}
            </div>
            <div>
              <label htmlFor="tipo" className="text-sm font-medium">Tipo de evento</label>
              <select id="tipo" value={form.tipo} onChange={set('tipo')} className={field}>
                {categories.map((c) => (
                  <option key={c.id} value={c.label}>{c.label}</option>
                ))}
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label htmlFor="data" className="text-sm font-medium">Data do evento</label>
              <input id="data" type="date" value={form.data} onChange={set('data')} className={field} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="local" className="text-sm font-medium">Cidade / local</label>
              <input id="local" value={form.local} onChange={set('local')} className={field} placeholder="Ex.: Camboinhas, Niterói" />
              {errors.local && <p className="mt-2 text-xs text-destructive">{errors.local}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="msg" className="text-sm font-medium">Conte sobre a sua ideia</label>
              <textarea id="msg" rows={4} value={form.msg} onChange={set('msg')} className={field} placeholder="Paleta, tamanho do espaço, referências..." />
            </div>
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:brightness-110 active:scale-[0.98] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" /> Enviar pedido pelo WhatsApp
          </button>

          {sent && (
            <p className="mt-5 flex items-center gap-2 rounded-xl bg-accent/10 px-4 py-3 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4" /> Abrimos o WhatsApp com o seu pedido. Se não abriu, use o botão flutuante.
            </p>
          )}
        </form>

        <aside className="rounded-[1.75rem] bg-secondary/70 p-6 md:p-9">
          <h2 className="font-display text-2xl">Canais diretos</h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" />{brand.phone}</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" />{brand.email}</li>
            <li className="flex items-center gap-3"><Instagram className="h-4 w-4 text-primary" />{brand.instagram}</li>
          </ul>
          <div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Atendimento</p>
            <p className="mt-2">Segunda a sexta, 9h às 18h</p>
            <p>Sábados sob agendamento</p>
            <p className="mt-4">Atendemos {brand.city}. Caso queira os serviços fora do estado do RJ, será cobrado taxa de deslocamento.</p>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-medium text-white transition active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
          </a>
        </aside>
      </section>
    </>
  );
}
