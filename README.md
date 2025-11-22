# Costs - Gerenciador de Projetos

> **Nota:** Projeto desenvolvido durante o curso "Hora de Codar" (Matheus Battisti), com evoluções visuais (UI/UX) e novas funcionalidades de Dashboard implementadas posteriormente.

O **Costs** é uma aplicação de gerenciamento de projetos que permite aos usuários criar, editar e gerenciar orçamentos e serviços de forma eficiente. Esta versão conta com uma identidade visual moderna (Dark/Gold Theme) e painéis de visualização de dados.

## 🎨 Melhorias Visuais e UI/UX
Diferente da versão original do curso, este projeto recebeu um "upgrade" completo:
- **Identidade Visual:** Tema escuro (`#222`) com destaques em Dourado (`#FFBB33`).
- **Dashboard Interativo:** Gráficos visuais usando `recharts` para acompanhamento financeiro.
- **Feedback Visual:** Loaders em CSS puro, transições suaves (hover), mensagens de feedback (Toast) e cards flutuantes.
- **Layout Responsivo:** Adaptação completa para dispositivos móveis e desktop.
- **Ícones Modernos:** Integração completa com `react-icons`.

## 🚀 Funcionalidades
- **Criação de Projetos:** Defina nome, orçamento total e categoria.
- **Gestão de Serviços:** Adicione serviços dentro de um projeto, descontando automaticamente do orçamento disponível.
- **Dashboard Geral:** Visão macro na tela de projetos com gráfico de barras comparando Orçamento vs. Gastos por categoria.
- **Dashboard Individual:** Gráfico de pizza (Donut Chart) detalhando o consumo de orçamento de cada projeto específico.
- **Validações:** Impede que o custo dos serviços ultrapasse o orçamento do projeto.
- **Edição e Exclusão:** CRUD completo para projetos e serviços.

## 🛠 Tecnologias e Dependências
O projeto foi construído utilizando as seguintes tecnologias:

**Core:**
- React (`^19.2.0`)
- React DOM (`^19.2.0`)
- React Router DOM (`^7.9.6`)

**Utilitários e UI:**
- Recharts (`^3.4.1`) - Gráficos do Dashboard.
- React Icons (`^5.5.0`) - Ícones vetoriais.
- UUID (`^13.0.0`) - Geração de IDs únicos.
- CSS Modules - Estilização escopada.

**Backend (Simulado):**
- JSON Server (`^1.0.0-beta.3`) - API REST Fake.

## ⚙️ Como Executar o Projeto

### 1. Instalação
Clone o repositório e instale as dependências:

```bash
cd costs
npm install

2. Executando a API (Backend)
O projeto depende do JSON Server rodando na porta 5001. Utilize o script configurado:

Bash

npm run backend
3. Executando o Frontend
Em outro terminal (mantenha o backend rodando), inicie a aplicação React:

Bash

npm start
Acesse http://localhost:3000 no seu navegador.

📝 Scripts Disponíveis
npm start: Inicia o app em modo de desenvolvimento.

npm run backend: Inicia o JSON Server na porta 5001.

npm run build: Compila o app para produção na pasta build.

npm test: Executa os testes.
