# Story 1.7: UX — Novas Seções (Como Funciona, FAQ, Garantia)

**Epic:** LANDING-DEBT
**Fase:** 4
**Estimativa:** 7 horas
**Prioridade:** P4
**Depende de:** Stories 1.1-1.5

---

## Objetivo

Adicionar seções que aumentam conversão: passo-a-passo de compra, perguntas frequentes e política de garantia.

---

## Tasks

### Seção "Como Funciona" (3h)
- [ ] **UX-15:** Criar componente `HowItWorks.tsx`
- [ ] Design: 4 steps horizontais com ícones
  1. Escolha sua placa (Search icon)
  2. Fale com nosso técnico (MessageCircle icon)
  3. Receba em casa (Truck icon)
  4. Instale com suporte (Wrench icon)
- [ ] Posicionar entre Features e Products
- [ ] Responsivo: horizontal em desktop, vertical em mobile

### Seção FAQ (2h)
- [ ] **UX-16:** Criar componente `FAQ.tsx`
- [ ] Implementar accordion collapsible (5-8 perguntas)
- [ ] Perguntas sugeridas:
  - "Como sei qual placa serve no meu ar?"
  - "Qual a diferença entre nova e seminova?"
  - "Como funciona a garantia?"
  - "Quanto tempo demora a entrega?"
  - "Vocês fazem instalação?"
  - "Posso devolver se não servir?"
  - "Quais formas de pagamento?"
- [ ] Posicionar antes dos Testimonials

### Seção Garantia (2h)
- [ ] **UX-18:** Criar componente `Warranty.tsx`
- [ ] Design: banner com selo visual de garantia
- [ ] Conteúdo: política simplificada (troca, prazo, condições)
- [ ] CTA: "Compre com segurança" → WhatsApp
- [ ] Posicionar entre Products e FAQ

---

## Critérios de Aceite

- [ ] 3 novas seções renderizam corretamente
- [ ] Responsivo em mobile, tablet e desktop
- [ ] FAQ accordion abre/fecha com animação suave
- [ ] Links de navegação no Header atualizados com novas seções
- [ ] Novas seções seguem design system existente (cores brand)

---

## Arquivos Afetados

- `components/HowItWorks.tsx` — NOVO
- `components/FAQ.tsx` — NOVO
- `components/Warranty.tsx` — NOVO
- `App.tsx` — importar e posicionar novos componentes
- `components/Header.tsx` — atualizar links de navegação

---

*Story criada por @pm — Brownfield Discovery Fase 10*
