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
- [ ] **SYS-10:** Adicionar `<meta name="description">` otimizado
- [ ] **SYS-10:** Adicionar Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] **SYS-10:** Adicionar Twitter Card tags
- [ ] **SYS-10:** Criar `robots.txt`
- [ ] **SYS-10:** Criar `sitemap.xml`
- [ ] **SYS-10:** Adicionar JSON-LD structured data (LocalBusiness + Product)
- [ ] **SYS-10:** Configurar canonical URL
- [ ] Submeter sitemap no Google Search Console

### Analytics (2h)
- [ ] **SYS-11:** Criar propriedade GA4
- [ ] **SYS-11:** Instalar tag GA4 no `index.html`
- [ ] **SYS-11:** Configurar eventos customizados:
  - `click_whatsapp` (todos os CTAs WhatsApp)
  - `click_catalog` (download do catálogo)
  - `submit_diagnosis` (formulário de diagnóstico)
  - `click_product` (card de produto)
- [ ] **SYS-11:** Configurar conversão principal: `click_whatsapp`

### Prova Social (1h)
- [ ] **UX-17:** Adicionar contador "+X placas vendidas" na seção Hero ou Features
- [ ] **UX-19:** Adicionar info de pagamento nos cards (Pix, cartão, parcelamento)

---

## Critérios de Aceite

- [ ] Lighthouse SEO score > 90
- [ ] Meta tags presentes e corretas (verificar com metatags.io)
- [ ] robots.txt acessível em /robots.txt
- [ ] sitemap.xml acessível em /sitemap.xml
- [ ] GA4 rastreando pageviews
- [ ] Eventos de clique WhatsApp aparecendo no GA4
- [ ] Structured data validado (Google Rich Results Test)

---

## Arquivos Afetados

- `index.html` — meta tags, GA4 script, structured data
- `public/robots.txt` — NOVO
- `public/sitemap.xml` — NOVO
- `components/Products.tsx` — info pagamento
- `components/Hero.tsx` ou `Features.tsx` — contador

---

*Story criada por @pm — Brownfield Discovery Fase 10*
