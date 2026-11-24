# Documentação Completa do Projeto — PetShop do Totó (AB2)

Este documento reúne uma visão geral, técnica e funcional de todo o projeto **PetShop do Totó**, desenvolvido para a disciplina **Programação Web I** (UFAL — Professor Gustavo Miranda, Aluno Bruno Martins Gomes). Ele foi estruturado para servir como material de referência completo para leitura por assistentes de IA (como Claude e NotebookLM) e para apoio na apresentação final do sistema.

---

## 1. Contexto, Problema e Objetivo

### 1.1. O Problema do Mundo Real
Petshops de pequeno porte costumam divulgar seus serviços apenas por redes sociais (como Instagram) e realizar todo o atendimento e agendamento manualmente via WhatsApp. Isso gera:
- Repetição constante das mesmas informações (preços, horários de funcionamento, o que está incluso em cada serviço).
- Demora na resposta ao cliente.
- Dificuldade em organizar e consultar os agendamentos do dia.

### 1.2. A Solução Proposta
O **PetShop do Totó** é uma aplicação web SPA (*Single Page Application*) desenvolvida em **React** que centraliza:
1. Catálogo interativo de serviços com busca, filtro por categoria, preços e detalhes expansíveis.
2. Sistema de **Agendamento Online** integrado a banco de dados (**Firebase Cloud Firestore**, com fallback automático em `localStorage`).
3. Página institucional (**Sobre**) com diferenciais e horários de funcionamento.
4. Página de **Contato** com acesso direto ao WhatsApp e formulário rápido de dúvidas.

---

## 2. Stack Tecnológica e Dependências

Definidas em `package.json`:

| Tecnologia / Pacote | Versão | Papel no Projeto |
|---|---|---|
| **React** | `^19.0.0` | Biblioteca principal para construção da interface baseada em componentes e hooks (`useState`, `useEffect`). |
| **React DOM** | `^19.0.0` | Renderização da árvore React no elemento `#root` do HTML. |
| **React Router DOM** | `^7.2.0` | Roteamento client-side (`BrowserRouter`, `Routes`, `Route`, `Link`) sem recarregar a página. |
| **React Icons** | `^5.5.0` | Biblioteca de ícones (`react-icons/fa` — Font Awesome) usada em menus, cards, botões e alertas. |
| **Firebase** | `^11.4.0` | SDK oficial do Google Firebase para conexão com o banco de dados NoSQL **Cloud Firestore**. |
| **Vite** | `^6.2.0` | Bundler e servidor de desenvolvimento rápido (`npm run dev`, `npm run build`, `npm run preview`). |
| **@vitejs/plugin-react** | `^4.3.4` | Suporte oficial ao JSX e Fast Refresh no Vite. |

---

## 3. Estrutura de Arquivos do Projeto

```text
Petshop ab2/
├── index.html                    # Página HTML inicial (entry point do navegador)
├── package.json                  # Dependências e scripts Vite
├── vite.config.js                # Configuração do Vite
├── README.md                     # Resumo rápido e instruções de execução
├── DOCUMENTACAO_COMPLETA.md      # Este documento completo
└── src/
    ├── main.jsx                  # Ponto de entrada React (createRoot + StrictMode)
    ├── App.jsx                   # Configuração das rotas e layout global (Header + Main + Footer)
    ├── App.css                   # Folha de estilos global (Flexbox, cores, cards, formulários, alertas)
    ├── components/
    │   ├── Header.jsx            # Cabeçalho com logo e menu de navegação
    │   ├── Footer.jsx            # Rodapé fixo na base da página
    │   ├── ServiceCard.jsx       # Card reutilizável de serviço (usa props e estado interno)
    │   └── AgendamentoItem.jsx   # Card reutilizável de agendamento salvo (usa props e callback)
    ├── pages/
    │   ├── Servicos.jsx          # Página inicial (/): catálogo, busca e filtro por categoria
    │   ├── Agendamento.jsx       # Página (/agendamento): formulário e listagem do banco de dados
    │   ├── Sobre.jsx             # Página (/sobre): apresentação, diferenciais e horários
    │   └── Contato.jsx           # Página (/contato): botão WhatsApp e formulário de dúvida
    └── services/
        └── firebase.js           # Camada de acesso a dados (Firebase Firestore + fallback localStorage)
```

---

## 4. Fluxo de Inicialização e Arquitetura de Rotas

1. **`index.html`**: Define o idioma `pt-BR`, o título `"PetShop do Totó - Seu Pet em Boas Mãos"`, um favicon SVG de patinha (`🐾`), a `<div id="root"></div>` e carrega `/src/main.jsx`.
2. **`src/main.jsx`**: Monta o componente `<App />` dentro de `<StrictMode>` usando `createRoot(document.getElementById('root'))`.
3. **`src/App.jsx`**: Envolve toda a aplicação em `<BrowserRouter>` e organiza o layout em `.app-wrapper` (Flexbox em coluna com `min-height: 100vh`):
   - `<Header />` no topo.
   - `<main className="main-content">` no centro (expande com `flex: 1`), contendo `<Routes>`:
     - `/` → `<Servicos />`
     - `/agendamento` → `<Agendamento />`
     - `/sobre` → `<Sobre />`
     - `/contato` → `<Contato />`
   - `<Footer />` no rodapé.

---

## 5. Detalhamento dos Componentes e Páginas

### 5.1. `Header.jsx`
- Exibe a marca **PetShop do Totó** com o ícone `<FaPaw />`.
- Renderiza uma `<nav className="menu">` com 4 links do `react-router-dom` (`<Link>`):
  - **Serviços** (`/`) com `<FaCut />`
  - **Agendamento** (`/agendamento`) com `<FaCalendarAlt />`
  - **Sobre** (`/sobre`) com `<FaInfoCircle />`
  - **Contato** (`/contato`) com `<FaPhoneAlt />`

### 5.2. `Footer.jsx`
- Exibe `<FaPaw /> PetShop do Totó - Todos os direitos reservados` sobre fundo escuro (`#264653`).

### 5.3. `Servicos.jsx` (Página Inicial `/`)
- Mantém um array estático `listaServicos` com 3 serviços:
  1. **Banho e tosa** (Categoria: `Estética`, Preço: `A partir de R$ 50`)
  2. **Consulta veterinária** (Categoria: `Saúde`, Preço: `A partir de R$ 80`)
  3. **Hospedagem** (Categoria: `Bem-estar`, Preço: `R$ 40 por dia`)
- **Estados (`useState`):**
  - `busca`: texto digitado no campo de pesquisa (`onChange`).
  - `categoriaSelecionada`: categoria ativa (`'Todas'`, `'Estética'`, `'Saúde'`, `'Bem-estar'`), alterada via `onClick` nos botões de filtro.
- **Filtragem:** `servicosFiltrados` combina correspondência no `titulo` ou `descricao` (case-insensitive) com a categoria selecionada.
- **Renderização Condicional:** Se `servicosFiltrados.length === 0`, exibe `"Nenhum serviço encontrado para a sua busca."`; caso contrário, mapeia os itens para `<ServiceCard />`.

### 5.4. `ServiceCard.jsx` (Componente de Card de Serviço)
- **Props recebidas:** `imagem`, `titulo`, `categoria`, `descricao`, `preco`, `detalhes`.
- **Estado interno:** `mostrarDetalhes` (`useState(false)`), alternado pelo botão `"Ver detalhes"` / `"Ocultar detalhes"` via `onClick`.
- **Renderização Condicional:**
  - Altera ícone (`<FaChevronUp />` ou `<FaChevronDown />`) e texto do botão.
  - Exibe `<div className="detalhes-servico">` apenas quando `mostrarDetalhes` é `true`.
- Contém `<Link to="/agendamento">` no botão `"Agendar serviço"`.

### 5.5. `Agendamento.jsx` (Página `/agendamento`)
Responsável pelo cadastro (Create), listagem (Read) e cancelamento (Delete) de agendamentos.
- **Estados do formulário (`useState`):** `tutor`, `telefone`, `pet`, `especie` (padrão `'Cachorro'`), `servico` (padrão `'Banho e tosa'`), `data`, `horario`.
- **Estados de controle:** `agendamentos` (lista), `mensagemSucesso`, `erro`.
- **Carregamento inicial (`useEffect`):** Ao montar o componente (`[]`), chama `carregarDados()`, que executa `await listarAgendamentos()` e preenche `agendamentos`.
- **Criação (`handleAgendar` no `onSubmit`):**
  - Impede recarregamento com `e.preventDefault()`.
  - Valida se `tutor`, `telefone`, `pet`, `data` e `horario` estão preenchidos; se faltar algum, define `erro` e limpa `mensagemSucesso`.
  - Chama `await salvarAgendamento(novo)`, adiciona o registro retornado no início do array `agendamentos`, reseta os campos do formulário e exibe `mensagemSucesso`.
- **Exclusão (`handleExcluir`):**
  - Recebe o `id` do agendamento, chama `await excluirAgendamento(id)`, remove o item da lista em memória (`filter`) e exibe `"Agendamento cancelado com sucesso."`.
- **Renderização Condicional:** Exibe alertas de erro (`.alerta-erro`), sucesso (`.alerta-sucesso`), mensagem de lista vazia ou os cards `<AgendamentoItem />`.

### 5.6. `AgendamentoItem.jsx` (Componente de Item Agendado)
- **Props recebidas:** `id`, `tutor`, `telefone`, `pet`, `especie`, `servico`, `data`, `horario`, `onExcluir`.
- **Renderização Condicional:** Exibe `<FaCat />` se `props.especie === 'Gato'`, caso contrário exibe `<FaDog />`.
- **Evento `onClick`:** Botão `"Cancelar"` chama `props.onExcluir(props.id)`.

### 5.7. `Sobre.jsx` (Página `/sobre`)
- Apresenta a proposta do PetShop do Totó e 3 cards de pilares: *Cuidado com Amor* (`FaHeart`), *Equipe Qualificada* (`FaUserMd`) e *Segurança e Higiene* (`FaShieldAlt`).
- Usa `useState(false)` (`mostrarCuriosidades`) e `onClick` no botão `"Ver Horários de Funcionamento"` / `"Ocultar Horários de Funcionamento"` para exibir condicionalmente os horários (Segunda a Sexta 08h00 às 18h00, Sábado 08h00 às 13h00, Penedo - AL).

### 5.8. `Contato.jsx` (Página `/contato`)
- Botão externo com `<FaWhatsapp />` apontando para `https://wa.me/5582999107995`.
- Formulário rápido com estados `nome`, `duvida` e `enviado`. Ao enviar (`onSubmit`), se ambos os campos estiverem preenchidos, marca `enviado = true`, limpa os campos e mostra o alerta `"Mensagem recebida! Retornaremos em breve."`.

---

## 6. Funcionamento Detalhado do Banco de Dados (`src/services/firebase.js`)

O módulo `src/services/firebase.js` implementa uma **arquitetura híbrida** com **Firebase Cloud Firestore** (nuvem) e **fallback automático para `localStorage`** (navegador), garantindo que o sistema funcione tanto conectado a um projeto Firebase real quanto localmente em demonstrações sem configuração de credenciais.

### 6.1. Estrutura de um Registro de Agendamento
Cada documento salvo na coleção `agendamentos` (ou no `localStorage`) possui os seguintes campos:
```json
{
  "id": "ag-1",
  "tutor": "Maria Oliveira",
  "telefone": "(82) 99911-2233",
  "pet": "Thor",
  "especie": "Cachorro",
  "servico": "Banho e tosa",
  "data": "2026-11-20",
  "horario": "09:00"
}
```

### 6.2. Detecção Automática de Ambiente (Nuvem vs. Local)
O arquivo lê variáveis de ambiente do Vite (`import.meta.env.VITE_FIREBASE_*`):
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

Caso nenhuma variável de ambiente seja fornecida, o sistema usa valores padrão de placeholder (como `apiKey: 'SUA_API_KEY'`). A flag `isFirebaseConfigured` verifica:
```js
const isFirebaseConfigured =
  firebaseConfig.apiKey !== 'SUA_API_KEY' && Boolean(firebaseConfig.apiKey)
```
- **Se `isFirebaseConfigured` for `true`:** Executa `initializeApp(firebaseConfig)` e obtém a instância `db = getFirestore(app)`. Todas as operações passam a ler e gravar diretamente na coleção `'agendamentos'` do Cloud Firestore.
- **Se `isFirebaseConfigured` for `false`:** `db` permanece `null` e todas as funções usam automaticamente o `localStorage` do navegador sob a chave `'petshop_toto_agendamentos_db'`.

### 6.3. Operações CRUD Exportadas

1. **`listarAgendamentos()`**
   - **Modo Firestore:** Executa `getDocs(collection(db, 'agendamentos'))` e mapeia cada documento retornando `{ id: documento.id, ...documento.data() }`.
   - **Modo Local:** Executa `lerBancoLocal()`. Se não houver dados salvos no `localStorage`, grava e retorna os 2 registros iniciais de exemplo (`dadosIniciais`: Thor e Luna).

2. **`salvarAgendamento(novoAgendamento)`**
   - **Modo Firestore:** Executa `addDoc(collection(db, 'agendamentos'), novoAgendamento)` e retorna `{ id: docRef.id, ...novoAgendamento }`.
   - **Modo Local:** Gera um ID único com `'ag-' + Date.now()`, insere o novo registro no topo da lista atual, salva o JSON atualizado no `localStorage` e retorna o registro criado.

3. **`excluirAgendamento(id)`**
   - **Modo Firestore:** Executa `deleteDoc(doc(db, 'agendamentos', id))`.
   - **Modo Local:** Filtra a lista removendo o item cujo `item.id === id` e salva o novo array no `localStorage`.

---

## 7. Estilização e Layout (`src/App.css`)

- **Paleta de cores:**
  - Verde-água principal (`#2a9d8f`) para header, títulos, botões principais e badges.
  - Azul-petróleo (`#264653`) para títulos secundários e rodapé.
  - Coral/Laranja (`#e76f51`) para preços, tags de serviço e botão de cancelar.
  - Fundo claro (`#fafafa` e `#f1f7f6`) e branco (`#ffffff`) para cards.
- **Posicionamento (Flexbox):** Usado em `.app-wrapper`, `.header`, `.menu`, `.filtros-container`, `.cards`, `.card`, `.painel-agendamento`, `.linha-form`, `.agendamento-card` e `.footer`, com `flex-wrap: wrap` para adaptação a diferentes larguras de tela.
- **Estilização de Imagens:** `.card img` define `width: 100%`, `height: 180px`, `object-fit: cover`, `border-radius: 8px` e transição suave no `:hover` (`opacity: 0.85` e `transform: scale(1.02)`).

---

## 8. Atendimento aos Requisitos da Disciplina (Tabela 1 — AB2)

| Requisito da Tabela 1 | Como foi atendido no projeto |
|---|---|
| Ter uma página HTML inicial | `index.html` com `#root` e `src/main.jsx` |
| Dividir a página HTML inicial em partes diferentes | Separação em `components/` (`Header`, `Footer`, `ServiceCard`, `AgendamentoItem`) e `pages/` (`Servicos`, `Agendamento`, `Sobre`, `Contato`) |
| Utilizar comandos de locomoção dos componentes | Flexbox (`display: flex`, `justify-content`, `align-items`, `flex-wrap`, `gap`) em `src/App.css` |
| Apresentar conceitos de estilização em texto | Tipografia, hierarquia visual, cores, `line-height`, badges e alertas |
| Apresentar conceitos de estilização em imagens | `object-fit: cover`, `border-radius` e efeito `:hover` nos cards |
| Criar rotas para diferentes páginas do website | `BrowserRouter`, `Routes`, `Route` e `Link` (`react-router-dom`) |
| Utilizar conceitos de `props` no website | Passagem de dados e funções callback (`onExcluir`) em `ServiceCard` e `AgendamentoItem` |
| Utilizar a biblioteca de ícones do React | `react-icons/fa` em todo o sistema |
| Utilizar os eventos `onChange` e `onClick` | Campos de busca/formulário (`onChange`) e filtros/detalhes/exclusão (`onClick`) |
| Utilizar `useState` e Renderização Condicional | Controle de estados de busca, filtros, formulários, detalhes expansíveis, horários e alertas |
| Implementar conexão com Banco de Dados | `src/services/firebase.js` com Cloud Firestore (`getDocs`, `addDoc`, `deleteDoc`) e fallback `localStorage` |

---

## 9. Detalhes Técnicos Além dos Requisitos (Por Que Cada Coisa Existe no Código)

Esta seção explica os recursos, padrões de React/JavaScript/CSS e decisões técnicas presentes no código que **não estavam explicitamente pedidos na Tabela 1**, mas sustentam o funcionamento do sistema:

### 9.1. Infraestrutura e Entrada (`package.json`, `index.html`, `main.jsx`)
- **`"type": "module"` e `--configLoader native` (`package.json`):** Habilita ES Modules (`import`/`export`) e executa o Vite diretamente pelo Node com carregador nativo.
- **`<meta name="viewport">` (`index.html`):** Garante adaptação da largura da página em telas de celular.
- **Favicon SVG inline (`data:image/svg+xml` em `index.html`):** Exibe o ícone `🐾` na aba do navegador sem precisar de arquivo `.ico` ou `.png` separado.
- **`createRoot` e `<StrictMode>` (`main.jsx`):** `createRoot` é a API moderna do React para montar a aplicação no `#root`. O `StrictMode` ativa checagens extras apenas em desenvolvimento para detectar efeitos colaterais e práticas obsoletas.

### 9.2. Layout e CSS (`App.jsx` e `App.css`)
- **Sticky Footer (`min-height: 100vh` + `flex: 1`):** `.app-wrapper` usa Flexbox em coluna ocupando 100% da altura da tela (`100vh`), e `.main-content` usa `flex: 1` para expandir e manter o `Footer` sempre no rodapé, mesmo em páginas com pouco conteúdo.
- **`* { box-sizing: border-box; }`:** Faz `padding` e `border` serem contabilizados dentro da largura/altura definida, evitando estouro de largura em cards e inputs.
- **`transition` e `:hover`:** Suavizam interações visuais no menu e nas imagens dos cards (`opacity: 0.85` e `transform: scale(1.02)` em `0.2s`).

### 9.3. Boas Práticas de React e JavaScript
- **`key={...}` em listas `.map()` (`Servicos.jsx` e `Agendamento.jsx`):** Identificador único exigido pelo React para reconciliar e atualizar listas com eficiência.
- **Busca *case-insensitive* com `.toLowerCase()` (`Servicos.jsx`):** Converte texto digitado e dados dos serviços para minúsculas antes de comparar com `.includes()`.
- **React Fragment `<>...</>` e `<article>` (`ServiceCard.jsx`):** `<>...</>` agrupa ícone e texto sem criar `<div>` extra no DOM; `<article>` melhora a semântica HTML do card.
- **`type="button"` vs `type="submit"`:** Botões de filtro, detalhes, exclusão e horários usam `type="button"` para não dispararem envio acidental de formulários; botões de envio de formulário usam `type="submit"` para acionar `onSubmit` (inclusive com a tecla Enter).

### 9.4. Formulários, Assincronismo e Comunicação Pai-Filho
- **`useEffect(() => { carregarDados() }, [])` (`Agendamento.jsx`):** Executa o carregamento inicial do banco de dados **apenas uma vez** quando a página é montada (por causa do array de dependências vazio `[]`).
- **`async` / `await` (`Agendamento.jsx`):** Aguarda as respostas assíncronas do Firestore/`firebase.js` antes de atualizar o estado na tela.
- **`e.preventDefault()` e `.trim()` (`Agendamento.jsx`):** `preventDefault()` impede o navegador de recarregar a página ao enviar o `<form>`; `.trim()` bloqueia o envio de campos preenchidos apenas com espaços.
- **Imutabilidade de estado (`[salvo, ...agendamentos]` e `.filter(...)`):** Cria novos arrays ao adicionar ou remover itens do `useState`, garantindo que o React detecte a mudança e re-renderize a lista corretamente.
- **Callback via Props (`onExcluir` em `AgendamentoItem.jsx`):** O componente filho não altera o estado do pai diretamente; ele chama a função `props.onExcluir(props.id)` recebida do componente pai (`Agendamento.jsx`).
- **Segurança em link externo (`target="_blank" rel="noreferrer"` em `Contato.jsx`):** Abre o WhatsApp em nova aba impedindo acesso à janela original via `window.opener`.
- **Limpeza de alerta ao digitar (`setEnviado(false)` em `Contato.jsx`):** Oculta a mensagem de sucesso anterior assim que o usuário volta a digitar nos campos.

### 9.5. Banco de Dados Híbrido (`src/services/firebase.js`)
- **`import.meta.env.VITE_*`:** Lê variáveis de ambiente do Vite (prefixo `VITE_` obrigatório para exposição segura no front-end) sem expor credenciais fixas no código.
- **Fallback automático (`isFirebaseConfigured`):** Se não houver `.env` configurado (`apiKey === 'SUA_API_KEY'`), alterna automaticamente para `localStorage`.
- **`JSON.stringify` / `JSON.parse`:** Converte arrays/objetos em texto para gravar no `localStorage` e reconverte em objetos ao ler.
- **`dadosIniciais` (*seed*) e `'ag-' + Date.now()`:** Pré-popula 2 registros iniciais (`Thor` e `Luna`) na primeira execução local e gera IDs únicos baseados no timestamp em milissegundos quando fora do Firestore.

---

## 10. Como Executar Localmente

1. Entre na pasta do projeto:
   ```bash
   cd "Petshop ab2"
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. *(Opcional — para usar Firebase na nuvem)* Crie um arquivo `.env` na raiz do projeto com suas credenciais:
   ```env
   VITE_FIREBASE_API_KEY=sua_api_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=seu_projeto
   VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
   VITE_FIREBASE_APP_ID=seu_app_id
   ```
4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Para gerar a build de produção:
   ```bash
   npm run build
   ```
