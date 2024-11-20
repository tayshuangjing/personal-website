import React from 'react';
import '../css/Experience.css';

export const Experience = () => {

    const experience = [
        {
            company: 'Google',
            period: '2022 - now',
            position: 'Software Engineer',
            location: 'Penang',
            description: 'Lorem Ipsum foaweh feiojfaoe foaief ewifa oeifjoehgoa;e fnoianenf ;aef;oaehgeooiut jdfoaoeihgoeagdddddddddddddddddddddddddddddddddddddddddddddddddddddddd aoijfoiehgo',
            skills: ['Angular', 'React', 'C++', 'Java', 'Kotlin']
        },
        {
            company: 'Google',
            period: '2022 - now',
            position: 'Software Engineer',
            location: 'Penang',
            description: 'Lorem Ipsum foaweh feiojfaoe foaief ewifa oeifjoehgoa;e fnoiaddddddddddddddddddddddddddddddddddddddddddddddnenf ;aef;oaehgeooiut jdfoaoeihgoeag aoijfoiehgo',
            skills: ['Angular', 'React', 'C++', 'Java', 'Kotlin']
        }
    ];
  
    return (
        <div className='experience' id='experience'>
            {experience.map((exp, index) => (
                <div key={index} className="experience-item">
                    <div className='experience-line1'>
                        <div className="company">{exp.company}</div>
                        <div className="period">{exp.period}</div>
                    </div>
                    <div className='experience-line2'>
                        <div className="position">{exp.position}</div>
                        <div className="location">{exp.location}</div>
                    </div>
                    <div className='experience-line3'>
                        <p className="description">{exp.description}</p>
                    </div>
                    <div className='experience-line4'>
                        {exp.skills.map((skill, i) => (
                            <span key={i}>{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
    </div>
    )
}