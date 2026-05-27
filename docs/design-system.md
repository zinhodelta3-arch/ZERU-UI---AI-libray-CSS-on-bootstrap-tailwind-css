# ZERU UI design system

ZERU UI agora tem uma camada unificada em `zeru-ui`, mantendo os pacotes antigos `zeroui-*` por compatibilidade.

## Principios

- Minimalismo premium.
- Glass controlado, sempre preservando contraste.
- Temas claro, escuro, purple, orange, neutral, aurora e cyber.
- Estados visiveis de hover, focus, active, disabled e loading.
- Uso principal por import global de CSS.
- React e Motion sao camadas opcionais.

## Prefixos

- Variaveis CSS novas: `--zu-*`
- Classes novas: `.zu-*`
- Prefixos antigos `--zui-*` e `.zui-*` permanecem nos pacotes legados.

## Imports principais

```jsx
import "zeru-ui/bootstrap.css";
```

```jsx
import "zeru-ui/tailwind.css";
```

## Camadas

- `zeru-ui/core.css`: tokens, temas, layout, tipografia, componentes CSS, backgrounds e animacoes.
- `zeru-ui/bootstrap.css`: core + ajustes para combinar com classes Bootstrap.
- `zeru-ui/tailwind.css`: Tailwind v4 + core + tokens `@theme`.
- `zeru-ui/react`: componentes React opcionais.
- `zeru-ui/motion`: presets e componentes de motion opcionais sem dependencia obrigatoria.
