# UX Specialist Review

**Projeto:** Landing Page Lawteck Peças
**Data:** 2026-02-08
**Agente:** @ux-design-expert (perspectiva via @architect em YOLO mode)
**Fase:** Brownfield Discovery - Fase 6

---

## Débitos Validados

| ID | Débito | Severidade | Horas | Prioridade | Impacto UX |
|----|--------|-----------|-------|-----------|-----------|
| UX-01 | Imagens placeholder nos produtos | CRÍTICO | 4h | P1 | Usuário não confia — não compra |
| UX-02 | "Diagnóstico IA" é enganoso | CRÍTICO | 4h | P1 | Promessa não cumprida = frustração |
| UX-03 | Sem SEO/meta tags | ALTO | 3h | P2 | Página invisível no Google |
| UX-04 | Acessibilidade deficiente (8 issues) | ALTO | 4h | P2 | Exclui ~15% dos usuários |
| UX-05 | Performance (Tailwind CDN) | ALTO | 3h | P2 | Bounce em mobile 3G/4G |
| UX-06 | Link diagnóstico → #home (bug) | ALTO | 0.5h | P1 | Navegação quebrada |
| UX-07 | Sem analytics | MÉDIO | 2h | P3 | Decisões cegas |
| UX-08 | Sem favicon | MÉDIO | 1h | P4 | Aparência amadora |
| UX-09 | Preços hardcoded | MÉDIO | 3h | P3 | Risco de preço errado |
| UX-10 | Sem estados loading/error | MÉDIO | 2h | P3 | Parece quebrado |
| UX-11 | Hover effects em touch | MÉDIO | 1h | P4 | Mobile inferior |
| UX-12 | Botões inconsistentes | BAIXO | 1h | P4 | Confusão leve |
| UX-13 | Footer link "Estoque" sem destino | BAIXO | 0.5h | P4 | Link morto |
| UX-14 | 7 pesos de fonte | BAIXO | 0.5h | P4 | Banda extra |

**Ajustes de severidade:**
- UX-02: Mantido CRÍTICO — renomear para "Fale com um Técnico" é quick win (2h), implementar IA real é P3 (8h+)
- UX-06: Elevado para P1 — é um bug simples de 30min, não deveria existir

---

## Débitos Adicionados

| ID | Débito | Severidade | Horas | Impacto UX |
|----|--------|-----------|-------|-----------|
| UX-15 | Sem seção "Como Funciona" (passo-a-passo) | ALTO | 3h | Usuário não entende o processo de compra |
| UX-16 | Sem FAQ (perguntas frequentes) | MÉDIO | 2h | Sobrecarrega WhatsApp com perguntas básicas |
| UX-17 | Sem prova social numérica (ex: "+5.000 placas vendidas") | MÉDIO | 1h | Falta urgência e credibilidade |
| UX-18 | Sem política de garantia/troca visível | ALTO | 2h | Barreira de compra — "e se der problema?" |
| UX-19 | Preços sem parcelamento (Pix, cartão) | MÉDIO | 1h | Perda de conversão |
| UX-20 | Sem vídeo demonstrativo (teste de placas) | MÉDIO | 2h | O diferencial da Lawteck (100% testadas) não é demonstrado |
| UX-21 | CTA "Ver Catálogo" abre PDF (UX ruim em mobile) | MÉDIO | 3h | PDF não é mobile-friendly |

---

## Respostas ao Architect

### 1. Paleta azul/amarelo adequada para o público-alvo?
**SIM, com ajustes.** Azul transmite confiança/profissionalismo, amarelo transmite energia/atenção. Adequado para técnicos e clientes finais. Porém:
- O amarelo (#FFE600) sobre branco tem contraste insuficiente — usar #D4AC0D para texto
- Considerar adicionar verde para seções de garantia/confiança

### 2. Formulário deveria ser chatbot real ou manter WhatsApp?
**Recomendação: manter WhatsApp como canal principal**, mas:
- Renomear de "Diagnóstico IA" para "Consulte um Técnico"
- Fase futura: implementar chatbot Gemini para triagem inicial antes do WhatsApp
- WhatsApp é o canal preferido do público brasileiro (90%+ de penetração)

### 3. Faltam seções importantes?
**SIM:**
- "Como Funciona" (3-4 passos visuais: escolhe → paga → recebe → instala)
- FAQ (5-8 perguntas mais comuns)
- Política de garantia/troca (texto legal simplificado)
- Prova social expandida (contador de vendas, logos de parceiros)
- Vídeo do processo de teste das placas

### 4. Layout de 4 produtos é suficiente?
**SIM para landing page.** 4 produtos featured é ideal para conversão. Para catálogo completo:
- Manter o PDF como backup
- Fase futura: integrar com Estoque Lawteck (já existe!) para catálogo dinâmico

---

## Recomendações de Design

### Quick Wins (implementar agora)
1. Renomear "Diagnóstico IA" → "Consulte um Técnico" (30min)
2. Fix link diagnóstico no nav (30min)
3. Adicionar `alt` em todas as imagens (30min)
4. Adicionar `aria-label` nos botões de ícone (30min)

### Melhorias de Médio Prazo
1. Adicionar seção "Como Funciona" com ícones step-by-step
2. Adicionar seção de FAQ collapsible
3. Adicionar banner de garantia com selo visual
4. Mostrar opções de pagamento (Pix com desconto, parcelamento)

### Visão de Futuro
1. Integrar catálogo dinâmico com Estoque Lawteck (Supabase)
2. Implementar chatbot Gemini para triagem
3. Adicionar galeria de fotos reais com zoom
4. A/B testing nos CTAs

---

*Review por @ux-design-expert (perspectiva via @architect) — Brownfield Discovery Fase 6*
