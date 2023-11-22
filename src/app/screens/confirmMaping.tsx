import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Image,
  Text
} from "@chakra-ui/react";

import React from "react";
import Login from "./login";
import Reset from "./reset";
import Resetcode from "./resetCode";
import NewPass from "./newpassword";
import FirstTimeNewPass from "./firsttimeloginhangepass";
import { Valueone } from "../context/context";
const ConfirmMaping = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { step } = Valueone();

  return (
    <Box 
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    h={"100vh"}
    w={"100%"}
    flexDirection={"column"}
    background={"rgba(0, 0, 0, 0.49);"}
    >
    
      {/* <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          {step == 0 && <Login />}
          {step == 1 && <Reset />}
          {step == 2 && <Resetcode />}
          {step == 3 && <NewPass />}

          {step == 4 && <FirstTimeNewPass />}
        </ModalContent>
      </Modal> */}

      <Box
      display={"flex"}
      w={{"2xl":"1465px"}}
      h={{"2xl":"850px"}}
      px={{"2xl":"40px"}}
      py={{"2xl":"32px"}}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={{"2xl":"8px"}}
      flexShrink={0}
      background={"var(--white, #FFF)"}
      borderRadius={"20px"}
      >
        {/*  in this box 3 boxes will be used down one */}
        <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={{"2xl":"30px"}}
        flex={"1 0 0"}
        alignSelf={"stretch"}
        h={"auto"}
        w={"auto"}
        >
           
          <Box
          display={"flex"}
          alignItems={"flex-start"}
          gap={{"2xl":"16px"}}
          alignSelf={"stretch"}
          w={"100%"}
          h={"auto"}
          >
            <Box
            h={"40px"}
            w={"40px"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"100px"}
            background={"var(--primary-states-hover, rgba(17, 25, 12, 0.04))"}
            >
              <Image src="/info-circle.svg" 
              w={{"2xl":"24px"}}
              h={{"2xl":"24px"}}
              />

            </Box>

            <Box
            w={"100%"}
            h={"auto"}
            alignSelf={"stretch"}
           display={"flex"}
           flexDirection={"column"}
           alignItems={"flex-start"}
           gap={{"2xl":"8px"}}
           flex={"1 0 0"}
            >
              <Text
              alignSelf={"stretch"}
              textColor={"color: var(--text-primary, rgba(0, 0, 0, 0.87))"}
              fontFamily={"Inter"}
              fontSize={{"2xl":"24px"}}
              fontStyle={"normal"}
              fontWeight={500}
              lineHeight={{"2xl":"32px"}}
              >
              Confirm Mapping of Hindsite UDFs to ServeCommand Data
              </Text>
              <Text
              alignSelf={"stretch"}
              textColor={"var(--black-alpha-700, rgba(0, 0, 0, 0.64))"}
              fontFamily={"Inter"}
              fontSize={{"2xl":"16px"}}
              fontStyle={"normal"}
              fontWeight={500}
              lineHeight={{"2xl":"24px"}}
              >
              Please review the following data templates from Hindsite and confirm where the data should live in ServeCommand
              </Text>
            </Box>

          </Box>
          <Box
          display={"flex"}
          p={{"2xl":"12px"}}
          alignSelf={"stretch"}
          borderRadius={"12px"}
          border={"1px solid var(--gray-200, #E2E8F0)"}
          background={"var(--white, #FFF)"}
          > hello
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConfirmMaping;
