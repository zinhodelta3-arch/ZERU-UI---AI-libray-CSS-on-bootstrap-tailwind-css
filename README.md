# ZERU UI

ZERU UI e uma biblioteca de CSS e componentes para criar interfaces premium com Bootstrap ou Tailwind CSS usando um import global.

O uso principal agora e:

```jsx
import "zeru-ui/bootstrap.css";
```

ou:

```jsx
import "zeru-ui/tailwind.css";
```

Depois disso, use classes prontas com prefixo `.zu-`:

```jsx
<button className="zu-btn zu-btn-primary">Comecar agora</button>

<div className="zu-card zu-card-glass">
  <h3 className="zu-title">Card moderno</h3>
  <p className="zu-text-muted">Conteudo do card.</p>
</div>
```

## Pacotes

- `zeru-ui`: pacote unificado com CSS global, React opcional e Motion opcional.
- `zeroui-core`: tokens, tipos, hooks e utilitarios compartilhados legados.
- `zeroui-bootstrap`: componentes React para Bootstrap 5.3+ legados.
- `zeroui-tailwind`: componentes React para Tailwind CSS legados.

## Instalar

```bash
npm install zeru-ui
```

Bootstrap:

```bash
npm install bootstrap react-bootstrap
```

Tailwind:

```bash
npm install tailwindcss
```

## Uso com Bootstrap

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "zeru-ui/bootstrap.css";

export function App() {
  return (
    <main className="zu-theme-purple zu-page zu-bg-aurora">
      <section className="zu-container zu-hero">
        <div className="zu-hero-glass zu-stack-lg">
          <span className="zu-badge zu-badge-gradient">ZERU UI Bootstrap</span>
          <h1 className="zu-display">Bootstrap com identidade premium.</h1>
          <p className="zu-lead">
            Classes globais, tokens CSS e componentes visuais prontos para projetos reais.
          </p>
          <div className="zu-cluster">
            <button className="btn zu-btn zu-btn-primary">Comecar</button>
            <button className="btn zu-btn zu-btn-glass">Ver docs</button>
          </div>
        </div>
      </section>
    </main>
  );
}
```

## Uso com Tailwind

```jsx
import "zeru-ui/tailwind.css";

export function App() {
  return (
    <main className="zu-theme-orange zu-page zu-bg-mesh-animated">
      <section className="zu-container zu-section">
        <div className="zu-grid-3">
          <article className="zu-card zu-card-glass zu-card-feature">
            <span className="zu-badge zu-badge-soft">Tokens</span>
            <h2 className="zu-heading">CSS-first</h2>
            <p className="zu-text-muted">Tema, cores, radius, sombras e motion via CSS variables.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
```

## React opcional

```jsx
import "zeru-ui/tailwind.css";
import { ZeruButton, ZeruCard, ZeruInput } from "zeru-ui/react";

export function Form() {
  return (
    <ZeruCard variant="glass" className="zu-card-body">
      <ZeruInput label="Nome" placeholder="Digite seu nome" />
      <ZeruButton variant="gradient">Salvar</ZeruButton>
    </ZeruCard>
  );
}
```

## Motion opcional

```jsx
import "zeru-ui/tailwind.css";
import { ZeruReveal, ZeruStagger } from "zeru-ui/motion";

export function Highlights() {
  return (
    <ZeruStagger className="zu-grid-3">
      <ZeruReveal className="zu-card zu-card-glass zu-card-feature">
        <h3 className="zu-heading">Entrada suave</h3>
      </ZeruReveal>
    </ZeruStagger>
  );
}
```

## Estrutura

```txt
packages/
  zeru-ui/    Pacote unificado: core.css, bootstrap.css, tailwind.css, react e motion.
  core/       Tokens, tipos, hooks e utilitarios compartilhados legados.
  bootstrap/ Componentes React baseados em Bootstrap 5.3+.
  tailwind/  Componentes React baseados em Tailwind CSS.
docs/        Decisoes tecnicas, pesquisa e documentacao.
apps/        Playground e landing.
examples/    Exemplos futuros.
```

## Validacoes

```bash
corepack pnpm typecheck
corepack pnpm build
corepack pnpm test
```

## Estado atual

A primeira camada premium entrega import global, prefixo `.zu-`, tokens CSS amplos, classes de layout, tipografia, botoes, cards, forms, navbar, sidebar, modal, tabelas, dashboards, landing/e-commerce/AI helpers, backgrounds e animacoes CSS. Os pacotes antigos continuam disponiveis para compatibilidade.
