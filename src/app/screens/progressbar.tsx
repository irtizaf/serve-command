"use client";
import {
  Box,
  Text,
  Progress,
  Image,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { Valueone } from "../context/context";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

const Progressbar = () => {
  const { isOpen1, setIsOpen1 } = Valueone();
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const cancelRef = React.useRef()

  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onDiscard = () => {
    // Your logic for discarding changes
    onClose(); // Close the dialog after discarding changes
  };

  // const onDiscard = () => {
  //   // Your logic for discarding changes
  //   onClose(); // Close the dialog after discarding changes
  // };
  if (isOpen == false) {
    setIsOpen(true);
  }

  return (
    <>
      {/* <Button onClick={onOpen}>discard</Button> */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent w={{ "2xl": "432px" }} borderRadius={"24px"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            // h={{"2xl":"1080px"}}
            // w={{"2xl":"1920px"}}
            flexShrink={0}
          >
            <Box
              display={"flex"}
              w={{ "2xl": "432px" }}
              p={{ "2xl": "32px" }}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={{ "2xl": "32px" }}
              borderRadius={"24px"}
              background={"var(--white-100, #FFF)"}
              boxShadow={
                "0px 24px 48px 0px rgba(90, 91, 106, 0.08), 0px 12px 24px 0px rgba(58, 58, 68, 0.08)"
              }
            >
              <Text
                textColor={"var(--primary-main, #11190C)"}
                fontFamily={"Inter"}
                fontSize={{ "2xl": "20px" }}
                fontStyle={"normal"}
                fontWeight={600}
                lineHeight={{ "2xl": "28px" }}
              >
                Import Successful!
              </Text>

              <Image
                src="/check.svg"
                w={{ "2xl": "117px" }}
                h={{ "2xl": "117px" }}
              />

              <Box
                typeof="Button"
                display={"flex"}
                height={{ "2xl": "32px" }}
                px={{ "2xl": "12px" }}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                borderRadius={"6px"}
                background={"var(--primary-main, #11190C)"}
              >
                <Text
                  textColor={"#FFF"}
                  fontFamily={"Inter"}
                  fontSize={{ "2xl": "14px" }}
                  fontStyle={"normal"}
                  fontWeight={600}
                  lineHeight={{ "2xl": "20px" }}
                >
                  Done
                </Text>
              </Box>
            </Box>
          </Box>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Progressbar;
