import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import ResponsiveAppBar from './appbar';
import './App.css'
import Intro from './intro';
import Skill from './skill';
import Project from './project';
import ContactMe from './contact';

function App() {
  return (
    <Box className="App">
      {/* <ResponsiveAppBar /> */}
      <Stack direction="column" alignItems="center" justifyContent="center"   className="container" 
  >
        <Intro />
      </Stack>
      <Typography variant='h4' sx={{textAlign:"center",my:"32px"}}>Skills</Typography>
      <Skill/>
      <Typography variant='h4'  sx={{textAlign:"center",my:"32px"}}>Projects</Typography>
      <Project/>
      <Typography variant='h4'  sx={{textAlign:"center",my:"32px"}}>Contact Me</Typography>
<ContactMe/>
    </Box>
  );
}

export default App;
