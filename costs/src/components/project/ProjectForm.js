function ProjectForm() {
    return (
        <div>
            <h1>Formulário de Projeto</h1>
          <div>
    <input type="text" placeholder="Insira o nome do projeto" />
  </div>

  <div>
    <input type="number" placeholder="Insira o orçamento total" />
  </div>

  <div>
    <select name="category_id">
      <option disabled selected>
        Selecione a categoria
      </option>
    </select>
  </div>
    <div>
        <input type="submit" value="Criar Projeto" />
    </div>
        </div>
    );
}

export default ProjectForm;