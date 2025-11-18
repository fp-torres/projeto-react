# Projeto React – Curso "Hora de Codar" (Matheus Battisti)

Este repositório contém um projeto de estudos em React desenvolvido acompanhando o curso "Hora de Codar React" do Matheus Battisti. O objetivo é praticar os fundamentos do React moderno e integrações comuns do dia a dia: roteamento, componentes reutilizáveis, formulários controlados e, opcionalmente, um pequeno backend fake com JSON Server (no módulo `costs`).

## Sobre o projeto
- Componentização, props e estado (state)
- Eventos, renderização condicional e listas
- Formulários controlados e levantamento de estado
- Estilização com CSS Modules
- Roteamento com `react-router-dom`
- Boas práticas com Create React App (CRA)
- Módulo opcional `costs/` com exemplo de CRUD e API fake (JSON Server) e geração de IDs (`uuid`)

## Stack e dependências
Módulo `costs/` (aplicação atual do repositório):
- React: `react@^19.2.0` e `react-dom@^19.2.0`
- Roteamento: `react-router-dom@^7.9.6`
- Ícones: `react-icons@^5.5.0`
- IDs: `uuid@^13.0.0`
- Backend fake: `json-server@^1.0.0-beta.3`
- Scripts/Build: `react-scripts@5.0.1` (Create React App 5)
- Métricas: `web-vitals@^2.1.4`
- Testes (Testing Library): `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/dom`, `@testing-library/user-event`

Requisitos:
- Node.js 18+ (recomendado LTS ou mais recente)
- npm (ou pnpm/yarn, se preferir)

## Como executar
1) Instalar dependências:

```bash
cd costs
npm install
```

2) Rodar em desenvolvimento:

```bash
npm start
```

- A aplicação abrirá em `http://localhost:3000`.

3) (Opcional) Subir a API fake com JSON Server:
- Crie um arquivo `db.json` dentro de `costs/` (exemplo mínimo):

```json
{
  "projects": []
}
```

- Inicie o JSON Server em outra aba do terminal:

```bash
cd costs
npx json-server --watch db.json --port 5000
```

- Endpoints disponíveis (exemplo): `GET/POST http://localhost:5000/projects`

4) Rodar testes (watch mode):

```bash
npm test
```

5) Build de produção:

```bash
npm run build
```

## Scripts disponíveis
- `start`: inicia o servidor de desenvolvimento (CRA)
- `test`: executa os testes em modo interativo
- `build`: gera o build de produção em `build/`
- `eject`: expõe a configuração do CRA (operação irreversível; use com cautela)

## Observações de compatibilidade
- O projeto usa `react-scripts@5` (Create React App 5). Em alguns ambientes, `react@19` pode gerar avisos ou erros de build/hot reload. Caso enfrente problemas, é possível alinhar para a versão estável suportada pelo CRA 5:

```bash
npm install react@18.2.0 react-dom@18.2.0
```

> Alternativamente, você pode migrar para Vite/CRA mais recente no futuro.

## Referências
- Curso: "Hora de Codar React" – Matheus Battisti (canal Hora de Codar)
- Create React App: https://create-react-app.dev/
- React Router: https://reactrouter.com/
- JSON Server: https://github.com/typicode/json-server
- React Icons: https://react-icons.github.io/react-icons/

---
Projeto de estudo baseado no conteúdo do Matheus Battisti, com adaptações para prática pessoal.
