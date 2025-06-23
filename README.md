# React Router v7 + Emotion v12 + Vite

## Getting started

```bash
npm install && npm run dev
```

Open the browser devtools, you will see the hydration error and the critical css is not applied.

For full explanation, please check https://github.com/mui/material-ui/issues/45878#issuecomment-2987441663.

## Fix the hydration error

To make the SSR works with critical css, update the path in `node_modules`:

- Change `vite.config.js` and uncomment the `ssr.noExternal` option.
