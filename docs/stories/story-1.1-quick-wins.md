# Story 1.1: Quick Wins — Bugs e Limpeza

**Epic:** LANDING-DEBT
**Fase:** 1
**Estimativa:** 3.5 horas
**Prioridade:** P1
**Blocker:** Nenhum — pode começar imediatamente

---

## Objetivo

Corrigir bugs, remover lixo e fazer ajustes rápidos que melhoram imediatamente a qualidade da página.

---

## Tasks

- [x] **SYS-03:** Inicializar Git (`git init`, `.gitignore`, primeiro commit)
- [x] **SYS-14:** Corrigir link "Diagnóstico" no nav: `#home` → `#diagnosis` (adicionar id na seção)
- [x] **SYS-08:** Renomear "Diagnóstico IA" → "Consulte um Técnico" (Header.tsx, Hero.tsx, AiAssistant.tsx)
- [x] **UX-13:** Corrigir link "Estoque" no Footer (apontar para destino correto ou remover)
- [x] **SYS-09:** Remover `.env.local` com placeholder inútil
- [x] **SYS-15:** Atualizar README com informações reais do projeto
- [x] **SYS-16:** Remover `metadata.json` (artefato do AI Studio)

---

## Critérios de Aceite

- [x] Todos os links de navegação funcionam corretamente
- [x] Nenhuma referência a "IA" ou "AI" na interface
- [x] Repositório Git inicializado com .gitignore adequado
- [x] Nenhum arquivo desnecessário no projeto
- [x] WhatsApp abre com mensagem pré-formatada correta

---

## Arquivos Afetados

- `components/Header.tsx` — link diagnóstico + texto
- `components/Hero.tsx` — título do formulário
- `components/AiAssistant.tsx` — renomear componente/textos
- `components/Footer.tsx` — link Estoque
- `.env.local` — remover
- `metadata.json` — remover
- `README.md` — reescrever
- `.gitignore` — criar

---

*Story criada por @pm — Brownfield Discovery Fase 10*
