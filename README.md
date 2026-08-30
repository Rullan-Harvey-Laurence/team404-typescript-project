# team404-typescript-project

DLSU-D Internet Languages and Tools 2 Lec — EA2 Part 1.

A minimal TypeScript project: `script.ts` is transpiled to `script.js`, which
`index.html` loads as an ES module.

## Setup

```bash
npm install
```

## Build

```bash
npm run build   # tsc: compiles script.ts -> script.js
npm run watch   # tsc -w: recompile on every save
```

## Run

```bash
npm start        # serves the folder with lite-server, opens index.html
```

Or just open `index.html` in a browser after building.

## Layout

| File            | Purpose                                          |
| --------------- | ------------------------------------------------ |
| `script.ts`     | Source. Edit this.                               |
| `script.js`     | Transpiler output loaded by `index.html`.        |
| `index.html`    | Entry page.                                      |
| `tsconfig.json` | Compiler config (target/module ES2020, strict).  |
