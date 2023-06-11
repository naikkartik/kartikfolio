import React from 'react';
import './ExperienceShowcase.css';

const ExperienceShowcase = () => {
    const experiences = [
        {
            id: 1,
            title: "Job Title 1",
            company: "Company Name 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor. Morbi tempus ipsum et commodo hendrerit.",
            date: "January 2018 - December 2020"
        },
        {
            id: 2,
            title: "Job Title 2",
            company: "Company Name 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor. Morbi tempus ipsum et commodo hendrerit.",
            date: "February 2016 - December 2017"
        },
        {
            id: 3,
            title: "Job Title 3",
            company: "Company Name 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor. Morbi tempus ipsum et commodo hendrerit.",
            date: "March 2014 - January 2016"
        }
    ];

    return (
        <div className="experience-showcase-container">
            <h1 className="experience-showcase-title">Previous Experience Showcase</h1>
            <div className="timeline">
                {experiences.map(experience => (
                    <div key={experience.id} className="timeline-event">
                        <div className="timeline-event-content">
                            <h2 className="timeline-event-title">{experience.title}</h2>
                            <h3 className="timeline-event-subtitle">{experience.company}</h3>
                            <p className="timeline-event-description">{experience.description}</p>
                            <p className="timeline-event-date">{experience.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceShowcase;
