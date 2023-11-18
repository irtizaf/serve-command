"use client";
import {
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
  Progress,
} from "@chakra-ui/react";
import { Valueone } from "../context/context";
import { useState } from "react";
import Progressbar from "./progressbar";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React from "react";

import FileUpload from "../uploadfile/upload";
import Import from "./import";
import ImportProgress from "./importProgress";

const Screen2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const cancelRef: any = React.useRef();
  const { submit, uploadProgress, open, setOpen, setIsOpen1, isOpen1 } =
    Valueone();

  if (uploadProgress == 100) {
    setIsOpen1(true);
  }
  console.log(isOpen1, "======", uploadProgress);
  return (
    <>
      <Button onClick={onOpen} h={"auto"}>
        <Box
          typeof="Button"
          display={"flex"}
          w={{ "2xl": "91px", sm: "auto", md: "auto" }}
          h={{ "2xl": "32px", sm: "auto", md: "auto" }}
          gap={{ "2xl": "8px", sm: "4px", md: "auto" }}
          px={{ "2xl": "12px", sm: "6px", md: "8px" }}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"6px"}
          border={"1px"}
          borderColor={"#11190C"}
        >
          <Image
            src="/left-icon.png"
            h={{ "2xl": "14px", sm: "8px", md: "8px" }}
            w={{ "2xl": "14px", sm: "8px", md: "8px" }}
          />
          <Text
            fontFamily={"Inter"}
            fontSize={{ "2xl": "14px", sm: "10px", md: "12px" }}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={{ "2xl": "20px", sm: "auto", md: "auto" }}
          >
            Import
          </Text>
        </Box>
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />

        <ModalContent>
          {open ? (
            <ModalContent
              w={{
                sm: "90%",
                "2xl": "auto",
                xl: "auto",
                lg: "auto",
                md: "auto",
              }}
            >
              <Import />
            </ModalContent>
          ) : (
            <ModalContent w={{ "2xl": "432px" }} borderRadius={"24px"}>
              <>
                {isOpen1 ? (
                  <Box>
                    <Progressbar />
                  </Box>
                ) : (
                  <Box>
                    <ImportProgress />
                  </Box>
                )}
              </>
            </ModalContent>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Screen2;
