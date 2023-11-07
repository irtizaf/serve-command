// pages/index.js
"use client"
import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import NavBar from "./screens/screen1"
import Sidescreen from './screens/sidescreen';
import Screen2 from './screens/screen2';
import FileUpload from './uploadfile/button';
import Login from './screens/login';
import valueone from './context/context'

import LoginWithPasswordChange from './uploadfile/cognito';



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
