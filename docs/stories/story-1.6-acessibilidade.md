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

- [ ] **A11Y-01:** Adicionar `alt` descritivo em todas as imagens de produtos
- [ ] **A11Y-02:** Corrigir contraste do amarelo (#FFE600) sobre branco — usar #D4AC0D ou fundo escuro
- [ ] **A11Y-03:** Adicionar `aria-expanded`, `aria-label` no menu mobile hamburger
- [ ] **A11Y-04:** Adicionar `aria-label` nos links de redes sociais (ícones sem texto)
- [ ] **A11Y-05:** Adicionar `<label>` associado ao `<textarea>` do formulário
- [ ] **A11Y-06:** Adicionar skip navigation link (visível no focus)
- [ ] **A11Y-07:** Adicionar `aria-label` no botão flutuante WhatsApp
- [ ] **A11Y-08:** Adicionar texto alternativo nas estrelas de avaliação (sr-only)
- [ ] Testar navegação completa por teclado (Tab + Enter)
- [ ] Testar com leitor de tela (VoiceOver no Mac)

---

## Critérios de Aceite

- [ ] Lighthouse Accessibility score > 90
- [ ] Navegação por teclado funcional em todos os elementos interativos
- [ ] Contraste de cores >= 4.5:1 em todo texto
- [ ] Todos os elementos interativos têm label/aria-label
- [ ] Skip navigation funcional

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
