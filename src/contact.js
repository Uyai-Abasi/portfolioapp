
import { Stack,IconButton,Typography } from '@mui/material'
import './contact.css'

import React from 'react';
import { FaGithub, FaLinkedin, FaDev,FaTwitter  } from 'react-icons/fa';

export default function ContactMe() {
  return (
   <>
   <Typography
          variant='h6'
          sx={{
            textAlign: "center",
          
            color: "#333",
          }}
        >
          Feel free to reach out to me through any of the social media links above. I'm always open to connect and discuss new opportunities, projects, or just chat about technology and coding.
        </Typography>
    <Stack direction={'row'}  justifyContent={'center'} alignItems={'center'} mb='50px'>
       
        <IconButton className="contact-icon"> 

        <a href="https://www.linkedin.com/in/uyaiabasi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        </IconButton>
        <IconButton className="contact-icon" >

<a href="https://github.com/Uyai-Abasi" target="_blank" rel="noopener noreferrer">
  <FaGithub className="icon" />
</a>
</IconButton>
        <IconButton className="contact-icon">

        <a href="https://dev.to/uyaiabasi" target="_blank" rel="noopener noreferrer">
          <FaDev className="icon" />
        </a>
        </IconButton>
        <IconButton className="contact-icon">
        <a href="https://twitter.com/Uy_Codes" target="_blank" rel="noopener noreferrer">
          <FaTwitter  className="icon" />
        </a>
        </IconButton>
      </Stack>
      </>
  );
}

