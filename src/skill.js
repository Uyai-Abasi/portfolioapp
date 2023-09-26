import React from 'react';
import './skill.css'
import { Typography } from '@mui/material';
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
    <div>
      <Typography variant='h6' sx={{textAlign:"center"}}>I highlight my expertise in frontend technologies and tools. I specialize in crafting responsive and engaging user interfaces, ensuring seamless user experiences</Typography>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
