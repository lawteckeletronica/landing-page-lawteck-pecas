# Technical Debt Assessment - FINAL

**Projeto:** Landing Page Lawteck Peças
**Data:** 2026-02-08
**Agente:** @architect (Aria)
**Fase:** Brownfield Discovery - Fase 8
**QA Gate:** ✅ APPROVED

---

## Executive Summary

- **Total de débitos únicos:** 28
- **Críticos:** 4 | **Altos:** 8 | **Médios:** 11 | **Baixos:** 5
- **Esforço total estimado:** 48 - 54 horas
- **Custo estimado (R$150/h):** R$ 7.200 - R$ 8.100
- **BLOCKER externo:** Fotografias reais dos produtos

---

## Inventário Completo de Débitos

### Sistema (validado por @architect)

| ID | Débito | Sev. | Horas | Pri. |
|----|--------|------|-------|------|
| SYS-01 | Imagens placeholder (picsum.photos) | CRÍTICO | 4h | P1 |
| SYS-02 | Background Hero genérico (Unsplash) | CRÍTICO | 2h | P3 |
| SYS-03 | Sem versionamento Git | CRÍTICO | 1h | P1 |
| SYS-04 | Tailwind via CDN (~3MB vs ~10KB) | ALTO | 3h | P2 |
| SYS-05 | Config Tailwind inline no HTML | ALTO | — | (junto SYS-04) |
| SYS-06 | Import map duplica React | ALTO | 2h | P2 |
| SYS-07 | Dados hardcoded nos componentes | MÉDIO | 3h | P4 |
| SYS-08 | "AI Assistant" falso | CRÍTICO | 2h | P1 |
| SYS-09 | .env.local com placeholder | BAIXO | 0.5h | P1 |
| SYS-10 | Sem SEO (meta, OG, sitemap) | ALTO | 3h | P3 |
| SYS-11 | Sem analytics | MÉDIO | 2h | P3 |
| SYS-12 | Sem favicon customizado | MÉDIO | 1h | P2 |
| SYS-13 | Sem CI/CD ou deploy | MÉDIO | 2h | P2 |
| SYS-14 | Link diagnóstico → #home (BUG) | ALTO | 0.5h | P1 |
| SYS-15 | README genérico | BAIXO | 0.5h | P1 |
| SYS-16 | metadata.json inútil | BAIXO | 0.1h | P1 |
| SYS-17 | Sem testes | BAIXO | 4h | P5 |

### Frontend/UX (validado por @ux-design-expert)

| ID | Débito | Sev. | Horas | Pri. | Impacto UX |
|----|--------|------|-------|------|-----------|
| UX-04 | Acessibilidade (8 issues WCAG) | ALTO | 4h | P4 | Exclui ~15% usuários |
| UX-10 | Sem estados loading/error | MÉDIO | 2h | P4 | Parece quebrado |
| UX-11 | Hover effects em touch | MÉDIO | 1h | P4 | Mobile inferior |
| UX-12 | Botões inconsistentes | BAIXO | 1h | P4 | Confusão visual |
| UX-13 | Footer "Estoque" link morto | MÉDIO | 0.5h | P1 | Link quebrado |
| UX-14 | 7 pesos de fonte (precisa 3-4) | MÉDIO | 0.5h | P2 | Banda extra |
| UX-15 | Sem seção "Como Funciona" | ALTO | 3h | P4 | Usuário não entende processo |
| UX-16 | Sem FAQ | MÉDIO | 2h | P4 | Sobrecarrega WhatsApp |
| UX-17 | Sem prova social numérica | MÉDIO | 1h | P3 | Falta credibilidade |
| UX-18 | Sem política de garantia visível | ALTO | 2h | P4 | Barreira de compra |
| UX-19 | Sem info de parcelamento/Pix | MÉDIO | 1h | P3 | Perda de conversão |
| UX-20 | Sem vídeo demonstrativo | MÉDIO | 2h | P5 | Diferencial não demonstrado |
| UX-21 | Catálogo PDF (ruim em mobile) | MÉDIO | 3h | P5 | UX ruim em mobile |

---

## Plano de Resolução

### Fase 1: Quick Wins (1 dia — ~4h)
*Impacto imediato, esforço mínimo*

| # | Débito | Horas | Ação |
|---|--------|-------|------|
| 1 | SYS-03 | 1h | `git init` + .gitignore + primeiro commit |
| 2 | SYS-14 | 0.5h | Fix `#home` → `#diagnosis` no nav |
| 3 | SYS-08 | 0.5h | Renomear "Diagnóstico IA" → "Consulte um Técnico" |
| 4 | UX-13 | 0.5h | Fix link "Estoque" no footer |
| 5 | SYS-09 | 0.5h | Remover .env.local placeholder |
| 6 | SYS-15/16 | 0.5h | Atualizar README + remover metadata.json |

### Fase 2: Infraestrutura (2 dias — ~9h)
*Fundação técnica sólida*

| # | Débito | Horas | Ação |
|---|--------|-------|------|
| 1 | SYS-04/05 | 3h | Instalar Tailwind npm, criar config, purge CSS |
| 2 | SYS-06 | 2h | Remover import map, usar apenas Vite |
| 3 | SYS-13 | 2h | Configurar deploy (Vercel ou Cloudflare Pages) |
| 4 | SYS-12 | 1h | Criar favicon SVG com marca Lawteck |
| 5 | UX-14 | 0.5h | Reduzir Google Fonts para 400,600,700 |

### Fase 3: Conteúdo + SEO (2-3 dias — ~12h)
*Visibilidade e credibilidade*

| # | Débito | Horas | Ação | Blocker? |
|---|--------|-------|------|---------|
| 1 | SYS-01 | 4h | Substituir placeholders por fotos reais | ⚠️ Precisa fotos |
| 2 | SYS-02 | 2h | Background Hero com foto real | ⚠️ Precisa foto |
| 3 | SYS-10 | 3h | Meta tags, OG, structured data, sitemap |  |
| 4 | SYS-11 | 2h | GA4 + eventos de conversão WhatsApp |  |
| 5 | UX-17 | 1h | Adicionar contador "+X placas vendidas" |  |
| 6 | UX-19 | 1h | Adicionar info Pix/parcelamento nos cards |  |

### Fase 4: UX Enhancements (3-4 dias — ~16h)
*Experiência completa*

| # | Débito | Horas | Ação |
|---|--------|-------|------|
| 1 | UX-04 | 4h | Corrigir 8 issues de acessibilidade |
| 2 | UX-15 | 3h | Criar seção "Como Funciona" (4 steps) |
| 3 | UX-18 | 2h | Seção de garantia com selo visual |
| 4 | UX-16 | 2h | FAQ collapsible (5-8 perguntas) |
| 5 | SYS-07 | 3h | Extrair dados para constantes/JSON |
| 6 | UX-10 | 2h | Adicionar estados loading/error/fallback |
| 7 | UX-11/12 | 2h | Fix hover touch + padronizar botões |

### Fase 5: Futuro (backlog)
*Evolução estratégica*

| # | Débito | Horas | Ação |
|---|--------|-------|------|
| 1 | UX-20 | 2h | Embed vídeo do processo de teste |
| 2 | UX-21 | 3h | Catálogo inline (não PDF) |
| 3 | SYS-17 | 4h | Testes e2e básicos |
| 4 | — | 8h+ | Chatbot Gemini real (evolução do diagnóstico) |
| 5 | — | 16h+ | Integração com Estoque Lawteck (catálogo dinâmico) |

---

## Riscos e Mitigações

| Risco | Prob. | Impacto | Mitigação |
|-------|-------|---------|-----------|
| Serviços CDN indisponíveis (picsum, Tailwind CDN) | Média | Página quebra | Fases 2-3 resolvem (internalizar tudo) |
| Fotos reais não ficam prontas | Alta | Atrasa Fase 3 | Iniciar Fases 1-2 paralelamente |
| Preços mudam e ficam desatualizados | Alta | Perda de venda | Fase 4 resolve (dados externalizados) |
| SEO demora para indexar | Certeza | Sem tráfego orgânico por 2-4 semanas | Normal — começar cedo |
| WhatsApp muda formato de URL | Baixa | CTAs quebram | Monitorar + fallback tel: |

---

## Critérios de Sucesso

| Métrica | Antes | Meta Pós-Resolução |
|---------|-------|---------------------|
| Lighthouse Performance | ~40-50 | > 80 |
| Lighthouse SEO | ~30-40 | > 90 |
| Lighthouse Accessibility | ~50-60 | > 90 |
| CSS Bundle | ~3MB (CDN) | < 30KB |
| LCP | ~4-5s | < 2.5s |
| Imagens reais | 0/4 | 4/4 |
| Links funcionais | ~85% | 100% |
| Tráfego orgânico | 0 | > 0 (em 30 dias) |

---

## Resumo Executivo para Fase 9

| Categoria | Débitos | Horas | Custo (R$150/h) |
|-----------|---------|-------|-----------------|
| Quick Wins (Fase 1) | 6 | 3.5h | R$ 525 |
| Infraestrutura (Fase 2) | 5 | 8.5h | R$ 1.275 |
| Conteúdo + SEO (Fase 3) | 6 | 13h | R$ 1.950 |
| UX Enhancements (Fase 4) | 7 | 18h | R$ 2.700 |
| Futuro (Fase 5) | 4+ | 17h+ | R$ 2.550+ |
| **TOTAL (Fases 1-4)** | **24** | **43h** | **R$ 6.450** |
| **TOTAL (com Fase 5)** | **28+** | **60h+** | **R$ 9.000+** |

---

*Assessment final por @architect (Aria) — Brownfield Discovery Fase 8*
*Incorpora inputs de: @ux-design-expert (Fase 6), @qa (Fase 7)*
