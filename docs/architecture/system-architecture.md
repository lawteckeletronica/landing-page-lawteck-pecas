# System Architecture - Landing Page Lawteck Peças

**Projeto:** Lawteck - Placas de Ar Condicionado
**Data:** 2026-02-08
**Agente:** @architect (Aria)
**Fase:** Brownfield Discovery - Fase 1

---

## 1. Visão Geral

Landing page comercial para venda de placas eletrônicas de ar-condicionado (novas e seminovas). Foco em conversão via WhatsApp com formulário de diagnóstico pseudo-IA.

**Origem:** Gerado via Google AI Studio (bolt.new / similar)
**Status:** Funcional, não versionado, não deployado em produção conhecida

---

## 2. Stack Tecnológico

| Camada | Tecnologia | Versão | Status |
|--------|-----------|--------|--------|
| Framework | React | 19.2.4 | Atual |
| Build Tool | Vite | 6.2.0 | Atual |
| Linguagem | TypeScript | 5.8.2 | Atual |
| CSS | TailwindCSS (CDN) | 3.x | ⚠️ Via CDN |
| Ícones | Lucide React | 0.563.0 | Atual |
| Fonte | Montserrat | Google Fonts CDN | OK |

### Dependências (package.json)

**Runtime (3):**
- `react` 19.2.4
- `react-dom` 19.2.4
- `lucide-react` 0.563.0

**Dev (4):**
- `typescript` 5.8.2
- `vite` 6.2.0
- `@vitejs/plugin-react` 5.0.0
- `@types/node` 22.14.0

**Total:** 7 dependências — stack mínima e limpa.

---

## 3. Estrutura de Pastas

```
lawteck---placas-de-ar-condicionado/
├── components/
│   ├── AiAssistant.tsx      # Formulário de diagnóstico (→ WhatsApp)
│   ├── Features.tsx          # 6 cards de vantagens
│   ├── Footer.tsx            # Rodapé com contato/navegação
│   ├── Header.tsx            # Header fixo + nav + mobile menu
│   ├── Hero.tsx              # Seção principal com CTA
│   ├── Products.tsx          # 4 cards de produtos
│   └── Testimonials.tsx      # 3 depoimentos
├── public/
│   └── catalogo-lawteck.pdf  # Catálogo PDF
├── App.tsx                   # Componente raiz
├── index.tsx                 # Entry point React
├── index.css                 # Estilos globais + animações
├── index.html                # HTML template + Tailwind config
├── types.ts                  # Interfaces TypeScript
├── vite.config.ts            # Configuração Vite
├── tsconfig.json             # Configuração TypeScript
├── package.json              # Dependências
├── metadata.json             # Metadados do projeto
└── .env.local                # Variáveis de ambiente
```

**Componentes:** 7 (flat, sem subpastas)
**Padrão:** Componentes funcionais com props tipadas
**Roteamento:** Nenhum (SPA single-page com anchors)

---

## 4. Padrões de Código Existentes

### Positivos
- TypeScript com interfaces definidas (`types.ts`)
- Componentes funcionais React
- Tailwind para estilização (utility-first)
- Separação de concerns por seção da página
- WhatsApp links com mensagens pré-formatadas

### Problemáticos
- Tailwind via CDN (não compilado, bundle maior)
- Config do Tailwind inline no HTML (não no `tailwind.config.js`)
- Dados hardcoded dentro dos componentes (produtos, depoimentos, features)
- Imagens de placeholder (picsum.photos, unsplash) em produção
- Componente "AiAssistant" é misleading — só redireciona para WhatsApp
- Import map no HTML para React/React-DOM (duplicação com package.json)
- `.env.local` com `GEMINI_API_KEY=PLACEHOLDER_API_KEY` nunca utilizada

---

## 5. Configurações

### Vite (vite.config.ts)
- Server: port 3000, host 0.0.0.0
- Path alias: `@/` → `./`
- Plugin: React

### TypeScript (tsconfig.json)
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Path alias: `@/*` → `./*`
- Strict module isolation

### Tailwind (inline no index.html)
- Cores brand: blue (900→50), yellow (400→600), gray
- Fonte: Montserrat
- Shadow customizado: `xl-blue`

---

## 6. Pontos de Integração

| Integração | Status | Detalhes |
|-----------|--------|---------|
| WhatsApp | ✅ Ativo | (85) 99651-3548 — CTAs em toda a página |
| Instagram | ✅ Link | @lawteckpecas |
| TikTok | ✅ Link | @lawteckpecas |
| Gemini AI | ❌ Placeholder | API key no .env mas sem integração |
| PDF Catálogo | ✅ Ativo | `/catalogo-lawteck.pdf` |
| Google Fonts | ✅ CDN | Montserrat |
| Unsplash | ⚠️ Externo | Background do Hero |
| Picsum Photos | ⚠️ Externo | Imagens de produtos |

---

## 7. Débitos Técnicos Identificados (Nível Sistema)

### CRÍTICO

| ID | Débito | Impacto | Detalhes |
|----|--------|---------|---------|
| SYS-01 | Imagens de produtos são placeholders (picsum.photos) | Credibilidade | Produtos mostram fotos genéricas, não as placas reais |
| SYS-02 | Background Hero é imagem genérica do Unsplash | Branding | Deveria ser foto da Lawteck ou de placas reais |
| SYS-03 | Sem versionamento Git | Segurança | Sem histórico, sem backup, sem deploy automatizado |

### ALTO

| ID | Débito | Impacto | Detalhes |
|----|--------|---------|---------|
| SYS-04 | Tailwind via CDN em produção | Performance | Bundle não otimizado, carrega CSS inteiro (~3MB) vs ~10KB purged |
| SYS-05 | Config Tailwind inline no HTML | Manutenção | Deveria estar em `tailwind.config.js` padrão |
| SYS-06 | Import map duplica dependências do package.json | Build | React carregado via CDN E npm — conflito potencial |
| SYS-07 | Dados hardcoded nos componentes | Manutenção | Produtos, preços, depoimentos, features — tudo inline |
| SYS-08 | "AI Assistant" é falso — só redireciona WhatsApp | UX/Confiança | Nome sugere IA mas não existe integração |

### MÉDIO

| ID | Débito | Impacto | Detalhes |
|----|--------|---------|---------|
| SYS-09 | .env.local com API key placeholder commitável | Segurança | `GEMINI_API_KEY=PLACEHOLDER_API_KEY` — lixo |
| SYS-10 | Sem SEO (meta tags, OG, sitemap) | Descoberta | Landing page sem meta description, og:image, etc. |
| SYS-11 | Sem analytics (GA, Pixel, Hotjar) | Negócio | Sem tracking de conversão ou comportamento |
| SYS-12 | Sem favicon customizado | Branding | Usa favicon padrão do Vite |
| SYS-13 | Sem CI/CD ou deploy configurado | Operacional | Sem Vercel/Netlify/Cloudflare |
| SYS-14 | Link de diagnóstico no nav aponta para #home | Bug | Deveria apontar para a seção do formulário |

### BAIXO

| ID | Débito | Impacto | Detalhes |
|----|--------|---------|---------|
| SYS-15 | README genérico (AI Studio boilerplate) | Documentação | Não documenta o projeto real |
| SYS-16 | metadata.json é artefato do AI Studio | Limpeza | Não serve para nada em produção |
| SYS-17 | Sem testes (unit, e2e) | Qualidade | Landing page simples — baixa prioridade |

---

## 8. Análise de Performance (Estimativa)

| Métrica | Estimativa Atual | Meta |
|---------|-----------------|------|
| Tailwind CDN | ~3MB CSS não purgado | ~10-30KB com purge |
| Imagens externas | Latência variável (picsum/unsplash) | Otimizadas locais |
| Bundle JS | Pequeno (~50KB gzip) | OK |
| First Paint | ~2-3s (CDN deps) | <1.5s |
| LCP | ~4-5s (imagem hero externa) | <2.5s |

---

## 9. Informações de Contato (hardcoded)

- **WhatsApp:** (85) 99651-3548
- **Email:** contato@lawteck.com.br
- **Endereço:** Rua Álvaro Fernandes, N 244, A, Fortaleza - CE
- **Instagram:** @lawteckpecas
- **TikTok:** @lawteckpecas

---

## 10. Recomendações Arquiteturais

1. **Instalar Tailwind via npm** e configurar purge — redução de ~99% no CSS
2. **Remover import map** do HTML e usar apenas npm/Vite para dependências
3. **Extrair dados para arquivos JSON/constantes** — facilitar manutenção de preços
4. **Substituir imagens placeholder** por fotos reais dos produtos
5. **Inicializar Git** e configurar deploy (Vercel ou Cloudflare Pages)
6. **Adicionar SEO** (meta tags, OG, structured data para produtos)
7. **Adicionar analytics** (GA4 mínimo para tracking de conversão WhatsApp)
8. **Renomear "AI Assistant"** para algo honesto ou implementar IA real com Gemini
9. **Otimizar imagens** — formato WebP, lazy loading, srcset responsivo

---

*Gerado por @architect (Aria) — Brownfield Discovery Fase 1*
