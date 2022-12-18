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
    console.log(project);
    return (
        <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
            <NavBar></NavBar>
            <div className='flex justify-center pt-3'>
                <div className="card card-compact w-1/2 bg-base-100 shadow-xl">
                    <figure><img src={project.src} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">Project Name: <span className='text-red-700'>{project.title}</span></h2>
                        <p className='text-black'># {project.details1}</p>
                        <p className='text-black'># {project.details2}</p>
                        <p className='text-black'># {project.details3}</p>
                        <div className="card-actions justify-between">
                            <button className="btn btn-primary"><a href={project.link} target="_blank"
                                rel="noreferrer">Live Link</a></button>
                            <button className="btn btn-primary"><a href={project.client} target="_blank"
                                rel="noreferrer">Client Link</a></button>
                            <button className="btn btn-primary"><a href={project.server} target="_blank"
                                rel="noreferrer">Server Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;