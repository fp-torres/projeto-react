import { useState } from 'react';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

// CORREÇÃO AQUI: O caminho correto para buscar o CSS na pasta vizinha
import styles from '../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({});

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value });
    }

    function submit(e) {
        e.preventDefault();
        
        // Garante que o array de serviços existe antes de adicionar
        if(!projectData.services) {
            projectData.services = [];
        }

        projectData.services.push(service);
        handleSubmit(projectData);
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="number"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira o custo do serviço"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ServiceForm;