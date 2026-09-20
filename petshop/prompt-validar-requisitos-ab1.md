# Prompt: conferir se o projeto atende aos requisitos do professor

## Sua função

Você é um revisor. Sua tarefa é **conferir se este projeto atende aos requisitos da disciplina** e entregar um relatório.

**Regras:**

- **Não altere nenhum arquivo.** Apenas leia, execute os comandos de verificação e relate.
- **Não sugira melhorias, recursos novos ou refatorações.** O projeto foi feito de propósito para ser o mais básico possível e fiel ao que foi pedido. Aponte apenas o que **não atende** ou **atende parcialmente** aos requisitos.
- Baseie cada resposta em **evidência real** do código (arquivo e trecho). Não presuma nada. Se não conseguir verificar algo, diga que não conseguiu.
- Escreva em português, com linguagem simples.

## Contexto

- **Disciplina:** Programação Web I (UFAL), professor Gustavo Miranda.
- **Projeto:** site de um petshop, feito com React (criado com Vite, em JavaScript).
- **Objetivo da disciplina:** criar um sistema web que resolva um problema do mundo real, contribuindo ou facilitando a vida das pessoas envolvidas.
- O projeto foi gerado a partir de uma versão base e o aluno alterou **apenas nomes e fotos**. Os nomes de arquivos e componentes podem diferir do esperado, então confira a estrutura real do projeto antes de avaliar.

Estrutura esperada (pode variar levemente):

```
README.md
package.json
index.html
src/
  main.jsx
  App.jsx
  App.css
  assets/           (imagens)
  components/       (Header, Servicos, ServiceCard, Sobre, Contato, Footer)
```

## Requisitos do professor (Tabela 1 do documento)

O sistema deve implementar **todos** estes pontos:

| # | Requisito do professor | O que conta como evidência |
|---|---|---|
| 1 | Implementação do website proposto **com React** | `package.json` com `react` e `react-dom`; `main.jsx` renderiza o componente `App` |
| 2 | **Criar layouts com HTML e dividir o sistema em partes diferentes** | Página dividida em partes distintas (cabeçalho, serviços, sobre, contato, rodapé) em componentes ou seções, com tags HTML estruturais (`header`, `nav`, `main`, `section`, `footer`) |
| 3 | **Apresentar conceitos de estilização em texto** | Regras CSS aplicadas a textos, como `font-family`, `font-size`, `font-weight`, `color`, `text-align`, `line-height` |
| 4 | **Apresentar conceitos de estilização em imagens** | Regras CSS aplicadas a `img`, como `width`, `height`, `object-fit`, `border-radius`, efeito `:hover` |
| 5 | **Apresentar conceitos de movimentação de caixas com flexbox** | `display: flex` usado para organizar caixas, junto com propriedades como `justify-content`, `align-items`, `flex-wrap`, `gap` ou `flex-direction` |
| 6 | **Criar uma aplicação React e inserir os códigos HTML e CSS** | O HTML (em JSX) e o CSS estão dentro da aplicação React e o CSS está importado e funcionando |
| 7 | **Apresentar conceitos de componentes** | Vários componentes em arquivos separados, com pelo menos um componente **reutilizado mais de uma vez** e recebendo dados por `props` |

Requisitos de entrega:

| # | Requisito | O que conta como evidência |
|---|---|---|
| 8 | Projeto publicado no **GitHub** com **README** descrevendo o software e **como executá-lo** | `README.md` com descrição do projeto e passos para rodar (instalar dependências e iniciar). Não dá para confirmar a publicação no GitHub por aqui, então só verifique se o README existe e está completo |
| 9 | Apresentação do **sistema final online** | Não é verificável no código. Verifique se o README traz o link do site publicado e se ele está preenchido |

## O que você deve fazer, passo a passo

1. Liste a estrutura de arquivos do projeto.
2. Leia `package.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/App.css`, todos os arquivos em `src/components/` e o `README.md`.
3. Rode `npm install` e depois `npm run build`. Informe se o projeto **compila sem erros**. Se não conseguir rodar os comandos, diga isso e siga com a análise do código.
4. Verifique se todas as imagens importadas nos componentes **existem** em `src/assets/` e se os caminhos estão corretos.
5. Avalie cada requisito da tabela acima com base nas evidências.
6. Procure textos de exemplo que o aluno pode ter esquecido de trocar, como avisos de "trocar foto" nas imagens, `[colar aqui o link do site publicado]` no README e número de WhatsApp de exemplo. Relate apenas o que encontrar.

## Formato do relatório

**1. Tabela de requisitos**

| # | Requisito | Status | Evidência (arquivo e trecho) |
|---|---|---|---|
| 1 | ... | Atende / Parcial / Não atende / Não verificável | ... |

Use apenas estes status: **Atende**, **Parcial**, **Não atende** e **Não verificável**.

**2. Resultado do build**

Diga se `npm install` e `npm run build` funcionaram e, se houve erro, qual foi.

**3. Pendências**

Liste apenas o que **precisa ser corrigido ou preenchido** para atender aos requisitos. Para cada item, diga o arquivo e o que falta. Se não houver pendências, escreva "Nenhuma pendência".

**4. Não verificável por código**

Liste o que precisa ser conferido pelo aluno manualmente (por exemplo: repositório publicado no GitHub, site online funcionando, resumo com as respostas de Q1, Q2 e Q3 entregue ao professor).

**5. Veredito final**

Uma única frase: **"Atende a todos os requisitos verificáveis"**, **"Atende parcialmente"** ou **"Não atende"**, com o motivo em uma linha.
