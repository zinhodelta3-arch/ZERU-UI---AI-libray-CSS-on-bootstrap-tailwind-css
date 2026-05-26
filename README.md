# ZERO UI

ZERO UI e uma biblioteca React em monorepo com duas versoes oficiais:

- `@zero-ui/bootstrap`
- `@zero-ui/tailwind`

A base original foi separada em pacotes independentes para manter Bootstrap e Tailwind com a mesma identidade visual, mas sem misturar dependencias ou estilos.

## Estrutura

```txt
packages/
  core/       Tokens, tipos, hooks e utilitarios compartilhados.
  bootstrap/ Componentes React baseados em Bootstrap 5.3+.
  tailwind/  Componentes React baseados em Tailwind CSS.
docs/        Decisoes tecnicas e documentacao inicial.
apps/        Espaco reservado para docs e playgrounds.
examples/    Espaco reservado para exemplos Next.js e Vite.
```

## Instalar

```bash
corepack pnpm install
```

## Rodar validacoes

```bash
corepack pnpm typecheck
corepack pnpm build
corepack pnpm test
```

## Uso com Bootstrap

```tsx
import "@zero-ui/bootstrap/styles.css";
import { Button, Card, Input, ZeroBootstrapProvider } from "@zero-ui/bootstrap";

export function App() {
  return (
    <ZeroBootstrapProvider theme="dark">
      <Card variant="glass">
        <Input label="Nome" placeholder="Digite seu nome" />
        <Button variant="gradient">Salvar</Button>
      </Card>
    </ZeroBootstrapProvider>
  );
}
```

Instale tambem as dependencias visuais do pacote:

```bash
corepack pnpm add bootstrap react-bootstrap
```

## Uso com Tailwind

```tsx
import "@zero-ui/tailwind/styles.css";
import { Button, Card, Input, ZeroTailwindProvider } from "@zero-ui/tailwind";

export function App() {
  return (
    <ZeroTailwindProvider theme="dark">
      <Card variant="glass">
        <Input label="Nome" placeholder="Digite seu nome" />
        <Button variant="gradient">Salvar</Button>
      </Card>
    </ZeroTailwindProvider>
  );
}
```

Instale tambem:

```bash
corepack pnpm add tailwindcss class-variance-authority
```

## Estado atual

Esta etapa cria a fundacao do monorepo e separa a base existente em pacotes. Os primeiros componentes prontos sao `Button`, `Card`, `Badge`, `Input`, `Metric`, `Pill`, `SectionHeading` e os providers de tema. A proxima etapa natural e ampliar os componentes obrigatorios, criar playgrounds reais e adicionar testes de acessibilidade.

# ZERU-UI---AI-libray-CSS-on-bootstrap-tailwind-css
