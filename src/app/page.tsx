// pages/index.js
"use client"
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import NavBar from "./screens/screen1"
import Sidescreen from './screens/sidescreen';






const Home = () => {
  
  // const handleFileSelect = (file: File | null) => {
  //   if (file) {
  //     // Handle the selected file
  //     console.log('Selected File:', file);
  //   } else {
  //     // Handle reset
  //     console.log('File reset');
  //   }
  // };
  return (
    


<Box>
 {/* <Login/> */}


    <Box 
    display={{"2xl":"flex"}}>
<NavBar/>
<Sidescreen/>
    
   
    </Box>



  
</Box>
  );
};

export default Home;
