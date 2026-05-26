import { useEffect, useState } from "react";

const components = [
  "Button",
  "Card",
  "Badge",
  "Input",
  "Metric",
  "SectionHeading",
  "ZeroProvider",
  "useZeroTheme",
];

const features = [
  {
    title: "Duas stacks, uma identidade",
    text: "Bootstrap e Tailwind compartilham tokens, API parecida e o mesmo visual premium.",
  },
  {
    title: "Tema pronto",
    text: "Claro, escuro e cosmic com variaveis CSS, foco visivel e reducao de movimento.",
  },
  {
    title: "Pensada para produto",
    text: "Componentes para dashboards, SaaS, e-commerce, admin e apps React modernos.",
  },
];

const code = `import "zeroui-tailwind/styles.css";
import { Button, Card, Input } from "zeroui-tailwind";

export function Demo() {
  return (
    <Card variant="glass">
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="gradient">Salvar</Button>
    </Card>
  );
}`;

export function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      <Header isDark={isDark} onToggleTheme={() => setTheme(isDark ? "light" : "dark")} />
      <Hero isDark={isDark} />
      <FeatureStrip />
      <ComponentShowcase />
      <InstallSection />
      <Footer />
    </main>
  );
}

function Header({
  isDark,
  onToggleTheme,
}: {
  isDark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-zinc-50/86 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/82">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="ZERU UI home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-950 text-sm font-black text-white shadow-[0_16px_40px_rgba(24,24,27,0.18)] dark:bg-white dark:text-zinc-950">
            Z
          </span>
          <span className="text-base font-black tracking-tight">ZERU UI</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-zinc-600 dark:text-zinc-400 md:flex">
          <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#docs">
            Docs
          </a>
          <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#components">
            Components
          </a>
          <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#bootstrap">
            Bootstrap
          </a>
          <a className="transition hover:text-zinc-950 dark:hover:text-white" href="#tailwind">
            Tailwind
          </a>
          <a
            className="transition hover:text-zinc-950 dark:hover:text-white"
            href="https://github.com/zinhodelta3-arch/ZERU-UI---AI-libray-CSS-on-bootstrap-tailwind-css"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-sm font-black text-zinc-950 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/8 dark:text-white"
            type="button"
            aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
            onClick={onToggleTheme}
          >
            {isDark ? "☀" : "☾"}
          </button>
          <a
            className="hidden rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-black text-zinc-950 shadow-[0_14px_34px_rgba(24,24,27,0.08)] transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-700 dark:border-transparent dark:bg-gradient-to-r dark:from-violet-500 dark:to-cyan-400 dark:text-white dark:shadow-[0_14px_34px_rgba(124,92,255,0.26)] sm:inline-flex"
            href="#components"
          >
            Ver componentes
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ isDark }: { isDark: boolean }) {
  return (
    <section id="top" className="relative bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(124,92,255,0.18),transparent_30rem),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.18),transparent_28rem)] dark:bg-[radial-gradient(circle_at_14%_12%,rgba(124,92,255,0.34),transparent_30rem),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.22),transparent_28rem)]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-20 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:pb-24 md:pt-28">
        <div className="relative flex flex-col justify-center">
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-zinc-950 dark:text-white md:text-7xl">
            Uma biblioteca UI para Bootstrap e Tailwind com identidade propria
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 md:text-xl">
            ZERU UI entrega componentes React, tokens compartilhados, temas claros e escuros,
            glass controlado e uma API pensada para projetos modernos sem cara de template.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 text-sm font-black text-white shadow-[0_22px_54px_rgba(124,92,255,0.28)] transition hover:-translate-y-0.5"
              href="#install"
            >
              Comecar agora
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-sm font-black text-zinc-950 transition hover:-translate-y-0.5 hover:border-zinc-950 dark:border-white/12 dark:bg-white/8 dark:text-white dark:hover:border-white"
              href="#components"
            >
              Explorar biblioteca
            </a>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute left-0 top-8 w-[88%] rounded-lg border border-zinc-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-zinc-900 md:w-[78%]">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-bold text-zinc-400">tailwind.tsx</span>
            </div>
            <pre className="overflow-hidden rounded-lg bg-zinc-950 p-5 text-[12px] leading-6 text-zinc-100 md:text-sm">
              <code>{code}</code>
            </pre>
          </div>

          <div className="absolute bottom-0 right-0 w-[84%] rounded-lg border border-white/70 bg-white/80 p-5 shadow-[0_28px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900 md:w-[66%]">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 dark:border-white/10 dark:bg-zinc-950">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase text-violet-600">Preview</p>
                  <h2 className="mt-1 text-2xl font-black tracking-tight text-zinc-950 dark:text-white">
                    Componentes vivos
                  </h2>
                </div>
                <span className="rounded-lg bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-400/14 dark:text-emerald-300">
                  {isDark ? "Dark" : "Light"}
                </span>
              </div>
              <label className="grid gap-2 text-sm font-bold text-zinc-700 dark:text-zinc-300">
                Nome do projeto
                <input
                  className="h-11 rounded-lg border border-zinc-300 bg-white px-3 text-sm text-zinc-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100 dark:border-white/10 dark:bg-white/8 dark:text-white dark:focus:ring-violet-500/20"
                  defaultValue="Dashboard Orbit"
                />
              </label>
              <button className="mt-5 min-h-11 w-full rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-5 text-sm font-black text-white">
                Criar interface
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="border-y border-zinc-200 bg-white dark:border-white/10 dark:bg-zinc-900">
      <div className="mx-auto grid max-w-7xl gap-px bg-zinc-200 px-5 dark:bg-white/10 md:grid-cols-3 md:px-8">
        {features.map((feature) => (
          <article className="bg-white py-10 dark:bg-zinc-900 md:px-8" key={feature.title}>
            <h2 className="text-lg font-black tracking-tight">{feature.title}</h2>
            <p className="mt-3 max-w-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {feature.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComponentShowcase() {
  return (
    <section
      id="components"
      className="bg-zinc-50 px-5 py-20 dark:bg-zinc-950 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Componentes base separados por pacote
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A biblioteca ja nasce com core compartilhado, Bootstrap independente e Tailwind
            independente. Voce escolhe a stack sem carregar o outro mundo junto.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {components.map((component, index) => (
            <div
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-[0_18px_54px_rgba(15,23,42,0.07)] transition hover:-translate-y-1 hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none dark:hover:border-violet-400/60"
              key={component}
            >
              <div className="mb-5 h-2 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              <h3 className="text-xl font-black">{component}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                API limpa, `className`, variantes e estados pensados para composicao.
              </p>
              <span className="mt-5 inline-flex rounded-lg bg-zinc-100 px-3 py-1 text-xs font-black text-zinc-500 dark:bg-white/10 dark:text-zinc-300">
                ZUI-{String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallSection() {
  return (
    <section id="install" className="bg-zinc-950 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Instale e comece a compor
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
            Use os pacotes do workspace, rode a landing e continue evoluindo a biblioteca com
            playgrounds e documentacao real.
          </p>
        </div>
        <div className="grid gap-4">
          <Command title="Instalar pacotes" value="corepack pnpm install" />
          <Command title="Rodar landing Tailwind" value="corepack pnpm --filter @zero-ui/landing-tailwind dev" />
          <Command title="Validar biblioteca" value="corepack pnpm typecheck && corepack pnpm build" />
        </div>
      </div>
    </section>
  );
}

function Command({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
      <p className="mb-3 text-sm font-black text-cyan-300">{title}</p>
      <code className="block overflow-x-auto rounded-lg bg-black/40 p-4 text-sm text-zinc-100">
        {value}
      </code>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-950 px-5 pb-10 text-sm text-zinc-500 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p>ZERU UI - Bootstrap + Tailwind CSS library.</p>
        <p>Feita para evoluir como design system real.</p>
      </div>
    </footer>
  );
}
