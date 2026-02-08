# Story 1.4: Conteúdo — Imagens Reais + Background

**Epic:** LANDING-DEBT
**Fase:** 3
**Estimativa:** 6 horas
**Prioridade:** P1
**Depende de:** Story 1.2 (build funcional)
**BLOCKER:** Precisa de fotografias reais dos produtos

---

## Objetivo

Substituir todas as imagens placeholder (picsum.photos, unsplash) por fotos reais dos produtos e da Lawteck.

---

## Tasks

- [x] **SYS-01:** 4 fotos reais obtidas da pasta do projeto
- [ ] **SYS-01:** Otimizar fotos (WebP, múltiplas resoluções, srcset) — futuro
- [x] **SYS-01:** URLs picsum.photos substituídas por imagens locais em Products.tsx
- [x] **SYS-02:** Background Hero substituído por foto real (placa LG)
- [x] **SYS-02:** URL Unsplash removida do Hero.tsx
- [x] Adicionado `alt` descritivo em todas as imagens
- [x] Adicionado `width` e `height` para evitar layout shift (CLS)
- [x] Implementado lazy loading (`loading="lazy"`) nos produtos

---

## Requisitos das Fotos

### Produtos (4 fotos)
- Fundo branco ou neutro
- Placa eletrônica visível e nítida
- Resolução mínima: 800x600px
- Formato: WebP com fallback JPG

### Background Hero (1 foto)
- Opções: bancada de trabalho, placa em teste, equipe Lawteck
- Resolução: 1920x1080px mínimo
- Deve funcionar com overlay escuro por cima

---

## Critérios de Aceite

- [x] 0 imagens de picsum.photos ou unsplash no código (verificado via grep)
- [x] Todas as imagens são locais (pasta `public/images/`)
- [x] Todas as imagens têm `alt` descritivo
- [x] Todas as imagens têm `width` e `height`
- [x] Imagens de produtos têm `loading="lazy"`
- [x] Build OK (984ms, sem erros)

---

## Arquivos Afetados

- `components/Products.tsx` — URLs das imagens
- `components/Hero.tsx` — background image
- `public/images/` — NOVA pasta com imagens otimizadas

---

*Story criada por @pm — Brownfield Discovery Fase 10*
