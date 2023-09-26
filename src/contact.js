// import React from 'react'
import { Stack,IconButton } from '@mui/material'
// export default function contact() {
//   return (
//     <Stack direction={'row'} justifyContent={'flex-end'} alignItems={'center'} >
              
//     <IconButton >
//       <BiLogoTwitter />
//       </IconButton>
//       <IconButton>
//       <AiFillGithub />
//       </IconButton>

//     </Stack>
//   )
// }
import React from 'react';
import { FaGithub, FaLinkedin, FaDev,FaTwitter  } from 'react-icons/fa';

export default function ContactMe() {
  return (
   
    <Stack direction={'row'}  justifyContent={'center'} alignItems={'center'} >
        <IconButton >

        <a href="https://github.com/Uyai-Abasi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        </IconButton>
        <IconButton>

        <a href="https://www.linkedin.com/in/uyaiabasi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        </IconButton>
        <IconButton>

        <a href="https://dev.to/uyaiabasi" target="_blank" rel="noopener noreferrer">
          <FaDev className="icon" />
        </a>
        </IconButton>
        <IconButton>
        <a href="https://twitter.com/Uy_Codes" target="_blank" rel="noopener noreferrer">
          <FaTwitter  className="icon" />
        </a>
        </IconButton>
      </Stack>
  );
}

