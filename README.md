# Costs - Gerenciador de Projetos (Refactored)

> **Nota:** Este projeto é uma evolução do curso "Hora de Codar". Ele foi totalmente refatorado com uma nova identidade visual **Dark/Gold**, painéis de dados (Dashboards) e responsividade completa para mobile.

O **Costs** é uma aplicação robusta para gerenciamento de projetos e serviços financeiros. O objetivo é permitir que usuários criem projetos, definam orçamentos e acompanhem gastos através de uma interface moderna e intuitiva.

## 🎨 Melhorias de UI/UX e Design

Diferente da versão original, este projeto conta com um acabamento profissional:

  - **Tema Dark/Gold:** Identidade visual refeita utilizando paleta escura (`#222831`, `#393E46`) com acentos em Dourado (`#FFD369`) para alto contraste e elegância.
  - **Design Responsivo (Mobile-First):**
      - **Navbar Dinâmica:** Menu "Hambúrguer" animado (Slide-in) para dispositivos móveis.
      - **Layout Fluido:** Cards e gráficos que se adaptam a qualquer tamanho de tela (Grid flexível).
      - **Sticky Footer:** Rodapé inteligente que se ajusta automaticamente ao conteúdo da página, evitando que flutue no meio da tela.
  - **Feedback Visual:**
      - **Cards Inteligentes:** Bordas coloridas indicam o status do projeto (Verde: Concluído, Amarelo: Em Andamento, Vermelho: Atrasado).
      - **Hover Effects:** Transições suaves e elevação (shadows) ao interagir com elementos.

## 🚀 Funcionalidades Principais

### 📊 Dashboard & Dados

  - **Gráficos Interativos (Recharts):**
      - **Visão Macro:** Gráfico de Barras comparando Orçamento vs. Gastos por categoria na tela principal.
      - **Visão Micro:** Gráfico de Pizza (Donut) detalhando o consumo do orçamento dentro de cada projeto.
  - **Tooltips Personalizados:** Valores monetários formatados (BRL) ao passar o mouse sobre os gráficos.

### 💰 Gestão Financeira

  - **Input Mask:** Campo de moeda com formatação automática (R$ 0.000,00) durante a digitação.
  - **Validação Lógica:** O sistema impede que o custo dos serviços ultrapasse o orçamento total do projeto.
  - **Formatação Global:** Todos os valores monetários são tratados com `Intl.NumberFormat` para o padrão brasileiro.

### 📝 Gerenciamento de Projetos

  - **CRUD Completo:** Criar, Ler, Editar e Excluir projetos e serviços.
  - **Status Automático:** O sistema calcula se o projeto está atrasado com base na data final, mas permite override manual para "Concluído".

## 🛠 Tecnologias Utilizadas

O projeto utiliza as versões mais recentes do ecossistema React:

  - **React 19** & **React DOM 19**
  - **React Router DOM 7** (Roteamento avançado)
  - **Recharts** (Biblioteca de gráficos composable)
  - **React Icons** (Ícones vetoriais leves)
  - **UUID** (Geração de IDs únicos)
  - **CSS Modules** (Estilização escopada e organizada)
  - **JSON Server** (Backend simulado RESTful)

## ⚙️ Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

### 1. Instalar Dependências

Clone o repositório e instale os pacotes:

```bash
npm install
2. Iniciar o Backend (Fake API)
O projeto utiliza o JSON Server para persistência de dados. Execute em um terminal:

Bash

npm run backend
O servidor rodará na porta 5001.

3. Iniciar o Frontend
Em outro terminal, inicie a aplicação React:

Bash

npm start
Acesse http://localhost:3000 no seu navegador.

📱 Previews
(Espaço reservado para adicionar os prints da aplicação rodando no Desktop e Mobile)