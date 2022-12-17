import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const currentProject = data.find(d => d.id === parseInt(id))
                setProject(currentProject);
            })
    }, [id])
    return (
        <div>
            <NavBar></NavBar>
            <h2>{project.title}</h2>
        </div>
    );
};

export default Project;