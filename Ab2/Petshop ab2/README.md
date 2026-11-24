# 🐾 PetShop do Totó — Projeto AB2 (Programação Web I - UFAL)

**Aluno:** Bruno Martins Gomes  
**Professor:** Gustavo Miranda  
**Disciplina:** Programação Web I — UFAL

---

## 📌 Sobre o Projeto

O **PetShop do Totó** é um sistema web desenvolvido com **React**, **HTML** e **CSS** para solucionar o problema de petshops de pequeno porte que divulgam serviços apenas por redes sociais e repetem informações manualmente no WhatsApp.

Nesta versão da **AB2**, o projeto da AB1 foi expandido para contemplar todos os requisitos da **Tabela 1** da especificação da disciplina:

| Requisito (Tabela 1) | Onde foi implementado |
|---|---|
| **Ter uma página HTML inicial** | `index.html` e estrutura principal em `src/App.jsx` |
| **Dividir a página HTML inicial em partes diferentes** | Componentes `Header`, `Footer`, `ServiceCard`, `AgendamentoItem` e páginas `Servicos`, `Agendamento`, `Sobre`, `Contato` |
| **Utilizar comandos de locomoção dos componentes** | Layout com Flexbox (`display: flex`, `justify-content`, `align-items`, `flex-wrap`, `gap`) em `src/App.css` |
| **Apresentar conceitos de estilização em texto** | Tipografia, hierarquia visual, cores e alinhamentos em `src/App.css` |
| **Apresentar conceitos de estilização em imagens** | Imagens responsivas nos cards (`object-fit: cover`, `border-radius`, efeitos `:hover`) |
| **Criar rotas para diferentes páginas do website** | `BrowserRouter`, `Routes`, `Route` e `Link` (`react-router-dom`) para `/`, `/agendamento`, `/sobre` e `/contato` |
| **Utilizar conceitos de `props` no website** | `ServiceCard.jsx` e `AgendamentoItem.jsx` recebendo dados e callbacks via `props` |
| **Utilizar a biblioteca de ícones do React** | Pacote `react-icons/fa` utilizado no menu, botões, cards e alertas |
| **Utilizar os eventos `onChange` e `onClick`** | Busca/filtro de serviços, formulário de agendamento, exclusão de registros e botões de exibir detalhes |
| **Utilizar `useState` e Renderização Condicional** | Controle de estados de formulários, filtros, listas de agendamentos, detalhes expansíveis e alertas condicionais |
| **Implementar conexão com Banco de Dados** | Integração com **Firebase Cloud Firestore** (com fallback automático para banco local `localStorage`) em `src/services/firebase.js` |

---

## 🚀 Como Executar o Projeto

1. Acesse a pasta do projeto:
   ```bash
   cd "petshop ab2"
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o endereço exibido no terminal (por padrão `http://localhost:5173/`).
