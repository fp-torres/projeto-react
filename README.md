Costs - Gerenciador de Projetos

Nota: Projeto desenvolvido durante o curso "Hora de Codar" (Matheus Battisti), com evoluções visuais (UI/UX) e novas funcionalidades de Dashboard implementadas posteriormente.

O Costs é uma aplicação de gerenciamento de projetos que permite aos usuários criar, editar e gerenciar orçamentos e serviços de forma eficiente. Esta versão conta com uma identidade visual moderna (Dark/Gold Theme) e painéis de visualização de dados.

🎨 Melhorias Visuais e UI/UX

Diferente da versão original do curso, este projeto recebeu um "upgrade" completo:

Identidade Visual: Tema escuro (#222) com destaques em Dourado (#FFBB33).

Dashboard Interativo: Gráficos visuais usando recharts para acompanhamento financeiro.

Feedback Visual: Loaders em CSS puro, transições suaves (hover), mensagens de feedback (Toast) e cards flutuantes.

Layout Responsivo: Adaptação completa para dispositivos móveis e desktop.

Ícones Modernos: Integração completa com react-icons.

🚀 Funcionalidades

Criação de Projetos: Defina nome, orçamento total e categoria.

Gestão de Serviços: Adicione serviços dentro de um projeto, descontando automaticamente do orçamento disponível.

Dashboard Geral: Visão macro na tela de projetos com gráfico de barras comparando Orçamento vs. Gastos por categoria.

Dashboard Individual: Gráfico de pizza (Donut Chart) detalhando o consumo de orçamento de cada projeto específico.

Validações: Impede que o custo dos serviços ultrapasse o orçamento do projeto.

Edição e Exclusão: CRUD completo para projetos e serviços.

🛠 Tecnologias e Dependências

O projeto foi construído utilizando as seguintes tecnologias e versões (baseado no package.json atual):

Core:

React (^19.2.0)

React DOM (^19.2.0)

React Router DOM (^7.9.6) - Para navegação SPA.

Utilitários e UI:

Recharts (^3.4.1) - Biblioteca para os gráficos do Dashboard.

React Icons (^5.5.0) - Ícones vetoriais (Fa, Bs, etc).

UUID (^13.0.0) - Geração de IDs únicos para serviços.

CSS Modules - Estilização escopada por componente.

Backend (Simulado):

JSON Server (^1.0.0-beta.3) - API REST Fake para persistência de dados.

⚙️ Como Executar o Projeto

Este projeto possui scripts configurados para facilitar a execução. Siga os passos abaixo:

1. Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior recomendada devido ao React 19) instalado em sua máquina.

2. Instalação

Clone o repositório e instale as dependências:

# Entre na pasta do projeto
cd costs

# Instale as dependências
npm install


3. Executando a API (Backend)

O projeto depende do JSON Server rodando na porta 5001 para funcionar. Utilize o script configurado:

npm run backend


Isso iniciará o servidor observando o arquivo db.json.

4. Executando o Frontend (React)

Em outro terminal (mantenha o backend rodando), inicie a aplicação React:

npm start


Acesse http://localhost:3000 no seu navegador.

📂 Estrutura de Pastas

A organização do código segue boas práticas de componentização:

src/
  ├── components/
  │   ├── form/        # Inputs, Selects e Botões reutilizáveis
  │   ├── layout/      # Navbar, Footer, Container, Loading, Message
  │   ├── pages/       # Páginas principais (Home, Projects, Contact, etc.)
  │   ├── project/     # Cards de Projeto, Formulários e Gráficos de Projeto
  │   └── service/     # Cards e Formulários de Serviços
  ├── img/             # Assets e SVGs
  └── ...
