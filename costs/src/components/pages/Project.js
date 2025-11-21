import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';

function Project() {

    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5001/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
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
            headers: {
                "Content-Type": "application/json",
            },
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

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }
    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }

    return (
        <>
            {project && project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                       
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn}>
                                {showProjectForm ? "Fechar" : "Editar Projeto"}
                            </button>
                            
                            {!showProjectForm ? (
                                <div className={styles.project_info}> 
                                    <p>
                                        {/* MUDANÇA AQUI: O valor fica fora do span */}
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Orçamento:</span> R$ {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> R$ {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                   <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                                </div>
                            )}
                        </div>
                            <div className={styles.service_form_container}>
                                <h2>Adicione um serviço:</h2>
                                <button className={styles.btn} onClick={toggleServiceForm}>
                                    {showServiceForm ? "Fechar" : "Adicionar Serviço"}
                                </button>
                                <div className={styles.project_info}>
                                    {showServiceForm && (
                                        <ProjectForm handleSubmit={editPost} btnText="Adicionar Serviço" projectData={project} />
                                    )}
                                </div>
                                <Container customClass="start">
                                    <p> Itens de serviços</p>
                                    </Container>
                             
                            </div>


                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Project;