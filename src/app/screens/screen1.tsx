import { Box, Button, Heading,Image,Text } from '@chakra-ui/react'
import React from 'react'
import {FiCalendar} from "react-icons/fi"
//import Image from 'next/image'

const NavBar = () => {
  return (
    <Box 
    
   
    >
        <Box 
        height={{"2xl":"1080px"}}
        w={{"2xl":"56px"}}
        borderRight={{"2xl":"1px"}}
        display={{"2xl":"flex"}}
        flexDirection={{"2xl":"column"}}
        justifyContent={{"2xl":"space-between"}}
        borderColor={{"2xl":"blackAlpha.200"}}
        background={{"2xl":"whiteAlpha.900"}}
        >
            <Box 
            w={{"2xl":"56px"}}
            display={{"2xl":"flex"}}
            flexDirection={{"2xl":"column"}}
            alignItems={{"2xl":"flex-start"}}
            alignSelf={{"2xl":"stretch"}}
            pt={{"2xl":"32px"}}
            gap={{"2xl":"32px"}}
            >
                <Box 
                w={{"2xl":"56px"}}
                display={{"2xl":"flex"}}
                flexDirection={{"2xl":"column"}}
                alignItems={{"2xl":"center"}}
                alignSelf={{"2xl":"stretch"}}
                 >
                    
                <Image src={'/Flattened.png'}
                 alt={'image'}
                width={{ "2xl":"33px"}} 
                height={{"2xl":"34px"}}
                 /> 
                 </Box>
                 <Box
                 display={{"2xl":"flex"}}
                 flexDirection={{"2xl":"column"}}
                 alignItems={{"2xl":"center"}}
                 alignSelf={{"2xl":"stretch"}}
                 gap={{"2xl":"16px"}}
                 px={{"2xl":"16px"}}
                 >
                <Box
                typeof='Button'
                display={{"2xl":"flex"}}
                p={{"2xl":"0px"}}
                justifyContent={{"2xl":"center"}}
                alignItems={{"2xl":"center"}}
                gap={{"2xl":"8px"}}
                height={{"2xl":"auto"}}
                w={{"2xl":"auto"}}
                borderRadius={{"2xl":"5px"}}
                >
                <Image src={'/Nav Bar Button.png'}
                 alt={'image'}
                 width={{ "2xl":"24px"}} 
                 height={{"2xl":"24px"}}
                  />
                </Box>
                <Box
                typeof='Button'
                display={{"2xl":"flex"}}
                p={{"2xl":"0px"}}
                justifyContent={{"2xl":"center"}}
                alignItems={{"2xl":"center"}}
                gap={{"2xl":"8px"}}
                height={{"2xl":"auto"}}
                w={{"2xl":"auto"}}
                borderRadius={{"2xl":"5px"}}
                >
                <Image src={'/NavBarButton.png'} 
                alt={'image'} 
                width={{ "2xl":"24px"}} 
                height={{"2xl":"24px"}} 
                />
                </Box>
                <Box
                typeof='Button'
                display={{"2xl":"flex"}}
                p={{"2xl":"0px"}}
                justifyContent={{"2xl":"center"}}
                alignItems={{"2xl":"center"}}
                gap={{"2xl":"8px"}}
                height={{"2xl":"auto"}}
                w={{"2xl":"auto"}}
                borderRadius={{"2xl":"5px"}}
                >
                <Image src={'/coins-hand.png'} 
                alt={'image'} 
                width={{ "2xl":"24px"}} 
                height={{"2xl":"24px"}} 
                />
                </Box>
                </Box>
            </Box>

             <Box 
             w={{"2xl":"56px"}}
             h={{"2xl":"120px"}}
             display={{"2xl":"flex"}}
             flexDirection={{"2xl":"column"}}
             gap={{"2xl":"24px"}}
             alignItems={{"2xl":"center"}}
             alignSelf={{"2xl":"stretch"}}
             >
                <Box
                typeof='Button'
                display={{"2xl":"flex"}}
                justifyContent={{"2xl":"center"}}
                gap={{"2xl":"8px"}}
                borderRadius={{"2xl":"5px"}}
                border={{"2xl":"1px"}}
                borderColor={{"2xl":"blackAlpha.200"}}
                background={{"2xl":`blackAlpha.50` }}
                w={{"2xl":"auto"}}
                h={{"2xl":"auto"}}
                p={{"2xl":"8px"}}
                >
                <Image src={'/settings-02.png'} 
                alt={'image'} 
                width={{ "2xl":"24px"}} 
                height={{"2xl":"24px"}} 
                />
                </Box>


                <Box
                typeof='Button'
                display={{"2xl":"flex"}}
                justifyContent={{"2xl":"center"}}
                
                borderRadius={{"2xl":"200px"}}
             
                flexShrink={0}
                background={{"2xl":`gray.200` }}
                w={{"2xl":"32px"}}
                h={{"2xl":"32px"}}
                p={{"2xl":"6.667px"}}
                >
                <Image src={'/user-01.svg'} 
                alt={'image'} 
                width={{ "2xl":"18.667pxpx"}} 
                height={{"2xl":"18.667pxpx"}} 
                />
                </Box>
             </Box>
        </Box>

    </Box>
  )
}

export default NavBar