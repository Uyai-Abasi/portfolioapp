import React from 'react';
import './skill.css'
export default function Skill() {
  const skills = [
    {
      title: 'HTML',
      description: 'Solid foundation in Hypertext Markup Language (HTML) for structuring web content.',
    },
    {
      title: 'CSS',
      description: 'Proficiency in Cascading Style Sheets (CSS) for styling web pages.',
    },
    {
      title: 'JavaScript',
      description: 'Proficient in JavaScript, the programming language for the web, to add interactivity and functionality to websites.',
    },
    {
      title: 'React',
      description: 'Experience with React, a JavaScript library for building user interfaces, to create dynamic web applications.',
    },
   
  ];

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
}
