import React from 'react';
import './ProjectShowcase.css';
import project1 from './project-1.webp';
import project2 from './project-1.webp';
import project3 from './project-1.webp';

const ProjectShowcase = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            image: project1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor.",
            link: "#"
        },
        {
            id: 2,
            title: "Project 2",
            image: project2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor.",
            link: "#"
        },
        {
            id: 3,
            title: "Project 3",
            image: project3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor.",
            link: "#"
        }
    ];

    return (
        <div className="project-showcase-container">
            <h1 className="project-showcase-title">Personal Project Showcase</h1>
            <div className="project-showcase-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-showcase-card">
                        <div className="project-showcase-image-container">
                            <img src={project.image} alt={project.title} className="project-showcase-image" />
                        </div>
                        <div className="project-showcase-content">
                            <h2 className="project-showcase-card-title">{project.title}</h2>
                            <p className="project-showcase-card-description">{project.description}</p>
                            <a href={project.link} className="project-showcase-card-link">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;
