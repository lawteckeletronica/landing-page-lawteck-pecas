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

- [ ] **SYS-04/05:** Instalar Tailwind CSS via npm (`tailwindcss`, `postcss`, `autoprefixer`)
- [ ] **SYS-04/05:** Criar `tailwind.config.js` com as cores brand (migrar do inline HTML)
- [ ] **SYS-04/05:** Configurar `postcss.config.js`
- [ ] **SYS-04/05:** Mover `@tailwind` directives para `index.css`
- [ ] **SYS-04/05:** Remover `<script src="tailwind CDN">` do `index.html`
- [ ] **SYS-04/05:** Remover config inline do `index.html`
- [ ] **SYS-06:** Remover `<script type="importmap">` do `index.html`
- [ ] **UX-14:** Reduzir Google Fonts para pesos 400, 600, 700
- [ ] Verificar que `npm run build` produz build funcional
- [ ] Verificar que CSS compilado < 50KB

---

## Critérios de Aceite

- [ ] `npm run dev` funciona sem CDN do Tailwind
- [ ] `npm run build` produz build de produção sem erros
- [ ] CSS compilado < 50KB (vs ~3MB do CDN)
- [ ] Todas as cores brand renderizam corretamente
- [ ] Nenhum `<script>` de CDN no `index.html` (exceto Google Fonts)
- [ ] Import map removido sem quebrar nada

---

## Arquivos Afetados

- `package.json` — novas deps (tailwindcss, postcss, autoprefixer)
- `tailwind.config.js` — NOVO
- `postcss.config.js` — NOVO
- `index.html` — remover CDN scripts + import map + reduzir fonts
- `index.css` — adicionar @tailwind directives

---

*Story criada por @pm — Brownfield Discovery Fase 10*
