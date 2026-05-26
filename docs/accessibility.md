# Accessibility

ZERO UI deve tratar acessibilidade como comportamento padrao.

- Componentes interativos usam elementos nativos como `button` e `input`.
- Estados `disabled` e `aria-busy` sao refletidos quando ha loading.
- Inputs aceitam `label`, `hint` e `error`, com associacao por `id`.
- Foco visivel usa token `--zui-focus`.
- Animacoes devem respeitar `prefers-reduced-motion`.
- Modais, dropdowns e menus ainda precisam de uma rodada propria de foco, escape e navegacao por teclado nas proximas etapas.
