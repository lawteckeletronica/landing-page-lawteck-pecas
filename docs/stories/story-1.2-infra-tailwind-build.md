# Story 1.2: Infraestrutura — Tailwind npm + Build

**Epic:** LANDING-DEBT
**Fase:** 2
**Estimativa:** 5.5 horas
**Prioridade:** P2
**Depende de:** Story 1.1 (Git inicializado)

---

## Objetivo

Migrar Tailwind do CDN para npm, remover import map duplicado e otimizar o build para produção.

---

## Tasks

- [x] **SYS-04/05:** Instalar Tailwind CSS v4 via npm (`tailwindcss`, `@tailwindcss/vite`)
- [x] **SYS-04/05:** Configurar tema via CSS `@theme` (Tailwind v4 — sem tailwind.config.js)
- [x] **SYS-04/05:** Plugin Vite configurado (sem postcss.config.js no v4)
- [x] **SYS-04/05:** `@import "tailwindcss"` + `@theme` no `index.css`
- [x] **SYS-04/05:** Removido `<script src="tailwind CDN">` do `index.html`
- [x] **SYS-04/05:** Removida config inline do `index.html`
- [x] **SYS-06:** Removido `<script type="importmap">` do `index.html`
- [x] **UX-14:** Google Fonts reduzido para 400, 600, 700, 800, 900 (removido 500)
- [x] Build funcional: `npm run build` sem erros (970ms)
- [x] CSS compilado: **33KB** (gzip 6.5KB) — meta era <50KB ✅

---

## Critérios de Aceite

- [x] `npm run dev` funciona sem CDN do Tailwind
- [x] `npm run build` produz build de produção sem erros
- [x] CSS compilado 33KB < 50KB (vs ~3MB do CDN)
- [x] Todas as cores brand configuradas via @theme
- [x] Nenhum `<script>` de CDN no `index.html` (só Google Fonts via `<link>`)
- [x] Import map removido sem quebrar nada

---

## Arquivos Afetados

- `package.json` — novas deps (tailwindcss, postcss, autoprefixer)
- `tailwind.config.js` — NOVO
- `postcss.config.js` — NOVO
- `index.html` — remover CDN scripts + import map + reduzir fonts
- `index.css` — adicionar @tailwind directives

---

*Story criada por @pm — Brownfield Discovery Fase 10*
