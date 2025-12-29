# 🚀 Front-end Challenge — Transaction Management

Desafio para avaliar engenheiros(as) front-end sênior na Trace Finance.

## 📋 Sobre este Desafio

Este desafio tem como objetivo avaliar suas habilidades em construir uma aplicação front-end moderna, escalável e testável, utilizando as principais tecnologias e padrões que adotamos na Trace Finance.

Figma do teste: https://www.figma.com/design/YXzBTEwElRuxRVssHg465f/Teste-t%C3%A9cnico?node-id=0-1&m=dev&t=0krnC3qtatApObzH-1

### 🔀 Como iniciar:

1. **Projeto novo**: Crie um projeto Next.js do zero (recomendado)
2. **Starter template**: Você pode usar qualquer template/boilerplate que preferir

---

## 📝 Contexto

Você deve construir uma aplicação de **gerenciamento de transações** com:

- ✅ **Formulário multi-step** para criar transações (2 etapas com sidebar)
- ✅ **Listagem paginada** com filtros, pesquisa e paginação

A aplicação deve ser responsiva, testável e seguir as melhores práticas de desenvolvimento front-end.

### 📦 O que forneceremos:

- ✅ Base URL da API com endpoints funcionais
- ✅ Documentação dos endpoints
- ✅ Exemplos de payloads

### 📊 Resumo Visual do Fluxo:

```
Listagem de Transações
    ├─→ Filtros (Status, Currency, Data)
    ├─→ Pesquisa
    ├─→ Paginação
    └─→ Botão "Nova Transação"
         ↓
    Formulário Multi-Step
         ├─→ Step 1: Info Básicas (Descrição, Tipo, Valor, CPF/CNPJ)
         └─→ Step 2: Detalhes (campos condicionais por tipo)
              ↓
         Submissão → API → Redirect para Listagem
```

---

## 🛠 Tecnologias (obrigatórias)

### Core Stack

- **Framework**: Next.js 14+ (App Router ou Pages Router)
- **Linguagem**: TypeScript
- **Gerenciamento de Estado**: Zustand, Redux Toolkit ou Context API + hooks
- **Formulários**: React Hook Form + Yup/Zod (validação)
- **HTTP Client**: Axios, Fetch API, React query (diferencial) ou biblioteca de sua escolha
- **Estilização**: Styled Components, Tailwind CSS, Stitches, PandaCSS, etc.

### Testing

- **Testes Unitários/Integração**: Jest + Testing Library

### Código e Qualidade

- **Linting**: ESLint com regras TypeScript
- **Formatação**: Prettier
- **Commits**: Conventional Commits (recomendado)

---

## 🎯 Funcionalidades Obrigatórias

### 1. Listagem de Transações (Página Principal)

#### Interface

**Tabela com colunas:**

- ID
- Tipo (PIX/TED)
- Valor (formatado em BRL)
- Status (badge colorido)
- Data/Hora

**Funcionalidades obrigatórias:**

1. **Paginação**

   - Controles: Infinite Scroll
   - Exibir "Mostrando X-Y de Z resultados"

2. **Filtros:**

   - **Status** (Tab): Todos, Completed, Pending, Failed (FILTRO DE STATUS) -> Seguir esse filtro ao invés do Figma
   - **Tipo** (select/dropdown): PIX, TED
   - **Data** (date range picker): Período, de -> até, mês de inicio, mês de fim
   - Botão "Aplicar Filtros"
   - Botão "Limpar Filtros"
   - Mostrar filtros ativos com componente de Badge

3. **Estados:**

   - Loading (skeleton table)
   - Empty state (sem resultados)
   - Error state (falha na API)

5. **Botão "Nova Transação"**
   - Redireciona para o formulário multi-step

---

### 2. Formulário Multi-Step (Criar Transação)

Formulário com **2 etapas** e **sidebar lateral** indicando o step atual.

#### Layout do Formulário

**Desktop:**

```
┌─────────────────┬──────────────────────────────┐
│  Sidebar        │  Área Principal              │
│                 │                              │
│  ● Step 1       │  [Campos do Step Ativo]      │
│    Informações  │                              │
│                 │                              │
│  ○ Step 2       │                              │
│    Detalhes     │                              │
│                 │                              │
│                 │[Voltar] [Próximo/Confirmar]  │
└─────────────────┴──────────────────────────────┘
```

**Mobile:**

- Sidebar pode ficar horizontal no topo ou como stepper
- Campos empilhados verticalmente

**Navegação:**

- Botão "Voltar": Retorna ao step anterior (ou página de listagem se no Step 1)
- Botão "Próximo" (Step 1): Avança para Step 2
- Botão "Confirmar" (Step 2): Submete o formulário

#### Step 1 - Informações Básicas

**Campos:**

1. **Descrição** (input texto, **opcional**)
2. **Tipo de Transação** (select, **obrigatório**)
   - Opções: `PIX`, `TED`
3. **Valor** (input texto, **obrigatório**, máscara de moeda BRL) BE trabalha em centavos
4. **CPF/CNPJ** (input texto com máscara, **obrigatório**)

**Comportamento:**

- Botão "Próximo" habilitado apenas com campos obrigatórios válidos
- Validação em tempo real (mostrar erros abaixo dos campos)
- Não permitir avançar com campos inválidos

#### Step 2 - Detalhes da Transação

**Campos condicionais baseados no "Tipo de Transação" do Step 1:**

**Se PIX:**

- Chave PIX (input texto, obrigatório)
- Tipo de Chave (select: CPF, Email, Telefone, Aleatória)

**Se TED:**

- Banco (select com lista de bancos)
- Agência (input texto, obrigatório)
- Conta (input texto, obrigatório)
- Tipo de Conta (select: Corrente, Poupança)

**Comportamento:**

- **"Voltar"**: Retorna ao Step 1 com todos os dados preservados
- **"Confirmar"**: Envia os dados para a API (endpoint fornecido)
  - Modal de confirmação (diferencial)
  - Após sucesso: Redireciona para listagem
  - Após erro: Exibe mensagem de erro
- **Ao retornar para o formulário após confirmação**: Campos limpos (reset completo)

**Validações:**

- Todos os campos condicionais devem ter validação apropriada
- Exibir mensagens de erro abaixo dos campos

---

## 🌐 API (Fornecida)

### Endpoints que forneceremos:

Api base url: `https://fe-challenge-trace-api-production.up.railway.App`
Api prefix: `/api`

Endpoints: `/transaction` (GET, POST)

Todas as informações da api podem ser encontradas em [API_README.md](API_README.md)

#### `GET /api/transactions`

**Query Params:**

- `page` (number): Página atual
- `limit` (number): Items por página
- `search` (string): Busca por descrição/ID
- `status` (string): COMPLETED | PENDING | FAILED
- `currency` (string): BRL | USD | EUR
- `startDate` (string): Data início (ISO 8601)
- `endDate` (string): Data fim (ISO 8601)

Mostrar filtro ativo em formato de Badge

---

## 🎨 UI/UX Requirements

### Design System

- Usar theme
- Tokens para cores, fontes, etc.
- Dark mode (diferencial)
- Criar componentes customizados básicos

### Componentes Necessários

- `Button` (primary, secondary)
- `Input` / `InputMask` (para CPF/CNPJ, moeda)
- `Select` / `Dropdown`
- `DatePicker` (para filtro de data)
- `Badge` (para status)
- `Table`
- `Skeleton` (loading states)
- `EmptyState`
- `Sidebar` (para o multi-step form)

### Responsividade

- **Mobile** (< 768px): Stack vertical, sidebar do form pode ser horizontal no topo
- **Desktop** (≥ 768px): Layout padrão com sidebar lateral
- Tabela responsiva (scroll horizontal em mobile ou cards)

## 🏗 Arquitetura e Boas Práticas

### Padrões de Código

- ✅ **DRY**: Não repetir código
- ✅ **Single Responsibility**: Componentes com responsabilidade única
- ✅ **Custom Hooks**: Extrair lógica reutilizável
- ✅ **Type Safety**: Tipar tudo (evitar `any`)
- ✅ **Validações**: Usar schemas (Yup/Zod)
- ✅ **Error Handling**: Tratamento apropriado de erros

## 🧪 Testes (Jest + Testing Library)

## 📝 Pré-requisitos

- ✅ Repositório privado no GitHub
- ✅ TypeScript configurado
- ✅ Next.js 14+
- ✅ Todas as 3 funcionalidades implementadas:
  - Formulário multi-step completo
  - Listagem com filtros, pesquisa e paginação
- ✅ Testes unitários
- ✅ Formulários com validação
- ✅ Gerenciamento de estado
- ✅ Loading, error e empty states
- ✅ Responsivo (mobile e desktop)
- ✅ README com:
  - Instruções de instalação
  - Como rodar o projeto
  - Como rodar os testes
  - Variáveis de ambiente necessárias
- ✅ Lint sem erros
- ✅ Testes passando (`yarn test` ou `npm test`)

---

## 🌟 Diferenciais (Seria Legal Ter)

### Código e Arquitetura

- 🎯 Arquitetura modular bem organizada (feature-based)
- 🎯 Custom hooks bem abstraídos e reutilizáveis
- 🎯 Error Boundary implementado
- 🎯 Abstrações de serviços HTTP (camada de API bem estruturada)
- 🎯 Path aliases configurados no TypeScript
- 🎯 Documentação de componentes (Storybook ou similar)

### UX/UI

- ✨ Dark mode
- ✨ Botão para alteração de lingua
- ✨ Animações e transições suaves
- ✨ Toast notifications (feedback de ações)
- ✨ Confirmação antes de submeter formulário
- ✨ Skeleton screens customizados

### Testing e Qualidade

- 🧪 Cobertura de testes
- 🔧 Husky + lint-staged
- 🔧 Commitlint

### Extras

- 🌐 Internacionalização (PT/EN) - i18n
- 🚀 Deploy em produção (Vercel, Netlify, etc.)

---

## 📤 Submissão

1. ✅ Crie um fork do repositório
2. ✅ Dê permissão de leitura para o usuário que indicarmos no repositório privado
3. ✅ No README, inclua:
   - Instruções de instalação
   - Como rodar o projeto
   - Como rodar os testes
   - Principais decisões técnicas
   - Tempo aproximado de desenvolvimento
   - Melhorias futuras (se tiver)

---

## ⏱️ Prazo

**2-3 dias** a partir do recebimento do desafio.

Se precisar de mais tempo, entre em contato conosco.

---

## ❓ Dúvidas

Envie e-mail com o assunto **"Dúvida - Desafio Front-end"**.

---

**Boa sorte! 🚀**
