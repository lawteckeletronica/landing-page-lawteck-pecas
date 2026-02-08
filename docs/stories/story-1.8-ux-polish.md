# Story 1.8: UX — Polish (Estados, Botões, Dados)

**Epic:** LANDING-DEBT
**Fase:** 4
**Estimativa:** 7 horas
**Prioridade:** P4
**Depende de:** Stories 1.1-1.7

---

## Objetivo

Polir a experiência: padronizar botões, adicionar estados de loading/error, externalizar dados e corrigir hover em touch.

---

## Tasks

### Dados Externalizados (3h)
- [ ] **SYS-07:** Criar `data/products.ts` com array de produtos tipado
- [ ] **SYS-07:** Criar `data/features.ts` com array de features tipado
- [ ] **SYS-07:** Criar `data/testimonials.ts` com array de depoimentos tipado
- [ ] **SYS-07:** Atualizar componentes para importar dados dos arquivos
- [ ] **SYS-07:** Facilitar atualização de preços (um arquivo, um lugar)

### Estados de UI (2h)
- [ ] **UX-10:** Adicionar fallback para imagens que não carregam (placeholder SVG)
- [ ] **UX-10:** Adicionar skeleton loading enquanto imagens carregam
- [ ] **UX-10:** Adicionar feedback visual no formulário após submit
- [ ] **UX-10:** Adicionar error boundary no App

### Consistência Visual (2h)
- [ ] **UX-11:** Substituir hover effects por touch-friendly (active states)
- [ ] **UX-12:** Padronizar botões:
  - Primário: amarelo (CTAs de compra)
  - Secundário: azul escuro (navegação, info)
  - WhatsApp: verde (#25D366)
- [ ] **UX-12:** Criar classes Tailwind reutilizáveis para botões

---

## Critérios de Aceite

- [ ] Preços podem ser atualizados editando UM arquivo (`data/products.ts`)
- [ ] Imagens que falham mostram placeholder, não quebram layout
- [ ] Botões seguem padrão consistente em toda a página
- [ ] Touch devices: tap feedback visual em todos os elementos interativos
- [ ] Nenhum dado hardcoded restante nos componentes

---

## Arquivos Afetados

- `data/products.ts` — NOVO
- `data/features.ts` — NOVO
- `data/testimonials.ts` — NOVO
- `components/Products.tsx` — importar dados + fallback imagem
- `components/Features.tsx` — importar dados
- `components/Testimonials.tsx` — importar dados
- `components/AiAssistant.tsx` — feedback pós-submit
- `App.tsx` — error boundary
- `index.css` — classes de botão reutilizáveis

---

*Story criada por @pm — Brownfield Discovery Fase 10*
