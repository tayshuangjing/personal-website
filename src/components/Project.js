import React from 'react';
import '../css/Project.css';

export const Project = () => {

    const projects = [
        {
            image: '/images/google-logo.png',
            title: 'Project',
            skills: 'Flutter - Python - API - Kotlin',
            description: 'Lorem Ipsum foaweh feiojfaoe foaief ewifa oeifjoehgoa;e fnoianenf ;aef;oaehgeooiut jdfoaoeihgoeag aoijfoiehgo'
        },
        {
            image: '/images/google-logo.png',
            title: 'Project',
            skills: 'Flutter - Python - API - Kotlin',
            description: 'Lorem Ipsum foaweh feiojfaoe foaief ewifa oeifjoehgoa;e fnoianenf ;aef;oaehgeooiut jdfoaoeihgoeag aoijfoiehgo'
        }
    ];

    return (
        <div className='project' id='project'>
            {projects.map((project, index) => (
                <div key={index} className='project-item'>
                    <div className='img-container'>
                        <img src="" alt="Project Image" />
                    </div>
                    <div className='project-content'>
                        <div className='project-line1'>
                            <h1 className='project-title'>{project.title}</h1>
                            <hr className='project-hr' />
                        </div>
                        <div className='project-line2'>
                            <span>{project.skills}</span>
                        </div>
                        <div className='project-line3'>
                            <p className='project-description'>{project.description} <a href="#" className='project-link'>Learn more &gt;</a></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}