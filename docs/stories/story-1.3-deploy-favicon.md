# Story 1.3: Infraestrutura — Deploy + Favicon

**Epic:** LANDING-DEBT
**Fase:** 2
**Estimativa:** 3 horas
**Prioridade:** P2
**Depende de:** Story 1.2 (build funcional)

---

## Objetivo

Publicar a landing page na internet e adicionar favicon da marca.

---

## Tasks

- [x] **SYS-13:** Plataforma: Vercel (conta lawteckeletronica)
- [x] **SYS-13:** Deploy via CLI. Auto-deploy pendente (conectar repo no dashboard Vercel)
- [x] **SYS-13:** Página acessível: https://lawteck-pecas-landing.vercel.app
- [x] **SYS-12:** Favicon SVG criado (snowflake + zap, brand blue + yellow)
- [x] **SYS-12:** Favicon ICO fallback gerado (16x16, brand blue)
- [x] **SYS-12:** Links `<link rel="icon">` SVG + ICO no HTML

---

## Decisões Necessárias

- **Plataforma:** Vercel (já usado no Estoque) ou Cloudflare Pages (já usado no Blog)?
- **Domínio:** Subdomínio de lawteck.com.br ou URL da plataforma?

---

## Critérios de Aceite

- [x] Página acessível via URL pública (HTTPS): https://lawteck-pecas-landing.vercel.app
- [ ] Deploy automático ao fazer push (pendente: conectar repo no dashboard Vercel)
- [x] Favicon SVG + ICO adicionados ao HTML
- [ ] Mobile: apple-touch-icon (pendente: precisa converter SVG→PNG)

---

## Arquivos Afetados

- `index.html` — favicon links
- `public/` — favicon arquivos
- Arquivo de config da plataforma (vercel.json ou similar)

---

*Story criada por @pm — Brownfield Discovery Fase 10*
