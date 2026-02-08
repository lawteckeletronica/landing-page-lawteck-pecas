# QA Review - Technical Debt Assessment

**Projeto:** Landing Page Lawteck Peças
**Data:** 2026-02-08
**Agente:** @qa (perspectiva via @architect em YOLO mode)
**Fase:** Brownfield Discovery - Fase 7

---

## Gate Status: ✅ APPROVED

O assessment está completo e pode seguir para o assessment final (Fase 8).
Gaps menores identificados abaixo foram incorporados como recomendações.

---

## Gaps Identificados

| # | Gap | Área | Ação |
|---|-----|------|------|
| 1 | Nenhum teste de links WhatsApp (número correto? mensagem formatada?) | Funcional | Adicionar verificação manual |
| 2 | PDF do catálogo não verificado (pode estar desatualizado) | Conteúdo | Verificar com equipe comercial |
| 3 | Sem validação de formulário (textarea vazio desabilita, mas e XSS?) | Segurança | Baixo risco — o texto vai para URL do WhatsApp |
| 4 | Sem verificação de links externos (Instagram, TikTok) | Funcional | Verificar se perfis existem e estão ativos |
| 5 | Sem HTTPS verificado | Segurança | Verificar ao configurar deploy |
| 6 | Sem teste cross-browser | Compatibilidade | Testar Chrome, Safari, Firefox mínimo |

---

## Riscos Cruzados

| Risco | Áreas Afetadas | Probabilidade | Mitigação |
|-------|---------------|---------------|-----------|
| Picsum.photos/Unsplash fora do ar | Sistema + UX | Média | Substituir por imagens locais (CROSS-01) |
| Tailwind CDN indisponível | Sistema + UX | Baixa | Migrar para npm (CROSS-04) — resolve ambos |
| Google Fonts CDN lento | Performance | Baixa | Self-host fonts como fallback |
| WhatsApp número errado | Conversão | Baixa | Validar número com equipe |
| Preços desatualizados | Comercial + UX | ALTA | Extrair dados + processo de atualização |
| SEO zerado = sem tráfego orgânico | Negócio | Certeza | Implementar SEO (CROSS-03) |

### Risco Principal: Dependência de Serviços Externos
A landing page depende de 4 serviços externos sem fallback:
1. **picsum.photos** — imagens de produtos
2. **unsplash.com** — background do hero
3. **Google Fonts CDN** — tipografia
4. **Tailwind CDN** — todo o CSS

Se qualquer um ficar indisponível, a página quebra parcial ou totalmente.
**Mitigação:** Internalizar todos os assets (imagens, fonts, CSS compilado).

---

## Dependências Validadas

### Ordem de Resolução Recomendada

```
Fase 1 - Quick Wins (dia 1):
├── SYS-03: Inicializar Git ← PRIMEIRO (segurança de tudo que vem depois)
├── SYS-14/UX-06: Fix link diagnóstico
├── UX-02: Renomear "Diagnóstico IA" → "Consulte um Técnico"
├── SYS-09: Limpar .env placeholder
└── SYS-15/16: Limpeza README + metadata

Fase 2 - Infraestrutura (dias 2-3):
├── SYS-04/05: Tailwind npm + config ← depende de Git
├── SYS-06: Remover import map ← depende de Tailwind npm
├── SYS-13: Configurar deploy (Vercel/Cloudflare)
└── SYS-12/UX-08: Favicon

Fase 3 - Conteúdo + SEO (dias 4-5):
├── CROSS-01: Imagens reais ← BLOCKER: precisa das fotos!
├── SYS-02: Background Hero real
├── CROSS-03/UX-03: SEO completo
├── CROSS-06/UX-07: Analytics (GA4)
└── UX-14: Reduzir pesos da fonte

Fase 4 - UX Enhancements (dias 6-8):
├── UX-04: Acessibilidade (a11y)
├── UX-15: Seção "Como Funciona"
├── UX-18: Política de garantia
├── UX-16: FAQ
├── UX-17: Prova social
├── UX-19: Parcelamento/Pix
├── UX-10: Estados loading/error
└── UX-11/12: Hover touch + botões consistentes

Fase 5 - Futuro:
├── SYS-07/UX-09: Dados dinâmicos (integrar com Estoque Lawteck?)
├── UX-20: Vídeo demonstrativo
├── UX-21: Catálogo inline (não PDF)
└── SYS-08: Chatbot Gemini real
```

**Validação:** A ordem está correta. Git primeiro, depois infra, depois conteúdo, depois UX. Sem bloqueios circulares.

**BLOCKER identificado:** CROSS-01 (imagens reais) depende de fotografia dos produtos — tarefa externa ao desenvolvimento.

---

## Testes Requeridos

### Pós-Resolução Fase 1 (Quick Wins)
- [ ] Todos os links de navegação funcionam (#home, #features, #products, #testimonials, diagnóstico)
- [ ] WhatsApp abre com mensagem pré-formatada correta
- [ ] Formulário "Consulte um Técnico" envia mensagem correta

### Pós-Resolução Fase 2 (Infra)
- [ ] Build de produção (`npm run build`) sem erros
- [ ] CSS compilado < 50KB (vs ~3MB do CDN)
- [ ] Todas as cores brand funcionam pós-migração Tailwind
- [ ] Deploy funcional e acessível via URL pública
- [ ] Favicon aparece em todas as abas

### Pós-Resolução Fase 3 (Conteúdo + SEO)
- [ ] Imagens reais carregam em todas as resoluções
- [ ] Meta tags presentes (title, description, og:image, og:title)
- [ ] Google Lighthouse: SEO score > 90
- [ ] Google Lighthouse: Performance score > 80
- [ ] Analytics tracking eventos de clique nos CTAs

### Pós-Resolução Fase 4 (UX)
- [ ] Google Lighthouse: Accessibility score > 90
- [ ] Navegação por teclado funcional (Tab + Enter)
- [ ] Screen reader lê conteúdo corretamente
- [ ] Mobile: tap targets >= 44x44px
- [ ] Todas as seções novas (FAQ, garantia, como funciona) renderizam corretamente

### Teste Cross-Browser
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Firefox (desktop)

---

## Parecer Final

### Pontos Fortes do Assessment
1. Cobertura completa — todas as áreas foram analisadas
2. Débitos bem categorizados por severidade
3. Estimativas de esforço razoáveis
4. Identificação correta de débitos cruzados (evita duplicação)

### Pontos de Atenção
1. **Imagens reais (CROSS-01)** é o maior BLOCKER — precisa de ação externa (fotografia)
2. **Integração com Estoque Lawteck** é oportunidade grande mas escopo futuro
3. **Tailwind CDN → npm** é a mudança técnica de maior impacto (performance)
4. Priorizar conversão WhatsApp — é o canal de venda principal

### Recomendação
Iniciar pela **Fase 1 (Quick Wins)** imediatamente — são correções de 2-3 horas que melhoram significativamente a qualidade. Paralelamente, providenciar fotografias reais dos produtos para a Fase 3.

---

*Review por @qa (perspectiva via @architect) — Brownfield Discovery Fase 7*
