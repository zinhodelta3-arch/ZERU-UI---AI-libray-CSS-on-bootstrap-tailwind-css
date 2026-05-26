# ZERO UI research notes

Pesquisa feita em 2026-05-26 usando as documentacoes oficiais.

## Bootstrap

Fontes:

- https://getbootstrap.com/docs/5.3/getting-started/introduction/
- https://getbootstrap.com/docs/5.3/customize/css-variables/
- https://getbootstrap.com/docs/5.3/customize/color-modes/

O que foi aproveitado:

- Bootstrap 5.3 segue como camada de integracao para a versao `@zero-ui/bootstrap`.
- A biblioteca usa classes oficiais onde faz sentido (`btn`, `card`, `badge`, `form-control`, `spinner-border`) e adiciona uma camada visual propria com prefixo `zui-*`.
- A estrategia de tema usa `data-bs-theme` para compatibilidade com o Bootstrap e `data-zui-theme` para tokens da ZERO UI.
- Variaveis CSS sao a base dos temas para permitir troca em tempo real sem exigir recompilacao Sass.

Escolhas feitas:

- Manter Bootstrap como peer dependency.
- Criar `styles.css` proprio em vez de injetar CSS por componente.
- Exportar aliases legados (`ZeroButton`, `ZeroPanel`, `ZeroPill`) para preservar a base inicial.

Escolhas evitadas:

- Nao copiar componentes prontos das docs.
- Nao sobrescrever Bootstrap globalmente fora da camada `zui-*`.
- Nao misturar Tailwind no pacote Bootstrap.

## Tailwind CSS

Fontes:

- https://tailwindcss.com/docs/theme
- https://tailwindcss.com/docs/dark-mode
- https://tailwindcss.com/docs/animation

O que foi aproveitado:

- Tokens do pacote Tailwind ficam em `@theme`, porque isso cria utilitarios correspondentes.
- O modo escuro usa `@custom-variant dark (&:where(.dark, .dark *))`.
- Animacoes sao declaradas com variaveis `--animate-*` e respeitam `prefers-reduced-motion`.

Escolhas feitas:

- Manter `class-variance-authority` para variantes de componentes.
- Usar `@zero-ui/core` para `cn()`, tokens, tipos e hooks compartilhados.
- Criar classes utilitarias `zui-bg-*`, `zui-text-*` e `zui-animate-*` no CSS do pacote.

Escolhas evitadas:

- Nao depender de shadcn/ui ou bibliotecas visuais prontas.
- Nao acoplar Tailwind ao pacote Bootstrap.
- Nao usar uma paleta de uma cor so; os tokens iniciais cobrem neutros, violeta, cyan, blue, emerald, amber, orange, red e pink.
