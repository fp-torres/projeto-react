import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import InputCurrency from '../form/InputCurrency';

function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    // Opções de status
    const statusOptions = [
        { id: 'Em Andamento', name: 'Em Andamento' },
        { id: 'Concluído', name: 'Concluído' },
    ];

    useEffect(() => {
        fetch("http://localhost:5001/categories", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => {
            console.log("Usando categorias mockadas devido a erro de fetch:", err);
            setCategories([
                { id: 1, name: 'Infra' },
                { id: 2, name: 'Desenvolvimento' },
                { id: 3, name: 'Design' },
                { id: 4, name: 'Planejamento' }
            ]);
        });
    }, []);

    function submit(e) {
        e.preventDefault();
        // Define "Em Andamento" como padrão se não houver status
        if(!project.status) {
            project.status = 'Em Andamento';
        }
        handleSubmit(project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    function handleStatus(e) {
        setProject({ ...project, status: e.target.value });
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            
            <Input
                type="date"
                text="Data de Início"
                name="start_date"
                handleOnChange={handleChange}
                value={project.start_date ? project.start_date : ''}
            />
            <Input
                type="date"
                text="Previsão de Término"
                name="end_date"
                handleOnChange={handleChange}
                value={project.end_date ? project.end_date : ''}
            />
            
            <InputCurrency
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            
            <Select
                name="category_id"
                text="Selecione a Categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            {/* Select de Status: Aparece apenas se o projeto já existe (edição) */}
            {project.id && (
                <Select
                    name="status"
                    text="Status do Projeto"
                    options={statusOptions}
                    handleOnChange={handleStatus}
                    value={project.status ? project.status : 'Em Andamento'}
                />
            )}

            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;