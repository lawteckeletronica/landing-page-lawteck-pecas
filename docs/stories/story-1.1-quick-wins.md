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

- [ ] **SYS-03:** Inicializar Git (`git init`, `.gitignore`, primeiro commit)
- [ ] **SYS-14:** Corrigir link "Diagnóstico" no nav: `#home` → `#diagnosis` (adicionar id na seção)
- [ ] **SYS-08:** Renomear "Diagnóstico IA" → "Consulte um Técnico" (Header.tsx, Hero.tsx, AiAssistant.tsx)
- [ ] **UX-13:** Corrigir link "Estoque" no Footer (apontar para destino correto ou remover)
- [ ] **SYS-09:** Remover `.env.local` com placeholder inútil
- [ ] **SYS-15:** Atualizar README com informações reais do projeto
- [ ] **SYS-16:** Remover `metadata.json` (artefato do AI Studio)

---

## Critérios de Aceite

- [ ] Todos os links de navegação funcionam corretamente
- [ ] Nenhuma referência a "IA" ou "AI" na interface
- [ ] Repositório Git inicializado com .gitignore adequado
- [ ] Nenhum arquivo desnecessário no projeto
- [ ] WhatsApp abre com mensagem pré-formatada correta

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
