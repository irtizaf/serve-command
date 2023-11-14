// pages/index.js
"use client"
import { Box } from '@chakra-ui/react';
import React from 'react';
import NavBar from "./screens/screen1"
import Sidescreen from './screens/sidescreen';
import { Valueone } from './context/context';
import Login from './screens/login';
import FileUpload from "./uploadfile/button"


const Home = () => {
  const {step} = Valueone()
 
  console.log(step)
  return (
    


<Box >
{/*   
  {step == 0 && (
     <Login/> 
  )}
 


   { step == 2 && ( <Box 
    display={"flex"}>
<NavBar/>
<Sidescreen/>


   
    </Box>
)}
 */}

 
<FileUpload/>



  
</Box>
  );
};

export default Home;
