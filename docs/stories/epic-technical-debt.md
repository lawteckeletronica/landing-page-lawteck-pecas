# Epic: Resolução de Débitos Técnicos - Landing Page Lawteck Peças

**Epic ID:** LANDING-DEBT
**Data:** 2026-02-08
**Status:** Pronto para execução
**Estimativa Total:** 43 horas (Fases 1-4)
**Budget:** R$ 6.450

---

## Objetivo

Transformar a landing page gerada por IA em uma página profissional, performática, visível no Google e pronta para converter visitantes em clientes via WhatsApp.

---

## Escopo

### Incluído (Fases 1-4)
- Correção de bugs e limpeza
- Migração de infraestrutura (Tailwind, build, deploy)
- Conteúdo real (fotos, SEO, analytics)
- Melhorias de UX (a11y, FAQ, garantia, "Como Funciona")

### Excluído (Fase 5 — Backlog)
- Chatbot Gemini real
- Integração com Estoque Lawteck
- Catálogo dinâmico inline
- Testes automatizados

---

## Critérios de Sucesso

- [ ] Lighthouse Performance > 80
- [ ] Lighthouse SEO > 90
- [ ] Lighthouse Accessibility > 90
- [ ] CSS < 30KB (vs 3MB atual)
- [ ] 4/4 produtos com fotos reais
- [ ] 100% links funcionais
- [ ] Publicada em URL pública
- [ ] Analytics rastreando cliques WhatsApp

---

## Stories

| # | Story | Fase | Horas | Pri. |
|---|-------|------|-------|------|
| 1.1 | Quick Wins — Bugs e Limpeza | 1 | 3.5h | P1 |
| 1.2 | Infraestrutura — Tailwind npm + Build | 2 | 5.5h | P2 |
| 1.3 | Infraestrutura — Deploy + Favicon | 2 | 3h | P2 |
| 1.4 | Conteúdo — Imagens Reais + Background | 3 | 6h | P1 |
| 1.5 | SEO + Analytics | 3 | 6h | P3 |
| 1.6 | UX — Acessibilidade | 4 | 4h | P4 |
| 1.7 | UX — Novas Seções (Como Funciona, FAQ, Garantia) | 4 | 7h | P4 |
| 1.8 | UX — Polish (estados, botões, dados) | 4 | 7h | P4 |

---

## Dependências Externas

- **BLOCKER:** Fotografias reais dos produtos da Lawteck (para Story 1.4)
- **DECISÃO:** Domínio/URL para publicação (para Story 1.3)
- **DECISÃO:** Conta Google Analytics (para Story 1.5)

---

## Timeline

```
Semana 1: Stories 1.1, 1.2, 1.3 (infraestrutura)
Semana 2: Stories 1.4, 1.5 (conteúdo + SEO) ← precisa das fotos
Semana 3: Stories 1.6, 1.7, 1.8 (UX enhancements)
```

---

*Epic criado por @pm (perspectiva via @architect) — Brownfield Discovery Fase 10*
