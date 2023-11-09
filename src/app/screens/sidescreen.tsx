import { Box,Text,Image } from '@chakra-ui/react'
import React from 'react'
import Screen2 from './screen2';
import {Valueone} from "../context/context"
import axios from 'axios';
import { useState } from 'react'

const Sidescreen = () => {
    const {setSubmit,setPre,pre} = Valueone()
    const [presignedUrl, setPresignedUrl] = useState<string | null>(null);

    const getPresignedUrl = async () => {
        try {
          const response = await axios.get(
            'https://zp2dhmgwaa.execute-api.us-east-1.amazonaws.com/generatepresignedurl?fileName=dummydata.txt&contentType=text/plain',
            // {
            //   params: {
            //     fileName: 'dummydata.txt',
            //     contentType: 'text/plain',
            //   },
            // }
          );
            console.log(response.data.uploadUrl)
          setPresignedUrl(response.data.uploadUrl);
          setPre(response.data.uploadUrl)
        } catch (error) {
          console.error('Error fetching presigned URL:', error);
        }
      };


    
  
  return (
    <Box
    background={"#F7FAFC"} 
    w={{"2xl":"1864px",sm:"100%",md:"100%"}}
    h={{"2xl":"1080px",sm:"100vh",md:"100vh"}}
    >
        <Box 
        w={{"2xl":"1864px"}}
        h={{"2xl":"120px"}}
        display={"flex"}
        flexDirection={{"2xl":"row",sm:"column", md:"row"}}
        alignItems={"center"}
        gap={{"2xl":"8px",sm:"4px",md:"6px"}}
        px={{"2xl":"32px",sm:"18px",md:"25px"}}
        py={{"2xl":"24px",sm:"10px",md:"25px"}}
        >
            <Box 
            display={"flex"}
            flexDirection={"column"}
            alignItems={{"2xl":"flex-start",sm:"center",md:"flex-start"}}
            gap={{"2xl":"8px",sm:"4px",md:"6px"}}
            flex={"1 0 0"}

            >
            <Text
            fontSize={{"2xl":"30px",sm:"16px",md:"20px"}}
            h={{"2xl":"40px",sm:"auto",md:"auto"}}
            w={{"2xl":"176px",sm:"auto",md:"auto"}}
            fontFamily={"Chivo"} 
            lineHeight={{"2xl":"39.9px",sm:"auto",md:"auto"}}
            fontWeight={400}
            fontStyle={"normal"}
            textColor={"rgba(0, 0, 0, 0.87)"}
            >
            Import Data
            </Text>
            <Text
            fontSize={{"2xl":"16px",sm:"12px",md:"14px"}}
            h={{"2xl":"24px",sm:"auto",md:"auto"}}
            w={{"2xl":"auto",sm:"auto",md:"auto"}}
            fontFamily={"Inter"}
            >
            Import data from the following tools in a few clicks.
            </Text>
            </Box>

            <Box 
            typeof='Button'
            display={"flex"}
            w={{"2xl":"auto",sm:"auto",md:"auto"}}
            h={{"2xl":"32px",sm:"auto",md:"auto"}}
            gap={{"2xl":"8px",sm:"4px",md:"6px"}}
            px={{"2xl":"12px",sm:"8px",md:"8px"}}
            borderRadius={"6px"}
            border={"1px"}
           borderColor={"#11190C"}
            justifyContent={"center"}
            alignItems={"center"}
            >
                <Text
                textColor={"#11190C"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"14px",sm:"10px",md:"10px"}}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={{"2xl":"20px",sm:"auto",md:"auto"}}
                >
                Call to Action
                </Text>
                <Image src='/right-icon.png' 
                h={{"2xl":"14px",sm:"10px",md:"10px"}} 
                w={{"2xl":"14px",sm:"10px",md:"10px"}}
                />

            </Box>
        </Box>

    <Box 
     px={{"2xl":"32px",sm:"12px",md:"20px"}}
     display={"flex"}
     w={{"2xl":'1800px',sm:"auto",md:"auto"}}
     alignItems={"flex-start"}
     gap={{"2xl":"8px",sm:"4px",md:"6px"}}
     pt={{"2xl":"16px",sm:"8px",md:"12px"}}
     justifyContent={{ "2xl":"start",sm:"center",md:"start"}}
     
     >

        <Box
        display={"flex"}
        w={{"2xl":"431px",sm:"200px",md:"250px"}}
        p={{"2xl":"24px",sm:"12px",md:"18px"}}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={{"2xl":"10px",sm:"auto",md:"auto"}}
        flexShrink={0}
        borderRadius={"6px"}
        border={`1px`}
        background={"#fff"}
        borderColor={"rgba(17, 25, 12, 0.30)"}
        >
            <Box
            display={"flex"}
            flexDirection={"column"}
            gap={{"2xl":"12px",sm:"6px",md:"8px"}}
            alignSelf={"stretch"}
            
            >

            <Box 
            display={"flex"}
            alignSelf={"stretch"}
            alignItems={"flex-start"}
            gap={{"2xl":"10px",sm:"10px",md:"10px"}}
            w={{"2xl":"383px",sm:"auto",md:"auto"}}
            h={{"2xl":"50px",sm:"auto",md:"auto"}}

            >
               <Box 
               display={"flex"}
               flexDirection={"column"}
               alignItems={"flex-start"}
               flex={"1 0 0"}
               
               
               w={{"2xl":"282px",sm:"auto",md:"auto"}}
               h={{"2xl":"50px",sm:"auto",md:"auto"}}
               >
                <Image src='Logo (1).svg' 
                w={{"2xl":"178px",sm:"80px",md:"100px"}}
                h={{"2xl":"50px",sm:"30px",md:"30px"}}
                />
                </Box>
{/* 
                <Box 
            typeof='Button'
            display={{"2xl":"flex"}}
            w={{"2xl":"91px"}}
            h={{"2xl":"32px"}}
            gap={{"2xl":"8px"}}
            px={{"2xl":"12px"}}
            alignItems={{"2xl":"center"}}
            justifyContent={{"2xl":"center"}}
            borderRadius={{"2xl":"6px"}}
            border={{"2xl":"1px"}}
            borderColor={{"2xl":"#11190C"}}
            
            >
                <Image src='/left-icon.png' 
                h={{"2xl":"14px"}} 
                w={{"2xl":"14px"}}
                />
                <Text
                fontFamily={"Inter"}
                fontSize={{"2xl":"14px"}}
                fontStyle={"normal"}
                fontWeight={"600"}
                lineHeight={{"2xl":"20px"}}
                >
                Import
                </Text>
                </Box> */}
                <Box
                
                onClick={getPresignedUrl}>
                <Screen2 />
                </Box>
            </Box>
            <Box 
            display={"flex"}
            flexDirection={"column"}
            gap={{"2xl":"8px",sm:"4px",md:"6px"}}
            alignSelf={"stretch"}
          
            
            >
                <Text
                textColor={"#000"}
                fontSize={{"2xl":"20px",sm:"14px",md:"16px"}}
                fontStyle={"normal"}
                fontWeight={500}
                lineHeight={{"2xl":"28px",sm:"auto",md:"auto"}}
                >
                Hindsite Software
                </Text>
                <Text
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px",sm:"10px",md:"12px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={{"2xl":"24px",sm:"auto",md:"auto"}}
                w={{"2xl":"383px",sm:"auto",md:"auto"}}
                alignSelf={"stretch"}
                textColor={"#4A4B57"}
                >
                Switch from Hindsite to ServeCommand in just a few clicks.
                </Text>
            </Box>
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Sidescreen