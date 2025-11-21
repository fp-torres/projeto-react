import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsPencil, BsPlusLg } from 'react-icons/bs'; // Importei ícones novos

import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm';
import ServiceCard from '../service/ServiceCard';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [services, setServices] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5001/projects/${id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
                setServices(data.services || []);
            })
            .catch((err) => console.log(err));
        }, 1000);
    }, [id]);

    function editPost(project) {
        setMessage(''); 
        if (project.budget < project.cost) {
            setMessage("O orçamento não pode ser menor que o custo do projeto!");
            setType("error");
            return false;
        }
        fetch(`http://localhost:5001/projects/${project.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);       
            setShowProjectForm(false);
            setMessage("Projeto atualizado com sucesso!");
            setType("success");
        })
        .catch((err) => console.log(err));
    }   

    function createService(project) {
        setMessage(''); 

        // Pega o último serviço adicionado pelo formulário
        const lastService = project.services[project.services.length - 1];
        
        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        // Validação de valor máximo
        if (newCost > parseFloat(project.budget)) {
            setMessage("Orçamento ultrapassado, verifique o valor do serviço!");
            setType("error");
            project.services.pop(); // Remove o serviço errado do array
            return false;
        }

        // Adiciona o custo do serviço ao total do projeto
        project.cost = newCost;

        // Atualiza o projeto no backend
        fetch(`http://localhost:5001/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);       
            
            
            // Atualiza a lista de serviços na tela
            setServices(data.services); 
            // ---------------------------------

            setShowServiceForm(false);
            setMessage("Serviço adicionado com sucesso!");
            setType("success");
        })
        .catch((err) => console.log(err));
    }

    function removeService(id, cost) { 
        const servicesUpdated = project.services.filter((service) => service.id !== id);
        const projectUpdated = project;
        projectUpdated.services = servicesUpdated;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

        fetch(`http://localhost:5001/projects/${projectUpdated.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(projectUpdated),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(projectUpdated);       
            setServices(servicesUpdated);
            setMessage("Serviço removido com sucesso!");
            setType("success");
        })
        .catch((err) => console.log(err));
    }

    function toggleProjectForm() { setShowProjectForm(!showProjectForm); }
    function toggleServiceForm() { setShowServiceForm(!showServiceForm); }

    return (
        <>
            {project && project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        
                        {message && <Message type={type} msg={message} />}
                       
                        {/* SEÇÃO 1: CARD DO PROJETO */}
                        <div className={styles.details_container}>
                            <div className={styles.header_row}>
                                <h1>Projeto: {project.name}</h1>
                                <button onClick={toggleProjectForm} className={styles.btn}>
                                    {!showProjectForm ? <><BsPencil /> Editar Projeto</> : 'Fechar'}
                                </button>
                            </div>
                            
                            {!showProjectForm ? (
                                <div className={styles.project_info}> 
                                    <div className={styles.info_item}>
                                        <span>Categoria:</span> {project.category.name}
                                    </div>
                                    <div className={styles.info_item}>
                                        <span>Orçamento:</span> R$ {project.budget}
                                    </div>
                                    <div className={styles.info_item}>
                                        <span>Total Utilizado:</span> R$ {project.cost}
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                   <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                                </div>
                            )}
                        </div>
                        
                        {/* SEÇÃO 2: ADICIONAR SERVIÇO */}
                        <div className={styles.service_form_container}>
                            <div className={styles.header_row}>
                                <h2>Adicione um serviço:</h2>
                                <button className={styles.btn} onClick={toggleServiceForm}>
                                    {!showServiceForm ? <><BsPlusLg /> Adicionar Serviço</> : 'Fechar'}
                                </button>
                            </div>
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm 
                                        handleSubmit={createService} 
                                        btnText="Adicionar Serviço" 
                                        projectData={project} 
                                    />
                                )}
                            </div>
                        </div>
                        
                        {/* SEÇÃO 3: LISTA DE SERVIÇOS */}
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 && 
                                services.map((service) => (
                                    <ServiceCard 
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                        </Container>

                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Project;