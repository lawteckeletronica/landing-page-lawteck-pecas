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

- [ ] **SYS-01:** Obter fotos reais das 4 placas featured (ou representativas)
- [ ] **SYS-01:** Otimizar fotos (WebP, múltiplas resoluções, srcset)
- [ ] **SYS-01:** Substituir URLs do picsum.photos nos cards de Products.tsx
- [ ] **SYS-02:** Obter/criar foto de background para o Hero
- [ ] **SYS-02:** Otimizar e substituir URL do Unsplash no Hero.tsx
- [ ] Adicionar `alt` descritivo em todas as imagens
- [ ] Adicionar `width` e `height` para evitar layout shift (CLS)
- [ ] Implementar lazy loading (`loading="lazy"`) nas imagens abaixo do fold

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

- [ ] 0 imagens de picsum.photos ou unsplash no código
- [ ] Todas as imagens são locais (pasta `public/images/`)
- [ ] Todas as imagens têm `alt` descritivo
- [ ] Todas as imagens têm `width` e `height`
- [ ] Imagens abaixo do fold têm `loading="lazy"`
- [ ] Layout não "pula" ao carregar (CLS < 0.1)

---

## Arquivos Afetados

- `components/Products.tsx` — URLs das imagens
- `components/Hero.tsx` — background image
- `public/images/` — NOVA pasta com imagens otimizadas

---

*Story criada por @pm — Brownfield Discovery Fase 10*
