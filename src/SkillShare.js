import React from 'react';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiNodejsSmall, DiMongodb, DiMysql } from 'react-icons/di';
import { SiPython, SiPhp, SiGit, SiGraphql } from 'react-icons/si';
import { IoLogoDocker } from 'react-icons/io5';

import { ImDatabase } from 'react-icons/im';
import { BiCloud } from 'react-icons/bi';
import './SkillsShowcase.css';

const SkillsShowcase = () => {
    const skills = [
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Node.js", icon: <DiNodejsSmall /> },
        { name: "Express", icon: <FaJsSquare /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "MySQL", icon: <DiMysql /> },
        { name: "Python", icon: <SiPython /> },
        { name: "C++", icon: <ImDatabase /> },
        { name: "PHP", icon: <SiPhp /> },
        { name: "Git", icon: <SiGit /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "RESTful APIs", icon: <FaJsSquare /> },
        { name: "AWS", icon: <BiCloud /> },
        { name: "Docker", icon: <IoLogoDocker /> },
        { name: "Kubernetes", icon: <BiCloud /> },

    ];

    return (
        <div className="skills-container">
            <h2 className="skills-header">Skills</h2>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <div className="skill-icon-container">
                            <div className="skill-icon">{skill.icon}</div>
                        </div>
                        <div className="skill-name">{skill.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SkillsShowcase;
