import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Message from '../layout/Message';
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import CategoryBarChart from '../project/CategoryBarChart'; 
import ProjectSearchBar from '../project/ProjectSearchBar';

import styles from './Projects.module.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5001/projects', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data);
                setRemoveLoading(true);
            })
            .catch((err) => console.log(err));
        }, 1000);
    }, []);

    function removeProject(id) {
        fetch(`http://localhost:5001/projects/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id));
            setProjectMessage('Projeto removido com sucesso!');
        })
        .catch((err) => console.log(err));
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value.toLowerCase());
    }

    const displayedProjects = projects.filter((project) => 
        project.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}

            {projects.length > 0 && (
                <div className={styles.dashboard_section}>
                    <CategoryBarChart projects={projects} />
                </div>
            )}

            <div className={styles.list_header}>
                <h2>Lista de Projetos</h2>
            </div>
            
            <ProjectSearchBar handleSearch={handleSearch} />

            <Container customClass="start">
                {displayedProjects.length > 0 &&
                    displayedProjects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category ? project.category.name : 'Indefinido'}
                            start_date={project.start_date} 
                             end_date={project.end_date}     
                             status={project.status}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))
                }
                
                {!removeLoading && <Loading />}
                
                {removeLoading && displayedProjects.length === 0 && (
                    <p className={styles.empty_list}>
                        {searchTerm ? 'Nenhum projeto encontrado para sua busca.' : 'Não há projetos cadastrados!'}
                    </p>
                )}
            </Container>
        </div>
    );
}

export default Projects;