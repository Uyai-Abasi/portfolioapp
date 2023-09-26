import React from 'react';
import { Typography, Stack, Box, CardContent } from '@mui/material';
import img from './profile-photo.jpeg';
import './App.css';
// import Skill from './skill';


export default function Intro() {
  return (
    <div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        alignItems="center"
        spacing={2}
      >
        <Box className="card" sx={{ backgroundColor: 'transparent' }}>
          <CardContent>
            <Typography variant="h2"sx={{ color: 'white' }} >
              <span clas  sName="typewriter-text">

            Welcome to My Portfolio
              </span>
            </Typography>
            <span className="typing-effect"></span>
            <Typography variant="h5"sx={{ color: 'white' }}> <span className="typing-text">I'm Uyai-Abasi</span>, a Web Developer</Typography>
            <Typography variant="body1" sx={{ width: { xs: '100%', sm: '700px' }, color: 'white' }}>
               I specialize in creating beautiful and user-friendly websites that are optimized for
              performance and accessibility
            </Typography>
           
          </CardContent>
        </Box>
        <Box>
          <CardContent>
            <img src={img} alt="" style={{ maxWidth: '100%', maxHeight: '500px' }} />
          </CardContent>
        </Box>
      </Stack>
    

    </div>
  );
}
