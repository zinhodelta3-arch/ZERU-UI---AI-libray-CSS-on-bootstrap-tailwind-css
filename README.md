# ZERO UI

ZERO UI e uma biblioteca React em monorepo com duas versoes oficiais:

- `zeroui-bootstrap`
- `zeroui-tailwind`

A base original foi separada em pacotes independentes para manter Bootstrap e Tailwind com a mesma identidade visual, mas sem misturar dependencias ou estilos.

## Instalar pelo npm

Bootstrap:

```bash
npm install zeroui-bootstrap bootstrap react-bootstrap
```

Tailwind:

```bash
npm install zeroui-tailwind tailwindcss
```

Os pacotes tambem funcionam em projetos JSX. O codigo fonte da biblioteca e TSX, mas o pacote publicado entrega JavaScript compilado e tipos TypeScript.

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

```jsx
import "zeroui-bootstrap/styles.css";
import { Button, Card, Input, ZeroBootstrapProvider } from "zeroui-bootstrap";

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

```jsx
import "zeroui-tailwind/styles.css";
import { Button, Card, Input, ZeroTailwindProvider } from "zeroui-tailwind";

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

## Pacotes publicados

- [`zeroui-core`](https://www.npmjs.com/package/zeroui-core): tokens, tipos, hooks e utilitarios compartilhados.
- [`zeroui-bootstrap`](https://www.npmjs.com/package/zeroui-bootstrap): componentes React para Bootstrap 5.3+.
- [`zeroui-tailwind`](https://www.npmjs.com/package/zeroui-tailwind): componentes React para Tailwind CSS.

Versao atual publicada: `0.1.0`.

## Estado atual

Esta etapa cria a fundacao do monorepo e separa a base existente em pacotes. Os primeiros componentes prontos sao `Button`, `Card`, `Badge`, `Input`, `Metric`, `Pill`, `SectionHeading` e os providers de tema. A proxima etapa natural e ampliar os componentes obrigatorios, criar playgrounds reais e adicionar testes de acessibilidade.

# ZERU-UI---AI-libray-CSS-on-bootstrap-tailwind-css
