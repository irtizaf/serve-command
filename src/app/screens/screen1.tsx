import { Box, Button, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import {FiCalendar} from "react-icons/fi"
//import Image from 'next/image'

const NavBar = () => {
  return (
    <Box 
    
   
    >
        <Box 
        height={{"2xl":"1080px",sm:"100vh",md:"100vh"}}
        w={{"2xl":"56px",sm:"auto",md:"auto"}}
        borderRight={"1px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        borderColor={"blackAlpha.200"}
        background={"whiteAlpha.900"}
        >
            <Box 
            w={{"2xl":"56px",sm:"auto",md:"auto"}}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            alignSelf={"stretch"}
            pt={{"2xl":"32px",sm:"10px",md:"15px"}}
            gap={{"2xl":"32px",sm:"10px",md:"15px"}}
            >
                <Box 
                w={{"2xl":"56px",sm:"auto",md:"auto"}}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                alignSelf={"stretch"}
                 >
                    
                <Image src={'/Flattened.png'}
                 alt={'image'}
                width={{ "2xl":"33px",sm:"20px",md:"25px"}} 
                height={{"2xl":"34px",sm:"20px",md:"25px"}}
                 /> 
                 </Box>
                 <Box
                 display={"flex"}
                 flexDirection={"column"}
                 alignItems={"center"}
                 alignSelf={"stretch"}
                 gap={{"2xl":"16px",sm:"8px",md:"12px" }}
                 px={{"2xl":"16px",sm:"8px",md:"12px"}}
                 >
                <Box
                typeof='Button'
                display={"flex"}
                p={{"2xl":"0px"}}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{"2xl":"8px",sm:"4px",md:"6px"}}
                height={{"2xl":"auto",sm:"auto",md:"auto"}}
                w={{"2xl":"auto",sm:"auto",md:"auto"}}
                borderRadius={"5px"}
                >
                <Image src={'/Nav Bar Button.png'}
                 alt={'image'}
                 width={{ "2xl":"24px",sm:"20px",md:"22px"}} 
                 height={{"2xl":"24px",sm:"20px",md:"22px"}}
                  />
                </Box>
                <Box
                typeof='Button'
                display={"flex"}
                p={{"2xl":"0px"}}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{"2xl":"8px",sm:"4px",md:"6px"}}
                height={{"2xl":"auto",sm:"auto",md:"auto"}}
                w={{"2xl":"auto",sm:"auto",md:"auto"}}
                borderRadius={"5px"}
                >
                <Image src={'/NavBarButton.png'} 
                alt={'image'} 
                width={{ "2xl":"24px",sm:"20px",md:"22px"}} 
                height={{"2xl":"24px",sm:"20px",md:"22px"}} 
                />
                </Box>
                <Box
                typeof='Button'
                display={"flex"}
                p={{"2xl":"0px"}}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{"2xl":"8px",sm:"4px",md:"6px"}}
                height={{"2xl":"auto",sm:"auto",md:"auto"}}
                w={{"2xl":"auto",sm:"auto",md:"auto"}}
                borderRadius={"5px"}
                >
                <Image src={'/coins-hand.png'} 
                alt={'image'} 
                width={{ "2xl":"24px",sm:"20px",md:"22px"}} 
                height={{"2xl":"24px",sm:"20px",md:"22px"}} 
                />
                </Box>
                </Box>
            </Box>

             <Box 
             w={{"2xl":"56px",sm:"auto",md:"auto"}}
             h={{"2xl":"120px",sm:"auto",md:"auto"}}
             display={"flex"}
             flexDirection={"column"}
             gap={{"2xl":"24px",sm:"12px",md:"20px"}}
             alignItems={"center"}
             alignSelf={"stretch"}
             pb={{sm:"12px"}}
             >
                <Box
                typeof='Button'
                display={"flex"}
                justifyContent={"center"}
                gap={{"2xl":"8px",sm:"4px",md:"6px"}}
                borderRadius={"5px"}
                border={"1px"}
                borderColor={"blackAlpha.200"}
                background={`blackAlpha.50` }
                w={{"2xl":"auto",sm:"auto",md:"auto"}}
                h={{"2xl":"auto",sm:"auto",md:"auto"}}
                p={{"2xl":"8px",sm:"4px",md:"5px"}}
                >
                <Image src={'/settings-02.png'} 
                alt={'image'} 
                width={{ "2xl":"24px",sm:"20px",md:"22px"}} 
                height={{"2xl":"24px",sm:"20px",md:"22px" }} 
                />
                </Box>


                <Box
                typeof='Button'
                display={"flex"}
                justifyContent={"center"}
                
                borderRadius={"200px"}
             
                flexShrink={0}
                background={`gray.200` }
                w={{"2xl":"32px",sm:"24px",md:"28px"}}
                h={{"2xl":"32px",sm:"24px",md:"28px"}}
                p={{"2xl":"6.667px",sm:"5px",md:"auto"}}
                >
                <Image src={'/user-01.svg'} 
                alt={'image'} 
                width={{ "2xl":"18.667px",sm:"12px",md:"15px"}} 
                height={{"2xl":"18.667px",sm:"12px",md:"15px"}} 
                />
                </Box>
             </Box>
        </Box>

    </Box>
  )
}

export default NavBar