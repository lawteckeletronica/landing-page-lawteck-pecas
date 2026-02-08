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

- [ ] **SYS-13:** Escolher plataforma de deploy (Vercel ou Cloudflare Pages)
- [ ] **SYS-13:** Configurar deploy automático a partir do repositório Git
- [ ] **SYS-13:** Verificar que a página está acessível via URL pública
- [ ] **SYS-12:** Criar favicon SVG com identidade Lawteck (flocos de neve + raio)
- [ ] **SYS-12:** Gerar favicons em múltiplos tamanhos (16, 32, 180, 192, 512)
- [ ] **SYS-12:** Adicionar `<link rel="icon">` e `<link rel="apple-touch-icon">` no HTML

---

## Decisões Necessárias

- **Plataforma:** Vercel (já usado no Estoque) ou Cloudflare Pages (já usado no Blog)?
- **Domínio:** Subdomínio de lawteck.com.br ou URL da plataforma?

---

## Critérios de Aceite

- [ ] Página acessível via URL pública (HTTPS)
- [ ] Deploy automático ao fazer push
- [ ] Favicon aparece em todas as abas e bookmarks
- [ ] Mobile: apple-touch-icon funcional

---

## Arquivos Afetados

- `index.html` — favicon links
- `public/` — favicon arquivos
- Arquivo de config da plataforma (vercel.json ou similar)

---

*Story criada por @pm — Brownfield Discovery Fase 10*
