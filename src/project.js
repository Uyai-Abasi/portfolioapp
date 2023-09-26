import React from 'react';
import './project.css'
import cal from './cal.png'
import black from './black.png'
import traffic from './tr.png'
import img from './Screenshot (292).png'
import img1 from './galler.png'
import img2 from './buz.png'
import { Typography } from '@mui/material';

export default function Project() {
  const projects = [
    {
      title: 'A multi-API systemv',
      description: 'A system that delivers data on various services.',
      imageUrl: black,
      link: 'https://future-blackboc.netlify.app/doc',
    },
    {
      title: 'Wallx',
      description: 'A digital wallet solution',
      imageUrl: img,
      link: 'https://future-wallx.netlify.app/',
    },
    {
        title: 'Image Gallery',
        description: ' An interactive gallery for effortless image management and exploration',
        imageUrl: img1,
        link: 'https://drag-n-drop-imagegallery.netlify.app/gallery',
      },
      {
          title: 'A Simple Basic Calculator',
          description: ' Perform swift and accurate basic mathematical operations effortlessly',
          imageUrl: cal,
          link: 'https://calculator-apk.netlify.app/'
        },
        {
            title: 'A business card Generator',
            description: 'Create  business cards with ease.',
            imageUrl: img2,
            link: 'https://business-card-generator-app.netlify.app/', 
          },
        {
          title: 'Traffic Program',
          description: 'An illustrative representation of a traffic program',
          imageUrl: traffic,
          link: 'https://traffic-light-program.netlify.app/', 
        },
  ];

  return (
  <div>
        <Typography  variant='h6'add sx={{textAlign:"center"}}>Discover my diverse portfolio, showcasing practical applications of my skills and knowledge</Typography>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <a href={project.link} className="project-link">
            <div className="project-background">
              <img src={project.imageUrl} alt={project.title} />
              <div className="circle-link"></div>
              <h3>{project.title}</h3>
              <p >{project.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}
