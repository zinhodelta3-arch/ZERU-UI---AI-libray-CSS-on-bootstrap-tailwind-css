# ZERU UI research notes

Pesquisa refeita em 2026-05-27 usando busca web direta porque o plugin do navegador ficou instavel.

## Bootstrap

Fontes:

- https://getbootstrap.com/docs/5.3/customize/overview/
- https://getbootstrap.com/docs/5.3/customize/components/
- https://getbootstrap.com/docs/5.3/utilities/colors/
- https://getbootstrap.com/docs/5.3/components/card/

O que foi aproveitado:

- Bootstrap 5.3 documenta a abordagem base/modifier, entao a ZERU UI usa `.zu-btn` + `.zu-btn-primary`, `.zu-card` + `.zu-card-glass` etc.
- A versao Bootstrap agora tem bridge em `zeru-ui/bootstrap.css`, sem exigir import de componentes React.
- Classes Bootstrap oficiais continuam funcionando quando combinadas com `.zu-*`.

Escolhas feitas:

- Manter os pacotes antigos `zeroui-bootstrap` e `zeroui-tailwind` para compatibilidade.
- Criar pacote unificado `zeru-ui` com `core.css`, `bootstrap.css`, `tailwind.css`, `react` e `motion`.
- Usar tokens CSS em runtime para tema, cores, radius, sombras, blur, z-index, transicoes e animacoes.

Escolhas evitadas:

- Nao copiar componentes prontos das docs.
- Nao sobrescrever Bootstrap globalmente fora da camada `zu-*`.
- Nao misturar Tailwind no pacote Bootstrap.

## Tailwind CSS

Fontes:

- https://tailwindcss.com/docs/theme
- https://tailwindcss.com/docs/adding-custom-styles
- https://tailwindcss.com/blog/tailwindcss-v4

O que foi aproveitado:

- Tailwind v4 prioriza configuracao CSS-first, `@theme`, cascade layers e custom properties.
- `zeru-ui/tailwind.css` importa Tailwind e mapeia tokens `.zu-*` para tokens `--color-*`, `--radius-*`, `--shadow-*` e `--animate-*`.
- O modo escuro aceita `.dark`, `.zu-theme-dark` e `[data-zu-theme="dark"]`.

## Motion

Fontes:

- https://motion.dev/
- https://motion.dev/docs/react
- https://motion.dev/docs/react-animation
- https://motion.dev/docs/react-motion-component
- https://motion.dev/docs/react-gestures

O que foi aproveitado:

- Motion deve ser uma camada opcional para microinteracoes, entrada, scroll e gestos.
- A primeira entrega expoe `zeru-ui/motion` com presets CSS/React leves e sem dependencia obrigatoria de Motion.dev.
- `prefers-reduced-motion` e respeitado no CSS core.

## Design systems acessiveis

Fontes:

- https://www.radix-ui.com/primitives/docs/overview/introduction
- https://ui.shadcn.com/docs
- https://material-web.dev/theming/material-theming/
- https://open-props.style/

O que foi aproveitado:

- Radix reforca acessibilidade, composicao e componentes sem estilo como base conceitual.
- shadcn/ui reforca composicao, defaults bonitos e codigo aberto/modificavel.
- Material Web reforca tokens em camadas: referencia, sistema e componente.
- Open Props reforca tokens CSS reutilizaveis em qualquer framework.

## Referencias visuais

Fontes:

- https://www.awwwards.com/websites/technology/
- https://www.cssdesignawards.com/

O que foi aproveitado:

- Direcao visual com tipografia forte, glass controlado, backgrounds de malha/aurora, cards densos e motion suave.
- Evitei copiar sites, nomes internos ou codigo; a pesquisa serviu apenas para orientar o nivel de acabamento.
