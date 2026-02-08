# Technical Debt Assessment - DRAFT

**Projeto:** Landing Page Lawteck Peças
**Data:** 2026-02-08
**Agente:** @architect (Aria)
**Fase:** Brownfield Discovery - Fase 4 (Consolidação)
**Status:** ⚠️ DRAFT — Pendente revisão dos especialistas

---

## Para Revisão dos Especialistas

Este documento consolida TODOS os débitos técnicos identificados nas Fases 1 e 3.
Especialistas devem validar suas respectivas seções.

---

## 1. Débitos de Sistema

*Fonte: docs/architecture/system-architecture.md*

### Críticos (3)

| ID | Débito | Impacto | Esforço Est. |
|----|--------|---------|-------------|
| SYS-01 | Imagens de produtos são placeholders (picsum.photos) | Credibilidade zero | 4h (fotografia + otimização) |
| SYS-02 | Background Hero é imagem genérica do Unsplash | Branding fraco | 2h |
| SYS-03 | Sem versionamento Git | Sem backup/deploy | 1h |

### Altos (5)

| ID | Débito | Impacto | Esforço Est. |
|----|--------|---------|-------------|
| SYS-04 | Tailwind via CDN (~3MB) vs npm (~10KB purged) | Performance -90% | 3h |
| SYS-05 | Config Tailwind inline no HTML | Manutenção difícil | 1h (junto com SYS-04) |
| SYS-06 | Import map duplica React com package.json | Conflito de build | 2h |
| SYS-07 | Dados hardcoded nos componentes | Manutenção de preços | 3h |
| SYS-08 | "AI Assistant" é falso — só redireciona WhatsApp | Confiança do usuário | 2-8h (renomear vs implementar) |

### Médios (6)

| ID | Débito | Impacto | Esforço Est. |
|----|--------|---------|-------------|
| SYS-09 | .env.local com placeholder API key | Lixo no projeto | 0.5h |
| SYS-10 | Sem SEO (meta, OG, sitemap) | Invisível no Google | 3h |
| SYS-11 | Sem analytics (GA, Pixel) | Sem dados de conversão | 2h |
| SYS-12 | Sem favicon customizado | Branding incompleto | 1h |
| SYS-13 | Sem CI/CD ou deploy | Não está no ar | 2h |
| SYS-14 | Link diagnóstico no nav → #home (bug) | Navegação quebrada | 0.5h |

### Baixos (3)

| ID | Débito | Impacto | Esforço Est. |
|----|--------|---------|-------------|
| SYS-15 | README genérico (boilerplate) | Documentação | 0.5h |
| SYS-16 | metadata.json é artefato inútil | Limpeza | 0.1h |
| SYS-17 | Sem testes | Qualidade | 4h (baixa prioridade) |

---

## 2. Débitos de Database

**N/A — Projeto não possui banco de dados.**

---

## 3. Débitos de Frontend/UX

*Fonte: docs/frontend/frontend-spec.md*
⚠️ PENDENTE: Revisão do @ux-design-expert

### Críticos (2)

| ID | Débito | Impacto UX | Esforço Est. |
|----|--------|-----------|-------------|
| UX-01 | Imagens de produtos são placeholders | Confiança zero | 4h |
| UX-02 | "Diagnóstico IA" é enganoso | Expectativa frustrada | 2-8h |

### Altos (4)

| ID | Débito | Impacto UX | Esforço Est. |
|----|--------|-----------|-------------|
| UX-03 | Sem SEO/meta tags | Zero tráfego orgânico | 3h |
| UX-04 | Acessibilidade deficiente (8 problemas) | Exclui usuários | 4h |
| UX-05 | Performance ruim (CDN + imagens externas) | Bounce rate alto | 3h |
| UX-06 | Link diagnóstico no nav → #home | Navegação quebrada | 0.5h |

### Médios (5)

| ID | Débito | Impacto UX | Esforço Est. |
|----|--------|-----------|-------------|
| UX-07 | Sem analytics | Sem dados | 2h |
| UX-08 | Sem favicon | Não profissional | 1h |
| UX-09 | Preços hardcoded | Atualização difícil | 3h |
| UX-10 | Sem estados loading/error | Parece "quebrado" | 2h |
| UX-11 | Hover effects não funcionam em touch | Mobile inferior | 1h |

### Baixos (3)

| ID | Débito | Impacto UX | Esforço Est. |
|----|--------|-----------|-------------|
| UX-12 | Botões sem padrão de cores | Confusão visual | 1h |
| UX-13 | Footer "Estoque" link sem destino claro | Link potencialmente quebrado | 0.5h |
| UX-14 | 7 pesos de fonte (precisa 3-4) | Banda desperdiçada | 0.5h |

---

## 4. Débitos Cruzados (Sistema + UX)

Alguns débitos aparecem em ambas as análises. Consolidação:

| ID Consolidado | SYS | UX | Débito | Prioridade |
|---------------|-----|-----|--------|-----------|
| CROSS-01 | SYS-01 | UX-01 | Imagens placeholder nos produtos | CRÍTICO |
| CROSS-02 | SYS-08 | UX-02 | "AI Assistant" falso | CRÍTICO |
| CROSS-03 | SYS-10 | UX-03 | Sem SEO | ALTO |
| CROSS-04 | SYS-04 | UX-05 | Performance (Tailwind CDN) | ALTO |
| CROSS-05 | SYS-14 | UX-06 | Bug link diagnóstico | ALTO |
| CROSS-06 | SYS-11 | UX-07 | Sem analytics | MÉDIO |
| CROSS-07 | SYS-12 | UX-08 | Sem favicon | MÉDIO |

---

## 5. Matriz Preliminar de Priorização

### Critério: Impacto × Esforço

| Prioridade | ID | Débito | Impacto | Esforço | Quick Win? |
|-----------|-----|--------|---------|---------|-----------|
| 🔴 P1 | CROSS-01 | Imagens reais dos produtos | Crítico | 4h | ❌ (precisa fotos) |
| 🔴 P1 | SYS-03 | Inicializar Git | Crítico | 1h | ✅ |
| 🔴 P1 | CROSS-05 | Fix link diagnóstico | Alto | 0.5h | ✅ |
| 🟠 P2 | CROSS-04 | Tailwind npm + purge | Alto | 3h | ✅ |
| 🟠 P2 | SYS-06 | Remover import map | Alto | 2h | ✅ |
| 🟠 P2 | CROSS-02 | Renomear/implementar IA | Crítico | 2-8h | Depende da opção |
| 🟠 P2 | CROSS-03 | Adicionar SEO | Alto | 3h | ✅ |
| 🟡 P3 | UX-04 | Corrigir acessibilidade | Alto | 4h | Parcial |
| 🟡 P3 | CROSS-06 | Adicionar analytics | Médio | 2h | ✅ |
| 🟡 P3 | SYS-13 | Configurar deploy | Médio | 2h | ✅ |
| 🟡 P3 | SYS-07 | Extrair dados para constantes | Médio | 3h | ✅ |
| 🟢 P4 | CROSS-07 | Favicon | Médio | 1h | ✅ |
| 🟢 P4 | UX-10 | Estados loading/error | Médio | 2h | ✅ |
| 🟢 P4 | UX-14 | Reduzir pesos da fonte | Baixo | 0.5h | ✅ |
| 🟢 P4 | SYS-09 | Limpar .env placeholder | Baixo | 0.5h | ✅ |
| 🟢 P4 | SYS-15/16 | Limpeza (README, metadata) | Baixo | 0.5h | ✅ |

---

## 6. Estimativa Total

| Severidade | Quantidade | Horas Estimadas |
|-----------|-----------|----------------|
| Crítico | 4 (únicos) | 7-13h |
| Alto | 6 (únicos) | 15.5h |
| Médio | 7 (únicos) | 11.5h |
| Baixo | 4 (únicos) | 5.5h |
| **TOTAL** | **21 débitos únicos** | **39.5 - 45.5h** |

---

## 7. Perguntas para Especialistas

### Para @ux-design-expert:
1. A paleta azul/amarelo é adequada para o público-alvo (técnicos de ar condicionado)?
2. O formulário de diagnóstico deveria ser um chatbot real ou manter WhatsApp?
3. Faltam seções importantes? (FAQ, garantia detalhada, como funciona, vídeo demo?)
4. O layout de 4 produtos é suficiente ou deveria ter catálogo paginado?

### Para @qa:
1. Sem banco de dados, quais tipos de teste são prioritários? (e2e? visual regression?)
2. O catálogo PDF deveria ter versionamento?
3. Riscos de manter imagens em serviços externos (picsum pode sair do ar)?

---

*DRAFT gerado por @architect (Aria) — Brownfield Discovery Fase 4*
*Pendente revisão: @ux-design-expert (Fase 6), @qa (Fase 7)*
