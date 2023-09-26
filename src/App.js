import React from 'react';
import { Typography, Stack, Box, Paper } from '@mui/material';
// import ResponsiveAppBar from './appbar';
import './App.css'
import Intro from './intro';
import Skill from './skill';
import Project from './project';
import ContactMe from './contact';

function App() {
  return (
    <>
   
    <Box className="App" paddingX='36px'>
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
<Paper sx={{ backgroundColor: "#f5f5f5", height: "50px", width: "100%" }}></Paper>

    </>
  );
}

export default App;
