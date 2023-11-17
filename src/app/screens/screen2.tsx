"use client"
import { Box,Text,Image, Button, useDisclosure,Progress } from '@chakra-ui/react'
import {Valueone} from "../context/context"
import { useState } from 'react'
import Progressbar from "./progressbar"



import React from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
  } from '@chakra-ui/react'
import FileUpload from '../uploadfile/upload'

const Screen2 = () => {
    
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef:any = React.useRef()
    const {submit,uploadProgress,open, setOpen,setIsOpen1,isOpen1} = Valueone()
    const handleFileSelect = (file: File | null) => {
        if (file) {
          // Handle the selected file
          console.log('Selected File:', file);
        } else {
          // Handle reset
          console.log('File reset');
        }
      };

    if (uploadProgress == 100) {
        setIsOpen1(true)

    }
      console.log(isOpen1,"======",uploadProgress)
  return (
    <>
    <Button onClick={onOpen} h={"auto"}>
        
    <Box 
            typeof='Button'
            display={"flex"}
            w={{"2xl":"91px",sm:"auto",md:"auto"}}
            h={{"2xl":"32px",sm:"auto",md:"auto"}}
            gap={{"2xl":"8px",sm:"4px",md:"auto"}}
            px={{"2xl":"12px",sm:"6px",md:"8px"}}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"6px"}
            border={"1px"}
            borderColor={"#11190C"}
            
            >
                <Image src='/left-icon.png' 
                h={{"2xl":"14px",sm:"8px",md:"8px"}} 
                w={{"2xl":"14px",sm:"8px",md:"8px"}}
                />
                <Text
                fontFamily={"Inter"}
                fontSize={{"2xl":"14px",sm:"10px",md:"12px"}}
                fontStyle={"normal"}
                fontWeight={"600"}
                lineHeight={{"2xl":"20px",sm:"auto",md:"auto"}}
                >
                Import
                </Text>
                </Box>
    </Button>
    <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

    <AlertDialogContent >
    
    {
     open ?
     <AlertDialogContent w={{sm:"90%","2xl":"auto",xl:"auto",lg:"auto",md:"auto"}}>
    <Box
    // w={{"2xl":"1920px"}}
    // h={{"2xl":"1080px"}}
   // background={"rgba(0, 0, 0, 0.49)"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    

    >
        <Box
        w={{"2xl":"900px",sm:"100%",xl:"100%",lg:"100%",md:"100%" }}
        h={{"2xl":"602px",sm:"50%"}}
        borderRadius={"20px"}
        background={"#FFF"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={{"2xl":"8px",sm:"4px"}}
        px={{"2xl":"40px",sm:"10px",md:"25px",lg:"30px",xl:"35px"}}
        py={{"2xl":"32px",sm:"20px",md:"20px",lg:"22px",xl:"30px"}}
        
        >
            <Box
            display={"flex"}
            flexDirection={"column"}
            alignSelf={"stretch"}
            gap={{"2xl":"30px",sm:"10px"}}
            alignItems={"flex-start"}
            >
            <Box
            display={"flex"}
            alignItems={"flex-start"}
            gap={{"2xl":"16px",sm:"6px"}}
            alignSelf={"stretch"}
            w={{"2xl":"820px",sm:"auto"}}
            h={{"2xl":"62px",sm:"auto"}}

            >
                <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"100px"}
                background={"rgba(17, 25, 12, 0.04)"}
                height={{"2xl":"40px",sm:"28px"}}
                w={{"2xl":"40px",sm:"28px"}}
                >
                <Image src="/info-circle.svg" 
                w={{"2xl":"24px",sm:"17px"}} 
                h={{"2xl":"24px",sm:"17px"}}/>
                </Box>
                    <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-start"}
                    gap={{"2xl":"8px",sm:"4px"}}
                    flex={"1 0 0"}
                    >
                        <Text
                        alignSelf={"stretch"}
                        textColor={"rgba(0, 0, 0, 0.87)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"24px",sm:"16px"}}
                        fontStyle={"normal"}
                        fontWeight={500}
                        lineHeight={{"2xl":"32px",sm:"auto"}}
                        >
                        Prepare Your Hindsite Import
                        </Text>
                        <Text
                        h={{"2xl":"22px",sm:"auto"}}
                        alignSelf={"stretch"}
                        textColor={"rgba(0, 0, 0, 0.64)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"16px",sm:"14px"}}
                        fontStyle={"normal"}
                        fontWeight={400}
                        lineHeight={{"2xl":"24px",sm:"auto"}}
                        >
                        To get started, you will need to export your latest backup of Hindsite.
                        </Text>
                    </Box>

            </Box>

            <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            alignSelf={"stretch"}
            gap={{"2xl":"16px",sm:"6px"}}
            >
                <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={{"2xl":"16px",sm:"6px"}}
                alignSelf={"stretch"}
                >
                <Text
                textColor={"rgba(0, 0, 0, 0.92)"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px",sm:"14px"}}
                fontStyle={"normal"}
                fontWeight={500}
                lineHeight={{"2xl":"24px",sm:"auto"}}
                height={"auto"}
                w={"auto"}
                >
                Step 1. Create Hindsite Backup
                </Text>
                <Text
                w={{"2xl":"820px",sm:"auto"}}
                h={{"2xl":"48px",sm:"auto"}}
                textColor={"blackAlpha.700"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px",sm:"14px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={{"2xl":"24px",sm:"auto"}}

                >
                In Hindsite, go to “Daily Must Do” section and click “Run Backup”. Save the backup file somewhere you can easily find it, like on your desktop.
                </Text>
                </Box>

                <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                gap={{"2xl":"16px",sm:"6px"}}
                alignSelf={"stretch"}
                >
                <Text
                textColor={"rgba(0, 0, 0, 0.92)"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px",sm:"14px"}}
                fontStyle={"normal"}
                fontWeight={500}
                lineHeight={{"2xl":"24px",sm:"auto"}}
                height={"auto"}
                w={"auto"}
                >
                Step 2. Unzip Hindsite Backup File
                </Text>
                <Text
                w={{"2xl":"820px",sm:"auto"}}
                h={{"2xl":"48px",sm:"auto"}}
                textColor={"blackAlpha.700"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px",sm:"14px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={{"2xl":"24px",sm:"auto"}}

                >
                Find the backup file and use your computer to “Unzip” the file. The file should read “backup.txt”. Save this file somewhere you can easily find it.
                </Text>
                </Box>

                <Box
                w={{"2xl":"820px",sm:"auto"}}
                h={{"2xl":"auto",sm:"auto"}}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"flex-start"}
                alignSelf={"stretch"}
                gap={{"2xl":"32px",sm:"12px"}}
                >
                    <Text
                    textColor={"blackAlpha.900"}
                    fontFamily={"Inter"}
                fontSize={{"2xl":"16px",sm:"14px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={{"2xl":"24px",sm:"auto"}}

                    >
                    Step 3. Upload Your Backup File Here
                    </Text>

                    <Box
                    display={"flex"}
                    height={{"2xl":"auto",sm:"auto"}}
                    width={{"2xl":"820px",sm:"auto"}}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    p={{"2xl":"10px",sm:"5px"}}
                    gap={{"2xl":"10px",sm:"5px"}}
                    alignSelf={"stretch"}
                    borderRadius={"8px"}
                    border={"2px dashed"}
                    borderColor={"blackAlpha.300"}
                    background={"#F7F7FA"}
                    >
                        {/* <Box
                        typeof='Button'
                        display={{"2xl":"flex"}}
                        height={{"2xl":"40px"}}
                        px={{"2xl":"16px"}}
                        justifyContent={{"2xl":"center"}}
                        gap={{"2xl":"8px"}}
                        flexShrink={0}
                        border={"1px solid"}
                        borderColor={"#11190C"}
                        background={"white"}
                        borderRadius={{"2xl":"6px"}}
                        alignItems={{"2xl":"center"}}
                        >
                            <Text
                            height={{"2xl":"24px"}}
                            w={{"2xl":"148px"}}
                            textColor={"#11190C"}
                            fontFamily={"Inter"}
                            fontSize={{"2xl":"16px"}}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{"2xl":"24px"}}
                            
                            >
                            Upload Backup File
                            </Text>
                            <Image src='/right-icon.svg' w={{"2xl":"16px"}} h={{"2xl":"16px"}} />
                        </Box> */}
                        {/* <Box
                        display={{"2xl":"flex"}}
                        flexDirection={{"2xl":"column"}}
                        alignItems={{"2xl":"center"}}
                        gap={{"2xl":"8px"}}
                        >
                        <Box
                        h={{"2xl":"40px"}}
                        w={{"2xl":"40px"}}
                        borderRadius={"100px"} 
                        background={"green.600"}
                        display={{"2xl":"flex"}}
                        flexDirection={{"2xl":"column"}}
                        justifyContent={{"2xl":"center"}}
                        alignItems={{"2xl":"center"}}
                        >
                            <Image src='/check-circle.svg' h={{"2xl":"24px"}} w={{"2xl":"24px"}}/>
                        </Box>
                        <Text
                        textColor={"rgba(0, 0, 0, 0.87)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"18px"}}
                        fontStyle={"normal"}
                        fontWeight={500}
                        lineHeight={{"2xl":"28px"}}
                        >
                        File Successfully Uploaded
                        </Text>
                        </Box>
                        <Button 
                        display={{"2xl":"flex"}}
                        h={{"2xl":"24px"}}
                        px={{"2xl":"8px"}}
                        justifyContent={{ "2xl":"center"}}
                        alignItems={{"2xl" :"center"}}
                        gap={{"2xl":"6px"}}
                        borderRadius={{"2xl":"39px"}}
                        border={"1px solid var(--green-500, #38A169)"}
                        background={"white"}
                        w={{"2xl":"97px"}}
                        >
                            <Text
                            textColor={"#38A169"}
                            fontFamily={"Inter"}
                            fontSize={{"2xl":"12px"}}
                            fontStyle={"normal"}
                            fontWeight={600}
                            lineHeight={{"2xl":"16px"}}
                            >
                            backup.txt
                            
                            </Text>
                            <Image src='/right-icon (1).svg' height={{"2xl":"12px"}} w={{"2xl":"12px"}}/>
                        </Button> */}
                         <FileUpload onFileSelect={handleFileSelect}/>

                    </Box>
                </Box>


            </Box>

            <Box
            display={"flex"}
            alignItems={"flex-start"}
            gap={{"2xl":"16px",sm:"10px"}}
            alignSelf={"stretch"}
            >
                <Button
                display={"flex"}
                height={{"2xl":"32px",sm:"auto"}}
                px={{"2xl":"12px",sm:"auto"}}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{"2xl":"8px",sm:"4px"}}
                >
                    <Text
                    textColor={"blackAlpha.900"}
                    fontFamily={"Inter"}
                    fontSize={{"2xl":"14px",sm:"10px"}}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={{"2xl":"20px",sm:"auto"}}
                    >
                    Cancel
                    </Text>
                
                </Button>
                <Box
                 display={"flex"}
                 height={{"2xl":"32px",sm:"auto"}}
                 px={{"2xl":"12px",sm:"4px"}}
                 justifyContent={"center"}
                 alignItems={"center"}
                 gap={{"2xl":"8px",sm:"6px"}}
                 background={submit?"gray.100":"blackAlpha.900"}
                 borderRadius={"6px"}
                
                >
                    <Text
                    //textColor={"blackAlpha.400"}
                    textColor={submit? "blackAlpha.400":"white"}
                    fontFamily={"Inter"}
                    fontSize={{"2xl":"14px",sm:"10px"}}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={{"2xl":"20px",sm:"auto"}}
                    >
                        Begin Import
                        </Text>
                
                </Box>
            </Box>

            </Box>
        </Box>    
    </Box>
    </AlertDialogContent>
    :
    
    <AlertDialogContent w={{"2xl":"432px"}}
        
    borderRadius={"24px"}>
<>
{isOpen1?
  <Box>
    <Progressbar/> 



</Box>

    
    : <Box>
        
         
         <Box
    display={"flex"}
    justifyContent={"center"}
    flexDirection={"column"}
    alignItems={"center"}
    // h={{"2xl":"1080px"}}
    // w={{"2xl":"1920px"}}
    >
        <Box
        display={"flex"}
        w={{"2xl":"432px"}}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={{"2xl":"32px"}}
        borderRadius={"24px"}
        background={"var(--white-100, #FFF)"}
        boxShadow={"0px 24px 48px 0px rgba(90, 91, 106, 0.08), 0px 12px 24px 0px rgba(58, 58, 68, 0.08)"}
        p={{"2xl":"32px"}}
        >
           <Box
           display={"flex"}
           flexDirection={"column"}
           justifyContent={"center"}
           alignItems={"center"}
           alignSelf={"stretch"}
           >
            <Text
            textColor={"var(--gray-100, #19191D)"}
            fontFamily={"Inter"}
            fontSize={{"2xl":"20px"}}
            fontStyle={"normal"}
            fontWeight={600}
            lineHeight={{"2xl":"28px"}}
            >
            Import in Progress...
            </Text>

            <Progress value={90}/>

            </Box>
            <Box
            w={{"2xl":"368px"}}
            h={{"2xl":"8px"}}
            flexShrink={0}
            borderRadius={"4px"}
            background={"var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
            >
            <Progress 
            w={"100%"}
            h={{"2xl":"8px"}}
            flexShrink={0}
            borderRadius={"4px"}
             
            value={uploadProgress}
            colorScheme={"blackAlpha"}
           
            />
            
            </Box>
            
        </Box>
        
    </Box>
    </Box>
    }
</>

</AlertDialogContent>
}
    </AlertDialogContent>
    
    </AlertDialog>
    </>
  )
}

export default Screen2


