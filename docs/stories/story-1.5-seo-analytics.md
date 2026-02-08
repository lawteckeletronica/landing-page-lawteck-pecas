# Story 1.5: SEO + Analytics

**Epic:** LANDING-DEBT
**Fase:** 3
**Estimativa:** 6 horas
**Prioridade:** P3
**Depende de:** Story 1.3 (deploy configurado)

---

## Objetivo

Tornar a página visível no Google e instalar analytics para medir conversão.

---

## Tasks

### SEO (3h)
- [x] **SYS-10:** Meta description otimizado com keywords
- [x] **SYS-10:** Open Graph tags (og:title, og:description, og:image, og:url, og:locale)
- [x] **SYS-10:** Twitter Card tags (summary_large_image)
- [x] **SYS-10:** `robots.txt` criado
- [x] **SYS-10:** `sitemap.xml` criado
- [x] **SYS-10:** JSON-LD structured data (LocalBusiness + Product ItemList com 4 produtos)
- [x] **SYS-10:** Canonical URL configurado
- [ ] Submeter sitemap no Google Search Console (ação manual do usuário)

### Analytics (2h)
- [ ] **SYS-11:** GA4 Measurement ID pendente (property 390590427 existe, precisa pegar o G-ID)
- [x] **SYS-11:** Tag GA4 preparada no `index.html` (comentada, aguardando ID)
- [ ] **SYS-11:** Eventos customizados (implementar quando GA4 ativo)
- [ ] **SYS-11:** Conversão principal (implementar quando GA4 ativo)

### Prova Social (1h)
- [x] **UX-17:** Contador "+5.000 placas vendidas" + "4.9/5 satisfação" no Hero
- [x] **UX-19:** "Pix com desconto | Cartão até 12x" nos cards de produto

---

## Critérios de Aceite

- [x] Meta tags presentes (title, description, keywords, canonical, OG, Twitter)
- [x] robots.txt criado em `/robots.txt`
- [x] sitemap.xml criado em `/sitemap.xml`
- [ ] GA4 rastreando pageviews (pendente: Measurement ID)
- [ ] Eventos de clique WhatsApp (pendente: GA4 ativo)
- [x] Structured data: LocalBusiness + Product ItemList (4 produtos)
- [x] Prova social no Hero + info pagamento nos cards

---

## Arquivos Afetados

- `index.html` — meta tags, GA4 script, structured data
- `public/robots.txt` — NOVO
- `public/sitemap.xml` — NOVO
- `components/Products.tsx` — info pagamento
- `components/Hero.tsx` ou `Features.tsx` — contador

---

*Story criada por @pm — Brownfield Discovery Fase 10*
