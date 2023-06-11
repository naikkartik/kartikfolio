import React from 'react';
import './HobbyShowcase.css';

const HobbyShowcase = () => {
    const hobbies = [
        {
            id: 1,
            name: "Photography",
            image: "https://picsum.photos/id/1018/300/200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor."
        },
        {
            id: 2,
            name: "Travel",
            image: "https://picsum.photos/id/1074/300/200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor."
        },

        {
            id: 3,
            name: "Coding",
            image: "https://picsum.photos/id/109/300/200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor."
        },
        {
            id: 6,
            name: "Movies",
            image: "https://picsum.photos/id/11/300/200",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet elit quis elit convallis blandit nec vitae tortor."
        }
    ];

    return (
        <div className="hobby-showcase-container">
            <h1 className="hobby-showcase-title">My Hobbies</h1>
            <div className="hobby-grid">
                {hobbies.map(hobby => (
                    <div key={hobby.id} className="hobby-card">
                        <img src={hobby.image} alt={hobby.name} className="hobby-image" />
                        <div className="hobby-details">
                            <h2 className="hobby-name">{hobby.name}</h2>
                            <p className="hobby-description">{hobby.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HobbyShowcase;
