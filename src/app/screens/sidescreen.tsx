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
    w={{"2xl":"1864px"}}
    h={{"2xl":"1080px"}}
    >
        <Box 
        w={{"2xl":"1864px"}}
        h={{"2xl":"120px"}}
        display={{"2xl":"flex"}}
        alignItems={{"2xl":"center"}}
        gap={{"2xl":"8px"}}
        px={{"2xl":"32px"}}
        py={{"2xl":"24px"}}
        >
            <Box 
            display={{"2xl":"flex"}}
            flexDirection={{"2xl":"column"}}
            alignItems={{"2xl":"flex-start"}}
            gap={{"2xl":"8px"}}
            flex={{"2xl":"1 0 0"}}

            >
            <Text
            fontSize={{"2xl":"30px"}}
            h={{"2xl":"40px"}}
            w={{"2xl":"176px"}}
            fontFamily={"Chivo"} 
            >
            Import Data
            </Text>
            <Text
            fontSize={{"2xl":"16px"}}
            h={{"2xl":"24px"}}
            w={{"2xl":"auto"}}
            fontFamily={"Inter"}
            >
            Import data from the following tools in a few clicks.
            </Text>
            </Box>

            <Box 
            typeof='Button'
            display={{"2xl":"flex"}}
            w={{"2xl":"auto"}}
            h={{"2xl":"32px"}}
            gap={{"2xl":"8px"}}
            px={{"2xl":"12px"}}
            borderRadius={{"2xl":"6px"}}
            border={{"2xl":"1px"}}
           borderColor={{"2xl":"#11190C"}}
            justifyContent={{"2xl":"center"}}
            alignItems={{"2xl":"center"}}
            >
                <Text>
                Call to Action
                </Text>
                <Image src='/right-icon.png' 
                h={{"2xl":"14px"}} 
                w={{"2xl":"14px"}}
                />

            </Box>
        </Box>

    <Box 
     px={{"2xl":"32px"}}
     display={{"2xl":"flex"}}
     w={{"2xl":'1800px'}}
     alignItems={{"2xl":"flex-start"}}
     gap={{"2xl":"8px"}}
     pt={{"2xl":"16px"}}
     
     >

        <Box
        display={{"2xl":"flex"}}
        w={{"2xl":"431px"}}
        p={{"2xl":"24px"}}
        flexDirection={{"2xl":"column"}}
        alignItems={{"2xl":"flex-start"}}
        gap={{"2xl":"10px"}}
        flexShrink={0}
        borderRadius={{"2xl":"6px"}}
        border={{"2xl":`1px`}}
        background={"#fff"}
        borderColor={"rgba(17, 25, 12, 0.30)"}
        >
            <Box
            display={{"2xl":"flex"}}
            flexDirection={{"2xl":"column"}}
            gap={{"2xl":"12px"}}
            alignSelf={"stretch"}
            
            >

            <Box 
            display={{"2xl":"flex"}}
            alignSelf={{"2xl":"stretch"}}
            alignItems={{"2xl":"flex-start"}}
            gap={{"2xl":"10px"}}
            w={{"2xl":"383px"}}
            h={{"2xl":"50px"}}

            >
               <Box 
               w={{"2xl":"282px"}}
               h={{"2xl":"50px"}}
               >
                <Image src='Logo.svg' 
                w={{"2xl":"178px"}}
                h={{"2xl":"50px"}}
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
                <Box onClick={getPresignedUrl}>
                <Screen2 />
                </Box>
            </Box>
            <Box 
            display={{"2xl":"flex"}}
            flexDirection={{"2xl":"column"}}
            gap={{"2xl":"8px"}}
            alignSelf={"stretch"}
            
            >
                <Text
                textColor={"#000"}
                fontSize={{"2xl":"20px"}}
                fontStyle={"normal"}
                fontWeight={500}
                lineHeight={{"2xl":"28px"}}
                >
                Hindsite Software
                </Text>
                <Text
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={{"2xl": "24px"}}
                w={{"2xl":"383px"}}
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