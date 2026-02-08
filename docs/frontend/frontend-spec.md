# Frontend/UX Spec - Landing Page Lawteck Peças

**Projeto:** Lawteck - Placas de Ar Condicionado
**Data:** 2026-02-08
**Agente:** @ux-design-expert (perspectiva UX via @architect)
**Fase:** Brownfield Discovery - Fase 3

---

## 1. Componentes UI Existentes

### Inventário (7 componentes)

| Componente | LOC | Responsabilidade | Responsivo? |
|-----------|-----|-----------------|-------------|
| Header.tsx | 123 | Navegação fixa + menu mobile | ✅ Sim |
| Hero.tsx | 72 | Seção principal + CTA + formulário | ✅ Sim |
| AiAssistant.tsx | 47 | Formulário diagnóstico → WhatsApp | ✅ Sim |
| Features.tsx | 70 | 6 cards de vantagens | ✅ Sim |
| Products.tsx | 119 | 4 cards de produtos | ✅ Sim |
| Testimonials.tsx | 76 | 3 depoimentos | ✅ Sim |
| Footer.tsx | 86 | Rodapé 4 colunas | ✅ Sim |

**Total:** 593 LOC — página enxuta e funcional.

---

## 2. Design System / Tokens

### Cores (definidas inline no HTML)

| Token | Hex | Uso |
|-------|-----|-----|
| brand-blue-900 | #002B5C | Backgrounds principais, textos |
| brand-blue-800 | #003B73 | Cards, hover states |
| brand-blue-700 | #004E92 | Gradientes |
| brand-blue-600 | #00639C | Gradientes |
| brand-blue-500 | #0074BC | Links, destaques |
| brand-blue-50 | #F0F7FF | Backgrounds claros |
| brand-yellow-400 | #FFE600 | CTAs, ícones, destaques |
| brand-yellow-500 | #F4D03F | Hover de CTAs |
| brand-yellow-600 | #D4AC0D | Bordas, acentos |
| brand-gray-100 | #F5F5F5 | Background de seções |
| brand-gray-900 | #1A1A1A | Textos escuros |
| whatsapp | #25D366 | Botão flutuante WhatsApp |

### Tipografia

| Propriedade | Valor |
|------------|-------|
| Família | Montserrat (Google Fonts) |
| Pesos | 400, 500, 600, 700, 800, 900 |
| Escala | 12px → 48px+ |
| Suavização | antialiased |

### Sombras

| Token | Valor |
|-------|-------|
| xl-blue | `0 20px 25px -5px rgba(0,59,115,0.1)` |

### Animações

| Nome | Duração | Uso |
|------|---------|-----|
| bounce-slow | 3s loop | Botão flutuante WhatsApp |
| fadeIn | 0.4s ease-out | Elementos ao aparecer |

---

## 3. Fluxos de Usuário

### Fluxo Principal: Conversão WhatsApp

```
Usuário chega → Hero (proposta de valor)
  ├── CTA "Ver Catálogo" → Download PDF
  ├── CTA "Compre sua Placa" → WhatsApp
  ├── Formulário Diagnóstico → WhatsApp com descrição do problema
  └── Scroll → Features → Products → Testimonials
       └── Card Produto → "Comprar" → WhatsApp com nome do produto
```

### Fluxo Secundário: Exploração

```
Usuário → Header nav
  ├── INÍCIO → #home
  ├── VANTAGENS → #features
  ├── DIAGNÓSTICO → #home ⚠️ BUG (deveria ir para formulário)
  ├── PRODUTOS → #products
  └── DEPOIMENTOS → #testimonials
```

### Fluxo Terciário: Contato

```
Usuário → Footer
  ├── WhatsApp → Chat direto
  ├── Email → contato@lawteck.com.br
  ├── Instagram → @lawteckpecas
  └── TikTok → @lawteckpecas
```

---

## 4. Análise de Responsividade

### Breakpoints Utilizados (Tailwind defaults)

| Breakpoint | Comportamento |
|-----------|---------------|
| Mobile (<640px) | 1 coluna, menu hamburger, stacked layout |
| md (768px) | 2 colunas em grids |
| lg (1024px) | 3-4 colunas, nav desktop visível |
| xl+ | Layout completo |

### Por Componente

| Componente | Mobile | Tablet | Desktop | Nota |
|-----------|--------|--------|---------|------|
| Header | Hamburger menu | — | Nav inline | ✅ Bom |
| Hero | Stack vertical | — | Grid 7/5 | ⚠️ Formulário pode ficar apertado |
| Features | 1 col | 2 cols | 3 cols | ✅ Bom |
| Products | 1 col | 2 cols | 4 cols | ⚠️ 4 cols em lg pode ser apertado |
| Testimonials | 1 col | — | 3 cols | ✅ Bom |
| Footer | Stack | — | 4 cols | ✅ Bom |

---

## 5. Análise de Acessibilidade (a11y)

### Problemas Identificados

| ID | Problema | Severidade | WCAG |
|----|---------|-----------|------|
| A11Y-01 | Sem atributos `alt` em imagens de produtos | Alto | 1.1.1 |
| A11Y-02 | Contraste amarelo (#FFE600) sobre branco insuficiente | Alto | 1.4.3 |
| A11Y-03 | Menu mobile sem `aria-expanded`, `aria-label` | Médio | 4.1.2 |
| A11Y-04 | Links de redes sociais sem `aria-label` (só ícones) | Médio | 1.1.1 |
| A11Y-05 | Formulário sem `label` associado ao `textarea` | Médio | 1.3.1 |
| A11Y-06 | Sem skip navigation link | Baixo | 2.4.1 |
| A11Y-07 | Botão flutuante WhatsApp sem `aria-label` | Médio | 4.1.2 |
| A11Y-08 | Estrelas de avaliação são visuais sem texto alternativo | Médio | 1.1.1 |

---

## 6. Consistência Visual

### Problemas de Consistência

| ID | Problema | Detalhes |
|----|---------|---------|
| VIS-01 | Cards de features e products têm estilos diferentes | Features: bg escuro com texto claro. Products: bg branco com texto escuro |
| VIS-02 | Botões sem padrão consistente | Hero: amarelo. Products: azul escuro. Header CTA: amarelo. WhatsApp: verde |
| VIS-03 | Espaçamentos inconsistentes entre seções | Hero: py-20, Features: py-20, Products: py-20, Testimonials: py-20 (OK mas padding interno varia) |
| VIS-04 | Tipografia de títulos varia | Hero: 4xl/5xl. Features: 3xl. Products: 3xl. Testimonials: 3xl (razoável) |
| VIS-05 | Hover effects inconsistentes | Products: scale + shadow. Features: translate-y. Testimonials: translate-y |

---

## 7. Performance Percebida

### Problemas

| ID | Problema | Impacto |
|----|---------|---------|
| PERF-01 | Imagens externas (picsum/unsplash) sem lazy loading | LCP alto, dados externos |
| PERF-02 | Nenhuma imagem tem `width`/`height` definidos | Layout shift (CLS) |
| PERF-03 | Tailwind CDN carrega ~3MB de CSS | Tempo de download |
| PERF-04 | Google Fonts carrega 7 pesos (400-900) | Pode ser reduzido para 3-4 |
| PERF-05 | Sem preconnect para domínios externos | Latência adicional |
| PERF-06 | Background do Hero é imagem grande sem otimização | LCP lento |

---

## 8. Estados de UI Ausentes

| ID | Estado | Componente | Detalhes |
|----|--------|-----------|---------|
| STATE-01 | Loading | Geral | Sem skeleton/spinner ao carregar |
| STATE-02 | Error | AiAssistant | Sem feedback se WhatsApp não abrir |
| STATE-03 | Empty | Products | Sem fallback se imagem não carregar |
| STATE-04 | Success | AiAssistant | Sem confirmação após enviar |
| STATE-05 | Hover Mobile | Products | Hover effects não funcionam em touch |

---

## 9. Débitos de Frontend/UX

### CRÍTICO

| ID | Débito | Impacto UX |
|----|--------|-----------|
| UX-01 | Imagens de produtos são placeholders genéricos | Usuário não vê o produto real — quebra confiança |
| UX-02 | "Diagnóstico IA" é enganoso — só abre WhatsApp | Expectativa frustrada, pode parecer golpe |

### ALTO

| ID | Débito | Impacto UX |
|----|--------|-----------|
| UX-03 | Sem SEO/meta tags — invisível no Google | Zero tráfego orgânico |
| UX-04 | Acessibilidade deficiente (7 problemas a11y) | Exclui usuários com deficiência |
| UX-05 | Performance ruim (Tailwind CDN + imagens externas) | Bounce rate alto em mobile/3G |
| UX-06 | Link "Diagnóstico" no nav aponta para #home (bug) | Confusão na navegação |

### MÉDIO

| ID | Débito | Impacto UX |
|----|--------|-----------|
| UX-07 | Sem analytics — impossível medir conversão | Decisões sem dados |
| UX-08 | Sem favicon personalizado | Aparência não profissional em bookmarks |
| UX-09 | Preços hardcoded — difícil atualizar | Preços desatualizados = frustração |
| UX-10 | Sem estados de loading/error/empty | Sensação de "quebrado" se algo falha |
| UX-11 | Hover effects não funcionam em touch devices | Mobile tem UX inferior |

### BAIXO

| ID | Débito | Impacto UX |
|----|--------|-----------|
| UX-12 | Botões sem padrão consistente de cores | Leve confusão visual |
| UX-13 | Footer "Estoque" link — vai para onde? | Link potencialmente quebrado |
| UX-14 | 7 pesos de fonte carregados (precisa 3-4) | Desperdício de banda |

---

## 10. Recomendações de Design

1. **Fotografar produtos reais** — principal fator de confiança
2. **Renomear "Diagnóstico IA"** para "Fale com um Técnico" ou implementar chat real
3. **Criar design system mínimo** — padronizar botões, cards, espaçamentos
4. **Adicionar micro-interações** — feedback visual nos CTAs
5. **Implementar lazy loading** em todas as imagens
6. **Adicionar seção de FAQ** — reduz carga no WhatsApp
7. **Adicionar prova social** — logos de parceiros, número de vendas, certificações
8. **Melhorar mobile UX** — tap targets maiores, swipe em produtos

---

*Gerado por @architect (Aria) assumindo perspectiva @ux-design-expert — Brownfield Discovery Fase 3*
