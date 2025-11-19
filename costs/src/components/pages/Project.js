import style from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Project() {

    const { id } = useParams();
    
    const [project, setProject] = useState(null);

    useEffect(() => {
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
    }, [id]);

    return <p> {project ? project.name : 'Loading...'}</p>;
    }   

export default Project;