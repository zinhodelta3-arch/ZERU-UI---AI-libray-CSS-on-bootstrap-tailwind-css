# AGENT.md — ZERO UI

## 0. Idioma e comportamento obrigatório

Você é o Codex trabalhando como Arquiteto Frontend Sênior, Designer System Engineer, Especialista em React, Bootstrap, Tailwind CSS, CSS moderno, acessibilidade, documentação e DX.

Durante todo o desenvolvimento, fale com o usuário em português do Brasil.  
Explique o que está sendo feito de forma direta, mas execute as tarefas com profundidade técnica.

Este projeto se chama **ZERO UI**.

O objetivo é criar uma biblioteca de UI braba, moderna, reutilizável e profissional, com **duas versões oficiais**:

1. **ZERO UI Bootstrap**
2. **ZERO UI Tailwind CSS**

As duas versões devem compartilhar a mesma identidade visual, os mesmos princípios de design, a mesma paleta conceitual, os mesmos padrões de acessibilidade e uma API parecida entre componentes.

A biblioteca não deve parecer genérica de IA. Ela deve parecer um design system real, bem pensado, com componentes úteis para dashboards, e-commerces, sistemas administrativos, landing pages, SaaS, apps modernos e projetos em Next.js/React.

---

## 1. Primeira tarefa obrigatória: pesquisa técnica

Antes de começar a codar, pesquise nas documentações oficiais:

### Bootstrap
- Documentação oficial do Bootstrap 5.3+.
- Componentes oficiais.
- Forms.
- Utilities.
- Color system.
- CSS variables.
- Sass variables, maps, mixins e functions.
- Color modes e `data-bs-theme`.
- Grid, containers, breakpoints e helpers.
- JavaScript plugins oficiais: modal, dropdown, tooltip, popover, toast, collapse, offcanvas, carousel.

### Tailwind CSS
- Documentação oficial do Tailwind CSS atual.
- Instalação moderna.
- Tailwind v4, se o projeto estiver usando Tailwind v4.
- `@theme`.
- Theme variables.
- Custom colors.
- Dark mode.
- Responsive design.
- Animation utilities.
- Transitions.
- Shadows, rings, blur, backdrop blur.
- Container queries.
- Component extraction usando `@layer components`.
- Como criar utilitários e tokens reutilizáveis.

Depois da pesquisa, registre brevemente em `docs/research-notes.md`:
- O que foi aproveitado do Bootstrap.
- O que foi aproveitado do Tailwind CSS.
- Quais escolhas foram feitas para a ZERO UI.
- Quais escolhas foram evitadas e por quê.

Não copie componentes prontos das docs. Use as docs como referência técnica e crie uma identidade própria.

---

## 2. Visão do produto

A ZERO UI deve ser uma biblioteca de componentes com aparência moderna, minimalista, elegante, responsiva e fácil de usar.

Ela precisa ter:

- Componentes prontos.
- Tokens de design.
- Paleta de cores expandida.
- Tema claro e escuro.
- Suporte a backgrounds.
- Suporte a cores de texto.
- Animações básicas.
- Utilitários próprios.
- Variantes de componentes.
- Documentação com exemplos.
- Páginas de demonstração.
- Código limpo e organizado.
- Acessibilidade desde o começo.
- Exports claros.
- Boas práticas para Next.js/React.

A ZERO UI não deve ser apenas um arquivo aleatório de componentes. Ela deve ser estruturada como uma biblioteca real.

---

## 3. Stack recomendada

Crie a biblioteca em React.

Preferência de estrutura:

- Vite para desenvolvimento da biblioteca.
- React.
- TypeScript para os pacotes da biblioteca, mesmo que os exemplos também tenham versão JavaScript.
- CSS Modules, SCSS ou CSS puro para a versão Bootstrap quando necessário.
- Tailwind CSS para a versão Tailwind.
- Bootstrap 5.3+ para a versão Bootstrap.
- Storybook ou uma documentação própria em Next.js/VitePress, caso faça sentido.
- Vitest para testes unitários.
- Testing Library para testes de componentes.
- ESLint e Prettier.
- Changesets para versionamento, se o monorepo for implementado.

Se o projeto atual estiver em JavaScript puro, mantenha compatibilidade: gere tipos, mas forneça exemplos em JS e JSX também.

---

## 4. Estrutura do projeto

Organize em monorepo:

```txt
zero-ui/
├─ AGENT.md
├─ package.json
├─ pnpm-workspace.yaml
├─ README.md
├─ LICENSE
├─ docs/
│  ├─ research-notes.md
│  ├─ design-system.md
│  ├─ accessibility.md
│  ├─ components.md
│  ├─ bootstrap-version.md
│  └─ tailwind-version.md
├─ packages/
│  ├─ core/
│  │  ├─ src/
│  │  │  ├─ tokens/
│  │  │  ├─ utils/
│  │  │  ├─ types/
│  │  │  └─ index.ts
│  │  └─ package.json
│  ├─ bootstrap/
│  │  ├─ src/
│  │  │  ├─ components/
│  │  │  ├─ styles/
│  │  │  ├─ hooks/
│  │  │  ├─ utils/
│  │  │  └─ index.ts
│  │  └─ package.json
│  └─ tailwind/
│     ├─ src/
│     │  ├─ components/
│     │  ├─ styles/
│     │  ├─ hooks/
│     │  ├─ utils/
│     │  └─ index.ts
│     └─ package.json
├─ apps/
│  ├─ docs/
│  ├─ playground-bootstrap/
│  └─ playground-tailwind/
└─ examples/
   ├─ next-bootstrap/
   ├─ next-tailwind/
   ├─ vite-bootstrap/
   └─ vite-tailwind/
```

Se o usuário pedir uma versão simples em arquivo único depois, aí sim crie builds simplificadas:
- `zero-ui-bootstrap.jsx`
- `zero-ui-tailwind.jsx`

Mas a base oficial precisa ser pensada como biblioteca real.

---

## 5. Princípios de design

A ZERO UI deve seguir estes princípios:

1. **Minimalismo premium**  
   Interface limpa, sem excesso visual, mas com personalidade.

2. **Glass moderno controlado**  
   Use blur, transparência e bordas sutis, mas sem destruir legibilidade.

3. **Dark mode de verdade**  
   O tema escuro não pode ser apenas fundo preto. Use superfícies, bordas, sombras e estados bem definidos.

4. **Paleta expansível**  
   Não limitar a biblioteca a `primary`, `danger` e `success`. Criar escala real de cores.

5. **Componentes consistentes**  
   Todos os componentes devem compartilhar tokens de radius, sombra, spacing, texto e foco.

6. **Acessibilidade como base**  
   Foco visível, semântica correta, labels, ARIA quando necessário, navegação por teclado.

7. **Responsividade natural**  
   Componentes devem funcionar em mobile, tablet e desktop.

8. **Sem dependência visual desnecessária**  
   Não use bibliotecas de componentes prontas para fingir que a ZERO UI existe. A ZERO UI precisa ter seus próprios componentes.

---

## 6. Paleta de cores expandida

Crie uma paleta chamada `zero`.

A paleta deve misturar identidade futurista, neutra e energética.

### Escalas obrigatórias

```txt
zero-neutral
zero-slate
zero-purple
zero-violet
zero-cyan
zero-blue
zero-emerald
zero-amber
zero-orange
zero-red
zero-pink
```

Cada escala deve ter tons:

```txt
50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
```

### Tokens semânticos obrigatórios

```txt
background
foreground
surface
surface-elevated
surface-muted
card
card-foreground
popover
popover-foreground
primary
primary-foreground
secondary
secondary-foreground
accent
accent-foreground
muted
muted-foreground
success
success-foreground
warning
warning-foreground
danger
danger-foreground
info
info-foreground
border
border-strong
input
ring
focus
link
link-hover
glass
glass-border
shadow
```

### Backgrounds obrigatórios

Crie classes/tokens para:

```txt
zui-bg-default
zui-bg-muted
zui-bg-surface
zui-bg-elevated
zui-bg-glass
zui-bg-gradient-primary
zui-bg-gradient-cosmic
zui-bg-gradient-aurora
zui-bg-gradient-danger
zui-bg-grid
zui-bg-dots
zui-bg-noise
```

### Text colors obrigatórios

Crie classes/tokens para:

```txt
zui-text-default
zui-text-muted
zui-text-subtle
zui-text-primary
zui-text-secondary
zui-text-accent
zui-text-success
zui-text-warning
zui-text-danger
zui-text-info
zui-text-inverse
zui-text-gradient
```

---

## 7. Tokens de design

Crie tokens para:

### Spacing
```txt
0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32
```

### Radius
```txt
none
xs
sm
md
lg
xl
2xl
3xl
full
```

### Shadows
```txt
none
xs
sm
md
lg
xl
2xl
inner
glow
glow-primary
glow-danger
```

### Typography
```txt
font-sans
font-mono
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-display
leading-tight
leading-normal
leading-relaxed
```

### Z-index
```txt
base
dropdown
sticky
fixed
overlay
modal
popover
toast
tooltip
max
```

### Motion
```txt
duration-fast
duration-normal
duration-slow
ease-standard
ease-emphasized
ease-spring
```

---

## 8. Tema claro e escuro

### Bootstrap
A versão Bootstrap deve suportar:
- `data-bs-theme="light"`
- `data-bs-theme="dark"`
- `data-zui-theme="light"`
- `data-zui-theme="dark"`
- `data-zui-theme="cosmic"` como tema extra opcional.

Use CSS variables e, quando necessário, Sass maps para gerar as variações.

### Tailwind
A versão Tailwind deve suportar:
- `dark:` variant.
- Classe `.dark`.
- Tokens em `@theme`.
- Variáveis CSS em `:root` e `.dark`.
- `data-theme="cosmic"` opcional.

A troca de tema deve funcionar em:
- app inteiro;
- componentes isolados;
- exemplos da documentação.

Crie um hook:

```ts
useZeroTheme()
```

Com:
```ts
theme
setTheme("light" | "dark" | "system" | "cosmic")
toggleTheme()
resolvedTheme
```

---

## 9. Animações básicas obrigatórias

Crie animações simples, úteis e reutilizáveis.

### Animações
```txt
fade-in
fade-out
slide-up
slide-down
slide-left
slide-right
scale-in
scale-out
zoom-in
zoom-out
spin-soft
pulse-soft
ping-soft
float
shake
glow
shimmer
skeleton
accordion-down
accordion-up
modal-in
modal-out
toast-in
toast-out
drawer-in-left
drawer-in-right
drawer-out-left
drawer-out-right
```

### Classes
Bootstrap:
```txt
zui-animate-fade-in
zui-animate-slide-up
zui-animate-scale-in
zui-animate-float
zui-animate-glow
zui-animate-shimmer
zui-animate-skeleton
```

Tailwind:
- Criar tokens `--animate-*` em `@theme`.
- Criar classes utilitárias quando necessário.
- Suportar `motion-safe:` e `motion-reduce:`.

Todas as animações devem respeitar `prefers-reduced-motion`.

---

## 10. Componentes obrigatórios

Crie os componentes em ambas as versões, mantendo API parecida.

### 10.1 Base

- `ZeroProvider`
- `ThemeProvider`
- `Button`
- `IconButton`
- `ButtonGroup`
- `LinkButton`
- `Badge`
- `Kbd`
- `Code`
- `Divider`
- `Separator`
- `VisuallyHidden`

### 10.2 Layout

- `Container`
- `Section`
- `Grid`
- `Stack`
- `Cluster`
- `Flex`
- `Spacer`
- `AppShell`
- `Sidebar`
- `Navbar`
- `Header`
- `Footer`
- `Main`
- `Page`
- `PageHeader`

### 10.3 Navegação

- `Breadcrumb`
- `Tabs`
- `Pills`
- `Pagination`
- `Dropdown`
- `CommandMenu`
- `Menu`
- `Stepper`
- `Timeline`

### 10.4 Feedback

- `Alert`
- `Toast`
- `Toaster`
- `Progress`
- `Spinner`
- `LoadingOverlay`
- `Skeleton`
- `EmptyState`
- `Result`
- `Callout`

### 10.5 Overlay

- `Modal`
- `Drawer`
- `Offcanvas`
- `Popover`
- `Tooltip`
- `ConfirmDialog`
- `Sheet`

### 10.6 Dados

- `Table`
- `DataTable`
- `StatCard`
- `MetricCard`
- `ChartCard`
- `List`
- `DescriptionList`
- `Avatar`
- `AvatarGroup`
- `UserCard`
- `ActivityFeed`

### 10.7 Forms

- `Form`
- `FormGroup`
- `Label`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Radio`
- `Switch`
- `Range`
- `FileInput`
- `InputGroup`
- `FloatingInput`
- `SearchInput`
- `PasswordInput`
- `OtpInput`
- `ColorInput`
- `FieldError`
- `FieldHint`

### 10.8 E-commerce/Admin úteis

- `ProductCard`
- `ProductGrid`
- `PriceTag`
- `OrderStatusBadge`
- `CartItem`
- `CheckoutSummary`
- `AdminCard`
- `AdminSidebar`
- `DashboardShell`
- `NotificationItem`
- `ProfileMenu`

---

## 11. Variantes obrigatórias dos componentes

### Button
Props:
```ts
variant:
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "ghost"
  | "soft"
  | "outline"
  | "link"
  | "glass"
  | "gradient"

size:
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "icon"

radius:
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full"

loading?: boolean
disabled?: boolean
leftIcon?: ReactNode
rightIcon?: ReactNode
```

### Card
Props:
```ts
variant:
  | "default"
  | "elevated"
  | "outline"
  | "soft"
  | "glass"
  | "gradient"

interactive?: boolean
hover?: boolean
```

### Badge
Props:
```ts
variant:
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral"
  | "outline"
  | "soft"
```

### Input
Props:
```ts
size: "sm" | "md" | "lg"
state: "default" | "success" | "warning" | "danger"
leftIcon?: ReactNode
rightIcon?: ReactNode
clearable?: boolean
```

---

## 12. Versão Bootstrap

A versão Bootstrap deve:

1. Usar Bootstrap 5.3+.
2. Aproveitar classes oficiais quando fizer sentido.
3. Criar camada própria `zui-*` sem quebrar Bootstrap.
4. Usar CSS variables com prefixo `--zui-*`.
5. Usar Sass quando necessário para gerar:
   - cores;
   - temas;
   - utilities;
   - variantes;
   - components.
6. Ser compatível com `bootstrap-icons`, mas não depender obrigatoriamente dele.
7. Usar JavaScript do Bootstrap apenas quando fizer sentido.
8. Criar componentes React que encapsulem padrões Bootstrap sem ficar preso a HTML puro.
9. Permitir importação global:
   ```ts
   import "@zero-ui/bootstrap/styles.css";
   ```
10. Permitir importação por componente:
   ```ts
   import { Button, Card, Modal } from "@zero-ui/bootstrap";
   ```

### Classes Bootstrap ZERO UI

Criar classes como:

```txt
zui-btn
zui-btn-primary
zui-btn-soft
zui-btn-glass
zui-card
zui-card-glass
zui-input
zui-modal
zui-drawer
zui-navbar
zui-sidebar
zui-table
zui-badge
zui-alert
zui-toast
zui-skeleton
zui-avatar
zui-empty-state
```

### Integração com Bootstrap

Onde fizer sentido, combine com classes oficiais:

```txt
btn
card
modal
dropdown
toast
alert
navbar
container
row
col
form-control
form-select
form-check
input-group
table
pagination
breadcrumb
progress
spinner-border
```

Mas a ZERO UI deve adicionar:
- visual próprio;
- tokens;
- variantes;
- animações;
- modo glass;
- melhor consistência.

---

## 13. Versão Tailwind CSS

A versão Tailwind deve:

1. Usar Tailwind moderno.
2. Preferir tokens em `@theme`.
3. Criar componentes usando classes Tailwind.
4. Criar utilitários próprios em `@layer utilities`.
5. Criar componentes base em `@layer components`.
6. Suportar dark mode.
7. Suportar animações customizadas.
8. Exportar CSS:
   ```ts
   import "@zero-ui/tailwind/styles.css";
   ```
9. Exportar preset/config se necessário:
   ```ts
   import zeroPreset from "@zero-ui/tailwind/preset";
   ```
10. Permitir importação por componente:
   ```ts
   import { Button, Card, Modal } from "@zero-ui/tailwind";
   ```

### Exemplo de base Tailwind

```css
@import "tailwindcss";

@theme {
  --color-zero-primary-50: #f5f3ff;
  --color-zero-primary-500: #7c3aed;
  --color-zero-primary-600: #6d28d9;
  --color-zero-background: #09090b;
  --color-zero-foreground: #fafafa;

  --radius-zui-md: 0.75rem;
  --radius-zui-xl: 1.25rem;

  --shadow-zui-glow: 0 0 32px rgb(124 58 237 / 0.35);

  --animate-zui-fade-in: zui-fade-in 220ms ease-out both;
}

@keyframes zui-fade-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 14. Acessibilidade obrigatória

Todos os componentes devem considerar:

- `aria-label` quando necessário.
- `aria-expanded` em dropdowns, accordions e menus.
- `aria-controls` quando necessário.
- `role="dialog"` em modais.
- `aria-modal="true"` em modais.
- Foco inicial em modal/dialog.
- Escape fecha modal/dialog/dropdown.
- Tab e Shift+Tab funcionam.
- Estados disabled reais.
- Contraste mínimo decente.
- Foco visível.
- `prefers-reduced-motion`.
- Labels em inputs.
- Mensagens de erro associadas ao campo.
- Componentes interativos usando `button`, não `div` clicável.

Crie `docs/accessibility.md` explicando as decisões.

---

## 15. Qualidade visual

Todos os componentes devem ter:

- espaçamento consistente;
- bordas suaves;
- estados hover/focus/active/disabled;
- animação leve;
- transição suave;
- tema escuro bonito;
- suporte a mobile;
- exemplos reais;
- visual não genérico.

Evite:
- sombra exagerada;
- blur ilegível;
- cores estouradas;
- componentes sem estado;
- interface sem espaçamento;
- classes mágicas sem explicação;
- dependência visual de uma única cor.

---

## 16. Documentação obrigatória

Crie uma documentação com:

- Introdução da ZERO UI.
- Instalação.
- Como escolher Bootstrap ou Tailwind.
- Como usar tema claro/escuro.
- Como configurar paleta.
- Como importar CSS.
- Como usar componentes.
- API de cada componente.
- Props de cada componente.
- Exemplos reais.
- Guia de migração.
- Guia de customização.
- Guia de acessibilidade.
- Changelog.

Cada componente deve ter pelo menos:

```txt
- Descrição.
- Quando usar.
- Quando evitar.
- Exemplo básico.
- Exemplo com variante.
- Exemplo dark mode.
- Props.
- Notas de acessibilidade.
```

---

## 17. Playgrounds obrigatórios

Crie dois playgrounds:

### `playground-bootstrap`
Deve demonstrar:
- dashboard;
- formulário;
- modal;
- sidebar;
- cards;
- tabela;
- toast;
- tema claro/escuro.

### `playground-tailwind`
Deve demonstrar:
- dashboard;
- formulário;
- modal;
- sidebar;
- cards;
- tabela;
- toast;
- tema claro/escuro.

Os dois playgrounds devem parecer visualmente irmãos, mas usando suas stacks respectivas.

---

## 18. Exemplos obrigatórios

Crie exemplos prontos:

1. Dashboard admin.
2. E-commerce product grid.
3. Página de login.
4. Página de configurações.
5. Tabela de usuários.
6. Modal de criação/edição.
7. Sidebar responsiva.
8. Navbar com tema.
9. Empty state.
10. Toast notifications.

---

## 19. API e exports

Cada pacote deve ter exports limpos.

### Core

```ts
export * from "./tokens";
export * from "./utils";
export * from "./types";
```

### Bootstrap

```ts
export * from "./components/Button";
export * from "./components/Card";
export * from "./components/Modal";
export * from "./components/Input";
export * from "./components/Sidebar";
export * from "./components/Table";
export * from "./hooks/useZeroTheme";
```

### Tailwind

```ts
export * from "./components/Button";
export * from "./components/Card";
export * from "./components/Modal";
export * from "./components/Input";
export * from "./components/Sidebar";
export * from "./components/Table";
export * from "./hooks/useZeroTheme";
```

Não exporte componentes quebrados ou incompletos.

---

## 20. Testes obrigatórios

Crie testes para:

- renderização básica;
- variants;
- sizes;
- disabled;
- loading;
- clique;
- acessibilidade mínima;
- tema claro/escuro;
- classes geradas;
- componentes com children;
- componentes controlados e não controlados quando aplicável.

Use Testing Library sempre que fizer sentido.

---

## 21. Checklist de finalização

Antes de dizer que terminou, revise:

- [ ] A biblioteca tem duas versões reais?
- [ ] Bootstrap e Tailwind têm identidade parecida?
- [ ] Existem tokens compartilhados?
- [ ] Existem cores de background?
- [ ] Existem cores de texto?
- [ ] A paleta foi expandida?
- [ ] Há tema claro e escuro?
- [ ] Há animações básicas?
- [ ] Os componentes principais existem?
- [ ] Os componentes têm estados?
- [ ] O foco visível funciona?
- [ ] A documentação existe?
- [ ] Os exemplos existem?
- [ ] O dashboard de demo existe?
- [ ] O build passa?
- [ ] Os testes passam?
- [ ] Não há imports quebrados?
- [ ] Não há classes inexistentes?
- [ ] Não há dependências desnecessárias?
- [ ] O README explica como usar?

---

## 22. Prioridade de implementação

Siga esta ordem:

1. Pesquisar docs oficiais e criar `docs/research-notes.md`.
2. Criar estrutura do monorepo.
3. Criar pacote `core` com tokens e utilitários.
4. Criar paleta e tokens.
5. Criar CSS base da versão Bootstrap.
6. Criar CSS base da versão Tailwind.
7. Criar `ZeroProvider` e tema.
8. Criar componentes base:
   - Button
   - Card
   - Badge
   - Input
   - Modal
   - Alert
   - Toast
   - Spinner
   - Skeleton
9. Criar layout:
   - Container
   - Sidebar
   - Navbar
   - AppShell
10. Criar dados/forms:
   - Table
   - FormGroup
   - Select
   - Checkbox
   - Switch
11. Criar docs.
12. Criar playgrounds.
13. Criar testes.
14. Revisar visual e acessibilidade.
15. Corrigir tudo antes de entregar.

---

## 23. Regras de código

- Não use `any` sem necessidade.
- Não use CSS inline como padrão.
- Não crie componente sem `className`.
- Todos os componentes React devem aceitar `className`.
- Componentes com ref devem usar `forwardRef` quando fizer sentido.
- Props devem ser documentadas.
- Variants devem ser previsíveis.
- Evite lógica duplicada.
- Use utilitário `cn()` para classes.
- Use prefixo `zui` para classes próprias.
- Não quebre o Bootstrap original.
- Não force Tailwind em projetos Bootstrap.
- Não force Bootstrap em projetos Tailwind.
- Não misture as duas versões no mesmo pacote.

---

## 24. Utilitários obrigatórios

Crie em `core`:

```ts
cn()
createVariantClass()
getInitials()
clamp()
composeRefs()
useControllableState()
useMediaQuery()
useIsomorphicLayoutEffect()
```

Crie em Bootstrap e Tailwind apenas utilitários específicos de estilo quando necessário.

---

## 25. Resultado esperado

Ao finalizar, o projeto deve permitir algo assim:

### Bootstrap

```tsx
import "@zero-ui/bootstrap/styles.css";
import { Button, Card, Input, Modal } from "@zero-ui/bootstrap";

export default function App() {
  return (
    <Card variant="glass">
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="gradient">Salvar</Button>
    </Card>
  );
}
```

### Tailwind

```tsx
import "@zero-ui/tailwind/styles.css";
import { Button, Card, Input, Modal } from "@zero-ui/tailwind";

export default function App() {
  return (
    <Card variant="glass">
      <Input label="Nome" placeholder="Digite seu nome" />
      <Button variant="gradient">Salvar</Button>
    </Card>
  );
}
```

A API deve ser parecida. A diferença deve estar na implementação interna de cada versão.

---

## 26. Entrega final

Ao terminar, informe:

1. O que foi criado.
2. Como instalar.
3. Como rodar.
4. Como testar.
5. Como usar a versão Bootstrap.
6. Como usar a versão Tailwind.
7. Quais componentes existem.
8. Quais arquivos principais foram alterados.
9. Limitações atuais.
10. Próximos passos recomendados.

Não diga apenas “feito”. Entregue um resumo técnico real.

---

## 27. Fontes oficiais que devem ser consultadas durante a execução

Use principalmente:

- Bootstrap Documentation: https://getbootstrap.com/docs/5.3/
- Bootstrap Components: https://getbootstrap.com/docs/5.3/components/
- Bootstrap Forms: https://getbootstrap.com/docs/5.3/forms/overview/
- Bootstrap Customize: https://getbootstrap.com/docs/5.3/customize/overview/
- Bootstrap Color Modes: https://getbootstrap.com/docs/5.3/customize/color-modes/
- Bootstrap Color System: https://getbootstrap.com/docs/5.3/customize/color/
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Tailwind Theme Variables: https://tailwindcss.com/docs/theme
- Tailwind Colors: https://tailwindcss.com/docs/customizing-colors
- Tailwind Dark Mode: https://tailwindcss.com/docs/dark-mode
- Tailwind Animation: https://tailwindcss.com/docs/animation
- Tailwind v4 Blog: https://tailwindcss.com/blog/tailwindcss-v4

Use essas fontes como base técnica, não como cópia visual.
