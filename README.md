<div align="center">

```
 ██████╗ ██████╗ ███████╗████████╗███████╗
██╔════╝██╔═══██╗██╔════╝╚══██╔══╝██╔════╝
██║     ██║   ██║███████╗   ██║   ███████╗
██║     ██║   ██║╚════██║   ██║   ╚════██║
╚██████╗╚██████╔╝███████║   ██║   ███████║
 ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝
```

### Gerenciador de Projetos & Controle Financeiro

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Recharts-2.x-22b5bf?style=for-the-badge" />
  <img src="https://img.shields.io/badge/JSON_Server-RESTful-6DB33F?style=for-the-badge" />
  <img src="https://img.shields.io/badge/CSS_Modules-Scoped-264de4?style=for-the-badge&logo=css3&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/status-active-FFD369?style=flat-square&labelColor=222831" />
  <img src="https://img.shields.io/badge/versão-2.0.0-FFD369?style=flat-square&labelColor=222831" />
  <img src="https://img.shields.io/badge/licença-MIT-FFD369?style=flat-square&labelColor=222831" />
  <img src="https://img.shields.io/badge/PRs-welcome-FFD369?style=flat-square&labelColor=222831" />
</p>

<br/>


> **Costs** é uma aplicação completa de gestão financeira de projetos — construída com React 19, design **Dark/Gold**, dashboards interativos e responsividade total para mobile. Uma evolução profissional do projeto base do curso **Hora de Codar**.

<br/>

[🚀 Demo ao Vivo](#) · [📖 Documentação](#-instalação-e-execução) · [🐛 Reportar Bug](#) · [✨ Solicitar Feature](#)

-----

</div>

<br/>

## 📸 Preview

<div align="center">

|🖥️ Desktop                                            |📱 Mobile                                 |
|:---------------------------------------------------:|:---------------------------------------:|
|*Dashboard principal com gráficos e cards de projeto*|*Menu hambúrguer animado e layout fluido*|


> 📌 **Dica:** Adicione aqui capturas de tela reais da aplicação rodando no Desktop e no Mobile para impressionar ainda mais!

</div>

<br/>

-----

## 🌟 O Que Torna Este Projeto Especial?

Este não é apenas um CRUD com React. É uma **aplicação de nível profissional** que demonstra domínio de:

```
✦ Arquitetura de componentes escalável e organizada
✦ Estado global gerenciado com elegância (sem Redux)
✦ Integração real com API RESTful via JSON Server
✦ Visualização de dados com gráficos interativos (Recharts)
✦ UX pensada do zero: feedback visual, validações, animações
✦ Design System próprio com CSS Modules + tema Dark/Gold
✦ Responsividade mobile-first com Navbar dinâmica
```

<br/>

-----

## 🎨 Design System — Tema Dark/Gold

A identidade visual foi projetada para transmitir **sofisticação e foco**, usando alto contraste entre o fundo escuro e os acentos dourados.

<div align="center">

|Papel                |Nome       |Hex      |Preview                                             |
|:--------------------|:----------|:--------|:--------------------------------------------------:|
|Background Principal |Deep Space |`#222831`|![#222831](https://placehold.co/40x20/222831/222831)|
|Background Secundário|Charcoal   |`#393E46`|![#393E46](https://placehold.co/40x20/393E46/393E46)|
|Acento Principal     |Golden Hour|`#FFD369`|![#FFD369](https://placehold.co/40x20/FFD369/FFD369)|
|Texto Principal      |Off-White  |`#EEEEEE`|![#EEEEEE](https://placehold.co/40x20/EEEEEE/EEEEEE)|
|Status: Concluído    |Emerald    |`#2ECC71`|![#2ECC71](https://placehold.co/40x20/2ECC71/2ECC71)|
|Status: Em Andamento |Amber      |`#FFD369`|![#FFD369](https://placehold.co/40x20/FFD369/FFD369)|
|Status: Atrasado     |Crimson    |`#E74C3C`|![#E74C3C](https://placehold.co/40x20/E74C3C/E74C3C)|

</div>

<br/>

-----

## ⚡ Funcionalidades

### 📊 Dashboard & Visualização de Dados

<table>
  <tr>
    <td width="50%">
      <strong>🔵 Gráfico de Barras (Macro)</strong><br/>
      Visão geral comparando <em>Orçamento Total vs. Gastos Reais</em> por categoria de projeto. Ideal para identificar onde o dinheiro está indo em um piscar de olhos.
    </td>
    <td width="50%">
      <strong>🟡 Gráfico Donut (Micro)</strong><br/>
      Drill-down dentro de cada projeto mostrando o percentual consumido do orçamento. Tooltips com valores formatados em <strong>BRL (R$)</strong> ao hover.
    </td>
  </tr>
</table>

### 💰 Gestão Financeira Inteligente

- **💳 Input com Máscara de Moeda** — Formatação automática `R$ 0.000,00` enquanto o usuário digita, sem bibliotecas externas pesadas.
- **🛡️ Validação Lógica em Tempo Real** — O sistema bloqueia a adição de serviços que ultrapassem o orçamento disponível do projeto, exibindo feedback imediato.
- **🌍 Formatação Global com `Intl.NumberFormat`** — Todos os valores monetários respeitam o padrão brasileiro em toda a aplicação.

### 📁 Gerenciamento de Projetos

- **✅ CRUD Completo** — Criar, Ler, Editar e Excluir projetos e seus serviços vinculados.
- **🤖 Status Automático Inteligente:**
  
  ```
  ├── 🟢 Concluído  →  Override manual pelo usuário
  ├── 🟡 Em Andamento  →  Data final futura
  └── 🔴 Atrasado  →  Data final já passou (calculado automaticamente)
  ```
- **🆔 IDs únicos via UUID** — Sem colisões, sem gambiarra.

### 📱 UI/UX & Responsividade

- **🍔 Navbar com Menu Hambúrguer** — Animação *slide-in* suave no mobile, sem dependências externas de componente.
- **📐 Layout Fluido (Grid Flexível)** — Cards e gráficos que se reestruturam perfeitamente em qualquer resolução.
- **🦶 Sticky Footer Inteligente** — O rodapé sempre fica no final da página — nunca flutuando no meio da tela em páginas com pouco conteúdo.
- **✨ Hover Effects & Micro-animações** — Elevação por `box-shadow`, transições de cor e escala nos elementos interativos.
- **🟩 Bordas de Status nos Cards** — Indicação visual imediata do estado do projeto sem precisar ler o texto.

<br/>

-----

## 🛠️ Stack Tecnológico

<div align="center">

|Categoria   |Tecnologia       |Versão  |Papel                                 |
|:-----------|:----------------|:------:|:-------------------------------------|
|⚛️ Core      |React + React DOM|`19`    |Engine da interface                   |
|🧭 Roteamento|React Router DOM |`7`     |Navegação SPA avançada                |
|📈 Gráficos  |Recharts         |`latest`|Componentes de visualização composable|
|🎭 Ícones    |React Icons      |`latest`|Biblioteca de ícones vetoriais SVG    |
|🔑 IDs       |UUID             |`latest`|Geração de identificadores únicos     |
|🎨 Estilos   |CSS Modules      |—       |Estilização escopada por componente   |
|🗄️ Backend   |JSON Server      |`latest`|API RESTful simulada para persistência|

</div>

<br/>

-----

## ⚙️ Instalação e Execução

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) `>= 18.x`
- [npm](https://www.npmjs.com/) `>= 9.x` ou [Yarn](https://yarnpkg.com/)

-----

### Passo 1 — Clone o Repositório

```bash
git clone https://github.com/seu-usuario/costs.git
cd costs
```

### Passo 2 — Instale as Dependências

```bash
npm install
```

### Passo 3 — Inicie o Backend (Fake API)

O projeto usa **JSON Server** para simular uma API RESTful completa. Abra um terminal e execute:

```bash
npm run backend
```

> 📡 O servidor estará disponível em **`http://localhost:5001`**

**Endpoints disponíveis automaticamente:**

```
GET    /projects       → Lista todos os projetos
POST   /projects       → Cria um novo projeto
GET    /projects/:id   → Busca projeto por ID
PUT    /projects/:id   → Atualiza projeto completo
PATCH  /projects/:id   → Atualiza campos específicos
DELETE /projects/:id   → Remove um projeto
GET    /categories     → Lista as categorias disponíveis
```

### Passo 4 — Inicie o Frontend

Em **outro terminal**, execute:

```bash
npm start
```

> 🌐 Acesse a aplicação em **`http://localhost:3000`**

-----

<details>
<summary>🐳 <strong>Rodando com Docker (Opcional)</strong></summary>

<br/>

Caso prefira rodar em container, adicione um `Dockerfile` e `docker-compose.yml` ao projeto:

```yaml
# docker-compose.yml (exemplo)
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
  backend:
    image: clue/json-server
    ports:
      - "5001:80"
    volumes:
      - ./db.json:/data/db.json
```

</details>

<br/>

-----

## 🗂️ Estrutura do Projeto

```
costs/
├── 📁 public/
│   └── index.html
├── 📁 src/
│   ├── 📁 components/          # Componentes reutilizáveis
│   │   ├── 📁 form/            # Inputs, selects, botões de formulário
│   │   ├── 📁 layout/          # Navbar, Footer, Container
│   │   ├── 📁 pages/           # Componentes de página (Home, Projects, etc.)
│   │   └── 📁 project/         # Cards, ServiceForm, ProjectForm
│   ├── 📁 hooks/               # Custom Hooks (ex: useFetch)
│   ├── 📁 utils/               # Helpers (formatação de moeda, datas)
│   ├── App.js
│   └── index.js
├── db.json                     # "Banco de dados" do JSON Server
├── package.json
└── README.md
```

<br/>

-----

## 🗺️ Roadmap

- [x] CRUD completo de projetos e serviços
- [x] Sistema de status automático (Atrasado / Em Andamento / Concluído)
- [x] Dashboard com Gráfico de Barras (macro)
- [x] Gráfico Donut por projeto (micro)
- [x] Input com máscara de moeda
- [x] Responsividade mobile-first + Menu Hambúrguer
- [x] Sticky Footer e hover effects
- [ ] 🔜 Autenticação de usuários (JWT)
- [ ] 🔜 Filtros e busca nos projetos
- [ ] 🔜 Exportar relatório em PDF
- [ ] 🔜 Modo Claro / Escuro com toggle
- [ ] 🔜 Notificações de projetos próximos do prazo
- [ ] 🔜 Migração para TypeScript

<br/>

-----

## 🤝 Como Contribuir

Contribuições são **sempre bem-vindas**! Veja como participar:

```bash
# 1. Fork o projeto

# 2. Crie uma branch para sua feature
git checkout -b feature/minha-feature-incrivel

# 3. Commit suas mudanças
git commit -m "feat: adiciona minha feature incrivel"

# 4. Push para a branch
git push origin feature/minha-feature-incrivel

# 5. Abra um Pull Request
```

> ⚠️ Por favor, siga o padrão de commits [Conventional Commits](https://www.conventionalcommits.org/) e escreva testes quando aplicável.

<br/>

-----

## 📄 Licença

Distribuído sob a licença **MIT**. Veja [`LICENSE`](LICENSE) para mais informações.

<br/>

-----

<div align="center">

**Feito com ☕ — inspirado no curso [Hora de Codar](https://www.horadecodar.com.br/)**

<br/>

⭐ **Se este projeto te ajudou, deixa uma estrela no repositório!** ⭐

<br/>

[![GitHub followers](https://img.shields.io/github/followers/seu-usuario?style=social)](https://github.com/seu-usuario)
[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/costs?style=social)](https://github.com/seu-usuario/costs)

</div>