# Story 1.6: UX — Acessibilidade

**Epic:** LANDING-DEBT
**Fase:** 4
**Estimativa:** 4 horas
**Prioridade:** P4
**Depende de:** Stories 1.1-1.5

---

## Objetivo

Corrigir os 8 problemas de acessibilidade identificados para atingir WCAG 2.1 nível AA.

---

## Tasks

- [x] **A11Y-01:** Alt descritivo nas imagens (feito na Story 1.4)
- [x] **A11Y-02:** Contraste OK — amarelo usado sobre fundo escuro (navy), nunca sobre branco
- [x] **A11Y-03:** `aria-expanded` + `aria-label` no hamburger + focus ring
- [x] **A11Y-04:** `aria-label` nos links Instagram e TikTok do Footer
- [x] **A11Y-05:** `<label htmlFor="problem">` já existia no AiAssistant
- [x] **A11Y-06:** Skip navigation link (sr-only, visível no focus)
- [x] **A11Y-07:** `aria-label="Falar no WhatsApp"` já existia no App.tsx
- [x] **A11Y-08:** `role="img"` + `aria-label` nas estrelas, `aria-hidden` nos ícones individuais
- [ ] Testar navegação por teclado (ação manual)
- [ ] Testar VoiceOver (ação manual)

---

## Critérios de Aceite

- [x] Todos os elementos interativos têm label/aria-label
- [x] Skip navigation funcional (visível no Tab)
- [x] Contraste de cores adequado (amarelo sempre sobre fundo escuro)
- [ ] Lighthouse Accessibility score > 90 (verificar manualmente)
- [ ] Navegação por teclado (verificar manualmente)

---

## Arquivos Afetados

- `components/Header.tsx` — menu mobile aria, skip nav
- `components/Hero.tsx` — contraste
- `components/AiAssistant.tsx` — label do textarea
- `components/Products.tsx` — alt imagens
- `components/Testimonials.tsx` — stars sr-only
- `components/Footer.tsx` — aria-label sociais
- `App.tsx` — WhatsApp button aria-label

---

*Story criada por @pm — Brownfield Discovery Fase 10*
