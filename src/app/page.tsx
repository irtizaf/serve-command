// pages/index.js
"use client"
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import NavBar from "./screens/screen1"
import Sidescreen from './screens/sidescreen';
import { Valueone } from './context/context';
import Login from './screens/login';
import FileUpload from './uploadfile/button';



const Home = () => {
  const {step} = Valueone()
  // const handleFileSelect = (file: File | null) => {
  //   if (file) {
  //     // Handle the selected file
  //     console.log('Selected File:', file);
  //   } else {
  //     // Handle reset
  //     console.log('File reset');
  //   }
  // };
  console.log(step)
  return (
    


<Box>
  {/* {step == 0 && (
     <Login/> 
  )}
 


   { step == 2 && ( <Box 
    display={{"2xl":"flex"}}>
<NavBar/>
<Sidescreen/>


   
    </Box>
)} */}

<FileUpload/>


  
</Box>
  );
};

export default Home;
