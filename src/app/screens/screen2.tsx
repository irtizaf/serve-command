"use client"
import { Box,Text,Image, Button, useDisclosure } from '@chakra-ui/react'
import {Valueone} from "../context/context"

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
    const {submit} = Valueone()
    const handleFileSelect = (file: File | null) => {
        if (file) {
          // Handle the selected file
          console.log('Selected File:', file);
        } else {
          // Handle reset
          console.log('File reset');
        }
      };
  return (
    <>
    <Button onClick={onOpen}>
        
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

    <AlertDialogContent>
    
    <Box
    // w={{"2xl":"1920px"}}
    // h={{"2xl":"1080px"}}
   // background={"rgba(0, 0, 0, 0.49)"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}

    >
        <Box
        w={{"2xl":"900px"}}
        h={{"2xl":"602px"}}
        borderRadius={{"2xl":"20px"}}
        background={"#FFF"}
        display={{"2xl":"flex"}}
        flexDirection={{"2xl":"column"}}
        alignItems={{"2xl":"flex-start"}}
        gap={{"2xl":"8px"}}
        px={{"2xl":"40px"}}
        py={{"2xl":"32px"}}
        >
            <Box
            display={{"2xl":"flex"}}
            flexDirection={{"2xl":"column"}}
            alignSelf={"stretch"}
            gap={{"2xl":"30px"}}
            alignItems={{"2xl":"flex-start"}}
            >
            <Box
            display={{"2xl":"flex"}}
            alignItems={{"2xl":"flex-start"}}
            gap={{"2xl":"16px"}}
            alignSelf={"stretch"}
            w={{"2xl":"820px"}}
            h={{"2xl":"62px"}}

            >
                <Box
                display={{"2xl":"flex"}}
                flexDirection={{"2xl":"column"}}
                justifyContent={{"2xl":"center"}}
                alignItems={{"2xl":"center"}}
                borderRadius={{"2xl":"100px"}}
                background={"rgba(17, 25, 12, 0.04)"}
                height={{"2xl":"40px"}}
                w={{"2xl":"40px"}}
                >
                <Image src="/info-circle.svg" w={{"2xl":"24px"}} h={{"2xl":"24px"}}/>
                </Box>
                    <Box
                    display={{"2xl":"flex"}}
                    flexDirection={{"2xl":"column"}}
                    alignItems={{"2xl":"flex-start"}}
                    gap={{"2xl":"8px"}}
                    flex={"1 0 0"}
                    >
                        <Text
                        alignSelf={"stretch"}
                        textColor={"rgba(0, 0, 0, 0.87)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"24px"}}
                        fontStyle={"normal"}
                        fontWeight={500}
                        lineHeight={{"2xl":"32px"}}
                        >
                        Prepare Your Hindsite Import
                        </Text>
                        <Text
                        h={{"2xl":"22px"}}
                        alignSelf={"stretch"}
                        textColor={"rgba(0, 0, 0, 0.64)"}
                        fontFamily={"Inter"}
                        fontSize={{"2xl":"16px"}}
                        fontStyle={"normal"}
                        fontWeight={400}
                        lineHeight={{"2xl":"24px"}}
                        >
                        To get started, you will need to export your latest backup of Hindsite.
                        </Text>
                    </Box>

            </Box>

            <Box
            display={{"2xl":"flex"}}
            flexDirection={{"2xl":"column"}}
            alignItems={{"2xl":"flex-start"}}
            alignSelf={"stretch"}
            gap={{"2xl":"16px"}}
            >
                <Box
                display={{"2xl":"flex"}}
                flexDirection={{"2xl":"column"}}
                alignItems={{"2xl":"flex-start"}}
                gap={{"2xl":"16px"}}
                alignSelf={"stretch"}
                >
                <Text
                textColor={"rgba(0, 0, 0, 0.92)"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px"}}
                fontStyle={"normal"}
                fontWeight={500}
                lineHeight={{"2xl":"24px"}}
                height={"auto"}
                w={"auto"}
                >
                Step 1. Create Hindsite Backup
                </Text>
                <Text
                w={{"2xl":"820px"}}
                h={{"2xl":"48px"}}
                textColor={"blackAlpha.700"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"24px"}

                >
                In Hindsite, go to “Daily Must Do” section and click “Run Backup”. Save the backup file somewhere you can easily find it, like on your desktop.
                </Text>
                </Box>

                <Box
                display={{"2xl":"flex"}}
                flexDirection={{"2xl":"column"}}
                alignItems={{"2xl":"flex-start"}}
                gap={{"2xl":"16px"}}
                alignSelf={"stretch"}
                >
                <Text
                textColor={"rgba(0, 0, 0, 0.92)"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px"}}
                fontStyle={"normal"}
                fontWeight={500}
                lineHeight={{"2xl":"24px"}}
                height={"auto"}
                w={"auto"}
                >
                Step 2. Unzip Hindsite Backup File
                </Text>
                <Text
                w={{"2xl":"820px"}}
                h={{"2xl":"48px"}}
                textColor={"blackAlpha.700"}
                fontFamily={"Inter"}
                fontSize={{"2xl":"16px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"24px"}

                >
                Find the backup file and use your computer to “Unzip” the file. The file should read “backup.txt”. Save this file somewhere you can easily find it.
                </Text>
                </Box>

                <Box
                w={{"2xl":"820px"}}
                h={{"2xl":"auto"}}
                display={{"2xl":"flex"}}
                flexDirection={{"2xl":"column"}}
                alignItems={{"2xl":"flex-start"}}
                alignSelf={"stretch"}
                gap={{"2xl":"32px"}}
                >
                    <Text
                    textColor={"blackAlpha.900"}
                    fontFamily={"Inter"}
                fontSize={{"2xl":"16px"}}
                fontStyle={"normal"}
                fontWeight={400}
                lineHeight={"24px"}

                    >
                    Step 3. Upload Your Backup File Here
                    </Text>

                    <Box
                    display={{"2xl":"flex"}}
                    height={{"2xl":"auto"}}
                    width={{"2xl":"820px"}}
                    flexDirection={{"2xl":"column"}}
                    justifyContent={{"2xl":"center"}}
                    alignItems={{"2xl":"center"}}
                    p={{"2xl":"10px"}}
                    gap={{"2xl":"10px"}}
                    alignSelf={"stretch"}
                    borderRadius={{"2xl":"8px"}}
                    border={{"2xl":"2px dashed"}}
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
            display={{"2xl":"flex"}}
            alignItems={{"2xl":"flex-start"}}
            gap={{"2xl":"16px"}}
            alignSelf={"stretch"}
            >
                <Button
                display={{"2xl":"flex"}}
                height={{"2xl":"32px"}}
                px={{"2xl":"12px"}}
                justifyContent={{"2xl":"center"}}
                alignItems={{"2xl":"center"}}
                gap={{"2xl":"8px"}}
                >
                    <Text
                    textColor={"blackAlpha.900"}
                    fontFamily={"Inter"}
                    fontSize={{"2xl":"14px"}}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={{"2xl":"20px"}}
                    >
                    Cancel
                    </Text>
                
                </Button>
                <Box
                 display={{"2xl":"flex"}}
                 height={{"2xl":"32px"}}
                 px={{"2xl":"12px"}}
                 justifyContent={{"2xl":"center"}}
                 alignItems={{"2xl":"center"}}
                 gap={{"2xl":"8px"}}
                 background={submit?"gray.100":"blackAlpha.900"}
                 borderRadius={{"2xl":"6px"}}
                
                >
                    <Text
                    //textColor={"blackAlpha.400"}
                    textColor={submit? "blackAlpha.400":"white"}
                    fontFamily={"Inter"}
                    fontSize={{"2xl":"14px"}}
                    fontStyle={"normal"}
                    fontWeight={600}
                    lineHeight={{"2xl":"20px"}}
                    >
                        Begin Import
                        </Text>
                
                </Box>
            </Box>

            </Box>
        </Box>    
    </Box>
    </AlertDialogContent>
    </AlertDialog>
    </>
  )
}

export default Screen2

// function value(): { submit: any } {
//     throw new Error('Function not implemented.')
// }
