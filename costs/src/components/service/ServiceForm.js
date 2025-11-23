import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'; // Puxando o estilo Dark
import InputCurrency from '../form/InputCurrency';

function ServiceForm({ handleSubmit, btnText, projectData }) {
    const [service, setService] = useState({});

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value });
    }

    function submit(e) {
        e.preventDefault();
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
            <InputCurrency
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